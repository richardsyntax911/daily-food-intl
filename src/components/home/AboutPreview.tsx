"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutPreview() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Real factory-employee photo (sourced from
              howwemadeitinafrica.com press coverage) */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src="/images/news/daily-food-factory-employee.jpg"
                  alt="A Daily Food employee at the Accra production facility"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  quality={90}
                  className="object-cover"
                />
              </div>

              {/* Floating stats badge — sits inside the card on mobile,
                  hangs off the corner on md+ where there's room for overlap. */}
              <div className="absolute bottom-4 right-4 md:-bottom-4 md:-right-4 lg:bottom-6 lg:right-6 bg-white rounded-xl shadow-lg px-4 py-3 md:px-6 md:py-4">
                <div className="text-xl md:text-2xl font-heading text-primary">
                  Since 2017
                </div>
                <div className="text-xs md:text-sm text-foreground-muted">
                  Baking an African Champion
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Text content */}
          <ScrollReveal direction="right">
            <div>
              <span className="mb-3 inline-block text-sm font-extrabold uppercase tracking-[0.18em] text-coral">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
                Baking an African
                <br />
                Champion from Ghana
              </h2>

              <p className="mt-6 text-foreground-muted leading-relaxed">
                Daily Food Limited International is one of West Africa&apos;s
                fastest-growing food manufacturers. Founded in Ghana in 2017
                by Geoffrey Fadoul and Jean-Paul Nassar, we&apos;ve grown
                from 30 employees to 200+ today, supplying 15 markets across
                West and Central Africa with cakes, biscuits, cookies and
                burger buns.
              </p>

              <p className="mt-4 text-foreground-muted leading-relaxed">
                From our ISO 22000 and FSSC 22000 certified facility in
                Accra, we produce the Boss Baker and Big Boss brands —
                certified suppliers to Burger King and KFC across the
                continent. Reached operational breakeven in October 2022,
                entirely on founder equity with zero debt.
              </p>

              <div className="mt-8">
                <Button href="/about" variant="primary" size="lg">
                  Learn Our Story
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
