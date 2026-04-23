"use client";

import {
  TrendingUp,
  DollarSign,
  Users,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CertificationBadges } from "@/components/ui/CertificationBadges";
import { COMPANY } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Investment thesis — four deck-backed headline numbers.             */
/* ------------------------------------------------------------------ */
const investmentThesis = [
  {
    label: "Market Opportunity",
    value: "$3.2B",
    icon: Globe2,
    note: "Cakes & biscuits, West Africa",
  },
  {
    label: "Revenue Potential",
    value: "$450M",
    icon: TrendingUp,
    note: "At full capacity",
  },
  {
    label: "Consumer Reach",
    value: "400M+",
    icon: Users,
    note: "ECOWAS + Central Africa",
  },
  {
    label: "Breakeven",
    value: "Oct 2022",
    icon: DollarSign,
    note: "Zero external debt",
  },
];

/* ------------------------------------------------------------------ */
/*  Why Daily Food — 6 deck-backed proof points.                       */
/* ------------------------------------------------------------------ */
const proofPoints = [
  {
    title: "Founder-financed to breakeven",
    description:
      "Reached operational breakeven in October 2022 entirely on founder shareholder equity — no debt on the balance sheet.",
  },
  {
    title: "Blue-chip customer validation",
    description:
      "Certified supplier to Burger King Africa and KFC. Partners include RONDO, DIOSNA, MANE, Barry Callebaut and Puratos.",
  },
  {
    title: "15-country distribution footprint",
    description:
      "Active in 15 West and Central African markets — 10 Francophone and 5 Anglophone — with DRC and Tanzania next in the pipeline.",
  },
  {
    title: "ISO 22000 & FSSC 22000 certified",
    description:
      "World-class food safety certifications, Board-level governance and sustainability as a recurring agenda item.",
  },
  {
    title: "Import-to-local substitution play",
    description:
      "West Africa's baked goods category was 70% import-dominated. Daily Food is the world-class local producer closing the gap.",
  },
  {
    title: "Proven resilience",
    description:
      "Delivered breakeven through Covid school closures, wheat/sugar spikes and the 2022 Cedi collapse — then added four new markets the same year.",
  },
];

export function InvestorsPageContent() {
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
                Invest in Africa&apos;s
                <br />
                Next Food Champion
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
                A world-class local producer in a $3.2B West African baked
                goods market — founder-financed, breakeven achieved, and
                growing.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  INVESTMENT THESIS — four stat cards                          */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="The Opportunity"
              title="Investment Thesis"
              subtitle="The numbers behind a decade of disciplined growth."
            />
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {investmentThesis.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <ScrollReveal key={metric.label} delay={index * 0.1}>
                  <div className="h-full rounded-2xl border border-border bg-white p-6 text-center transition-shadow hover:shadow-lg">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-heading text-3xl text-foreground md:text-4xl">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground-muted">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-xs text-foreground-muted/80">
                      {metric.note}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  WHY DAILY FOOD                                               */}
      {/* ============================================================ */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="The Proof"
              title="Why Daily Food"
              subtitle="Six reasons institutional investors back our story."
            />
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proofPoints.map((point, index) => (
              <ScrollReveal key={point.title} delay={index * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-lg">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  FINANCIAL POSITION                                           */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left">
              <div>
                <SectionHeading
                  eyebrow="Financial Position"
                  title="Disciplined, Debt-Free Growth"
                  alignment="left"
                />
                <p className="text-foreground-muted leading-relaxed">
                  Daily Food reached operational breakeven in October 2022.
                  Every capital expansion to date — including the $5M
                  production line in 2019 and the 4X capacity increase in
                  2021 — has been financed by founder equity. The balance
                  sheet carries zero external debt.
                </p>
                <p className="mt-4 text-foreground-muted leading-relaxed">
                  The company is now raising growth capital to scale into
                  adjacent categories, deepen its 15-country footprint across
                  West and Central Africa, and enter the next two pipeline
                  markets — DRC and Tanzania.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl border border-border bg-surface p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading text-base text-foreground">
                        Capital Structure
                      </p>
                      <p className="mt-1 text-sm text-foreground-muted">
                        {COMPANY.financials.debt}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading text-base text-foreground">
                        Breakeven
                      </p>
                      <p className="mt-1 text-sm text-foreground-muted">
                        {COMPANY.financials.breakeven}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Globe2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading text-base text-foreground">
                        Addressable Market
                      </p>
                      <p className="mt-1 text-sm text-foreground-muted">
                        {COMPANY.financials.marketSize}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading text-base text-foreground">
                        Revenue Potential
                      </p>
                      <p className="mt-1 text-sm text-foreground-muted">
                        {COMPANY.financials.revenuePotential}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  GOVERNANCE                                                   */}
      {/* ============================================================ */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <SectionHeading
                eyebrow="Governance"
                title="Corporate Governance"
              />
              <p className="text-center leading-relaxed text-foreground-muted">
                Daily Food Limited International operates with Board-level
                oversight, with sustainability as a recurring agenda item
                rather than an afterthought. Our operations are certified to
                ISO 22000 and FSSC 22000, the highest international
                food-safety standards, and we maintain the internal controls
                and compliance processes expected of a world-class food
                manufacturer.
              </p>
              <div className="mt-8">
                <CertificationBadges size="md" />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  INVESTOR CONTACT                                             */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-xl rounded-2xl border border-border bg-white p-8 text-center md:p-10">
              <SectionHeading
                eyebrow="Get in Touch"
                title="Investor Contact"
                subtitle="For investor inquiries and data room access, please reach out to our Investor Relations team."
              />
              <div className="space-y-4">
                <a
                  href={`mailto:${COMPANY.contact.investorEmail}`}
                  className="flex items-center justify-center gap-2 text-lg font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  <Mail className="h-5 w-5" />
                  {COMPANY.contact.investorEmail}
                </a>
                <a
                  href={`tel:${COMPANY.contact.phone}`}
                  className="flex items-center justify-center gap-2 text-foreground-muted transition-colors hover:text-foreground"
                >
                  <Phone className="h-5 w-5" />
                  {COMPANY.contact.phone}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
