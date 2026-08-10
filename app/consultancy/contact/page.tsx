import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Request a Quote | Consultancy | FOCUS Co., Ltd.",
  description: "Request a quote for B2B research and consultancy services from FOCUS Co., Ltd. Market intelligence, competitor teardowns, lead research, and business plans.",
};

export default function ConsultancyContactPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="relative px-6 py-28 text-center md:px-12 bg-dark">
        <nav className="absolute top-6 left-6 flex items-center gap-2 text-xs text-white/50" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/consultancy" className="hover:text-white transition-colors">Consultancy</Link>
          <span>/</span>
          <span className="text-white/80">Request a Quote</span>
        </nav>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-bright">お見積もり</p>
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Request a Quote</h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/60">
          Tell us what you need. We'll confirm scope and a fixed price within one business day.
        </p>
      </section>

      {/* Redirect note + contact link */}
      <section className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
        <div className="rounded-2xl border border-muted/30 bg-surface-2 p-10">
          <span className="text-4xl">📋</span>
          <h2 className="mt-6 text-xl font-bold text-foreground">
            Use our contact form to get started
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            Fill in your name, company, email, and describe the decision or question you need
            researched. Mention your preferred service, budget range, and timeline in the
            message field and we will respond with a fixed-price quote within one business day.
          </p>

          {/* What to include */}
          <div className="mt-8 rounded-xl bg-surface-1 p-5 text-left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Include in your message
            </p>
            <ul className="space-y-2">
              {[
                "Service you're interested in (or 'Not sure — advise me')",
                "The decision or question you need researched",
                "Budget range: $150–300 / $300–600 / $600–1,000 / $1,000+ / Not sure",
                "Timeline: Standard 3–7 days / Urgent 48 hours / Flexible",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-muted">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-bright" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-bright"
          >
            Go to Contact Form →
          </Link>

          <p className="mt-4 text-xs text-muted">
            You'll receive scope confirmation and a fixed quote within one business day.
          </p>
        </div>
      </section>

    </main>
  );
}