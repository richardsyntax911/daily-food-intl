"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  Send,
  CheckCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { offices } from "@/data/company";
import { COMPANY } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Subject options                                                    */
/* ------------------------------------------------------------------ */
const subjectOptions = [
  "General Inquiry",
  "Product Information",
  "Partnerships & Distribution",
  "Careers",
  "Media & Press",
  "Investor Relations",
  "Other",
];

/* ------------------------------------------------------------------ */
/*  Office type badge color                                            */
/* ------------------------------------------------------------------ */
function officeBadgeColor(type: string) {
  switch (type) {
    case "Global Headquarters":
      return "bg-primary/10 text-primary";
    case "Regional Office":
      return "bg-secondary/20 text-amber-800";
    case "International Office":
      return "bg-accent/10 text-accent";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export function ContactPageContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="bg-coral py-24 md:py-32">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <h1 className="font-heading text-4xl text-white md:text-5xl lg:text-6xl">
                Contact Us
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                Have a question, partnership inquiry, or just want to say hello?
                We&apos;d love to hear from you.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  FORM + OFFICES TWO-COLUMN                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* ---- Contact Form ---- */}
            <ScrollReveal direction="left">
              <div>
                <SectionHeading
                  eyebrow="Send a Message"
                  title="Get in Touch"
                  alignment="left"
                />

                {submitted ? (
                  <div className="flex flex-col items-center rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
                    <CheckCircle className="mb-4 h-12 w-12 text-green-600" />
                    <h3 className="font-heading text-xl text-foreground">
                      Message Sent!
                    </h3>
                    <p className="mt-2 text-foreground-muted">
                      Thank you for reaching out. Our team will get back to you
                      within 1-2 business days.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({
                          name: "",
                          email: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="mt-4 text-sm font-semibold text-primary hover:text-primary/80"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-semibold text-foreground"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-semibold text-foreground"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="you@example.com"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-1.5 block text-sm font-semibold text-foreground"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        {subjectOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-semibold text-foreground"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full resize-none rounded-lg border border-border bg-white px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* ---- Office Locations ---- */}
            <ScrollReveal direction="right">
              <div>
                <SectionHeading
                  eyebrow="Where to Find Us"
                  title="Our Headquarters"
                  alignment="left"
                />

                <div className="grid gap-6 sm:grid-cols-2">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="rounded-xl border border-border bg-white p-5 transition-shadow hover:shadow-md"
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        <h3 className="font-heading text-lg text-foreground">
                          {office.city}, {office.country}
                        </h3>
                      </div>
                      <span
                        className={`mb-3 inline-block rounded-full px-3 py-0.5 text-xs font-semibold ${officeBadgeColor(
                          office.type
                        )}`}
                      >
                        {office.type}
                      </span>
                      <div className="space-y-2 text-sm text-foreground-muted">
                        <p className="flex items-start gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                          {office.address}
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="h-4 w-4 shrink-0" />
                          <a
                            href={`tel:${office.phone}`}
                            className="transition-colors hover:text-foreground"
                          >
                            {office.phone}
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  GENERAL CONTACT INFO                                         */}
      {/* ============================================================ */}
      <section className="bg-surface py-16 md:py-20">
        <Container>
          <ScrollReveal>
            <div className="grid gap-8 text-center sm:grid-cols-3">
              <div>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-foreground">Phone</h3>
                <a
                  href={`tel:${COMPANY.contact.phone}`}
                  className="mt-1 block text-foreground-muted transition-colors hover:text-primary"
                >
                  {COMPANY.contact.phone}
                </a>
              </div>
              <div>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-foreground">Email</h3>
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="mt-1 block text-foreground-muted transition-colors hover:text-primary"
                >
                  {COMPANY.contact.email}
                </a>
              </div>
              <div>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-foreground">
                  Headquarters
                </h3>
                <p className="mt-1 text-foreground-muted">
                  {COMPANY.headquarters.address}
                  <br />
                  {COMPANY.headquarters.city}, {COMPANY.headquarters.country}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
