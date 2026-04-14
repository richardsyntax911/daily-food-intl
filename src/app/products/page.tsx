import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductsPageContent } from "@/components/products/ProductsPageContent";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the complete product catalog from Daily Food Limited International.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <ProductsPageContent />
      <Footer />
    </>
  );
}
