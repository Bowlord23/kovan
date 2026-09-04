import { person } from "@/data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" bordered={false}>
      <div className="container-site">
        <div className="border-l border-border pl-6 py-12 md:pl-12 md:py-16 lg:pl-16">
          <Reveal>
            <div className="mb-12 space-y-2 md:mb-16">
              <span className="label-mono block text-accent">Связаться</span>
              <p className="text-base font-light text-muted-foreground md:text-lg">
                Открыт к проектной работе и новым задачам.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mb-20 md:mb-28 lg:mb-32">
              <a
                href={person.telegram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <h2 className="text-4xl font-bold leading-[1.1] tracking-tight transition-colors duration-500 md:text-6xl lg:text-7xl xl:text-8xl">
                  <span className="block text-foreground duration-500 group-hover:text-accent">
                    Есть проект?
                  </span>
                  <span className="block text-muted-foreground duration-500 group-hover:text-foreground">
                    Давайте обсудим.
                  </span>
                </h2>
                <div className="mt-6 h-px w-16 bg-accent transition-all duration-500 group-hover:w-full md:mt-8" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:gap-8">
              <div className="space-y-3">
                <span className="label-mono">Telegram</span>
                <a
                  href={person.telegram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-light text-foreground transition-colors duration-300 hover:text-accent md:text-xl"
                >
                  {person.telegram.label} ↗
                </a>
              </div>

              <div className="space-y-3">
                <span className="label-mono">Email</span>
                <a
                  href={person.email.href}
                  className="block break-all text-lg font-light text-foreground transition-colors duration-300 hover:text-accent md:text-xl"
                >
                  {person.email.label}
                </a>
              </div>

              <div className="space-y-3">
                <span className="label-mono">Локация</span>
                <p className="text-lg font-light text-muted-foreground md:text-xl">
                  {person.location}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
