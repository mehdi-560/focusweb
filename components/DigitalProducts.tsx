import Image from "next/image";
import Link from "next/link";

export default function DigitalProducts({ japanese = false }: { japanese?: boolean }) {
  const copy = japanese ? {
    label: "デジタルソリューション", title: "アイデアを、日々の力に。",
    introduction: "仕事、学び、創作をもっとスムーズに。FOCUSは、使いやすさと実用性を大切にしたデジタルソリューションに取り組んでいます。",
    statement: "複雑なことを、シンプルに。",
    description: "情報を整理する。考えを深める。次の一歩を進める。デザインとテクノロジーで、日々の可能性を広げます。",
    action: "お問い合わせ", href: "/ja/contact",
    offerings: [["仕事を整える", "情報整理や日々の作業を支えるデジタルツール。"], ["学びを深める", "理解を助け、実践へつなげるリソース。"], ["創作を進める", "アイデアを整理し、取り組みを前へ進める仕組み。"]],
  } : {
    label: "Digital Solutions", title: "Ideas for everyday progress.",
    introduction: "Practical digital solutions for work, learning and creative life. FOCUS brings thoughtful design and useful technology together with a clear sense of purpose.",
    statement: "Less complexity. More possibility.",
    description: "Organize information. Explore ideas. Take the next step. A straightforward approach to making digital experiences useful.",
    action: "Get in touch", href: "/contact#inquiry",
    offerings: [["Work with clarity", "Digital tools for information, organization and everyday tasks."], ["Keep learning", "Resources that connect understanding with practice."], ["Move ideas forward", "Thoughtful ways to support creative work and personal projects."]],
  };
  return (
    <section id="digital-products" className="scroll-mt-24 border-b border-primary/15 bg-surface-1" aria-labelledby="digital-heading">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] sm:min-h-[440px] lg:min-h-[620px]">
          <Image src="/images/industries/consultancy.jpg" alt={japanese ? "資料とタブレットを囲む打ち合わせのイメージ" : "Documents and a tablet on a meeting table"} fill sizes="(max-width:1023px) 100vw,50vw" className="object-cover" />
        </div>
        <div className="flex flex-col justify-center px-6 py-14 md:px-12 lg:p-16">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[.16em] text-primary">{copy.label}</p>
          <h2 id="digital-heading" className="max-w-xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">{copy.title}</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">{copy.introduction}</p>
          <h3 className="mt-9 text-xl font-semibold">{copy.statement}</h3>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">{copy.description}</p>
          <Link href={copy.href} className="mt-8 inline-flex w-fit items-center gap-8 border-b border-primary pb-2 font-semibold text-primary">{copy.action}<span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3 md:px-12">
        {copy.offerings.map(([title, description]) => <div key={title} className="border-t border-primary/25 pt-5"><h3 className="text-lg font-bold">{title}</h3><p className="mt-3 leading-relaxed text-muted">{description}</p></div>)}
      </div>
    </section>
  );
}
