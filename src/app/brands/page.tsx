import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandsPageContent } from "@/components/brands/BrandsPageContent";

export const metadata: Metadata = {
  title: "Our Brands",
  description:
    "Explore the brand portfolio of Daily Food Limited International — Boss Baker, Golden Harvest, FreshBite, Mama's Kitchen, and TropiFruit.",
};

export default function BrandsPage() {
  return (
    <>
      <Header />
      <BrandsPageContent />
      <Footer />
    </>
  );
}
