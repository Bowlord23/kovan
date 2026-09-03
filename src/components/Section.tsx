import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  title,
  subtitle,
  children,
  bordered = true,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${bordered ? "border-t border-border" : ""} py-16 md:py-24`}
    >
      <div className="container-site">
        {title ? (
          <Reveal className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">{title}</h2>
            {subtitle ? (
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
            ) : null}
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}
