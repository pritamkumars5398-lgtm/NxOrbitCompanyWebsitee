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
      className="sticky top-18 z-40 border-b border-hairline bg-white/85 backdrop-blur-xl mt-18"
    >
      <Container>
        <ul className="-ml-3.5 scrollbar-none flex gap-1 overflow-x-auto py-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative inline-flex shrink-0 rounded-lg px-3.5 py-2 text-[0.8125rem] font-semibold whitespace-nowrap transition-colors duration-200",
                    active
                      ? "text-brand-600"
                      : "text-ink-500 hover:bg-ink-50 hover:text-brand-500",
                  )}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute inset-x-3.5 -bottom-2 h-0.5 rounded-full bg-brand-400"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
