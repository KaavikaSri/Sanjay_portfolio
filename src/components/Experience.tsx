import { Briefcase, MapPin } from "lucide-react";
import { Section, Reveal } from "@/components/Section";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Internships & industry practice"
      description="Hands-on exposure across artificial intelligence, Python development, front-end engineering and IT services."
      muted
    >
      <ol className="relative space-y-6 sm:before:absolute sm:before:inset-y-2 sm:before:left-[19px] sm:before:w-px sm:before:bg-border">
        {experiences.map((exp, i) => (
          <Reveal key={exp.role + exp.company} delay={i * 80}>
            <li className="relative sm:pl-14">
              <span
                className="absolute left-0 top-5 hidden size-10 place-items-center rounded-full border border-border bg-card text-primary sm:grid"
                aria-hidden="true"
              >
                <Briefcase className="size-4" />
              </span>
              <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm font-medium text-primary">{exp.company}</p>
                </div>
                {exp.location ? (
                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {exp.location}
                  </p>
                ) : null}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.focus}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
