"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="450" cy="150" r="300" stroke="white" strokeWidth="1.5" />
          <circle cx="450" cy="150" r="200" stroke="white" strokeWidth="1" />
          <circle cx="450" cy="150" r="100" stroke="white" strokeWidth="0.5" />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M0 400 A400 400 0 0 1 400 0"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M0 300 A300 300 0 0 1 300 0"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M0 200 A200 200 0 0 1 200 0"
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>
        <svg
          className="absolute top-1/2 left-1/3 w-[200px] h-[200px] opacity-5"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="80" fill="white" />
        </svg>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl"
        >
          {/* Eyebrow label — matches the eyebrow pattern used across the home page */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-6 inline-block text-sm font-semibold uppercase tracking-widest text-accent"
          >
            Daily Food International
          </motion.span>

          <h1 className="font-heading text-6xl text-white md:text-7xl lg:text-[88px] xl:text-[104px]">
            Nourishing Africa,
            <br />
            One Bite at a Time
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl lg:text-2xl lg:leading-relaxed"
          >
            From farm to table, we craft quality food products that celebrate
            Africa&apos;s rich culinary heritage and nourish communities across
            the continent and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="mt-10 flex flex-wrap gap-4"
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
        </motion.div>
      </Container>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs uppercase tracking-widest">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
