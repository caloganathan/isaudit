/* ---------------------------------------------------------------------------
   JCSS Indonesia — advisory deck content.
   ALL copy lives here. Edit strings freely; components never hard-code text.

   Tracks: 'bpr'  = BPR / BPRS (rural banks)
           'bpd'  = BPD / small commercial banks
   Strings may be plain (shared) or { bpr, bpd } (track-specific); resolve
   with tr(value, track).

   Regulatory citations verified against ojk.go.id / peraturan.bpk.go.id
   (July 2026). This deck is a practical compliance and assurance
   interpretation, not legal advice.
--------------------------------------------------------------------------- */

export type Track = "bpr" | "bpd";

export type Tracked = string | { bpr: string; bpd: string };

export function tr(value: Tracked, track: Track): string {
  return typeof value === "string" ? value : value[track];
}

export const tracks: Record<Track, { short: string; long: string }> = {
  bpr: { short: "BPR / BPRS", long: "BPR & BPRS (rural banks)" },
  bpd: { short: "BPD / Small Commercial", long: "BPD & small commercial banks" },
};

/* ------------------------------------------------------------------ brand */

export const brand = {
  name: "JCSS Indonesia",
  legalName: "PT JCSS Management Consulting Indonesia",
  tagline: "Delivering Transparency",
  website: "jcss.co.id",
  websiteUrl: "https://jcss.co.id",
  email: "la@jcss.co.id",
  mailtoSubject: "OJK-aligned IT, cyber & privacy diagnostic — enquiry",
  logo: "/brand/jcss-logo.png",
  logoWhite: "/brand/jcss-logo-white.png",
  credentialLine: "CA Loganathan Anandan, FCA · CISA · CDPSE · CFE",
};

export const disclaimer =
  "This material is a practical compliance and assurance interpretation, not legal advice.";

/* ------------------------------------------------------------ regulations */

export type Regulation = {
  id: string;
  ref: string;
  title: string;
  titleId: string; // official Indonesian title
  year: string;
  scope: "bpr" | "bpd" | "cross";
  role: string;
  status?: string;
};

export const regulations: Regulation[] = [
  {
    id: "pojk34",
    ref: "POJK 34/2025",
    title: "IT implementation by BPR & BPRS",
    titleId:
      "Penyelenggaraan Teknologi Informasi oleh Bank Perekonomian Rakyat dan Bank Perekonomian Rakyat Syariah",
    year: "2025",
    scope: "bpr",
    role: "Primary anchor — IT governance, IT risk management, information & cyber security, DRP/DRC, data management and personal-data protection, vendor cooperation, reporting. Replaces POJK 75/POJK.03/2016.",
    status:
      "Promulgated 17 Dec 2025; applies one year after promulgation — the readiness window is now.",
  },
  {
    id: "padk43",
    ref: "PADK 43/PADK.03/2025",
    title: "Implementing provisions for BPR/BPRS IT",
    titleId:
      "Peraturan Anggota Dewan Komisioner — Penyelenggaraan Teknologi Informasi oleh BPR dan BPRS",
    year: "2025",
    scope: "bpr",
    role: "Detailed implementing rules accompanying POJK 34/2025; signals OJK's supervisory direction on BPR/BPRS digital security.",
  },
  {
    id: "pojk9",
    ref: "POJK 9/2024",
    title: "Governance for BPR & BPRS",
    titleId:
      "Penerapan Tata Kelola bagi Bank Perekonomian Rakyat dan Bank Perekonomian Rakyat Syariah",
    year: "2024",
    scope: "bpr",
    role: "Twelve governance pillars — including internal audit, risk management with anti-fraud, internal control, and IT reporting integrity. Full alignment was expected by end-2025.",
  },
  {
    id: "seojk9",
    ref: "SEOJK 9/SEOJK.03/2025",
    title: "Internal audit function for BPR & BPRS",
    titleId:
      "Penerapan Fungsi Audit Intern bagi Bank Perekonomian Rakyat dan Bank Perekonomian Rakyat Syariah",
    year: "2025",
    scope: "bpr",
    role: "Standards for the internal-audit function (SKAI) — audit policy, structure, execution and reporting. The basis for IT-audit depth and co-sourcing.",
  },
  {
    id: "seojk12",
    ref: "SEOJK 12/SEOJK.03/2024",
    title: "Governance implementation guidance for BPR",
    titleId: "Penerapan Tata Kelola bagi Bank Perekonomian Rakyat",
    year: "2024",
    scope: "bpr",
    role: "Implementation guidance under POJK 9/2024 — governance principles, semi-annual self-assessment, and committee expectations.",
  },
  {
    id: "pojk11",
    ref: "POJK 11/POJK.03/2022",
    title: "IT implementation by commercial banks",
    titleId: "Penyelenggaraan Teknologi Informasi oleh Bank Umum",
    year: "2022",
    scope: "bpd",
    role: "The commercial-bank IT governance baseline — IT governance and risk management, data management, and supervisory reporting for BPDs and small commercial banks.",
  },
  {
    id: "seojk29",
    ref: "SEOJK 29/SEOJK.03/2022",
    title: "Cyber security & resilience for commercial banks",
    titleId: "Ketahanan dan Keamanan Siber bagi Bank Umum",
    year: "2022",
    scope: "bpd",
    role: "Cyber-resilience expectations — inherent-risk and cyber-maturity assessment, security operations, incident handling and reporting.",
  },
  {
    id: "uupdp",
    ref: "UU No. 27/2022 (UU PDP)",
    title: "Personal Data Protection Law",
    titleId: "Undang-Undang tentang Pelindungan Data Pribadi",
    year: "2022",
    scope: "cross",
    role: "Indonesia's personal-data protection regime — lawful basis and consent, retention and deletion, breach notification, controller/processor duties. The transition period ended in October 2024; obligations are live, and POJK 34/2025 embeds personal-data protection into BPR/BPRS IT rules.",
  },
];

/* ------------------------------------------------------------- leadership */

export type Leader = {
  name: string;
  title: string;
  credentials: string;
  bio: string;
  photo: string;
  linkedin: string;
  initials: string;
};

export const leadership: Leader[] = [
  {
    name: "CA Loganathan Anandan",
    title: "Lead Engagement Partner, IS Audit & Cyber Assurance",
    credentials: "FCA · CISA · CDPSE · CFE",
    bio: "20+ years in public accounting, IS audit, and cybersecurity across the India–Indonesia–Singapore corridor; ex-Big Four, ex-Unilever.",
    photo: "/brand/loganathan.jpg",
    linkedin: "https://www.linkedin.com/in/caloganathan/",
    initials: "LA",
  },
  {
    name: "Vinodhan J",
    title: "Partner, Internal Audit & Risk Assurance",
    credentials: "MBA · BSMR (Risk Management, Level 1–5)",
    bio: "Former Head of Internal Audit at Morgan Stanley and Regional Audit Manager at SMBC Asia Pacific; deep banking internal-audit and risk-management experience across Indonesia and Singapore.",
    photo: "/brand/vinodhan.jpg",
    linkedin: "https://www.linkedin.com/in/vinodhan-j-42bb00a/",
    initials: "VJ",
  },
];

/* ---------------------------------------------------------------- slides */

export type SlideContent = {
  id: string;
  menuLabel: string;
  kicker?: Tracked;
  title: Tracked;
  subtitle?: Tracked;
  support?: Tracked[];
  notes: Tracked; // speaker notes (presenter mode only)
};

export const slides: SlideContent[] = [
  {
    id: "title",
    menuLabel: "Title",
    kicker: "JCSS Indonesia · IS Audit & Assurance",
    title:
      "Strengthening IT Governance, Cyber Resilience, Privacy & IS Audit Readiness for Indonesia's Regional Banks.",
    subtitle: {
      bpr: "OJK-aligned assurance for BPR & BPRS — Big Four-grade quality at regional-bank economics.",
      bpd: "OJK-aligned assurance for province-based BPDs and small commercial banks — Big Four-grade quality at regional-bank economics.",
    },
    support: [
      "Big Four-grade IS audit, cyber & privacy assurance — at ~1/4 to 1/5 of the cost, CISA-led and partner-attended.",
    ],
    notes:
      "Open on the one-line promise: regulator-grade assurance, right-sized for regional banks. Anchor the credential line early — the partner who signs is in the room. Transition: 'Let me show you why this conversation is timely for your Board specifically.'",
  },
  {
    id: "hook",
    menuLabel: "Executive hook",
    kicker: "Executive summary",
    title:
      "OJK has raised the bar on technology, cyber and data — and expects Boards to own the answer.",
    support: [
      {
        bpr: "OJK's new BPR/BPRS technology regime (POJK 34/2025) folds IT governance, cyber resilience, and personal-data protection into one supervisory expectation — with a fixed readiness window.",
        bpd: "For commercial banks, POJK 11/POJK.03/2022 and SEOJK 29/SEOJK.03/2022 make IT governance and cyber maturity a standing supervisory expectation — assessed, scored, and reported.",
      },
      "Digital channels, BI-Fast-era payments and third-party platforms have widened the control surface faster than most internal-audit functions have grown IT depth.",
      "Indonesia's Personal Data Protection Law (UU PDP No. 27/2022) is fully in force — personal-data handling is now a board-level compliance topic, not an IT detail.",
    ],
    subtitle:
      "Why it matters to your Board: supervisors increasingly test whether Commissioners and Directors can evidence oversight — policies alone no longer carry the argument.",
    notes:
      "Three facts, one implication. Keep it calm: this is direction of travel, not alarm. Land the economics message once: senior-led specialist model, Big Four-grade output, ~1/4–1/5 of large-firm cost. Transition: 'Here's why the timing is not discretionary.'",
  },
  {
    id: "why-now",
    menuLabel: "Why now",
    kicker: "Timing",
    title: "The readiness window is defined — waiting converts a plan into a finding.",
    support: [
      {
        bpr: "POJK 34/2025 was promulgated in December 2025 and applies one year on — banks that map gaps early remediate on their own schedule; banks that wait remediate on the supervisor's.",
        bpd: "POJK 11/2022 and SEOJK 29/2022 are past their transition periods — cyber-maturity self-assessments and incident readiness are now recurring supervisory material, compared year on year.",
      },
      "Supervisory attention on cyber and data has visibly sharpened since the BI-Fast era of instant payments — market context every Board already recognises.",
      "UU PDP's transition period closed in October 2024 — personal-data obligations are enforceable today, and few regional banks have independently tested their exposure.",
      "Remediation done under inspection pressure costs more, reads worse, and lands on the Board's record.",
    ],
    notes:
      "The argument is sequencing, not fear: early movers control scope, budget and narrative. Reference BI-Fast only as context for supervisory attention — no incident war stories. Transition: 'So what exactly applies to you? One map.'",
  },
  {
    id: "reg-map",
    menuLabel: "Regulatory map",
    kicker: "Regulatory landscape",
    title: "Two supervisory tracks, one direction: governed technology, resilient operations, protected data.",
    subtitle:
      "Core instruments only — the full register and control-area mapping sits in the Appendix.",
    notes:
      "Walk the two columns left to right, then land on the shared privacy layer at the bottom — UU PDP cuts across both tracks. Emphasise we verify citations against the live OJK register. Transition: 'Behind these instruments sits a consistent set of expectations.'",
  },
  {
    id: "expectations",
    menuLabel: "What regulators expect",
    kicker: "The expectation framework",
    title: "Regulators keep asking ten questions — a bank should be able to evidence every answer.",
    subtitle: {
      bpr: "Synthesised from POJK 34/2025, POJK 9/2024 and SEOJK 9/2025 — stated as management questions, not legal text.",
      bpd: "Synthesised from POJK 11/2022 and SEOJK 29/2022 — stated as management questions, not legal text.",
    },
    notes:
      "Don't read all ten — pick governance, cyber resilience, data & PDP, and internal audit, and phrase each as the question an examiner asks. The grid exists so the Board sees completeness. Transition: 'Where do banks actually struggle? Patterns we see in the market.'",
  },
  {
    id: "exposure",
    menuLabel: "Typical exposure",
    kicker: "Recognise yourself",
    title: "The gaps are rarely exotic — they are ordinary controls without ordinary evidence.",
    subtitle:
      "Common market patterns observed across regional banks — not regulatory quotes, and not a diagnosis of any one institution.",
    notes:
      "Invite recognition: 'If two or three of these feel familiar, you are the typical starting point, not an outlier.' The privacy card matters — few competitors can test it credibly. Transition: 'Left unattended, these patterns compound. Here's the management view.'",
  },
  {
    id: "implications",
    menuLabel: "Management implications",
    kicker: "Consequence",
    title: "Unevidenced controls compound quietly — then surface all at once, in front of the supervisor.",
    subtitle:
      "Indicative severity and trajectory if remediation starts late — an interpretation for planning, not a scoring of your bank.",
    notes:
      "Point at 'cost of late remediation' — the one cell that moves every other cell. Audit-committee blind spots resonate with Commissioners. Keep it factual, no doom. Transition: 'The resolution is a disciplined, boring, effective assurance cycle.'",
  },
  {
    id: "model",
    menuLabel: "How JCSS helps",
    kicker: "The assurance model",
    title: "Assess once, prioritise honestly, remediate with evidence — then keep it inspection-ready.",
    subtitle:
      "One integrated cycle covering ITGC, cyber resilience and personal-data protection — each stage leaves the bank holding a concrete artefact.",
    notes:
      "Walk the six stages; stress that every stage ends in a document the Board or SKAI can actually use. 'Sustain' is where co-sourcing lives. Transition: 'Here is the portfolio behind that cycle.'",
  },
  {
    id: "services",
    menuLabel: "Service portfolio",
    kicker: "Services",
    title: "Nine services, one team — from first diagnostic to standing internal-audit support.",
    subtitle: {
      bpr: "Scoped to BPR/BPRS scale and OJK's BPR/BPRS instruments — start with the diagnostic, extend only where findings justify it.",
      bpd: "Scoped to BPD and small-commercial scale under POJK 11/2022 and SEOJK 29/2022 — start with the diagnostic, extend only where findings justify it.",
    },
    notes:
      "Do not walk all nine. Say: 'Most banks enter through the diagnostic — everything else is drawn down as needed.' Point out data-governance & PDP readiness as the service most firms this size cannot offer. Transition: 'What do you physically receive?'",
  },
  {
    id: "deliverables",
    menuLabel: "Deliverables",
    kicker: "What you receive",
    title: "Every engagement ends in artefacts a Board can table — not a slide deck and a goodbye.",
    subtitle:
      "Board-ready, evidence-linked, and written to survive a supervisory read.",
    notes:
      "Pick up the audit-committee pack and the closure tracker: 'These two are what make the next inspection calmer.' FCA discipline shows in documentation quality. Transition: 'Why us, specifically?'",
  },
  {
    id: "why-jcss",
    menuLabel: "Why JCSS",
    kicker: "Differentiation",
    title: "Four credentials on one signature — covering audit, systems, privacy and fraud without a bench of juniors.",
    subtitle:
      "Executive-quality reporting, disciplined methodology, and regulatory-aligned control & privacy insight — without large-firm overhead.",
    support: [
      "Public-accounting documentation discipline applied to every working paper and finding.",
      "Local OJK-context fluency — instruments read in Indonesian, findings written for Indonesian supervision.",
      "Review, assurance and practical remediation in one team — no hand-off between 'assessors' and 'fixers'.",
      "Big Four-grade work product at ~1/4–1/5 of large-firm economics, through a senior-led specialist model.",
    ],
    notes:
      "The credential wall is the argument: FCA = reporting discipline, CISA = ITGC authority, CDPSE = the privacy differentiator almost no regional competitor holds, CFE = fraud lens over evidence. Value-efficiency, never 'cheap'. Transition: 'And the people are not hypothetical.'",
  },
  {
    id: "leadership",
    menuLabel: "Leadership",
    kicker: "Partner-led, senior-attended",
    title: "The partners who scope your engagement are the partners who sign it.",
    subtitle:
      "No leverage pyramid, no junior-staffed fieldwork — senior practitioners in the room, every phase.",
    notes:
      "Two backgrounds that rarely sit in one boutique: Big Four public accounting + global-bank internal audit (Morgan Stanley, SMBC). Let the credentials speak; keep delivery understated. Transition: 'Engagements are phased so you commit small first.'",
  },
  {
    id: "engagement",
    menuLabel: "Engagement model",
    kicker: "How an engagement runs",
    title: "Start with a two-to-four-week diagnostic — commit further only when the findings earn it.",
    subtitle: {
      bpr: "Scope calibrated to BPR/BPRS size and complexity under OJK's proportionality principle.",
      bpd: "Scope calibrated to BPD / small-commercial scale, aligned to the bank's existing cyber-maturity self-assessment cycle.",
    },
    notes:
      "The phased shape de-risks procurement: a small, fixed Phase 1; everything after is evidence-based. Phase 4 is optional standing co-sourcing under the internal-audit framework. Transition: 'The practical next step is one email.'",
  },
  {
    id: "cta",
    menuLabel: "Next step",
    kicker: "Next step",
    title: "Start with a focused OJK-aligned IT, cyber & privacy diagnostic for your bank.",
    subtitle:
      "Two to four weeks, senior-led, fixed scope — ending in a findings register, heatmap and remediation roadmap your Board can act on.",
    support: [
      "Alternative first steps: an internal-audit readiness review, or a board briefing on cyber & privacy assurance.",
    ],
    notes:
      "Close with the lowest-friction ask: one diagnostic, fixed window, tangible output. Offer the board briefing as the zero-commitment alternative. End on the credential line and the email.",
  },
];

/* ------------------------------------------------- slide-specific datasets */

export const regMapData = {
  columns: [
    {
      id: "bpr" as const,
      heading: "BPR / BPRS",
      sub: "Rural banks — conventional & sharia",
      items: [
        {
          ref: "POJK 34/2025",
          line: "Technology implementation — IT governance, cyber resilience, DRP/DRC, data & personal-data protection, vendor oversight.",
        },
        {
          ref: "POJK 9/2024",
          line: "Governance — twelve pillars including internal audit, internal control and anti-fraud.",
        },
        {
          ref: "SEOJK 9/2025",
          line: "Internal-audit function — policy, structure, execution, reporting.",
        },
        {
          ref: "SEOJK 12/2024",
          line: "Governance implementation guidance and self-assessment.",
        },
      ],
    },
    {
      id: "bpd" as const,
      heading: "BPD / Small Commercial",
      sub: "Province-based & small commercial banks",
      items: [
        {
          ref: "POJK 11/2022",
          line: "Technology implementation by commercial banks — the IT governance and risk baseline.",
        },
        {
          ref: "SEOJK 29/2022",
          line: "Cyber security & resilience — maturity assessment, operations, incident handling and reporting.",
        },
      ],
    },
  ],
  crossCutting: {
    ref: "UU PDP No. 27/2022",
    line: "Personal Data Protection Law — fully in force since October 2024; personal-data duties also embedded in POJK 34/2025.",
  },
  chip: disclaimer,
};

export const expectationDomains: {
  label: string;
  detail: Tracked;
  privacy?: boolean;
}[] = [
  {
    label: "Governance",
    detail:
      "Directors and Commissioners can evidence active oversight of technology — not just an approved policy set.",
  },
  {
    label: "Risk Management",
    detail:
      "IT and cyber risks are identified, measured and reported through the bank's risk framework.",
  },
  {
    label: "Information Security",
    detail:
      "Access, change and operations controls exist, operate, and leave evidence.",
  },
  {
    label: "Cyber Resilience",
    detail: {
      bpr: "The bank can detect, respond to and recover from cyber events at BPR/BPRS scale.",
      bpd: "Inherent risk and cyber maturity are assessed and defensible under SEOJK 29/2022.",
    },
  },
  {
    label: "DRP / DRC",
    detail:
      "Recovery plans exist, are tested on schedule, and the tests are documented.",
  },
  {
    label: "Third-Party Oversight",
    detail:
      "Critical vendors and outsourced technology are independently reviewed, not just contracted.",
  },
  {
    label: "Data Governance & PDP",
    detail:
      "Personal data is inventoried, lawfully processed, retained deliberately — and provably protected.",
    privacy: true,
  },
  {
    label: "Internal Control",
    detail:
      "Control design and operation are tested by someone other than the control owner.",
  },
  {
    label: "Internal Audit",
    detail: {
      bpr: "SKAI has (or borrows) the IT, cyber and privacy depth SEOJK 9/2025 assumes.",
      bpd: "Internal audit covers IT, cyber and privacy with credible specialist depth.",
    },
  },
  {
    label: "Reporting & Inspection Readiness",
    detail:
      "Regulatory reports are accurate and on time — and the evidence room is ready before the letter arrives.",
  },
];

export const exposureItems: { title: string; line: Tracked; privacy?: boolean }[] =
  [
    {
      title: "Access & segregation of duties",
      line: "Shared accounts, dormant users and unreviewed privileges in core banking — SoD conflicts nobody has mapped.",
    },
    {
      title: "Change management",
      line: "Changes happen and mostly work — but approvals, testing and migration evidence can't be reconstructed.",
    },
    {
      title: "Backup & recovery",
      line: "Backups run; restores are assumed. DRP tests are irregular, undocumented, or both.",
    },
    {
      title: "Vendor dependency",
      line: {
        bpr: "The core-banking provider is systemically important to the bank — and has never been independently reviewed.",
        bpd: "Critical outsourced platforms and channels run on contracts, not on tested controls.",
      },
    },
    {
      title: "Logging, monitoring & incident response",
      line: "Logs exist but nobody watches them; the incident playbook has never met a real incident or a management rehearsal.",
    },
    {
      title: "Personal-data handling & retention",
      line: "Customer data copied into spreadsheets and messaging apps; no inventory, no retention rule, no deletion practice — a live UU PDP exposure.",
      privacy: true,
    },
    {
      title: "Internal-audit depth",
      line: {
        bpr: "SKAI is competent on credit and operations — and candidly thin on IT, cyber and privacy.",
        bpd: "Internal audit covers IT at a checklist level; cyber and privacy depth is bought ad hoc or not at all.",
      },
    },
    {
      title: "Findings without closure",
      line: "Prior audit and supervisory findings remain open, unowned and unevidenced — the pattern examiners remember.",
    },
  ];

export const heatmapData = {
  rows: [
    "Regulatory exposure",
    "Service continuity",
    "Trust & reputation",
    "Board reporting",
    "Audit-committee visibility",
    "Cost of remediation",
  ],
  cols: ["Today", "At inspection", "If deferred 12 months"],
  /* 0 = low, 1 = elevated, 2 = high — indicative trajectory, not a score */
  cells: [
    [1, 2, 2],
    [1, 1, 2],
    [0, 1, 2],
    [1, 2, 2],
    [1, 2, 2],
    [0, 1, 2],
  ],
  legend: ["Manageable", "Elevated", "High"],
};

export const pipelineStages: {
  label: string;
  does: string;
  receives: string;
}[] = [
  {
    label: "Assess",
    does: "Structured diagnostic across ITGC, cyber, DRP and personal-data handling.",
    receives: "Risk-rated findings register mapped to OJK themes.",
  },
  {
    label: "Prioritise",
    does: "Findings ranked by supervisory weight, effort and dependency.",
    receives: "A sequenced remediation roadmap the Board can fund.",
  },
  {
    label: "Remediate",
    does: "Hands-on support closing gaps — policies, controls, evidence design.",
    receives: "Closed findings with documentation that stands on its own.",
  },
  {
    label: "Assure",
    does: "Independent re-testing of remediated controls.",
    receives: "Assurance memos suitable for the audit committee.",
  },
  {
    label: "Report",
    does: "Executive and audit-committee reporting, written for supervision.",
    receives: "A board pack and compliance heatmap, inspection-ready.",
  },
  {
    label: "Sustain",
    does: "Periodic co-sourced internal audit keeps coverage alive.",
    receives: "A standing IT/cyber/privacy audit cycle without hiring a bench.",
  },
];

export const services: { title: string; line: Tracked; privacy?: boolean }[] = [
  {
    title: "OJK-aligned IT & cyber diagnostic",
    line: {
      bpr: "The entry point — a 2–4 week readiness assessment against POJK 34/2025 themes.",
      bpd: "The entry point — a 2–4 week readiness assessment against POJK 11/2022 and SEOJK 29/2022 themes.",
    },
  },
  {
    title: "IS audit / ITGC review",
    line: "Access, change, operations and SDLC controls tested to IS-audit standard.",
  },
  {
    title: "Cybersecurity & resilience review",
    line: {
      bpr: "Detection, response and recovery capability reviewed at BPR/BPRS scale.",
      bpd: "Cyber maturity and resilience reviewed against the SEOJK 29/2022 assessment cycle.",
    },
  },
  {
    title: "Data governance & PDP readiness",
    line: "Data inventory, lawful basis, consent, retention, cross-border transfer and breach readiness under UU PDP — assessed alongside ITGC.",
    privacy: true,
  },
  {
    title: "Internal-audit co-sourcing / outsourcing",
    line: {
      bpr: "IT, cyber and privacy audit capacity for SKAI under SEOJK 9/2025 — without building a bench.",
      bpd: "Specialist IT/cyber/privacy audit capacity delivered inside your internal-audit plan.",
    },
  },
  {
    title: "Vendor & outsourced-technology risk review",
    line: "Independent review of core-banking and critical service providers.",
  },
  {
    title: "DRP / backup / recovery readiness",
    line: "Recovery objectives, test design and documented restore evidence.",
  },
  {
    title: "Remediation-tracking PMO",
    line: "A findings-closure office that keeps owners, dates and evidence honest.",
  },
  {
    title: "Pre-inspection / supervisory readiness",
    line: "Mock-inspection walkthrough and evidence-room preparation before OJK arrives.",
  },
];

export const deliverables: { title: string; line: string; privacy?: boolean }[] =
  [
    {
      title: "Executive summary",
      line: "Three pages a Commissioner actually reads — posture, priorities, ask.",
    },
    {
      title: "Risk-rated findings register",
      line: "Every finding rated, owned, and mapped to the regulatory theme it touches.",
    },
    {
      title: "Compliance heatmap vs OJK themes",
      line: "One page showing where the bank stands against each expectation area.",
    },
    {
      title: "Prioritised remediation roadmap",
      line: "Sequenced, costed, and honest about dependencies.",
    },
    {
      title: "Policy / SOP gap register",
      line: "The documents to write or fix, ranked by supervisory weight.",
    },
    {
      title: "PDP / privacy control gap register",
      line: "Personal-data findings under UU PDP — inventory, consent, retention, breach readiness.",
      privacy: true,
    },
    {
      title: "Audit-committee pack",
      line: "Reporting formatted for the committee's cycle, not for a consultant's archive.",
    },
    {
      title: "Closure tracker & evidence index",
      line: "The living register that turns remediation into inspection-ready proof.",
    },
  ];

export const credentialPillars: {
  code: string;
  name: string;
  role: string;
  proof: string;
}[] = [
  {
    code: "FCA",
    name: "Fellow Chartered Accountant",
    role: "Public-accounting reporting discipline & audit-quality evidence",
    proof: "Working papers and findings written to public-audit documentation standard.",
  },
  {
    code: "CISA",
    name: "Certified Information Systems Auditor",
    role: "IS audit / ITGC authority",
    proof: "Access, change, operations and SDLC controls tested the way examiners expect.",
  },
  {
    code: "CDPSE",
    name: "Certified Data Privacy Solutions Engineer",
    role: "Data privacy & PDP assurance",
    proof: "UU PDP No. 27/2022 and the personal-data clauses of POJK 34/2025, assessed with engineering depth.",
  },
  {
    code: "CFE",
    name: "Certified Fraud Examiner",
    role: "Fraud & forensic control lens",
    proof: "Controls and evidence reviewed with a forensic eye for override and abuse.",
  },
];

export const engagementPhases: {
  phase: string;
  title: string;
  duration: string;
  line: Tracked;
}[] = [
  {
    phase: "01",
    title: "Diagnostic",
    duration: "2–4 weeks",
    line: "Focused readiness assessment across ITGC, cyber, DRP and personal data — fixed scope, fixed window.",
  },
  {
    phase: "02",
    title: "Detailed review & testing",
    duration: "By scope",
    line: "Deep-dive control testing where the diagnostic shows it is warranted.",
  },
  {
    phase: "03",
    title: "Remediation support & reporting",
    duration: "By roadmap",
    line: "Hands-on closure support, independent re-testing, and management reporting.",
  },
  {
    phase: "04",
    title: "Periodic co-sourcing (optional)",
    duration: "Standing",
    line: {
      bpr: "A recurring IT/cyber/privacy audit cycle inside SKAI's plan under SEOJK 9/2025.",
      bpd: "A recurring IT/cyber/privacy audit cycle inside the internal-audit plan.",
    },
  },
];

export const ctaContent = {
  primaryLabel: "Book a diagnostic",
  primaryLong: "Start with a focused OJK-aligned IT, cyber & privacy diagnostic",
  alternates: [
    "Internal-audit readiness review",
    "Board cyber & privacy assurance briefing",
  ],
  email: brand.email,
  emailSubject: brand.mailtoSubject,
  website: brand.website,
  websiteUrl: brand.websiteUrl,
  /* PLACEHOLDER — optional second CTA (WhatsApp / booking link).
     Set `secondaryUrl` and `secondaryLabel` to enable the button. */
  secondaryUrl: "",
  secondaryLabel: "",
};

/* ---------------------------------------------------------------- teaser */

export const teaserSlides: SlideContent[] = [
  slides[0], // title / hook
  slides[2], // why now
  slides[5], // exposure
  slides[7], // how JCSS helps
  slides[10], // why JCSS
  slides[13], // CTA
];

/* -------------------------------------------------------------- appendix */

export const appendixContent = {
  title: "Appendix — regulatory register & engagement reference",
  intro:
    "Instrument titles and numbers verified against the OJK regulatory register. Interpretations are practical assurance readings, not legal advice.",
  mappingTitle: "Regulation → control-area mapping",
  mapping: [
    {
      area: "IT governance & board oversight",
      bpr: "POJK 34/2025 · POJK 9/2024",
      bpd: "POJK 11/2022",
    },
    {
      area: "IT risk management & internal control",
      bpr: "POJK 34/2025 · POJK 9/2024",
      bpd: "POJK 11/2022",
    },
    {
      area: "Information security & cyber resilience",
      bpr: "POJK 34/2025",
      bpd: "SEOJK 29/2022",
    },
    {
      area: "DRP / DRC & continuity",
      bpr: "POJK 34/2025",
      bpd: "POJK 11/2022 · SEOJK 29/2022",
    },
    {
      area: "Data governance & personal-data protection",
      bpr: "POJK 34/2025 · UU PDP 27/2022",
      bpd: "POJK 11/2022 · UU PDP 27/2022",
    },
    {
      area: "Third-party / outsourced technology",
      bpr: "POJK 34/2025",
      bpd: "POJK 11/2022",
    },
    {
      area: "Internal audit function",
      bpr: "POJK 9/2024 · SEOJK 9/2025",
      bpd: "Prevailing internal-audit requirements for commercial banks",
    },
    {
      area: "Governance implementation & self-assessment",
      bpr: "SEOJK 12/2024",
      bpd: "Prevailing governance requirements for commercial banks",
    },
    {
      area: "Regulatory reporting & inspection readiness",
      bpr: "POJK 34/2025 · POJK 9/2024",
      bpd: "POJK 11/2022 · SEOJK 29/2022",
    },
  ],
  scopeTitle: "Sample diagnostic scope (Phase 1)",
  scope: [
    "IT governance: charters, committee minutes, reporting lines, policy inventory",
    "ITGC: user access & SoD, change management, IT operations, job scheduling & interfaces",
    "Cyber: perimeter & endpoint hygiene, logging/monitoring, incident-response readiness",
    "DRP/DRC: recovery objectives, test history, restore evidence",
    "Data & PDP: personal-data inventory, lawful basis & consent, retention, breach-notification readiness",
    "Vendors: core-banking and critical-provider oversight, contracts vs tested controls",
    "Internal audit: IT/cyber/privacy coverage in the audit plan and skills map",
    "Open findings: prior audit & supervisory findings, closure evidence",
  ],
  deliverablesTitle: "Sample deliverables",
};
