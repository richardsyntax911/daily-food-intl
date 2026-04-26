"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ShieldCheck, MapPin, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/*
 * Home hero — full-bleed cinematic style.
 *
 * Background: real Daily Food employees photo (1360x765, public/images/hero/
 * daily-food-employees.webp). Edge-to-edge, no borders, no rotation.
 *
 * Overlay: coral gradient washing left-to-right at varying opacity so the
 * left half is dense enough for white text to read, and the right half
 * lets the photo breathe through. Subtle bottom-to-top dark gradient
 * keeps the trust strip readable wherever the photo lands.
 *
 * Departs from the previous layered/tilted composition — single dominant
 * photo, all the visual weight of the brand riding on one editorial shot.
 */
export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-coral">
      {/* === Full-bleed hero photograph === */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/daily-food-employees.webp"
          alt="The Daily Food team at our Accra production facility"
          fill
          sizes="100vw"
          quality={88}
          priority
          className="object-cover"
        />
      </div>

      {/* === Overlay stack — guaranteed text legibility ===
           1. Heavy dark linear gradient: dense black fading right.
              Coral on coral has no contrast, so we use neutral darks.
           2. Subtle coral colour cast on the rest so the brand voice
              still shows through where the photo is visible.
           3. Top + bottom vignettes so nav and trust strip read clean. */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-coral-dark/30 via-transparent to-coral/15 mix-blend-multiply"
        aria-hidden="true"
      />
      {/* Bottom-to-top fade for the trust strip readability */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-black/70 to-transparent"
        aria-hidden="true"
      />
      {/* Top vignette so the navigation doesn't fight the photo */}
      <div
        className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-black/40 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-20 md:py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Be Smart, Eat Smart
          </motion.span>

          {/* Headline — all white (yellow accent dropped because the photo
              has yellow Boss Baker vests that clashed with it). Strong
              drop shadow guarantees legibility against any frame in the
              photo behind. */}
          <h1
            className="font-heading text-5xl text-white sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[104px]"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.4)" }}
          >
            Baking an
            <br />
            African Champion
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
            className="mt-6 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg md:mt-8 md:text-xl"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.4)" }}
          >
            From Ghana to 15 markets across West and Central Africa, Daily
            Food produces the baked goods, snacks and breads that feed 400
            million+ consumers — home to{" "}
            <span className="font-semibold text-white">Boss Baker</span> and{" "}
            <span className="font-semibold text-white">Big Boss</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="mt-8 flex flex-wrap gap-4 md:mt-10"
          >
            <Button variant="white" size="lg" href="/brands">
              Explore Our Brands
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/about"
              className="border-white/60 bg-white/0 text-white hover:bg-white hover:text-primary"
            >
              Our Story
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* === Trust strip — three deck-backed credentials, fixed at bottom === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-white/15 backdrop-blur-sm"
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

      {/* Scroll-down indicator — small + restrained at desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-24 right-6 z-10 hidden flex-col items-center gap-1.5 text-white/70 lg:flex"
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

/* Compact trust-strip cell — icon + label/value pair */
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
