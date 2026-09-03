import type { Project } from "@/data/projects";
import { MediaFrame } from "./MediaFrame";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden">
        <MediaFrame
          src={project.image}
          alt={`${project.title} — ${project.tags.join(" · ")}`}
          label={`PROJECT ${project.number}`}
          caption="1600 × 1200"
          hint="Replace later"
          ratio="4 / 3"
          className="border-border"
        />
        <div className="pointer-events-none absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/25" />
        <span className="pointer-events-none absolute right-3 top-3 text-sm text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          ↗
        </span>
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-4 border-t border-border pt-3">
        <h3 className="text-sm font-medium transition-colors duration-300 group-hover:text-foreground">
          <span className="text-muted-foreground">{project.number} — </span>
          {project.title}
        </h3>
        <span className="label-mono shrink-0">{project.year}</span>
      </div>
      <p className="mt-1 label-mono normal-case tracking-[0.08em]">{project.tags.join(" · ")}</p>
    </article>
  );
}
