---
name: ui-redesign-2026-07
description: What "looked AI-generated" on this site and the specific fixes applied, so future UI work doesn't reintroduce the same patterns
metadata:
  type: feedback
---

User asked 3x (with growing frustration) to make the UI "professional white theme" and explicitly "not look like ai generated." [[project-overview]]

**Why:** The pre-existing UI had a cluster of tells that read as generic AI-generated SaaS templates rather than a professional agency site: emoji glyphs used as icons (📧🚀🏢🏆🎂🍰☕ etc.) instead of proper SVG icons, a scattered "confetti" of unrelated rainbow brand-logo colors in hero backgrounds, gradient pill buttons with uppercase tracking-widest text, glassmorphism cards with animated rotating-gradient borders (`bento-card-animated` had a conic-gradient `::before` beam animation), excessive `animate-pulse` status dots, and stray off-brand colors (`text-blue-500`/`text-pink-500`, old green `#6cb790`/`#a5d088` hardcoded alongside the new navy/teal brand palette).

**How to apply:** When doing UI work on this repo, avoid all of the above. Concretely:
- Never use emoji as icons/decoration in JSX — always use `AppIcon` (app/shared/components/AppIcon.tsx). It now also has `clock`, `building`, `cash`, `book`, `heart`, `target` cases added during this pass.
- Buttons (`AppButton`) are flat solid brand colors with `rounded-lg`, not gradient pills with uppercase tracking — keep that convention for new buttons.
- `.glass-panel` / `.bento-card-animated` / `.glass-card-hover` in `app/globals.css` were simplified to flat cards with a quiet hover-lift (no blur glass, no animated gradient border beam) — don't re-add the beam animation or backdrop-blur "glassmorphism" look.
- Use at most one subtle `animate-pulse` status dot per section, not one per card.
- `app/core/theme/index.ts` `Colors.primary` was stale old-green (`#6cb790`) even though the rest of the site had migrated to teal (`#00BBA9`) — this caused `AppIcon color="primary"` to render the wrong color. Fixed; check this file stays in sync with `app/globals.css` `--color-nyt-*` if the palette ever changes again.
- Full pass covered: `app/page.tsx` (homepage, most extensive), `app/contact/page.tsx`, `app/career/page.tsx`, plus one-off hex fixes in `app/portfolio/page.tsx`, `app/technology/[slug]/page.tsx`, `app/industries/[slug]/page.tsx`. Not yet audited with the same rigor: `app/services/[slug]/page.tsx` (has one gradient CTA band, left as-is — legitimate use, not a cliché), `app/case-studies/page.tsx`, `app/blog/page.tsx`.
