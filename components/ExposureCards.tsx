"use client";

import {
  KeyRound,
  GitBranch,
  HardDriveDownload,
  Building2,
  Radar,
  ShieldCheck,
  Users,
  ListChecks,
} from "lucide-react";
import { exposureItems, tr } from "@/lib/content";
import { useDeck } from "./DeckContext";
import { Item, Stagger } from "./Reveal";

const icons = [
  KeyRound,
  GitBranch,
  HardDriveDownload,
  Building2,
  Radar,
  ShieldCheck,
  Users,
  ListChecks,
];

/** "Recognise yourself" — common market exposure patterns. */
export default function ExposureCards() {
  const { track } = useDeck();
  return (
    <Stagger
      className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
      gap={0.07}
      amount={0.2}
    >
      {exposureItems.map((item, i) => {
        const Icon = icons[i % icons.length];
        return (
          <Item
            key={item.title}
            className={`rounded-xl border p-4 ${
              item.privacy
                ? "border-orange/50 bg-orange-dim"
                : "border-line bg-ghost"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Icon
                className={`h-4.5 w-4.5 shrink-0 ${item.privacy ? "text-orange" : "text-grey-soft"}`}
                strokeWidth={1.25}
              />
              <h3 className="text-[0.78rem] font-semibold leading-snug text-ink">
                {item.title}
              </h3>
            </div>
            <p className="mt-2.5 text-[0.7rem] leading-relaxed text-ink-muted">
              {tr(item.line, track)}
            </p>
          </Item>
        );
      })}
    </Stagger>
  );
}
