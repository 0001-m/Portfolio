/**
 * About.tsx
 * ---------
 * A short "about me" section with the resume summary and a placeholder
 * for a profile picture.
 *
 * Uses Framer Motion to fade in when the section scrolls into view.
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-8">
      <motion.div
        className="mx-auto max-w-4xl px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* ---- Section heading ---- */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          About<span className="text-accent">.</span>
        </h2>

        <div className="mt-6 flex flex-col md:flex-row gap-6">
          {/* ---- Profile picture placeholder ---- */}
          {/* 
            Profile picture goes here.
            Replace this div with:
            <Image src="/profile.jpg" alt="Mayur Jogade" width={160} height={160} className="rounded-md object-cover" />
            Drop your profile image as public/profile.jpg
          */}
          <Image
            src="/profileMJ.jpeg"
            alt="Mayur Jogade"
            width={128}
            height={128}
            className="w-32 h-32 flex-shrink-0 rounded-md object-cover border border-border"
          />


          {/* ---- Bio text from resume summary ---- */}
          <div className="space-y-4">
            <p className="text-base md:text-lg leading-relaxed text-foreground/80">
              I&apos;m a 3rd-year Computer Science student at Pimpri Chinchwad
              College of Engineering, Pune. I like building things that actually
              work and look good — whether it&apos;s a full-stack web app or a
              clean Figma prototype.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground/80">
              I pick up new tech fast, care about clean code and good UX, and
              I&apos;m always working on something. Currently grinding DSA and
              shipping MERN stack projects. Looking for a software engineering
              internship where I can contribute, learn, and grow.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
