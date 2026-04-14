import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Daily Food Limited International. Find our office locations, phone numbers, email addresses, or send us a message directly.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactPageContent />
      <Footer />
    </>
  );
}
