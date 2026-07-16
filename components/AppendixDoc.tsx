"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  appendixContent,
  brand,
  deliverables,
  disclaimer,
  regulations,
  tracks,
} from "@/lib/content";
import { DeckProvider } from "./DeckContext";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

/**
 * /appendix — document-style reference: regulation register,
 * regulation → control-area mapping, sample scope and deliverables.
 */
export default function AppendixDoc() {
  return (
    <DeckProvider slidesMeta={[]}>
      <div className="min-h-dvh bg-bg">
        <header className="sticky top-0 z-40 border-b border-line bg-scrim backdrop-blur-md">
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 md:px-8">
            <div className="flex items-center gap-4">
              <Link href="/" aria-label={`${brand.name} — back to deck`}>
                <Logo />
              </Link>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-[0.7rem] tracking-wide text-ink-muted transition-colors hover:text-orange"
              >
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
                Back to the deck
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-14 md:px-8">
          <p className="mb-3 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-orange">
            <span className="inline-block h-px w-8 bg-orange" aria-hidden />
            Appendix
          </p>
          <h1 className="max-w-3xl font-serif text-3xl font-medium leading-tight text-ink md:text-4xl">
            {appendixContent.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
            {appendixContent.intro}
          </p>

          {/* Regulation register */}
          <section className="mt-14" aria-labelledby="reg-register">
            <h2
              id="reg-register"
              className="font-serif text-xl text-ink md:text-2xl"
            >
              Regulatory register
            </h2>
            <div className="mt-6 space-y-3">
              {regulations.map((r) => (
                <article
                  key={r.id}
                  className="rounded-xl border border-line bg-ghost p-5"
                >
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-mono text-[0.75rem] font-semibold text-orange">
                      {r.ref}
                    </span>
                    <h3 className="text-[0.9rem] font-semibold text-ink">
                      {r.title}
                    </h3>
                    <span className="rounded-full border border-line px-2 py-0.5 text-[0.58rem] uppercase tracking-[0.12em] text-ink-faint">
                      {r.scope === "cross"
                        ? "Cross-cutting"
                        : tracks[r.scope].short}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[0.72rem] italic text-ink-faint">
                    {r.titleId}
                  </p>
                  <p className="mt-2.5 max-w-3xl text-[0.78rem] leading-relaxed text-ink-muted">
                    {r.role}
                  </p>
                  {r.status && (
                    <p className="mt-2 inline-block rounded-md bg-orange-dim px-2.5 py-1 text-[0.7rem] font-medium text-orange">
                      {r.status}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* Mapping table */}
          <section className="mt-14" aria-labelledby="mapping">
            <h2 id="mapping" className="font-serif text-xl text-ink md:text-2xl">
              {appendixContent.mappingTitle}
            </h2>
            <div className="mt-6 overflow-x-auto rounded-xl border border-line">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-line-strong bg-ghost">
                    <th className="px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                      Control area
                    </th>
                    <th className="px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                      {tracks.bpr.short}
                    </th>
                    <th className="px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                      {tracks.bpd.short}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {appendixContent.mapping.map((m) => (
                    <tr key={m.area} className="border-b border-line last:border-b-0">
                      <td className="px-4 py-3 text-[0.8rem] font-medium text-ink">
                        {m.area}
                      </td>
                      <td className="px-4 py-3 font-mono text-[0.7rem] text-ink-muted">
                        {m.bpr}
                      </td>
                      <td className="px-4 py-3 font-mono text-[0.7rem] text-ink-muted">
                        {m.bpd}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Sample scope */}
          <section className="mt-14" aria-labelledby="scope">
            <h2 id="scope" className="font-serif text-xl text-ink md:text-2xl">
              {appendixContent.scopeTitle}
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
              {appendixContent.scope.map((s) => (
                <li key={s} className="flex gap-3 py-1.5">
                  <span
                    className="mt-2 block h-1 w-4 shrink-0 bg-orange/70"
                    aria-hidden
                  />
                  <span className="text-[0.8rem] leading-relaxed text-ink-muted">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Sample deliverables */}
          <section className="mt-14" aria-labelledby="deliv">
            <h2 id="deliv" className="font-serif text-xl text-ink md:text-2xl">
              {appendixContent.deliverablesTitle}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-1 md:grid-cols-2">
              {deliverables.map((d, i) => (
                <div
                  key={d.title}
                  className="flex items-baseline gap-4 border-b border-line py-3"
                >
                  <span className="font-serif text-sm tabular-nums text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[0.82rem] font-semibold text-ink">
                      {d.title}
                    </h3>
                    <p className="mt-0.5 text-[0.7rem] leading-relaxed text-ink-muted">
                      {d.line}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer className="mt-16 border-t border-line pt-8 text-[0.68rem] leading-relaxed text-ink-faint">
            <p>{disclaimer}</p>
            <p className="mt-2">
              {brand.legalName} · {brand.credentialLine} ·{" "}
              <a
                href={brand.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-ink-muted hover:text-orange"
              >
                {brand.website}
                <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
              </a>
            </p>
          </footer>
        </main>
      </div>
    </DeckProvider>
  );
}
