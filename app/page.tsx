import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "FOCUS Co., Ltd. | Trading & Consultancy" },
  description: "Based in Osaka, FOCUS connects international trade with practical business research and digital product development.",
  alternates: { canonical: "/" },
};

const divisions = [
  {
    href: "/trading", label: "Trading Business", japanese: "貿易事業",
    image: "/images/hero/slide-1-port.png", alt: "Container ship at an international port",
    description: "Connecting Japanese products and global markets through sourcing, supply coordination and international trade.",
    detail: "Automotive · Medical · Consumer goods · Textiles · Industrial materials",
    action: "Explore our trading business",
  },
  {
    href: "/consultancy", label: "Consultancy", japanese: "コンサルティング事業",
    image: "/images/industries/consultancy.jpg", alt: "Business research documents under review",
    description: "Research for clearer business decisions. Digital products designed around the people who use them.",
    detail: "Market research · Business planning · Digital products",
    action: "Explore our consultancy",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="division-gateway px-6 pb-16 pt-14 md:px-12 md:pb-20 md:pt-20" aria-labelledby="home-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">FOCUS Co., Ltd. · Osaka, Japan</p>
            <h1 id="home-heading" className="text-4xl font-bold leading-[1.12] tracking-tight text-foreground md:text-6xl">What you need.<br /><span className="text-primary">Delivered with focus.</span></h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">International trade, business insight and purposeful digital products. Two divisions, one FOCUS.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {divisions.map((division) => (
              <Link key={division.href} href={division.href} className="division-card group flex flex-col overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-sm transition-shadow hover:shadow-xl">
                <div className="relative h-44 overflow-hidden sm:h-52 lg:h-60">
                  <Image src={division.image} alt={division.alt} fill priority sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-primary-bright" />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <p lang="ja" className="mb-2 text-sm font-medium tracking-wide text-primary">{division.japanese}</p>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">{division.label}</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">{division.description}</p>
                  <p className="mb-7 mt-4 text-sm leading-relaxed text-muted">{division.detail}</p>
                  <span className="mt-auto flex items-center justify-between border-t border-primary/15 pt-5 text-sm font-semibold text-primary">{division.action}<span aria-hidden="true">↗</span></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-between gap-3 text-sm text-muted sm:flex-row">
            <p>株式会社FOCUS · Based in Japan, working internationally.</p>
            <Link href="/company" className="font-semibold text-primary hover:underline">Our company</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
