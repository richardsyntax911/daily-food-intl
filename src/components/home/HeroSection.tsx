"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

/*
 * Home hero — modern asymmetric two-panel split.
 *
 * Left panel (solid coral): all the copy, perfectly legible — no overlay
 * fighting a photo for contrast. Right panel (the new employees photo):
 * full-bleed, edge-to-edge, no overlay. The photo gets to be a photo;
 * the text gets to be text.
 *
 * On mobile the two panels stack — photo sits at the top in a 16:9 strip,
 * coral text panel below. Trust strip pinned across the full width
 * underneath.
 *
 * Departs from the previous full-bleed overlay style (which forced a
 * dark wash on top of an already-coral photo, killing both the photo
 * and the brand voice).
 */
export function HeroSection() {
  return (
    /* Section auto-heights on mobile so it never overflows the viewport.
       Forces a tall cinematic min-h on lg+ where vertical space is plenty. */
    <section className="relative isolate flex flex-col bg-coral lg:min-h-[92vh]">
      {/* === Top split: PHOTO + TEXT panels (mobile photo first) === */}
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* === Photo panel ===
            Mobile: shows FIRST (visual brand hook), 4:5 portrait crop so
              the people fill the frame without dominating viewport height.
            Desktop: lg:order-2 puts it on the right, full-bleed of its column. */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative aspect-[5/4] w-full overflow-hidden sm:aspect-[16/10] lg:order-2 lg:aspect-auto lg:h-full"
        >
          <Image
            src="/images/hero/daily-food-employees.webp"
            alt="The Daily Food team at our Accra production facility"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            quality={90}
            priority
            className="object-cover object-center"
          />
          {/* Mobile-only soft coral fade at bottom blends photo into the
              text panel below — no abrupt seam. */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-coral via-coral/60 to-transparent lg:hidden"
            aria-hidden="true"
          />
        </motion.div>

        {/* === Coral text panel === */}
        <div className="relative flex items-center overflow-hidden bg-coral pt-8 pb-12 sm:pt-12 sm:pb-16 lg:order-1 lg:py-0 lg:pr-0">
          {/* Decorative arcs — desktop only; clutters the small viewport */}
          <svg
            className="pointer-events-none absolute -bottom-32 -left-20 hidden h-[420px] w-[420px] opacity-15 lg:block"
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="100" cy="300" r="280" stroke="white" strokeWidth="1.5" />
            <circle cx="100" cy="300" r="200" stroke="white" strokeWidth="1" />
            <circle cx="100" cy="300" r="120" stroke="white" strokeWidth="0.8" />
          </svg>
          <div className="pointer-events-none absolute right-[-40px] top-[-40px] hidden h-32 w-32 rounded-full bg-accent/30 blur-3xl lg:block" aria-hidden="true" />

          <Container className="relative z-10 lg:max-w-none lg:pr-12 xl:pr-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:max-w-xl xl:max-w-2xl"
            >
              {/* Eyebrow — glass pill */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-1.5 sm:text-xs"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Be Smart, Eat Smart
              </motion.span>

              {/* Headline — mobile: 2 lines, tighter scale.
                  Desktop: 3 lines, dramatic display size. */}
              <h1 className="font-heading text-[40px] leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px]">
                <span className="lg:block">Baking an</span>{" "}
                <span className="lg:block">African</span>{" "}
                <span className="inline-flex items-baseline gap-2 sm:gap-3">
                  Champion
                  <span className="h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2 lg:h-3 lg:w-3" aria-hidden="true" />
                </span>
              </h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="mt-5 max-w-lg text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-base md:mt-8 md:text-xl"
              >
                From Ghana to 15 markets across West and Central Africa, Daily
                Food produces the baked goods, snacks and breads that reach{" "}
                <span className="font-semibold text-white">230 million+</span>{" "}
                urban consumers — home to{" "}
                <span className="font-semibold text-white">Boss Baker</span>{" "}
                and{" "}
                <span className="font-semibold text-white">Big Boss</span>.
              </motion.p>

              {/* CTAs — full-width on mobile so they're easy to tap */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="mt-6 sm:mt-8 md:mt-10"
              >
                <Link
                  href="/brands"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-coral-dark shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg sm:w-auto sm:text-base"
                >
                  Explore Our Brands
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </Container>
        </div>
      </div>

      {/* Scroll hint — bottom-right, desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 right-6 hidden flex-col items-center gap-1.5 text-white/70 lg:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
