# SSWV Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete 6-page static Next.js demo website for Sydney South West Volleyball (SSWV) that looks polished enough to present to the club.

**Architecture:** Static App Router site — all content hardcoded in components, no CMS or API calls. Pages share a sticky SiteHeader + SiteFooter via the root layout. Interactive pieces (hero slideshow, mobile menu, FAQ accordion, contact form) are isolated `"use client"` components; everything else is server components.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4

---

## File Map

**Modify:**
- `src/app/globals.css` — brand tokens, fonts, remove dark-mode override
- `src/app/layout.tsx` — swap to Oswald+Inter, add SiteHeader+SiteFooter, update metadata
- `src/app/page.tsx` — full home page
- `next.config.ts` — remotePatterns for Pexels images

**Create (components):**
- `src/components/layout/SiteHeader.tsx`
- `src/components/layout/MobileMenu.tsx` *(client)*
- `src/components/layout/SiteFooter.tsx`
- `src/components/ui/Container.tsx`
- `src/components/ui/SectionHeader.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/PageHero.tsx`
- `src/components/home/HeroSlideshow.tsx` *(client)*
- `src/components/home/WelcomeStrip.tsx`
- `src/components/home/ProgramsSnapshot.tsx`
- `src/components/home/MembershipTeaser.tsx`
- `src/components/home/CoachesSection.tsx`
- `src/components/home/LocationsSection.tsx`
- `src/components/home/JoinCtaBanner.tsx`
- `src/components/programs/ProgramBlock.tsx`
- `src/components/teams/TeamCard.tsx`
- `src/components/teams/TrialsCta.tsx`
- `src/components/membership/TierCard.tsx`
- `src/components/membership/FaqAccordion.tsx` *(client)*
- `src/components/contact/ContactForm.tsx` *(client)*
- `src/components/contact/SocialFeedPlaceholder.tsx`

**Create (pages):**
- `src/app/about/page.tsx`
- `src/app/programs/page.tsx`
- `src/app/teams/page.tsx`
- `src/app/membership/page.tsx`
- `src/app/contact/page.tsx`

**Create (assets):**
- `public/images/logo.jpg` — copy from `.design/images/02-image.jpg`
- `public/images/hero-{1..4}.jpg` — volleyball stock photos
- `public/images/program-social.jpg`, `program-scrims.jpg`, `program-classes.jpg`
- `public/images/teams-ysvl.jpg`, `teams-svl.jpg`
- `public/images/about-hero.jpg`

---

## Task 1: Project setup — theme tokens, fonts, images, config

**Files:** `globals.css`, `layout.tsx`, `next.config.ts`, `public/images/`

- [ ] **Step 1: Read Next.js 16 image config docs**

```bash
cat node_modules/next/dist/docs/01-app/03-api-reference/02-components/image.md | head -100
```

Confirm `remotePatterns` syntax for external hosts.

- [ ] **Step 2: Update next.config.ts**

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
```

- [ ] **Step 3: Copy logo asset**

```bash
mkdir -p public/images
cp .design/images/02-image.jpg public/images/logo.jpg
```

- [ ] **Step 4: Download volleyball stock images**

Use WebSearch to find indoor volleyball action photos on Pexels (search: "indoor volleyball pexels", "volleyball spike indoor pexels"). Download into `public/images/` — target images should show indoor court, diverse players, well-lit gym. Need 10 images total:

```bash
# Hero images (wide landscape, 1920×1280)
curl -L -o public/images/hero-1.jpg "PEXELS_VOLLEYBALL_ACTION_URL_1"
curl -L -o public/images/hero-2.jpg "PEXELS_VOLLEYBALL_ACTION_URL_2"
curl -L -o public/images/hero-3.jpg "PEXELS_VOLLEYBALL_TRAINING_URL"
curl -L -o public/images/hero-4.jpg "PEXELS_VOLLEYBALL_TEAM_URL"
# Section images
curl -L -o public/images/program-social.jpg   "PEXELS_SOCIAL_TRAINING_URL"
curl -L -o public/images/program-scrims.jpg   "PEXELS_MATCH_PLAY_URL"
curl -L -o public/images/program-classes.jpg  "PEXELS_COACHING_URL"
curl -L -o public/images/teams-ysvl.jpg       "PEXELS_YOUTH_VOLLEYBALL_URL"
curl -L -o public/images/teams-svl.jpg        "PEXELS_ADULT_VOLLEYBALL_URL"
curl -L -o public/images/about-hero.jpg       "PEXELS_TEAM_HUDDLE_URL"
```

Verify: `ls -lh public/images/` — all files present and >10 KB.

- [ ] **Step 5: Rewrite globals.css**

```css
/* src/app/globals.css */
@import "tailwindcss";

:root {
  --background: #f7f9f7;
  --foreground: #1a1a1a;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-green: #3d7a4f;
  --color-dark: #1c2b22;
  --color-gold: #c9a84c;
  --color-surface: #f7f9f7;
  --color-muted: #6b7c70;
  --color-white: #ffffff;
  --font-heading: var(--font-oswald);
  --font-body: var(--font-inter);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-inter), system-ui, sans-serif;
}

h1, h2, h3, h4 {
  font-family: var(--font-oswald), system-ui, sans-serif;
}
```

- [ ] **Step 6: Rewrite layout.tsx**

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sydney South West Volleyball | SSWV",
  description:
    "Community volleyball club in Fairfield & Bonnyrigg, Sydney. Social trainings, weekly scrims, beginner–intermediate classes and competitive YSVL & SVL teams.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-surface text-foreground font-body">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
```

- [ ] **Step 7: Create component directory structure**

```bash
mkdir -p src/components/layout
mkdir -p src/components/ui
mkdir -p src/components/home
mkdir -p src/components/programs
mkdir -p src/components/teams
mkdir -p src/components/membership
mkdir -p src/components/contact
```

- [ ] **Step 8: Commit**

```bash
git add next.config.ts src/app/globals.css src/app/layout.tsx public/images/
git commit -m "feat: project setup — brand tokens, Oswald+Inter fonts, image config, logo"
```

---

## Task 2: Shared UI primitives

**Files:** `Container.tsx`, `SectionHeader.tsx`, `Button.tsx`, `PageHero.tsx`

- [ ] **Step 1: Create Container**

```tsx
// src/components/ui/Container.tsx
export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Create SectionHeader**

```tsx
// src/components/ui/SectionHeader.tsx
export function SectionHeader({
  eyebrow, title, subtitle, light = false, className = "",
}: {
  eyebrow?: string; title: string; subtitle?: string; light?: boolean; className?: string;
}) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">{eyebrow}</p>
      )}
      <h2 className={`font-heading text-4xl font-bold uppercase tracking-wide sm:text-5xl ${light ? "text-white" : "text-dark"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${light ? "text-white/70" : "text-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
```

- [ ] **Step 3: Create Button**

```tsx
// src/components/ui/Button.tsx
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline-white" | "outline-dark";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-dark hover:brightness-110",
  secondary: "bg-green text-white hover:brightness-110",
  "outline-white": "border border-white text-white hover:bg-white/10",
  "outline-dark": "border border-dark text-dark hover:bg-dark hover:text-white",
};

export function Button({
  href, children, variant = "primary", external = false, className = "",
}: {
  href: string; children: React.ReactNode; variant?: Variant; external?: boolean; className?: string;
}) {
  const cls = `inline-block rounded px-7 py-3 font-heading text-sm font-semibold uppercase tracking-wider transition ${variants[variant]} ${className}`;
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  }
  return <Link href={href} className={cls}>{children}</Link>;
}
```

- [ ] **Step 4: Create PageHero**

```tsx
// src/components/ui/PageHero.tsx
import Image from "next/image";

export function PageHero({
  title, subtitle, imageSrc, imageAlt = "",
}: {
  title: string; subtitle?: string; imageSrc?: string; imageAlt?: string;
}) {
  return (
    <section className="relative flex h-64 items-end bg-dark md:h-80">
      {imageSrc && (
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover opacity-30" priority />
      )}
      <div className="relative z-10 w-full border-b-4 border-green pb-8 pt-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {subtitle && (
            <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-gold">{subtitle}</p>
          )}
          <h1 className="font-heading text-5xl font-bold uppercase tracking-wide text-white sm:text-6xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/
git commit -m "feat: shared UI primitives — Container, SectionHeader, Button, PageHero"
```

---

## Task 3: Global layout — SiteHeader, MobileMenu, SiteFooter

- [ ] **Step 1: Create MobileMenu (client)**

```tsx
// src/components/layout/MobileMenu.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Teams", href: "/teams" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} aria-label="Toggle navigation"
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
        <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 w-full bg-dark py-4 shadow-lg">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="block px-6 py-3 font-heading text-lg uppercase tracking-wide text-white hover:bg-green/20 hover:text-gold">
              {link.label}
            </Link>
          ))}
          <div className="mt-4 px-6">
            <a href="https://www.revolutionise.com.au/sswv" target="_blank" rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block w-full rounded bg-gold py-3 text-center font-heading text-sm font-semibold uppercase tracking-wider text-dark">
              Join Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Create SiteHeader**

```tsx
// src/components/layout/SiteHeader.tsx
import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./MobileMenu";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Teams", href: "/teams" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-dark/10 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.jpg" alt="SSWV" width={40} height={40} className="rounded-full object-cover" />
          <span className="font-heading text-lg font-bold uppercase leading-tight tracking-wide text-dark sm:text-xl">
            Sydney South West
            <span className="block text-green">Volleyball</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((link) => (
            <Link key={link.href} href={link.href}
              className="font-heading text-sm font-semibold uppercase tracking-wider text-dark transition hover:text-green">
              {link.label}
            </Link>
          ))}
          <a href="https://www.revolutionise.com.au/sswv" target="_blank" rel="noopener noreferrer"
            className="rounded bg-green px-5 py-2 font-heading text-sm font-semibold uppercase tracking-wider text-white transition hover:brightness-110">
            Join Now
          </a>
        </nav>
        <div className="relative md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Create SiteFooter**

```tsx
// src/components/layout/SiteFooter.tsx
import Link from "next/link";
import Image from "next/image";

const INSTAGRAM_SVG = (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const FACEBOOK_SVG = (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Teams", href: "/teams" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/logo.jpg" alt="SSWV" width={48} height={48} className="rounded-full object-cover" />
              <div>
                <p className="font-heading text-xl font-bold uppercase leading-tight tracking-wide text-white">Sydney South West</p>
                <p className="font-heading text-xl font-bold uppercase leading-tight tracking-wide text-green">Volleyball</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">Est. 2021 · Community volleyball for all levels in South West Sydney.</p>
            <p className="mt-2 text-sm text-white/60">📍 Fairfield &amp; Bonnyrigg</p>
          </div>
          <div>
            <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">Quick Links</p>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition hover:text-green">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">Get in Touch</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="tel:0450948278" className="hover:text-green">📞 0450 948 278</a></li>
              <li><a href="mailto:info@sswv.com.au" className="hover:text-green">✉️ info@sswv.com.au</a></li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-gold hover:text-gold">
                {INSTAGRAM_SVG}
              </a>
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-gold hover:text-gold">
                {FACEBOOK_SVG}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-green/30 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Sydney South West Volleyball. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Start dev server, verify header + footer appear**

```bash
npm run dev
```

Visit http://localhost:3000. Expected: white sticky header with logo + nav + Join Now button; dark footer with 3 columns below empty body. No TypeScript errors in terminal.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/
git commit -m "feat: SiteHeader, MobileMenu, SiteFooter"
```

---

## Task 4: Hero slideshow (client component)

- [ ] **Step 1: Create HeroSlideshow**

```tsx
// src/components/home/HeroSlideshow.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/images/hero-1.jpg", alt: "Volleyball players in action" },
  { src: "/images/hero-2.jpg", alt: "Team celebrating a point" },
  { src: "/images/hero-3.jpg", alt: "Players training on court" },
  { src: "/images/hero-4.jpg", alt: "Match in progress" },
];

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="absolute inset-0" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {SLIDES.map((slide, i) => (
        <div key={slide.src} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
          <Image src={slide.src} alt={slide.alt} fill className="object-cover" priority={i === 0} sizes="100vw" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/60 to-dark/20" />
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-gold" : "w-2 bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/home/HeroSlideshow.tsx
git commit -m "feat: HeroSlideshow — crossfade, pause on hover, dot nav"
```

---

## Task 5: Home page sections

- [ ] **Step 1: Create WelcomeStrip**

```tsx
// src/components/home/WelcomeStrip.tsx
import { Container } from "@/components/ui/Container";

const PILLARS = [
  { icon: "🤝", title: "Community", body: "A welcoming club where beginners and seasoned players train side by side and lifelong friendships are formed." },
  { icon: "🏆", title: "Coaching", body: "Expert guidance from Coach Ba, Rob, and Steven — combining technical drills with game-sense development." },
  { icon: "⚡", title: "Competition", body: "Clear pathways into YSVL and SVL for players who want to test themselves in organised competition." },
];

export function WelcomeStrip() {
  return (
    <section className="bg-dark py-20">
      <Container>
        <div className="mb-10 text-center">
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-gold">Est. 2021 · Fairfield &amp; Bonnyrigg</p>
          <h2 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">Welcome to SSWV</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
            Sydney South West Volleyball is a community club built for everyone — whether you&apos;re picking up a ball for the first time or chasing a league title.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="rounded-xl border border-green/30 bg-white/5 px-6 py-8 text-center">
              <span className="mb-4 block text-4xl">{p.icon}</span>
              <h3 className="mb-3 font-heading text-xl font-bold uppercase tracking-wide text-gold">{p.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Create ProgramsSnapshot**

```tsx
// src/components/home/ProgramsSnapshot.tsx
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const PROGRAMS = [
  { title: "Social Trainings", description: "Low-pressure, high-fun sessions open to all levels. Stay active and meet the SSWV community.", image: "/images/program-social.jpg", href: "/programs#social" },
  { title: "Weekly Scrims", description: "Informal match play every week. Sharpen your game-sense in real rallies without the league commitment.", image: "/images/program-scrims.jpg", href: "/programs#scrims" },
  { title: "Beginner & Intermediate Classes", description: "Structured sessions from your first serve to tactical court positioning.", image: "/images/program-classes.jpg", href: "/programs#classes" },
];

export function ProgramsSnapshot() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <SectionHeader eyebrow="What We Offer" title="Programs for Every Level"
          subtitle="From your very first touch of the ball to stepping onto a competitive court — we have a program for you." />
        <div className="grid gap-6 sm:grid-cols-3">
          {PROGRAMS.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-dark/5 transition hover:shadow-md">
              <div className="relative h-48 overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-dark">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                <Link href={p.href} className="mt-4 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-green hover:underline">Learn More →</Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 3: Create MembershipTeaser**

```tsx
// src/components/home/MembershipTeaser.tsx
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function MembershipTeaser() {
  return (
    <section className="bg-green py-20">
      <Container>
        <div className="mb-10 text-center">
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-white/70">Membership</p>
          <h2 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">Find Your Fit</h2>
        </div>
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-dark/40 p-8 text-center ring-1 ring-white/10">
            <span className="mb-3 block text-4xl">🏆</span>
            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-gold">Full Membership</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">For competitive athletes who want to represent SSWV in YSVL and SVL league competitions.</p>
          </div>
          <div className="rounded-xl bg-dark/40 p-8 text-center ring-1 ring-white/10">
            <span className="mb-3 block text-4xl">🏐</span>
            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-gold">Recreational Membership</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">For players who love the sport without the league commitment — all the fun, none of the pressure.</p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button href="/membership" variant="outline-white">View Membership Options</Button>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 4: Create CoachesSection**

```tsx
// src/components/home/CoachesSection.tsx
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const COACHES = [
  { name: "Coach Ba", role: "Head Coach", initials: "B", bio: "Experienced head coach focused on technical fundamentals and game-strategy. The driving force behind SSWV's player development programs." },
  { name: "Rob", role: "Assistant Coach", initials: "R", bio: "Brings competitive playing experience to sessions. Focuses on team dynamics, match-play preparation, and on-court leadership." },
  { name: "Steven", role: "Skills Coach", initials: "S", bio: "Works with beginner and intermediate groups. His structured progressions have helped dozens of first-timers fall in love with volleyball." },
];

export function CoachesSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeader eyebrow="The People Behind SSWV" title="Meet Our Coaches"
          subtitle="Our coaching team combines competitive experience with a genuine passion for growing the game in South West Sydney." />
        <div className="grid gap-8 sm:grid-cols-3">
          {COACHES.map((coach) => (
            <div key={coach.name} className="text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green font-heading text-3xl font-bold text-white ring-4 ring-green/20">
                {coach.initials}
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-dark">{coach.name}</h3>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">{coach.role}</p>
              <p className="text-sm leading-relaxed text-muted">{coach.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 5: Create LocationsSection**

```tsx
// src/components/home/LocationsSection.tsx
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const LOCATIONS = [
  { name: "Fairfield", address: "Fairfield, NSW 2165", detail: "Check our socials for current session schedule" },
  { name: "Bonnyrigg", address: "Bonnyrigg, NSW 2177", detail: "Check our socials for current session schedule" },
];

export function LocationsSection() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <SectionHeader eyebrow="Where to Find Us" title="Our Locations"
          subtitle="We run sessions across two venues in South West Sydney — close to home for our community." />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {LOCATIONS.map((loc) => (
            <div key={loc.name} className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-dark/5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green text-xl">📍</div>
              <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-dark">{loc.name}</h3>
              <p className="mt-1 text-sm text-muted">{loc.address}</p>
              <div className="mt-4 flex h-36 items-center justify-center rounded-lg bg-dark/8 text-sm text-muted">Map placeholder</div>
              <p className="mt-3 text-xs text-muted">{loc.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 6: Create JoinCtaBanner**

```tsx
// src/components/home/JoinCtaBanner.tsx
import { Container } from "@/components/ui/Container";

export function JoinCtaBanner() {
  return (
    <section className="bg-dark py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Ready to Join <span className="text-gold">the Pandas?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
            Whether you&apos;re here for the fun, the competition, or both — there&apos;s a place for you at SSWV.
          </p>
          <a href="https://www.revolutionise.com.au/sswv" target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-block rounded bg-gold px-10 py-4 font-heading text-sm font-semibold uppercase tracking-widest text-dark transition hover:brightness-110">
            Join Now
          </a>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 7: Commit**

```bash
git add src/components/home/
git commit -m "feat: home sections — WelcomeStrip, ProgramsSnapshot, MembershipTeaser, CoachesSection, LocationsSection, JoinCtaBanner"
```

---

## Task 6: Home page assembly

- [ ] **Step 1: Replace src/app/page.tsx**

```tsx
// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import { WelcomeStrip } from "@/components/home/WelcomeStrip";
import { ProgramsSnapshot } from "@/components/home/ProgramsSnapshot";
import { MembershipTeaser } from "@/components/home/MembershipTeaser";
import { CoachesSection } from "@/components/home/CoachesSection";
import { LocationsSection } from "@/components/home/LocationsSection";
import { JoinCtaBanner } from "@/components/home/JoinCtaBanner";

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-dark">
        <HeroSlideshow />
        <div className="absolute bottom-8 right-8 z-10 opacity-20">
          <Image src="/images/logo.jpg" alt="" width={100} height={100} className="rounded-full" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            Sydney South West Volleyball · Est. 2021
          </p>
          <h1 className="max-w-2xl font-heading text-5xl font-bold uppercase leading-tight tracking-wide text-white sm:text-6xl lg:text-7xl">
            Where Community Meets <span className="text-gold">the Court</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            Social trainings, weekly scrims, and competitive teams in Fairfield &amp; Bonnyrigg, South West Sydney.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://www.revolutionise.com.au/sswv" target="_blank" rel="noopener noreferrer"
              className="rounded bg-gold px-8 py-4 font-heading text-sm font-semibold uppercase tracking-widest text-dark transition hover:brightness-110">
              Join the Club
            </a>
            <Link href="/about"
              className="rounded border border-white px-8 py-4 font-heading text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/10">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <WelcomeStrip />
      <ProgramsSnapshot />
      <MembershipTeaser />
      <CoachesSection />
      <LocationsSection />
      <JoinCtaBanner />
    </>
  );
}
```

- [ ] **Step 2: Verify full home page at http://localhost:3000**

Check: hero advances every 5s, pauses on hover, dot indicators work; all 6 sections below render; no console errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: home page — hero + all sections assembled"
```

---

## Task 7: About page

- [ ] **Step 1: Create src/app/about/page.tsx**

```tsx
// src/app/about/page.tsx
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const VALUES = [
  { icon: "🤝", title: "Community", body: "We believe sport is a vehicle for connection. SSWV is a place where players from all walks of life come together, support each other, and grow." },
  { icon: "📈", title: "Development", body: "Every player deserves quality coaching. We invest in structured skill development at every level — from first touches to competitive play." },
  { icon: "😄", title: "Fun", body: "Volleyball should be enjoyable. We balance serious training with an atmosphere that keeps every session something to look forward to." },
];

const COACHES = [
  { name: "Coach Ba", role: "Head Coach", initials: "B", bio: "Coach Ba is the driving force behind SSWV's technical programs. With competitive and coaching experience, Ba leads with a focus on fundamentals, court awareness, and player confidence. Known for a patient, detail-oriented style that brings out the best in players at every stage." },
  { name: "Rob", role: "Assistant Coach", initials: "R", bio: "Rob brings a deep understanding of match-play to every session. His competitive background means he knows what it takes to perform under pressure — and he channels that into preparing SSWV players for game day. Known for his energy and genuine encouragement." },
  { name: "Steven", role: "Skills Coach", initials: "S", bio: "Steven works primarily with beginner and intermediate groups, building the foundational skills that make the rest of the game click. His approachable style and structured progressions have helped dozens of first-time players fall in love with volleyball." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About SSWV" subtitle="Our Story" imageSrc="/images/about-hero.jpg" imageAlt="SSWV players on court" />

      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeader eyebrow="Who We Are" title="Our Story" />
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>Sydney South West Volleyball was founded in 2021 with a simple mission: give the South West Sydney community access to quality volleyball, without the barriers. Whether you&apos;re a complete beginner, a returning player, or a competitive athlete chasing a league title — SSWV has a place for you.</p>
              <p>We operate across two venues in Fairfield and Bonnyrigg, making us accessible to players right across the south west corridor. In just a few years, we&apos;ve grown from a small training group into a club with competitive YSVL and SVL teams, a thriving social program, and a coaching staff that genuinely cares about player development.</p>
              <p>At SSWV, the scoreline matters — but so does the person celebrating beside you after the rally.</p>
            </div>
            <blockquote className="mt-10 border-l-4 border-green pl-6">
              <p className="font-heading text-2xl font-bold uppercase tracking-wide text-green">&ldquo;Volleyball for everyone in South West Sydney.&rdquo;</p>
            </blockquote>
          </div>
        </Container>
      </section>

      <section className="bg-dark py-20">
        <Container>
          <SectionHeader eyebrow="What We Stand For" title="Our Values" light />
          <div className="grid gap-6 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-xl border border-green/30 bg-white/5 px-6 py-8 text-center">
                <span className="mb-4 block text-4xl">{v.icon}</span>
                <h3 className="mb-3 font-heading text-xl font-bold uppercase tracking-wide text-gold">{v.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container>
          <SectionHeader eyebrow="The People Behind SSWV" title="Our Coaching Team"
            subtitle="Three coaches, one shared goal — making you a better player and making SSWV a club you're proud to be part of." />
          <div className="grid gap-10 sm:grid-cols-3">
            {COACHES.map((coach) => (
              <div key={coach.name} className="text-center">
                <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-green font-heading text-4xl font-bold text-white ring-4 ring-green/20">
                  {coach.initials}
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-dark">{coach.name}</h3>
                <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">{coach.role}</p>
                <p className="text-sm leading-relaxed text-muted">{coach.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify at http://localhost:3000/about — 3 sections render cleanly.**

- [ ] **Step 3: Commit**

```bash
git add src/app/about/
git commit -m "feat: About page"
```

---

## Task 8: Programs page

- [ ] **Step 1: Create ProgramBlock**

```tsx
// src/components/programs/ProgramBlock.tsx
import Image from "next/image";

interface ProgramBlockProps {
  id: string; title: string; eyebrow: string; description: string;
  whoFor: string; schedule: string; location: string;
  image: string; imageAlt: string; flip?: boolean;
}

export function ProgramBlock({ id, title, eyebrow, description, whoFor, schedule, location, image, imageAlt, flip = false }: ProgramBlockProps) {
  return (
    <div id={id} className={`flex flex-col md:flex-row ${flip ? "md:flex-row-reverse" : ""}`}>
      <div className="relative h-72 flex-1 overflow-hidden md:h-auto">
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <div className="flex flex-1 flex-col justify-center bg-white px-8 py-12 md:px-12">
        <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-gold">{eyebrow}</p>
        <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-dark sm:text-4xl">{title}</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
        <dl className="mt-6 space-y-3 text-sm">
          {[["Who it's for", whoFor], ["Schedule", schedule], ["Location", location]].map(([dt, dd]) => (
            <div key={dt} className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-dark">{dt}</dt>
              <dd className="text-muted">{dd}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create src/app/programs/page.tsx**

```tsx
// src/app/programs/page.tsx
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProgramBlock } from "@/components/programs/ProgramBlock";

const PROGRAMS = [
  { id: "social", title: "Social Trainings", eyebrow: "Open to All", flip: false,
    description: "Our social training sessions are the heartbeat of the club. Low-pressure, high-energy — these sessions are open to players of any skill level. Come to stay active, meet the community, and touch a volleyball without any expectation beyond having fun.",
    whoFor: "Anyone — complete beginners to experienced players", schedule: "Check our socials for current days and times", location: "Fairfield & Bonnyrigg (rotating)",
    image: "/images/program-social.jpg", imageAlt: "Players at a social training session" },
  { id: "scrims", title: "Weekly Scrims", eyebrow: "Game Experience", flip: true,
    description: "Nothing accelerates improvement like real match play. Our weekly scrims give you structured game time without the commitment of a league team. Organised into fair matches by our coaches, these sharpen your game-sense and decision-making under pressure.",
    whoFor: "Intermediate players wanting match experience", schedule: "Weekly — check socials for times", location: "Fairfield & Bonnyrigg",
    image: "/images/program-scrims.jpg", imageAlt: "Scrim match in action" },
  { id: "classes", title: "Beginner & Intermediate Classes", eyebrow: "Structured Development", flip: false,
    description: "Structured skill classes covering the full spectrum from fundamental movement to tactical play. Beginner classes focus on the basics — serve, pass, and set. Intermediate classes build on that with team positioning, transition play, and consistency under pressure.",
    whoFor: "New players (Beginner) and developing players (Intermediate)", schedule: "Term-based — check website for current enrolment", location: "Fairfield",
    image: "/images/program-classes.jpg", imageAlt: "Coach teaching a beginner class" },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero title="Programs & Training" subtitle="What We Offer" imageSrc="/images/hero-2.jpg" imageAlt="Training session" />
      <div className="divide-y divide-dark/5">
        {PROGRAMS.map((p) => <ProgramBlock key={p.id} {...p} />)}
      </div>
      <section className="bg-dark py-16">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">Not sure which program suits you?</h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/70">Get in touch and we&apos;ll point you in the right direction.</p>
            <div className="mt-8"><Button href="/contact" variant="primary">Get in Touch</Button></div>
          </div>
        </Container>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verify at http://localhost:3000/programs — 3 alternating blocks, CTA strip below.**

- [ ] **Step 4: Commit**

```bash
git add src/components/programs/ src/app/programs/
git commit -m "feat: Programs page with alternating image-text blocks"
```

---

## Task 9: Teams page

- [ ] **Step 1: Create TeamCard**

```tsx
// src/components/teams/TeamCard.tsx
import Image from "next/image";

interface TeamCardProps { name: string; league: string; description: string; image: string; imageAlt: string; division?: string; }

export function TeamCard({ name, league, description, image, imageAlt, division }: TeamCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-dark/5">
      <div className="relative h-56">
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        {division && (
          <span className="absolute left-4 top-4 rounded bg-gold px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-dark">{division}</span>
        )}
      </div>
      <div className="p-6">
        <p className="mb-1 font-heading text-xs font-semibold uppercase tracking-widest text-green">{league}</p>
        <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-dark">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create TrialsCta**

```tsx
// src/components/teams/TrialsCta.tsx
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const STEPS = [
  { num: "01", label: "Fill out the EOI form via our contact page" },
  { num: "02", label: "We'll email you the trial date and details" },
  { num: "03", label: "Attend the trial — bring your best game" },
  { num: "04", label: "Successful players are notified and onboarded" },
];

export function TrialsCta() {
  return (
    <section className="bg-green py-20">
      <Container>
        <div className="text-center">
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-white/70">Want to Compete?</p>
          <h2 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">Express Your Interest</h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/80">Trials for YSVL and SVL teams are held each season. Here&apos;s how it works:</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {STEPS.map((step) => (
            <div key={step.num} className="flex gap-4 rounded-xl bg-dark/30 px-6 py-5">
              <span className="font-heading text-3xl font-bold text-gold/50">{step.num}</span>
              <p className="text-sm leading-relaxed text-white">{step.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center"><Button href="/contact" variant="outline-white">Express Interest</Button></div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 3: Create src/app/teams/page.tsx**

```tsx
// src/app/teams/page.tsx
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamCard } from "@/components/teams/TeamCard";
import { TrialsCta } from "@/components/teams/TrialsCta";

export default function TeamsPage() {
  return (
    <>
      <PageHero title="Our Teams" subtitle="Competitive Volleyball" imageSrc="/images/hero-3.jpg" imageAlt="SSWV team" />

      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader eyebrow="Pathways at SSWV" title="From Social to Competitive" />
            <p className="text-base leading-relaxed text-muted">SSWV runs competitive teams in both the Youth Sydney Volleyball League (YSVL) and the Sydney Volleyball League (SVL). If you&apos;ve been building your game through our social programs and want to take the next step, our competitive teams are the natural pathway.</p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16">
        <Container>
          <SectionHeader eyebrow="Youth Competition" title="YSVL Teams"
            subtitle="The Youth Sydney Volleyball League — structured junior competition for players aged 12–18 looking to test themselves in an organised setting." />
          <div className="grid gap-6 sm:grid-cols-2">
            <TeamCard name="SSWV Youth" league="Youth Sydney Volleyball League" division="Junior"
              description="Our YSVL squad competes in organised junior competition across the Sydney metro area. Coached with a development-first mindset, players build competitive experience while continuing to grow technically and as teammates."
              image="/images/teams-ysvl.jpg" imageAlt="SSWV youth team" />
            <div className="flex items-center justify-center rounded-xl bg-white p-8 ring-1 ring-dark/5 text-center">
              <div>
                <p className="font-heading text-xl font-bold uppercase tracking-wide text-dark">More Teams Coming</p>
                <p className="mt-3 text-sm text-muted">We&apos;re growing. Additional YSVL divisions will be added as the club expands. Check our socials for updates.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-dark py-16">
        <Container>
          <SectionHeader eyebrow="Adult Competition" title="SVL Teams"
            subtitle="The Sydney Volleyball League — adult competition for players ready to represent SSWV at a higher level." light />
          <div className="grid gap-6 sm:grid-cols-2">
            <TeamCard name="SSWV Men's" league="Sydney Volleyball League" division="D2 Men's"
              description="The SSWV Men's team competes in Division 2 of the SVL. A tight-knit squad focused on building consistency and pushing for promotion. EOIs open each season — contact us to find out more."
              image="/images/teams-svl.jpg" imageAlt="SSWV men's team match" />
            <div className="flex items-center justify-center rounded-xl bg-white/10 p-8 ring-1 ring-white/10 text-center">
              <div>
                <p className="font-heading text-xl font-bold uppercase tracking-wide text-white">Women&apos;s Team — Coming Soon</p>
                <p className="mt-3 text-sm text-white/60">We&apos;re working on establishing a Women&apos;s SVL team. Register your interest through our contact page.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrialsCta />
    </>
  );
}
```

- [ ] **Step 4: Verify at http://localhost:3000/teams**

- [ ] **Step 5: Commit**

```bash
git add src/components/teams/ src/app/teams/
git commit -m "feat: Teams page — YSVL, SVL sections, trials CTA"
```

---

## Task 10: Membership page

- [ ] **Step 1: Create TierCard**

```tsx
// src/components/membership/TierCard.tsx
interface Feature { label: string; included: boolean; }
interface TierCardProps { icon: string; name: string; tagline: string; price: string; features: Feature[]; highlighted?: boolean; }

export function TierCard({ icon, name, tagline, price, features, highlighted = false }: TierCardProps) {
  return (
    <div className={`flex flex-col rounded-xl p-8 ring-2 ${highlighted ? "bg-green ring-green shadow-lg" : "bg-white ring-dark/10 shadow-sm"}`}>
      <span className="mb-3 block text-4xl">{icon}</span>
      <h3 className={`font-heading text-2xl font-bold uppercase tracking-wide ${highlighted ? "text-white" : "text-dark"}`}>{name}</h3>
      <p className={`mt-1 text-sm ${highlighted ? "text-white/80" : "text-muted"}`}>{tagline}</p>
      <p className={`mt-5 font-heading text-3xl font-bold ${highlighted ? "text-gold" : "text-dark"}`}>{price}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f.label} className="flex items-start gap-3 text-sm">
            <span className={`mt-0.5 shrink-0 ${f.included ? highlighted ? "text-gold" : "text-green" : "text-dark/20"}`}>{f.included ? "✓" : "✗"}</span>
            <span className={f.included ? highlighted ? "text-white" : "text-dark" : "text-muted/50"}>{f.label}</span>
          </li>
        ))}
      </ul>
      <a href="https://www.revolutionise.com.au/sswv" target="_blank" rel="noopener noreferrer"
        className={`mt-8 block rounded py-3 text-center font-heading text-sm font-semibold uppercase tracking-wider transition ${highlighted ? "bg-gold text-dark hover:brightness-110" : "bg-dark text-white hover:bg-green"}`}>
        Join Now
      </a>
    </div>
  );
}
```

- [ ] **Step 2: Create FaqAccordion (client)**

```tsx
// src/components/membership/FaqAccordion.tsx
"use client";
import { useState } from "react";

const FAQS = [
  { q: "Do I need experience to join?", a: "Not at all. We have programs specifically designed for complete beginners — our coaches will guide you through everything from your first serve to court positioning. The social sessions are also a low-pressure way to get started." },
  { q: "What's the difference between Full and Recreational membership?", a: "Full Membership gives you access to our competitive teams (YSVL and SVL) in addition to all training and social sessions. Recreational covers all training and social sessions without the league commitment — perfect if you want regular volleyball without a competition schedule." },
  { q: "Where are sessions held?", a: "We run sessions across two venues — Fairfield and Bonnyrigg, both in South West Sydney. Check our socials or contact us for the most up-to-date schedule." },
  { q: "How do I trial for a competitive team?", a: "Trials are held each season for YSVL and SVL teams. Express interest via our Contact page or follow us on socials for announcements. You'll need a Full Membership to participate in league competition." },
  { q: "What equipment do I need?", a: "Just yourself and non-marking indoor shoes. We provide volleyballs for all sessions. Knee pads are optional — they're not required to start." },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-dark/10">
      {FAQS.map((faq, i) => (
        <div key={i} className="py-5">
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-start justify-between gap-4 text-left" aria-expanded={open === i}>
            <span className="font-heading text-base font-semibold uppercase tracking-wide text-dark">{faq.q}</span>
            <span className={`mt-0.5 shrink-0 text-xl text-green transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
          </button>
          {open === i && <p className="mt-3 text-sm leading-relaxed text-muted">{faq.a}</p>}
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Create src/app/membership/page.tsx**

```tsx
// src/app/membership/page.tsx
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TierCard } from "@/components/membership/TierCard";
import { FaqAccordion } from "@/components/membership/FaqAccordion";

const FULL_FEATURES = [
  { label: "All social training sessions", included: true },
  { label: "Weekly scrims", included: true },
  { label: "Beginner & Intermediate classes", included: true },
  { label: "YSVL league competition", included: true },
  { label: "SVL league competition", included: true },
  { label: "Coaching from Ba, Rob & Steven", included: true },
  { label: "Club jersey eligibility", included: true },
];

const REC_FEATURES = [
  { label: "All social training sessions", included: true },
  { label: "Weekly scrims", included: true },
  { label: "Beginner & Intermediate classes", included: true },
  { label: "YSVL league competition", included: false },
  { label: "SVL league competition", included: false },
  { label: "Coaching from Ba, Rob & Steven", included: true },
  { label: "Club jersey eligibility", included: false },
];

const WHY = [
  { icon: "🧠", title: "Expert Coaching", body: "Learn from Coach Ba, Rob, and Steven — combining competitive experience with a genuine passion for player development." },
  { icon: "⚡", title: "Technical + Fun", body: "The perfect mix of structured skill training and enjoyable gameplay. You'll improve every session and actually look forward to coming back." },
  { icon: "👫", title: "Community", body: "Meet new people, stay active, and become part of a club that genuinely looks out for one another on and off the court." },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero title="Join the Club" subtitle="Membership" imageSrc="/images/hero-4.jpg" imageAlt="SSWV members" />

      <section className="bg-surface py-20">
        <Container>
          <SectionHeader eyebrow="Choose Your Membership" title="Find Your Fit"
            subtitle="Two membership options — both built around a love of volleyball and a great community." />
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            <TierCard icon="🏆" name="Full Membership" tagline="For competitive athletes hitting the courts in YSVL & SVL." price="TBC per season" features={FULL_FEATURES} highlighted />
            <TierCard icon="🏐" name="Recreational Membership" tagline="For players who love the sport without the league commitment." price="TBC per season" features={REC_FEATURES} />
          </div>
          <p className="mt-6 text-center text-sm text-muted">Pricing confirmed each season — contact us for current rates.</p>
        </Container>
      </section>

      <section className="bg-dark py-20">
        <Container>
          <SectionHeader eyebrow="Why SSWV?" title="Why Join Us?" light />
          <div className="grid gap-6 sm:grid-cols-3">
            {WHY.map((w) => (
              <div key={w.title} className="rounded-xl border border-green/30 bg-white/5 px-6 py-8 text-center">
                <span className="mb-4 block text-4xl">{w.icon}</span>
                <h3 className="mb-3 font-heading text-xl font-bold uppercase tracking-wide text-gold">{w.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{w.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeader eyebrow="Questions?" title="Frequently Asked" />
          <FaqAccordion />
        </Container>
      </section>
    </>
  );
}
```

- [ ] **Step 4: Verify at http://localhost:3000/membership — tier cards side by side, FAQ accordion toggles.**

- [ ] **Step 5: Commit**

```bash
git add src/components/membership/ src/app/membership/
git commit -m "feat: Membership page — tiers, why join, FAQ accordion"
```

---

## Task 11: Contact page

- [ ] **Step 1: Create ContactForm (client)**

```tsx
// src/components/contact/ContactForm.tsx
"use client";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    return (
      <div className="rounded-xl bg-green/10 p-8 text-center ring-1 ring-green/20">
        <span className="text-4xl">✅</span>
        <p className="mt-4 font-heading text-xl font-bold uppercase tracking-wide text-green">Message Sent!</p>
        <p className="mt-2 text-sm text-muted">We&apos;ll be in touch shortly.</p>
      </div>
    );
  }
  const inputCls = "w-full rounded-lg border border-dark/15 bg-white px-4 py-3 text-sm text-dark placeholder:text-muted focus:border-green focus:outline-none focus:ring-1 focus:ring-green";
  const labelCls = "mb-1.5 block font-heading text-xs font-semibold uppercase tracking-wider text-dark";
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="name" className={labelCls}>Name</label><input id="name" type="text" required placeholder="Your name" className={inputCls} /></div>
        <div><label htmlFor="email" className={labelCls}>Email</label><input id="email" type="email" required placeholder="your@email.com" className={inputCls} /></div>
      </div>
      <div>
        <label htmlFor="subject" className={labelCls}>Subject</label>
        <select id="subject" className={inputCls}>
          {["General Enquiry", "Membership", "Team Trials", "Programs & Classes", "Other"].map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div><label htmlFor="message" className={labelCls}>Message</label><textarea id="message" required rows={5} placeholder="How can we help?" className={inputCls} /></div>
      <button type="submit" className="w-full rounded-lg bg-green py-3 font-heading text-sm font-semibold uppercase tracking-widest text-white transition hover:brightness-110">Send Message</button>
    </form>
  );
}
```

- [ ] **Step 2: Create SocialFeedPlaceholder**

```tsx
// src/components/contact/SocialFeedPlaceholder.tsx
import { Container } from "@/components/ui/Container";

const INSTAGRAM_ICON = (
  <svg className="h-8 w-8 text-white/20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

export function SocialFeedPlaceholder() {
  return (
    <section className="bg-dark py-20">
      <Container>
        <div className="text-center">
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-gold">Instagram</p>
          <h2 className="font-heading text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">Follow <span className="text-gold">@sswvolleyball</span></h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/60">Stay up to date with training times, match results, and club news.</p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-2 sm:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center">{INSTAGRAM_ICON}</div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="mb-4 text-xs uppercase tracking-widest text-white/30">Social feed — coming soon</p>
          <a href="#" className="inline-block rounded border border-white/20 px-7 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-white/70 transition hover:border-gold hover:text-gold">Follow on Instagram</a>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 3: Create src/app/contact/page.tsx**

```tsx
// src/app/contact/page.tsx
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialFeedPlaceholder } from "@/components/contact/SocialFeedPlaceholder";

const INSTAGRAM_SVG = (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const FACEBOOK_SVG = (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <PageHero title="Get in Touch" subtitle="Contact" imageSrc="/images/hero-1.jpg" imageAlt="SSWV court" />

      <section className="bg-white py-20">
        <Container>
          <SectionHeader eyebrow="We'd Love to Hear From You" title="Contact Us"
            subtitle="Questions about membership, programs, trials, or anything else — we're here to help." />
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-gold">Phone</p>
                <a href="tel:0450948278" className="font-heading text-2xl font-bold uppercase tracking-wide text-dark hover:text-green">0450 948 278</a>
              </div>
              <div>
                <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-gold">Email</p>
                <a href="mailto:info@sswv.com.au" className="font-heading text-xl font-bold uppercase tracking-wide text-dark hover:text-green">info@sswv.com.au</a>
                <p className="mt-1 text-xs text-muted">Placeholder — update with real email</p>
              </div>
              <div>
                <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-gold">Locations</p>
                <ul className="space-y-2 text-sm text-muted">
                  <li>📍 Fairfield, NSW 2165</li>
                  <li>📍 Bonnyrigg, NSW 2177</li>
                </ul>
              </div>
              <div>
                <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-widest text-gold">Follow Us</p>
                <div className="flex gap-3">
                  <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-dark/5 text-dark transition hover:bg-green hover:text-white">{INSTAGRAM_SVG}</a>
                  <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-dark/5 text-dark transition hover:bg-green hover:text-white">{FACEBOOK_SVG}</a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>

      <SocialFeedPlaceholder />
    </>
  );
}
```

- [ ] **Step 4: Final verification — all 6 routes**

Visit each: `/`, `/about`, `/programs`, `/teams`, `/membership`, `/contact`. Verify:
- No 404s
- No TypeScript errors in terminal
- Mobile menu opens/closes on narrow viewport
- Hero slideshow advances
- FAQ accordion toggles
- Contact form shows success state on submit

- [ ] **Step 5: Final commit**

```bash
git add src/components/contact/ src/app/contact/
git commit -m "feat: Contact page — details, mocked form, social feed placeholder"
```
