import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { FeaturedCaseStudy } from "@/components/FeaturedCaseStudy";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Software } from "@/components/Software";
import { Stats } from "@/components/Stats";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LightboxProvider } from "@/components/ImageLightbox";
import "@/styles.css";

function App() {
  return (
    <LightboxProvider>
      <Header />
      <main>
        <Hero />
        <ProjectsGrid />
        <FeaturedCaseStudy />
        <About />
        <Experience />
        <Education />
        <Software />
        <Skills />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </LightboxProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
