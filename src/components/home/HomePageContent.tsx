"use client";

import { HeroSection } from "./HeroSection";
import { BrandCarousel } from "./BrandCarousel";
import { AboutPreview } from "./AboutPreview";
import { ContentZigzag } from "./ContentZigzag";
import { StatsCounter } from "./StatsCounter";
import { NewsHighlights } from "./NewsHighlights";
import { SustainabilityPreview } from "./SustainabilityPreview";

export function HomePageContent() {
  return (
    <main>
      <HeroSection />
      <BrandCarousel />
      <AboutPreview />
      <ContentZigzag />
      <StatsCounter />
      <NewsHighlights />
      <SustainabilityPreview />
    </main>
  );
}
