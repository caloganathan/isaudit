"use client";

import type { ReactNode } from "react";
import type { SlideContent } from "@/lib/content";
import { DeckProvider, useDeck } from "./DeckContext";
import Header from "./Header";
import KeyboardNav from "./KeyboardNav";
import PresenterNotes from "./PresenterNotes";
import ProgressRail from "./ProgressRail";

function DeckScroll({ children }: { children: ReactNode }) {
  const { containerRef } = useDeck();
  return (
    <div ref={containerRef} className="deck-scroll">
      {children}
    </div>
  );
}

/** Shared shell for the main deck and the teaser cut. */
export default function DeckShell({
  slideContents,
  children,
}: {
  slideContents: SlideContent[];
  children: ReactNode;
}) {
  return (
    <DeckProvider
      slidesMeta={slideContents.map(({ id, menuLabel }) => ({ id, menuLabel }))}
    >
      <Header />
      <KeyboardNav />
      <ProgressRail />
      <PresenterNotes slideContents={slideContents} />
      <DeckScroll>{children}</DeckScroll>
    </DeckProvider>
  );
}
