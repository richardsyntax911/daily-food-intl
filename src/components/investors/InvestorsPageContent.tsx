"use client";

import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Percent,
  FileText,
  Download,
  Mail,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Financial highlights                                               */
/* ------------------------------------------------------------------ */
const financialHighlights = [
  {
    label: "Revenue",
    value: "GHS 85M",
    icon: DollarSign,
    change: "+23% YoY",
  },
  {
    label: "Net Income",
    value: "GHS 12M",
    icon: BarChart3,
    change: "+18% YoY",
  },
  {
    label: "Market Cap",
    value: "GHS 320M",
    icon: TrendingUp,
    change: "",
  },
  {
    label: "Dividend Yield",
    value: "3.2%",
    icon: Percent,
    change: "Annual",
  },
];

/* ------------------------------------------------------------------ */
/*  Annual reports                                                     */
/* ------------------------------------------------------------------ */
const annualReports = [
  { year: "2025", title: "Annual Report 2025", href: "#" },
  { year: "2024", title: "Annual Report 2024", href: "#" },
  { year: "2023", title: "Annual Report 2023", href: "#" },
];

export function InvestorsPageContent() {
  const { stockTicker } = COMPANY;
  const isPositive = stockTicker.change.startsWith("+");

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
                Investor Relations
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                Financial information, reports, and governance details for
                shareholders and the investment community.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  STOCK WIDGET                                                 */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-xl rounded-2xl border border-border bg-white p-8 text-center shadow-lg md:p-10">
              <div className="mb-2 flex items-center justify-center gap-2">
                <span className="rounded bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                  {stockTicker.exchange}
                </span>
                <span className="text-lg font-bold text-foreground">
                  {stockTicker.symbol}
                </span>
              </div>
              <p className="font-heading text-5xl text-foreground md:text-6xl">
                GHS {stockTicker.price}
              </p>
              <div className="mt-3 flex items-center justify-center gap-3">
                <span
                  className={`text-lg font-semibold ${
                    isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stockTicker.change}
                </span>
                <span
                  className={`rounded-full px-3 py-0.5 text-sm font-semibold ${
                    isPositive
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {stockTicker.changePercent}
                </span>
              </div>
              <p className="mt-2 text-xs text-foreground-muted">
                Ghana Stock Exchange &middot; Delayed by 15 min
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  FINANCIAL HIGHLIGHTS                                         */}
      {/* ============================================================ */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Financial Performance"
              title="Key Metrics"
              subtitle="A snapshot of our financial performance for the most recent fiscal year."
            />
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {financialHighlights.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <ScrollReveal key={metric.label} delay={index * 0.1}>
                  <div className="rounded-2xl border border-border bg-white p-6 text-center transition-shadow hover:shadow-lg">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-heading text-3xl text-foreground">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground-muted">
                      {metric.label}
                    </p>
                    {metric.change && (
                      <span className="mt-2 inline-block rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                        {metric.change}
                      </span>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  ANNUAL REPORTS                                               */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Reports & Filings"
              title="Annual Reports"
              subtitle="Download our annual reports for detailed financial and operational information."
            />
          </ScrollReveal>

          <div className="mx-auto max-w-2xl space-y-4">
            {annualReports.map((report, index) => (
              <ScrollReveal key={report.year} delay={index * 0.1}>
                <a
                  href={report.href}
                  className="flex items-center justify-between rounded-xl border border-border bg-white p-5 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading text-lg text-foreground">
                        {report.title}
                      </p>
                      <p className="text-sm text-foreground-muted">PDF Document</p>
                    </div>
                  </div>
                  <Download className="h-5 w-5 text-foreground-muted" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  CORPORATE GOVERNANCE                                         */}
      {/* ============================================================ */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <SectionHeading
                eyebrow="Governance"
                title="Corporate Governance"
              />
              <p className="text-center leading-relaxed text-foreground-muted">
                Daily Food Limited International is committed to the highest
                standards of corporate governance. Our Board of Directors
                provides strategic oversight while ensuring accountability,
                transparency, and ethical conduct across all operations. We
                adhere to the corporate governance guidelines of the Ghana Stock
                Exchange and maintain robust internal controls, risk management
                frameworks, and compliance processes to protect the interests of
                all stakeholders.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  INVESTOR CONTACT                                             */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-xl rounded-2xl border border-border bg-white p-8 text-center md:p-10">
              <SectionHeading
                eyebrow="Get in Touch"
                title="Investor Contact"
                subtitle="For investor inquiries, please reach out to our Investor Relations team."
              />
              <div className="space-y-4">
                <a
                  href={`mailto:${COMPANY.contact.investorEmail}`}
                  className="flex items-center justify-center gap-2 text-lg font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  <Mail className="h-5 w-5" />
                  {COMPANY.contact.investorEmail}
                </a>
                <a
                  href={`tel:${COMPANY.contact.phone}`}
                  className="flex items-center justify-center gap-2 text-foreground-muted transition-colors hover:text-foreground"
                >
                  <Phone className="h-5 w-5" />
                  {COMPANY.contact.phone}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
