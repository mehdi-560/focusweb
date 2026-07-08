import Image from "next/image";
import Link from "next/link";

interface FAQ { q: string; a: string; }

interface IndustryLayoutProps {
  name:        string;
  nameJa:      string;
  tagline:     string;
  image:       string;
  imageAlt:    string;
  description: string[];
  products:    string[];
  faqs:        FAQ[];
  ctaText:     string;
  breadcrumb:  string;
}

export default function IndustryLayout({
  name, nameJa, tagline, image, imageAlt,
  description, products, faqs, ctaText, breadcrumb,
}: IndustryLayoutProps) {
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
        <span className="text-white">{breadcrumb}</span>
      </nav>

      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/30 to-foreground/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-bright">
            {nameJa}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">{name}</h1>
          <p className="mt-4 max-w-xl text-base text-white/70">{tagline}</p>
        </div>
      </section>

      {/* Description + Products */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:px-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4">
            {description.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted">{para}</p>
            ))}
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              What We Export
            </h3>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-bright" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-1 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-muted/40 bg-surface-2 p-6">
                <h3 className="mb-2 text-sm font-semibold text-foreground">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center md:px-12">
        <h2 className="mb-3 text-2xl font-bold text-foreground">{ctaText}</h2>
        <p className="mb-8 text-sm text-muted">
          Contact our team to discuss sourcing, pricing, and logistics.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-bright"
        >
          Get in Touch →
        </Link>
      </section>

      {/* Back */}
      <div className="border-t border-muted/30 px-6 py-6 md:px-12">
        <Link href="/industries" className="text-sm text-primary transition-colors hover:text-primary-bright">
          ← Back to All Industries
        </Link>
      </div>

    </main>
  );
}