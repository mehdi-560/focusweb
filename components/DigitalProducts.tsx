import Link from "next/link";

const offerings = [
  { title: "Focused digital tools", description: "Lightweight web tools that simplify a specific task, from organizing information to preparing a clear, useful output." },
  { title: "Practical resources", description: "Thoughtfully structured templates, planners and reference materials that make everyday work easier to manage." },
  { title: "Learning companions", description: "Workbooks and guided resources that help people put ideas into practice and build on what they have learned." },
];

export default function DigitalProducts() {
  return (
    <section id="digital-products" className="scroll-mt-28 border-b border-primary/15 bg-surface-1 px-6 py-20 md:px-12 lg:py-28" aria-labelledby="digital-heading">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">Digital Product Development</p>
            <h2 id="digital-heading" className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">Useful by design.<br />Made for your audience.</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">We develop practical digital tools and resources for businesses, educators and creators. Each product brings together a clear purpose, considered design and a straightforward experience for the people who use it.</p>
            <p lang="ja" className="mt-5 max-w-xl text-base leading-relaxed text-muted">企業・教育者・クリエイターの皆さまに向けて、利用者のニーズに合ったデジタルツールや教材を企画・制作します。使いやすさを大切に、日々の仕事や学びに役立つ形へ。</p>
          </div>
          <div className="rounded-2xl border border-primary/20 border-t-4 border-t-primary-bright bg-white p-7 md:p-9">
            <h3 className="text-xl font-bold text-foreground">A product that complements your work.</h3>
            <p className="mt-4 text-base leading-relaxed text-muted">Your understanding of your audience, supported by our research, design and development. We collaborate on resources that reflect your subject and give your community something useful to return to.</p>
            <p className="mt-4 text-base leading-relaxed text-muted">For businesses, we also develop tailored tools around a defined customer need or operational task.</p>
            <Link href="/contact#inquiry" className="mt-7 inline-flex rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90">Discuss a digital product <span className="ml-3" aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offerings.map((offering) => (
            <div key={offering.title} className="border-t border-primary/25 pt-6">
              <h3 className="text-lg font-bold text-foreground">{offering.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
