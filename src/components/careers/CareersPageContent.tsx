"use client";

import {
  TrendingUp,
  Lightbulb,
  Globe,
  Gift,
  MapPin,
  Building2,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { jobListings, type JobListing } from "@/data/jobs";

/* ------------------------------------------------------------------ */
/*  Culture values                                                     */
/* ------------------------------------------------------------------ */
const cultureValues = [
  {
    title: "Growth",
    icon: TrendingUp,
    description:
      "We invest in your professional development with training programs, mentorship, and clear career progression paths.",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    description:
      "We encourage creative thinking and give you the freedom to experiment, test new ideas, and push boundaries.",
  },
  {
    title: "Diversity",
    icon: Globe,
    description:
      "Our team spans 12 countries. We celebrate different perspectives and believe diversity drives better outcomes.",
  },
  {
    title: "Benefits",
    icon: Gift,
    description:
      "Competitive compensation, health coverage, flexible work arrangements, and generous leave policies for every team member.",
  },
];

/* ------------------------------------------------------------------ */
/*  Type badge color                                                   */
/* ------------------------------------------------------------------ */
function typeBadgeColor(type: JobListing["type"]) {
  switch (type) {
    case "Full-time":
      return "bg-green-100 text-green-800";
    case "Part-time":
      return "bg-blue-100 text-blue-800";
    case "Contract":
      return "bg-amber-100 text-amber-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

/* ------------------------------------------------------------------ */
/*  Format date                                                        */
/* ------------------------------------------------------------------ */
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ------------------------------------------------------------------ */
/*  Job Card component                                                 */
/* ------------------------------------------------------------------ */
function JobCard({ job }: { job: JobListing }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-lg md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-xl text-foreground">{job.title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-foreground-muted">
            <span className="flex items-center gap-1">
              <Building2 className="h-4 w-4" />
              {job.department}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              Posted {formatDate(job.postedDate)}
            </span>
          </div>
        </div>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${typeBadgeColor(
            job.type
          )}`}
        >
          {job.type}
        </span>
      </div>

      <p className="mt-4 leading-relaxed text-foreground-muted">
        {job.description}
      </p>

      {/* Expandable requirements */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
      >
        {expanded ? "Hide" : "View"} Requirements
        {expanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>

      {expanded && (
        <ul className="mt-3 space-y-2 border-t border-border pt-4">
          {job.requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {req}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        <Button
          href={`mailto:careers@dailyfoodintl.com?subject=Application: ${job.title}`}
          size="sm"
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export function CareersPageContent() {
  return (
    <main>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="bg-primary py-24 md:py-32">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <h1 className="font-heading text-4xl text-white md:text-5xl lg:text-6xl">
                Join Our Team
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                Build your career at one of Africa&apos;s most dynamic food
                companies. We&apos;re looking for passionate people who want to
                make a difference.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  CULTURE VALUES                                               */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why Daily Food"
              title="Our Culture"
              subtitle="What makes Daily Food a great place to work."
            />
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {cultureValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <div className="rounded-2xl border border-border bg-white p-6 text-center transition-shadow hover:shadow-lg">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  JOB LISTINGS                                                 */}
      {/* ============================================================ */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Open Positions"
              title="Current Opportunities"
              subtitle={`We have ${jobListings.length} open positions across our global offices.`}
            />
          </ScrollReveal>

          <div className="mx-auto max-w-4xl space-y-6">
            {jobListings.map((job, index) => (
              <ScrollReveal key={job.id} delay={index * 0.08}>
                <JobCard job={job} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  GENERAL APPLICATION CTA                                      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionHeading
                eyebrow="Don't See a Match?"
                title="Send Us Your CV"
                subtitle="We're always looking for talented individuals. Submit a general application and we'll keep your profile on file."
              />
              <Button
                href="mailto:careers@dailyfoodintl.com?subject=General Application"
                size="lg"
              >
                General Application
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
