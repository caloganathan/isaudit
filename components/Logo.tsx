"use client";

import { useEffect, useState } from "react";
import { brand } from "@/lib/content";
import { useDeck } from "./DeckContext";

/**
 * Probes for /public/brand asset availability client-side (an <img onError>
 * alone can fire before hydration and be lost). Until the supplied PNG is
 * dropped in it renders a faithful styled text wordmark — JCSS in brand
 * orange, grey tagline beneath.
 */
function useImageAvailable(src: string): boolean {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.onload = () => !cancelled && setOk(true);
    img.onerror = () => !cancelled && setOk(false);
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);
  return ok;
}

export default function Logo({
  size = "md",
  withTagline = true,
}: {
  size?: "md" | "lg";
  withTagline?: boolean;
}) {
  const { theme } = useDeck();
  const src = theme === "dark" ? brand.logoWhite : brand.logo;
  const available = useImageAvailable(src);
  const h = size === "lg" ? "h-12 md:h-16" : "h-8";

  if (available) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={brand.name} className={`${h} w-auto`} />
    );
  }

  return (
    <span className="flex flex-col leading-none select-none">
      <span
        className={`font-serif font-semibold tracking-tight text-orange ${
          size === "lg" ? "text-4xl md:text-5xl" : "text-2xl"
        }`}
      >
        JCSS
      </span>
      {withTagline && (
        <span
          className={`text-grey-soft tracking-[0.18em] uppercase ${
            size === "lg" ? "text-[0.6rem] mt-1.5" : "text-[0.45rem] mt-1"
          }`}
        >
          {brand.tagline}
        </span>
      )}
    </span>
  );
}

export { useImageAvailable };
