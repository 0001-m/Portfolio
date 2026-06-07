/**
 * Skills.tsx
 * ----------
 * Displays technical skills grouped by category.
 * Each category has a label and a row of clean pill badges.
 * Data comes from lib/skills.ts — not hardcoded here.
 *
 * Uses Framer Motion to fade in when scrolled into view.
 */

"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        className="mx-auto max-w-4xl px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* ---- Section heading ---- */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          Skills<span className="text-accent">.</span>
        </h2>

        {/* ---- Skill categories ---- */}
        <div className="mt-8 space-y-6">
          {skillCategories.map((category) => (
            <div key={category.category}>
              {/* Category label */}
              <h3 className="text-base font-medium text-muted mb-3">
                {category.category}
              </h3>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-full border border-border text-foreground/80 bg-card hover:border-accent hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
