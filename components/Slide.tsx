"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { tr, type SlideContent } from "@/lib/content";
import { useDeck } from "./DeckContext";
import { Item, Reveal, Stagger } from "./Reveal";

/**
 * A full-screen snap panel. Registers itself with the deck for keyboard /
 * rail navigation. `ghost` renders a large ghosted numeral divider.
 */
export default function Slide({
  index,
  id,
  children,
  ghost,
  className = "",
}: {
  index: number;
  id: string;
  children: ReactNode;
  ghost?: string;
  className?: string;
}) {
  const { registerSlide } = useDeck();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    registerSlide(index, ref.current);
    return () => registerSlide(index, null);
  }, [index, registerSlide]);

  return (
    <section
      ref={ref}
      id={id}
      aria-label={`Slide ${index + 1}`}
      className={`slide-panel overflow-hidden px-5 md:px-16 lg:px-24 ${className}`}
    >
      {ghost && (
        <span
          aria-hidden
          className="ghost-numeral absolute -right-4 bottom-2 text-[9rem] md:right-10 md:top-1/2 md:-translate-y-1/2 md:text-[22rem]"
        >
          {ghost}
        </span>
      )}
      <div className="relative z-10 mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

/** Standard slide header: kicker, conclusion-led title, optional subtitle. */
export function SlideHeading({
  content,
  titleClassName = "",
  maxWidth = "max-w-4xl",
  hideSubtitle = false,
}: {
  content: SlideContent;
  titleClassName?: string;
  maxWidth?: string;
  hideSubtitle?: boolean;
}) {
  const { track } = useDeck();
  return (
    <Stagger className={maxWidth} gap={0.12}>
      {content.kicker && (
        <Item>
          <p className="mb-4 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-orange md:text-xs">
            <span className="inline-block h-px w-8 bg-orange" aria-hidden />
            {tr(content.kicker, track)}
          </p>
        </Item>
      )}
      <Item>
        <h2
          className={`font-serif text-3xl font-medium leading-[1.12] tracking-tight text-ink md:text-5xl ${titleClassName}`}
        >
          {tr(content.title, track)}
        </h2>
      </Item>
      {content.subtitle && !hideSubtitle && (
        <Item>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-muted md:text-base">
            {tr(content.subtitle, track)}
          </p>
        </Item>
      )}
    </Stagger>
  );
}

/** Support bullet list (Layer 2), staggered. */
export function SupportLines({ content }: { content: SlideContent }) {
  const { track } = useDeck();
  if (!content.support?.length) return null;
  return (
    <Stagger className="mt-8 max-w-3xl space-y-4" gap={0.1} delay={0.25}>
      {content.support.map((s, i) => (
        <Item key={i} className="flex gap-3.5">
          <span
            className="mt-2.5 block h-1 w-4 shrink-0 bg-orange/70"
            aria-hidden
          />
          <p className="text-sm leading-relaxed text-ink-muted md:text-[0.95rem]">
            {tr(s, track)}
          </p>
        </Item>
      ))}
    </Stagger>
  );
}

export { Reveal };
