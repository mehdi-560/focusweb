import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Industrial Materials | FOCUS Co., Ltd.",
  description:
    "FOCUS Co., Ltd. exports Japanese industrial materials including steel, raw materials, and manufacturing inputs to global B2B markets in Dubai, Canada, and Pakistan.",
  openGraph: {
    title: "Industrial Materials | FOCUS Co., Ltd.",
    description:
      "Japanese industrial materials, steel, and manufacturing inputs for global B2B buyers.",
    url: "https://www.focus-trading.com/industries/industrial-materials",
    images: [{ url: "/images/industries/industrial-materials.jpg" }],
  },
};

/* ── Page Data ────────────────────────────────────────────── */
const products = [
  "Steel products (coils, sheets, structural steel)",
  "Aluminum and non-ferrous metals",
  "Chemical raw materials and intermediates",
  "Construction and infrastructure materials",
  "Machinery components and precision parts",
  "Packaging and industrial consumables",
];

const faqs = [
  {
    q: "What industrial materials does FOCUS source and export from Japan?",
    a: "FOCUS exports a broad range of industrial materials from Japan including steel products, aluminum and non-ferrous metals, chemical raw materials, construction materials, and precision machinery components. Japan's industrial sector is globally respected for its quality standards and manufacturing precision.",
  },
  {
    q: "How does FOCUS ensure quality control on industrial material exports?",
    a: "We source exclusively from certified Japanese manufacturers and trading partners. Quality documentation including mill certificates, material test reports, and compliance certificates are provided with each shipment. For large orders, third-party inspection can be arranged at the Japanese port of origin.",
  },
  {
    q: "What are typical lead times for industrial material orders?",
    a: "Lead times vary depending on the material type, order volume, and destination port. Standard orders typically ship within 4 to 8 weeks from order confirmation. FOCUS provides detailed shipping timelines and milestone updates throughout the process to ensure your supply chain planning is not disrupted.",
  },
];

/* ── Page Component ───────────────────────────────────────── */
export default function IndustrialMaterialsPage() {
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
        <span className="text-white">Industrial Materials</span>
      </nav>

      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/industries/industrial-materials.jpg"
          alt="Japanese steel manufacturing facility with industrial materials"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1096ea]">
            産業資材
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Industrial Materials
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70">
            Raw materials and manufacturing inputs powering global industry.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:px-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#0a1420]">
              The Foundation of Global Manufacturing
            </h2>
            <p className="leading-relaxed text-[#b6bdc1] text-sm">
              Industrial materials form the backbone of every major manufacturing sector —
              from construction and infrastructure to automotive production and electronics.
              Japan's industrial material output is among the highest quality in the world,
              with rigorous standards applied at every stage of production.
            </p>
            <p className="mt-4 leading-relaxed text-[#b6bdc1] text-sm">
              FOCUS Co., Ltd. facilitates the export of Japanese industrial materials to
              manufacturers, construction companies, and industrial distributors internationally.
              We manage the full logistics chain from Japanese factory to destination port,
              including documentation, compliance, and freight coordination.
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
          Sourcing Industrial Materials from Japan?
        </h2>
        <p className="mb-8 text-sm text-[#b6bdc1]">
          Talk to our team about specifications, volumes, and export logistics.
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