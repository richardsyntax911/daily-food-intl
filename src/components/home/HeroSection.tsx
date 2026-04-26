"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ShieldCheck, MapPin, Calendar, ArrowRight } from "lucide-react";
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
    <section className="relative isolate flex min-h-[88vh] flex-col bg-coral lg:min-h-[92vh]">
      {/* === Top split: text panel + photo panel === */}
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* === Coral text panel === */}
        <div className="relative flex items-center overflow-hidden bg-coral pt-12 pb-16 sm:pt-16 sm:pb-20 lg:order-1 lg:py-0 lg:pr-0">
          {/* Decorative inner arcs — sit behind the text, low opacity */}
          <svg
            className="pointer-events-none absolute -bottom-32 -left-20 h-[420px] w-[420px] opacity-15"
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="100" cy="300" r="280" stroke="white" strokeWidth="1.5" />
            <circle cx="100" cy="300" r="200" stroke="white" strokeWidth="1" />
            <circle cx="100" cy="300" r="120" stroke="white" strokeWidth="0.8" />
          </svg>
          <div className="pointer-events-none absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />

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
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Be Smart, Eat Smart
              </motion.span>

              {/* Headline — modern wide tracking, mixed weights via display */}
              <h1 className="font-heading text-5xl text-white sm:text-6xl md:text-7xl xl:text-[88px]">
                Baking an
                <br />
                African
                <br />
                <span className="inline-flex items-baseline gap-3">
                  Champion
                  <span className="h-2 w-2 rounded-full bg-accent sm:h-3 sm:w-3" aria-hidden="true" />
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
                className="mt-6 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg md:mt-8 md:text-xl"
              >
                From Ghana to 15 markets across West and Central Africa, Daily
                Food produces the baked goods, snacks and breads that feed{" "}
                <span className="font-semibold text-white">400 million+</span>{" "}
                consumers — home to{" "}
                <span className="font-semibold text-white">Boss Baker</span>{" "}
                and{" "}
                <span className="font-semibold text-white">Big Boss</span>.
              </motion.p>

              {/* CTAs — modern minimal: solid + ghost with arrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="mt-8 flex flex-wrap gap-3 md:mt-10"
              >
                <Link
                  href="/brands"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-coral-dark shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg sm:text-base"
                >
                  Explore Our Brands
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/0 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10 sm:text-base"
                >
                  Our Story
                </Link>
              </motion.div>
            </motion.div>
          </Container>
        </div>

        {/* === Photo panel — full bleed, no overlay === */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative aspect-[16/10] w-full overflow-hidden lg:order-2 lg:aspect-auto lg:h-full"
        >
          <Image
            src="/images/hero/daily-food-employees.webp"
            alt="The Daily Food team at our Accra production facility"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            quality={90}
            priority
            className="object-cover"
          />
          {/* Mobile-only soft fade at bottom so the photo blends into the
              coral panel below (less abrupt seam) */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-coral/60 to-transparent lg:hidden"
            aria-hidden="true"
          />
        </motion.div>
      </div>

      {/* === Trust strip — full width across the bottom === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="border-t border-white/15 bg-coral-dark/40 backdrop-blur-sm"
      >
        <Container>
          <div className="grid grid-cols-1 gap-3 py-4 text-white sm:grid-cols-3 sm:divide-x sm:divide-white/15 md:py-5">
            <TrustChip
              icon={<Calendar className="h-4 w-4" />}
              label="Founded"
              value="2017 · Accra, Ghana"
            />
            <TrustChip
              icon={<MapPin className="h-4 w-4" />}
              label="Footprint"
              value="15 African Markets"
            />
            <TrustChip
              icon={<ShieldCheck className="h-4 w-4" />}
              label="Certified"
              value="ISO 22000 · FSSC 22000"
            />
          </div>
        </Container>
      </motion.div>

      {/* Scroll hint — bottom-right, desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-24 right-6 hidden flex-col items-center gap-1.5 text-white/70 lg:flex"
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

/* Trust-strip cell — icon + label/value pair */
function TrustChip({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 sm:px-4 md:px-6">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
        {icon}
      </span>
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
          {label}
        </span>
        <span className="text-sm font-semibold text-white">{value}</span>
      </div>
    </div>
  );
}
