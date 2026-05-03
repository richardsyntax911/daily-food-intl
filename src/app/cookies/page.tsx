import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/legal/LegalPlaceholder";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Daily Food Limited International — cookie policy and tracking practices.",
};

export default function CookiesPage() {
  return (
    <LegalPlaceholder
      title="Cookie Policy"
      description="How dailyfoodinternational.com uses cookies and similar technologies."
    />
  );
}
