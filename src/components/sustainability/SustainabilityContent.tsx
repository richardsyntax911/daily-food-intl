"use client";

import {
  Leaf,
  Users,
  Truck,
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
import { Button } from "@/components/ui/Button";
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
};

/* ------------------------------------------------------------------ */
/*  Pillar data                                                        */
/* ------------------------------------------------------------------ */
const pillars = [
  {
    title: "Environment",
    icon: Leaf,
    description:
      "Minimizing our environmental footprint through waste reduction, renewable energy, and sustainable packaging across all operations.",
    color: "border-t-green-500",
    bg: "bg-green-50",
    iconBg: "bg-green-100 text-green-600",
  },
  {
    title: "Community",
    icon: Users,
    description:
      "Empowering the communities where we operate through farmer support programs, nutrition education, and local economic development.",
    color: "border-t-secondary",
    bg: "bg-amber-50",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    title: "Supply Chain",
    icon: Truck,
    description:
      "Building responsible supply chains through fair-trade sourcing, ethical labor practices, and transparency at every stage.",
    color: "border-t-accent",
    bg: "bg-orange-50",
    iconBg: "bg-orange-100 text-orange-600",
  },
];

/* ------------------------------------------------------------------ */
/*  Impact statistics                                                  */
/* ------------------------------------------------------------------ */
const impactStats = [
  { value: "40%", label: "Waste Reduction Since 2020" },
  { value: "5,000+", label: "Smallholder Farmers Supported" },
  { value: "65%", label: "Sustainable Packaging" },
  { value: "50%", label: "Solar-Powered HQ" },
];

export function SustainabilityContent() {
  return (
    <main>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="bg-primary py-24 md:py-32">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <h1 className="font-heading text-4xl text-white md:text-5xl lg:text-6xl">
                Sustainability
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                Our commitment to environmental stewardship, community
                empowerment, and responsible business practices across every
                market we serve.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  THREE PILLARS                                                */}
      {/* ============================================================ */}
      <section id="environment" className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Approach"
              title="Three Pillars of Sustainability"
              subtitle="A holistic framework that guides how we grow responsibly."
            />
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} delay={index * 0.15}>
                  <div
                    className={`rounded-2xl border border-border border-t-4 ${pillar.color} bg-white p-8 transition-shadow hover:shadow-lg`}
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
      <section id="community" className="bg-surface py-20 md:py-28">
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
                        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
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
      <section id="supply-chain" className="bg-primary py-16 md:py-20">
        <Container>
          <ScrollReveal>
            <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
              {impactStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-4xl text-white md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-wider text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  CTA — Download Report                                        */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionHeading
                eyebrow="Annual Report"
                title="2025 Sustainability Report"
                subtitle="Read the full details of our environmental, social, and governance performance over the past year."
              />
              <Button href="#" size="lg">
                Download Report
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
