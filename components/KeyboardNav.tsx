"use client";

import { useEffect } from "react";
import { useDeck } from "./DeckContext";

/**
 * Keyboard driving for live presenting:
 * →/↓/Space/PageDown = next · ←/↑/PageUp = previous ·
 * Home/End = first/last · N = presenter notes · T = theme.
 */
export default function KeyboardNav() {
  const { next, prev, goTo, total, togglePresenter, toggleTheme } = useDeck();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      )
        return;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          prev();
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(total - 1);
          break;
        case "n":
        case "N":
          togglePresenter();
          break;
        case "t":
        case "T":
          toggleTheme();
          break;
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo, total, togglePresenter, toggleTheme]);

  return null;
}
