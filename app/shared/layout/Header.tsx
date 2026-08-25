"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { EASE } from "@/app/core/motion/tokens";
import { CONTACT_DETAILS, NAV_GROUPS, type NavGroup } from "@/app/core/data/navigation";
import { NavIcon } from "@/app/shared/ui/NavIcon";
import { Button } from "@/app/shared/ui/Button";
import { Logo } from "@/app/shared/ui/Logo";

/**
 * Site header.
 *
 * Starts flush and un-elevated at the top of a page and condenses into a
 * frosted bar once the user scrolls, so the hero reads full-bleed. Desktop
 * menus open on hover with a short close delay (so diagonal mouse travel into
 * the panel doesn't dismiss it) and also respond to click and Escape.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);
  const pathname = usePathname();

  // Any route change closes whatever was open. Adjusting during render rather
  // than in an effect avoids a frame where the old menu is still on screen.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpenGroup(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenGroup(null);
      setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock the page behind the mobile drawer.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenGroup(null), 160);
  };
  const cancelClose = () => window.clearTimeout(closeTimer.current);

  return (
    <>
      <header
        /* Always frosted rather than transparent-until-scrolled. The supplied
           logo PNG has a solid white background, so a transparent header shows
           a white block (and a dark hamburger) over the navy heroes on
           /technology and /case-studies. Scroll now only deepens the shadow. */
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-white/85 backdrop-blur-xl transition-[box-shadow,border-color] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled || openGroup
            ? "border-hairline shadow-[0_1px_24px_-8px_rgb(6_19_31/0.12)]"
            : "border-transparent",
        )}
        onMouseLeave={scheduleClose}
      >
        <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between gap-6 px-6 sm:px-8 lg:px-10">
          <Link href="/" className="group relative z-10 flex shrink-0 items-center -ml-1" aria-label="NXTorbit — home">
            <Logo
              height={53}
              priority
              className="transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
            {NAV_GROUPS.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => {
                  cancelClose();
                  setOpenGroup(group.label);
                }}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-expanded={openGroup === group.label}
                  aria-haspopup="true"
                  onClick={() => setOpenGroup((current) => (current === group.label ? null : group.label))}
                  className={cn(
                    "flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors duration-200",
                    openGroup === group.label
                      ? "text-brand-500"
                      : "text-ink-700 hover:text-brand-500",
                  )}
                >
                  {group.label}
                  <ChevronDown
                    aria-hidden
                    className={cn(
                      "size-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      openGroup === group.label && "rotate-180",
                    )}
                  />
                </button>
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <Button href="/contact" size="md" variant="orange" withArrow magnetic>
              Book a Consultation
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="-mr-2 inline-flex size-10 items-center justify-center rounded-xl text-ink-700 transition-colors hover:bg-ink-100 lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>

        <MegaPanel
          group={NAV_GROUPS.find((group) => group.label === openGroup)}
          onEnter={cancelClose}
          onLeave={scheduleClose}
          onNavigate={() => setOpenGroup(null)}
        />
      </header>

      {/* Deliberately a sibling of <header>, not a child. The header's
        `backdrop-blur` establishes a containing block for fixed-position
        descendants, which would collapse this drawer's `inset-0` to the
        header's own 72px box instead of the viewport. */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

/* ── Desktop mega panel ──────────────────────────────────────────────────── */

function MegaPanel({
  group,
  onEnter,
  onLeave,
  onNavigate,
}: {
  group?: NavGroup;
  onEnter: () => void;
  onLeave: () => void;
  onNavigate: () => void;
}) {
  return (
    <AnimatePresence>
      {group && (
        <motion.div
          key={group.label}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.2, ease: EASE.outExpo }}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 hidden w-[900px] rounded-2xl border border-hairline bg-white/95 p-4.5 backdrop-blur-xl shadow-xl shadow-[0_1px_24px_-8px_rgb(6_19_31/0.12)] lg:block"
        >
          <div className="w-full">
            <div
              className={cn(
                "grid gap-6",
                group.feature ? "grid-cols-[1.8fr_1.2fr]" : "grid-cols-1",
              )}
            >
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.035 } } }}
                className="grid grid-cols-2 gap-1"
              >
                {group.links.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: EASE.outExpo } },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className="group flex items-center gap-2.5 rounded-lg p-2 transition-colors duration-200 hover:bg-brand-50/70"
                    >
                      {link.icon && (
                        <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink-100 text-brand-500 transition-colors duration-200 group-hover:bg-white">
                          <NavIcon name={link.icon} className="size-4" />
                        </span>
                      )}
                        <span className="flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition-colors group-hover:text-brand-600">
                          {link.label}
                          <ArrowRight
                            aria-hidden
                            className="size-3.5 -translate-x-1 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:opacity-100"
                          />
                        </span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {group.feature && (
                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: EASE.outExpo, delay: 0.06 }}
                  className="relative overflow-hidden rounded-xl bg-brand-900 p-5"
                >
                  <div
                    aria-hidden
                    className="absolute -top-16 -right-10 size-48 rounded-full bg-brand-400/25 blur-3xl"
                  />
                  <div className="relative flex h-full flex-col justify-between gap-4">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-sm font-semibold text-white">{group.feature.title}</h3>
                      <p className="text-xs leading-relaxed text-ink-300">
                        {group.feature.description}
                      </p>
                    </div>
                    <Button
                      href={group.feature.href}
                      onClick={onNavigate}
                      size="sm"
                      variant="accent"
                      withArrow
                      className="self-start text-xs py-1.5 px-3"
                    >
                      {group.feature.cta}
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Mobile drawer ───────────────────────────────────────────────────────── */

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(NAV_GROUPS[0].label);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 bg-brand-950/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.42, ease: EASE.outExpo }}
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-xl"
          >
            <div className="flex h-18 shrink-0 items-center justify-between border-b border-hairline px-6">
              <span className="text-eyebrow uppercase text-ink-400">Menu</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="-mr-2 inline-flex size-10 items-center justify-center rounded-xl text-ink-700 transition-colors hover:bg-ink-100"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain px-6 py-4">
              {NAV_GROUPS.map((group) => {
                const isOpen = expanded === group.label;
                return (
                  <div key={group.label} className="border-b border-hairline last:border-0">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setExpanded(isOpen ? null : group.label)}
                      className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-ink-900"
                    >
                      {group.label}
                      <ChevronDown
                        aria-hidden
                        className={cn(
                          "size-4 text-ink-400 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                          isOpen && "rotate-180 text-brand-500",
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.34, ease: EASE.outExpo }}
                          className="overflow-hidden"
                        >
                          {group.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={onClose}
                                className="flex items-center gap-3 border-l border-hairline py-3 pl-4 text-sm font-medium text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-500"
                              >
                                <NavIcon name={link.icon} className="size-4 shrink-0 text-brand-400" />
                                {link.label}
                              </Link>
                            </li>
                          ))}
                          <li className="pb-3" />
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <div className="shrink-0 space-y-3 border-t border-hairline px-6 py-5">
              <a
                href={CONTACT_DETAILS.phoneHref}
                className="flex items-center gap-2 text-sm font-semibold text-ink-600"
              >
                <Phone aria-hidden className="size-3.5" />
                {CONTACT_DETAILS.phone}
              </a>
              <Button href="/contact" variant="primary" withArrow className="w-full" onClick={onClose}>
                Book a Consultation
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
