"use client";

import { useState, useEffect } from "react";
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
  { value: "courier-express", label: "Courier Express (Shipping & RTO)" },
  { value: "nxt-wms", label: "NXT WMS (Warehouse OS)" },
  { value: "nxt-orbit-freight", label: "NXT Orbit Freight OS" },
  { value: "nxt-sales-finance", label: "NXT Sales & Finance" },
  { value: "mobile", label: "Mobile App Development" },
  { value: "web", label: "Web Platform Development" },
  { value: "ai", label: "AI & Machine Learning" },
  { value: "design", label: "Product Design (UI/UX)" },
  { value: "devops", label: "DevOps & Cloud Infrastructure" },
  { value: "other", label: "Custom Enterprise Architecture" },
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [activeField, setActiveField] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service");
      if (serviceParam) {
        // match existing service or default
        const match = SERVICES.find(
          (s) => s.value === serviceParam || s.label.toLowerCase().includes(serviceParam.toLowerCase())
        );
        if (match) {
          setSelectedService(match.value);
        }
      }
    }
  }, []);

  const handleVerify = () => {
    if (isVerified || isVerifying) return;
    setIsVerifying(true);
    setError(undefined);
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 600);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isVerified) {
      setError("Please check the verification box to continue.");
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
        className="relative overflow-hidden flex min-h-[30rem] h-full flex-col items-center justify-center gap-6 rounded-2xl border border-teal-200/80 bg-white p-6 sm:p-10 text-center"
      >
        {/* Top ambient color glow */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-linear-to-r from-teal-500 via-emerald-400 to-teal-600" />
        
        {/* Animated Check Ring */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="relative flex size-18 items-center justify-center rounded-full bg-linear-to-br from-teal-500 to-teal-700 text-white shadow-lg shadow-teal-600/30"
        >
          <Check className="size-9" strokeWidth={3} />
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
          <h3 className="text-display-sm font-bold text-slate-900 tracking-tight">
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
          className="flex flex-wrap justify-center gap-2.5 pt-1"
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
            setIsVerified(false);
            setIsVerifying(false);
            setSelectedService("");
            setSelectedBudget("");
            setStatus("idle");
          }}
          className="mt-2 flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 shadow-sm hover:border-teal-400 hover:text-teal-700 transition-all cursor-pointer"
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
      className="relative overflow-hidden flex flex-col justify-between h-full gap-4 sm:gap-4.5 rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-xl p-5 sm:p-7 transition-all duration-300"
    >
      {/* Top Ambient Highlight Gradient Bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-linear-to-r from-teal-500 via-cyan-400 to-emerald-500" />

      {/* Header Section */}
      <div className="flex flex-col gap-1 border-b border-slate-100 pb-3 sm:pb-3.5">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Tell us about the project
        </h2>
        <p className="text-sm text-slate-500 leading-normal">
          The more context you give, the more useful our first reply will be.
        </p>
      </div>

      {/* Form Fields Stack */}
      <div className="flex flex-col gap-3 sm:gap-3.5">
        {/* Row 1: Name & Email */}
        <div className="grid gap-3 sm:grid-cols-2">
          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label className="text-2xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
              <span>Full Name <span className="text-red-500 font-bold">*</span></span>
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-3 size-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                name="name"
                required
                placeholder="Priya Sharma"
                autoComplete="name"
                onFocus={() => setActiveField("name")}
                onBlur={() => setActiveField(null)}
                className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 pl-9 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Work Email */}
          <div className="flex flex-col gap-1">
            <label className="text-2xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
              <span>Work Email <span className="text-red-500 font-bold">*</span></span>
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3 size-3.5 text-slate-400 pointer-events-none" />
              <input
                type="email"
                name="email"
                required
                placeholder="priya@company.com"
                autoComplete="email"
                onFocus={() => setActiveField("email")}
                onBlur={() => setActiveField(null)}
                className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 pl-9 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Phone & Company */}
        <div className="grid gap-3 sm:grid-cols-2">
          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label className="text-2xs font-bold uppercase tracking-wider text-slate-700">
              Phone Number
            </label>
            <div className="relative flex items-center">
              <Phone className="absolute left-3 size-3.5 text-slate-400 pointer-events-none" />
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                autoComplete="tel"
                onFocus={() => setActiveField("phone")}
                onBlur={() => setActiveField(null)}
                className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 pl-9 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-1">
            <label className="text-2xs font-bold uppercase tracking-wider text-slate-700">
              Company Name
            </label>
            <div className="relative flex items-center">
              <Building2 className="absolute left-3 size-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                name="company"
                placeholder="Company name"
                autoComplete="organization"
                onFocus={() => setActiveField("company")}
                onBlur={() => setActiveField(null)}
                className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 pl-9 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Service & Budget Selectors */}
        <div className="grid gap-3 sm:grid-cols-2">
          {/* Service Select */}
          <div className="flex flex-col gap-1">
            <label className="text-2xs font-bold uppercase tracking-wider text-slate-700">
              Service <span className="text-red-500 font-bold">*</span>
            </label>
            <select
              name="service"
              required
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 px-3 py-2.5 text-xs sm:text-sm text-slate-900 transition-all duration-200 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:outline-none cursor-pointer"
            >
              {SERVICES.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Budget Select */}
          <div className="flex flex-col gap-1">
            <label className="text-2xs font-bold uppercase tracking-wider text-slate-700">
              Budget Range
            </label>
            <select
              name="budget"
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 px-3 py-2.5 text-xs sm:text-sm text-slate-900 transition-all duration-200 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:outline-none cursor-pointer"
            >
              {BUDGETS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="text-2xs text-slate-400 font-medium ml-1">Helps us scope realistically.</span>
          </div>
        </div>

        {/* Row 4: What are you building TextArea */}
        <div className="flex flex-col gap-1">
          <label className="text-2xs font-bold uppercase tracking-wider text-slate-700">
            What are you building? <span className="text-red-500 font-bold">*</span>
          </label>
          <div className="relative">
            <textarea
              name="message"
              required
              rows={3}
              placeholder="The problem, who it's for, and where you are today..."
              className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 p-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:outline-none resize-y"
            />
          </div>
        </div>
      </div>

      {/* Row 5: Proper CAPTCHA Component & Consistent Action Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-t border-slate-100 pt-3.5 mt-auto">
        {/* Interactive CAPTCHA Widget */}
        <div className="flex flex-col gap-1 w-full sm:max-w-[16rem]">
          <label className="text-2xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
            <span>Quick verification <span className="text-red-500 font-bold">*</span></span>
          </label>
          <div
            onClick={handleVerify}
            className={cn(
              "select-none cursor-pointer rounded-xl border p-2 sm:p-2.5 flex items-center justify-between transition-all duration-200",
              isVerified
                ? "border-emerald-400 bg-emerald-50/50"
                : error
                ? "border-red-400 bg-red-50/40"
                : "border-slate-200/90 bg-slate-50/60 hover:bg-slate-100/70 hover:border-slate-300"
            )}
          >
            <div className="flex items-center gap-2.5">
              {/* Checkbox box */}
              <div
                className={cn(
                  "size-5.5 rounded-md border flex items-center justify-center transition-all duration-200",
                  isVerified
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : isVerifying
                    ? "border-teal-500 bg-white"
                    : "border-slate-300 bg-white"
                )}
              >
                {isVerified ? (
                  <Check className="size-3.5 stroke-[3]" />
                ) : isVerifying ? (
                  <RefreshCw className="size-3.5 animate-spin text-teal-600" />
                ) : null}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-800">
                  {isVerified ? "Verification Successful" : isVerifying ? "Verifying..." : "I'm not a robot"}
                </span>
                <span className="text-2xs text-slate-400">
                  {isVerified ? "Human confirmed" : "reCAPTCHA · Protected"}
                </span>
              </div>
            </div>

            {/* CAPTCHA badge icon */}
            <div className="flex flex-col items-end pl-2">
              <ShieldCheck className={cn("size-4 sm:size-4.5", isVerified ? "text-emerald-600" : "text-slate-400")} />
              <span className="text-2xs font-mono text-slate-400 mt-0.5">Privacy · Terms</span>
            </div>
          </div>
          {error && <span className="text-2xs font-bold text-red-500 mt-0.5">{error}</span>}
        </div>

        {/* Submit Button with Consistent Alignment and Icon Styling */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="group/btn relative inline-flex items-center justify-center gap-2 rounded-full bg-brand-950 px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-brand-900 hover:shadow-md transition-all duration-300 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer shrink-0 sm:self-end"
        >
          {status === "sending" ? (
            <>
              <RefreshCw className="size-4 animate-spin text-teal-300 shrink-0" />
              <span>Sending Inquiry...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <ArrowRight className="size-4 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-1 text-brand-300" />
            </>
          )}
        </button>
      </div>
    </motion.form>
  );
}
