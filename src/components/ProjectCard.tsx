import type { Project } from "@/data/projects";
import { MediaFrame } from "./MediaFrame";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden">
        <MediaFrame
          src={project.image}
          alt={`${project.title} — ${project.tagsLeft}`}
          label={project.title}
          caption="1600 × 1200"
          ratio="4 / 3"
          zoomable={false}
          className="rounded-[2px] border-border"
        />
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-4 border-t border-border pt-3">
        <h3 className="text-sm font-medium">
          <span className="text-muted-foreground">{project.number} — </span>
          {project.title}
        </h3>
        <span className="label-mono shrink-0">{project.year}</span>
      </div>
      <div className="mt-1 flex items-baseline justify-between gap-4">
        <p className="text-sm text-muted-foreground">{project.tagsLeft}</p>
        <p className="text-sm text-muted-foreground">{project.tagsRight}</p>
      </div>
    </article>
  );
}
