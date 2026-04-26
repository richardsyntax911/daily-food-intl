"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Users,
  Lightbulb,
  Leaf,
  HeartHandshake,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CertificationBadges } from "@/components/ui/CertificationBadges";
import {
  timeline,
  leadership,
  missionVisionValues,
  partners,
} from "@/data/company";

/* ------------------------------------------------------------------ */
/*  Market footprint — Nov 2022 deck "Daily Food today" slide.         */
/*  10 Francophone + 5 Anglophone = 15 current markets.                */
/* ------------------------------------------------------------------ */
const anglophoneMarkets = [
  { country: "Ghana", flag: "🇬🇭", note: "Home base" },
  { country: "Nigeria", flag: "🇳🇬" },
  { country: "Liberia", flag: "🇱🇷" },
  { country: "Sierra Leone", flag: "🇸🇱" },
  { country: "Gambia", flag: "🇬🇲" },
];

const francophoneMarkets = [
  { country: "Côte d'Ivoire", flag: "🇨🇮" },
  { country: "Senegal", flag: "🇸🇳" },
  { country: "Mali", flag: "🇲🇱" },
  { country: "Burkina Faso", flag: "🇧🇫" },
  { country: "Niger", flag: "🇳🇪" },
  { country: "Togo", flag: "🇹🇬" },
  { country: "Benin", flag: "🇧🇯" },
  { country: "Cameroon", flag: "🇨🇲" },
  { country: "Gabon", flag: "🇬🇦" },
  { country: "Congo-Brazzaville", flag: "🇨🇬" },
];

const pipelineMarkets = [
  { country: "DRC", flag: "🇨🇩" },
  { country: "Tanzania", flag: "🇹🇿" },
];

/* ------------------------------------------------------------------ */
/*  Icon mapping                                                       */
/* ------------------------------------------------------------------ */
const iconMap: Record<string, React.ElementType> = {
  "shield-check": ShieldCheck,
  users: Users,
  lightbulb: Lightbulb,
  leaf: Leaf,
  "heart-handshake": HeartHandshake,
};

/* ------------------------------------------------------------------ */
/*  Helper: initials from a full name                                  */
/* ------------------------------------------------------------------ */
function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export function AboutPageContent() {
  return (
    <main>
      {/* ============================================================ */}
      {/*  HERO BANNER                                                  */}
      {/* ============================================================ */}
      <section className="bg-coral py-24 md:py-32">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <h1 className="font-heading text-4xl text-white md:text-5xl lg:text-6xl">
                About Us
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                Be Smart, Eat Smart. Since 2017, we&apos;ve been baking an
                African champion — from Ghana to 15 markets across the
                continent.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  COMPANY STORY                                                */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div>
                <SectionHeading
                  eyebrow="Our Story"
                  title="Baking an African Champion"
                  alignment="left"
                />
                <p className="text-foreground-muted leading-relaxed">
                  Daily Food was founded in Ghana in 2017 with a clear
                  observation: West Africa&apos;s baked goods market was 70%
                  import-dominated — good quality at a high price, while local
                  production was low price and low quality. That gap was the
                  opportunity for a world-class local producer to reach 230
                  million+ urban consumers across our 15 ECOWAS and Central
                  African markets.
                </p>
                <p className="mt-4 text-foreground-muted leading-relaxed">
                  The business was forged in steel. An early pivot from beef
                  rolls to cakes in 2019, a $5M production line, schools
                  closing during Covid, a 4X capacity expansion in 2021, and
                  the wheat, sugar and Cedi shocks of 2022 — and the company
                  still reached breakeven in October 2022, financed entirely
                  by founder equity with zero debt.
                </p>
                <p className="mt-4 text-foreground-muted leading-relaxed">
                  Today Daily Food serves 15 markets across West and Central
                  Africa through two brands — Boss Baker and Big Boss —
                  supplies Burger King and KFC across the continent, and holds
                  ISO 22000 and FSSC 22000 certifications. The team has grown
                  from 30 people in 2018 to 200+ today, with 350 targeted by
                  next year.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20" />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  MISSION / VISION / VALUES                                    */}
      {/* ============================================================ */}
      <section id="values" className="bg-surface py-20 md:py-28">
        <Container>
          {/* Mission & Vision */}
          <ScrollReveal>
            <div className="mx-auto mb-16 grid max-w-5xl gap-8 md:grid-cols-2">
              {/* Mission */}
              <div className="rounded-2xl border border-border bg-white p-8">
                <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-coral">
                  Our Mission
                </span>
                <p className="font-heading text-xl leading-relaxed text-foreground md:text-2xl">
                  &ldquo;{missionVisionValues.mission}&rdquo;
                </p>
              </div>
              {/* Vision */}
              <div className="rounded-2xl border border-border bg-white p-8">
                <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-coral">
                  Our Vision
                </span>
                <p className="font-heading text-xl leading-relaxed text-foreground md:text-2xl">
                  &ldquo;{missionVisionValues.vision}&rdquo;
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Values */}
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Values"
              title="Always Led by Our Values"
              subtitle="Three principles guide every decision we make."
            />
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {missionVisionValues.values.map((value, index) => {
              const Icon = iconMap[value.icon] ?? ShieldCheck;
              return (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <div className="rounded-2xl border border-border bg-white p-6 text-center transition-shadow hover:shadow-lg">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground-muted">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  HISTORY TIMELINE                                             */}
      {/* ============================================================ */}
      <section id="history" className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Journey"
              title="History & Milestones"
              subtitle="A timeline of the key moments that shaped Daily Food Limited International."
            />
          </ScrollReveal>

          <div className="relative mx-auto max-w-4xl">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block md:-translate-x-px" />
            {/* Mobile line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:hidden" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <ScrollReveal
                    key={item.year}
                    direction={isLeft ? "left" : "right"}
                    delay={index * 0.05}
                  >
                    <div className="relative flex items-start md:justify-center">
                      {/* Desktop layout */}
                      <div className="hidden w-full md:flex">
                        {/* Left content */}
                        <div
                          className={`w-1/2 pr-12 ${
                            isLeft ? "text-right" : ""
                          }`}
                        >
                          {isLeft && (
                            <div>
                              <span className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
                                {item.year}
                              </span>
                              <h3 className="mt-2 font-heading text-xl text-foreground">
                                {item.title}
                              </h3>
                              <p className="mt-1 text-foreground-muted">
                                {item.description}
                              </p>
                            </div>
                          )}
                        </div>
                        {/* Center dot */}
                        <div className="relative z-10 flex h-4 w-4 shrink-0 translate-y-2 items-center justify-center rounded-full border-4 border-primary bg-white" />
                        {/* Right content */}
                        <div className={`w-1/2 pl-12 ${isLeft ? "" : ""}`}>
                          {!isLeft && (
                            <div>
                              <span className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
                                {item.year}
                              </span>
                              <h3 className="mt-2 font-heading text-xl text-foreground">
                                {item.title}
                              </h3>
                              <p className="mt-1 text-foreground-muted">
                                {item.description}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Mobile layout */}
                      <div className="flex md:hidden">
                        <div className="relative z-10 mr-4 mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-4 border-primary bg-white" />
                        <div>
                          <span className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-bold text-white">
                            {item.year}
                          </span>
                          <h3 className="mt-2 font-heading text-xl text-foreground">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-foreground-muted">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  LEADERSHIP                                                   */}
      {/* ============================================================ */}
      <section id="leadership" className="bg-surface py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Meet the Team"
              title="Our Leadership"
              subtitle="Experienced professionals driving Daily Food's growth across Africa and beyond."
            />
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((leader, index) => (
              <ScrollReveal key={leader.name} delay={index * 0.1}>
                <div className="rounded-2xl border border-border bg-white p-6 text-center transition-shadow hover:shadow-lg">
                  {/* Avatar placeholder */}
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-white">
                    {getInitials(leader.name)}
                  </div>
                  <h3 className="font-heading text-xl text-foreground">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {leader.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                    {leader.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  OUR FOOTPRINT                                                */}
      {/* ============================================================ */}
      <section id="footprint" className="bg-surface py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Where We Operate"
              title="15 Markets Across West & Central Africa"
              subtitle="Ten Francophone and five Anglophone markets — reached through a single Ghana-based ISO-certified production line. DRC and Tanzania are the next two markets in the pipeline."
            />
          </ScrollReveal>

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            {/* Anglophone column */}
            <ScrollReveal direction="left">
              <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground-muted">
                      Anglophone
                    </p>
                    <h3 className="mt-1 font-heading text-xl text-foreground">
                      English-speaking markets
                    </h3>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                    {anglophoneMarkets.length}
                  </span>
                </div>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {anglophoneMarkets.map((m) => (
                    <li
                      key={m.country}
                      className="flex items-center gap-2 rounded-lg bg-surface px-3 py-2"
                    >
                      <span className="text-lg leading-none">{m.flag}</span>
                      <span className="text-sm font-semibold text-foreground">
                        {m.country}
                      </span>
                      {m.note && (
                        <span className="ml-auto rounded-full bg-secondary/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-800">
                          {m.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-foreground-muted">
                  Sold under the{" "}
                  <span className="font-semibold text-foreground">Boss Baker</span>{" "}
                  brand (Ghana, Liberia, Sierra Leone, Gambia) and the{" "}
                  <span className="font-semibold text-foreground">Big Boss</span>{" "}
                  brand (Nigeria).
                </p>
              </div>
            </ScrollReveal>

            {/* Francophone column */}
            <ScrollReveal direction="right">
              <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground-muted">
                      Francophone
                    </p>
                    <h3 className="mt-1 font-heading text-xl text-foreground">
                      French-speaking markets
                    </h3>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                    {francophoneMarkets.length}
                  </span>
                </div>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {francophoneMarkets.map((m) => (
                    <li
                      key={m.country}
                      className="flex items-center gap-2 rounded-lg bg-surface px-3 py-2"
                    >
                      <span className="text-lg leading-none">{m.flag}</span>
                      <span className="text-sm font-semibold text-foreground">
                        {m.country}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-foreground-muted">
                  Sold under the{" "}
                  <span className="font-semibold text-foreground">Boss Baker</span>{" "}
                  brand with French pack and copy.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Pipeline strip */}
          <ScrollReveal>
            <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-dashed border-coral/40 bg-coral/5 p-5">
              <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-coral">
                  Next in the pipeline
                </span>
                <div className="flex flex-wrap justify-center gap-2">
                  {pipelineMarkets.map((m) => (
                    <span
                      key={m.country}
                      className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-white px-3 py-1 text-sm font-semibold text-foreground"
                    >
                      <span className="text-base leading-none">{m.flag}</span>
                      {m.country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  PARTNERS & CERTIFICATIONS                                    */}
      {/* ============================================================ */}
      <section id="partners" className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Trusted By"
              title="Partners & Certifications"
              subtitle="Blue-chip customers and world-class food-safety certifications that validate how we operate."
            />
          </ScrollReveal>

          {/* Partner logo wall */}
          <ScrollReveal>
            <div className="mx-auto max-w-5xl">
              <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-foreground-muted">
                Blue-Chip Partners
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex h-28 items-center justify-center rounded-xl border border-border bg-white px-6 py-5 transition-shadow hover:shadow-md"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        fill
                        sizes="(min-width: 1024px) 180px, (min-width: 640px) 220px, 45vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications — badges replace the old text pills */}
          <ScrollReveal>
            <div className="mx-auto mt-12 max-w-2xl">
              <CertificationBadges size="lg" label="Certifications" />
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
