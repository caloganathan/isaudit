"use client";

import Link from "next/link";
import { teaserSlides } from "@/lib/content";
import AssurancePipeline from "./AssurancePipeline";
import CredentialWall from "./CredentialWall";
import CTA from "./CTA";
import DeckShell from "./DeckShell";
import ExposureCards from "./ExposureCards";
import Slide, { SlideHeading, SupportLines } from "./Slide";

/**
 * /teaser — six-slide outreach cut:
 * Hook → Why now → Exposure → How JCSS helps → Why JCSS → CTA.
 */
export default function TeaserDeck() {
  const [hook, whyNow, exposure, model, whyJcss, cta] = teaserSlides;
  return (
    <DeckShell slideContents={teaserSlides}>
      <Slide index={0} id={`t-${hook.id}`}>
        <SlideHeading content={hook} />
        <SupportLines content={hook} />
      </Slide>

      <Slide index={1} id={`t-${whyNow.id}`} ghost="02">
        <SlideHeading content={whyNow} />
        <SupportLines content={whyNow} />
      </Slide>

      <Slide index={2} id={`t-${exposure.id}`} ghost="03">
        <SlideHeading content={exposure} maxWidth="max-w-5xl" />
        <ExposureCards />
      </Slide>

      <Slide index={3} id={`t-${model.id}`} ghost="04">
        <SlideHeading content={model} maxWidth="max-w-5xl" />
        <AssurancePipeline />
      </Slide>

      <Slide index={4} id={`t-${whyJcss.id}`} ghost="05">
        <SlideHeading content={whyJcss} maxWidth="max-w-5xl" />
        <CredentialWall />
      </Slide>

      <Slide index={5} id={`t-${cta.id}`}>
        <SlideHeading content={cta} />
        <CTA />
        <p className="mt-6 text-[0.7rem] text-ink-faint">
          This is the short cut —{" "}
          <Link href="/" className="text-orange hover:underline">
            view the full presentation
          </Link>
          .
        </p>
      </Slide>
    </DeckShell>
  );
}
