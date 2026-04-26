"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/*
 * Home hero — Mondelez-inspired editorial layout.
 *
 * Left column: copy + CTAs over the coral brand voice background.
 * Right column: layered photo composition built from REAL Daily Food
 * imagery (sourced from press coverage + product catalogue):
 *   1. Production-line shot (scale + quality)
 *   2. Boss Baker pack shot (the brand consumers know)
 *   3. FoodForAll community photo (impact + purpose)
 *
 * On mobile the photo composition stacks above/below the copy depending
 * on viewport — copy first so the headline is always above the fold.
 */
export function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-coral pt-12 pb-16 md:pt-16 md:pb-24 lg:py-20">
      {/* === Background — gradient + decorative circles === */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-coral-light via-coral to-coral-dark" />
        <svg
          className="absolute top-0 right-0 h-[600px] w-[600px] opacity-10"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="450" cy="150" r="300" stroke="white" strokeWidth="1.5" />
          <circle cx="450" cy="150" r="200" stroke="white" strokeWidth="1" />
          <circle cx="450" cy="150" r="100" stroke="white" strokeWidth="0.5" />
        </svg>
        <svg
          className="absolute bottom-0 left-0 h-[400px] w-[400px] opacity-10"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path d="M0 400 A400 400 0 0 1 400 0" stroke="white" strokeWidth="1.5" />
          <path d="M0 300 A300 300 0 0 1 300 0" stroke="white" strokeWidth="1" />
          <path d="M0 200 A200 200 0 0 1 200 0" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* === Left: Copy === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-5 inline-block text-sm font-extrabold uppercase tracking-[0.18em] text-accent"
            >
              Be Smart, Eat Smart
            </motion.span>

            <h1 className="font-heading text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px]">
              Baking an African
              <br />
              Champion
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg md:mt-8 md:text-xl"
            >
              From Ghana to 15 markets across West and Central Africa, Daily
              Food produces the baked goods, snacks and breads that feed 400
              million+ consumers — home to Boss Baker and Big Boss.
            </motion.p>

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
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Trust strip — small, deck-backed */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-xs uppercase tracking-widest text-white/70 md:mt-14"
            >
              <span>Founded 2017</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
              <span>15 African markets</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
              <span>ISO 22000 · FSSC 22000</span>
            </motion.div>
          </motion.div>

          {/* === Right: Layered photo composition === */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative mx-auto h-[420px] w-full max-w-[480px] sm:h-[500px] lg:h-[560px] lg:max-w-none"
            aria-hidden="true"
          >
            {/* Main photo — production line, the largest tile, slight tilt */}
            <div className="absolute right-0 top-0 h-[78%] w-[88%] -rotate-[2deg] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
              <Image
                src="/images/news/daily-food-production-line.jpg"
                alt="Cupcakes on Daily Food's production line in Accra"
                fill
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 400px, 90vw"
                className="object-cover"
                priority
              />
              {/* Brand tag pinned to the photo */}
              <div className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground shadow-md backdrop-blur-sm">
                Accra · Production
              </div>
            </div>

            {/* Floating product pack shot — top-right accent on yellow sunburst */}
            <div className="absolute right-[-12px] top-[-8px] h-[36%] w-[42%] rotate-[5deg] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:right-[-24px] sm:top-[-16px]">
              <div className="relative h-full w-full bg-gradient-to-br from-[#F4C82E] via-[#F0B020] to-[#E89A0E]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.35)_0%,_transparent_60%)]" />
                <div className="relative flex h-full items-center justify-center p-3">
                  <div className="relative h-full w-full">
                    <Image
                      src="/products/boss-baker-fruit-cake.png"
                      alt="Boss Baker Fruit Cake pack shot"
                      fill
                      sizes="(min-width: 1024px) 200px, (min-width: 640px) 170px, 38vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Community photo — bottom-left small accent */}
            <div className="absolute bottom-0 left-0 h-[40%] w-[48%] rotate-[3deg] overflow-hidden rounded-2xl border-4 border-white shadow-xl">
              <Image
                src="/images/news/foodforall-pastry-day-2.jpg"
                alt="Daily Food's FoodForAll partnership — National Pastry Day in Accra"
                fill
                sizes="(min-width: 1024px) 240px, (min-width: 640px) 200px, 45vw"
                className="object-cover"
              />
              {/* Tag */}
              <div className="absolute bottom-2 left-2 rounded-full bg-white/95 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-foreground shadow-md backdrop-blur-sm">
                Community
              </div>
            </div>

            {/* Decorative confetti dots */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-accent/40 blur-2xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -top-10 -left-6 h-20 w-20 rounded-full bg-secondary/40 blur-2xl" aria-hidden="true" />
          </motion.div>
        </div>
      </Container>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-xs uppercase tracking-widest text-white/60">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
