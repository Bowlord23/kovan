import { skills } from "@/data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" title="Навыки">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
        {skills.map((skill, i) => (
          <Reveal
            key={skill.title}
            delay={(i % 2) * 60}
            className="border-t border-border py-6 md:[&:nth-child(-n+2)]:border-t-0 md:[&:nth-child(-n+2)]:pt-0"
          >
            <h3 className="text-base font-medium">{skill.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.detail}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
