"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, Mail, Menu, X } from "lucide-react";
import { brand, ctaContent } from "@/lib/content";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import TrackToggle from "./TrackToggle";
import { useDeck } from "./DeckContext";

const mailtoHref = `mailto:${ctaContent.email}?subject=${encodeURIComponent(
  ctaContent.emailSubject
)}`;

export default function Header() {
  const { slidesMeta, active, goTo, next, prev, total } = useDeck();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-scrim backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 md:px-8">
          <div className="flex items-center gap-4">
            <Link href="/" aria-label={`${brand.name} — deck start`}>
              <Logo />
            </Link>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label="Section menu"
              className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[0.68rem] tracking-wide text-ink-muted transition-colors hover:text-ink"
            >
              {menuOpen ? (
                <X className="h-3.5 w-3.5" strokeWidth={1.5} />
              ) : (
                <Menu className="h-3.5 w-3.5" strokeWidth={1.5} />
              )}
              <span className="hidden sm:inline">Sections</span>
            </button>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <TrackToggle />
            <ThemeToggle />
            <div className="hidden items-center md:flex">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="flex h-8 w-8 items-center justify-center rounded-l-full border border-line text-ink-muted transition-colors hover:text-orange"
              >
                <ChevronUp className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="-ml-px flex h-8 w-8 items-center justify-center rounded-r-full border border-line text-ink-muted transition-colors hover:text-orange"
              >
                <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
            <a
              href={mailtoHref}
              className="flex items-center gap-1.5 rounded-full bg-orange px-3.5 py-1.5 text-[0.68rem] font-semibold tracking-wide text-white transition-opacity hover:opacity-90 md:text-xs"
            >
              <Mail className="h-3.5 w-3.5" strokeWidth={1.75} />
              <span className="hidden sm:inline">{ctaContent.primaryLabel}</span>
              <span className="sm:hidden">Enquire</span>
            </a>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed left-4 top-16 z-40 w-72 rounded-xl border border-line bg-surface p-2 shadow-2xl md:left-8"
            aria-label="Deck sections"
          >
            {slidesMeta.map((s, i) => (
              <button
                key={s.id}
                onClick={() => {
                  goTo(i);
                  setMenuOpen(false);
                }}
                className={`flex w-full items-baseline gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  active === i
                    ? "bg-orange-dim text-orange"
                    : "text-ink-muted hover:bg-ghost hover:text-ink"
                }`}
              >
                <span className="w-6 shrink-0 font-serif text-xs tabular-nums opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.menuLabel}
              </button>
            ))}
            <div className="mt-1 border-t border-line px-3 pb-1 pt-2 text-[0.62rem] leading-relaxed text-ink-faint">
              <Link href="/teaser" className="hover:text-orange">
                Teaser cut
              </Link>
              {" · "}
              <Link href="/appendix" className="hover:text-orange">
                Appendix
              </Link>
              {" · "}
              <span>
                {active + 1} / {total} · keys ←→, N notes, T theme
              </span>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
