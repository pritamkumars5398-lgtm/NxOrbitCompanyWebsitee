---
name: project-overview
description: NXTorbit website tech stack, routing structure, and key conventions
metadata:
  type: project
---

NXTorbit company website — software agency based in Noida, India.

**Why:** Production website for NXTorbit (formerly Techugo), a mobile/web/AI development company.

**How to apply:** Brand palette was migrated from the old green (`#6cb790`) to a navy/teal palette derived from the logo: navy `#0A2E4D`, ocean `#006B7D`, teal `#00BBA9`, aqua `#3CCFC7`, ice `#F3F7F9` (see [[ui-redesign-2026-07]]). The `nyt-green`/`nyt-lime`/`nyt-dark`/`nyt-charcoal` Tailwind aliases in `app/globals.css` and `app/core/theme/index.ts` now map to this new palette — don't reintroduce raw `#6cb790`/`#a5d088` hex codes, use the aliases or new hex values instead. Keep App Router conventions and follow Tailwind v4 class naming.

## Stack
- Next.js 16.2.6 with App Router (async params — `params: Promise<{ slug: string }>`)
- React 19.2.4
- Tailwind CSS v4 — uses `bg-linear-to-*` NOT `bg-gradient-to-*` (breaking change)
- TypeScript 5, no CSS modules

## Route Map (all pages exist and build clean)
| Route | File | Type |
|-------|------|------|
| `/` | app/page.tsx | Client (has useState) |
| `/career` | app/career/page.tsx | Client |
| `/contact` | app/contact/page.tsx | Client |
| `/blog` | app/blog/page.tsx | Server + NewsletterForm client child |
| `/portfolio` | app/portfolio/page.tsx | Server |
| `/services/[slug]` | app/services/[slug]/page.tsx | Server SSG |
| `/technology/[slug]` | app/technology/[slug]/page.tsx | Server SSG |
| `/industries/[slug]` | app/industries/[slug]/page.tsx | Server SSG |

## Service slugs: mobile, web, ai, design, blockchain, devops
## Technology slugs: react-native, flutter, ios, android, nodejs, nextjs
## Industry slugs: healthcare, fintech, education, ecommerce, logistics, entertainment

## Data files
- `app/core/data/services.ts` — ServicePage type + SERVICES_DATA record
- `app/core/data/technology.ts` — TechPage type + TECHNOLOGY_DATA record
- `app/core/data/industries.ts` — IndustryPage type + INDUSTRIES_DATA record
- `app/core/constants/app.constant.ts` — WORK_ITEMS, TESTIMONIALS, FAQS, COMPLIANCE_ITEMS

## Shared components
- `app/shared/components/Navbar.tsx` — click-only dropdowns (no hover), CSS animated
- `app/shared/components/Footer.tsx`
- `app/shared/components/AppButton.tsx` — variants: primary/secondary/outline/danger/ghost
- `app/shared/components/AppIcon.tsx` — 26 inline SVG icons
- `app/shared/components/AppInput.tsx`
- `app/shared/components/NewsletterForm.tsx` — "use client" form for blog page

## Brand colors
- `nyt-green`: #6cb790 (primary)
- `nyt-lime`: #a5d088 (secondary/accent)
- `nyt-dark`: #1f264a
- `nyt-charcoal`: #04101d (dark text)
- `nyt-slate`: #374047
