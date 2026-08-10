"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/",           label: "Home"       },
  { href: "/industries", label: "Industries" },
  { href: "/consultancy", label: "Consultancy" },
  { href: "/news-room",  label: "Newsroom"   },
  { href: "/company",    label: "Company"    },
  { href: "/contact",    label: "Contact"    },
];

const industryLinks = [
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
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(10, 20, 32, 0.72)"
            : isHome
            ? "transparent"
            : "rgba(10, 20, 32, 0.92)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: "none",
          padding: scrolled ? "10px 0" : "20px 0",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.2 }}>
              <Image
                src="/images/focus_logo.png"
                alt="FOCUS Co., Ltd."
                width={120}
                height={40}
                className="h-auto w-[90px] md:w-[110px]"
                style={{ filter: "brightness(0) invert(1)" }}
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              if (link.label === "Industries") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setIndustriesOpen(true)}
                    onMouseLeave={() => setIndustriesOpen(false)}
                  >
                    <Link href="/industries">
                      <motion.span
                        className={`relative flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                          isActive ? "text-primary-bright" : "text-white/80 hover:text-white"
                        }`}
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                        transition={{ duration: 0.15 }}
                      >
                        Industries
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
                          className="absolute top-full left-0 mt-1 w-56 overflow-hidden rounded-xl bg-dark/95 shadow-2xl"
                          style={{ backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.08)" }}
                        >
                          {industryLinks.map((ind, i) => (
                            <motion.div
                              key={ind.href}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.04 }}
                            >
                              <Link
                                href={ind.href}
                                className="block px-4 py-2.5 text-xs font-medium text-white/70 transition-all hover:bg-primary/15 hover:text-white hover:pl-5"
                              >
                                {ind.label}
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
                <Link key={link.href} href={link.href}>
                  <motion.span
                    className={`relative flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                      isActive ? "text-primary-bright" : "text-white/80 hover:text-white"
                    }`}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                    transition={{ duration: 0.15 }}
                  >
                    {link.label}
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
                href="/contact"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-bright"
              >
                Get in Touch
              </Link>
            </motion.div>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-1 md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} className="block h-0.5 w-6 bg-white" />
            <motion.span animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }} className="block h-0.5 w-6 bg-white" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} className="block h-0.5 w-6 bg-white" />
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
              className="overflow-hidden md:hidden"
              style={{ background: "rgba(10,20,32,0.97)", backdropFilter: "blur(16px)" }}
            >
              <nav className="flex flex-col gap-1 px-6 py-4">
                {navLinks.map((link) => {
                  const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive ? "bg-primary/20 text-primary-bright" : "text-white/80 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="mt-1 border-t border-white/10 pt-2">
                  <p className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/30">Industries</p>
                  {industryLinks.map((ind) => (
                    <Link key={ind.href} href={ind.href} className="block rounded-lg px-3 py-2 text-xs text-white/60 transition-colors hover:bg-white/5 hover:text-white">
                      {ind.label}
                    </Link>
                  ))}
                </div>
                <Link href="/contact" className="mt-2 rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white">
                  Get in Touch
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for non-home pages */}
      {!isHome && <div className="h-[68px]" />}
    </>
  );
}