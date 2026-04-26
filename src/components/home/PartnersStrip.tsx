"use client";

import Image from "next/image";
import { partners } from "@/data/company";

/*
 * Mondelez-style infinite-scroll partner logowall.
 *
 * Full-width section (edge-to-edge) — companion to the boxed "Our
 * Portfolio" card below it. The flat full-width treatment keeps
 * the partners strip feeling like a subtle trust signal rather
 * than a featured card.
 *
 * The logo set is duplicated so the CSS translateX(-50%) animation
 * loops without a visible seam.
 *
 * Spacing uses parent `gap-*` rather than per-child margins so it
 * scales cleanly across breakpoints on mobile.
 */
export function PartnersStrip() {
  /* Duplicate the array once for seamless looping */
  const doubled = [...partners, ...partners];

  return (
    <section className="border-b border-border bg-white py-10 md:py-14 overflow-hidden">
      <p className="mb-8 text-center text-xs font-extrabold uppercase leading-relaxed tracking-[0.18em] text-foreground-muted md:text-sm">
        {/* On mobile each clause sits on its own centered line.
            On sm+ they collapse back into a single line. */}
        <span className="block sm:inline">Trusted by category leaders </span>
        <span className="block sm:inline">and world-class partners</span>
      </p>

      <div className="relative">
        {/* Scrolling track — gap on the parent for responsive logo
            spacing; no fade masks. w-max lets the flex row exceed
            viewport width for the infinite marquee effect. */}
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
    </section>
  );
}
