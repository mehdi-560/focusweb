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
  { href: "/industries", label: "Our Industries" },
  { href: "/company",    label: "Corporate Profile" },
  { href: "/news-room",  label: "Newsroom"       },
  { href: "/contact",    label: "Contact"         },
];

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ background: "linear-gradient(135deg, #0a1420 0%, #0c2a40 100%)" }}
    >
      {/* CTA band */}
      <div className="border-b border-white/8 px-6 py-16 text-center md:px-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-bright">
          お問い合わせ
        </p>
        <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
          Ready to Work with FOCUS?
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-white/55">
          We welcome research and consultancy inquiries from companies worldwide..
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-primary-bright px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary hover:shadow-lg"
        >
          Contact Us →
        </Link>
      </div>

      {/* Footer grid */}
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/focus_logo.png"
              alt="FOCUS Co., Ltd."
              width={110}
              height={36}
              className="h-auto w-[100px] opacity-90 mb-4"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-xs leading-relaxed text-white/40">
              Japan-based global trading company connecting Japanese manufacturing
              excellence with international markets.
            </p>
          </div>

          {/* Industries */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Industries
            </p>
            <ul className="space-y-2.5">
              {industries.map((ind) => (
                <li key={ind.href}>
                  <Link
                    href={ind.href}
                    className="text-xs text-white/60 transition-colors hover:text-white"
                  >
                    {ind.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Company
            </p>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Contact
            </p>
            <address className="not-italic space-y-2">
              <p className="text-xs leading-relaxed text-white/60">
                Chuo-ku, Awaji-cho 3-chome 4-ban,<br />
                1-gou 212, Osaka 541-0047,<br />
                Japan
              </p>
              <a
                href="mailto:jamal@thefocus.jp"
                className="block text-xs text-primary-bright hover:text-secondary transition-colors"
              >
                jamal@thefocus.jp
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} FOCUS Co., Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/20">Osaka, Japan · 株式会社FOCUS</p>
        </div>
      </div>
    </footer>
  );
}