---
name: design-system-2026-07
description: Architecture and design intent of the 2026-07 full UI rebuild — token system, primitive layers, and the per-page layout signatures that must stay distinct
metadata:
  type: project
---

The whole site UI was rebuilt on 2026-07-23 against a "premium enterprise SaaS" brief. This supersedes [[ui-redesign-2026-07]], whose components (`app/shared/components/*`, `AOSProvider`) are now dead code left in place but unreferenced.

**Why:** the user asked for a design where *every page feels handcrafted and visually distinct*, white-dominant, with gradients confined to heroes and CTAs. They also said explicitly, mid-task: **UI only — no SEO work** (JSON-LD, keyword metadata, and structured data were removed on request), and **do not change the language or framework** (stays TypeScript + React on Next.js App Router).

**How to apply:**

*Token discipline.* `app/globals.css` `@theme` is the single source of truth — brand/ink scales, a fluid `text-display-*` type scale, radii, shadows, and easings. Never hardcode a hex in a component. The CSS easing vars and `app/core/motion/tokens.ts` `EASE` deliberately mirror each other so a CSS transition and a Framer Motion tween never disagree.

*Layers.* `core/lib` + `core/motion` + `core/data` (content, no JSX) → `shared/motion` (Reveal, Stagger, TextReveal, Parallax, CountUp, Magnetic/Tilt) → `shared/backdrop` (Aurora, GradientMesh, GridField, DotField, Grain, Particles, CursorGlow) → `shared/ui` (Button, Card, Layout/Section/Container, Stats, Accordion, Tabs, Marquee, Field, SubNav, Breadcrumb, Logo) → `shared/sections` → pages. Page copy lives in `core/data/*`, not in JSX.

*The rule that matters most — per-page layout signatures.* Each template intentionally uses a different layout language so navigation feels like arriving somewhere new. Do not homogenise these:
- `/` — alternating tone + a different device per section (bento → sticky timeline → tabs → dark matrix → editorial list → quote → split FAQ)
- `/services/[slug]` — light editorial, offset artwork, numbered hairline rows
- `/technology/[slug]` — dark "documentation", terminal panel, full-width ledger rows
- `/industries/[slug]` — centred + tinted, evidence-led, no artwork
- `/contact` — console split: dark contact rail against a white form, no hero band
- `/career` — job board; openings sit high, culture supports them
- `/portfolio` — filterable gallery (built for scanning)
- `/case-studies` — long-form alternating blocks (built for reading)

*Restraint carried over from the old feedback:* no emoji as icons (Lucide only), no gradient pill buttons with uppercase tracking, no rotating conic-gradient card borders, at most one `animate-pulse` dot per section. Aurora/GradientMesh are kept low-opacity and masked to fade out — white must stay dominant. Every scroll/motion effect is gated on `prefers-reduced-motion`, and Lenis smooth scroll is skipped entirely under it.

**Known gaps:** the contact form has no backend (submit is a local pending state, and the arithmetic spam check is client-side only — it must move server-side when a real endpoint exists). `lucide-react` v1 removed brand icons, so LinkedIn/X marks are inlined SVGs in the footer, and `Loader2` is now `LoaderCircle`. The logo PNG is a 1051×601 design canvas with a decorative bar; `shared/ui/Logo.tsx` crops to the wordmark and its constants must be updated if the asset is ever re-exported.
