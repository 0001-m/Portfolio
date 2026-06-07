/**
 * projects.ts
 * -----------
 * Contains all project data extracted from the resume.
 * Each project has a unique slug used for routing to its detail page.
 * Import this wherever you need project information — never hardcode
 * project data inside components.
 */

/** Shape of a single project */
export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  year: string;
}

/** All projects — order matches the resume */
export const projects: Project[] = [
  {
    slug: "stride",
    title: "Stride",
    tagline: "Team Project Management Platform",
    description:
      "A team project management platform powered by scalable RESTful APIs, where users can create projects, invite members, assign roles, and collaborate — designed as an alternative to tools like Trello or Asana.",
    features: [
      "Project-level role-based access control with three roles — Owner, Admin, and Member — so teams can control who can edit, assign, or manage tasks",
      "Kanban board with drag-and-drop task management across columns, letting teams move tasks through stages visually",
      "Dashboard with analytics showing task distribution, completion rates, and 14-day activity trends",
      "Team collaboration features including project invitations and member management",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/0001-m/Stride",
    liveUrl: "https://stride-bfg1.onrender.com/",
    year: "2026",
  },
  {
    slug: "job-tracker",
    title: "Job Tracker",
    tagline: "Personal Job Application Tracker",
    description:
      "A personal job application tracker to help students manage and monitor their internship search, with a Node.js/Express backend handling application CRUD, pipeline status updates, and reminder logic.",
    features: [
      "User authentication with JWT and bcrypt so each user sees only their own data",
      "Protected REST API endpoints with middleware-based token verification",
      "Dashboard with Recharts charts showing application volume over time and status breakdown",
      "Deployed frontend on Vercel and backend on Render with MongoDB Atlas",
      "CSV export of all applications for offline reference",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "JWT",
      "Recharts",
    ],
    githubUrl: "https://github.com/0001-m/job-tracker",
    liveUrl: "https://job-tracker-kappa-nine.vercel.app",
    year: "2026",
  },
  {
    slug: "banking-system-simulator",
    title: "Banking System Simulator",
    tagline: "Console-based Banking System in C++",
    description:
      "A console-based banking system built in C++ applying core OOP concepts — classes, inheritance, polymorphism, and abstraction — in depth.",
    features: [
      "Abstract base class Account with pure virtual functions, inherited by SavingsAccount and CurrentAccount with custom withdrawal rules",
      "Runtime polymorphism using base class pointers in an STL vector to manage multiple account types through a unified interface",
      "Encapsulation to protect balance data and dynamic memory allocation with new/delete for heap-managed objects",
    ],
    techStack: ["C++"],
    githubUrl: "https://github.com/0001-m/Banking-System-Simulator",
    liveUrl: "",    // No live URL for a console application
    year: "2026",
  },
];

/**
 * Look up a single project by its slug.
 * Returns undefined if no project matches.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
