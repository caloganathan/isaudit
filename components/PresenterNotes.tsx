"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageSquareText, X } from "lucide-react";
import { tr, type SlideContent } from "@/lib/content";
import { useDeck } from "./DeckContext";

/**
 * Presenter mode: toggled with `N`, reveals per-slide speaker notes as a
 * bottom overlay. Never rendered in the default async view.
 */
export default function PresenterNotes({
  slideContents,
}: {
  slideContents: SlideContent[];
}) {
  const { presenter, togglePresenter, active, total, track } = useDeck();
  const slide = slideContents[active];

  return (
    <AnimatePresence>
      {presenter && slide && (
        <motion.aside
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-xl border border-line-strong bg-scrim p-5 shadow-2xl backdrop-blur-md md:inset-x-8"
          role="complementary"
          aria-label="Speaker notes"
        >
          <div className="mb-2 flex items-center justify-between gap-4">
            <span className="flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-orange">
              <MessageSquareText className="h-3.5 w-3.5" strokeWidth={1.5} />
              Speaker notes · {active + 1}/{total} · {slide.menuLabel}
            </span>
            <button
              onClick={togglePresenter}
              aria-label="Close presenter notes"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
          <p className="text-sm leading-relaxed text-ink-muted">
            {tr(slide.notes, track)}
          </p>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
