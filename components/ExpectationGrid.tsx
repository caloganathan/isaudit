"use client";

import {
  Landmark,
  Scale,
  Lock,
  ShieldAlert,
  DatabaseBackup,
  Network,
  ShieldCheck,
  ClipboardCheck,
  SearchCheck,
  FileCheck2,
} from "lucide-react";
import { expectationDomains, tr } from "@/lib/content";
import { useDeck } from "./DeckContext";
import { Item, Stagger } from "./Reveal";

const icons = [
  Landmark,
  Scale,
  Lock,
  ShieldAlert,
  DatabaseBackup,
  Network,
  ShieldCheck,
  ClipboardCheck,
  SearchCheck,
  FileCheck2,
];

/** Animated 10-domain expectation framework grid. */
export default function ExpectationGrid() {
  const { track } = useDeck();
  return (
    <Stagger
      className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5"
      gap={0.06}
      amount={0.2}
    >
      {expectationDomains.map((d, i) => {
        const Icon = icons[i % icons.length];
        return (
          <Item
            key={d.label}
            className={`group rounded-xl border p-4 transition-colors duration-300 ${
              d.privacy
                ? "border-orange/50 bg-orange-dim"
                : "border-line bg-ghost hover:border-line-strong"
            }`}
          >
            <Icon
              className={`h-5 w-5 ${d.privacy ? "text-orange" : "text-grey-soft group-hover:text-orange"} transition-colors duration-300`}
              strokeWidth={1.25}
            />
            <h3 className="mt-3 text-[0.8rem] font-semibold leading-snug text-ink">
              {d.label}
            </h3>
            <p className="mt-1.5 text-[0.7rem] leading-relaxed text-ink-muted">
              {tr(d.detail, track)}
            </p>
          </Item>
        );
      })}
    </Stagger>
  );
}
