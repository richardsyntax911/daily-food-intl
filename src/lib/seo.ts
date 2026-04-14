import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, COMPANY } from "./constants";

interface PageSEOProps {
  title: string;
  description?: string;
  path?: string;
  /**
   * Override the page's OG image. If omitted, Next.js inherits the
   * site-wide `app/opengraph-image.jpg` (the Daily Food monogram).
   */
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
  ogImage,
}: PageSEOProps): Metadata {
  const fullTitle = path === "" ? `${SITE_NAME} | ${COMPANY.tagline}` : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      // Per-page override only — otherwise Next.js uses app/opengraph-image.jpg
      ...(ogImage && {
        images: [{ url: ogImage, alt: title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/logos/daily-food-international-logo.jpg`,
    description: SITE_DESCRIPTION,
    foundingDate: COMPANY.founded.toString(),
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.headquarters.address,
      addressLocality: COMPANY.headquarters.city,
      addressCountry: COMPANY.headquarters.country,
      postalCode: COMPANY.headquarters.postalCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.contact.phone,
      contactType: "customer service",
      email: COMPANY.contact.email,
    },
    sameAs: Object.values(COMPANY.socialLinks),
    tickerSymbol: COMPANY.stockTicker.symbol,
  };
}

export function generateWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}
