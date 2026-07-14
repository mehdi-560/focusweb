import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Newsroom | FOCUS Co., Ltd.",
  description:
    "Latest news, announcements, and press releases from FOCUS Co., Ltd. — Japan-based global trading company operating across automotive, medical, stationery, textiles, and industrial materials.",
  openGraph: {
    title: "Newsroom | FOCUS Co., Ltd.",
    description:
      "Latest news and announcements from FOCUS Co., Ltd., Japan-based global trading company.",
    url: "https://www.focus-trading.com/newsroom",
  },
};

/* ── News Data ────────────────────────────────────────────── */
const articles = [
  {
    id: 1,
    slug: "focus-expands-trading-network-dubai",
    title: "FOCUS Expands Trading Network with New Dubai Partnership",
    titleJa: "FOCUSがドバイの新パートナーシップで取引ネットワークを拡大",
    date: "2025-06-15",
    dateFormatted: "June 15, 2024",
    category: "Partnerships",
    excerpt:
      "FOCUS Co., Ltd. has established a new B2B trading partnership in Dubai, strengthening its Middle East distribution network for automotive and industrial materials exports from Japan.",
    image: "/images/news/news-2-dubai.jpg",
    imageAlt: "Dubai skyline at dusk representing FOCUS expansion into Middle East markets",
  },
  {
    id: 2,
    slug: "japanese-automotive-export-record-2026",
    title: "Japanese Automotive Exports Reach Record Volume in Q1 2026",
    titleJa: "2026年第1四半期に日本の自動車輸出が過去最高を記録",
    date: "2026-05-20",
    dateFormatted: "May 20, 2026",
    category: "Industry News",
    excerpt:
      "Japan's automotive export sector recorded its highest Q1 volume in five years, driven by strong demand in the Middle East and South Asian markets where FOCUS operates.",
    image: "/images/news/news-3-automotive.jpg",
    imageAlt: "Rows of vehicles at a Japanese port export terminal",
  },
  {
    id: 3,
    slug: "focus-osaka-headquarters-established",
    title: "FOCUS Co., Ltd. Establishes Headquarters in Osaka, Japan",
    titleJa: "株式会社FOCUSが大阪に本社を設立",
    date: "2025-04-01",
    dateFormatted: "October 1, 2023",
    category: "Company News",
    excerpt:
      "FOCUS Co., Ltd. has formally established its headquarters in Chuo-ku, Osaka, Japan, positioning the company as a key trading bridge between Japanese manufacturers and global markets.",
    image: "/images/news/news-1-tokyo.jpg",
    imageAlt: "Tokyo business district at night representing FOCUS corporate establishment in Japan",
  },
  {
    id: 4,
    slug: "global-shipping-demand-surge-2026",
    title: "Global Shipping Demand Surges as Asia-Pacific Trade Routes Expand",
    titleJa: "アジア太平洋の貿易ルート拡大で世界の海運需要が急増",
    date: "2026-03-10",
    dateFormatted: "March 10, 2026",
    category: "Industry News",
    excerpt:
      "Asia-Pacific shipping lanes are experiencing increased freight volumes in 2026, creating favorable conditions for Japanese export trading companies including FOCUS Co., Ltd.",
    image: "/images/news/news-4-shipping.jpg",
    imageAlt: "Large container ship navigating open ocean representing global shipping demand",
  },
];

const categories = ["All", "Company News", "Partnerships", "Industry News"];

/* ── Article Card ─────────────────────────────────────────── */
function ArticleCard({ article }: { article: (typeof articles)[0] }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#b6bdc1]/30 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#1096ea]/30">

      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {/* Category badge */}
        <span className="absolute top-4 left-4 rounded-full bg-[#0c71af] px-3 py-1 text-xs font-semibold text-white">
          {article.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <time
          dateTime={article.date}
          className="mb-3 text-xs font-medium text-[#b6bdc1]"
        >
          {article.dateFormatted}
        </time>

        <h2 className="mb-2 text-base font-bold leading-snug text-[#0a1420] transition-colors group-hover:text-[#0c71af]">
          {article.title}
        </h2>

        <p className="mb-1 text-xs text-[#b6bdc1]">{article.titleJa}</p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#b6bdc1]">
          {article.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-[#b6bdc1]/20 pt-4">
          <Link
            href={`/newsroom/${article.slug}`}
            className="text-xs font-semibold text-[#0c71af] transition-colors hover:text-[#1096ea]"
            aria-label={`Read full article: ${article.title}`}
          >
            Read More →
          </Link>
          <span className="text-xs text-[#b6bdc1]">FOCUS Co., Ltd.</span>
        </div>
      </div>
    </article>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function NewsroomPage() {
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
          <span className="text-white/80">Newsroom</span>
        </nav>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1096ea]">
          ニュースルーム
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Newsroom
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/60">
          Latest news, company announcements, and industry updates from
          FOCUS Co., Ltd.
        </p>
      </section>

      {/* Category filter — static for now */}
      <section className="border-b border-[#b6bdc1]/20 bg-white px-6 py-4 md:px-12">
        <div className="mx-auto flex max-w-6xl items-center gap-3 overflow-x-auto">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                i === 0
                  ? "bg-[#0c71af] text-white"
                  : "border border-[#b6bdc1]/40 text-[#b6bdc1] hover:border-[#0c71af] hover:text-[#0c71af]"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Article grid */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-[#b6bdc1]">
            Showing <span className="font-semibold text-[#0a1420]">{articles.length}</span> articles
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Featured article note */}
      <section
        className="px-6 py-16 text-center md:px-12"
        style={{ background: "linear-gradient(180deg, #f0f7fc 0%, #fcfeff 100%)" }}
      >
        <p className="text-sm text-[#b6bdc1]">
          For press inquiries, please contact{" "}
          <a
            href="mailto:jamal@thefocus.jp"
            className="font-medium text-[#0c71af] hover:text-[#1096ea] transition-colors"
          >
            jamal@thefocus.jp
          </a>
        </p>
      </section>

    </main>
  );
}