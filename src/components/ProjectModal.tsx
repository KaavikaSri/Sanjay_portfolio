import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/data/portfolio";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={project !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
        {project ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">{project.name}</DialogTitle>
              <DialogDescription className="text-base leading-relaxed">
                {project.summary}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 pt-2">
              <Block title="Problem">{project.problem}</Block>
              <Block title="Solution">{project.solution}</Block>
              <Block title="My contribution">{project.contribution}</Block>

              <div>
                <Heading>Features</Heading>
                <ul className="mt-2 space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Heading>Tech stack</Heading>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

function Heading({ children }: { children: string }) {
  return (
    <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{children}</h4>
  );
}

function Block({ title, children }: { title: string; children: string }) {
  return (
    <div>
      <Heading>{title}</Heading>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
