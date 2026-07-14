import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
    default: "FOCUS Co., Ltd. | Connecting Global Infrastructure",
    template: "%s | FOCUS Co., Ltd.",
  },
  description:
    "FOCUS Co., Ltd. is a Japan-based trading company exporting automotive, medical equipment, stationery, fiber and textiles, and industrial materials to global markets including Dubai, Canada, and Pakistan.",
  keywords: [
    "Japan trading company",
    "automotive export Japan",
    "medical equipment export",
    "industrial materials trading",
    "FOCUS trading company",
    "Osaka trading company",
  ],
  openGraph: {
    title: "FOCUS Co., Ltd. | Connecting Global Infrastructure",
    description:
      "A Japan-based trading company bridging global markets across automotive, medical, textile, stationery, and industrial materials industries.",
    url: "https://www.thefocus.jp",
    siteName: "FOCUS Co., Ltd.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCUS Co., Ltd. | Connecting Global Infrastructure",
    description:
      "A Japan-based trading company bridging global markets across automotive, medical, textile, stationery, and industrial materials industries.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}