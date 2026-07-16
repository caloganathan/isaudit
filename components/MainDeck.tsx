"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  brand,
  deliverables,
  engagementPhases,
  services,
  slides,
  tr,
} from "@/lib/content";
import AssurancePipeline from "./AssurancePipeline";
import CredentialWall from "./CredentialWall";
import CTA from "./CTA";
import { useDeck } from "./DeckContext";
import DeckShell from "./DeckShell";
import ExpectationGrid from "./ExpectationGrid";
import ExposureCards from "./ExposureCards";
import ImpactHeatmap from "./ImpactHeatmap";
import Leadership from "./Leadership";
import Logo from "./Logo";
import RegulatoryMap from "./RegulatoryMap";
import { Item, Stagger } from "./Reveal";
import Slide, { SlideHeading, SupportLines } from "./Slide";

const byId = Object.fromEntries(slides.map((s) => [s.id, s]));

/* ------------------------------------------------------- decorative field */

function HeroField() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* restrained geometric grid — banking-architecture abstraction */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="72" height="72" patternUnits="userSpaceOnUse">
            <path
              d="M 72 0 L 0 0 0 72"
              fill="none"
              stroke="var(--line)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <motion.div
        initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -top-1/4 right-[-10%] h-[70vh] w-[70vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(233,83,30,0.13) 0%, transparent 62%)",
        }}
      />
      <div
        className="absolute bottom-[-30%] left-[-15%] h-[60vh] w-[60vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(110,111,114,0.12) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------ title slide */

function TitleSlide() {
  const { track, next } = useDeck();
  const c = byId["title"];
  return (
    <>
      <HeroField />
      <Stagger className="max-w-4xl" gap={0.14}>
        <Item className="mb-8">
          <Logo size="lg" />
        </Item>
        <Item>
          <p className="mb-5 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-orange md:text-xs">
            <span className="inline-block h-px w-8 bg-orange" aria-hidden />
            {tr(c.kicker!, track)}
          </p>
        </Item>
        <Item>
          <h1 className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-6xl">
            {tr(c.title, track)}
          </h1>
        </Item>
        <Item>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {tr(c.subtitle!, track)}
          </p>
        </Item>
        <Item>
          <div className="mt-8 inline-flex max-w-2xl items-center gap-3 rounded-xl border border-orange/40 bg-orange-dim px-5 py-3.5">
            <span className="h-8 w-1 shrink-0 rounded-full bg-orange" aria-hidden />
            <p className="text-[0.82rem] font-medium leading-relaxed text-ink md:text-sm">
              {tr(c.support![0], track)}
            </p>
          </div>
        </Item>
        <Item>
          <p className="mt-8 text-[0.75rem] tracking-wide text-ink-muted">
            <span className="text-ink-faint">Presented by </span>
            <span className="font-medium text-ink">{brand.credentialLine}</span>
          </p>
        </Item>
      </Stagger>
      <motion.button
        onClick={next}
        aria-label="Next slide"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-ink-faint transition-colors hover:text-orange"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" strokeWidth={1.25} />
      </motion.button>
    </>
  );
}

/* -------------------------------------------------------- services slide */

function ServicesGrid() {
  const { track } = useDeck();
  return (
    <Stagger
      className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
      gap={0.05}
      amount={0.2}
    >
      {services.map((s, i) => (
        <Item
          key={s.title}
          className={`flex gap-3.5 rounded-xl border p-4 ${
            s.privacy
              ? "border-orange/50 bg-orange-dim"
              : "border-line bg-ghost"
          }`}
        >
          <span
            className={`font-serif text-lg leading-none ${s.privacy ? "text-orange" : "text-ink-faint"}`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-[0.8rem] font-semibold leading-snug text-ink">
              {s.title}
            </h3>
            <p className="mt-1.5 text-[0.7rem] leading-relaxed text-ink-muted">
              {tr(s.line, track)}
            </p>
          </div>
        </Item>
      ))}
    </Stagger>
  );
}

/* ----------------------------------------------------- deliverables slide */

function DeliverablesList() {
  return (
    <Stagger
      className="mt-10 grid grid-cols-1 gap-x-8 gap-y-1 md:grid-cols-2"
      gap={0.06}
      amount={0.2}
    >
      {deliverables.map((d, i) => (
        <Item
          key={d.title}
          className={`flex items-baseline gap-4 border-b border-line py-3.5 ${
            d.privacy ? "border-b-orange/40" : ""
          }`}
        >
          <span className="font-serif text-sm tabular-nums text-orange">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-[0.85rem] font-semibold text-ink">
              {d.title}
              {d.privacy && (
                <span className="ml-2 rounded-full border border-orange/50 px-2 py-0.5 text-[0.55rem] font-medium uppercase tracking-[0.12em] text-orange">
                  PDP
                </span>
              )}
            </h3>
            <p className="mt-0.5 text-[0.72rem] leading-relaxed text-ink-muted">
              {d.line}
            </p>
          </div>
        </Item>
      ))}
    </Stagger>
  );
}

/* ------------------------------------------------------- engagement slide */

function EngagementPhases() {
  const { track } = useDeck();
  const reduce = useReducedMotion();
  return (
    <div className="relative mt-10">
      <motion.div
        aria-hidden
        initial={reduce ? undefined : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-6 left-[1.05rem] top-2 hidden w-px origin-top bg-gradient-to-b from-orange to-orange/15 md:block"
      />
      <Stagger className="space-y-4" gap={0.14} amount={0.25}>
        {engagementPhases.map((p) => (
          <Item key={p.phase} className="flex gap-5">
            <span className="z-10 hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-orange/60 bg-bg font-mono text-[0.65rem] font-bold text-orange md:flex">
              {p.phase}
            </span>
            <div className="flex-1 rounded-xl border border-line bg-ghost p-4 md:p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-base text-ink md:text-lg">
                  <span className="mr-2 font-mono text-[0.65rem] font-bold text-orange md:hidden">
                    {p.phase}
                  </span>
                  {p.title}
                </h3>
                <span className="rounded-full border border-line px-2.5 py-0.5 text-[0.62rem] uppercase tracking-[0.12em] text-ink-faint">
                  {p.duration}
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-[0.78rem] leading-relaxed text-ink-muted">
                {tr(p.line, track)}
              </p>
            </div>
          </Item>
        ))}
      </Stagger>
    </div>
  );
}

/* --------------------------------------------------------------- the deck */

export default function MainDeck() {
  return (
    <DeckShell slideContents={slides}>
      <Slide index={0} id="title">
        <TitleSlide />
      </Slide>

      <Slide index={1} id="hook" ghost="01">
        <SlideHeading content={byId["hook"]} hideSubtitle />
        <SupportLines content={byId["hook"]} />
        <SubtleEmphasis id="hook" />
      </Slide>

      <Slide index={2} id="why-now" ghost="02">
        <SlideHeading content={byId["why-now"]} />
        <SupportLines content={byId["why-now"]} />
      </Slide>

      <Slide index={3} id="reg-map" ghost="03">
        <SlideHeading content={byId["reg-map"]} maxWidth="max-w-5xl" />
        <RegulatoryMap />
      </Slide>

      <Slide index={4} id="expectations" ghost="04">
        <SlideHeading content={byId["expectations"]} maxWidth="max-w-5xl" />
        <ExpectationGrid />
      </Slide>

      <Slide index={5} id="exposure" ghost="05">
        <SlideHeading content={byId["exposure"]} maxWidth="max-w-5xl" />
        <ExposureCards />
      </Slide>

      <Slide index={6} id="implications" ghost="06">
        <SlideHeading content={byId["implications"]} />
        <ImpactHeatmap />
      </Slide>

      <Slide index={7} id="model" ghost="07">
        <SlideHeading content={byId["model"]} maxWidth="max-w-5xl" />
        <AssurancePipeline />
      </Slide>

      <Slide index={8} id="services" ghost="08">
        <SlideHeading content={byId["services"]} maxWidth="max-w-5xl" />
        <ServicesGrid />
      </Slide>

      <Slide index={9} id="deliverables" ghost="09">
        <SlideHeading content={byId["deliverables"]} />
        <DeliverablesList />
      </Slide>

      <Slide index={10} id="why-jcss" ghost="10">
        <SlideHeading content={byId["why-jcss"]} maxWidth="max-w-5xl" />
        <CredentialWall />
        <SupportLines content={byId["why-jcss"]} />
      </Slide>

      <Slide index={11} id="leadership" ghost="11">
        <SlideHeading content={byId["leadership"]} />
        <Leadership />
      </Slide>

      <Slide index={12} id="engagement" ghost="12">
        <SlideHeading content={byId["engagement"]} />
        <EngagementPhases />
      </Slide>

      <Slide index={13} id="cta">
        <HeroField />
        <SlideHeading content={byId["cta"]} />
        <CTA />
      </Slide>
    </DeckShell>
  );
}

/* Highlighted "why it matters to your Board" callout for the hook slide. */
function SubtleEmphasis({ id }: { id: string }) {
  const { track } = useDeck();
  const c = byId[id];
  if (!c.subtitle) return null;
  return (
    <Stagger gap={0.1} delay={0.5} amount={0.4}>
      <Item>
        <div className="mt-8 max-w-3xl rounded-xl border-l-2 border-orange bg-orange-dim px-5 py-4">
          <p className="text-[0.85rem] font-medium leading-relaxed text-ink">
            {tr(c.subtitle, track)}
          </p>
        </div>
      </Item>
    </Stagger>
  );
}
