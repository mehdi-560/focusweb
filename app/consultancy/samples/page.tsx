import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sample Work | B2B Research & Consultancy | FOCUS Co., Ltd.",
  description:
    "Download sample reports from FOCUS Co., Ltd. — market intelligence briefs, competitor teardowns, business plans, financial models, and B2B lead lists. All samples built on fictional companies.",
  openGraph: {
    title: "Sample Work | FOCUS Co., Ltd. Consultancy",
    description: "Download sample research and consultancy deliverables from FOCUS Co., Ltd.",
    url: "https://www.thefocus.jp/consultancy/samples",
  },
};

const samples = [
  {
    label: "Market & Competitor Intelligence",
    title: "Market & Competitor Intelligence Brief — Condensed Sample",
    description:
      "Full brief architecture: market sizing, demand drivers, customer segments, competitive landscape, and prioritized recommendations. ~20 pages in a full engagement.",
    file: "/samples/Market_Intelligence_Brief__Portfolio_Sample_.pdf",
    type: "PDF",
    icon: "📊",
  },
  {
    label: "Competitor Teardown",
    title: "Competitor Teardown — Three-Competitor Format Sample",
    description:
      "Six-part competitor profiles, side-by-side comparison matrix, positioning map, and opportunity synthesis. Three competitors profiled across a real market.",
    file: "/samples/Competitor_Teardown__Portfolio_Sample_.pdf",
    type: "PDF",
    icon: "🔍",
  },
  {
    label: "Business Plan",
    title: "Investor & Lender Business Plan — Sample",
    description:
      "Full business plan structure: executive summary, market opportunity, operations, financial highlights, funding request, and risk register. Built around a fictional company.",
    file: "/samples/Business_Plan__Portfolio_Sample_.pdf",
    type: "PDF",
    icon: "📋",
  },
  {
    label: "Financial Model",
    title: "Financial Model Summary — Three-Year Projections Sample",
    description:
      "Driver-based model summary: assumptions, three-year P&L projections, break-even analysis, cost structure, and lender/investor metrics. Companion to the business plan.",
    file: "/samples/Financial_Model_Summary__Portfolio_Sample_.pdf",
    type: "PDF",
    icon: "📈",
  },
  {
    label: "B2B Lead List",
    title: "B2B Lead List — Anonymized Sample",
    description:
      "Qualified prospect list format with decision-maker fields, company data, and source documentation columns. All data anonymized for portfolio demonstration.",
    file: "/samples/Sample_Lead_List__Anonymized_.xlsx",
    type: "XLSX",
    icon: "📁",
  },
  {
    label: "Market Intelligence Report",
    title: "Market Intelligence Report — Alternate Edition Sample",
    description:
      "Standard-tier market report format: executive summary, market sizing, competitor teardown summary, customer segments, gap analysis, and prioritized recommendations.",
    file: "/samples/Sample_Market_Intelligence_Report.pdf",
    type: "PDF",
    icon: "📊",
  },
];

export default function SamplesPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="relative px-6 py-28 text-center md:px-12 bg-dark">
        <nav className="absolute top-6 left-6 flex items-center gap-2 text-xs text-white/50" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/consultancy" className="hover:text-white transition-colors">Consultancy</Link>
          <span>/</span>
          <span className="text-white/80">Sample Work</span>
        </nav>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-bright">ポートフォリオ</p>
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Sample Work</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60">
          Download real deliverable samples. Every document is built around a fictional company
          to demonstrate structure and depth. Client work is never published.
        </p>
      </section>

      {/* Disclaimer */}
      <div className="border-b border-muted/20 bg-surface-1 px-6 py-4 text-center md:px-12">
        <p className="text-xs text-muted">
          All samples are built around fictional companies to demonstrate structure and depth.
          Client documents are never published.
        </p>
      </div>

      {/* Sample grid */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {samples.map((sample) => (
            <div
              key={sample.file}
              className="group flex flex-col rounded-2xl border border-muted/30 bg-surface-2 p-6 transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="text-3xl">{sample.icon}</span>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  sample.type === "XLSX"
                    ? "bg-green-50 text-green-700"
                    : "bg-primary/10 text-primary"
                }`}>
                  {sample.type}
                </span>
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted">
                {sample.label}
              </p>
              <h2 className="mb-3 text-sm font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                {sample.title}
              </h2>
              <p className="flex-1 text-xs leading-relaxed text-muted">{sample.description}</p>
              <a
                href={sample.file}
                download
                className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-primary px-4 py-2.5 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                Download {sample.type} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-1 px-6 py-20 text-center md:px-12">
        <h2 className="mb-3 text-2xl font-bold text-foreground">Ready to commission your own?</h2>
        <p className="mb-8 text-sm text-muted">
          Fixed price. Fixed scope. Delivered in 3–7 days.
        </p>
        <Link
          href="/contact?subject=consultancy"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-bright"
        >
          Request a quote →
        </Link>
      </section>

    </main>
  );
}