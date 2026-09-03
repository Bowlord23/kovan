import { stats } from "@/data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Stats() {
  return (
    <Section id="stats" title="В цифрах">
      <div className="grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 60} className="bg-background py-6 pl-5 pr-6 md:py-8">
            <p className="text-3xl font-medium tracking-tight md:text-4xl">{s.value}</p>
            <p className="mt-2 max-w-[16rem] text-sm text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
