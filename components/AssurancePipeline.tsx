"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { pipelineStages } from "@/lib/content";
import { Item, Stagger } from "./Reveal";

/**
 * Assess → Prioritise → Remediate → Assure → Report → Sustain.
 * A connective line draws across as stages stagger in.
 */
export default function AssurancePipeline() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mt-10">
      {/* animated connective line (desktop) */}
      <motion.div
        aria-hidden
        initial={reduce ? undefined : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 right-0 top-5 hidden h-px origin-left bg-gradient-to-r from-orange via-orange/60 to-orange/20 lg:block"
      />
      <Stagger
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6"
        gap={0.12}
        amount={0.25}
      >
        {pipelineStages.map((stage, i) => (
          <Item key={stage.label} className="relative">
            <div className="flex h-full flex-col rounded-xl border border-line bg-surface p-4 transition-colors duration-300 hover:border-orange/50">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-orange/60 bg-orange-dim font-mono text-[0.6rem] font-bold text-orange">
                  {i + 1}
                </span>
                <h3 className="font-serif text-base text-ink">{stage.label}</h3>
              </div>
              <p className="text-[0.68rem] leading-relaxed text-ink-muted">
                {stage.does}
              </p>
              <div className="mt-auto pt-3">
                <p className="border-t border-line pt-2.5 text-[0.66rem] leading-relaxed text-ink-faint">
                  <span className="font-semibold uppercase tracking-[0.12em] text-orange/90">
                    You receive
                  </span>
                  <br />
                  {stage.receives}
                </p>
              </div>
            </div>
            {i < pipelineStages.length - 1 && (
              <>
                <ArrowRight
                  aria-hidden
                  className="absolute -right-2.5 top-4 z-10 hidden h-4 w-4 text-orange lg:block"
                  strokeWidth={1.5}
                />
                <ArrowDown
                  aria-hidden
                  className="mx-auto mt-1.5 h-4 w-4 text-orange/70 lg:hidden"
                  strokeWidth={1.5}
                />
              </>
            )}
          </Item>
        ))}
      </Stagger>
    </div>
  );
}
