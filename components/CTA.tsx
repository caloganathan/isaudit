"use client";

import { ArrowUpRight, Globe, Mail } from "lucide-react";
import { brand, ctaContent, disclaimer } from "@/lib/content";
import Logo from "./Logo";
import { Item, Stagger } from "./Reveal";

const mailtoHref = `mailto:${ctaContent.email}?subject=${encodeURIComponent(
  ctaContent.emailSubject
)}`;

/** Final CTA block: primary mailto, alternates, contact, disclaimer. */
export default function CTA() {
  return (
    <Stagger className="mt-10 max-w-3xl" gap={0.12} amount={0.3}>
      <Item className="flex flex-wrap items-center gap-3">
        <a
          href={mailtoHref}
          className="inline-flex items-center gap-2.5 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_10px_40px_-12px_rgba(233,83,30,0.55)] transition-transform duration-300 hover:scale-[1.02]"
        >
          <Mail className="h-4 w-4" strokeWidth={1.75} />
          {ctaContent.primaryLong}
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </a>
        {ctaContent.secondaryUrl && ctaContent.secondaryLabel && (
          <a
            href={ctaContent.secondaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-orange hover:text-orange"
          >
            {ctaContent.secondaryLabel}
          </a>
        )}
      </Item>

      <Item>
        <p className="mt-6 text-[0.78rem] text-ink-muted">
          {ctaContent.alternates.join("  ·  ")}
        </p>
      </Item>

      <Item>
        <div className="mt-10 flex flex-col gap-5 border-t border-line pt-7 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <Logo />
            <div className="text-[0.72rem] leading-relaxed text-ink-muted">
              <p className="font-medium text-ink">{brand.legalName}</p>
              <p>{brand.credentialLine}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 text-[0.75rem] text-ink-muted">
            <a
              href={mailtoHref}
              className="flex items-center gap-2 transition-colors hover:text-orange"
            >
              <Mail className="h-3.5 w-3.5 text-orange" strokeWidth={1.5} />
              {ctaContent.email}
            </a>
            <a
              href={ctaContent.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-orange"
            >
              <Globe className="h-3.5 w-3.5 text-orange" strokeWidth={1.5} />
              {ctaContent.website}
            </a>
          </div>
        </div>
      </Item>

      <Item>
        <p className="mt-8 text-[0.62rem] leading-relaxed text-ink-faint">
          {disclaimer}
        </p>
      </Item>
    </Stagger>
  );
}
