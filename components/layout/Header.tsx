"use client";

import LanguageSwitch from "@/components/LanguageSwitch";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/",           label: "Home"       },
  { href: "/trading", label: "Trading" },
  { href: "/consultancy", label: "Consultancy" },
  { href: "/news-room",  label: "Newsroom"   },
  { href: "/company",    label: "Company"    },
  { href: "/contact",    label: "Contact"    },
];

const industryLinks = [
  { href: "/industries", label: "All trading industries" },
  { href: "/industries/automotive-export",         label: "Automotive Export"           },
  { href: "/industries/medical-equipment",         label: "Medical Equipment"           },
  { href: "/industries/stationery-consumer-goods", label: "Stationery & Consumer Goods" },
  { href: "/industries/fiber-textiles",            label: "Fiber & Textiles"            },
  { href: "/industries/industrial-materials",      label: "Industrial Materials"        },
];

export default function Header() {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const currentPath = usePathname();
  const ja = currentPath === "/ja" || currentPath.startsWith("/ja/");
  const pathname = ja ? currentPath.slice(3) || "/" : currentPath;
  const url = (path: string) => ja ? "/ja" + (path === "/" ? "" : path) : path;
  const labels: Record<string, string> = {Home:"ホーム", Trading:"貿易事業", Consultancy:"コンサルティング", Newsroom:"ニュース", Company:"会社概要", Contact:"お問い合わせ", "All trading industries":"取扱分野一覧", "Automotive Export":"自動車輸出", "Medical Equipment":"医療機器", "Stationery & Consumer Goods":"文具・消費財", "Fiber & Textiles":"繊維・テキスタイル", "Industrial Materials":"産業資材"};
  const label = (text: string) => ja ? labels[text] || text : text;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActiveLink = (href: string) => href === "/" ? pathname === "/" : href === "/trading" ? pathname.startsWith("/trading") || pathname.startsWith("/industries") : pathname.startsWith(href);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(255, 255, 255, 0.96)" : "#ffffff",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: "1px solid rgba(41, 162, 215, 0.18)",
          padding: scrolled ? "10px 0" : "20px 0",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-12">

          {/* Logo */}
          <Link href={url("/")} className="shrink-0" aria-label={ja ? "FOCUS ホーム" : "FOCUS home"}>
            <motion.div className="brand-logo" whileHover={{ scale: 1.04 }} transition={{ duration: 0.2 }}>
              <Image
                src="/images/focus_logo.png"
                alt="FOCUS Co., Ltd."
                fill
                sizes="140px"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 xl:flex" aria-label={ja ? "メインナビゲーション" : "Main navigation"}>
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);

              if (link.label === "Trading") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setIndustriesOpen(true)}
                    onMouseLeave={() => setIndustriesOpen(false)}
                    onFocus={() => setIndustriesOpen(true)}
                    onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIndustriesOpen(false); }}
                    onKeyDown={(event) => { if (event.key === "Escape") { setIndustriesOpen(false); event.stopPropagation(); } }}
                  >
                    <Link href={url("/trading")}>
                      <motion.span
                        className={`relative flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                          isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                        }`}
                        whileHover={{ backgroundColor: "rgba(41,162,215,0.08)" }}
                        transition={{ duration: 0.15 }}
                      >
                        {label("Trading")}
                        <motion.span
                          animate={{ rotate: industriesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-[10px] opacity-60"
                        >
                          ▾
                        </motion.span>
                        {isActive && (
                          <motion.span
                            layoutId="nav-indicator"
                            className="absolute bottom-0 left-3 right-3 h-px bg-primary-bright"
                          />
                        )}
                      </motion.span>
                    </Link>

                    <AnimatePresence>
                      {industriesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.16 }}
                          className="absolute top-full left-0 mt-1 w-56 overflow-hidden rounded-xl bg-white shadow-2xl"
                          style={{ backdropFilter: "blur(16px)", border: "1px solid rgba(41,162,215,0.18)" }}
                        >
                          {industryLinks.map((ind, i) => (
                            <motion.div
                              key={ind.href}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.04 }}
                            >
                              <Link
                                href={url(ind.href)}
                                className="block px-4 py-2.5 text-sm font-medium text-foreground/80 transition-all hover:bg-primary/15 hover:text-primary hover:pl-5"
                              >
                                {label(ind.label)}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link key={link.href} href={url(link.href)}>
                  <motion.span
                    className={`relative flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                      isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                    }`}
                    whileHover={{ backgroundColor: "rgba(41,162,215,0.08)" }}
                    transition={{ duration: 0.15 }}
                  >
                    {label(link.label)}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-px bg-primary-bright"
                      />
                    )}
                  </motion.span>
                </Link>
              );
            })}

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="ml-2">
              <Link
                href={url("/contact")}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-bright"
              >
                {ja ? "お問い合わせ" : "Get in Touch"}
              </Link>
            </motion.div>
          </nav>

          <LanguageSwitch />

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 p-1 xl:hidden"
            aria-label={ja ? "メニューを開閉" : "Toggle menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} className="block h-0.5 w-6 bg-primary" />
            <motion.span animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }} className="block h-0.5 w-6 bg-primary" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} className="block h-0.5 w-6 bg-primary" />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden xl:hidden"
              style={{ background: "#ffffff", backdropFilter: "blur(16px)" }}
            >
              <nav id="mobile-navigation" aria-label={ja ? "モバイルナビゲーション" : "Mobile navigation"} className="flex max-h-[calc(100dvh-88px)] flex-col gap-1 overflow-y-auto px-6 py-4">
                {navLinks.map((link) => {
                  const isActive = isActiveLink(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={url(link.href)}
                      className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive ? "bg-primary/20 text-primary" : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                      }`}
                    >
                      {label(link.label)}
                    </Link>
                  );
                })}
                <div className="mt-1 border-t border-primary/15 pt-2">
                  <p className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted">{ja ? "取扱分野" : "Industries"}</p>
                  {industryLinks.map((ind) => (
                    <Link key={ind.href} href={url(ind.href)} className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-primary/5 hover:text-primary">
                      {label(ind.label)}
                    </Link>
                  ))}
                </div>
                <Link href={url("/contact")} className="mt-2 rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white">
                  {ja ? "お問い合わせ" : "Get in Touch"}
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for non-home pages */}
      <div className="h-[84px]" aria-hidden="true" />
    </>
  );
}