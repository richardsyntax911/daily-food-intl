import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SustainabilityContent } from "@/components/sustainability/SustainabilityContent";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Discover Daily Food Limited International's commitment to environmental stewardship, community empowerment, and responsible supply chain practices.",
};

export default function SustainabilityPage() {
  return (
    <>
      <Header />
      <SustainabilityContent />
      <Footer />
    </>
  );
}
