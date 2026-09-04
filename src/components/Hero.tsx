import { person } from "@/data/content";
import { MediaFrame } from "./MediaFrame";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="container-site pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <div>
          <Reveal>
            <p className="label-mono">{person.role}</p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">{person.name}</h1>
            <p className="mt-4 text-base text-foreground/85 md:text-lg">{person.tagline}</p>
          </Reveal>

          <Reveal delay={80} className="mt-8 max-w-xl space-y-4">
            {person.intro.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
              {person.facts}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="border border-border px-5 py-2.5 text-sm transition-colors duration-300 hover:border-foreground/60 hover:bg-surface"
              >
                Смотреть проекты ↓
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                Связаться ↗
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <MediaFrame
            src="/images/55.png"
            alt="Третья Прядильная"
            label="FEATURED RENDER"
            caption="1920 × 1080"
            ratio="16 / 9"
          />
        </Reveal>
      </div>
    </section>
  );
}
