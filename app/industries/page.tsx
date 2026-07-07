import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Our Industries | FOCUS Co., Ltd.",
  description:
    "FOCUS Co., Ltd. operates across five key export industries: Automotive, Medical Equipment, Stationery & Consumer Goods, Fiber & Textiles, and Industrial Materials. Japan-based global trading company.",
  openGraph: {
    title: "Our Industries | FOCUS Co., Ltd.",
    description:
      "Five export industries. One trusted Japanese trading partner. Automotive, Medical, Stationery, Textiles, and Industrial Materials.",
    url: "https://www.focus-trading.com/industries",
  },
};

/* ── Data ─────────────────────────────────────────────────── */
const industries = [
  {
    slug: "automotive-export",
    name: "Automotive Export",
    nameJa: "自動車輸出",
    description:
      "Sourcing and exporting Japanese vehicles, commercial trucks, and automotive parts to B2B buyers in the Middle East, North America, and South Asia. Full logistics and documentation handled.",
    image: "/images/industries/automotive-export.jpg",
  },
  {
    slug: "medical-equipment",
    name: "Medical Equipment",
    nameJa: "医療機器",
    description:
      "Precision Japanese medical devices and healthcare technology for hospitals, distributors, and government procurement agencies worldwide. Compliance documentation included.",
    image: "/images/industries/medical-equipment.jpg",
  },
  {
    slug: "stationery-consumer-goods",
    name: "Stationery & Consumer Goods",
    nameJa: "文具・消費財",
    description:
      "Premium Japanese stationery, writing instruments, and consumer goods for wholesale distributors and retail chains internationally. Trusted Japanese brands at competitive terms.",
    image: "/images/industries/stationery-consumer-goods.jpg",
  },
  {
    slug: "fiber-textiles",
    name: "Fiber & Textiles",
    nameJa: "繊維・テキスタイル",
    description:
      "Industrial-grade woven materials, technical fabrics, and specialty fibers from Japan's leading textile manufacturers. For industrial buyers and material distributors globally.",
    image: "/images/industries/fiber-textiles.jpg",
  },
  {
    slug: "industrial-materials",
    name: "Industrial Materials",
    nameJa: "産業資材",
    description:
      "Steel, aluminum, chemical raw materials, and manufacturing inputs sourced from certified Japanese industrial producers. Full export documentation and freight logistics managed.",
    image: "/images/industries/industrial-materials.jpg",
  },
];

/* ── Page Component ───────────────────────────────────────── */
export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#fcfeff]">

      {/* Page Header */}
      <section
        className="relative px-6 py-28 text-center md:px-12"
        style={{ background: "linear-gradient(180deg, #0a1420 0%, #0c2d4a 100%)" }}
      >
        {/* Breadcrumb */}
        <nav
          className="absolute top-6 left-6 flex items-center gap-2 text-xs text-white/50"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/80">Industries</span>
        </nav>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1096ea]">
          事業内容
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Our Industries
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60">
          FOCUS Co., Ltd. operates across five core export industries — each backed by
          Japan's manufacturing excellence and our established global logistics network.
        </p>
      </section>

      {/* Industry Cards Grid */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {industries.map((industry, index) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className={`group relative overflow-hidden rounded-2xl border border-[#b6bdc1]/30 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#1096ea]/40 ${
                index === 4 ? "md:col-span-2" : ""
              }`}
              aria-label={`Learn more about ${industry.name}`}
            >
              {/* Image */}
              <div className={`relative w-full overflow-hidden ${index === 4 ? "h-64" : "h-52"}`}>
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={index === 4 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-[#0a1420] group-hover:text-[#0c71af] transition-colors">
                      {industry.name}
                    </h2>
                    <p className="text-xs text-[#b6bdc1] mt-0.5">{industry.nameJa}</p>
                  </div>
                  <span className="text-[#1096ea] opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-lg">
                    →
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#b6bdc1]">
                  {industry.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="px-6 py-20 text-center md:px-12"
        style={{ background: "linear-gradient(180deg, #f0f7fc 0%, #fcfeff 100%)" }}
      >
        <h2 className="mb-3 text-2xl font-bold text-[#0a1420]">
          Don't See What You're Looking For?
        </h2>
        <p className="mb-8 text-sm text-[#b6bdc1]">
          FOCUS handles a wide range of Japanese export categories. Contact us to discuss
          your specific requirements.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-[#0c71af] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1096ea]"
        >
          Contact FOCUS →
        </Link>
      </section>
    </main>
  );
}