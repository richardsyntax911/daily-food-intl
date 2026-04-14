"use client";

import { Leaf, Users, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface PillarItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const pillars: PillarItem[] = [
  {
    icon: Leaf,
    title: "Environment",
    description:
      "Reducing our carbon footprint through renewable energy, water conservation, and zero-waste manufacturing initiatives.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Empowering local communities with education, health programs, and economic opportunities for sustainable growth.",
  },
  {
    icon: Truck,
    title: "Supply Chain",
    description:
      "Building ethical, transparent supply chains that support fair trade practices and responsible sourcing.",
  },
];

export function SustainabilityPreview() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image placeholder */}
          <ScrollReveal direction="left">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 overflow-hidden relative">
              {/* Nature-inspired decorative elements */}
              <div className="absolute inset-0 opacity-15" aria-hidden="true">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 300"
                  fill="none"
                >
                  {/* Leaf shapes */}
                  <ellipse
                    cx="200"
                    cy="150"
                    rx="100"
                    ry="60"
                    stroke="white"
                    strokeWidth="1"
                    transform="rotate(-30 200 150)"
                  />
                  <ellipse
                    cx="200"
                    cy="150"
                    rx="70"
                    ry="40"
                    stroke="white"
                    strokeWidth="0.8"
                    transform="rotate(15 200 150)"
                  />
                  <line
                    x1="120"
                    y1="220"
                    x2="280"
                    y2="80"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <circle cx="320" cy="60" r="40" stroke="white" strokeWidth="0.5" />
                  <circle cx="80" cy="240" r="30" stroke="white" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/30">
                  <Leaf className="w-16 h-16 mx-auto mb-3" />
                  <div className="text-sm tracking-widest uppercase">
                    Sustainability
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <ScrollReveal direction="right">
            <div>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
                Sustainability
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
                Our Commitment to
                <br />a Better Future
              </h2>
              <p className="mt-6 text-foreground-muted leading-relaxed">
                At Daily Food Limited International, sustainability is not just a
                goal but a core part of who we are. We are committed to
                responsible business practices that protect the environment,
                uplift communities, and build a food system that works for
                everyone.
              </p>

              {/* Pillar blocks */}
              <div className="mt-8 space-y-6">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={pillar.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg text-foreground">
                          {pillar.title}
                        </h3>
                        <p className="mt-1 text-sm text-foreground-muted leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10">
                <Button href="/sustainability" variant="primary" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
