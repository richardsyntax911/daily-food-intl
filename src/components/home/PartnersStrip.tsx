"use client";

import Image from "next/image";
import { partners } from "@/data/company";

/*
 * Mondelez-style infinite-scroll partner logowall.
 *
 * Sits directly under the hero so first-scroll visitors see blue-chip
 * validation before they meet the brands. Logos auto-scroll right-to-left
 * in a seamless loop and pause on hover.
 *
 * The logo set is duplicated so the CSS translateX(-50%) animation
 * loops without a visible seam. Edge gradients fade logos in/out at
 * the viewport boundaries for a polished marquee effect.
 */
export function PartnersStrip() {
  /* Duplicate the array once for seamless looping */
  const doubled = [...partners, ...partners];

  return (
    <section className="border-b border-border bg-white py-10 md:py-14 overflow-hidden">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-foreground-muted md:text-sm">
        Trusted by category leaders and world-class partners
      </p>

      <div className="relative">
        {/* Left edge fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent md:w-32" />
        {/* Right edge fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent md:w-32" />

        {/* Scrolling track — w-max lets the flex row exceed viewport width */}
        <div
          className="animate-marquee flex w-max items-center hover:[animation-play-state:paused]"
        >
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              /* Fixed-dimension box per logo = visually balanced row.
                 Narrow marks (KFC, RONDO, MANE) sit centred with airspace;
                 wide marks (Barry Callebaut, Rocomamas) scale down to fit
                 the same footprint — no more "one logo dominates the row".
                 Per-logo `scale` from the data tunes individual wordmarks
                 (e.g. RONDO scales 1.4× so its compact mark matches peers). */
              className="flex h-9 w-24 flex-shrink-0 items-center justify-center md:h-11 md:w-32 md:mx-4 lg:h-14 lg:w-40 lg:mx-6"
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
    </section>
  );
}
