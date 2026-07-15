"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import GlobeWrapper from "@/components/home/GlobeWrapper";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================================ */
/* Types                                                          */
/* ============================================================ */
type Locale = "en" | "ja";

/* ============================================================ */
/* Data                                                           */
/* ============================================================ */

const heroSlides = [
  {
    id: 1,
    src: "/images/hero/slide-1-port.png",
    alt: "Container ship at a major global port at sunrise",
    tagline: { en: "Where Japan Meets the World", ja: "日本と世界をつなぐ" },
  },
  {
    id: 2,
    src: "/images/hero/slide-2-automotive.png",
    alt: "Vehicles being loaded onto a car carrier ship for export",
    tagline: { en: "Precision Delivered. Globally.", ja: "精密さを、世界へ。" },
  },
  {
    id: 3,
    src: "/images/hero/slide-3-medical.png",
    alt: "State-of-the-art medical equipment facility",
    tagline: { en: "Trusted Technology. Every Market.", ja: "信頼の技術を、すべての市場へ。" },
  },
  {
    id: 4,
    src: "/images/hero/slide-4-warehouse.png",
    alt: "Large-scale industrial warehouse and logistics operations",
    tagline: { en: "Scale Without Limits.", ja: "限界なき規模で。" },
  },
];

const industries = [
  {
    slug: "automotive-export",
    name: "Automotive Export",
    nameJa: "自動車輸出",
    description: "Vehicles and logistics moving from Japan to global markets.",
    image: "/images/industries/automotive-export.jpg",
  },
  {
    slug: "medical-equipment",
    name: "Medical Equipment",
    nameJa: "医療機器",
    description: "Precision medical devices trusted across international healthcare systems.",
    image: "/images/industries/medical-equipment.jpg",
  },
  {
    slug: "stationery-consumer-goods",
    name: "Stationery & Consumer Goods",
    nameJa: "文具・消費財",
    description: "Premium Japanese craftsmanship in everyday consumer products.",
    image: "/images/industries/stationery-consumer-goods.jpg",
  },
  {
    slug: "fiber-textiles",
    name: "Fiber & Textiles",
    nameJa: "繊維・テキスタイル",
    description: "Industrial-grade woven materials engineered for durability.",
    image: "/images/industries/fiber-textiles.jpg",
  },
  {
    slug: "industrial-materials",
    name: "Industrial Materials",
    nameJa: "産業資材",
    description: "Raw materials and manufacturing inputs for global industry.",
    image: "/images/industries/industrial-materials.jpg",
  },
];

const newsArticles = [
  {
    id: 1,
    slug: "focus-expands-trading-network-dubai",
    title: "FOCUS Expands Trading Network with New Dubai Partnership",
    date: "June 15, 2024",
    category: "Partnerships",
    excerpt: "FOCUS Co., Ltd. has established a new B2B trading partnership in Dubai, strengthening its Middle East distribution network.",
    image: "/images/news/news-2-dubai.jpg",
  },
  {
    id: 2,
    slug: "japanese-automotive-export-record-2026",
    title: "Japanese Automotive Exports Reach Record Volume in Q1 2026",
    date: "May 20, 2026",
    category: "Industry News",
    excerpt: "Japan's automotive export sector recorded its highest Q1 volume in five years, driven by strong demand in Middle East and South Asian markets.",
    image: "/images/news/news-3-automotive.jpg",
  },
  {
    id: 3,
    slug: "focus-osaka-headquarters-established",
    title: "FOCUS Co., Ltd. Establishes Headquarters in Osaka, Japan",
    date: "October 1, 2023",
    category: "Company News",
    excerpt: "FOCUS Co., Ltd. has formally established its headquarters in Chuo-ku, Osaka, positioning the company as a key trading bridge between Japan and global markets.",
    image: "/images/news/news-1-tokyo.jpg",
  },
];

const corporateProfile = [
  { label: "Company Name", labelJa: "会社名", value: "FOCUS Co., Ltd. (株式会社FOCUS)" },
  { label: "Representative Director", labelJa: "代表取締役", value: "Jamal Ahmad" },
  { label: "Capital", labelJa: "資本金", value: "5,000,000 ¥" },
  { label: "Established Year", labelJa: "設立", value: "2023" },
  { label: "Headquarters", labelJa: "本社所在地", value: "Chuo-ku, Awaji-cho 3-chome 4-ban, 1-gou 212, Osaka 541-0047, Japan" },
];

/* ============================================================ */
/* Animated FOCUS Logo                                            */
/* ============================================================ */


/* ============================================================ */
/* Grid + Bubble Overlay (Hero background effect)                */
/* ============================================================ */

function HeroOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const bubbles: {
      x: number; y: number; r: number; vx: number; vy: number; alpha: number; life: number; maxLife: number;
    }[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function spawnBubble() {
      if (!canvas) return;
      const r = 2 + Math.random() * 5;
      bubbles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + r,
        r,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(0.3 + Math.random() * 0.5),
        alpha: 0,
        life: 0,
        maxLife: 120 + Math.random() * 80,
      });
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Subtle grid
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 0.5;
      const gridSize = 48;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Spawn new bubbles
      if (Math.random() < 0.15) spawnBubble();

      // Update + draw bubbles
      for (let i = bubbles.length - 2; i >= 0; i--) {
        const b = bubbles[i];
        b.x += b.vx; b.y += b.vy; b.life++;
        const progress = b.life / b.maxLife;
        b.alpha = progress < 0.5 ? progress / 0.5 : progress > 1 ? (1 - progress) / 0.5 : 1;
        b.alpha *= 0.45;

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(16,150,234,${b.alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Inner glint
        const glint = ctx.createRadialGradient(b.x - b.r * 0.3, b.y - b.r * 0.3, 0, b.x, b.y, b.r);
        glint.addColorStop(0, `rgba(255,255,255,${b.alpha * 0.6})`);
        glint.addColorStop(1, `rgba(16,150,234,${b.alpha * 0.1})`);
        ctx.fillStyle = glint;
        ctx.fill();

        if (b.life >= b.maxLife || b.y < -b.r) bubbles.splice(i, 1);
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

/* ============================================================ */
/* 3D Globe — Canvas-based, corporate feel                       */
/* ============================================================ */

/* ============================================================ */
/* Section 1 — Hero                                               */
/* ============================================================ */

function Hero({ locale, setLocale }: { locale: Locale; setLocale: (l: Locale) => void }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Hero slideshow">
      {/* Images */}
      <AnimatePresence mode="sync">
        {heroSlides.map((s, index) =>
          index === activeSlide ? (
            <motion.div
              key={s.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.0 }}
                animate={{ scale: 1.08 }}
                transition={{ duration: 7, ease: "linear" }}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65 z-10" />

      {/* Grid + bubbles overlay */}
      <HeroOverlay />

      {/* Nav */}

      {/* Tagline */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`tagline-${activeSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[22px] font-semibold uppercase tracking-[0.25em] text-cyan-300"
            >
              FOCUS Co., Ltd. — Global Trading
            </motion.p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl">
              {locale === "en" ? slide.tagline.en : slide.tagline.ja}
            </h1>
            <p className="mt-1 text-base text-white/40">
              {locale === "en" ? slide.tagline.ja : slide.tagline.en}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
        {heroSlides.map((s, index) => (
          <button
            key={s.id}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className="block rounded-full transition-all duration-500"
              style={{
                width: index === activeSlide ? "28px" : "8px",
                height: "8px",
                backgroundColor: index === activeSlide ? "var(--color-primary-bright)" : "rgba(255,255,255,0.3)",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

/* ============================================================ */
/* Section 2 — Business Grid                                      */
/* ============================================================ */

function BusinessGrid() {
  return (
    <section className="bg-background px-6 py-24 md:px-12 lg:py-32" aria-labelledby="business-heading">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">事業内容</p>
          <h2 id="business-heading" className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Business
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className={index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl"
                aria-label={`Learn more about ${industry.name}`}
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-primary-bright/60" />
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
                  <p className="mt-0.5 text-xs text-white/45">{industry.nameJa}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{industry.description}</p>
                  <span className="mt-3 flex items-center gap-1 text-xs font-medium text-primary-bright opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* Section 3 — Global Network with 3D Globe                      */
/* ============================================================ */

function GlobalNetwork({ locale }: { locale: Locale }) {
  const networkNodes = [
    { name: "Japan", nameJa: "日本", role: "Headquarters", roleJa: "本社" },
    { name: "Dubai", nameJa: "ドバイ", role: "Regional Hub", roleJa: "地域拠点" },
    { name: "Canada", nameJa: "カナダ", role: "North America", roleJa: "北米" },
    { name: "Pakistan", nameJa: "パキスタン", role: "South Asia", roleJa: "南アジア" },
  ];

  return (
    <section
      className="px-6 py-24 md:px-12 lg:py-32"
      style={{ background: "linear-gradient(180deg, #f0f7fc 0%, #fcfeff 100%)" }}
      aria-labelledby="network-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">グローバルネットワーク</p>
          <h2 id="network-heading" className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Global Network
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Headquartered in Osaka, Japan — with active trade connections across the Middle East, North America, and South Asia.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <GlobeWrapper/>
          </motion.div>

          {/* Node list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {networkNodes.map((node, i) => (
              <motion.div
                key={node.name}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 rounded-2xl border border-muted/30 bg-white p-4 shadow-sm"
              >
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-bright opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {locale === "en" ? node.name : node.nameJa}
                    {i === 0 && (
                      <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">HQ</span>
                    )}
                  </p>
                  <p className="text-xs text-muted">
                    {locale === "en" ? node.role : node.roleJa}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* Section 4 — Corporate Profile                                  */
/* ============================================================ */

function CorporateProfilePreview({ locale }: { locale: Locale }) {
  return (
    <section className="bg-background px-6 py-24 md:px-12 lg:py-32" aria-labelledby="profile-heading">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">会社概要</p>
          <h2 id="profile-heading" className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Corporate Profile
          </h2>
        </motion.div>
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-muted/40"
        >
          {corporateProfile.map((row, index) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="flex flex-col gap-1 border-b border-muted/30 px-6 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
            >
              <dt className="shrink-0 text-sm font-medium text-muted">
                {locale === "en" ? row.label : row.labelJa}
              </dt>
              <dd className="text-sm font-semibold text-foreground sm:text-right">{row.value}</dd>
            </motion.div>
          ))}
        </motion.dl> 
        <motion.div
               initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                 className="mt-8 text-center"
                 >
  <Link
    href="/company"
    className="inline-flex items-center gap-2 rounded-xl border border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
  >
    Full Corporate Profile →
  </Link>
</motion.div>
        
      </div>
    </section>
  );
}

/* ============================================================ */
/* Section 5 — Newsroom Preview                                   */
/* ============================================================ */

function NewsroomPreview() {
  return (
    <section
      className="px-6 py-24 md:px-12 lg:py-32"
      style={{ background: "linear-gradient(180deg, #f0f7fc 0%, #fcfeff 100%)" }}
      aria-labelledby="news-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">ニュースルーム</p>
            <h2 id="news-heading" className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Latest News
            </h2>
          </div>
          <Link
            href="/news-room"
            className="hidden text-sm font-semibold text-primary transition-colors hover:text-primary-bright md:block"
          >
            View all →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {newsArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-muted/30 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/30"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-white">
                  {article.category}
                </span>
              </div>
              <div className="p-5">
                <time className="mb-2 block text-xs text-muted">{article.date}</time>
                <h3 className="text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-2">{article.excerpt}</p>
                <Link
                  href={`/news-room/${article.slug}`}
                  className="mt-4 block text-xs font-semibold text-primary hover:text-primary-bright transition-colors"
                >
                  Read more →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/news-room"
            className="text-sm font-semibold text-primary transition-colors hover:text-primary-bright"
          >
            View all news →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* Footer                                                         */
/* ============================================================ */


/* ============================================================ */
/* Homepage                                                        */
/* ============================================================ */

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <main>
      <Hero locale={locale} setLocale={setLocale} />
      <BusinessGrid />
      <GlobalNetwork locale={locale} />
      <CorporateProfilePreview locale={locale} />
      <NewsroomPreview />
    </main>
  );
}