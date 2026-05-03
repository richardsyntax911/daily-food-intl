import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/legal/LegalPlaceholder";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Daily Food Limited International — terms of use governing your engagement with this website.",
};

export default function TermsPage() {
  return (
    <LegalPlaceholder
      title="Terms of Use"
      description="The terms governing your use of dailyfoodinternational.com and our published materials."
    />
  );
}
