import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ── Article Data ─────────────────────────────────────────── */
const articles = [
  {
    slug: "focus-expands-trading-network-dubai",
    title: "FOCUS Expands Trading Network with New Dubai Partnership",
    titleJa: "FOCUSがドバイの新パートナーシップで取引ネットワークを拡大",
    date: "2024-06-15",
    dateFormatted: "June 15, 2024",
    category: "Partnerships",
    image: "/images/news/news-2-dubai.jpg",
    imageAlt: "Dubai skyline at dusk representing FOCUS expansion into Middle East markets",
    excerpt: "FOCUS Co., Ltd. has established a new B2B trading partnership in Dubai, strengthening its Middle East distribution network.",
    content: [
      "FOCUS Co., Ltd. is pleased to announce the establishment of a new strategic B2B trading partnership in Dubai, United Arab Emirates. This development marks a significant milestone in the company's regional expansion strategy and reinforces its commitment to building a robust international distribution network across the Middle East.",
      "Dubai's position as the UAE's premier commercial hub and one of the world's most active re-export centers makes it an ideal base for FOCUS's Middle East operations. The emirate's world-class logistics infrastructure, business-friendly regulatory environment, and deep connections to markets across the Gulf Cooperation Council (GCC), Africa, and South Asia align directly with FOCUS's trading strategy.",
      "Through this new partnership, FOCUS will expand the reach of its core export categories — including automotive vehicles and parts, medical equipment, and industrial materials — to a broader network of distributors and end buyers operating across the region. The partnership also provides FOCUS with enhanced last-mile delivery capabilities and local market intelligence that will support more responsive and efficient service for regional B2B clients.",
      "Representative Director Jamal Ahmad commented: 'Dubai has long been on our radar as a critical node in our global network. This partnership gives us a trusted, capable local presence that will allow us to serve our Middle East clients with the speed and reliability they expect from a Japanese trading company. We look forward to building a long-term relationship that creates lasting value for both sides.'",
      "FOCUS Co., Ltd. continues to actively develop its international partner network, with further announcements expected across its other key markets of Canada and Pakistan in the coming months.",
    ],
  },
  {
    slug: "japanese-automotive-export-record-2026",
    title: "Japanese Automotive Exports Reach Record Volume in Q1 2026",
    titleJa: "2026年第1四半期に日本の自動車輸出が過去最高を記録",
    date: "2026-05-20",
    dateFormatted: "May 20, 2026",
    category: "Industry News",
    image: "/images/news/news-3-automotive.jpg",
    imageAlt: "Rows of vehicles at a Japanese port export terminal",
    excerpt: "Japan's automotive export sector recorded its highest Q1 volume in five years, driven by strong demand in Middle East and South Asian markets.",
    content: [
      "Japan's automotive export sector has recorded its strongest first-quarter performance in five years, with total vehicle export volumes surpassing pre-pandemic benchmarks across multiple key destination markets. The data, compiled from Japan's Ministry of Land, Infrastructure, Transport and Tourism, reflects sustained and growing international demand for Japanese-manufactured vehicles.",
      "The Middle East and South Asia have emerged as the primary growth drivers in this record quarter. The United Arab Emirates, Saudi Arabia, and Pakistan collectively accounted for a significant share of total volume growth, with demand particularly strong in the mid-range SUV, commercial truck, and hybrid vehicle segments — categories in which Japanese manufacturers hold clear competitive advantages.",
      "For FOCUS Co., Ltd., which specializes in automotive export to Dubai and Pakistan, the broader market trend reflects the commercial environment in which the company operates. Strong underlying demand for Japanese vehicles in these markets provides a favorable backdrop for FOCUS's B2B automotive trading operations and supports the company's medium-term growth objectives in the region.",
      "Industry analysts attribute the strong Q1 performance to several converging factors: continued confidence in Japanese vehicle reliability and resale value, growing consumer preference for fuel-efficient and hybrid options in markets with rising fuel costs, and the relative stability of the Japanese yen during the period, which supported competitive export pricing.",
      "FOCUS Co., Ltd. remains well-positioned to support the automotive sourcing and export needs of B2B buyers across its target markets. Parties interested in discussing automotive export inquiries are encouraged to contact the company directly.",
    ],
  },
  {
    slug: "focus-osaka-headquarters-established",
    title: "FOCUS Co., Ltd. Establishes Headquarters in Osaka, Japan",
    titleJa: "株式会社FOCUSが大阪に本社を設立",
    date: "2025-04-01",
    dateFormatted: "October 1, 2023",
    category: "Company News",
    image: "/images/news/news-1-tokyo.jpg",
    imageAlt: "Tokyo business district at night representing FOCUS corporate establishment in Japan",
    excerpt: "FOCUS Co., Ltd. has formally established its headquarters in Chuo-ku, Osaka, positioning the company as a key trading bridge between Japan and global markets.",
    content: [
      "FOCUS Co., Ltd. has formally established its corporate headquarters at Chuo-ku, Awaji-cho 3-chome 4-ban, 1-gou 212, Osaka 541-0047, Japan. The company's location in Chuo-ku — Osaka's central business district and one of Japan's most historically significant commercial quarters — reflects FOCUS's commitment to operating at the heart of Japan's trading and manufacturing ecosystem.",
      "Osaka has served as Japan's merchant capital for centuries, and today remains one of the country's most important commercial and logistics hubs. The city's proximity to major Japanese manufacturing centers, its well-developed port and freight infrastructure, and its established community of trading companies and logistics providers make it an ideal base for an internationally focused trading company.",
      "FOCUS Co., Ltd. was founded in October 2023 by Representative Director Jamal Ahmad with a stated capital of ¥5,000,000. The company was established to address a clear market need: providing reliable, professional, and efficient export services for Japanese manufacturers seeking to reach international B2B buyers in the Middle East, North America, and South Asia.",
      "Since its establishment, FOCUS has built active trading relationships across five core categories — automotive export, medical equipment, stationery and consumer goods, fiber and textiles, and industrial materials — and has developed B2B networks in Dubai, Canada, and Pakistan.",
      "The formal establishment of the Osaka headquarters marks an important milestone in the company's development and provides a stable operational foundation for its continued international expansion. FOCUS welcomes inquiries from Japanese manufacturers, international distributors, and institutional buyers seeking a trusted Japanese trading partner.",
    ],
  },
  {
    slug: "global-shipping-demand-surge-2026",
    title: "Global Shipping Demand Surges as Asia-Pacific Trade Routes Expand",
    titleJa: "アジア太平洋の貿易ルート拡大で世界の海運需要が急増",
    date: "2026-03-10",
    dateFormatted: "March 10, 2026",
    category: "Industry News",
    image: "/images/news/news-4-shipping.jpg",
    imageAlt: "Large container ship navigating open ocean representing global shipping demand",
    excerpt: "Asia-Pacific shipping lanes are experiencing increased freight volumes in 2025, creating favorable conditions for Japanese export trading companies.",
    content: [
      "Global shipping demand has surged in early 2025, with Asia-Pacific trade routes recording some of their highest freight volumes in recent years. Container throughput at major Japanese ports including Yokohama, Kobe, and Osaka has increased year-on-year, driven by robust export demand across automotive, electronics, industrial materials, and consumer goods categories.",
      "The expansion of Asia-Pacific trade routes reflects broader shifts in global supply chain strategy, as international buyers increasingly prioritize supply chain diversification and the sourcing of high-quality manufactured goods from stable, reliable origins. Japan, with its established reputation for manufacturing precision and product reliability, has benefited significantly from this trend.",
      "For Japanese export trading companies, the surge in shipping demand presents both opportunities and operational considerations. Increased freight volumes have led to tighter capacity on certain routes, particularly those serving the Middle East and South Asian corridors — markets that are central to FOCUS Co., Ltd.'s trading operations.",
      "FOCUS Co., Ltd. monitors global shipping conditions closely and works proactively with its logistics partners to ensure freight capacity is secured in advance for client shipments. The company's established relationships with freight forwarders and shipping agents across Japan's major ports allow it to provide clients with reliable shipping timelines even during periods of elevated market demand.",
      "The broader trend toward increased Asia-Pacific trade activity is expected to continue through 2025, supported by strong consumer and industrial demand in the Middle East, continued infrastructure investment in South Asia, and stable economic conditions across North America — all markets in which FOCUS actively operates.",
    ],
  },
];

/* ── Metadata ─────────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

/* ── Static params ────────────────────────────────────────── */
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

/* ── Page ─────────────────────────────────────────────────── */
export default async function ArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-background">

      {/* Hero image */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/30 to-foreground/80" />

        {/* Breadcrumb */}
        <nav
          className="absolute top-6 left-6 z-20 flex items-center gap-2 text-xs text-white/70"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/news-room" className="hover:text-white transition-colors">Newsroom</Link>
          <span>/</span>
          <span className="text-white truncate max-w-[160px]">{article.category}</span>
        </nav>

        <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-10 text-center">
          <span className="mb-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
            {article.category}
          </span>
          <h1 className="max-w-3xl text-2xl font-bold leading-tight text-white md:text-4xl">
            {article.title}
          </h1>
          <time dateTime={article.date} className="mt-3 text-xs text-white/50">
            {article.dateFormatted}
          </time>
        </div>
      </section>

      {/* Article body */}
      <article className="mx-auto max-w-2xl px-6 py-16 md:px-12">

        {/* Japanese title */}
        <p className="mb-8 text-sm font-medium text-muted border-l-2 border-primary pl-4">
          {article.titleJa}
        </p>

        {/* Content paragraphs */}
        <div className="space-y-6">
          {article.content.map((para, i) => (
            <p key={i} className="text-sm leading-relaxed text-foreground/80">
              {para}
            </p>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-muted/30 pt-8">
          <p className="text-xs text-muted">
            Published by <span className="font-semibold text-foreground">FOCUS Co., Ltd.</span> · {article.dateFormatted}
          </p>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-surface-1 px-6 py-16 text-center md:px-12">
        <h2 className="mb-3 text-xl font-bold text-foreground">
          Interested in Working with FOCUS?
        </h2>
        <p className="mb-6 text-sm text-muted">
          Contact our team to discuss B2B trading opportunities.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-bright"
          >
            Contact Us →
          </Link>
          <Link
            href="/news-room"
            className="rounded-xl border border-muted/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            ← Back to Newsroom
          </Link>
        </div>
      </section>

    </main>
  );
}