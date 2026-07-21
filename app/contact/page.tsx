"use client";
import { useState } from "react";
import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";
import { AppButton } from "../shared/components/AppButton";
import { AppIcon } from "../shared/components/AppIcon";
import AOSProvider from "../shared/components/AOSProvider";

const OFFICES = [
  { flag: "🇮🇳", city: "Navi Mumbai, India", addr: "Office No. 903, Kamdhenu 23 west, TTC Industrial area, MIDC Industrial area, Pawne, Navi Mumbai, 400705.", phone: "+91 9763804442" },
];

const TESTIMONIALS_MINI = [
  { name: "Gavin Lund", company: "Sterkia", quote: "NXTorbit delivered high quality and accountability through effective project management & exceptional communication." },
  { name: "Praveen Parmeswar", company: "Lifology", quote: "Their compliance pipelines and secure data architectures enabled us to deploy a reliable, cross-platform experience." },
  { name: "Xenia Ghali", company: "Mynt", quote: "Their compliance audit structure gave our stakeholders confidence and enabled us to secure key regional approvals." },
];

export default function ContactPage() {
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaStatus, setCaptchaStatus] = useState<"idle" | "success" | "error">("idle");
  const [currentT, setCurrentT] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput === "9") setCaptchaStatus("success");
    else setCaptchaStatus("error");
  };

  return (
    <AOSProvider>
      <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />

      {/* ── HERO HEADER ── */}
      <section className="bg-white pt-14 pb-4">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            Get in touch <span className="text-2xl">📧</span>
          </h1>
          <p className="text-nyt-green font-semibold text-lg mt-1">We'd love to hear from you.</p>
        </div>
      </section>

      {/* ── MAIN CARD ── */}
      <section className="py-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute -right-20 top-0 opacity-[0.05] w-96 h-96" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" stroke="#6cb790" strokeWidth="40" />
            <circle cx="200" cy="200" r="100" stroke="#6cb790" strokeWidth="20" />
          </svg>
          <svg className="absolute -left-16 bottom-0 opacity-[0.04] w-72 h-72" viewBox="0 0 300 300" fill="none">
            <path d="M150 20 Q280 80 270 150 Q260 230 150 280 Q40 230 30 150 Q20 80 150 20Z" fill="#6cb790" />
          </svg>
        </div>

        <div className="mx-auto max-w-6xl px-6 relative z-10">

          {/* ── BENTO GRID LAYOUT ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Bento Column */}
            <div className="lg:col-span-5 space-y-6">

              {/* Bento Tile 1: Direct Contact */}
              <div className="glass-panel rounded-3xl p-7 space-y-5 bento-card-animated" data-aos="fade-right" data-aos-delay="100">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-[#006B7D]">Direct Line</span>
                  <span className="text-xs font-bold text-[#82C458] bg-[#82C458]/10 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#82C458] animate-pulse" />
                    Online Now
                  </span>
                </div>

                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Email Us</p>
                  <a href="mailto:info@itnextsolutions.com" className="text-lg font-extrabold text-[#0A2E4D] hover:text-[#00BBA9] transition-colors">
                    info@itnextsolutions.com
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-100/60">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Phone Number</p>
                  <a href="tel:+919763804442" className="text-base font-extrabold text-[#0A2E4D] hover:text-[#00BBA9] transition-colors">
                    +91 9763804442
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-100/60 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Business Hours</p>
                    <p className="font-bold text-slate-700 text-xs mt-0.5">Mon - Fri: 10:30 AM - 7:30 PM</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-[#F3F7F9] px-3 py-1 rounded-full border border-slate-200/60">IST (UTC+5:30)</span>
                </div>
              </div>

              {/* Bento Tile 2: Client Testimonial Tile */}
              <div className="bg-gradient-to-br from-[#0A2E4D] to-[#006B7D] rounded-3xl p-7 text-white space-y-4 bento-card-animated relative overflow-hidden" data-aos="fade-right" data-aos-delay="200">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3CCFC7]/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#3CCFC7] bg-white/10 px-3 py-1 rounded-full border border-white/20">Client Feedback</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <AppIcon key={i} name="star" size={13} className="text-amber-400" />)}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-200 italic pt-1">
                  "{TESTIMONIALS_MINI[currentT].quote}"
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#00BBA9] to-[#3CCFC7] flex items-center justify-center text-white text-sm font-black shrink-0 shadow-md">
                      {TESTIMONIALS_MINI[currentT].name[0]}
                    </div>
                    <div>
                      <p className="font-extrabold text-xs text-white">{TESTIMONIALS_MINI[currentT].name}</p>
                      <p className="text-slate-300 text-[11px] italic">{TESTIMONIALS_MINI[currentT].company}</p>
                    </div>
                  </div>

                  <div className="flex gap-1.5">
                    <button onClick={() => setCurrentT((p) => (p === 0 ? TESTIMONIALS_MINI.length - 1 : p - 1))} className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/15 transition active:scale-95">
                      <AppIcon name="chevron-down" size={14} className="rotate-90 text-white" />
                    </button>
                    <button onClick={() => setCurrentT((p) => (p === TESTIMONIALS_MINI.length - 1 ? 0 : p + 1))} className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/15 transition active:scale-95">
                      <AppIcon name="chevron-down" size={14} className="-rotate-90 text-white" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Bento Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-panel rounded-3xl p-8 bento-card-animated" data-aos="fade-left" data-aos-delay="150">
                <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                  <h3 className="text-lg font-extrabold text-[#0A2E4D] flex items-center gap-2">
                    Send Us a Message <span className="text-base">💬</span>
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00BBA9] animate-pulse" />
                    Fast Response
                  </span>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>

                  {/* Input Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Full Name *</label>
                      <input required placeholder="Your Name" className="w-full px-4 py-3 text-sm text-[#0A2E4D] bg-[#F3F7F9]/80 rounded-xl border border-slate-200/80 focus:border-[#00BBA9] focus:ring-4 focus:ring-[#00BBA9]/15 focus:bg-white transition-all duration-200 outline-none placeholder-slate-400 font-medium" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Email Address *</label>
                      <input required type="email" placeholder="email@example.com" className="w-full px-4 py-3 text-sm text-[#0A2E4D] bg-[#F3F7F9]/80 rounded-xl border border-slate-200/80 focus:border-[#00BBA9] focus:ring-4 focus:ring-[#00BBA9]/15 focus:bg-white transition-all duration-200 outline-none placeholder-slate-400 font-medium" />
                    </div>
                  </div>

                  {/* Phone & Attachment Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Phone Number *</label>
                      <div className="flex items-center bg-[#F3F7F9]/80 rounded-xl border border-slate-200/80 focus-within:border-[#00BBA9] focus-within:ring-4 focus-within:ring-[#00BBA9]/15 focus-within:bg-white transition-all duration-200 px-3">
                        <select className="py-3 text-xs font-semibold text-[#0A2E4D] bg-transparent focus:outline-none shrink-0 cursor-pointer pr-1">
                          <option>IN (+91)</option>
                        </select>
                        <input required placeholder="9763804442" className="w-full py-3 text-sm text-[#0A2E4D] bg-transparent focus:outline-none placeholder-slate-400 font-medium pl-1" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Attach Document (Optional)</label>
                      <input type="file" className="w-full px-3 py-2.5 text-xs text-slate-500 bg-[#F3F7F9]/80 rounded-xl border border-slate-200/80 focus:outline-none file:mr-2 file:border-0 file:bg-[#00BBA9]/10 file:text-[#006B7D] file:font-bold file:px-3 file:py-1 file:rounded-lg cursor-pointer" />
                    </div>
                  </div>

                  {/* Message Query */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Project Requirements / Query *</label>
                    <textarea required rows={3} placeholder="How can we help your business?" className="w-full px-4 py-3 text-sm text-[#0A2E4D] bg-[#F3F7F9]/80 rounded-xl border border-slate-200/80 focus:border-[#00BBA9] focus:ring-4 focus:ring-[#00BBA9]/15 focus:bg-white transition-all duration-200 outline-none placeholder-slate-400 font-medium resize-none" />
                  </div>

                  {/* Verification + Submit Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-between pt-3 gap-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 bg-[#F3F7F9] px-4 py-2 rounded-xl border border-slate-200/60">
                      <span className="text-xs font-semibold text-slate-600">Verification: <strong>7 + 2 =</strong></span>
                      <input type="text" required value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)}
                        className="w-12 rounded-lg text-center text-sm py-1 font-bold focus:outline-none border border-slate-300 focus:border-[#00BBA9] text-[#0A2E4D] bg-white" />
                    </div>
                    <button type="submit" className="w-full sm:w-auto bg-gradient-to-r from-[#006B7D] to-[#00BBA9] text-white font-extrabold text-sm px-8 py-3.5 rounded-full flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all duration-200 tracking-wide uppercase shadow-md shadow-[#00BBA9]/20">
                      Submit Message <AppIcon name="arrow-right" size={15} className="text-white" />
                    </button>
                  </div>

                  {captchaStatus === "success" && <p className="text-xs text-[#00BBA9] font-bold text-center">✓ Message submitted! We'll respond within 24 hours.</p>}
                  {captchaStatus === "error" && <p className="text-xs text-red-500 font-bold text-center">✗ Verification answer incorrect. Hint: 7+2=9</p>}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── GET IDEAS VALIDATED ── */}
      <section className="py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="bg-slate-50 rounded-xl p-10 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-72 pointer-events-none overflow-hidden">
              <svg viewBox="0 0 288 200" className="absolute right-0 top-0 h-full w-full opacity-10" fill="none">
                <path d="M288 0 Q180 20 160 100 Q140 180 288 200Z" fill="#6cb790" />
                <path d="M288 30 Q210 50 190 100 Q170 150 288 170Z" fill="#a5d088" />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-slate-900">Get your ideas validated.</h3>
                <p className="text-nyt-green font-semibold">Let NXTorbit give you an honest opinion.</p>
                <p className="text-sm font-bold text-slate-700">Book your 45min. consultation.</p>
                <a href="mailto:info@itnextsolutions.com" className="inline-flex items-center gap-2 bg-nyt-green text-white font-bold text-sm px-5 py-2.5 rounded hover:brightness-105 transition mt-2">
                  Connect With Us <AppIcon name="arrow-right" size={14} />
                </a>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <div className="h-14 w-14 rounded-full bg-slate-300 flex items-center justify-center text-xl font-black text-white shrink-0">A</div>
                <div>
                  <p className="font-extrabold text-slate-900">Ankit Singh</p>
                  <p className="text-xs text-slate-400 italic">COO</p>
                  <p className="text-xs text-slate-500 mt-1">info@itnextsolutions.com</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-slate-500">+91 9763804442</span>
                    <a href="#" className="text-xs text-nyt-green font-bold hover:underline">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR OFFICES ── */}
      <section id="offices" className="py-14 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="text-3xl">🏢</div>
            <h2 className="text-2xl font-extrabold text-slate-900">Our Offices</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFICES.map((o) => (
              <div key={o.city} className="bg-slate-50 rounded-xl p-5 hover:bg-white hover:shadow-md transition-all duration-200">
                <div className="text-2xl mb-3">{o.flag}</div>
                <p className="font-extrabold text-slate-900 text-sm mb-1">{o.city}</p>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">{o.addr}</p>
                <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="text-xs font-bold text-nyt-green hover:underline">{o.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXCEPTIONAL RESULTS ── */}
      <section className="py-14 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 text-center space-y-5">
          <div className="text-5xl">🏆</div>
          <h2 className="text-2xl font-extrabold text-slate-900">Exceptional Results for great clients</h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
            Partnered with great brands and entrepreneurs all over the world; Fortune 500, Fortune 200, Global 2000 companies and the world's largest political party.
          </p>
          <AppButton variant="primary" size="small" href="/#work">
            See Our Work <AppIcon name="arrow-right" size={14} className="inline ml-1" />
          </AppButton>
        </div>
      </section>

      <Footer />
      </div>
    </AOSProvider>
  );
}
