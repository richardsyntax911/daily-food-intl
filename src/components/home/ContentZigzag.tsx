"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ContentBlock {
  heading: string;
  paragraph: string;
  linkText: string;
  linkHref: string;
  /* When imageUrl is set, the real photo renders. Otherwise the
     gradient placeholder fills in until a real image is supplied. */
  imageUrl?: string;
  imageAlt?: string;
  gradientFrom: string;
  gradientTo: string;
  placeholderLabel: string;
}

const contentBlocks: ContentBlock[] = [
  {
    heading: "Quality You Can Trust",
    paragraph:
      "Every product that leaves our facilities meets the highest standards of food safety and quality. Our state-of-the-art laboratories and rigorous testing protocols ensure that from raw ingredients to finished goods, nothing is left to chance. We are certified to international food safety standards and continuously invest in quality assurance.",
    linkText: "Our quality standards",
    linkHref: "/about#quality",
    imageUrl: "/images/hero/boss-baker-cupcake.jpg",
    imageAlt: "Boss Baker cupcakes — Daily Food's flagship product",
    gradientFrom: "from-primary",
    gradientTo: "to-primary-dark",
    placeholderLabel: "Quality Testing Lab",
  },
  {
    heading: "Sustainably Sourced",
    paragraph:
      "We believe great food starts at the source. That is why we partner directly with local farming communities, supporting sustainable agricultural practices and fair trade. By sourcing our raw materials responsibly, we ensure the finest ingredients while empowering the farmers and communities that grow them.",
    linkText: "Our sourcing practices",
    linkHref: "/sustainability#sourcing",
    imageUrl: "/images/sustainability/farm-plants.jpg",
    imageAlt: "Local farm plants — Daily Food's sustainable sourcing roots",
    gradientFrom: "from-green-700",
    gradientTo: "to-green-500",
    placeholderLabel: "Local Farming Partners",
  },
  {
    heading: "Growing Together",
    paragraph:
      "Our impact extends far beyond our products. From 30 employees in 2018 to 200+ today — with 60+ upskilled through high-skill training — we are committed to building careers, developing talent and investing in the communities that host our Ghana operations. Through our chairship of the Food For All Africa Advisory Board, our work also reaches 10,000+ people fed every month.",
    linkText: "Community impact",
    linkHref: "/about#community",
    imageUrl: "/images/sustainability/growing-together.webp",
    imageAlt: "Daily Food's community impact through the Food For All Africa partnership",
    gradientFrom: "from-secondary",
    gradientTo: "to-accent",
    placeholderLabel: "Community Programs",
  },
];

export function ContentZigzag() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="flex flex-col gap-16 lg:gap-24">
          {contentBlocks.map((block, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={block.heading}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image — real photo if imageUrl set, gradient
                    placeholder otherwise */}
                <ScrollReveal
                  direction={isReversed ? "right" : "left"}
                  delay={0.1}
                  className={isReversed ? "lg:order-2" : ""}
                >
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
                      block.imageUrl
                        ? "bg-gradient-to-br from-primary/10 to-accent/10"
                        : `bg-gradient-to-br ${block.gradientFrom} ${block.gradientTo}`
                    }`}
                  >
                    {block.imageUrl ? (
                      <Image
                        src={block.imageUrl}
                        alt={block.imageAlt ?? block.heading}
                        fill
                        sizes="(min-width: 1024px) 480px, 100vw"
                        quality={88}
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white/30">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-white/20 flex items-center justify-center">
                            <span className="text-2xl font-heading">
                              {index + 1}
                            </span>
                          </div>
                          <div className="text-sm tracking-widest uppercase">
                            {block.placeholderLabel}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>

                {/* Text content */}
                <ScrollReveal
                  direction={isReversed ? "left" : "right"}
                  delay={0.2}
                  className={isReversed ? "lg:order-1" : ""}
                >
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground">
                      {block.heading}
                    </h3>
                    <p className="mt-4 text-foreground-muted leading-relaxed">
                      {block.paragraph}
                    </p>
                    <Link
                      href={block.linkHref}
                      className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200 group"
                    >
                      {block.linkText}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
