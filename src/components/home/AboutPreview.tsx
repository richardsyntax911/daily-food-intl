"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutPreview() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image placeholder */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary via-primary-light to-accent overflow-hidden">
                {/* Decorative pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 300"
                    fill="none"
                  >
                    <circle cx="200" cy="150" r="120" stroke="white" strokeWidth="0.5" />
                    <circle cx="200" cy="150" r="80" stroke="white" strokeWidth="0.5" />
                    <rect x="80" y="50" width="240" height="200" rx="8" stroke="white" strokeWidth="0.5" />
                  </svg>
                </div>
                {/* Content overlay for visual interest */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/40">
                    <div className="text-6xl font-heading">DFLI</div>
                    <div className="text-sm tracking-widest uppercase mt-2">
                      Production Facility
                    </div>
                  </div>
                </div>
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
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-coral">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
                Africa&apos;s Leading
                <br />
                Food Company
              </h2>

              <p className="mt-6 text-foreground-muted leading-relaxed">
                Daily Food Limited International is one of West Africa&apos;s
                fastest-growing food manufacturing companies. Founded in 2008, we
                have built a portfolio of trusted brands that serve millions of
                consumers with quality, affordable, and nutritious food products.
              </p>

              <p className="mt-4 text-foreground-muted leading-relaxed">
                From our state-of-the-art production facilities, we produce a
                wide range of baked goods, cereals, snacks, beverages, and ready
                meals. Our commitment to quality, innovation, and sustainability
                drives everything we do as we work toward our vision of becoming
                Africa&apos;s most loved food company.
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
