import type { Metadata } from "next";
import IndustryLayout from "../IndustryLayout";

export const metadata: Metadata = {
  title: "Medical Equipment | FOCUS Co., Ltd.",
  description: "FOCUS Co., Ltd. exports precision Japanese medical devices and healthcare equipment to international markets.",
  openGraph: {
    title: "Medical Equipment | FOCUS Co., Ltd.",
    description: "Precision Japanese medical devices for international B2B markets.",
    url: "https://www.focus-trading.com/industries/medical-equipment",
    images: [{ url: "/images/industries/medical-equipment.jpg" }],
  },
};

export default function MedicalEquipmentPage() {
  return (
    <IndustryLayout
      name="Medical Equipment"
      nameJa="医療機器"
      tagline="Precision Japanese healthcare technology for international markets."
      image="/images/industries/medical-equipment.jpg"
      imageAlt="Advanced medical equipment in a modern hospital facility"
      breadcrumb="Medical Equipment"
      description={[
        "Japan's medical device industry is among the most advanced in the world, producing equipment trusted by leading hospitals and healthcare institutions across every continent. FOCUS Co., Ltd. bridges Japanese medical manufacturers with international healthcare buyers, ensuring access to high-quality devices at competitive terms.",
        "We work directly with certified Japanese manufacturers and authorized distributors to source diagnostic, surgical, and therapeutic equipment. Our team manages the full export process including compliance documentation, cold-chain logistics where required, and customs coordination at the destination market.",
      ]}
      products={[
        "Diagnostic imaging systems (MRI, CT, X-ray)",
        "Surgical instruments and operating room equipment",
        "Patient monitoring systems",
        "Dental equipment and devices",
        "Rehabilitation and physiotherapy equipment",
        "Medical consumables and disposables",
      ]}
      faqs={[
        {
          q: "What types of medical equipment does FOCUS export from Japan?",
          a: "FOCUS sources and exports a broad range of Japanese medical devices including diagnostic imaging systems, surgical instruments, patient monitoring equipment, dental devices, and rehabilitation tools. Japan is globally recognized for precision medical manufacturing.",
        },
        {
          q: "Does FOCUS handle regulatory and compliance documentation for medical exports?",
          a: "Yes. Medical equipment exports require careful documentation including CE marks, FDA registration, and destination-country certifications. FOCUS coordinates with Japanese manufacturers and logistics partners to ensure all compliance requirements are met.",
        },
        {
          q: "Which healthcare markets does FOCUS currently serve?",
          a: "FOCUS currently supplies medical equipment to healthcare institutions and distributors in the UAE (Dubai), Canada, and Pakistan. We work with hospitals, government procurement agencies, and private healthcare distributors as B2B partners.",
        },
      ]}
      ctaText="Looking for Medical Equipment from Japan?"
    />
  );
}