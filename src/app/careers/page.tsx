import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CareersPageContent } from "@/components/careers/CareersPageContent";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Daily Food Limited International. Explore open positions across Africa and the UK and build your career at one of Africa's fastest-growing food companies.",
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <CareersPageContent />
      <Footer />
    </>
  );
}
