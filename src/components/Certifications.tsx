import { Award, Presentation } from "lucide-react";
import { Section, Reveal } from "@/components/Section";
import { certifications, workshops } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certifications & workshops"
      description="Training programmes and workshops completed alongside my degree."
    >
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Certifications
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 60}>
                <div className="flex h-full items-start gap-3 rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]">
                  <span
                    className="grid size-9 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground"
                    aria-hidden="true"
                  >
                    <Award className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{c.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{c.org}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Workshops
          </h3>
          <div className="mt-4 space-y-4">
            {workshops.map((w, i) => (
              <Reveal key={w.name} delay={i * 60}>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-[var(--shadow-card)]">
                  <span
                    className="grid size-9 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground"
                    aria-hidden="true"
                  >
                    <Presentation className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{w.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{w.org}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
