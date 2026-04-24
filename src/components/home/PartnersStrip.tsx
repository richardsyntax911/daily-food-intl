"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { partners } from "@/data/company";

/*
 * Mondelez-style infinite-scroll partner logowall.
 *
 * Wrapped in a boxed card (matching the Our Portfolio section below) so
 * the home page reads as a rhythm of distinct cards rather than a wall
 * of flat sections.
 *
 * The logo set is duplicated so the CSS translateX(-50%) animation loops
 * without a visible seam. No fade masks — the card's own bg and rounded
 * corners serve as the visual boundary.
 *
 * Spacing uses parent `gap-*` rather than per-child margins so it scales
 * cleanly across breakpoints on mobile.
 */
export function PartnersStrip() {
  /* Duplicate the array once for seamless looping */
  const doubled = [...partners, ...partners];

  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        {/* Boxed card */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-4 py-8 shadow-sm sm:px-6 md:px-8 md:py-10 lg:px-12">
          <p className="mb-6 text-center text-xs font-extrabold uppercase tracking-[0.18em] text-foreground-muted md:mb-8 md:text-sm">
            Trusted by category leaders and world-class partners
          </p>

          {/* Negative margin so the marquee bleeds to the card edges */}
          <div className="relative -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12">
            {/* Scrolling track. Gap on the parent for responsive spacing;
                per-child margins would snap between breakpoints. */}
            <div
              className="animate-marquee flex w-max items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 hover:[animation-play-state:paused]"
            >
              {doubled.map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  /* Fixed-dimension box per logo = balanced row weight.
                     Narrow marks (KFC, RONDO, MANE) sit centred with
                     airspace; wide marks (Barry Callebaut, Rocomamas)
                     scale down to fit. Per-logo `scale` in the data
                     nudges individual wordmarks (e.g. RONDO 1.4×). */
                  className="flex h-9 w-24 flex-shrink-0 items-center justify-center md:h-11 md:w-32 lg:h-14 lg:w-40"
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={200}
                    height={80}
                    style={partner.scale ? { transform: `scale(${partner.scale})` } : undefined}
                    className="max-h-full max-w-full object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
