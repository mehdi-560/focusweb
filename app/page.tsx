"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
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
    tagline: {
      en: "Where Japan Meets the World",
      ja: "日本と世界をつなぐ",
    },
  },
  {
    id: 2,
    src: "/images/hero/slide-2-automotive.png",
    alt: "Vehicles being loaded onto a car carrier ship for export",
    tagline: {
      en: "Precision Delivered. Globally.",
      ja: "精密さを、世界へ。",
    },
  },
  {
    id: 3,
    src: "/images/hero/slide-3-medical.png",
    alt: "State-of-the-art medical equipment facility",
    tagline: {
      en: "Trusted Technology. Every Market.",
      ja: "信頼の技術を、すべての市場へ。",
    },
  },
  {
    id: 4,
    src: "/images/hero/slide-4-warehouse.png",
    alt: "Large-scale industrial warehouse and logistics operations",
    tagline: {
      en: "Scale Without Limits.",
      ja: "限界なき規模で。",
    },
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
const networkNodes = [
  { name: "Japan",    nameJa: "日本",   role: "Headquarters", roleJa: "本社",        top: "38%", left: "78%" },
  { name: "Dubai",   nameJa: "ドバイ",  role: "Regional Hub", roleJa: "地域拠点",    top: "52%", left: "60%" },
  { name: "Canada",  nameJa: "カナダ",  role: "North America",roleJa: "北米",        top: "28%", left: "20%" },
  { name: "Pakistan",nameJa: "パキスタン",role: "South Asia",  roleJa: "南アジア",   top: "48%", left: "66%" },
];

const corporateProfile = [
  { label: "Company Name",          labelJa: "会社名",       value: "FOCUS Co., Ltd. (株式会社FOCUS)" },
  { label: "Representative Director",labelJa: "代表取締役", value: "[Representative name — to be provided]" },
  { label: "Capital",               labelJa: "資本金",       value: "[Capital amount — to be provided]" },
  { label: "Established",           labelJa: "設立",         value: "[Established date — to be provided]" },
  { label: "Headquarters",          labelJa: "本社所在地",   value: "Chuo-ku, Awaji-cho 3-chome 4-ban, 1-gou 212, Osaka 541-0047, Japan" },
  { label: "Banking Partners",      labelJa: "主要取引銀行", value: "[Banking partners — to be provided]" },
];

/* ============================================================ */
/* Section 1 — Hero                                               */
/* ============================================================ */

function Hero({ locale }: { locale: Locale }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % heroSlides.length);
        setIsTransitioning(false);
      }, 100);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      aria-label="Hero slideshow"
    >
      {/* Image layer with Ken Burns */}
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

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />

      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-xl font-bold tracking-widest text-white"
        >
          FOCUS
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {[
            { href: "/", label: "Home" },
            { href: "/industries", label: "Industries" },
            { href: "/company", label: "Company" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          {/* Language toggle */}
          <button
            onClick={() => {}}
            className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold text-white/80 transition-all hover:border-white hover:text-white"
            aria-label="Switch language"
          >
            {locale === "en" ? "日本語" : "EN"}
          </button>
        </motion.nav>
      </header>

      {/* Tagline — changes per slide */}
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
              initial={{ opacity: 0, letterSpacing: "0.3em" }}
              animate={{ opacity: 1, letterSpacing: "0.2em" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
            >
              FOCUS Co., Ltd. — Global Trading
            </motion.p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl">
              {locale === "en" ? slide.tagline.en : slide.tagline.ja}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-2 text-sm text-white/50"
            >
              {locale === "en" ? slide.tagline.ja : slide.tagline.en}
            </motion.p>
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
            className="group flex items-center"
          >
            <span
              className="block rounded-full transition-all duration-500"
              style={{
                width: index === activeSlide ? "28px" : "8px",
                height: "8px",
                backgroundColor:
                  index === activeSlide
                    ? "var(--color-primary-bright)"
                    : "rgba(255,255,255,0.35)",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

/* ============================================================ */
/* Section 2 — Our Business                                       */
/* ============================================================ */

function BusinessGrid() {
  return (
    <section
      className="bg-background px-6 py-24 md:px-12 lg:py-32"
      aria-labelledby="business-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            事業内容
          </p>
          <h2
            id="business-heading"
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
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
                {/* Real industry image */}
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-primary-bright/60" />

                {/* Text content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white">
                    {industry.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-white/50">
                    {industry.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {industry.description}
                  </p>
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
/* Section 3 — Global Network                                     */
/* ============================================================ */

function GlobalNetwork({ locale }: { locale: Locale }) {
  return (
    <section
      className="px-6 py-24 md:px-12 lg:py-32"
      style={{ background: "linear-gradient(180deg, var(--color-secondary)/8% 0%, var(--color-background) 100%)" }}
      aria-labelledby="network-heading"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            グローバルネットワーク
          </p>
          <h2
            id="network-heading"
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Global Network
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Operating from our headquarters in Osaka, Japan, with active trading
            relationships across four continents.
          </p>
        </motion.div>

        {/* Stylized map container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-3xl border border-muted/30 bg-foreground/3"
          style={{ background: "linear-gradient(135deg, #f0f7fc 0%, #e8f4fb 100%)" }}
        >
          {/* Decorative grid lines */}
          <svg
            className="absolute inset-0 h-full w-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-primary)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Network nodes */}
          {networkNodes.map((node, index) => (
            <motion.div
              key={node.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.4 + index * 0.15, ease: "easeOut" }}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              style={{ top: node.top, left: node.left }}
            >
              {/* Ping animation */}
              <span className="relative flex h-4 w-4">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-50"
                  style={{ backgroundColor: "var(--color-primary-bright)" }}
                />
                <span
                  className="relative inline-flex h-4 w-4 rounded-full border-2 border-white"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              </span>
              <span className="mt-2 whitespace-nowrap text-xs font-bold text-foreground">
                {locale === "en" ? node.name : node.nameJa}
              </span>
              <span className="whitespace-nowrap text-[10px] text-muted">
                {locale === "en" ? node.role : node.roleJa}
              </span>
            </motion.div>
          ))}

          {/* Connecting lines between Japan and each other node */}
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            {/* Japan→Dubai */}
            <motion.line
              x1="78%" y1="38%" x2="60%" y2="52%"
              stroke="var(--color-primary)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            {/* Japan→Canada */}
            <motion.line
              x1="78%" y1="38%" x2="20%" y2="28%"
              stroke="var(--color-primary)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 1 }}
            />
            {/* Japan→Pakistan */}
            <motion.line
              x1="78%" y1="38%" x2="66%" y2="48%"
              stroke="var(--color-primary)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 1.1 }}
            />
          </svg>
        </motion.div>
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            会社概要
          </p>
          <h2
            id="profile-heading"
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Corporate Profile
          </h2>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
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
              <dd className="text-sm font-semibold text-foreground sm:text-right">
                {row.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

/* ============================================================ */
/* Section 5 — Contact Footer                                     */
/* ============================================================ */

function ContactFooter() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const honeypotRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      industry: formData.get("industry"),
      message: formData.get("message"),
      honeypot: honeypotRef.current?.value ?? "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-primary-bright focus:bg-white/8";

  return (
    <footer
      className="px-6 py-20 text-white md:px-12 lg:py-28"
      style={{ background: "linear-gradient(135deg, #0a1420 0%, #0c2a40 100%)" }}
    >
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        {/* Left — company info */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary-bright">
              Contact Us
            </p>
            <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
              Start a Conversation
            </h2>
            <div className="space-y-5 text-sm text-white/70">
              <div>
                <p className="mb-1 font-semibold text-white">FOCUS Co., Ltd.</p>
                <p>
                  Chuo-ku, Awaji-cho 3-chome 4-ban, 1-gou 212
                  <br />
                  Osaka, Osaka 541-0047, Japan
                </p>
              </div>
              <div>
                <p className="mb-1 font-semibold text-white">Email</p>
                <a
                  href="mailto:jamal@thefocus.jp"
                  className="text-primary-bright transition-colors hover:text-secondary"
                >
                  jamal@thefocus.jp
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Honeypot — hidden from real users */}
            <input
              ref={honeypotRef}
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", width: 0, height: 0, opacity: 0 }}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-white/60">
                  Name <span className="text-primary-bright">*</span>
                </label>
                <input id="name" name="name" type="text" required minLength={2} className={inputClass} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-white/60">
                  Company
                </label>
                <input id="company" name="company" type="text" className={inputClass} placeholder="Company name" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-white/60">
                Email <span className="text-primary-bright">*</span>
              </label>
              <input id="email" name="email" type="email" required className={inputClass} placeholder="you@company.com" />
            </div>

            <div>
              <label htmlFor="industry" className="mb-1.5 block text-xs font-medium text-white/60">
                Industry of Interest
              </label>
              <input id="industry" name="industry" type="text" className={inputClass} placeholder="e.g. Medical Equipment, Automotive..." />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-white/60">
                Message <span className="text-primary-bright">*</span>
              </label>
              <textarea id="message" name="message" required minLength={10} rows={4} className={inputClass} placeholder="Tell us about your inquiry..." />
            </div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.02, backgroundColor: "var(--color-primary)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-colors disabled:opacity-50"
              style={{ backgroundColor: "var(--color-primary-bright)" }}
            >
              {status === "loading" ? "Sending..." : "Send Inquiry →"}
            </motion.button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                className="text-sm text-primary-bright"
              >
                ✓ Thank you — your message has been sent. We will be in touch shortly.
              </motion.p>
            )}
            {status === "error" && (
              <p role="alert" className="text-sm text-red-400">
                {errorMessage}
              </p>
            )}
          </form>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-16 max-w-6xl border-t border-white/8 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} FOCUS Co., Ltd. All rights reserved.
        </p>
        <p className="text-xs text-white/20">Osaka, Japan</p>
      </div>
    </footer>
  );
}

/* ============================================================ */
/* Homepage                                                        */
/* ============================================================ */

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <main>
      <Hero locale={locale} />
      <BusinessGrid />
      <GlobalNetwork locale={locale} />
      <CorporateProfilePreview locale={locale} />
      <ContactFooter />
    </main>
  );
}