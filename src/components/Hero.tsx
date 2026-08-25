import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/Section";
import resumeAsset from "@/assets/resume.asset.json";

const codeLines = [
  { indent: 0, tokens: [["const ", "kw"], ["developer", "var"], [" = {", "p"]] },
  { indent: 1, tokens: [["name: ", "key"], ["'Sanjay N'", "str"], [",", "p"]] },
  { indent: 1, tokens: [["role: ", "key"], ["'Full Stack Developer'", "str"], [",", "p"]] },
  { indent: 1, tokens: [["stack: ", "key"], ["['JavaScript', 'Node.js',", "str"]] },
  { indent: 2, tokens: [["'MongoDB', 'Python']", "str"], [",", "p"]] },
  { indent: 1, tokens: [["focus: ", "key"], ["'Full Stack + Data Science'", "str"], [",", "p"]] },
  { indent: 1, tokens: [["graduating: ", "key"], ["2026", "num"], [",", "p"]] },
  { indent: 0, tokens: [["};", "p"]] },
] as const;

const tokenClass: Record<string, string> = {
  kw: "text-primary",
  var: "text-foreground font-medium",
  key: "text-muted-foreground",
  str: "text-accent-foreground",
  num: "text-primary",
  p: "text-muted-foreground",
};

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              Open to full stack developer roles &amp; internships
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              Hi, I&apos;m {profile.name}
              <span className="mt-2 block text-primary">Full Stack Developer</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#projects">
                  View My Projects
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={resumeAsset.url} download="Sanjay_N_Resume.pdf">
                  <Download className="size-4" aria-hidden="true" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Linkedin className="size-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="size-4" aria-hidden="true" />
                Email
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4" aria-hidden="true" />
                {profile.location.split(",").slice(0, 2).join(", ")}
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-2.5 rounded-full bg-muted-foreground/30" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-muted-foreground/30" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-muted-foreground/30" aria-hidden="true" />
                <span className="ml-2 text-xs text-muted-foreground">developer.ts</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[0.8rem] leading-7 sm:text-sm">
                <code>
                  {codeLines.map((line, i) => (
                    <span key={i} className="block">
                      <span className="mr-4 select-none text-muted-foreground/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {"  ".repeat(line.indent)}
                      {line.tokens.map(([text, type], j) => (
                        <span key={j} className={tokenClass[type]}>
                          {text}
                        </span>
                      ))}
                    </span>
                  ))}
                </code>
              </pre>
              <div className="grid grid-cols-3 gap-px border-t border-border bg-border">
                {[
                  { label: "Internships", value: "4" },
                  { label: "Projects", value: "2" },
                  { label: "CGPA", value: "7.45" },
                ].map((item) => (
                  <div key={item.label} className="bg-card px-4 py-4 text-center">
                    <p className="font-display text-xl font-bold">{item.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
