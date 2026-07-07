import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Automotive Export | FOCUS Co., Ltd.",
  description:
    "FOCUS Co., Ltd. exports Japanese vehicles and automotive parts to global markets including Dubai, Canada, and Pakistan. Reliable RoRo shipping, port logistics, and B2B vehicle sourcing from Japan.",
  openGraph: {
    title: "Automotive Export | FOCUS Co., Ltd.",
    description:
      "Exporting Japanese vehicles and automotive parts to global markets. Trusted B2B automotive trading from Japan.",
    url: "https://www.focus-trading.com/industries/automotive-export",
    images: [{ url: "/images/industries/automotive-export.jpg" }],
  },
};

/* ── Page Data ────────────────────────────────────────────── */
const products = [
  "Passenger vehicles (sedans, SUVs, minivans)",
  "Commercial trucks and heavy vehicles",
  "Hybrid and electric vehicles (HEV/EV)",
  "Used Japanese vehicles (JDM export)",
  "Automotive spare parts and components",
  "Motorcycles and light vehicles",
];

const faqs = [
  {
    q: "What types of vehicles does FOCUS export from Japan?",
    a: "FOCUS exports a wide range of Japanese vehicles including passenger cars, SUVs, commercial trucks, hybrid and electric vehicles, and used JDM (Japanese Domestic Market) vehicles. We source from major Japanese manufacturers and auction houses.",
  },
  {
    q: "Which markets does FOCUS supply automotive products to?",
    a: "Our primary automotive export markets include the United Arab Emirates (Dubai), Canada, and Pakistan. We also facilitate shipments to other regions on request through our established freight and logistics network.",
  },
  {
    q: "How does FOCUS handle vehicle shipping and logistics?",
    a: "We coordinate RoRo (Roll-on/Roll-off) and container shipping through bonded Japanese ports. FOCUS manages the full export process including documentation, customs clearance, and delivery coordination to the destination port.",
  },
];

/* ── Page Component ───────────────────────────────────────── */
export default function AutomotiveExportPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Breadcrumb */}
      <nav
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-xs text-white/70"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
        <span>/</span>
        <span className="text-white">Automotive Export</span>
      </nav>

      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/industries/automotive-export.jpg"
          alt="Japanese vehicles being exported at a port terminal"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-bright">
            自動車輸出
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Automotive Export
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70">
            Connecting Japanese automotive excellence with global markets.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:px-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
              Japan's Automotive Reach, Delivered Globally
            </h2>
            <p className="leading-relaxed text-muted text-sm">
              Japan is one of the world's largest vehicle exporters, producing some of the most
              reliable and sought-after automobiles on the global market. FOCUS Co., Ltd. acts as
              a trusted intermediary, sourcing vehicles directly from Japanese manufacturers,
              dealers, and auction houses and delivering them efficiently to buyers across the
              Middle East, North America, and South Asia.
            </p>
            <p className="mt-4 leading-relaxed text-muted text-sm">
              Our automotive export operations cover the full supply chain — from sourcing and
              inspection in Japan through to port handling, documentation, freight coordination,
              and final delivery. B2B partners rely on FOCUS for consistent quality, transparent
              pricing, and reliable timelines.
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
          Interested in Automotive Export?
        </h2>
        <p className="mb-8 text-sm text-[#b6bdc1]">
          Contact our team to discuss sourcing, pricing, and logistics.
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