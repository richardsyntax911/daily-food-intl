import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InvestorsPageContent } from "@/components/investors/InvestorsPageContent";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Financial information, annual reports, stock performance, and corporate governance details for Daily Food Limited International investors.",
};

export default function InvestorsPage() {
  return (
    <>
      <Header />
      <InvestorsPageContent />
      <Footer />
    </>
  );
}
