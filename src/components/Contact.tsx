import { person } from "@/data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Связаться</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Открыт к проектной работе и новым задачам.
        </p>
      </Reveal>

      <Reveal delay={80} className="mt-12 max-w-3xl text-3xl font-medium leading-tight tracking-tight md:text-5xl">
        <p>
          Есть проект?
          <br />
          <span className="text-muted-foreground">Давайте обсудим.</span>
        </p>
      </Reveal>

      <Reveal delay={140} className="mt-14 grid gap-px bg-border sm:grid-cols-3">
        <div className="bg-background py-6 pl-5 pr-6">
          <p className="label-mono">Telegram</p>
          <a
            href={person.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-base transition-colors duration-300 hover:text-accent"
          >
            {person.telegram.label} ↗
          </a>
        </div>
        <div className="bg-background py-6 pl-5 pr-6">
          <p className="label-mono">Email</p>
          <a
            href={person.email.href}
            className="mt-2 inline-block break-all text-base transition-colors duration-300 hover:text-accent"
          >
            {person.email.label}
          </a>
        </div>
        <div className="bg-background py-6 pl-5 pr-6">
          <p className="label-mono">Локация</p>
          <p className="mt-2 text-base text-muted-foreground">{person.location}</p>
        </div>
      </Reveal>
    </Section>
  );
}
