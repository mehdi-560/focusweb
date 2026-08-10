import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "B2B Research & Consultancy | FOCUS Co., Ltd.",
  description:
    "Market intelligence, competitor teardowns, B2B lead research, and business plans from Osaka, Japan — for clients worldwide.",
  openGraph: {
    title: "B2B Research & Consultancy | FOCUS Co., Ltd.",
    description:
      "Market intelligence, competitor teardowns, B2B lead research, and business plans from Osaka, Japan — for clients worldwide.",
    url: "https://www.thefocus.jp/consultancy",
  },
};

const services = [
  {
    icon: "📊",
    name: "Market & Competitor Intelligence Brief",
    description:
      "Market sizing, demand drivers, customer segments, competitive landscape, and prioritized recommendations. Conclusion-first format, ~20 pages.",
    price: "From $450",
  },
  {
    icon: "🔍",
    name: "Competitor Teardown",
    description:
      "Deep profile of 2–5 competitors: positioning, pricing, acquisition channels, and each one's exploitable weakness.",
    price: "From $250",
  },
  {
    icon: "📋",
    name: "B2B Lead Research",
    description:
      "Qualified prospect lists with decision-makers, verified business emails, and documented public sources. GDPR-aware methodology.",
    price: "From $200",
  },
  {
    icon: "📈",
    name: "Business Plan & Financial Model",
    description:
      "Investor- and lender-ready business plans with a companion financial model and the editable spreadsheet behind every figure.",
    price: "From $750",
  },
  {
    icon: "🇯🇵",
    name: "Japan Market Entry Advisory",
    description:
      "Market research, partner identification, and regulatory landscape for companies entering Japan — backed by our own operating trading business.",
    price: "Custom quote",
  },
];

const steps = [
  {
    number: "01",
    title: "Send the brief",
    description:
      "Fill the 5-minute intake form. We confirm scope and fixed price within one business day.",
  },
  {
    number: "02",
    title: "Structure preview",
    description:
      "You see the report outline before research begins. No surprise rewrites.",
  },
  {
    number: "03",
    title: "Delivery in 3–7 days",
    description:
      "A decision-ready document: conclusion first, evidence in the middle, actions at the end.",
  },
  {
    number: "04",
    title: "One revision round included",
    description: "Refinements, not renegotiations.",
  },
];

const standards = [
  "Every figure carries a source or is clearly marked as an estimate with its derivation",
  "Market sizing triangulated from at least two independent methods, presented as a range",
  "Fixed scope and fixed price agreed before work starts",
  "Full confidentiality — client work is never shared, published, or reused",
];

export default function ConsultancyPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="relative px-6 py-32 text-center md:px-12 bg-dark">
        <nav className="absolute top-6 left-6 flex items-center gap-2 text-xs text-white/50" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/80">Consultancy</span>
        </nav>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-bright">
          コンサルティング事業
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
          Research that decisions can stand on.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60">
          FOCUS Co., Ltd. produces market intelligence, competitor teardowns, B2B lead research,
          and investor-grade business plans — from Osaka, for clients in Japan and worldwide.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/consultancy/samples"
            className="rounded-xl bg-primary-bright px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary"
          >
            See sample work →
          </Link>
          <Link
            href="/contact?subject=consultancy"
            className="rounded-xl border border-white/20 px-8 py-3.5 text-sm font-semibold text-white/80 transition-colors hover:border-white hover:text-white"
          >
            Request a quote
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-24 md:px-12 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">サービス内容</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">What We Deliver</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={service.name}
                className={`rounded-2xl border border-muted/30 bg-surface-2 p-6 transition-all hover:border-primary/40 hover:shadow-lg ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <span className="text-3xl">{service.icon}</span>
                <h3 className="mt-4 text-base font-bold text-foreground">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                <p className="mt-4 text-sm font-semibold text-primary">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface-1 px-6 py-24 md:px-12 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">プロセス</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5">
                <span className="text-3xl font-bold text-primary-bright/30 leading-none">{step.number}</span>
                <div>
                  <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality standards */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">品質基準</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Quality Standards</h2>
          </div>
          <ul className="space-y-4">
            {standards.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-bright" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Agency white-label strip */}
      <section className="bg-dark px-6 py-12 md:px-12">
        <div className="mx-auto max-w-4xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-white/70 max-w-xl">
            <span className="font-semibold text-white">Agencies:</span> we work white-label.
            Client-ready documents formatted for your branding, recurring monthly capacity,
            priority turnaround on retainer.
          </p>
          <Link
            href="/contact?subject=consultancy"
            className="shrink-0 rounded-xl border border-white/20 px-6 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:border-white hover:text-white"
          >
            Ask about agency terms →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 text-center md:px-12">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Tell us the decision you're facing.<br />We'll research it.
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-muted">
          Fixed price. Fixed scope. Delivered in 3–7 days.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact?subject=consultancy"
            className="rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-bright"
          >
            Request a quote →
          </Link>
          <Link
            href="/consultancy/samples"
            className="rounded-xl border border-muted/40 px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View sample work
          </Link>
        </div>
      </section>

    </main>
  );
}