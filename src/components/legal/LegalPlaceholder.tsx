import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { COMPANY } from "@/lib/constants";

interface LegalPlaceholderProps {
  title: string;
  description: string;
}

/*
 * Shared placeholder for /privacy, /terms and /cookies until the formal
 * documents are reviewed and published. Honest framing — does not pretend
 * to be a final policy. Routes the visitor to a real email contact for
 * questions in the meantime so the link is never a dead-end.
 */
export function LegalPlaceholder({ title, description }: LegalPlaceholderProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-coral py-20 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl text-white md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                {description}
              </p>
            </div>
          </Container>
        </section>

        {/* Body */}
        <section className="py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-white p-8 md:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-foreground-muted">
                Document in preparation
              </p>
              <h2 className="mt-3 font-heading text-2xl text-foreground md:text-3xl">
                We&apos;re finalising this document
              </h2>
              <p className="mt-4 leading-relaxed text-foreground-muted">
                Daily Food Limited International is preparing its formal{" "}
                {title.toLowerCase()} in line with applicable Ghanaian, ECOWAS
                and international regulations. The final document will be
                published on this page when it is ready.
              </p>
              <p className="mt-4 leading-relaxed text-foreground-muted">
                In the meantime, if you have a specific question about how we
                handle data, your rights, or our terms of engagement, please
                reach out and a member of our team will respond.
              </p>

              <a
                href={`mailto:${COMPANY.contact.email}?subject=${encodeURIComponent(title)} enquiry`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
              >
                <Mail className="h-4 w-4" />
                {COMPANY.contact.email}
              </a>

              <p className="mt-8 border-t border-border pt-5 text-xs text-foreground-muted">
                Last updated: this page will display a date once the formal
                document is published.
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
