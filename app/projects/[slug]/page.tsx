/**
 * app/projects/[slug]/page.tsx — Project Detail Page
 * ---------------------------------------------------
 * Dynamic route that shows the full details of a single project.
 * Uses the slug from the URL to look up project data from lib/projects.ts.
 *
 * Features:
 * - generateMetadata for per-project SEO
 * - generateStaticParams for static generation of all project pages
 * - Title, tech tags, overview, key features, GitHub/Live buttons, back link
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/lib/projects";

/** Props passed to this page by Next.js — contains the slug parameter */
interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * generateStaticParams
 * Tells Next.js which project slugs exist so it can pre-render them at build time.
 */
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * generateMetadata
 * Creates unique SEO metadata for each project detail page.
 */
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Mayur Jogade`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Mayur Jogade`,
      description: project.tagline,
    },
  };
}

/**
 * ProjectPage component
 * Renders the full detail view for a single project.
 */
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  /* If no project matches the slug, show the 404 page */
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* ---- Back link ---- */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors mb-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to projects
        </Link>

        {/* ---- Project title ---- */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {project.title}
        </h1>

        {/* ---- Tech stack tags ---- */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full bg-card border border-border text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ---- Overview ---- */}
        <section className="mt-10">
          <h2 className="text-lg font-medium text-foreground">Overview</h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/80">
            {project.description}
          </p>
        </section>

        {/* ---- Key features ---- */}
        <section className="mt-10">
          <h2 className="text-lg font-medium text-foreground">Key Features</h2>
          <ul className="mt-3 space-y-3">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="text-sm text-foreground/70 leading-relaxed pl-4 border-l-2 border-border"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* ---- Action buttons ---- */}
        <div className="mt-10 flex flex-wrap gap-4">
          {project.githubUrl && project.githubUrl !== "" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-border text-foreground rounded-md hover:border-accent hover:text-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              View on GitHub
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-accent text-white rounded-md hover:opacity-90 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
