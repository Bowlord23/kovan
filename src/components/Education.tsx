import { education } from "@/data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education">
      <Reveal className="grid gap-4 md:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)]">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Образование</h2>
        <div>
          <p className="text-base">{education.school}</p>
          <p className="mt-1 text-sm text-muted-foreground">{education.program}</p>
        </div>
      </Reveal>
    </Section>
  );
}
