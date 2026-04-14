import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsPageContent } from "@/components/news/NewsPageContent";

export const metadata: Metadata = {
  title: "News & Media",
  description:
    "Stay up to date with the latest news, press releases, product launches, and stories from Daily Food Limited International.",
};

export default function NewsPage() {
  return (
    <>
      <Header />
      <NewsPageContent />
      <Footer />
    </>
  );
}
