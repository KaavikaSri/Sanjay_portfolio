import { Section, Reveal } from "@/components/Section";
import { profile, stats } from "@/data/portfolio";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building software, one problem at a time"
      muted
    >
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="space-y-5">
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
          <blockquote className="border-l-2 border-primary pl-4 text-base italic text-foreground">
            {profile.objective}
          </blockquote>
        </Reveal>

        <Reveal delay={120}>
          <dl className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-[var(--shadow-card)]"
              >
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-display text-2xl font-bold text-primary">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
