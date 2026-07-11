import type { Metadata } from "next";
import Link from "next/link";

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Corporate Profile | FOCUS Co., Ltd.",
  description:
    "FOCUS Co., Ltd. — Japan-based international trading company established in October 2023 by Representative Director Jamal Ahmad. Headquartered in Osaka, Japan. Exporting automotive, medical, textile, stationery, and industrial materials globally.",
  openGraph: {
    title: "Corporate Profile | FOCUS Co., Ltd.",
    description:
      "Corporate profile and company history of FOCUS Co., Ltd., a Japan-based general trading company established in Osaka in 2023.",
    url: "https://www.focus-trading.com/company",
  },
};

/* ── Corporate Profile Data ───────────────────────────────── */
const profileRows = [
  { label: "Company Name",            labelJa: "会社名",         value: "FOCUS Co., Ltd." },
  { label: "Japanese Name",           labelJa: "日本語社名",     value: "株式会社FOCUS" },
  { label: "Representative Director", labelJa: "代表取締役",     value: "Jamal Ahmad" },
  { label: "Established",             labelJa: "設立",           value: "October 2023" },
  { label: "Capital",                 labelJa: "資本金",         value: "¥5,000,000" },
  {
    label: "Headquarters",
    labelJa: "本社所在地",
    value: "Chuo-ku, Awaji-cho 3-chome 4-ban, 1-gou 212, Osaka, Osaka 541-0047, Japan",
  },
  { label: "Email",                   labelJa: "メール",         value: "jamal@thefocus.jp" },
];

const industries = [
  "Automotive Export",
  "Medical Equipment",
  "Stationery & Consumer Goods",
  "Fiber & Textiles",
  "Industrial Materials",
];

const markets = ["Japan (Headquarters)", "Dubai, UAE", "Canada", "Pakistan"];

/* ── JSON-LD Structured Data ──────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FOCUS Co., Ltd.",
  alternateName: "株式会社FOCUS",
  url: "https://www.focus-trading.com",
  email: "jamal@thefocus.jp",
  foundingDate: "2023-10",
  founder: {
    "@type": "Person",
    name: "Jamal Ahmad",
    jobTitle: "Representative Director",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chuo-ku, Awaji-cho 3-chome 4-ban, 1-gou 212",
    addressLocality: "Osaka",
    addressRegion: "Osaka",
    postalCode: "541-0047",
    addressCountry: "JP",
  },
  description:
    "FOCUS Co., Ltd. is a Japan-based international trading company specializing in automotive export, medical equipment, stationery, fiber and textiles, and industrial materials.",
};

/* ── Page ─────────────────────────────────────────────────── */
export default function CompanyPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="relative px-6 py-28 text-center md:px-12 bg-dark">
          <nav
            className="absolute top-6 left-6 flex items-center gap-2 text-xs text-white/50"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Company</span>
          </nav>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-bright">
            会社概要
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Corporate Profile
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60">
            FOCUS Co., Ltd. — Bridging Japanese manufacturing excellence with international markets since 2023.
          </p>
        </section>

        {/* Profile Table */}
        <section className="mx-auto max-w-3xl px-6 py-20 md:px-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            会社基本情報
          </p>
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground">
            Company Information
          </h2>

          <dl className="overflow-hidden rounded-2xl border border-muted/40">
            {profileRows.map((row, index) => (
              <div
                key={row.label}
                className={`flex flex-col gap-1 border-b border-muted/30 px-6 py-4 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-8 ${
                  index % 2 === 0 ? "bg-surface-2" : "bg-background"
                }`}
              >
                <dt className="shrink-0 sm:w-52">
                  <span className="block text-sm font-medium text-foreground">{row.label}</span>
                  <span className="block text-xs text-muted mt-0.5">{row.labelJa}</span>
                </dt>
                <dd className="text-sm text-foreground sm:text-right">
                  {row.label === "Email" ? (
                    <a
                      href={`mailto:${row.value}`}
                      className="text-primary hover:text-primary-bright transition-colors"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Company Story */}
        <section className="bg-surface-1 px-6 py-20 md:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              会社沿革
            </p>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground">
              Company History & Background
            </h2>

            <div className="space-y-6 text-sm leading-relaxed text-muted">
              <p>
                FOCUS Co., Ltd. was established in October 2023 by Representative Director
                Jamal Ahmad, with a stated capital of ¥5,000,000, and is headquartered in
                Chuo-ku, Osaka — one of Japan's most historically significant commercial
                and trading districts. The company was incorporated with a clear strategic
                mandate: to serve as a trusted and efficient intermediary between Japan's
                world-class manufacturing sector and high-demand international markets.
              </p>

              <p>
                Founded on the recognition that access to quality Japanese products remains
                a persistent challenge for B2B buyers in emerging and growth markets, FOCUS
                was structured from the outset as a general trading company — operating
                across five core export categories: automotive vehicles and parts, precision
                medical equipment and healthcare devices, stationery and consumer goods,
                fiber and industrial textiles, and raw industrial materials. This
                diversified yet focused portfolio reflects both the breadth of Japan's
                manufacturing strength and the range of demand observed across the
                company's target markets.
              </p>

              <p>
                Since its establishment, FOCUS has developed active B2B trade relationships
                with partners in the United Arab Emirates (Dubai), Canada, and Pakistan —
                markets selected for their strong and consistent demand for quality Japanese
                goods, their strategic positioning as regional distribution hubs, and their
                alignment with the company's long-term geographic expansion plan. Operating
                from Japan's industrial heartland, FOCUS leverages its founder's
                international business expertise and established supplier networks to
                provide a reliable, transparent, and operationally efficient export channel
                for Japanese manufacturers seeking global reach without the complexity of
                managing international distribution independently.
              </p>

              <p>
                The company's founding philosophy centers on a single enduring principle:
                that quality Japanese products, when connected to the right international
                partners through a trusted and capable intermediary, create lasting
                commercial value on both sides of every transaction. FOCUS exists to be
                that connection — consistent, professional, and built for the long term.
              </p>
            </div>
          </div>
        </section>

        {/* Business Scope */}
        <section className="mx-auto max-w-3xl px-6 py-20 md:px-12">
          <div className="grid gap-12 md:grid-cols-2">

            {/* Industries */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                事業内容
              </p>
              <h2 className="mb-6 text-xl font-bold text-foreground">Business Categories</h2>
              <ul className="space-y-3">
                {industries.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-bright" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/industries"
                className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-bright transition-colors"
              >
                View all industries →
              </Link>
            </div>

            {/* Markets */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                取引市場
              </p>
              <h2 className="mb-6 text-xl font-bold text-foreground">Active Markets</h2>
              <ul className="space-y-3">
                {markets.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-dark px-6 py-20 text-center md:px-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-bright">
            お問い合わせ
          </p>
          <h2 className="mb-4 text-2xl font-bold text-white">
            Interested in Working with FOCUS?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-white/55">
            We welcome inquiries from B2B distributors, manufacturers, and
            institutional buyers across all industries we serve.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-bright px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary"
          >
            Contact Us →
          </Link>
        </section>

      </main>
    </>
  );
}