---
name: tailwind-v4-cascade-gotchas
description: Two non-obvious CSS bugs that silently broke this site — unlayered base rules beating utilities, and backdrop-blur creating a containing block for fixed children
metadata:
  type: project
---

Two bugs cost real debugging time on the 2026-07 redesign and will recur if forgotten. [[design-system-2026-07]]

**1. Unlayered CSS in `globals.css` beats every Tailwind utility.**
A plain `h1, h2, h3, h4 { color: var(--color-ink-900) }` written after `@import "tailwindcss"` lands in the *unlayered* origin. Unlayered normal declarations outrank **all** layered ones regardless of specificity, so `class="text-white"` lost to an element selector and every heading on every dark section rendered near-black on navy. Specificity tricks (`:where()`) do not help — layer order is evaluated before specificity.

**How to apply:** any base element styling in `app/globals.css` must be wrapped in `@layer base { … }`. This is already done for `body`, `h1–h4`, `p`, `::selection`, and `:focus-visible`. Also never set `border-radius` in a global `:focus-visible` rule — it overrides `rounded-*` on whatever is focused.

**2. `backdrop-blur` on the header makes it a containing block for `position: fixed` descendants.**
`app/shared/layout/Header.tsx` uses `backdrop-blur-xl`. Any `fixed inset-0` element rendered *inside* `<header>` resolves against the header's own ~72px box, not the viewport. The mobile drawer collapsed to a 72px sliver because of this. `transform`, `filter`, `perspective`, `contain`, and `will-change` do the same thing.

**How to apply:** `<MobileDrawer>` is deliberately a **sibling** of `<header>`, not a child. Keep it that way, and check this first whenever a full-screen fixed overlay renders at the wrong size.
