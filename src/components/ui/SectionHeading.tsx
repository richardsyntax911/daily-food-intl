import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  alignment = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        alignment === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block text-sm font-semibold uppercase tracking-widest",
            light ? "text-secondary" : "text-coral"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-lg",
            light ? "text-white/80" : "text-foreground-muted",
            alignment === "left" && "mx-0"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
