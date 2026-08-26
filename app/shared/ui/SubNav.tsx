"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/core/lib/cn";
import type { NavLink } from "@/app/core/data/navigation";
import { Container } from "@/app/shared/ui/Layout";

/**
 * Sibling-page rail that sits directly under the header on detail pages.
 *
 * It gives someone who landed on one service an immediate map of the other
 * five without going back to the menu. Scrolls horizontally on narrow screens
 * rather than wrapping into a second row.
 */
export function SubNav({ links, label }: { links: NavLink[]; label: string }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label={label}
      className="sticky top-18 z-40 border-y border-hairline-strong bg-slate-100/90 backdrop-blur-xl mt-18 shadow-xs"
    >
      <Container>
        <ul className="-ml-3.5 scrollbar-none flex gap-1 overflow-x-auto py-2.5">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative inline-flex shrink-0 items-center rounded-lg px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-200",
                    active
                      ? "bg-white text-brand-600 shadow-xs border border-hairline-strong font-bold"
                      : "text-ink-600 hover:bg-white/70 hover:text-brand-600 border border-transparent",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
