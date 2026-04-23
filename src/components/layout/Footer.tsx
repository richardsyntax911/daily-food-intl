import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY, SITE_NAME } from "@/lib/constants";

/**
 * Footer is organized by AUDIENCE rather than by site-map columns.
 * Inspired by Mondelēz's pattern — each column answers "I am a ___,
 * where do I go?" rather than "what section of the site is this?".
 */
const audienceColumns = [
  {
    heading: "For Consumers",
    description: "Discover our products",
    links: [
      { label: "Our Brands", href: "/brands" },
      { label: "Our Products", href: "/products" },
      { label: "News & Stories", href: "/news" },
      { label: "Sustainability", href: "/sustainability" },
    ],
  },
  {
    heading: "For Retail & Trade",
    description: "Partner with us",
    links: [
      { label: "Retail Partnerships", href: "/contact" },
      { label: "Food Service", href: "/contact" },
      { label: "Distribution Inquiries", href: "/contact" },
    ],
  },
  {
    heading: "For Investors",
    description: "Partner in our growth",
    links: [
      { label: "Investor Relations", href: "/investors" },
      { label: "Our Story", href: "/about" },
      { label: "Sustainability Report", href: "/sustainability" },
      { label: "Contact IR", href: "/contact" },
    ],
  },
  {
    heading: "For Talent & Media",
    description: "Join or cover our story",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Press & Media", href: "/news" },
      { label: "Media Contact", href: "/contact" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

const socialIcons = [
  { icon: Linkedin, href: COMPANY.socialLinks.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: COMPANY.socialLinks.facebook, label: "Facebook" },
  { icon: Instagram, href: COMPANY.socialLinks.instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-surface text-foreground-muted">
      {/* Wave divider — light-to-light so it reads as a subtle crease */}
      <div className="relative -mt-px h-16 overflow-hidden bg-background">
        <svg
          className="absolute bottom-0 h-16 w-full"
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          fill="var(--color-surface)"
        >
          <path d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,64 1440,64 L1440,64 L0,64 Z" />
        </svg>
      </div>

      <Container className="pb-8 pt-12">
        {/* Top grid: brand + 4 audience columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Image
              src="/logos/daily-food-international-logo.jpg"
              alt={SITE_NAME}
              width={746}
              height={340}
              className="mb-4 h-12 w-auto"
            />
            <p className="mb-6 text-sm leading-relaxed">
              Be Smart, Eat Smart. Baking an African champion from Ghana to 15
              markets since 2017.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-foreground-muted shadow-sm transition-colors hover:bg-primary hover:text-white"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Audience-routed columns */}
          {audienceColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-heading text-sm uppercase tracking-wider text-foreground">
                {col.heading}
              </h4>
              <p className="mb-4 mt-0.5 text-xs text-foreground-muted/70">
                {col.description}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip — address / phone / email side-by-side */}
        <div className="mt-12 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-3">
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
            <span>
              {COMPANY.headquarters.address}
              <br />
              {COMPANY.headquarters.city}, {COMPANY.headquarters.country}
            </span>
          </div>
          <a
            href={`tel:${COMPANY.contact.phone}`}
            className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4 shrink-0 text-secondary" />
            {COMPANY.contact.phone}
          </a>
          <a
            href={`mailto:${COMPANY.contact.email}`}
            className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4 shrink-0 text-secondary" />
            {COMPANY.contact.email}
          </a>
        </div>

        {/* Bottom bar: copyright + legal */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-foreground-muted/70">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-foreground-muted/70 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
