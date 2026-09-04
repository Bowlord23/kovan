import { createFileRoute } from "@tanstack/react-router";

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

const title = "Кованный Иван — 3D Artist / AGR Modeler";
const description =
  "Портфолио 3D-моделлера. ВПМ и НПМ для АГР, моделирование ОКС и благоустройства, UV, текстурирование и техническая подготовка моделей.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LightboxProvider>
      <Header />
      <main>
        <Hero />
        <ProjectsGrid />
        <FeaturedCaseStudy />
        <About />
        <Stats />
        <Experience />
        <Education />
        <Software />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </LightboxProvider>
  );
}
