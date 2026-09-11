"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const industries = [
  { href: "/industries/automotive-export",         label: "Automotive Export"           },
  { href: "/industries/medical-equipment",         label: "Medical Equipment"           },
  { href: "/industries/stationery-consumer-goods", label: "Stationery & Consumer Goods" },
  { href: "/industries/fiber-textiles",            label: "Fiber & Textiles"            },
  { href: "/industries/industrial-materials",      label: "Industrial Materials"        },
];

const companyLinks = [
  { href: "/trading", label: "Trading Business" },
  { href: "/consultancy", label: "Consultancy" },
  { href: "/consultancy#digital-products", label: "Digital Products" },
  { href: "/industries", label: "Our Industries" },
  { href: "/company",    label: "Corporate Profile" },
  { href: "/news-room",  label: "Newsroom"       },
  { href: "/contact",    label: "Contact"         },
];

export default function Footer() {
  const pathname = usePathname();
  const ja = pathname === "/ja" || pathname.startsWith("/ja/");
  const url = (path: string) => ja ? "/ja" + path : path;
  const labels: Record<string,string> = {"Automotive Export":"自動車輸出", "Medical Equipment":"医療機器", "Stationery & Consumer Goods":"文具・消費財", "Fiber & Textiles":"繊維・テキスタイル", "Industrial Materials":"産業資材", "Trading Business":"貿易事業", Consultancy:"コンサルティング", "Digital Products":"デジタル商品", "Our Industries":"取扱分野", "Corporate Profile":"会社概要", Newsroom:"ニュース", Contact:"お問い合わせ"};
  return (
    <footer
      className="text-white"
      style={{ background: "linear-gradient(120deg, #064e73 0%, #0875a8 100%)" }}
    >
      {/* CTA band */}
      <div className="border-b border-white/8 px-6 py-16 text-center md:px-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
          お問い合わせ
        </p>
        <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
          {ja ? "FOCUSにご相談ください" : "Ready to Work with FOCUS?"}
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-white/85">
          {ja ? "調達・貿易、リサーチ、デジタル商品のご相談を承ります。" : "Tell us about your trading, research or digital product needs."}
        </p>
        <Link
          href={url("/contact")}
          className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-white/90 hover:shadow-lg"
        >
          {ja ? "お問い合わせ →" : "Contact Us \u2192"}
        </Link>
      </div>

      {/* Footer grid */}
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="brand-logo mb-4">
              <Image src="/images/focus_logo.png" alt="FOCUS Co., Ltd." fill sizes="140px" />
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              {ja ? "調達・貿易、ビジネスリサーチ、デジタル商品の企画・制作。大阪を拠点に、国内外の企業やパートナーと取り組みます。" : "Trading, research and digital product development. Based in Osaka, Japan, working with businesses and partners worldwide."}
            </p>
          </div>

          {/* Industries */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
              {ja ? "取扱分野" : "Industries"}
            </p>
            <ul className="space-y-2.5">
              {industries.map((ind) => (
                <li key={ind.href}>
                  <Link
                    href={url(ind.href)}
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    {ja ? labels[ind.label] : ind.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
              {ja ? "会社情報" : "Company"}
            </p>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={url(link.href)}
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    {ja ? labels[link.label] : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
              {ja ? "お問い合わせ" : "Contact"}
            </p>
            <address className="not-italic space-y-2">
              <p className="text-sm leading-relaxed text-white/85">
                {ja ? <>〒541-0047<br />大阪府大阪市中央区淡路町<br />3丁目4番1号 212</> : <>Chuo-ku, Awaji-cho 3-chome 4-ban,<br />1-gou 212, Osaka 541-0047,<br />Japan</>}
              </p>
              <a
                href="mailto:sales@thefocus.jp"
                className="block text-sm text-white hover:text-secondary transition-colors"
              >
                sales@thefocus.jp
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/75">
            © {new Date().getFullYear()} FOCUS Co., Ltd. All rights reserved.
          </p>
          <p className="text-sm text-white/75">Osaka, Japan · 株式会社FOCUS</p>
        </div>
      </div>
    </footer>
  );
}