import { person } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="container-site flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="label-mono normal-case">© 2026 {person.name}</p>
        <div className="flex items-center gap-6">
          <p className="label-mono">{person.role}</p>
          <a
            href="#top"
            className="label-mono transition-colors duration-300 hover:text-foreground"
          >
            Наверх ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
