"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Landmark, ShieldCheck } from "lucide-react";
import { regMapData } from "@/lib/content";
import { useDeck } from "./DeckContext";
import { Item, Stagger } from "./Reveal";

/**
 * Two-column regulatory landscape with an animated cross-cutting
 * privacy band beneath. The active track's column is emphasised.
 */
export default function RegulatoryMap() {
  const { track } = useDeck();
  const reduce = useReducedMotion();

  return (
    <div className="mt-10">
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {regMapData.columns.map((col) => {
          const isActive = col.id === track;
          return (
            <Stagger
              key={col.id}
              gap={0.08}
              className={`rounded-2xl border p-5 transition-all duration-500 md:p-6 ${
                isActive
                  ? "border-orange/50 bg-surface shadow-[0_0_60px_-30px_rgba(233,83,30,0.5)]"
                  : "border-line bg-ghost opacity-70"
              }`}
            >
              <Item className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg text-ink md:text-xl">
                    {col.heading}
                  </h3>
                  <p className="mt-0.5 text-[0.68rem] uppercase tracking-[0.14em] text-ink-faint">
                    {col.sub}
                  </p>
                </div>
                <Landmark
                  className={`h-5 w-5 ${isActive ? "text-orange" : "text-ink-faint"}`}
                  strokeWidth={1.25}
                />
              </Item>
              {col.items.map((item) => (
                <Item
                  key={item.ref}
                  className="border-t border-line py-2.5 first:border-t-0"
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`shrink-0 font-mono text-[0.68rem] font-semibold tracking-tight ${
                        isActive ? "text-orange" : "text-ink-muted"
                      }`}
                    >
                      {item.ref}
                    </span>
                    <p className="text-[0.78rem] leading-relaxed text-ink-muted">
                      {item.line}
                    </p>
                  </div>
                </Item>
              ))}
            </Stagger>
          );
        })}
      </div>

      {/* Cross-cutting privacy band */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0, scaleX: 0.6 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        className="mt-4 flex flex-col gap-2 rounded-2xl border border-orange/40 bg-orange-dim px-5 py-4 md:mt-6 md:flex-row md:items-center md:gap-4 md:px-6"
      >
        <span className="flex shrink-0 items-center gap-2 font-mono text-[0.7rem] font-semibold text-orange">
          <ShieldCheck className="h-4 w-4" strokeWidth={1.5} />
          {regMapData.crossCutting.ref}
        </span>
        <p className="text-[0.78rem] leading-relaxed text-ink-muted md:text-[0.82rem]">
          {regMapData.crossCutting.line}
        </p>
      </motion.div>

      <p className="mt-4 inline-block rounded-full border border-line px-3 py-1 text-[0.62rem] tracking-wide text-ink-faint">
        {regMapData.chip}
      </p>
    </div>
  );
}
