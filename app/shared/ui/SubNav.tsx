"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import type { NavLink } from "@/app/core/data/navigation";
import { Container } from "@/app/shared/ui/Layout";
import { NavIcon } from "@/app/shared/ui/NavIcon";

/**
 * Sibling-page rail that sits directly under the header on detail pages.
 * Features:
 * - Dynamic header height synchronization so it never hides behind the fixed header
 * - Smooth horizontal scrolling with auto-centering on the active tab
 * - Left/right navigation arrows with fade affordances
 * - Mouse drag-to-scroll and touch pan support
 */
export function SubNav({ links, label }: { links: NavLink[]; label: string }) {
  const pathname = usePathname();
  const listRef = useRef<HTMLUListElement>(null);
  const activeTabRef = useRef<HTMLLIElement>(null);

  const [headerHeight, setHeaderHeight] = useState<number>(73);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  // Measure fixed header height dynamically so SubNav never overlaps or hides under it
  useEffect(() => {
    const measureHeader = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    measureHeader();
    window.addEventListener("resize", measureHeader);
    const t = setTimeout(measureHeader, 150);

    return () => {
      window.removeEventListener("resize", measureHeader);
      clearTimeout(t);
    };
  }, []);

  // Check scroll position to toggle left/right scroll affordance arrows
  const checkScroll = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    checkScroll();
    const t1 = setTimeout(checkScroll, 120);
    const t2 = setTimeout(checkScroll, 400);

    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll, links]);

  // Center active tab smoothly on route change or initial load
  useEffect(() => {
    if (activeTabRef.current) {
      const timer = setTimeout(() => {
        activeTabRef.current?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
        checkScroll();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, checkScroll]);

  // Click scroll buttons
  const scrollBy = (offset: number) => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  // Mouse drag-to-scroll handlers
  const onMouseDown = (e: React.MouseEvent) => {
    const el = listRef.current;
    if (!el) return;
    setIsDragging(true);
    startX.current = e.pageX - el.offsetLeft;
    scrollLeftStart.current = el.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !listRef.current) return;
    e.preventDefault();
    const x = e.pageX - listRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    listRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <nav
      aria-label={label}
      data-lenis-prevent="true"
      style={{
        top: `${headerHeight}px`,
        marginTop: `${headerHeight}px`,
      }}
      className="sticky z-40 border-y border-slate-200/90 bg-slate-50/95 backdrop-blur-xl shadow-2xs transition-[top,margin-top] duration-200"
    >
      <Container className="relative">
        <div className="relative flex items-center w-full min-w-0">
          {/* Left Scroll Arrow */}
          {canScrollLeft && (
            <div className="absolute left-0 z-30 flex items-center h-full pr-4 bg-linear-to-r from-slate-50 via-slate-50/95 to-transparent pointer-events-none">
              <button
                type="button"
                onClick={() => scrollBy(-200)}
                aria-label="Scroll left"
                className="pointer-events-auto flex size-6 sm:size-7 items-center justify-center rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:text-teal-600 hover:border-teal-400 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="size-3.5" />
              </button>
            </div>
          )}

          {/* Scrollable Tabs List */}
          <ul
            ref={listRef}
            data-lenis-prevent="true"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            className={cn(
              "tabs-scrollbar min-w-0 w-full flex items-center gap-1.5 sm:gap-2 overflow-x-auto overscroll-x-contain touch-pan-x py-1.5 sm:py-2 scroll-smooth select-none",
              isDragging ? "cursor-grabbing" : "cursor-grab",
            )}
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li
                  key={link.href}
                  ref={active ? activeTabRef : undefined}
                  className="shrink-0 flex-none"
                >
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    draggable={false}
                    className={cn(
                      "relative inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 sm:px-4 py-1 sm:py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-200 select-none",
                      active
                        ? "bg-white text-teal-700 shadow-xs border-2 border-teal-500 font-bold"
                        : "bg-white/80 text-slate-700 hover:bg-white hover:text-teal-700 border border-slate-200/90 shadow-2xs",
                    )}
                  >
                    {link.icon && (
                      <NavIcon
                        name={link.icon}
                        className={cn("size-3.5 shrink-0", active ? "text-teal-600" : "text-slate-400")}
                      />
                    )}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Scroll Arrow */}
          {canScrollRight && (
            <div className="absolute right-0 z-30 flex items-center h-full pl-4 bg-linear-to-l from-slate-50 via-slate-50/90 to-transparent pointer-events-none">
              <button
                type="button"
                onClick={() => scrollBy(200)}
                aria-label="Scroll right"
                className="pointer-events-auto flex size-6 sm:size-7 items-center justify-center rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:text-teal-600 hover:border-teal-400 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="size-3.5" />
              </button>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
}


