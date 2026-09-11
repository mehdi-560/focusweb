import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const japaneseSans = Noto_Sans_JP({ variable: "--font-japanese", subsets: ["latin"], display: "swap", preload: false });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thefocus.jp"),
  title: {
    default: "FOCUS Co., Ltd. | Trading & Consultancy",
    template: "%s | FOCUS Co., Ltd.",
  },
  description:
    "FOCUS Co., Ltd. connects international trade with business research, consultancy and digital product development. Based in Osaka, Japan, working worldwide.",
  keywords: [
    "Japan trading company",
    "automotive export Japan",
    "medical equipment export",
    "industrial materials trading",
    "FOCUS trading company",
    "Osaka trading company",
    "business research consultancy",
    "digital product development",
  ],
  openGraph: {
    title: "FOCUS Co., Ltd. | Trading & Consultancy",
    description:
      "Japan-based trading, business research and digital product development for international markets.",
    url: "https://www.thefocus.jp",
    siteName: "FOCUS Co., Ltd.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCUS Co., Ltd. | Trading & Consultancy",
    description:
      "Japan-based trading, business research and digital product development for international markets.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png" },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const language = (await headers()).get("x-focus-language") === "ja" ? "ja" : "en";
  return (
    <html lang={language} className={`${geistSans.variable} ${geistMono.variable} ${japaneseSans.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}