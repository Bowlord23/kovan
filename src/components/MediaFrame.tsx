import { useLightbox } from "./ImageLightbox";

/**
 * Универсальный контейнер изображения.
 * Если src = null — рисуется аккуратный placeholder с технической подписью.
 * По клику на реальное изображение открывается lightbox.
 */
export function MediaFrame({
  src,
  alt,
  label,
  caption,
  ratio = "3 / 2",
  fit = "cover",
  hint,
  zoomable = true,
  className = "",
}: {
  src?: string | null;
  alt?: string;
  label: string;
  caption?: string;
  ratio?: string;
  fit?: "cover" | "contain";
  hint?: string;
  zoomable?: boolean;
  className?: string;
}) {
  const openLightbox = useLightbox();

  if (!src) {
    return (
      <div
        style={{ aspectRatio: ratio }}
        className={`flex w-full flex-col items-center justify-center gap-1.5 rounded-[2px] border border-border bg-surface/60 ${className}`}
      >
        <span className="label-mono text-foreground/70">{label}</span>
        {caption ? <span className="label-mono">{caption}</span> : null}
        {hint ? <span className="label-mono text-muted-foreground/60">{hint}</span> : null}
      </div>
    );
  }

  const img = (
    <img
      src={src}
      alt={alt ?? label}
      loading="lazy"
      decoding="async"
      className={`h-full w-full ${
        zoomable
          ? "transition-transform duration-[350ms] ease-out group-hover:scale-[1.03]"
          : ""
      } ${fit === "contain" ? "object-contain" : "object-cover"}`}
    />
  );

  if (!zoomable) {
    return (
      <div
        style={{ aspectRatio: ratio }}
        className={`block w-full overflow-hidden rounded-[2px] border border-border bg-surface/60 ${className}`}
      >
        {img}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => openLightbox({ src, alt: alt ?? label, fit })}
      style={{ aspectRatio: ratio }}
      className={`group block w-full overflow-hidden rounded-[2px] border border-border bg-surface/60 ${className}`}
      aria-label={`Открыть изображение: ${alt ?? label}`}
    >
      {img}
    </button>
  );
}
