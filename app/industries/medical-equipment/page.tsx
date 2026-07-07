import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Medical Equipment | FOCUS Co., Ltd.",
  description:
    "FOCUS Co., Ltd. exports precision Japanese medical devices and healthcare equipment to international markets. Trusted B2B medical equipment trading from Japan to Dubai, Canada, and Pakistan.",
  openGraph: {
    title: "Medical Equipment | FOCUS Co., Ltd.",
    description:
      "Precision Japanese medical devices and healthcare equipment for international B2B markets.",
    url: "https://www.focus-trading.com/industries/medical-equipment",
    images: [{ url: "/images/industries/medical-equipment.jpg" }],
  },
};

/* ── Page Data ────────────────────────────────────────────── */
const products = [
  "Diagnostic imaging systems (MRI, CT, X-ray)",
  "Surgical instruments and operating room equipment",
  "Patient monitoring systems",
  "Dental equipment and devices",
  "Rehabilitation and physiotherapy equipment",
  "Medical consumables and disposables",
];

const faqs = [
  {
    q: "What types of medical equipment does FOCUS export from Japan?",
    a: "FOCUS sources and exports a broad range of Japanese medical devices including diagnostic imaging systems, surgical instruments, patient monitoring equipment, dental devices, and rehabilitation tools. Japan is globally recognized for precision medical manufacturing.",
  },
  {
    q: "Does FOCUS handle regulatory and compliance documentation for medical exports?",
    a: "Yes. Medical equipment exports require careful documentation including CE marks, FDA registration, and destination-country certifications. FOCUS coordinates with Japanese manufacturers and logistics partners to ensure all compliance requirements are met for the target market.",
  },
  {
    q: "Which healthcare markets does FOCUS currently serve?",
    a: "FOCUS currently supplies medical equipment to healthcare institutions and distributors in the UAE (Dubai), Canada, and Pakistan. We work with hospitals, government procurement agencies, and private healthcare distributors as B2B partners.",
  },
];

/* ── Page Component ───────────────────────────────────────── */
export default function MedicalEquipmentPage() {
  return (
    <main className="min-h-screen bg-[#fcfeff]">

      {/* Breadcrumb */}
      <nav
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-xs text-white/70"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
        <span>/</span>
        <span className="text-white">Medical Equipment</span>
      </nav>

      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/industries/medical-equipment.jpg"
          alt="Advanced medical equipment in a modern hospital facility"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1096ea]">
            医療機器
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Medical Equipment
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70">
            Precision Japanese healthcare technology for international markets.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:px-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#0a1420]">
              Japanese Precision in Every Device
            </h2>
            <p className="leading-relaxed text-[#b6bdc1] text-sm">
              Japan's medical device industry is among the most advanced in the world, producing
              equipment trusted by leading hospitals and healthcare institutions across every
              continent. FOCUS Co., Ltd. bridges Japanese medical manufacturers with international
              healthcare buyers, ensuring access to high-quality devices at competitive terms.
            </p>
            <p className="mt-4 leading-relaxed text-[#b6bdc1] text-sm">
              We work directly with certified Japanese manufacturers and authorized distributors
              to source diagnostic, surgical, and therapeutic equipment. Our team manages the
              full export process including compliance documentation, cold-chain logistics where
              required, and customs coordination at the destination market.
            </p>
          </div>

          {/* Products list */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#0c71af]">
              What We Export
            </h3>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#0a1420]">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "#1096ea" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#8eb1c7]/10 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-[#0a1420]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-[#b6bdc1]/40 bg-white p-6"
              >
                <h3 className="mb-2 text-sm font-semibold text-[#0a1420]">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-[#b6bdc1]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center md:px-12">
        <h2 className="mb-3 text-2xl font-bold text-[#0a1420]">
          Looking for Medical Equipment from Japan?
        </h2>
        <p className="mb-8 text-sm text-[#b6bdc1]">
          Speak with our team about sourcing, compliance, and delivery.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-[#0c71af] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1096ea]"
        >
          Get in Touch →
        </Link>
      </section>

      {/* Back link */}
      <div className="border-t border-[#b6bdc1]/30 px-6 py-6 md:px-12">
        <Link
          href="/industries"
          className="text-sm text-[#0c71af] hover:text-[#1096ea] transition-colors"
        >
          ← Back to All Industries
        </Link>
      </div>
    </main>
  );
}