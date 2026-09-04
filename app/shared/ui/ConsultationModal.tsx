"use client";

import { useEffect, useState } from "react";
import { X, Send, CheckCircle2, User, Mail, Phone, Settings, MessageSquare } from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { Button } from "@/app/shared/ui/Button";

export function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Form fields state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  // Error states
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSubmitted(false);
      setErrors({});
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
    };

    window.addEventListener("open-consultation-modal", handleOpen);
    return () => {
      window.removeEventListener("open-consultation-modal", handleOpen);
    };
  }, []);

  // Auto-open logic: 3s on initial load, 30s after 1st close, stop after 2nd close
  useEffect(() => {
    const dismissCount = parseInt(sessionStorage.getItem("nxt_modal_dismiss_count") || "0", 10);

    if (dismissCount >= 2) return;

    let timerId: NodeJS.Timeout;

    if (dismissCount === 0) {
      // 1st Auto-Open: 3 seconds after page load
      timerId = setTimeout(() => {
        const currentCount = parseInt(sessionStorage.getItem("nxt_modal_dismiss_count") || "0", 10);
        if (currentCount === 0) {
          setIsOpen(true);
        }
      }, 3000);
    } else if (dismissCount === 1) {
      // 2nd Auto-Open: 30 seconds after 1st close
      timerId = setTimeout(() => {
        const currentCount = parseInt(sessionStorage.getItem("nxt_modal_dismiss_count") || "0", 10);
        if (currentCount === 1) {
          setIsOpen(true);
        }
      }, 30000);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);

    // Track dismiss count in sessionStorage
    const currentCount = parseInt(sessionStorage.getItem("nxt_modal_dismiss_count") || "0", 10);
    const newCount = currentCount + 1;
    sessionStorage.setItem("nxt_modal_dismiss_count", newCount.toString());

    // If 1st close, set 30-second timer to re-open once
    if (newCount === 1) {
      setTimeout(() => {
        const checkCount = parseInt(sessionStorage.getItem("nxt_modal_dismiss_count") || "0", 10);
        if (checkCount === 1) {
          setIsOpen(true);
        }
      }, 30000);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!service) {
      newErrors.service = "Please select a service";
    }

    if (!message.trim()) {
      newErrors.message = "Enquiry details are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
      setErrors({});
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Slide-out Panel */}
      <div 
        data-lenis-prevent="true"
        className="relative z-10 w-full max-w-lg bg-white h-full max-h-screen shadow-2xl flex flex-col animate-slide-in-right overflow-hidden"
      >
        {/* Decorative ambient glows inside drawer */}
        <div className="absolute top-20 right-0 -z-10 w-72 h-72 bg-brand-100/30 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-0 -z-10 w-72 h-72 bg-teal-100/20 blur-[80px] rounded-full pointer-events-none" />

        {/* Premium Header - Dark Navy Brand Gradient */}
        <div className="relative overflow-hidden bg-gradient-to-r from-brand-950 to-brand-900 px-6 py-6 text-white flex flex-col justify-between shadow-lg shrink-0">
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,187,169,0.15),transparent_70%)] pointer-events-none" />
          
          <div className="flex items-center justify-between z-10">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-white">Request a Free Quote</h2>
              <p className="text-[11px] text-brand-300 font-medium mt-0.5">Partner with global product engineering experts</p>
            </div>
            <button 
              type="button" 
              onClick={handleClose}
              className="rounded-full p-2 bg-white/10 text-white hover:bg-white/20 hover:rotate-90 transition-all duration-300"
            >
              <X className="size-4.5" />
            </button>
          </div>
        </div>

        {/* Form Body (Scrollable Content) */}
        <div 
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="flex-1 p-6 overflow-y-auto min-h-0 overscroll-contain"
        >
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center h-full max-w-sm mx-auto py-12">
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-xl animate-pulse" />
                <CheckCircle2 className="relative size-16 text-teal-500 animate-bounce" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Quote Request Sent!</h3>
              <p className="text-slate-600 text-xs mb-8 leading-relaxed">
                Thank you for reaching out. One of our lead engineers will analyze your project description and contact you within 24 hours.
              </p>
              <Button onClick={handleClose} variant="primary" size="md" className="w-full">
                Back to Website
              </Button>
            </div>
          ) : (
            <form id="consultation-form" onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name field */}
              <div className="relative">
                <label htmlFor="modal-name" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Your Name
                </label>
                <div className="relative flex items-center">
                  <User className="absolute left-4 size-4.5 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    id="modal-name"
                    required
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors(prev => ({ ...prev, name: "" }));
                    }}
                    className={cn(
                      "w-full h-11 pl-11 pr-4 text-xs bg-slate-50/50 border rounded-xl focus:outline-none focus:bg-white focus:shadow-sm transition-all duration-200",
                      errors.name ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-brand-500"
                    )}
                  />
                </div>
                {errors.name && <p className="text-[10px] text-red-500 mt-1 pl-1 font-semibold">{errors.name}</p>}
              </div>

              {/* Email field */}
              <div className="relative">
                <label htmlFor="modal-email" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Your Email
                </label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-4 size-4.5 text-slate-400 pointer-events-none" />
                  <input
                    type="email"
                    id="modal-email"
                    required
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
                    }}
                    className={cn(
                      "w-full h-11 pl-11 pr-4 text-xs bg-slate-50/50 border rounded-xl focus:outline-none focus:bg-white focus:shadow-sm transition-all duration-200",
                      errors.email ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-brand-500"
                    )}
                  />
                </div>
                {errors.email && <p className="text-[10px] text-red-500 mt-1 pl-1 font-semibold">{errors.email}</p>}
              </div>

              {/* Phone field */}
              <div className="relative">
                <label htmlFor="modal-phone" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Your Phone No
                </label>
                <div className="relative flex items-center">
                  <Phone className="absolute left-4 size-4.5 text-slate-400 pointer-events-none" />
                  <input
                    type="tel"
                    id="modal-phone"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors(prev => ({ ...prev, phone: "" }));
                    }}
                    className={cn(
                      "w-full h-11 pl-11 pr-4 text-xs bg-slate-50/50 border rounded-xl focus:outline-none focus:bg-white focus:shadow-sm transition-all duration-200",
                      errors.phone ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-brand-500"
                    )}
                  />
                </div>
                {errors.phone && <p className="text-[10px] text-red-500 mt-1 pl-1 font-semibold">{errors.phone}</p>}
              </div>

              {/* Service field */}
              <div className="relative">
                <label htmlFor="modal-service" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Select Type of Services
                </label>
                <div className="relative flex items-center">
                  <Settings className="absolute left-4 size-4.5 text-slate-400 pointer-events-none" />
                  <select
                    id="modal-service"
                    required
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value);
                      if (errors.service) setErrors(prev => ({ ...prev, service: "" }));
                    }}
                    className={cn(
                      "w-full h-11 pl-11 pr-10 text-xs bg-slate-50/50 border rounded-xl focus:outline-none focus:bg-white focus:shadow-sm transition-all duration-200 appearance-none cursor-pointer",
                      errors.service ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-brand-500"
                    )}
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1.25rem center',
                      backgroundSize: '1em'
                    }}
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="web">Web App Development</option>
                    <option value="ai">AI & ML Solutions</option>
                    <option value="design">UI/UX Design</option>
                    <option value="blockchain">Blockchain Development</option>
                    <option value="devops">DevOps & Cloud</option>
                  </select>
                </div>
                {errors.service && <p className="text-[10px] text-red-500 mt-1 pl-1 font-semibold">{errors.service}</p>}
              </div>

              {/* Message field */}
              <div className="relative">
                <label htmlFor="modal-message" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Message Your Enquiry Here
                </label>
                <div className="relative flex">
                  <MessageSquare className="absolute left-4 top-3.5 size-4.5 text-slate-400 pointer-events-none" />
                  <textarea
                    id="modal-message"
                    required
                    rows={4}
                    placeholder="Tell us what you are building, requirements, or timeline..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors(prev => ({ ...prev, message: "" }));
                    }}
                    className={cn(
                      "w-full pl-11 pr-4 py-3 text-xs bg-slate-50/50 border rounded-xl focus:outline-none focus:bg-white focus:shadow-sm transition-all duration-200 resize-none",
                      errors.message ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-brand-500"
                    )}
                  />
                </div>
                {errors.message && <p className="text-[10px] text-red-500 mt-1 pl-1 font-semibold">{errors.message}</p>}
              </div>
            </form>
          )}
        </div>

        {/* Sticky Footer for Submit Button */}
        {!isSubmitted && (
          <div className="border-t border-slate-100 bg-slate-50 p-4 shrink-0 flex">
            <Button 
              type="submit" 
              form="consultation-form"
              variant="accent" 
              size="md" 
              loading={loading}
              className="w-full h-11 shadow-md shadow-teal-500/10 hover:shadow-teal-500/20"
              icon={<Send className="size-4" />}
            >
              Submit Inquiry
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
