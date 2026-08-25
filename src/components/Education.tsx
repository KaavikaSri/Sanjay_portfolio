import { GraduationCap } from "lucide-react";
import { Section, Reveal } from "@/components/Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background" muted>
      <ol className="relative space-y-5 sm:before:absolute sm:before:inset-y-2 sm:before:left-[19px] sm:before:w-px sm:before:bg-border">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 80}>
            <li className="relative sm:pl-14">
              <span
                className="absolute left-0 top-5 hidden size-10 place-items-center rounded-full border border-border bg-card text-primary sm:grid"
                aria-hidden="true"
              >
                <GraduationCap className="size-4" />
              </span>
              <div className="flex flex-wrap items-start justify-between gap-3 rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-card)]">
                <div>
                  <h3 className="text-base font-semibold">{item.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-primary">{item.year}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.score}</p>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
