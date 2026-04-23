"use client";

import { Globe2, ShieldCheck, Factory } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BrandCard } from "@/components/brands/BrandCard";
import { brands, markets } from "@/data/brands";

const sharedPillars = [
  {
    icon: Factory,
    title: "One production line",
    description:
      "Every SKU — whether sold as Boss Baker or Big Boss — is baked in the same ISO 22000 and FSSC 22000 certified facility in Ghana.",
  },
  {
    icon: ShieldCheck,
    title: "Same recipe, same nutrition",
    description:
      "Identical ingredients list and nutritional panel per 100g across all three regional markets. Quality does not change with the border.",
  },
  {
    icon: Globe2,
    title: "Localised for each market",
    description:
      "Pack, language, regulatory approval (FDA Ghana, NAFDAC Nigeria) and name adapted to resonate with each consumer — never the product inside.",
  },
];

export function BrandsPageContent() {
  return (
    <main>
      {/* =========================================================== */}
      {/*  HERO                                                        */}
      {/* =========================================================== */}
      <section className="bg-coral py-20">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl text-white md:text-5xl lg:text-6xl">
                Our Brand Portfolio
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                One product line. Three regional identities. Boss Baker and
                Big Boss carry the same recipe, the same ISO-certified
                production and the same commitment to quality —
                localised for each market we serve.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* =========================================================== */}
      {/*  SHARED-FOUNDATION EXPLAINER                                 */}
      {/* =========================================================== */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="How our brands work"
              title="Same quality. Different identity."
              subtitle="Daily Food runs a single production line with a single standards bar. Boss Baker and Big Boss are regional brand identities — not different product lines."
            />
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {sharedPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} delay={index * 0.1}>
                  <div className="rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                      {pillar.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================== */}
      {/*  BRAND GRID                                                  */}
      {/* =========================================================== */}
      <section className="bg-background-warm py-20">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="The Portfolio"
              title="Meet the brands"
              subtitle="Click a brand to explore its full product range."
            />
          </ScrollReveal>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
            {brands.map((brand, index) => {
              const brandMarkets = markets.filter((m) =>
                brand.markets.includes(m.id)
              );
              return (
                <ScrollReveal key={brand.id} delay={index * 0.1}>
                  <div className="flex flex-col items-center">
                    <BrandCard brand={brand} />

                    {/* Market badges */}
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                      {brandMarkets.map((m) => (
                        <span
                          key={m.id}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-foreground-muted"
                        >
                          <span className="text-sm leading-none">{m.flag}</span>
                          {m.shortLabel}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================== */}
      {/*  CTA to Products                                             */}
      {/* =========================================================== */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-8 text-center md:p-10">
              <h2 className="font-heading text-2xl text-foreground md:text-3xl">
                See the full product line
              </h2>
              <p className="mt-3 text-foreground-muted">
                Browse every SKU across all three markets — cakes, biscuits,
                cookies and burger buns — with market-specific names,
                ingredients and nutritional panels.
              </p>
              <a
                href="/products"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
              >
                Explore Products
              </a>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
