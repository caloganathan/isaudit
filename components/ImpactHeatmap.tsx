"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heatmapData } from "@/lib/content";

const cellBg = ["var(--heat-low)", "var(--heat-mid)", "var(--heat-high)"];

/** Executive impact matrix — indicative severity trajectory, animated in. */
export default function ImpactHeatmap() {
  const reduce = useReducedMotion();
  return (
    <div className="mt-10 overflow-x-auto">
      <div className="min-w-[560px]">
        <div
          className="grid gap-1.5"
          style={{ gridTemplateColumns: "minmax(180px,1.3fr) repeat(3,1fr)" }}
          role="table"
          aria-label="Management impact matrix"
        >
          <div aria-hidden />
          {heatmapData.cols.map((c) => (
            <div
              key={c}
              role="columnheader"
              className="px-3 pb-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              {c}
            </div>
          ))}
          {heatmapData.rows.map((row, r) => (
            <div key={row} role="row" className="contents">
              <div
                role="rowheader"
                className="flex items-center py-1 pr-4 text-[0.78rem] font-medium text-ink-muted"
              >
                {row}
              </div>
              {heatmapData.cells[r].map((level, c) => (
                <motion.div
                  key={c}
                  role="cell"
                  aria-label={`${row}, ${heatmapData.cols[c]}: ${heatmapData.legend[level]}`}
                  initial={reduce ? undefined : { opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    duration: 0.45,
                    delay: (r * 3 + c) * 0.045,
                    ease: "easeOut",
                  }}
                  className="flex h-11 items-center rounded-md px-3"
                  style={{ backgroundColor: cellBg[level] }}
                >
                  <span className="text-[0.65rem] font-medium tracking-wide text-ink">
                    {heatmapData.legend[level]}
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-4">
          {heatmapData.legend.map((l, i) => (
            <span
              key={l}
              className="flex items-center gap-1.5 text-[0.65rem] text-ink-faint"
            >
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: cellBg[i] }}
                aria-hidden
              />
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
