"use client";

import { brand, credentialPillars } from "@/lib/content";
import { Item, Stagger } from "./Reveal";

/** Four labelled credential pillars behind one signature. */
export default function CredentialWall() {
  return (
    <div className="mt-10">
      <Stagger
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        gap={0.1}
        amount={0.25}
      >
        {credentialPillars.map((p) => (
          <Item
            key={p.code}
            className="group rounded-xl border border-line bg-ghost p-5 transition-colors duration-300 hover:border-orange/50"
          >
            <span className="font-serif text-3xl font-medium tracking-tight text-orange">
              {p.code}
            </span>
            <p className="mt-1 text-[0.62rem] uppercase tracking-[0.14em] text-ink-faint">
              {p.name}
            </p>
            <p className="mt-3 text-[0.78rem] font-semibold leading-snug text-ink">
              {p.role}
            </p>
            <p className="mt-2 text-[0.7rem] leading-relaxed text-ink-muted">
              {p.proof}
            </p>
          </Item>
        ))}
      </Stagger>
      <Stagger gap={0.1} delay={0.4} amount={0.5}>
        <Item>
          <p className="mt-6 text-center font-serif text-sm italic text-ink-muted md:text-base">
            One signature carries all four —{" "}
            <span className="not-italic font-sans text-[0.85em] tracking-wide text-ink">
              {brand.credentialLine}
            </span>
          </p>
        </Item>
      </Stagger>
    </div>
  );
}
