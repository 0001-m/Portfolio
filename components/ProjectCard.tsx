/**
 * ProjectCard.tsx
 * ---------------
 * A single project card used inside the Projects grid.
 * Shows: project name (linked to detail page), one-line description,
 * tech stack tags, and GitHub/Live links.
 *
 * Hover effect: subtle border color change via Tailwind.
 */

import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border border-border rounded-lg p-5 transition-colors hover:border-accent/50">
      {/* ---- Project title — links to the detail page ---- */}
      <div className="flex items-start justify-between gap-4">
        <Link
          href={`/projects/${project.slug}`}
          className="text-xl font-medium text-foreground group-hover:text-accent transition-colors"
        >
          {project.title}
        </Link>
        <span className="text-sm text-muted flex-shrink-0 mt-1">
          {project.year}
        </span>
      </div>

      {/* ---- One-line description ---- */}
      <p className="mt-2 text-sm md:text-base text-muted leading-relaxed">
        {project.tagline}
      </p>

      {/* ---- Tech stack tags ---- */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-0.5 rounded-full bg-accent/5 border border-accent/20 text-accent/90"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* ---- Links to GitHub and Live demo ---- */}
      <div className="mt-4 flex gap-4">
        {project.githubUrl && project.githubUrl !== "" && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:underline"
          >
            GitHub ↗
          </a>
        )}
        {project.liveUrl && project.liveUrl !== "" && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:underline"
          >
            Live ↗
          </a>
        )}
      </div>
    </article>
  );
}
