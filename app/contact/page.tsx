"use client";
import { useState } from "react";
import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";
import { AppButton } from "../shared/components/AppButton";
import { AppIcon } from "../shared/components/AppIcon";

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
  const [captchaStatus, setCaptchaStatus] = useState<"idle"|"success"|"error">("idle");
  const [currentT, setCurrentT] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput === "9") setCaptchaStatus("success");
    else setCaptchaStatus("error");
  };

  return (
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
            <circle cx="200" cy="200" r="180" stroke="#6cb790" strokeWidth="40"/>
            <circle cx="200" cy="200" r="100" stroke="#6cb790" strokeWidth="20"/>
          </svg>
          <svg className="absolute -left-16 bottom-0 opacity-[0.04] w-72 h-72" viewBox="0 0 300 300" fill="none">
            <path d="M150 20 Q280 80 270 150 Q260 230 150 280 Q40 230 30 150 Q20 80 150 20Z" fill="#6cb790"/>
          </svg>
        </div>

        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <div className="bg-white rounded-xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-10" style={{boxShadow:'0 2px 30px rgba(0,0,0,0.08)'}}>

            {/* Left — info + testimonial */}
            <div className="space-y-6">
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Write Us</p>
                <a href="mailto:info@itnextsolutions.com" className="text-xl font-extrabold text-slate-900 hover:text-nyt-green transition">
                  info@itnextsolutions.com
                </a>
              </div>

              <div>
                <p className="text-xs text-slate-400 font-semibold mb-3">We are just a call away</p>
                <div className="space-y-1.5">
                  <p className="font-extrabold text-slate-900 text-sm">+91 9763804442</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-400 font-semibold mb-1">Business Hours</p>
                <div className="space-y-1.5">
                  <p className="font-bold text-slate-700 text-sm">Mon - Fri: 10:30 AM - 7:30 PM</p>
                  <p className="font-bold text-slate-700 text-sm">Sat: flexible hours</p>
                </div>
              </div>

              {/* Testimonial card */}
              <div className="bg-nyt-green rounded-xl p-6 text-white space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-lg font-black shrink-0">
                    {TESTIMONIALS_MINI[currentT].name[0]}
                  </div>
                  <div>
                    <p className="font-extrabold text-sm">{TESTIMONIALS_MINI[currentT].name}</p>
                    <p className="text-white/70 text-xs italic">{TESTIMONIALS_MINI[currentT].company}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/90 italic">
                  "{TESTIMONIALS_MINI[currentT].quote}"
                </p>
                <div className="flex gap-2 pt-1">
                  <button onClick={() => setCurrentT((p)=>(p===0?TESTIMONIALS_MINI.length-1:p-1))} className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition">
                    <AppIcon name="chevron-down" size={14} className="rotate-90 text-white" />
                  </button>
                  <button onClick={() => setCurrentT((p)=>(p===TESTIMONIALS_MINI.length-1?0:p+1))} className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition">
                    <AppIcon name="chevron-down" size={14} className="-rotate-90 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-6">Or fill this form</p>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="border-b border-slate-300 focus-within:border-nyt-green transition-colors">
                  <input required placeholder="Name *" className="w-full py-2.5 text-sm text-slate-800 bg-transparent focus:outline-none placeholder-slate-400" />
                </div>
                <div className="border-b border-slate-300 focus-within:border-nyt-green transition-colors">
                  <input required type="email" placeholder="Email *" className="w-full py-2.5 text-sm text-slate-800 bg-transparent focus:outline-none placeholder-slate-400" />
                </div>
                <div className="flex items-end gap-2 border-b border-slate-300 focus-within:border-nyt-green transition-colors">
                  <select className="py-2.5 text-sm text-slate-700 bg-transparent focus:outline-none shrink-0 cursor-pointer">
                    <option>India (+91)</option>
                  </select>
                  <AppIcon name="chevron-down" size={13} className="text-slate-400 mb-3 shrink-0 -ml-4" />
                  <input required placeholder="Phone Number *" className="flex-1 py-2.5 text-sm text-slate-800 bg-transparent focus:outline-none placeholder-slate-400" />
                </div>
                <div className="border-b border-slate-300 focus-within:border-nyt-green transition-colors flex items-center justify-between">
                  <input type="file" className="w-full py-2.5 text-sm text-slate-500 bg-transparent focus:outline-none file:mr-3 file:border-0 file:bg-transparent file:text-nyt-green file:font-semibold file:text-sm cursor-pointer" />
                  <AppIcon name="arrow-right" size={16} className="text-nyt-green shrink-0 -rotate-45" />
                </div>
                <div className="border-b border-slate-300 focus-within:border-nyt-green transition-colors">
                  <textarea required placeholder="Query *" rows={3} className="w-full py-2.5 text-sm text-slate-800 bg-transparent focus:outline-none placeholder-slate-400 resize-none" />
                </div>
                <div className="flex items-center justify-between pt-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">What's <strong>7 + 2</strong> =</span>
                    <input type="text" required value={captchaInput} onChange={(e)=>setCaptchaInput(e.target.value)}
                      className="w-12 border border-slate-300 rounded text-center text-sm py-1.5 focus:outline-none focus:border-nyt-green text-slate-900" />
                  </div>
                  <button type="submit" className="bg-nyt-green text-white font-extrabold text-sm px-7 py-3 rounded flex items-center gap-2 hover:brightness-105 transition tracking-wide uppercase">
                    Submit <AppIcon name="arrow-right" size={15} className="text-white" />
                  </button>
                </div>
                {captchaStatus==="success" && <p className="text-xs text-nyt-green font-bold">✓ Submitted! We'll respond within 24 hours.</p>}
                {captchaStatus==="error" && <p className="text-xs text-red-500 font-bold">✗ Incorrect answer. Hint: 7+2=9</p>}
              </form>
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
                <path d="M288 0 Q180 20 160 100 Q140 180 288 200Z" fill="#6cb790"/>
                <path d="M288 30 Q210 50 190 100 Q170 150 288 170Z" fill="#a5d088"/>
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
                <a href={`tel:${o.phone.replace(/\s/g,"")}`} className="text-xs font-bold text-nyt-green hover:underline">{o.phone}</a>
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
  );
}
