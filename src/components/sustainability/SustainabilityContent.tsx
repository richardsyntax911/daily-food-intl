"use client";

import {
  Leaf,
  Users,
  HeartHandshake,
  ShieldCheck,
  Recycle,
  Sprout,
  Package,
  Sun,
  TreePine,
  Droplets,
  Heart,
  Globe,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { sustainabilityInitiatives } from "@/data/company";

/* ------------------------------------------------------------------ */
/*  Icon mapping for initiative icons                                  */
/* ------------------------------------------------------------------ */
const iconMap: Record<string, React.ElementType> = {
  recycle: Recycle,
  sprout: Sprout,
  package: Package,
  sun: Sun,
  leaf: Leaf,
  "tree-pine": TreePine,
  droplets: Droplets,
  heart: Heart,
  globe: Globe,
  users: Users,
  "shield-check": ShieldCheck,
};

/* ------------------------------------------------------------------ */
/*  Four ESG pillars — mirrors the Nov 2022 deck's                     */
/*  "With sustainability baked in" slide.                              */
/* ------------------------------------------------------------------ */
const pillars = [
  {
    id: "planet",
    title: "Planet",
    icon: Leaf,
    description:
      "Pursuing Net Zero and a net-positive contribution to the planet — from smarter packaging to carton-optimised logistics.",
    color: "border-t-green-500",
    iconBg: "bg-green-100 text-green-600",
  },
  {
    id: "people",
    title: "People",
    icon: Users,
    description:
      "Our people are our key asset — grown from 30 in 2018 to 200+ today, with 60+ upskilled through high-skill training.",
    color: "border-t-secondary",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    id: "prosperity",
    title: "Prosperity",
    icon: HeartHandshake,
    description:
      "We chair the Advisory Board of Food For All Africa and localise inputs to source from the communities that host us.",
    color: "border-t-accent",
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    id: "governance",
    title: "Governance",
    icon: ShieldCheck,
    description:
      "Sustainability is a recurring Board agenda item, not an afterthought — backed by ISO 22000 and FSSC 22000 certification.",
    color: "border-t-primary",
    iconBg: "bg-primary/10 text-primary",
  },
];

/* ------------------------------------------------------------------ */
/*  Impact statistics — all deck-backed (Nov 2022).                    */
/* ------------------------------------------------------------------ */
const impactStats = [
  { value: "20M", label: "Plastic Bags Saved Per Year" },
  { value: "30→200", label: "Employees Grown Since 2018" },
  { value: "10k+", label: "People Fed / Month via NGO Partnership" },
  { value: "ISO + FSSC", label: "22000 Certified" },
];

export function SustainabilityContent() {
  return (
    <main>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-br from-accent via-accent-dark to-secondary py-24 md:py-32">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <h1 className="font-heading text-4xl text-white md:text-5xl lg:text-6xl">
                Sustainability Baked In
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                Four ESG pillars guide how we grow — Planet, People, Prosperity
                and Governance. Not a separate initiative; embedded in how we
                operate.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  FOUR PILLARS                                                 */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Approach"
              title="Four Pillars of Sustainability"
              subtitle="The ESG framework that guides every decision we make."
            />
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} delay={index * 0.12}>
                  <div
                    id={pillar.id}
                    className={`h-full scroll-mt-24 rounded-2xl border border-border border-t-4 ${pillar.color} bg-white p-8 transition-shadow hover:shadow-lg`}
                  >
                    <div
                      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${pillar.iconBg}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-heading text-xl text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-foreground-muted">
                      {pillar.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  INITIATIVES — zigzag layout                                  */}
      {/* ============================================================ */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Key Initiatives"
              title="Making a Difference"
              subtitle="Concrete programs driving measurable impact across our value chain."
            />
          </ScrollReveal>

          <div className="space-y-20">
            {sustainabilityInitiatives.map((initiative, index) => {
              const Icon = iconMap[initiative.icon] ?? Leaf;
              const isEven = index % 2 === 0;

              return (
                <ScrollReveal
                  key={initiative.title}
                  direction={isEven ? "left" : "right"}
                >
                  <div
                    className={`grid items-center gap-12 lg:grid-cols-2 ${
                      !isEven ? "lg:direction-rtl" : ""
                    }`}
                  >
                    {/* Image placeholder — appears first on even, second on odd */}
                    <div
                      className={`aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/15 via-secondary/20 to-accent/15 ${
                        !isEven ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="flex h-full items-center justify-center">
                        <Icon className="h-20 w-20 text-primary/30" />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className={!isEven ? "lg:order-1" : ""}>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-coral">
                          Initiative
                        </span>
                      </div>
                      <div className="mb-2">
                        <span className="font-heading text-5xl text-primary md:text-6xl">
                          {initiative.stat}
                        </span>
                        <span className="ml-2 text-foreground-muted">
                          {initiative.statLabel}
                        </span>
                      </div>
                      <h3 className="mt-4 font-heading text-2xl text-foreground md:text-3xl">
                        {initiative.title}
                      </h3>
                      <p className="mt-4 leading-relaxed text-foreground-muted">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  IMPACT STATS BAR                                             */}
      {/* ============================================================ */}
      <section className="bg-primary py-16 md:py-20">
        <Container>
          <ScrollReveal>
            <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
              {impactStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl text-white md:text-4xl lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-white/70 md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
