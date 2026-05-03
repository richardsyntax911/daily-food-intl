import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/legal/LegalPlaceholder";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Daily Food Limited International — privacy policy and data handling practices.",
};

export default function PrivacyPage() {
  return (
    <LegalPlaceholder
      title="Privacy Policy"
      description="How Daily Food Limited International collects, uses and protects information shared with us."
    />
  );
}
