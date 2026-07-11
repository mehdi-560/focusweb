import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Stationery & Consumer Goods | FOCUS Co., Ltd.",
  description:
    "FOCUS Co., Ltd. exports premium Japanese stationery and consumer goods to global B2B markets. Sourcing high-quality Japanese everyday products for distributors in Dubai, Canada, and Pakistan.",
  openGraph: {
    title: "Stationery & Consumer Goods | FOCUS Co., Ltd.",
    description:
      "Premium Japanese stationery and consumer goods for international B2B distributors and retailers.",
    url: "https://www.focus-trading.com/industries/stationary-consumer-goods",
    images: [{ url: "/images/industries/stationery-consumer-goods.jpg" }],
  },
};

/* ── Page Data ────────────────────────────────────────────── */
const products = [
  "Premium writing instruments (pens, markers, pencils)",
  "Professional notebooks and journals",
  "Office and school stationery sets",
  "Art and craft supplies",
  "Household and personal care consumer goods",
  "Japanese packaging and gift products",
];

const faqs = [
  {
    q: "What makes Japanese stationery products different from other markets?",
    a: "Japanese stationery is globally recognized for its exceptional quality, precision engineering, and attention to detail. Brands like Pilot, Pentel, Zebra, and Kokuyo are trusted by professionals and consumers worldwide for their reliability, smooth writing performance, and innovative design.",
  },
  {
    q: "Does FOCUS supply stationery products to retail distributors or only bulk buyers?",
    a: "FOCUS operates exclusively in the B2B space. We supply wholesale quantities to distributors, retail chains, government procurement bodies, and institutional buyers. We do not sell directly to end consumers.",
  },
  {
    q: "Can FOCUS source specific Japanese consumer goods brands on request?",
    a: "Yes. We maintain sourcing relationships with a wide range of Japanese manufacturers and distributors. If you have specific brand requirements or product categories in mind, our team can assess availability, minimum order quantities, and export feasibility.",
  },
];

/* ── Page Component ───────────────────────────────────────── */
export default function StationeryConsumerGoodsPage() {
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
        <span className="text-white">Stationery & Consumer Goods</span>
      </nav>

      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/industries/stationery-consumer-goods.jpg"
          alt="Premium Japanese stationery products arranged on a clean surface"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1096ea]">
            文具・消費財
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Stationery & Consumer Goods
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70">
            Premium Japanese craftsmanship in everyday consumer products.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:px-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#0a1420]">
              Japanese Quality in Every Detail
            </h2>
            <p className="leading-relaxed text-[#b6bdc1] text-sm">
              Japan's stationery and consumer goods industry is synonymous with quality,
              innovation, and meticulous craftsmanship. From precision-engineered writing
              instruments to thoughtfully designed household goods, Japanese consumer products
              command strong demand from buyers across the Middle East, North America, and Asia.
            </p>
            <p className="mt-4 leading-relaxed text-[#b6bdc1] text-sm">
              FOCUS Co., Ltd. sources directly from Japanese manufacturers and authorized
              wholesalers, offering B2B partners access to a curated range of stationery and
              consumer products. We handle export documentation, packaging compliance, and
              freight coordination to ensure smooth delivery to your market.
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
          Interested in Japanese Consumer Goods?
        </h2>
        <p className="mb-8 text-sm text-[#b6bdc1]">
          Tell us what you need and we will handle the sourcing and export.
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