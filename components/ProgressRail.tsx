"use client";

import { useDeck } from "./DeckContext";

/** Right-edge dot rail with hover labels — click to jump. */
export default function ProgressRail() {
  const { active, slidesMeta, goTo } = useDeck();
  return (
    <nav
      aria-label="Slide navigation"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-2.5 md:flex"
    >
      {slidesMeta.map((s, i) => (
        <button
          key={s.id}
          onClick={() => goTo(i)}
          aria-label={`Go to slide ${i + 1}: ${s.menuLabel}`}
          aria-current={active === i ? "true" : undefined}
          className="group flex items-center gap-2"
        >
          <span className="pointer-events-none translate-x-1 rounded border border-line bg-surface px-2 py-0.5 text-[0.6rem] tracking-wide text-ink-muted opacity-0 shadow-sm transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
            {s.menuLabel}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === i
                ? "h-5 w-1.5 bg-orange"
                : "h-1.5 w-1.5 bg-ink-faint/50 group-hover:bg-ink-muted"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
