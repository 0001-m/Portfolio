/**
 * Projects.tsx
 * ------------
 * Displays all projects in a clean grid layout.
 * Pulls project data from lib/projects.ts and renders a ProjectCard
 * for each one.
 *
 * Uses Framer Motion to fade in when scrolled into view.
 */

"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        className="mx-auto max-w-4xl px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* ---- Section heading ---- */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          Projects<span className="text-accent">.</span>
        </h2>

        {/* ---- Project cards grid ---- */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
