import { useEffect, useState } from "react";
import { navItems, person } from "@/data/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-site flex h-14 items-center justify-between">
        <a
          href="#top"
          className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] transition-colors hover:text-muted-foreground"
        >
          {person.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={person.email.href}
            className="hidden text-xs text-muted-foreground transition-colors hover:text-foreground sm:block md:text-sm"
          >
            {person.email.label}
          </a>
          <a
            href={person.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-3 py-1.5 text-xs transition-colors duration-300 hover:border-foreground/60 hover:bg-surface md:text-sm"
          >
            {person.telegram.label} ↗
          </a>
          <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Меню"
          className="label-mono transition-colors hover:text-foreground md:hidden"
        >
          {open ? "Закрыть" : "Меню"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-border bg-background md:hidden"
          aria-label="Мобильная навигация"
        >
          <ul className="container-site py-2">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-border/60 last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
