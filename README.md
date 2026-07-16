# JCSS Indonesia — IS Audit, Cyber & Privacy Assurance Deck

A cinematic, board-level web presentation for **PT JCSS Management Consulting
Indonesia**: OJK-aligned IS audit, ITGC, cyber-resilience and data-privacy
assurance for Indonesia's regional banks (BPR/BPRS and BPD/small commercial).

Built with Next.js (App Router, TypeScript), Tailwind CSS and Framer Motion.
Fully static — no backend, no database, no localStorage.

## Routes

| Route       | Purpose                                                        |
| ----------- | -------------------------------------------------------------- |
| `/`         | Full 14-slide deck (snap-scroll, keyboard-drivable)            |
| `/teaser`   | 6-slide outreach cut for first-touch sends                     |
| `/appendix` | Regulatory register, regulation→control mapping, sample scope  |

## Presenting

- **←/→, ↑/↓, Space, PageUp/Down** — previous/next slide
- **Home / End** — first / last slide
- **N** — presenter mode (per-slide speaker notes overlay)
- **T** — dark/light theme (also in the header)
- Header toggle switches the **BPR/BPRS ⇄ BPD/Small Commercial** track
- Right-edge dot rail and the "Sections" menu jump to any slide

## Editing content

Every string — headlines, bullets, both track variants, speaker notes,
regulations, leadership bios — lives in **`lib/content.ts`**. No JSX changes
are needed for copy edits. Brand colour tokens live in `lib/theme.ts` and
`app/globals.css`.

## Brand assets

Drop the supplied files into `public/brand/` (see `public/brand/README.md`):
`jcss-logo.png`, optional `jcss-logo-white.png`, `loganathan.jpg`,
`vinodhan.jpg`. Components fall back to a styled text wordmark / initials
monogram until the files exist.

To enable a second CTA (WhatsApp / booking link), set `secondaryUrl` and
`secondaryLabel` in `ctaContent` at the bottom of `lib/content.ts`.

## Local run

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Vercel (production)

```bash
npm i -g vercel    # once
vercel login       # once
vercel             # first deploy — accept defaults (Next.js auto-detected)
vercel deploy --prod
```

The production URL will be `https://<project-name>.vercel.app` with
`/teaser` and `/appendix` available under the same domain.

---

_This material is a practical compliance and assurance interpretation, not
legal advice._
