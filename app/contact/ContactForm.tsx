"use client";

import { useState } from "react";
import { 
  Check, ArrowRight, Sparkles, User, Mail, Phone, Building2, 
  MessageSquare, ShieldCheck, RefreshCw, Send, CheckCircle2, Zap 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/app/core/lib/cn";
import { EASE } from "@/app/core/motion/tokens";

type Status = "idle" | "sending" | "sent";

const BUDGETS = [
  { value: "", label: "Select a range" },
  { value: "under-25k", label: "Under $25,000" },
  { value: "25-75k", label: "$25,000 – $75,000" },
  { value: "75-200k", label: "$75,000 – $200,000" },
  { value: "200k-plus", label: "$200,000+" },
  { value: "unsure", label: "Not sure yet" },
];

const SERVICES = [
  { value: "", label: "What do you need?" },
  { value: "mobile", label: "Mobile app development" },
  { value: "web", label: "Web platform" },
  { value: "ai", label: "AI / ML" },
  { value: "design", label: "Product design" },
  { value: "devops", label: "DevOps & cloud" },
  { value: "other", label: "Something else" },
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [activeField, setActiveField] = useState<string | null>(null);

  const challenge = { a: 7, b: 4, sum: 11 };
  const isVerified = Number(answer) === challenge.sum;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isVerified) {
      setError("That doesn't add up — please enter 11.");
      return;
    }

    setError(undefined);
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 1100));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        role="status"
        className="relative overflow-hidden flex min-h-[32rem] flex-col items-center justify-center gap-6 rounded-2xl border border-teal-200/80 bg-white p-8 sm:p-12 text-center shadow-2xl shadow-teal-950/10"
      >
        {/* Top ambient color glow */}
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-600" />
        
        {/* Animated Check Ring */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="relative flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-lg shadow-teal-600/30"
        >
          <Check className="size-10" strokeWidth={3} />
          <motion.span 
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-teal-400 pointer-events-none"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="size-3.5 text-emerald-600" /> Message Delivered
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Thank you! We&apos;ve received your request.
          </h3>
          <p className="max-w-md text-sm text-slate-600 leading-relaxed mx-auto pt-1">
            An engineer will review your project details and reply within <strong className="text-slate-900 font-semibold">one working day</strong> (usually the same afternoon).
          </p>
        </motion.div>

        {/* Quick assurance badges */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap justify-center gap-3 pt-2"
        >
          <span className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl font-medium">
            <ShieldCheck className="size-3.5 text-teal-600" /> Direct Engineer Access
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl font-medium">
            <Zap className="size-3.5 text-amber-500" /> High-Priority Dispatch
          </span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={() => {
            setAnswer("");
            setSelectedService("");
            setSelectedBudget("");
            setStatus("idle");
          }}
          className="mt-2 flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-xs font-extrabold text-slate-800 shadow-sm hover:border-teal-400 hover:text-teal-700 transition-all cursor-pointer"
        >
          <RefreshCw className="size-3.5" /> Send another message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE.outExpo }}
      onSubmit={handleSubmit}
      className="relative overflow-hidden flex flex-col gap-6 rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-xl p-7 sm:p-10 shadow-2xl shadow-teal-950/5 transition-all duration-300"
    >
      {/* Top Ambient Highlight Gradient Bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-500" />

      {/* Header Section */}
      <div className="flex flex-col gap-1.5 border-b border-slate-100 pb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Tell us about the project
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          The more context you give, the more useful our first reply will be.
        </p>
      </div>

      {/* Row 1: Name & Email */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center justify-between">
            <span>Full Name <span className="text-teal-600">*</span></span>
          </label>
          <div className="relative flex items-center">
            <User className="absolute left-3.5 size-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              name="name"
              required
              placeholder="Priya Sharma"
              autoComplete="name"
              onFocus={() => setActiveField("name")}
              onBlur={() => setActiveField(null)}
              className="w-full rounded-2xl border border-slate-200/90 bg-slate-50/50 pl-10 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Work Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center justify-between">
            <span>Work Email <span className="text-teal-600">*</span></span>
          </label>
          <div className="relative flex items-center">
            <Mail className="absolute left-3.5 size-4 text-slate-400 pointer-events-none" />
            <input
              type="email"
              name="email"
              required
              placeholder="priya@company.com"
              autoComplete="email"
              onFocus={() => setActiveField("email")}
              onBlur={() => setActiveField(null)}
              className="w-full rounded-2xl border border-slate-200/90 bg-slate-50/50 pl-10 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Phone & Company */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Phone Number
          </label>
          <div className="relative flex items-center">
            <Phone className="absolute left-3.5 size-4 text-slate-400 pointer-events-none" />
            <input
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              autoComplete="tel"
              onFocus={() => setActiveField("phone")}
              onBlur={() => setActiveField(null)}
              className="w-full rounded-2xl border border-slate-200/90 bg-slate-50/50 pl-10 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Company Name
          </label>
          <div className="relative flex items-center">
            <Building2 className="absolute left-3.5 size-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              name="company"
              placeholder="Company name"
              autoComplete="organization"
              onFocus={() => setActiveField("company")}
              onBlur={() => setActiveField(null)}
              className="w-full rounded-2xl border border-slate-200/90 bg-slate-50/50 pl-10 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Row 3: Service & Budget Selectors */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Service Select */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Service <span className="text-teal-600">*</span>
          </label>
          <select
            name="service"
            required
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full rounded-2xl border border-slate-200/90 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-all duration-200 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:outline-none cursor-pointer"
          >
            {SERVICES.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Budget Select */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            Budget Range
          </label>
          <select
            name="budget"
            value={selectedBudget}
            onChange={(e) => setSelectedBudget(e.target.value)}
            className="w-full rounded-2xl border border-slate-200/90 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-all duration-200 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:outline-none cursor-pointer"
          >
            {BUDGETS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="text-[11px] text-slate-400 font-medium ml-1">Helps us scope realistically.</span>
        </div>
      </div>

      {/* Row 4: What are you building TextArea */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
          What are you building? <span className="text-teal-600">*</span>
        </label>
        <div className="relative">
          <textarea
            name="message"
            required
            rows={4}
            placeholder="The problem, who it's for, and where you are today..."
            className="w-full rounded-2xl border border-slate-200/90 bg-slate-50/50 p-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:outline-none resize-y"
          />
        </div>
      </div>

      {/* Row 5: Math Security Check & Animated Submit CTA Button */}
      <div className="flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Math Challenge Gate */}
        <div className="flex flex-col gap-1.5 sm:max-w-[14rem]">
          <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center justify-between">
            <span>Quick verification <span className="text-teal-600">*</span></span>
          </label>
          <div className="relative flex items-center">
            <input
              type="text"
              name="verification"
              inputMode="numeric"
              required
              placeholder={`${challenge.a} + ${challenge.b} = ?`}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className={cn(
                "w-full rounded-2xl border bg-slate-50/50 px-4 py-2.5 text-sm font-bold text-slate-900 transition-all focus:bg-white focus:outline-none",
                isVerified 
                  ? "border-emerald-400 bg-emerald-50/30 text-emerald-900" 
                  : error 
                  ? "border-red-400 bg-red-50/30" 
                  : "border-slate-200/90 hover:border-slate-300 focus:border-teal-500"
              )}
            />
            {isVerified && (
              <CheckCircle2 className="absolute right-3 size-4 text-emerald-600 animate-in fade-in zoom-in" />
            )}
          </div>
          {error && <span className="text-[11px] font-bold text-red-500 mt-0.5">{error}</span>}
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status === "sending"}
          className="group relative overflow-hidden flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#062025] to-[#0a353c] px-8 py-3.5 text-xs font-extrabold text-white hover:from-teal-900 hover:to-slate-900 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <RefreshCw className="size-4 animate-spin text-teal-300" />
              <span>Sending Inquiry...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <div className="flex size-6 items-center justify-center rounded-full bg-teal-500/30 text-teal-300 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="size-3.5" />
              </div>
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  );
}
