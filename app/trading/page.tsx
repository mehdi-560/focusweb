import type { Metadata } from "next";
import TradingPage from "@/components/home/TradingPage";

export const metadata: Metadata = {
  title: "Trading Business",
  description: "Japan-based sourcing and international trade across automotive, medical equipment, consumer goods, textiles and industrial materials.",
  alternates: { canonical: "/trading" },
};

export default function Page() { return <TradingPage />; }
