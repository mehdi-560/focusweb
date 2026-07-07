import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Fiber & Textiles | FOCUS Co., Ltd.",
  description:
    "FOCUS Co., Ltd. exports Japanese industrial fiber and textile materials to global B2B markets. High-performance woven materials, technical fabrics, and industrial textiles from Japan.",
  openGraph: {
    title: "Fiber & Textiles | FOCUS Co., Ltd.",
    description:
      "Japanese industrial fiber and textile materials for global B2B manufacturers and distributors.",
    url: "https://www.focus-trading.com/industries/fiber-textiles",
    images: [{ url: "/images/industries/fiber-textiles.jpg" }],
  },
};

/* ── Page Data ────────────────────────────────────────────── */
const products = [
  "Industrial woven fabrics and technical textiles",
  "Carbon fiber and composite materials",
  "Synthetic and natural fiber yarns",
  "Non-woven and performance fabrics",
  "Protective and workwear textiles",
  "Specialty coated and laminated materials",
];

const faqs = [
  {
    q: "What types of fiber and textile products does FOCUS export?",
    a: "FOCUS exports a range of Japanese industrial and technical textile products including woven fabrics, carbon fiber composites, specialty yarns, non-woven materials, and performance fabrics used in manufacturing, construction, automotive, and protective applications.",
  },
  {
    q: "Are the textiles FOCUS exports suitable for industrial manufacturing use?",
    a: "Yes. Our primary focus is industrial and technical textiles rather than fashion fabrics. Japanese fiber technology is recognized globally for its high tensile strength, durability, and precision. These materials are used in automotive components, aerospace, construction reinforcement, and protective equipment manufacturing.",
  },
  {
    q: "What are the typical order volumes for fiber and textile exports?",
    a: "FOCUS works exclusively with B2B buyers and handles bulk orders. Minimum order quantities vary by product type and manufacturer. Our team can advise on MOQ requirements, lead times, and shipping options for your specific material needs.",
  },
];

/* ── Page Component ───────────────────────────────────────── */
export default function FiberTextilesPage() {
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
        <span className="text-white">Fiber & Textiles</span>
      </nav>

      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/industries/fiber-textiles.jpg"
          alt="Close-up of high-quality industrial woven textile material"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1096ea]">
            繊維・テキスタイル
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Fiber & Textiles
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70">
            Industrial-grade woven materials engineered for durability and performance.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:px-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#0a1420]">
              Engineered Textiles for Demanding Applications
            </h2>
            <p className="leading-relaxed text-[#b6bdc1] text-sm">
              Japan has long been at the forefront of advanced fiber and textile technology.
              From carbon fiber composites used in aerospace to high-performance industrial
              fabrics for construction and automotive applications, Japanese textile manufacturers
              set the global standard for material precision and reliability.
            </p>
            <p className="mt-4 leading-relaxed text-[#b6bdc1] text-sm">
              FOCUS Co., Ltd. connects international manufacturers and distributors with
              Japanese textile producers, facilitating the export of technical and industrial
              materials to markets in the Middle East, North America, and South Asia. We handle
              sourcing, quality verification, export documentation, and freight logistics.
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
          Need Industrial Fiber or Textile Materials?
        </h2>
        <p className="mb-8 text-sm text-[#b6bdc1]">
          Contact us to discuss material specifications, quantities, and delivery.
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