"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import type { Track } from "@/lib/content";
import type { ThemeName } from "@/lib/theme";

export type SlideMeta = { id: string; menuLabel: string };

type DeckContextValue = {
  track: Track;
  setTrack: (t: Track) => void;
  theme: ThemeName;
  toggleTheme: () => void;
  active: number;
  total: number;
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
  presenter: boolean;
  togglePresenter: () => void;
  slidesMeta: SlideMeta[];
  containerRef: RefObject<HTMLDivElement | null>;
  registerSlide: (index: number, el: HTMLElement | null) => void;
};

const DeckContext = createContext<DeckContextValue | null>(null);

export function useDeck(): DeckContextValue {
  const ctx = useContext(DeckContext);
  if (!ctx) throw new Error("useDeck must be used within DeckProvider");
  return ctx;
}

export function DeckProvider({
  slidesMeta,
  children,
}: {
  slidesMeta: SlideMeta[];
  children: ReactNode;
}) {
  const [track, setTrack] = useState<Track>("bpr");
  const [theme, setTheme] = useState<ThemeName>("dark");
  const [active, setActive] = useState(0);
  const [presenter, setPresenter] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slideEls = useRef<(HTMLElement | null)[]>([]);
  // In-flight navigation target, so rapid key presses advance past a slide
  // that is still scrolling into view.
  const targetRef = useRef<number | null>(null);
  const total = slidesMeta.length;

  const registerSlide = useCallback((index: number, el: HTMLElement | null) => {
    slideEls.current[index] = el;
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );
  const togglePresenter = useCallback(() => setPresenter((p) => !p), []);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(total - 1, index));
      const el = slideEls.current[clamped];
      const container = containerRef.current;
      if (el && container) {
        targetRef.current = clamped;
        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        container.scrollTo({
          top: el.offsetTop,
          behavior: reduce ? "auto" : "smooth",
        });
      }
    },
    [total]
  );

  const next = useCallback(
    () => goTo((targetRef.current ?? active) + 1),
    [goTo, active]
  );
  const prev = useCallback(
    () => goTo((targetRef.current ?? active) - 1),
    [goTo, active]
  );

  // Track the active slide with an IntersectionObserver on the container.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = slideEls.current.indexOf(entry.target as HTMLElement);
            if (idx >= 0) {
              setActive(idx);
              if (targetRef.current === idx) targetRef.current = null;
            }
          }
        }
      },
      { root: container, threshold: 0.55 }
    );
    for (const el of slideEls.current) if (el) observer.observe(el);
    // Manual wheel/touch scrolling takes over from any in-flight key target.
    const clearTarget = () => {
      targetRef.current = null;
    };
    container.addEventListener("wheel", clearTarget, { passive: true });
    container.addEventListener("touchmove", clearTarget, { passive: true });
    return () => {
      observer.disconnect();
      container.removeEventListener("wheel", clearTarget);
      container.removeEventListener("touchmove", clearTarget);
    };
  }, [total]);

  return (
    <DeckContext.Provider
      value={{
        track,
        setTrack,
        theme,
        toggleTheme,
        active,
        total,
        goTo,
        next,
        prev,
        presenter,
        togglePresenter,
        slidesMeta,
        containerRef,
        registerSlide,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
}
