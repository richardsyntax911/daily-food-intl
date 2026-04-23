import Image from "next/image";

/*
 * Shared ISO 22000 + FSSC 22000 certification badges.
 *
 * Current files:
 *   /public/logos/certifications/fssc-22000.svg — OFFICIAL, sourced from
 *     the FSSC Foundation at fssc.com (wide green/grey horizontal wordmark)
 *   /public/logos/certifications/iso-22000.svg  — PLACEHOLDER, neutral
 *     typographic wordmark matching the FSSC aesthetic. Replace with the
 *     OFFICIAL mark from Daily Food's specific certifier (SGS, Bureau
 *     Veritas, TÜV, DQS, Lloyd's Register, Intertek, etc.) when available.
 *
 * Layout notes:
 * The official FSSC mark is a 131x25 horizontal wordmark (~5.2:1 ratio),
 * so we size by HEIGHT and let width auto-scale. This keeps the two
 * marks visually paired and prevents a cropped/squashed look from a
 * fixed-square container.
 */

type BadgeSize = "sm" | "md" | "lg";

const sizeMap: Record<BadgeSize, { heightClass: string; heightPx: number }> = {
  sm: { heightClass: "h-5", heightPx: 20 },
  md: { heightClass: "h-8", heightPx: 32 },
  lg: { heightClass: "h-12", heightPx: 48 },
};

interface CertificationBadgesProps {
  size?: BadgeSize;
  /* Optional wrapper class — e.g. "justify-center" / "justify-start" */
  className?: string;
  /* Greyscale / hover-colour treatment for busy backgrounds */
  muted?: boolean;
  /* Optional visible caption above the badges */
  label?: string;
}

export function CertificationBadges({
  size = "md",
  className = "",
  muted = false,
  label,
}: CertificationBadgesProps) {
  const { heightClass } = sizeMap[size];

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
          {label}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        <CertBadge
          src="/logos/certifications/iso-22000.svg"
          alt="ISO 22000 Certified"
          heightClass={heightClass}
          muted={muted}
        />
        <CertBadge
          src="/logos/certifications/fssc-22000.svg"
          alt="FSSC 22000 Certified"
          heightClass={heightClass}
          muted={muted}
        />
      </div>
    </div>
  );
}

function CertBadge({
  src,
  alt,
  heightClass,
  muted,
}: {
  src: string;
  alt: string;
  heightClass: string;
  muted: boolean;
}) {
  return (
    <div className={`flex-shrink-0 transition-transform duration-300 hover:scale-[1.03]`} title={alt}>
      <Image
        src={src}
        alt={alt}
        width={262} // intrinsic hint — actual display controlled by CSS
        height={50}
        className={`w-auto ${heightClass} object-contain transition-all duration-300 ${
          muted ? "opacity-80 grayscale hover:opacity-100 hover:grayscale-0" : ""
        }`}
      />
    </div>
  );
}
