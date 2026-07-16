"use client";

import { Linkedin } from "lucide-react";
import { leadership, type Leader } from "@/lib/content";
import { useImageAvailable } from "./Logo";
import { Item, Stagger } from "./Reveal";

function Headshot({ leader }: { leader: Leader }) {
  const available = useImageAvailable(leader.photo);
  if (!available) {
    // Dignified initials monogram until the real headshot is dropped in.
    return (
      <div className="flex h-full w-full items-center justify-center bg-surface-raised">
        <span className="font-serif text-5xl text-grey-soft">
          {leader.initials}
        </span>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={leader.photo}
      alt={leader.name}
      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
    />
  );
}

/** Two-card leadership layout — the trust slide. */
export default function Leadership() {
  return (
    <Stagger
      className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
      gap={0.15}
      amount={0.25}
    >
      {leadership.map((leader) => (
        <Item key={leader.name}>
          <article className="group flex h-full gap-5 rounded-2xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-orange/40 md:p-6">
            <div className="h-28 w-24 shrink-0 overflow-hidden rounded-xl border border-line md:h-36 md:w-30">
              <Headshot leader={leader} />
            </div>
            <div className="min-w-0">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-lg leading-snug text-ink underline decoration-orange decoration-2 underline-offset-4 md:text-xl">
                  {leader.name}
                </h3>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${leader.name} on LinkedIn`}
                  className="mt-1 shrink-0 text-orange transition-opacity hover:opacity-75"
                >
                  <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
              <p className="mt-1.5 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-grey-soft">
                {leader.title}
              </p>
              <p className="mt-1 font-mono text-[0.7rem] font-semibold text-orange">
                {leader.credentials}
              </p>
              <p className="mt-3 text-[0.78rem] leading-relaxed text-ink-muted">
                {leader.bio}
              </p>
            </div>
          </article>
        </Item>
      ))}
    </Stagger>
  );
}
