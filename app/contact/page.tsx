"use client";

import { useState, useRef, FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────── */
/* Note: metadata export requires a separate layout or         */
/* generateMetadata function when using "use client".          */
/* SEO for this page is handled via layout.tsx metadata.       */
/* ─────────────────────────────────────────────────────────── */

const contactDetails = [
  {
    label: "Headquarters",
    labelJa: "本社所在地",
    value: "Chuo-ku, Awaji-cho 3-chome 4-ban, 1-gou 212, Osaka, Osaka 541-0047, Japan",
  },
  {
    label: "Email",
    labelJa: "メール",
    value: "jamal@thefocus.jp",
    href: "mailto:jamal@thefocus.jp",
  },
  {
    label: "Business Hours",
    labelJa: "営業時間",
    value: "Monday – Friday, 9:00 AM – 6:00 PM JST",
  },
];

/* ─────────────────────────────────────────────────────────── */
/* Contact Form                                                 */
/* ─────────────────────────────────────────────────────────── */

function ContactForm() {
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
    "w-full rounded-xl border border-[#b6bdc1]/40 bg-white px-4 py-3 text-sm text-[#0a1420] placeholder:text-[#b6bdc1] outline-none transition-all focus:border-[#1096ea] focus:ring-2 focus:ring-[#1096ea]/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input
        ref={honeypotRef}
        type="text"
        name="honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 0, height: 0, opacity: 0 }}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-[#0a1420]">
            Full Name <span className="text-[#1096ea]">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="mb-1.5 block text-xs font-medium text-[#0a1420]">
            Company Name
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            className={inputClass}
            placeholder="Your company"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-[#0a1420]">
          Email Address <span className="text-[#1096ea]">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className={inputClass}
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="contact-industry" className="mb-1.5 block text-xs font-medium text-[#0a1420]">
          Industry of Interest
        </label>
        <input
          id="contact-industry"
          name="industry"
          type="text"
          className={inputClass}
          placeholder="e.g. Automotive Export, Medical Equipment..."
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-[#0a1420]">
          Message <span className="text-[#1096ea]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          rows={5}
          className={inputClass}
          placeholder="Tell us about your inquiry, requirements, or questions..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full rounded-xl bg-[#0c71af] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1096ea] disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry →"}
      </motion.button>

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          className="rounded-xl bg-[#0c71af]/10 px-4 py-3 text-sm font-medium text-[#0c71af]"
        >
          ✓ Thank you — your message has been received. We will respond within 1–2 business days.
        </motion.p>
      )}
      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </form>
  );
}

/* ─────────────────────────────────────────────────────────── */
/* Page                                                         */
/* ─────────────────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fcfeff]">

      {/* Hero */}
      <section
        className="relative px-6 py-28 text-center md:px-12"
        style={{ background: "linear-gradient(135deg, #0a1420 0%, #0c2d4a 100%)" }}
      >
        <nav
          className="absolute top-6 left-6 flex items-center gap-2 text-xs text-white/50"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/80">Contact</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1096ea]">
            お問い合わせ
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/60">
            We welcome inquiries from B2B partners, distributors, and institutions
            across all industries we serve. Our team is based in Osaka, Japan.
          </p>
        </motion.div>
      </section>

      {/* Main content — form + info */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left — company info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-[#0a1420]">
              Get in Touch
            </h2>

            <div className="space-y-6">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-2xl border border-[#b6bdc1]/30 bg-white p-5"
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#0c71af]">
                    {detail.label}
                  </p>
                  <p className="text-[10px] text-[#b6bdc1] mb-2">{detail.labelJa}</p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-sm font-medium text-[#0a1420] hover:text-[#1096ea] transition-colors"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-sm text-[#0a1420]">{detail.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Response time note */}
            <div className="mt-6 rounded-2xl border border-[#1096ea]/20 bg-[#1096ea]/5 p-5">
              <p className="text-sm font-medium text-[#0c71af]">Response Time</p>
              <p className="mt-1 text-sm text-[#b6bdc1]">
                We aim to respond to all inquiries within 1–2 Japanese business days.
                For urgent matters, please indicate in your message.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-[#0a1420]">
              Send an Inquiry
            </h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* OpenStreetMap embed — Osaka HQ */}
      <section className="px-6 pb-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-xl font-bold text-[#0a1420]">Our Location</h2>
          <div className="overflow-hidden rounded-2xl border border-[#b6bdc1]/30 shadow-sm">
            <iframe
              title="FOCUS Co., Ltd. — Osaka Office Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=135.4940%2C34.6820%2C135.5060%2C34.6900&layer=mapnik&marker=34.6860%2C135.5000"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              allowFullScreen
              aria-label="Map showing FOCUS Co., Ltd. office location in Chuo-ku, Osaka, Japan"
            />
          </div>
          <p className="mt-3 text-xs text-[#b6bdc1]">
            Chuo-ku, Awaji-cho 3-chome 4-ban, 1-gou 212, Osaka 541-0047, Japan ·{" "}
            <a
              href="https://www.openstreetmap.org/?mlat=34.6860&mlon=135.5000#map=16/34.6860/135.5000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0c71af] hover:text-[#1096ea] transition-colors"
            >
              View larger map →
            </a>
          </p>
        </div>
      </section>

    </main>
  );
}