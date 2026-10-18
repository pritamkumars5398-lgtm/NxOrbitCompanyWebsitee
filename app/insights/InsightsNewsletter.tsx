"use client";

import { useState } from "react";
import { Mail, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/app/shared/ui/Button";

export function InsightsNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  };

  return (
    <div className="relative isolate overflow-hidden rounded-3xl bg-linear-to-br from-[#06131F] via-[#092237] to-[#041624] p-8 sm:p-12 text-white border border-slate-700/50 shadow-2xl">
      {/* Background ambient accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-teal-500/15 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-cyan-500/15 blur-[100px]"
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-950/60 px-3.5 py-1 text-2xs font-mono font-bold tracking-widest text-teal-300 uppercase mb-4 backdrop-blur-md">
          <Mail className="size-3.5" />
          <span>EXECUTIVE RESEARCH DIGEST</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Get Architectural Blueprints in Your Inbox
        </h3>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mb-6">
          Join 4,200+ CTOs, VP of Engineering, and operations leaders receiving our monthly real-world architectural tear-downs, benchmarks, and legacy cutover blueprints.
        </p>

        {subscribed ? (
          <div className="flex items-center gap-2.5 rounded-2xl bg-teal-950/80 border border-teal-500/40 px-6 py-4 text-teal-200">
            <CheckCircle2 className="size-5 text-teal-400 shrink-0" />
            <p className="text-sm font-medium">
              Thank you! We&apos;ve added you to our monthly Executive Architectural Digest.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-2.5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your enterprise work email"
              required
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/20"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#008c83] to-[#00bba9] px-6 py-3 text-sm font-bold text-white transition-all hover:opacity-95 hover:shadow-lg hover:shadow-teal-500/25 cursor-pointer shrink-0"
            >
              Subscribe
              <ArrowRight className="size-4" />
            </button>
          </form>
        )}

        <div className="flex items-center gap-4 mt-5 text-2xs text-slate-400 font-medium">
          <span className="flex items-center gap-1">
            <ShieldCheck className="size-3.5 text-teal-400" />
            Zero Marketing Spam
          </span>
          <span>•</span>
          <span>Strictly High-Value Technical Analysis</span>
          <span>•</span>
          <span>Unsubscribe Anytime</span>
        </div>
      </div>
    </div>
  );
}
