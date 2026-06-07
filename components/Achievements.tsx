/**
 * Achievements.tsx
 * ----------------
 * Displays achievements and leadership experience as a flat,
 * minimal list. No timeline dots or lines — just clean cards.
 *
 * All data is defined locally since it's small and specific.
 * Uses Framer Motion to fade in when scrolled into view.
 */

"use client";

import { motion } from "framer-motion";

/** Shape of a single achievement */
interface Achievement {
  title: string;
  subtitle: string;
  description: string;
}

/** All achievements — extracted from the resume */
const achievements: Achievement[] = [
  {
    title: "Design Head — ACM Student Chapter",
    subtitle: "Aug 2025 – Mar 2026 · PCCOE, Pune",
    description:
      "Led visual design for technical events, created posters and social media creatives for 200+ students. Coordinated cross-platform branding and mentored junior design volunteers.",
  },
  {
    title: "BlueBit Hackathon — Grand Finalist",
    subtitle: "National Level",
    description:
      "Selected as a Grand Finalist among top teams in a nationwide software development competition. Built and pitched a full-stack product under a 24-hour deadline.",
  },
  {
    title: "MasterChef UI — 2nd Runner-up",
    subtitle: "College Event",
    description:
      "Secured 2nd runner-up for UI/UX design in Figma — recognized for layout clarity, color consistency, and interactive prototype quality.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <motion.div
        className="mx-auto max-w-4xl px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* ---- Section heading ---- */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          Achievements<span className="text-accent">.</span>
        </h2>

        {/* ---- Achievement cards ---- */}
        <div className="mt-8 space-y-6">
          {achievements.map((item) => (
            <article
              key={item.title}
              className="border border-border rounded-lg p-5"
            >
              {/* Achievement title */}
              <h3 className="text-lg md:text-xl font-medium text-foreground">
                {item.title}
              </h3>

              {/* Date / location */}
              <p className="mt-1 text-sm text-muted">{item.subtitle}</p>

              {/* Description */}
              <p className="mt-3 text-base text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
