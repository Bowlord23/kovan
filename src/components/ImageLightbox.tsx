import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

type LightboxItem = { src: string; alt: string; fit?: "cover" | "contain" };

const LightboxContext = createContext<(item: LightboxItem) => void>(() => {});

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [item, setItem] = useState<LightboxItem | null>(null);
  const open = useCallback((next: LightboxItem) => setItem(next), []);

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setItem(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item]);

  return (
    <LightboxContext.Provider value={open}>
      {children}
      {item ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
          onClick={() => setItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <button
            onClick={() => setItem(null)}
            aria-label="Закрыть"
            className="absolute right-5 top-5 label-mono transition-colors hover:text-foreground"
          >
            Закрыть ✕
          </button>
          <img
            src={item.src}
            alt={item.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-full object-contain"
          />
        </div>
      ) : null}
    </LightboxContext.Provider>
  );
}
