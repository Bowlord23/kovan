import { experience } from "@/data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="Опыт">
      <div>
        {experience.map((item) => (
          <Reveal
            key={item.title}
            className="grid gap-4 border-t border-border py-8 first:border-t-0 first:pt-0 md:grid-cols-[200px_minmax(0,1fr)]"
          >
            <div>
              <p className="text-sm">{item.period}</p>
              <p className="mt-1 label-mono">{item.dates}</p>
            </div>
            <div className="max-w-2xl">
              <h3 className="text-base font-medium">{item.title}</h3>
              <p className="mt-1 label-mono">{item.company}</p>
              <div className="mt-4 space-y-3">
                {item.description.map((d) => (
                  <p key={d} className="text-sm leading-relaxed text-muted-foreground">
                    {d}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
