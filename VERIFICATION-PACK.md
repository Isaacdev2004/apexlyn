# APEXLyn — Structured Verification Pack

**Date:** 15 March 2025  
**Purpose:** Lock Cloudflare-grade structure only after client confirmation on staging.  
**Deadline context:** All fixes by 18 March; system freeze after client sign-off; 21 March deadline.

---

## 1) Sitewide motion + interaction proof (page-by-page)

For each page, **exact places to check** (nav/dropdown are global via `Layout`; links/buttons/cards/sections are per-page).

| Page | Nav hover indicator | Dropdown animation | Links underline motion | Button hover (primary + secondary) | Card hover (lift/shadow/border) | Scroll reveal — sections to check |
|------|---------------------|--------------------|-------------------------|-------------------------------------|----------------------------------|------------------------------------|
| **Home** | Yes (any nav link) | Yes (Platforms → open/close + item stagger) | Yes: Footer; EvidenceGauge “Visit Trust Center”; Hero Track/Lens cards (card-cf, no link-cf on text) | Yes: Hero “Request a Demo” (primary), “Explore Platforms” (secondary); CTA “Request a Demo” (primary) | Hero (2 platform cards); Features (8 cards); EvidenceGauge (certs grid + 3 gauge cards); Benefits (4 stat cards + industries strip); Testimonials (3 cards); CTA (form card) | **Hero** (fadeUp on load); **Features** (SectionHeading + each FeatureCard inView); **EvidenceGauge** (heading + certs + gauges); **LensOrbit** (heading + 2 ProductSections); **Benefits** (heading + 4 cards + strip); **Testimonials** (heading + 3 cards); **CTA** (heading + form block) |
| **About** | Yes | Yes | Yes: Footer; none in body | No primary/secondary in body | Yes: 3 timeline pillar cards | **Intro** (SectionHeading inView); **Timeline** (scrollRevealStagger on 3 pillars) |
| **Platforms** | Yes | Yes | Yes: Footer; nav | Yes: each platform “Request a Demo” (primary for Track, cyan for Lens); Architecture block N/A | Yes: 2 platform architecture cards per block; Architecture Overview (Track + Lens cards) | **Intro** (SectionHeading); **Track block** (content + card); **Lens block** (content + card); **Architecture** (paragraph + 2 cards) |
| **Trust Center** | Yes | Yes | Yes: Footer | No standalone buttons in body | Yes: TrustCenterLineArt wrapper (no card); 3 KPI cards; cert grid cards; Security & Privacy card | **Intro** (SectionHeading + TrustCenterLineArt); **Key metrics** (h3 + 3 gauge cards); **Certs + Security** (grid + single card) |
| **Pricing** | Yes | Yes | Yes: Footer | Yes: each plan CTA (primary when featured, secondary otherwise) | Yes: Compare strip (3 small blocks); 3 plan cards; “All plans include” card | **Intro** (SectionHeading + PricingLineArt); **Compare strip** (row of 3); **Plans** (3 cards + footer card) |
| **Resources** | Yes | Yes | Yes: Footer; each resource card (link-cf) | Yes: category tabs (primary when active); “Talk to our team” N/A on this page (Solutions) | Yes: each resource card (card-cf + link-cf) | **Intro** (SectionHeading + ResourcesLineArt); **Tabs** (motion.div); **Grid** (each card inView stagger) |
| **Industries** | Yes | Yes | Yes: Footer | No buttons in body | Yes: 6 industry cards | **Intro** (SectionHeading); **Grid** (6 cards, stagger) |
| **Solutions** | Yes | Yes | Yes: Footer; “Talk to our team” (btn-cf + link-cf) | Yes: “Talk to our team” (primary) | Yes: 5 industry cards; bottom CTA card | **Intro** (SectionHeading + SolutionsLineArt); **Industry grid**; **Bottom CTA** card |
| **Company** | Yes | Yes | Yes: Footer; each “Learn more” (link-cf) | No primary/secondary in body | Yes: 5 company link cards; 1 address card | **Intro** (SectionHeading); **Company links grid** (5 cards); **Address** card |
| **Contact** | Yes | Yes | Yes: Footer | Yes: “Send message” (primary) | Yes: form card; ContactLineArt (no card) | **Copy** (SectionHeading + bullet list); **Form** card; **ContactLineArt** (right / below form mobile) |

**Summary:** Nav hover indicator and dropdown animation are implemented in `Navbar.tsx` and apply to every page that uses `Layout` (all 10 pages above). Link underline is `.link-cf` (Footer + nav + in-page links as listed). Buttons use `.btn-cf`; primary = `bg-primary`, secondary = outline/slate. Cards use `.card-cf` (lift + shadow + border tint) in the sections listed. Scroll reveal uses `useInView` + `motion` (or `scrollRevealStagger` on About) in the sections named.

---

## 2) Illustration language proof (sitewide, not only Track/Lens)

| Location | Illustration | Where on page |
|----------|--------------|----------------|
| **Trust Center** | `TrustCenterLineArt` | Top section, right column (desktop); same row as SectionHeading. Shield + badge frame + two checkmarks. |
| **Pricing** | `PricingLineArt` | Top section, right column. Three tier bars + base line + cap. |
| **Contact** | `ContactLineArt` | Right column (desktop); below form (mobile). Envelope + two signal arcs. |
| **Solutions** | `SolutionsLineArt` | Top section, right column. Core node + 6 rays + 6 outer nodes. |
| **Resources** | `ResourcesLineArt` | Top section, right column. Stacked doc strips + book/spine path. |

**Track/Lens (unchanged):**  
- **Home — Evidence Gauge:** `Gauge` (needle + arcs), in EvidenceGauge section.  
- **Home — Lens:** `LensOrbitGlobe` (cyan orbit + globe), in LensOrbit section.

**Style confirmation (locked):**  
- **Stroke-only:** Yes; all five line-arts are stroke-only, no fill (except optional opacity on shapes).  
- **Stroke weight:** Locked to **2px** across all five line-arts (single consistent system).  
- **Rounded caps/joins:** Yes on all strokes (`strokeLinecap="round"`, `strokeLinejoin="round"`).  
- **Calm loop:** Yes; after in-view reveal, a **calm opacity loop** (0.97 → 1 → 0.97 over 4s, easeInOut, infinite) runs on the illustration group so the language is sitewide motion, not one-shot only.  
- **No drift/jitter:** Yes; loop is opacity-only, no position/drift; no jitter.

---

## 3) Brand tokens compliance (non-negotiable)

- **#1D4ED8 is the only global accent**  
  **Confirmed.** Global accent is set in `frontend/src/styles/globals.css`: `--primary: 224 76% 48%` (HSL for #1D4ED8) and `--primary-hex: #1D4ED8`. Buttons, links, borders, and gradients use `hsl(var(--primary))` or `var(--primary-hex)` / `text-primary` / `bg-primary`. No other global accent hex is used in layout/sections.

- **Lens cyan appears only in Lens sections/pages**  
  **Confirmed.** Cyan is used only: (1) Home Hero “Lens” card (Tailwind `cyan-*`), (2) Home LensOrbit section (AI DLP product block + `LensOrbitGlobe`), (3) Platforms page Lens block and Architecture “Lens (AI DLP)” card. Rest of site uses primary (#1D4ED8) or neutrals. LensOrbitGlobe uses cyan gradient (`#0891b2` / `#0f172a`) for the globe only.

- **No dark sections**  
  **Confirmed.** All sections use light backgrounds only: `bg-white`, `bg-slate-50`, `section-alt` (hsl(210 40% 98%)), `section-grid`, `section-gradient`, `bg-primary/5` or similar. Testimonials use light avatar backgrounds (e.g. `bg-primary/15`, `bg-orange-500/10`); no dark blocks.

- **Tokens enforced via Tailwind/CSS variables; no random hex in components**  
  **Confirmed for layout/sections.** Page and section components use Tailwind tokens (`primary`, `primary-foreground`, `border-primary/20`, etc.) or CSS variables. Exceptions (intentional, limited): (1) `globals.css` gradient helpers use `#1e40af` + `var(--primary-hex)` for gradient-text; (2) Gauge illustration uses hex for semantic gauge segments (red/amber/green) and needle/hub; (3) LensOrbitGlobe uses hex for cyan gradient. No arbitrary hex used for general UI accent outside these. CTA form focus and not-found button use `primary`. Benefits/Features “blue” variant uses **primary** (bg-primary/10, border-primary/20, text-primary); other variants (orange, green, gold/amber, red) use their semantic Tailwind tokens only. Zero palette drift for accent: global accent is primary only.

---

## 4) Milestone 2 requirement: AWS staging (not optional)

- **AWS staging URL**  
  **To be provided by project owner / DevOps.** This codebase currently has a Vercel-oriented setup (e.g. `vercel.json`, frontend build). There is no AWS (e.g. Amplify, S3/CloudFront) or ap-southeast-2-specific config in the repo. The **AWS Sydney (ap-southeast-2) staging URL and go-live date must be confirmed by you** once the frontend is deployed to AWS.

- **Contact form wiring in AWS**  
  **To be confirmed by project owner.** Both contact forms (Home CTA section and Contact page) currently use `onSubmit={(e) => e.preventDefault()}` — no backend submission. Per scope, the form is to be wired in AWS (e.g. API Gateway + Lambda, or other backend in ap-southeast-2). That wiring and the exact endpoint/behavior are outside this verification pack; **you** confirm how and when it will be connected for staging.

**Action for you:** (1) Deploy frontend to AWS Sydney (ap-southeast-2) and share the staging URL and date. (2) Confirm how the contact form will be wired (e.g. endpoint, environment variables) and by when.

---

## 5) Freeze criteria + timeline

- **Freeze:** Once you receive this pack and **confirm on staging** (motion, illustrations, tokens, and layout as above), the system is frozen and the team moves into **content + QA**.

- **Timeline:** Per your requirement, **all remaining fixes** (including any found during your verification) must be finished by **18 March at the latest**. **21 March** remains the deadline.

- **Confirmation:** This verification pack is sent for your review. After you validate on the **AWS staging** environment and confirm, we treat the Cloudflare-grade structure as locked and proceed to content/QA only.

---

*End of verification pack.*
