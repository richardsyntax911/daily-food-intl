"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

/*
 * Home hero — modern asymmetric two-panel split.
 *
 * Polished pass: dropped the decorative SVG arcs, accent blur dot, and
 * playful flourishes (glass eyebrow pill, accent dot at end of Champion).
 * What's left is the brand voice (coral) carrying confident negative
 * space, an editorial-style accent rule above the eyebrow, and the photo
 * panel doing its job edge-to-edge.
 *
 * Same coral palette, same brand voice — tightened execution to match
 * an international food manufacturer's institutional polish.
 */
export function HeroSection() {
  return (
    /* Section auto-heights on mobile so it never overflows the viewport.
       Forces a tall cinematic min-h on lg+ where vertical space is plenty. */
    <section className="relative isolate flex flex-col bg-coral lg:min-h-[92vh]">
      {/* === Top split: PHOTO + TEXT panels (mobile photo first) === */}
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* === Photo panel ===
            Mobile: shows FIRST (visual brand hook).
            Desktop: lg:order-2 puts it on the right, full-bleed of its column. */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
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
        <div className="relative flex items-center bg-coral pt-10 pb-14 sm:pt-14 sm:pb-20 lg:order-1 lg:py-0 lg:pr-0">
          <Container className="relative z-10 lg:max-w-none lg:pr-12 xl:pr-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:max-w-xl xl:max-w-2xl"
            >
              {/* Editorial-style eyebrow — thin accent rule + clean uppercase
                  copy. No glass pill, no coral dot, no decorative chrome.
                  Pattern used by Bloomberg, Reuters, FT, premium brands. */}
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-6 flex items-center gap-3 sm:mb-8"
              >
                <span aria-hidden="true" className="h-px w-8 bg-white/60 sm:w-12" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-white sm:text-xs">
                  Be Smart, Eat Smart
                </span>
              </motion.div>

              {/* Headline — confident display type, no decorative dot.
                  Mobile: 2 lines. Desktop: 3 lines for cinematic stack. */}
              <h1 className="font-heading text-[40px] leading-[1.02] tracking-[-0.025em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px]">
                <span className="lg:block">Baking an</span>{" "}
                <span className="lg:block">African</span>{" "}
                <span>Champion</span>
              </h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="mt-6 max-w-lg text-sm leading-relaxed text-white/90 sm:mt-8 sm:text-base md:text-lg lg:text-xl"
              >
                From Ghana to 15 markets across West and Central Africa, Daily
                Food produces the baked goods, snacks and breads that reach{" "}
                <span className="font-semibold text-white">230 million+</span>{" "}
                urban consumers — home to{" "}
                <span className="font-semibold text-white">Boss Baker</span>{" "}
                and{" "}
                <span className="font-semibold text-white">Big Boss</span>.
              </motion.p>

              {/* CTA — single primary action. Subtle hover, no bounce. */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="mt-8 sm:mt-10 md:mt-12"
              >
                <Link
                  href="/brands"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-coral-dark shadow-sm transition-colors hover:bg-white/95 sm:w-auto sm:text-[15px]"
                >
                  Explore Our Brands
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            </motion.div>
          </Container>
        </div>
      </div>

      {/* Scroll hint — bottom-right, desktop only, dialled down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 right-6 hidden flex-col items-center gap-1 text-white/50 lg:flex"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.22em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-3.5 w-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
