import { software } from "@/data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Software() {
  return (
    <Section id="software" title="Инструменты">
      <Reveal className="flex flex-wrap items-baseline gap-x-8 gap-y-4">
        <span className="text-2xl font-medium tracking-tight md:text-3xl">{software.primary}</span>
        {software.others.map((tool) => (
          <span key={tool} className="text-base text-muted-foreground">
            {tool}
          </span>
        ))}
      </Reveal>
    </Section>
  );
}
