import { about } from "@/data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about">
      <Reveal className="grid gap-8 md:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)]">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Обо мне</h2>
        <div className="max-w-2xl space-y-4">
          {about.map((p) => (
            <p key={p} className="text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
              {p}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
