import { useState } from "react";
import { Section, Reveal } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { projects, type Project } from "@/data/portfolio";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="Full stack applications built end to end — from interface and validation to backend logic and database."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 90} className="h-full">
            <ProjectCard project={project} onOpen={setActive} />
          </Reveal>
        ))}
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
