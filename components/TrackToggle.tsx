"use client";

import { tracks, type Track } from "@/lib/content";
import { useDeck } from "./DeckContext";

export default function TrackToggle() {
  const { track, setTrack } = useDeck();
  return (
    <div
      role="radiogroup"
      aria-label="Bank segment"
      className="flex items-center rounded-full border border-line bg-surface/70 p-0.5 backdrop-blur"
    >
      {(Object.keys(tracks) as Track[]).map((t) => {
        const activeT = track === t;
        return (
          <button
            key={t}
            role="radio"
            aria-checked={activeT}
            onClick={() => setTrack(t)}
            className={`rounded-full px-3 py-1 text-[0.68rem] font-medium tracking-wide whitespace-nowrap transition-colors duration-300 md:text-xs ${
              activeT
                ? "bg-orange text-white"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            {tracks[t].short}
          </button>
        );
      })}
    </div>
  );
}
