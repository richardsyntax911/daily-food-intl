"use client";

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
import { timeline, leadership, missionVisionValues } from "@/data/company";

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
      <section className="bg-primary py-24 md:py-32">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <h1 className="font-heading text-4xl text-white md:text-5xl lg:text-6xl">
                About Us
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                Discover the story behind Africa&apos;s fastest-growing food
                company and the people who make it possible.
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
                  title="Building Africa's Food Future"
                  alignment="left"
                />
                <p className="text-foreground-muted leading-relaxed">
                  Founded in 2008 in Accra, Ghana, Daily Food Limited began with
                  a single production line and a bold ambition: to create
                  high-quality, accessible food products that celebrate African
                  flavors and ingredients. What started as a small bakery
                  operation has grown into a multi-brand food manufacturing
                  powerhouse serving consumers across 12 countries.
                </p>
                <p className="mt-4 text-foreground-muted leading-relaxed">
                  Today, Daily Food Limited International is home to five
                  beloved brands — Boss Baker, Golden Harvest, FreshBite,
                  Mama&apos;s Kitchen, and TropiFruit — each crafted to meet
                  the diverse tastes and nutritional needs of modern African
                  consumers. With over 3,500 employees, state-of-the-art
                  manufacturing facilities, and a growing international
                  presence, we continue to innovate and expand while staying
                  true to our founding mission of nourishing communities.
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
                <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
                  Our Mission
                </span>
                <p className="font-heading text-xl leading-relaxed text-foreground md:text-2xl">
                  &ldquo;{missionVisionValues.mission}&rdquo;
                </p>
              </div>
              {/* Vision */}
              <div className="rounded-2xl border border-border bg-white p-8">
                <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
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
              title="What We Stand For"
              subtitle="Five core principles guide every decision we make."
            />
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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
    </main>
  );
}
