import { ArrowUpRight, FolderCode } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]">
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-10 place-items-center rounded-md bg-accent text-accent-foreground" aria-hidden="true">
          <FolderCode className="size-5" />
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold">{project.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Key features
        </p>
        <ul className="mt-2 space-y-1.5">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2 text-sm text-muted-foreground">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
          >
            {t}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => onOpen(project)}
        className="mt-6 inline-flex items-center gap-1.5 self-start rounded-md text-sm font-semibold text-primary transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        View project details
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </button>
    </article>
  );
}
