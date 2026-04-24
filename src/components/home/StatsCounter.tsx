"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  // Numbers sourced from the Nov 2022 management presentation.
  { value: 200, suffix: "+", label: "Employees" },
  { value: 15, suffix: "", label: "Countries" },
  { value: 9, suffix: "", label: "Blue-Chip Partners" },
  { value: 400, suffix: "M+", label: "Consumer Reach" },
];

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

function AnimatedCounter({ stat, isInView }: { stat: Stat; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), stat.value);
      setCount(current);

      if (step >= steps) {
        clearInterval(timer);
        setCount(stat.value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <span>
      {formatNumber(count)}
      {stat.suffix}
    </span>
  );
}

export function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-16 md:py-20" ref={ref}>
      <Container>
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-center"
            >
              <div className="font-heading text-4xl text-primary sm:text-5xl md:text-6xl">
                <AnimatedCounter stat={stat} isInView={isInView} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-foreground-muted sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
