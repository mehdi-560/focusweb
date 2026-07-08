import type { Metadata } from "next";
import IndustryLayout from "../IndustryLayout";

export const metadata: Metadata = {
  title: "Automotive Export | FOCUS Co., Ltd.",
  description: "FOCUS Co., Ltd. exports Japanese vehicles and automotive parts to global markets including Dubai, Canada, and Pakistan.",
  openGraph: {
    title: "Automotive Export | FOCUS Co., Ltd.",
    description: "Exporting Japanese vehicles and automotive parts to global markets.",
    url: "https://www.focus-trading.com/industries/automotive-export",
    images: [{ url: "/images/industries/automotive-export.jpg" }],
  },
};

export default function AutomotiveExportPage() {
  return (
    <IndustryLayout
      name="Automotive Export"
      nameJa="自動車輸出"
      tagline="Connecting Japanese automotive excellence with global markets."
      image="/images/industries/automotive-export.jpg"
      imageAlt="Japanese vehicles being exported at a port terminal"
      breadcrumb="Automotive Export"
      description={[
        "Japan is one of the world's largest vehicle exporters, producing some of the most reliable and sought-after automobiles on the global market. FOCUS Co., Ltd. acts as a trusted intermediary, sourcing vehicles directly from Japanese manufacturers, dealers, and auction houses and delivering them efficiently to buyers across the Middle East, North America, and South Asia.",
        "Our automotive export operations cover the full supply chain — from sourcing and inspection in Japan through to port handling, documentation, freight coordination, and final delivery. B2B partners rely on FOCUS for consistent quality, transparent pricing, and reliable timelines.",
      ]}
      products={[
        "Passenger vehicles (sedans, SUVs, minivans)",
        "Commercial trucks and heavy vehicles",
        "Hybrid and electric vehicles (HEV/EV)",
        "Used Japanese vehicles (JDM export)",
        "Automotive spare parts and components",
        "Motorcycles and light vehicles",
      ]}
      faqs={[
        {
          q: "What types of vehicles does FOCUS export from Japan?",
          a: "FOCUS exports a wide range of Japanese vehicles including passenger cars, SUVs, commercial trucks, hybrid and electric vehicles, and used JDM vehicles. We source from major Japanese manufacturers and auction houses.",
        },
        {
          q: "Which markets does FOCUS supply automotive products to?",
          a: "Our primary automotive export markets include the United Arab Emirates (Dubai), Canada, and Pakistan. We also facilitate shipments to other regions on request through our established freight and logistics network.",
        },
        {
          q: "How does FOCUS handle vehicle shipping and logistics?",
          a: "We coordinate RoRo (Roll-on/Roll-off) and container shipping through bonded Japanese ports. FOCUS manages the full export process including documentation, customs clearance, and delivery coordination to the destination port.",
        },
      ]}
      ctaText="Interested in Automotive Export?"
    />
  );
}