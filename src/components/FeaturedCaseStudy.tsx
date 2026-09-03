import { caseStudy } from "@/data/caseStudy";
import { MediaFrame } from "./MediaFrame";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const columnClass: Record<1 | 2 | 3, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
};

export function FeaturedCaseStudy() {
  return (
    <Section id="case" title="Избранный проект">
      <Reveal className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="label-mono">{caseStudy.eyebrow}</p>
          <h3 className="mt-3 text-2xl font-medium tracking-tight md:text-[2rem]">
            {caseStudy.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{caseStudy.subtitle}</p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            {caseStudy.task}
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-px self-start bg-border sm:grid-cols-2">
          {caseStudy.meta.map((m) => (
            <div key={m.label} className="bg-background p-4">
              <dt className="label-mono">{m.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed">{m.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={80} className="mt-12">
        <MediaFrame
          src={caseStudy.hero.image}
          label={caseStudy.hero.label}
          caption={caseStudy.hero.caption}
          hint="Replace image"
          ratio={caseStudy.hero.ratio}
          fit={caseStudy.hero.fit}
        />
      </Reveal>

      <div className="mt-16 space-y-16">
        {caseStudy.blocks.map((block) => (
          <Reveal key={block.index} className="border-t border-border pt-8">
            <div className="grid gap-6 md:grid-cols-[160px_minmax(0,1fr)]">
              <h4 className="label-mono md:pt-1">
                {block.index} / {block.title}
              </h4>
              {block.text ? (
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                  {block.text}
                </p>
              ) : (
                <span />
              )}
            </div>

            {block.images.length > 0 ? (
              <div className={`mt-8 grid gap-4 ${columnClass[block.columns]}`}>
                {block.images.map((img) => (
                  <figure key={img.label}>
                    <MediaFrame
                      src={img.image}
                      label={img.label}
                      caption={img.caption}
                      hint="Replace later"
                      ratio={img.ratio}
                      fit={img.fit}
                    />
                    <figcaption className="mt-2 label-mono">{img.label}</figcaption>
                  </figure>
                ))}
              </div>
            ) : null}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
