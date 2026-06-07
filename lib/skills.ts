/**
 * skills.ts
 * ---------
 * Skills data grouped by category, extracted from the resume.
 * Import this in the Skills component — never hardcode skill lists
 * inside components.
 */

/** Shape of a skill category */
export interface SkillCategory {
  category: string;
  skills: string[];
}

/** All skill categories — matches the resume grouping */
export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "C++", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "Postman", "Figma", "VS Code", "Linux"],
  },
  {
    category: "Coursework",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Computer Networks",
      "Operating Systems",
    ],
  },
];
