/**
 * page.tsx — Homepage
 * --------------------
 * The single-scroll homepage that assembles all section components.
 * Each section is its own component for clean separation.
 * Wrapped in semantic <main> for accessibility and SEO.
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
      </main>
      <Footer />
    </>
  );
}
