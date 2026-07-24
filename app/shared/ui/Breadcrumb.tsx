"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { EASE } from "@/app/core/motion/tokens";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Breadcrumb trail. Each crumb slides in behind the one before it, so the
 * path reads left-to-right as it appears.
 */
export function Breadcrumb({
  items,
  className,
  tone = "light",
}: {
  items: Crumb[];
  className?: string;
  tone?: "light" | "dark";
}) {
  const light = tone === "light";

  return (
      <motion.nav
        aria-label="Breadcrumb"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        className={cn("flex", className)}
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium">
          {items.map((item, index) => (
            <motion.li
              key={item.label}
              variants={{
                hidden: { opacity: 0, x: -8 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE.outExpo } },
              }}
              className="flex items-center gap-1.5"
            >
              {index > 0 && (
                <ChevronRight
                  aria-hidden
                  className={cn("size-3", light ? "text-ink-300" : "text-white/35")}
                />
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    "link-underline transition-colors",
                    light ? "text-ink-500 hover:text-brand-500" : "text-ink-300 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className={light ? "text-ink-800" : "text-white"}>
                  {item.label}
                </span>
              )}
            </motion.li>
          ))}
        </ol>
      </motion.nav>
  );
}
