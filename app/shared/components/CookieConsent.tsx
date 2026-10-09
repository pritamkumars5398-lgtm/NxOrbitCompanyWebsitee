"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  Cookie,
  ShieldCheck,
  BarChart3,
  Sparkles,
  SlidersHorizontal,
  ChevronDown,
  X,
  Check,
} from "lucide-react";

const STORAGE_KEY = "nxorbit_cookie_consent_v1";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // First-time visit: reveal after brief natural delay
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage access restricted (e.g. privacy mode)
      setIsOpen(false);
    }
  }, []);

  const saveConsent = (prefs: Omit<CookiePreferences, "timestamp">) => {
    const data: CookiePreferences = {
      ...prefs,
      timestamp: Date.now(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // Ignore write errors
    }
    setIsOpen(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const handleNecessaryOnly = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          role="dialog"
          aria-label="Cookie consent banner"
          aria-modal="false"
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.96, transition: { duration: 0.25 } }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 w-[calc(100%-2rem)] sm:w-[420px] max-w-[440px]"
        >
          {/* Ambient card back-glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-linear-to-r from-teal-500/20 via-brand-500/10 to-cyan-500/20 blur-xl opacity-75"
          />

          <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-[#07121B]/95 p-4.5 sm:p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(20,184,166,0.12)] backdrop-blur-2xl">
            {/* Top Glowing Gradient Accent Line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-linear-to-r from-teal-400 via-emerald-400 to-cyan-400" />

            {/* Header: Glowing Icon, Title & Quick Close */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl border border-teal-500/30 bg-teal-500/10 text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                  <Cookie className="size-4.5 sm:size-5" />
                </div>
                <div>
                  <span className="inline-block text-2xs font-mono font-bold uppercase tracking-wider text-teal-400">
                    Cookie Preferences
                  </span>
                  <h3 className="text-sm sm:text-base font-bold tracking-tight text-white">
                    We Respect Your Privacy
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={handleNecessaryOnly}
                aria-label="Dismiss cookie notice"
                className="flex size-7 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Core Explanatory Copy */}
            <p className="mt-2.5 text-xs leading-relaxed text-slate-300 font-normal">
              We use cookies to secure platform features, analyze traffic, and personalize your experience.
              Review your options or accept all to continue.{" "}
              <Link
                href="/contact"
                className="font-medium text-teal-400 underline underline-offset-2 transition-colors hover:text-teal-300"
              >
                Privacy Policy
              </Link>
            </p>

            {/* ── Expandable Customization Settings ── */}
            <AnimatePresence>
              {isCustomizing && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-3.5 space-y-2 border-t border-slate-800/90 pt-3">
                    {/* 1. Necessary Cookies */}
                    <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-white/[0.03] p-2.5">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <ShieldCheck className="size-4 shrink-0 text-teal-400" />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-white">Strictly Necessary</p>
                          <p className="text-2xs text-slate-400 truncate">Core security & navigation</p>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full bg-teal-500/10 px-2 py-0.5 text-2xs font-semibold text-teal-300 border border-teal-500/20">
                        Always Active
                      </span>
                    </div>

                    {/* 2. Analytics Cookies */}
                    <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-white/[0.03] p-2.5">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <BarChart3 className="size-4 shrink-0 text-blue-400" />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-white">Performance & Analytics</p>
                          <p className="text-2xs text-slate-400 truncate">Speed, metrics & errors</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={preferences.analytics}
                        onClick={() =>
                          setPreferences((prev) => ({ ...prev, analytics: !prev.analytics }))
                        }
                        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                          preferences.analytics ? "bg-teal-500" : "bg-slate-700"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-none ring-0 transition duration-200 ease-in-out ${
                            preferences.analytics ? "translate-x-4" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    {/* 3. Marketing Cookies */}
                    <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-white/[0.03] p-2.5">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Sparkles className="size-4 shrink-0 text-amber-400" />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-white">Marketing & Tailored Ads</p>
                          <p className="text-2xs text-slate-400 truncate">Relevant campaigns</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={preferences.marketing}
                        onClick={() =>
                          setPreferences((prev) => ({ ...prev, marketing: !prev.marketing }))
                        }
                        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                          preferences.marketing ? "bg-teal-500" : "bg-slate-700"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-none ring-0 transition duration-200 ease-in-out ${
                            preferences.marketing ? "translate-x-4" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="mt-3.5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={isCustomizing ? handleSaveCustom : handleAcceptAll}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-linear-to-r from-teal-500 to-teal-600 px-3.5 py-2 text-xs font-bold text-white shadow-none transition-all duration-200 hover:from-teal-400 hover:to-teal-500 active:scale-97 cursor-pointer"
                >
                  <Check className="size-3.5 stroke-[2.5]" />
                  {isCustomizing ? "Save Preferences" : "Accept All"}
                </button>

                <button
                  type="button"
                  onClick={handleNecessaryOnly}
                  className="rounded-xl border border-slate-700/80 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 shadow-none transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-97 cursor-pointer"
                >
                  Necessary Only
                </button>
              </div>

              {/* Toggle Customization Details */}
              <button
                type="button"
                onClick={() => setIsCustomizing((prev) => !prev)}
                className="inline-flex items-center justify-center gap-1.5 py-1 text-2xs font-semibold text-slate-400 transition-colors hover:text-teal-400 cursor-pointer"
              >
                <SlidersHorizontal className="size-3" />
                {isCustomizing ? "Hide settings" : "Customize settings"}
                <ChevronDown
                  className={`size-3 transition-transform duration-200 ${
                    isCustomizing ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
