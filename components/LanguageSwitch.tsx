"use client";

import { usePathname } from "next/navigation";

export default function LanguageSwitch() {
  const pathname = usePathname();
  const japanese = pathname === "/ja" || pathname.startsWith("/ja/");
  const english = japanese ? pathname.slice(3) || "/" : pathname;
  function changeLanguage(event: React.MouseEvent<HTMLAnchorElement>, destination: string) {
    event.preventDefault();
    window.location.assign(destination + window.location.search + window.location.hash);
  }
  return <nav aria-label="Language / 言語" className="ml-3 flex shrink-0 items-center gap-2 text-sm font-medium text-primary">
    <a href={english} lang="en" hrefLang="en" aria-current={!japanese ? "page" : undefined} className={!japanese ? "underline underline-offset-4" : "opacity-70"} onClick={e => changeLanguage(e, english)}>EN</a>
    <span aria-hidden="true" className="opacity-30">/</span>
    <a href={"/ja" + (english === "/" ? "" : english)} lang="ja" hrefLang="ja" aria-current={japanese ? "page" : undefined} className={japanese ? "underline underline-offset-4" : "opacity-70"} onClick={e => changeLanguage(e, "/ja" + (english === "/" ? "" : english))}>日本語</a>
  </nav>;
}
