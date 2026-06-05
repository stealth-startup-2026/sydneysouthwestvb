# SSWV Website — Design Spec
**Date:** 2026-06-05
**Status:** Approved

---

## Overview

A static demo website for Sydney South West Volleyball (SSWV), a community volleyball club established in 2021, based in Fairfield and Bonnyrigg, Sydney. The goal is a polished, stakeholder-ready demo — looks great, all content hardcoded as placeholder, no CMS or backend.

Built on the existing Next.js 16 + React 19 + Tailwind CSS v4 scaffold already in the repo.

---

## Club Context

- **Full name:** Sydney South West Volleyball
- **Abbreviation:** SSWV
- **Mascot:** Panda
- **Est.:** 2021
- **Locations:** Fairfield & Bonnyrigg
- **Phone:** 0450 948 278
- **Registration platform:** www.revolutionise.com.au/sswv
- **Coaches:** Coach Ba, Rob, Steven
- **Programs:** Social trainings, weekly scrims, beginner + intermediate classes
- **Competitive leagues:** YSVL (Youth Sydney Volleyball League) & SVL (Sydney Volleyball League)
- **Membership tiers:**
  - Full Membership — competitive athletes playing YSVL & SVL
  - Recreational Membership — non-pathway players, social focus

---

## Design System

### Palette
| Token | Value | Usage |
|---|---|---|
| `--green` | `#3d7a4f` | Primary brand green — buttons, accents, borders |
| `--dark` | `#1c2b22` | Near-black with green tint — dark section backgrounds, nav on light pages |
| `--gold` | `#c9a84c` | Warm accent — highlight text, CTA buttons, star elements |
| `--surface` | `#f7f9f7` | Off-white base — default page background |
| `--text` | `#1a1a1a` | Near-black body text |
| `--muted` | `#6b7c70` | Secondary/caption text |
| `--white` | `#ffffff` | Cards, nav background on light pages |

### Typography
- **Headings:** Oswald (Google Fonts) — sporty, condensed, authoritative without being aggressive
- **Body:** Inter (Google Fonts) — clean, legible, neutral
- **Scale:** 4xl–6xl for hero/page titles, 2xl–3xl for section headings, base for body, sm for captions

### Feel
Clean off-white base with alternating light/dark sections for rhythm. Green and gold used as punctuation (highlights, borders, buttons) not as wallpaper. Photography-first — stock volleyball action shots carry the visual weight. The panda mascot logo anchors the brand identity in nav and footer. Premium but warm — no gradients, no busy backgrounds, generous whitespace.

### Section Rhythm (homepage alternation)
1. Dark — Hero
2. Dark — Welcome strip
3. Light — Programs snapshot
4. Dark green — Membership teaser
5. Light — Meet the Coaches
6. Light — Locations
7. Dark — Join CTA banner

---

## Global Components

### Header (SiteHeader)
- Sticky, `z-50`
- **Transparent + white text** when overlapping a dark hero (homepage)
- **White background + dark text** on all interior pages
- Left: Panda logo mark + "Sydney South West Volleyball" text
- Right: nav links — Home · About · Programs · Teams · Membership · Contact
- Mobile: hamburger → full-screen slide-down menu

### Footer (SiteFooter)
- Background: `--dark`
- Three columns:
  1. Logo + tagline + "Est. 2021 · Fairfield & Bonnyrigg"
  2. Quick links (all 6 pages)
  3. Phone, email placeholder, Instagram + Facebook icon links
- Thin `--green` horizontal rule above copyright line

---

## Pages

### 1. Home (`/`)

**Hero** (full-viewport, slideshow)
- 3–4 high-quality stock volleyball action photos (indoor court, players spiking/setting/blocking)
- Auto-advancing crossfade slideshow, ~5s interval, pause on hover
- Dark gradient overlay (bottom-left) ensures text legibility over any image
- Content overlay (left-aligned):
  - Eyebrow: "Sydney South West Volleyball · Est. 2021"
  - H1: "Where Community Meets the Court"
  - Subtext: "Social trainings, weekly scrims, and competitive teams in South West Sydney."
  - Two CTAs: **"Join the Club"** (gold, links to revolutionise.com.au/sswv, external) · **"Learn More"** (outline white, links to /about)
- SSWV panda logo watermark (circular badge from `.design/images/02-image.jpg`), bottom-right corner of hero, 20% opacity, `next/image` element

**Welcome Strip** (dark `--dark` bg)
- 3 icon + title + body cards in a row:
  - Community — "A welcoming club where everyone belongs"
  - Coaching — "Expert guidance from Coach Ba, Rob, and Steven"
  - Competition — "Pathways into YSVL and SVL for competitive players"
- Cards: dark bg, `--green` icon circles, white text

**Programs Snapshot** (light `--surface` bg)
- Section heading: "What We Offer"
- 3 cards with a stock photo thumbnail, program name, one-line description, "Learn More" link to /programs
  - Social Trainings
  - Weekly Scrims
  - Beginner + Intermediate Classes

**Membership Teaser** (`--green` bg)
- Side-by-side: Full Membership vs Recreational Membership
- Brief descriptor for each, key differentiator highlighted
- Single CTA: "View Membership Options" → /membership

**Meet the Coaches** (light bg)
- Section heading: "Our Coaches"
- 3 coach cards: circular placeholder headshot, name, role/bio placeholder (1–2 sentences)

**Locations** (light bg, no top padding — flows from coaches)
- Section heading: "Find Us"
- 2 cards side-by-side: Fairfield · Bonnyrigg
- Each card: location name, address placeholder, embedded map placeholder (grey rectangle with pin icon)

**Join CTA Banner** (`--dark` bg)
- Full-width, centred
- Heading: "Ready to Join the Pandas?"
- Body: one line of copy
- Single button: "Join Now" (gold) → revolutionise.com.au/sswv, external

---

### 2. About (`/about`)

**Page Hero** (shorter, ~40vh, dark bg, no slideshow)
- Static stock image background
- H1: "About SSWV"
- Breadcrumb: Home > About

**Our Story**
- 2–3 paragraphs of placeholder copy about founding in 2021, growth, community mission
- Pull quote in `--green`: "Volleyball for everyone in South West Sydney"

**Our Values** (dark section)
- 3 value pillars: Community · Development · Fun
- Same card layout as homepage welcome strip

**Coaches** (light section)
- Expanded coach cards: larger headshot placeholder, name, coaching role, short bio (3–4 sentences placeholder)

---

### 3. Programs (`/programs`)

**Page Hero** (shorter, dark bg)
- H1: "Programs & Training"

**Programs** (light, alternating image-left / image-right layout)
Three programs, each as a full-width two-column block:

1. **Social Trainings**
   - Who it's for: anyone who wants to stay active and meet people
   - Schedule placeholder: "Tuesdays & Thursdays — check socials for times"
   - Location: Fairfield / Bonnyrigg (rotates)

2. **Weekly Scrims**
   - Who it's for: players wanting game experience without commitment
   - Format: informal match play, all levels welcome
   - Schedule placeholder

3. **Beginner + Intermediate Classes**
   - Structured skill development
   - Beginner: fundamentals (serve, pass, set)
   - Intermediate: tactics, consistency, court awareness
   - Schedule placeholder

Each block: stock photo one side, text + details the other side. Alternating which side the photo is on.

**CTA strip** at bottom (dark): "Not sure which program suits you? Get in touch." → /contact

---

### 4. Teams (`/teams`)

**Page Hero** (shorter, dark bg)
- H1: "Our Teams"

**Intro paragraph** — what competitive volleyball looks like at SSWV, the pathway from social → YSVL → SVL

**YSVL Section** (light)
- Heading: "Youth Sydney Volleyball League"
- What it is, age/eligibility placeholder, current season placeholder
- Team card(s): placeholder team name, squad size, stock photo

**SVL Section** (dark)
- Heading: "Sydney Volleyball League"
- Adult competition context, division placeholder (e.g. D2 Men's)
- Team card(s)

**Trials CTA** (green section)
- "Interested in joining a competitive team?"
- Steps: 1. Fill EOI · 2. Attend trial · 3. Get notified
- Button: "Express Interest" → /contact

---

### 5. Membership (`/membership`)

**Page Hero** (shorter, dark bg)
- H1: "Join the Club"

**Tier Cards** (light section, side-by-side)
Two large cards:

| Full Membership | Recreational Membership |
|---|---|
| Competitive athletes | Non-pathway players |
| Plays in YSVL & SVL | Social/club play only |
| Access to trials | No league commitment |
| Coaching included | Coaching included |
| [placeholder price] | [placeholder price] |

Gold "Join Now" button on each → revolutionise.com.au/sswv

**Why Join SSWV?** (dark section)
- 3-column checklist: Expert Coaching · Technical + Fun · Make Friends & Stay Active
- Pulls from the "Why Join Us?" copy

**FAQ Accordion** (light section)
- 4–5 placeholder FAQs:
  - "Do I need experience to join?"
  - "What's the difference between Full and Recreational?"
  - "Where are sessions held?"
  - "How do I trial for a competitive team?"
  - "What equipment do I need?"

---

### 6. Contact (`/contact`)

**Page Hero** (shorter, dark bg)
- H1: "Get in Touch"

**Contact Details** (light section, two columns)
- Left: phone (0450 948 278), email placeholder, locations (Fairfield + Bonnyrigg), social icon links (Instagram + Facebook)
- Right: mocked contact form — Name, Email, Message, Submit button (green). Form is static, no action.

**Social Feed Placeholder** (dark section)
- Heading: "Follow Us on Instagram"
- Subtext: "@sswvolleyball"
- Grey placeholder grid (3×2 cells) with Instagram icon centred, labelled "Social feed — coming soon"
- CTA button: "Follow on Instagram" → external (placeholder #)

---

## Stock Photography Direction

All photos should feel consistent — same source aesthetic. Target: **indoor volleyball action shots, well-lit gym/court, diverse players, energetic but not over-produced**. Unsplash / Pexels search terms:
- "volleyball indoor court action"
- "volleyball players spiking"
- "volleyball team celebration"
- "volleyball training session"

Avoid: beach volleyball, overly professional/Olympic-scale venues, stock-photo-obvious poses.

---

## Tech Notes

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4 — define custom tokens in `globals.css` via `@theme`
- **Fonts:** Load Oswald + Inter via `next/font/google`
- **Images:** Use `next/image` with `placeholder="blur"` for stock images; store in `/public/images/`
- **Slideshow:** Client component with `useState` + `useEffect` interval + CSS `opacity` transition
- **No CMS, no database, no auth** — all content hardcoded in components or page files
- **No Sanity** — unlike provolley-website, this is fully static
- **External links** open in new tab with `rel="noopener noreferrer"`
- **Mobile-first** — all layouts stack to single column below `md` breakpoint

---

## Out of Scope (for this demo)

- Real contact form submission
- CMS integration
- Authentication
- Live social media feed
- Real map embeds (use placeholder)
- Actual pricing data
- Schedule data (use placeholder text)
