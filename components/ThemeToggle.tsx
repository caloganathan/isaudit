"use client";

import { Moon, Sun } from "lucide-react";
import { useDeck } from "./DeckContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDeck();
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface/70 text-ink-muted backdrop-blur transition-colors hover:text-orange"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" strokeWidth={1.5} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.5} />
      )}
    </button>
  );
}
