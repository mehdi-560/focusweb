"use client";

import { useEffect, useRef, useMemo } from "react";

/* ── deterministic pseudo-random ───────────────────────────── */
function prand(a: number, b: number): number {
  const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

/* ── continent detection ────────────────────────────────────── */
function isLand(lat: number, lon: number): boolean {
  if (lat > 55  && lat < 72  && lon > -140 && lon < -60)  return true; // Canada north
  if (lat > 25  && lat < 60  && lon > -125 && lon < -65)  return true; // USA / Canada
  if (lat > 15  && lat < 30  && lon > -118 && lon < -80)  return true; // Mexico
  if (lat > 60  && lat < 84  && lon > -58  && lon < -18)  return true; // Greenland
  if (lat > -5  && lat < 12  && lon > -80  && lon < -55)  return true; // N. S. America
  if (lat > -30 && lat < 0   && lon > -78  && lon < -34)  return true; // Brazil
  if (lat > -56 && lat < -25 && lon > -75  && lon < -52)  return true; // S. Cone
  if (lat > 35  && lat < 72  && lon > -10  && lon < 40)   return true; // Europe
  if (lat > 50  && lat < 61  && lon > -10  && lon < 2)    return true; // British Isles
  if (lat > 20  && lat < 38  && lon > -10  && lon < 37)   return true; // N. Africa
  if (lat > -35 && lat < 22  && lon > -18  && lon < 52)   return true; // Sub-Saharan Africa
  if (lat > 22  && lat < 38  && lon > 35   && lon < 60)   return true; // Middle East
  if (lat > 8   && lat < 32  && lon > 68   && lon < 90)   return true; // India
  if (lat > 30  && lat < 77  && lon > 40   && lon < 145)  return true; // Asia
  if (lat > 5   && lat < 28  && lon > 97   && lon < 145)  return true; // SE Asia
  if (lat > -8  && lat < 6   && lon > 95   && lon < 141)  return true; // Indonesia
  if (lat > 30  && lat < 46  && lon > 130  && lon < 146)  return true; // Japan
  if (lat > -44 && lat < -11 && lon > 113  && lon < 155)  return true; // Australia
  if (lat > -47 && lat < -34 && lon > 166  && lon < 178)  return true; // New Zealand
  return false;
}

function generateLandPoints(count: number): [number, number][] {
  const pts: [number, number][] = [];
  for (let lat = -89; lat < 90; lat += 2.8) {
    for (let lon = -179; lon < 180; lon += 2.8) {
      const jLat = lat + (prand(lat, lon) - 0.5) * 2.4;
      const jLon = lon + (prand(lon, lat) - 0.5) * 2.4;
      if (isLand(jLat, jLon)) {
        pts.push([jLat, jLon]);
        if (pts.length >= count) return pts;
      }
    }
  }
  return pts;
}

/* ── FOCUS trade cities ─────────────────────────────────────── */
const CITIES = [
  { lat: 34.6,  lon: 135.5, label: "Japan"    }, // Osaka HQ
  { lat: 25.2,  lon: 55.3,  label: "Dubai"    },
  { lat: 45.4,  lon: -75.7, label: "Canada"   },
  { lat: 33.7,  lon: 73.1,  label: "Pakistan" },
  { lat: 40.7,  lon: -74.0, label: "USA"      },
  
];

/* connections — Japan (0) → Dubai (1), Canada (2), Pakistan (3) */
const CONNECTIONS: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
];

/* ── projection ─────────────────────────────────────────────── */
function project(
  lat: number, lon: number, rotY: number,
  cx: number, cy: number, r: number
) {
  const phi   = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + rotY) * Math.PI) / 180;
  const sinPhi = Math.sin(phi);
  return {
    sx: cx + r * sinPhi * Math.cos(theta),
    sy: cy - r * Math.cos(phi),
    z:       r * sinPhi * Math.sin(theta),
  };
}

/* ── main draw ──────────────────────────────────────────────── */
type StarDot = { x: number; y: number; s: number; o: number };

function drawGlobe(
  ctx: CanvasRenderingContext2D,
  w: number, h: number, rot: number,
  landPts: [number, number][],
  stars: StarDot[],
  arcProgress: number,
) {
  ctx.clearRect(0, 0, w, h);
  const cx = w / 2, cy = h / 2;
  const r  = Math.min(w, h) * 0.42;

  /* stars */
  for (const st of stars) {
    ctx.beginPath();
    ctx.arc(st.x * w, st.y * h, st.s, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${st.o})`;
    ctx.fill();
  }

  /* outer glow */
  const outerGlow = ctx.createRadialGradient(cx, cy, r * 0.2, cx, cy, r * 1.7);
  outerGlow.addColorStop(0,    "rgba(12,113,175,0.10)");
  outerGlow.addColorStop(0.35, "rgba(16,150,234,0.07)");
  outerGlow.addColorStop(1,    "rgba(0,0,0,0)");
  ctx.fillStyle = outerGlow;
  ctx.fillRect(0, 0, w, h);

  /* globe body */
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  const body = ctx.createRadialGradient(cx - r * 0.28, cy - r * 0.32, r * 0.04, cx, cy, r);
  body.addColorStop(0,   "#0d1f3c");
  body.addColorStop(0.4, "#071428");
  body.addColorStop(0.8, "#040e1e");
  body.addColorStop(1,   "#020b17");
  ctx.fillStyle = body;
  ctx.fill();
  ctx.restore();

  /* clip sphere */
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.clip();

  /* latitude grid */
  for (let lat = -70; lat <= 70; lat += 20) {
    ctx.beginPath();
    let pen = false;
    for (let lon = -180; lon <= 180; lon += 1.5) {
      const p = project(lat, lon, rot, cx, cy, r);
      if (p.z >= 0) {
        if (!pen) { ctx.moveTo(p.sx, p.sy); pen = true; }
        else ctx.lineTo(p.sx, p.sy);
      } else pen = false;
    }
    ctx.strokeStyle = "rgba(12,113,175,0.13)";
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  /* longitude grid */
  for (let lon = -180; lon < 180; lon += 30) {
    ctx.beginPath();
    let pen = false;
    for (let lat2 = -89; lat2 <= 89; lat2 += 1.5) {
      const p = project(lat2, lon, rot, cx, cy, r);
      if (p.z >= 0) {
        if (!pen) { ctx.moveTo(p.sx, p.sy); pen = true; }
        else ctx.lineTo(p.sx, p.sy);
      } else pen = false;
    }
    ctx.strokeStyle = "rgba(12,113,175,0.13)";
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  /* continent dots */
  for (const [lat, lon] of landPts) {
    const p = project(lat, lon, rot, cx, cy, r);
    if (p.z > 0.04) {
      const alpha = Math.min(0.65, p.z / r * 0.55 + 0.18);
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, 1.15, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(142,177,199,${alpha})`;
      ctx.fill();
    }
  }

  ctx.restore(); // end clip

  /* trade route arcs — Japan → Dubai, Canada, Pakistan */
  ctx.save();
  for (const [ai, bi] of CONNECTIONS) {
    const a = CITIES[ai], b = CITIES[bi];
    const steps = 90;
    let seg: { x: number; y: number }[] = [];
    const segs: { x: number; y: number }[][] = [];
    const dotSegs: { x: number; y: number }[][] = [];

    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const lat = a.lat + (b.lat - a.lat) * t;
      const lon = a.lon + (b.lon - a.lon) * t;
      const arcLift = Math.sin(t * Math.PI) * Math.max(14, Math.abs(b.lat - a.lat) * 0.28);
      const p = project(lat + arcLift, lon, rot, cx, cy, r);
      if (p.z > -0.02 * r) {
        seg.push({ x: p.sx, y: p.sy });
      } else {
        if (seg.length > 1) segs.push(seg);
        seg = [];
      }
    }
    if (seg.length > 1) segs.push(seg);

    /* arc line */
    for (const s of segs) {
      ctx.beginPath();
      ctx.moveTo(s[0].x, s[0].y);
      for (let i = 1; i < s.length; i++) ctx.lineTo(s[i].x, s[i].y);
      const grd = ctx.createLinearGradient(s[0].x, s[0].y, s[s.length - 1].x, s[s.length - 1].y);
      grd.addColorStop(0,   "rgba(16,150,234,0.0)");
      grd.addColorStop(0.5, "rgba(16,150,234,0.85)");
      grd.addColorStop(1,   "rgba(16,150,234,0.0)");
      ctx.strokeStyle = grd;
      ctx.lineWidth = 1.4;
      ctx.shadowColor = "#1096ea";
      ctx.shadowBlur = 8;
      ctx.stroke();
    }

    /* traveling dot along arc */
    const totalPts: { x: number; y: number }[] = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const lat = a.lat + (b.lat - a.lat) * t;
      const lon = a.lon + (b.lon - a.lon) * t;
      const arcLift = Math.sin(t * Math.PI) * Math.max(14, Math.abs(b.lat - a.lat) * 0.28);
      const p = project(lat + arcLift, lon, rot, cx, cy, r);
      if (p.z > -0.02 * r) totalPts.push({ x: p.sx, y: p.sy });
    }
    if (totalPts.length > 0) {
      const offset = (ai * 0.33 + arcProgress) % 1;
      const dotIdx = Math.floor(offset * totalPts.length);
      const dp = totalPts[Math.min(dotIdx, totalPts.length - 1)];
      ctx.beginPath();
      ctx.arc(dp.x, dp.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.shadowColor = "#1096ea";
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }
  ctx.shadowBlur = 0;
  ctx.restore();

  /* city nodes */
  for (const city of CITIES) {
    const p = project(city.lat, city.lon, rot, cx, cy, r);
    if (p.z > 0.03 * r) {
      const alpha = Math.min(1, p.z / r * 0.75 + 0.35);
      /* outer pulse ring */
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, 7, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(16,150,234,${0.12 * alpha})`;
      ctx.fill();
      /* mid ring */
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(16,150,234,${0.5 * alpha})`;
      ctx.shadowColor = "#1096ea";
      ctx.shadowBlur = 10;
      ctx.fill();
      /* core */
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, 1.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;

      /* label */
      ctx.font = "600 10px sans-serif";
      ctx.fillStyle = `rgba(255,255,255,${alpha * 0.85})`;
      ctx.textAlign = "center";
      ctx.fillText(city.label, p.sx, p.sy - 12);
    }
  }

  /* atmospheric rim */
  const atm = ctx.createRadialGradient(cx, cy, r * 0.86, cx, cy, r * 1.14);
  atm.addColorStop(0,    "rgba(0,0,0,0)");
  atm.addColorStop(0.42, "rgba(16,150,234,0.18)");
  atm.addColorStop(0.72, "rgba(12,113,175,0.28)");
  atm.addColorStop(1,    "rgba(0,0,0,0)");
  ctx.beginPath();
  ctx.arc(cx, cy, r * 1.14, 0, Math.PI * 2);
  ctx.fillStyle = atm;
  ctx.fill();

  /* specular highlight */
  const spec = ctx.createRadialGradient(cx - r * 0.42, cy - r * 0.38, 0, cx - r * 0.1, cy - r * 0.1, r * 1.05);
  spec.addColorStop(0,   "rgba(180,225,255,0.055)");
  spec.addColorStop(0.5, "rgba(12,113,175,0.018)");
  spec.addColorStop(1,   "rgba(0,0,0,0)");
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = spec;
  ctx.fill();
  ctx.restore();
}

/* ── Globe canvas component ─────────────────────────────────── */
export default function Globe3D() {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const rotRef       = useRef(20);
  const rafRef       = useRef(0);
  const progressRef  = useRef(0);

  const landPoints = useMemo(() => generateLandPoints(700), []);
  const stars = useMemo(
    () =>
      Array.from({ length: 100 }, (_, i) => ({
        x: prand(i, i + 5),
        y: prand(i + 3, i),
        s: prand(i, i * 2) * 0.9 + 0.2,
        o: prand(i * 3, i) * 0.35 + 0.05,
      })),
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr  = Math.min(window.devicePixelRatio || 1, 2);
    const size = canvas.offsetWidth || 500;

    canvas.width  = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width  = `${size}px`;
    canvas.style.height = `${size}px`;

    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    let last = 0;
    const animate = (ts: number) => {
      const dt = Math.min(ts - last, 32);
      last = ts;
      rotRef.current      += dt * 0.006;
      progressRef.current  = (progressRef.current + dt * 0.00025) % 1;
      drawGlobe(ctx, size, size, rotRef.current, landPoints, stars, progressRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [landPoints, stars]);

  return (
    <div
      className="mx-auto w-full"
      style={{ maxWidth: 500, aspectRatio: "1 / 1" }}
      aria-label="Globe showing FOCUS trade routes: Japan to Dubai, Canada, and Pakistan"
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}