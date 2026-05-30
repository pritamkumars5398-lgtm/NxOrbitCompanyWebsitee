"use client";

import { useState } from "react";
import { AppIcon } from "./shared/components/AppIcon";
import { AppButton } from "./shared/components/AppButton";
import {
  COMPLIANCE_ITEMS,
  WORK_ITEMS,
  TESTIMONIALS,
  FAQS,
} from "./core/constants/app.constant";

export default function Home() {
  const [activeWork, setActiveWork] = useState<string>("daylyy");
  const [activeCompliance, setActiveCompliance] = useState<number>(2);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaStatus, setCaptchaStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCaptchaVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput === "16") setCaptchaStatus("success");
    else setCaptchaStatus("error");
  };

  return (
    <div className="min-h-screen bg-white text-nyt-charcoal font-sans antialiased">

      {/* ── NAVBAR ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="/">
            <div style={{ height: '52px', overflow: 'hidden' }}>
              <img
                src="/nxtorbit-logo.png"
                alt="NXTorbit"
                style={{ height: '98px', width: 'auto', marginTop: '-20px' }}
              />
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            {["Services","Technology","Industries","Portfolio","Company","Blog"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="flex items-center gap-1 hover:text-nyt-green transition-colors">
                {item}
                {item !== "Blog" && <AppIcon name="chevron-down" size={13} />}
              </a>
            ))}
          </nav>

          <AppButton variant="primary" size="medium" href="#contact" className="hidden md:inline-flex">
            Contact Us
          </AppButton>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-slate-600">
            <AppIcon name={mobileMenuOpen ? "close" : "menu"} size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-6 py-3 space-y-2">
            {["Services","Technology","Industries","Portfolio","Company","Blog"].map((l) => (
              <a key={l} href="#" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-600 hover:text-nyt-green">{l}</a>
            ))}
            <AppButton variant="primary" size="medium" href="#contact" className="w-full mt-2">Contact Us</AppButton>
          </div>
        )}
      </header>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-16 lg:py-24 overflow-hidden">

        {/* ── Floating tech icon background ── */}
        <div className="absolute inset-0 pointer-events-none select-none">

          {/* React */}
          <svg className="absolute top-10 left-[6%] opacity-[0.12] w-20 h-20" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="7" fill="#61DAFB"/>
            <ellipse cx="50" cy="50" rx="46" ry="18" stroke="#61DAFB" strokeWidth="3"/>
            <ellipse cx="50" cy="50" rx="46" ry="18" stroke="#61DAFB" strokeWidth="3" transform="rotate(60 50 50)"/>
            <ellipse cx="50" cy="50" rx="46" ry="18" stroke="#61DAFB" strokeWidth="3" transform="rotate(120 50 50)"/>
          </svg>

          {/* Android */}
          <svg className="absolute top-6 right-[8%] opacity-[0.12] w-16 h-16" viewBox="0 0 100 100">
            <line x1="30" y1="38" x2="20" y2="22" stroke="#3DDC84" strokeWidth="5" strokeLinecap="round"/>
            <line x1="70" y1="38" x2="80" y2="22" stroke="#3DDC84" strokeWidth="5" strokeLinecap="round"/>
            <circle cx="28" cy="19" r="4" fill="#3DDC84"/>
            <circle cx="72" cy="19" r="4" fill="#3DDC84"/>
            <rect x="18" y="42" width="64" height="38" rx="8" fill="#3DDC84"/>
            <circle cx="38" cy="58" r="4" fill="white"/>
            <circle cx="62" cy="58" r="4" fill="white"/>
            <rect x="10" y="44" width="8" height="24" rx="4" fill="#3DDC84"/>
            <rect x="82" y="44" width="8" height="24" rx="4" fill="#3DDC84"/>
            <rect x="30" y="82" width="8" height="14" rx="4" fill="#3DDC84"/>
            <rect x="62" y="82" width="8" height="14" rx="4" fill="#3DDC84"/>
          </svg>

          {/* Flutter */}
          <svg className="absolute bottom-20 left-[3%] opacity-[0.12] w-14 h-14" viewBox="0 0 100 100">
            <polygon points="10,50 50,10 90,50 70,50 50,30 30,50" fill="#54C5F8"/>
            <polygon points="30,50 50,30 70,50 50,70" fill="#01579B"/>
            <polygon points="50,70 70,50 90,70 70,90" fill="#29B6F6"/>
          </svg>

          {/* Swift */}
          <svg className="absolute top-[40%] left-[1%] opacity-[0.10] w-14 h-14" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="22" fill="#F05138"/>
            <path d="M75 65c-2 3-5 6-9 8-5 3-11 4-17 3-7-1-13-5-18-11-3-4-5-9-5-14 0 0 6 8 14 10 5 2 11 1 15-2-3-3-14-16-16-34 7 8 15 15 22 18-4-6-7-13-7-20 0 0 10 11 19 18 5 5 9 11 10 18 1 4 0 8-1 11-3 8-7 15-7 15z" fill="white"/>
          </svg>

          {/* Node.js */}
          <svg className="absolute bottom-[30%] right-[5%] opacity-[0.12] w-16 h-16" viewBox="0 0 100 100">
            <path d="M50 5L90 28v44L50 95 10 72V28z" fill="#68A063"/>
            <text x="50" y="58" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold" fontFamily="Arial">JS</text>
          </svg>

          {/* Firebase */}
          <svg className="absolute top-[15%] right-[20%] opacity-[0.10] w-12 h-12" viewBox="0 0 100 100">
            <path d="M20 80L35 30l15 20 10-40 20 70z" fill="#FFA000"/>
            <path d="M20 80l15-30 15 10 10-20 20 40z" fill="#F57C00"/>
            <path d="M35 50l15 10 10-20L80 80 20 80z" fill="#FFCA28"/>
          </svg>

          {/* Kotlin */}
          <svg className="absolute bottom-[15%] left-[20%] opacity-[0.10] w-14 h-14" viewBox="0 0 100 100">
            <polygon points="5,5 55,5 5,55" fill="#7F52FF"/>
            <polygon points="5,55 5,95 50,50 95,5 55,5" fill="#C811E1"/>
            <polygon points="5,95 95,95 50,50" fill="#E44857"/>
          </svg>

          {/* JavaScript */}
          <svg className="absolute top-[55%] right-[2%] opacity-[0.10] w-14 h-14" viewBox="0 0 100 100">
            <rect width="100" height="100" fill="#F7DF1E"/>
            <text x="10" y="72" fill="#323330" fontSize="38" fontWeight="bold" fontFamily="Arial">JS</text>
          </svg>

          {/* Apple/iOS */}
          <svg className="absolute top-[28%] left-[14%] opacity-[0.10] w-12 h-12" viewBox="0 0 100 100">
            <path d="M68 25c-4 5-10 8-16 8-1-6 2-12 5-16 4-5 11-8 16-8 1 6-1 11-5 16z" fill="#555"/>
            <path d="M82 65c-2 4-4 8-7 11-3 5-7 8-12 8s-7-3-13-3-9 3-13 3c-5 0-9-3-12-8C17 66 12 53 12 41c0-14 9-22 18-22 5 0 9 3 13 3s9-4 15-4c6 0 12 3 15 9-13 7-11 25 9 38z" fill="#555"/>
          </svg>

          {/* GraphQL */}
          <svg className="absolute bottom-[5%] right-[15%] opacity-[0.10] w-12 h-12" viewBox="0 0 100 100">
            <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" fill="none" stroke="#E535AB" strokeWidth="5"/>
            <line x1="50" y1="5" x2="50" y2="95" stroke="#E535AB" strokeWidth="3"/>
            <line x1="10" y1="28" x2="90" y2="72" stroke="#E535AB" strokeWidth="3"/>
            <line x1="90" y1="28" x2="10" y2="72" stroke="#E535AB" strokeWidth="3"/>
            <circle cx="50" cy="5" r="6" fill="#E535AB"/>
            <circle cx="90" cy="28" r="6" fill="#E535AB"/>
            <circle cx="90" cy="72" r="6" fill="#E535AB"/>
            <circle cx="50" cy="95" r="6" fill="#E535AB"/>
            <circle cx="10" cy="72" r="6" fill="#E535AB"/>
            <circle cx="10" cy="28" r="6" fill="#E535AB"/>
          </svg>

        </div>
        {/* ── end background icons ── */}

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Finding a Technology Partner That Turns Your{" "}
                <span className="text-nyt-green">Vision Into Reality?</span>
              </h1>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-lg">
                With 13+ years of expertise and 1400+ successful apps, NXTorbit's team of 200+ developers transforms your vision into award-winning digital products.
              </p>
              <div className="flex flex-wrap gap-3">
                <AppButton variant="primary" size="large" href="#contact">Get a Free Quote</AppButton>
                <AppButton variant="outline" size="large" href="#work">View Portfolio</AppButton>
              </div>

              {/* Rating badges */}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-400 font-semibold mb-3 uppercase tracking-wider">Recognized by</p>
                <div className="flex flex-wrap gap-5 items-center">
                  {[["Clutch","4.9"],["GoodFirms","4.8"],["AppFutura","4.8"],["DesignRush","4.9"],["Manifest","4.7"]].map(([name, r]) => (
                    <div key={name} className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-700">{name}</span>
                      <span className="text-[10px] text-amber-400">★★★★★</span>
                      <span className="text-[10px] text-slate-500 font-semibold">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right – Phone mockups */}
            <div className="flex justify-center gap-4 items-end">
              <div className="w-32 h-[240px] bg-slate-800 rounded-2xl overflow-hidden hidden sm:flex flex-col p-3 gap-2 -mb-4">
                <div className="h-1.5 w-8 bg-white/20 rounded-full mx-auto" />
                <div className="flex-1 bg-nyt-green/20 rounded-lg flex items-center justify-center">
                  <AppIcon name="globe" size={28} color="primary" />
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-white/10 rounded" />
                  <div className="h-1.5 w-2/3 bg-white/10 rounded" />
                </div>
              </div>

              <div className="w-40 h-[320px] bg-nyt-charcoal rounded-2xl overflow-hidden flex flex-col p-4 gap-3 ring-2 ring-nyt-green/40">
                <div className="h-1.5 w-10 bg-nyt-green/40 rounded-full mx-auto" />
                <div className="flex items-center justify-between">
                  <div className="h-2.5 w-14 bg-white/15 rounded" />
                  <div className="h-6 w-6 rounded-full bg-nyt-green flex items-center justify-center">
                    <AppIcon name="bolt" size={12} className="text-white" />
                  </div>
                </div>
                <div className="flex-1 rounded-xl bg-nyt-green/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-14 w-14 mx-auto rounded-full border-2 border-nyt-green flex items-center justify-center mb-2">
                      <AppIcon name="server" size={22} color="primary" />
                    </div>
                    <p className="text-[9px] text-nyt-lime font-bold">NXTorbit AI</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-2.5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] text-slate-300">System Active</span>
                    <span className="text-[9px] text-nyt-lime font-bold">+14%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full">
                    <div className="h-full w-4/5 bg-nyt-green rounded-full" />
                  </div>
                </div>
              </div>

              <div className="w-32 h-[260px] bg-slate-800 rounded-2xl overflow-hidden hidden sm:flex flex-col p-3 gap-2 -mb-2">
                <div className="h-1.5 w-8 bg-white/20 rounded-full mx-auto" />
                <div className="grid grid-cols-2 gap-1.5 flex-1">
                  {["📱","🎯","📊","🚀"].map((e, i) => (
                    <div key={i} className="rounded-lg bg-white/5 flex items-center justify-center text-base">{e}</div>
                  ))}
                </div>
                <div className="h-6 bg-nyt-green/20 rounded-lg flex items-center justify-center">
                  <span className="text-[8px] font-bold text-nyt-lime">BUILD WITH US</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ─────────────────────────────────────────── */}
      <section className="border-y border-slate-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-7">Trusted by 1500+ Businesses Worldwide</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 items-center">
            {["GODFREY PHILLIPS","GYAN DAIRY","TRUEFAN","KFC","BYJU'S","AIRTEL","MOTHER DAIRY","NIK BAKERS"].map((b) => (
              <span key={b} className="text-xs font-black text-slate-400 tracking-widest">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE PROFICIENCY ─────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-nyt-dark rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left */}
              <div className="p-10 lg:p-14 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {["Emerging Technologies","Best Company","Highly Recommended"].map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wide border border-nyt-green/40 text-nyt-lime px-3 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl md:text-2xl font-extrabold text-white leading-snug">
                  Enterprise Proficiency with{" "}
                  <span className="text-nyt-green">Absolute Precision</span>
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We build software with strict compliance, secure encryption, and enterprise-grade architectures that let businesses scale globally with confidence.
                </p>

                <div className="space-y-2 pt-2">
                  {COMPLIANCE_ITEMS.slice(0, 5).map((item) => (
                    <div key={item.id} className={`rounded overflow-hidden ${activeCompliance === item.id ? "bg-nyt-green/10 border border-nyt-green/30" : "border border-white/10"}`}>
                      <button
                        onClick={() => setActiveCompliance(item.id)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left"
                      >
                        <span className={`text-sm font-semibold ${activeCompliance === item.id ? "text-nyt-lime" : "text-slate-300"}`}>
                          {item.title}
                        </span>
                        <AppIcon name="chevron-down" size={15} className={`text-slate-400 transition-transform ${activeCompliance === item.id ? "rotate-180" : ""}`} />
                      </button>
                      {activeCompliance === item.id && (
                        <div className="px-4 pb-4">
                          <p className="text-xs text-slate-400 leading-relaxed">{item.content}</p>
                          {item.badges && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {item.badges.map((b, i) => (
                                <span key={i} className="text-[10px] border border-nyt-green/30 text-nyt-lime px-2 py-0.5 rounded font-semibold">{b}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="p-10 lg:p-14 flex flex-col items-center justify-center gap-8 bg-white/5">
                <div className="relative">
                  <div className="h-44 w-44 rounded-full border-4 border-nyt-green flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-5xl font-black text-nyt-green">AI</p>
                      <p className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase mt-1">Powered</p>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-nyt-green" />
                </div>

                <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                  {[
                    { title: "Top Company", sub: "Clutch 2024", icon: "star" as const },
                    { title: "Top Developer", sub: "GoodFirms", icon: "code" as const },
                    { title: "ISO Certified", sub: "Secure Build", icon: "shield" as const },
                    { title: "100+ Clients", sub: "Enterprise", icon: "globe" as const },
                  ].map((a) => (
                    <div key={a.title} className="border border-white/10 rounded-lg p-4 text-center">
                      <AppIcon name={a.icon} size={18} color="primary" className="mx-auto mb-1.5" />
                      <p className="text-xs font-bold text-white">{a.title}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{a.sub}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-6 text-center w-full max-w-xs">
                  {[["200+","Developers"],["13+","Years"],["50+","Industries"]].map(([n,l]) => (
                    <div key={l}>
                      <p className="text-2xl font-black text-white">{n}</p>
                      <p className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────────────── */}
      <section id="why-us" className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs text-nyt-green font-bold uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Why Partners Choose <span className="text-nyt-green">NXTorbit</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { stat: "1400+", label: "Apps Delivered", icon: "globe" as const },
              { stat: "35+", label: "Countries Served", icon: "map-pin" as const },
              { stat: "200+", label: "Tech Experts", icon: "code" as const },
              { stat: "50+", label: "Industries", icon: "settings" as const },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-slate-200 rounded-lg p-7 text-center">
                <AppIcon name={item.icon} size={26} color="primary" className="mx-auto mb-4" />
                <p className="text-3xl font-black text-slate-900 mb-1">{item.stat}</p>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WELL FUNDED ────────────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-7">Our Products Are Well Funded By</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 items-center">
            {["Saama Capital","Y Combinator","Sequoia Capital","Incubate Fund","Goldman Sachs","Matrix Partners"].map((f) => (
              <span key={f} className="text-xs font-black text-slate-400 tracking-wide">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREATING DIGITAL PRODUCTS ──────────────────────────── */}
      <section id="services" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">

          {/* Top two-column header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Creating Digital{" "}
                <span className="text-blue-500">Products.</span>
                <br />
                That Perform And{" "}
                <span className="text-pink-500">Deliver.</span>
              </h2>
            </div>
            <div className="space-y-6 pt-2 lg:pt-3">
              <p className="text-slate-500 text-lg leading-relaxed">
                We design and develop digital products with AI at the core, leveraging machine learning, generative AI, &amp; intelligent automation to create systems that continuously learn, adapt, and improve.
              </p>
              <AppButton variant="primary" size="large" href="#contact">
                Let's Build Something That Scales &nbsp;→
              </AppButton>
            </div>
          </div>

          {/* Horizontal scroll cards — overflow shows partial cards on edges */}
          <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
            {[
              {
                title: "Data-Driven Decisions",
                desc: "We leverage real-time analytics and AI insights to help businesses make smarter, faster decisions that adapt to market dynamics automatically.",
              },
              {
                title: "Powered by Modern Technology",
                desc: "We combine modern technology with user-first innovation to deliver seamless, high-performance digital experiences that customers love and businesses trust.",
              },
              {
                title: "AI-First Approach",
                desc: "We build mobile app solutions with generative AI, ML, and automation to create adaptive, scalable, and future-ready digital experiences.",
              },
              {
                title: "Competitive Growth Strategy",
                desc: "Our competitive growth mindset helps businesses launch future-ready products that drive engagement, strengthen loyalty, and accelerate market leadership.",
              },
              {
                title: "Scalable Architecture",
                desc: "We design distributed systems and cloud-native architectures that scale horizontally, keeping performance consistent as your user base grows.",
              },
              {
                title: "End-to-End Delivery",
                desc: "From ideation to deployment and beyond — we handle design, engineering, QA, and DevOps so you can focus entirely on growing your business.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="min-w-[300px] max-w-[300px] bg-slate-100 rounded-3xl p-8 flex-shrink-0 flex flex-col gap-4"
              >
                <h3 className="text-xl font-extrabold text-slate-900 leading-snug">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── PORTFOLIO ──────────────────────────────────────────── */}
      <section id="work" className="py-20 bg-nyt-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <p className="text-xs text-nyt-green font-bold uppercase tracking-widest mb-2">Our Portfolio</p>
              <h2 className="text-2xl font-extrabold text-white">Proven Deployments.</h2>
              <p className="text-slate-400 mt-1 text-sm">Award-winning products trusted by millions of users.</p>
            </div>
            <a href="#contact" className="text-sm font-bold text-nyt-lime hover:text-nyt-green transition shrink-0">View All Work →</a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            {/* Sidebar nav */}
            <div className="lg:col-span-4 space-y-1 bg-white/5 rounded-lg p-3">
              {WORK_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveWork(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded text-sm font-semibold text-left transition-all ${
                    activeWork === item.id
                      ? "bg-nyt-green text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{item.name}</span>
                  <span>→</span>
                </button>
              ))}
            </div>

            {/* Display panel */}
            <div className="lg:col-span-8">
              {WORK_ITEMS.map((item) => {
                if (item.id !== activeWork) return null;
                return (
                  <div key={item.id} className="bg-white/5 border border-white/10 rounded-lg p-8 space-y-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-2">Production Deployment</p>
                      <h3 className="text-2xl font-black text-white">{item.name}</h3>
                      <p className="text-base font-semibold text-slate-300 mt-1">{item.tagline}</p>
                      <p className="text-sm text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 border border-white/10 rounded p-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Primary Outcome</p>
                        <p className="text-sm font-bold text-white">{item.highlight}</p>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded p-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Architecture Benefit</p>
                        <p className="text-sm font-bold text-white">{item.highlightSub}</p>
                      </div>
                    </div>

                    <div className="h-44 bg-white/5 border border-white/10 rounded flex items-center justify-center text-slate-500">
                      <div className="text-center space-y-2">
                        <AppIcon name="globe" size={32} className="mx-auto opacity-30" />
                        <p className="text-sm">{item.name} — App Preview</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── AI / SMART APPS ────────────────────────────────────── */}
      <section id="smart-apps" className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="flex justify-center">
              <div className="w-full max-w-sm aspect-square bg-nyt-dark rounded-xl flex flex-col items-center justify-center gap-5 p-10">
                <div className="h-28 w-28 rounded-full border-2 border-nyt-green flex items-center justify-center">
                  <AppIcon name="lock" size={44} color="primary" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-white">AI Orchestrator Pipeline</p>
                  <p className="text-xs text-slate-400 mt-1">Managing remote requests dynamically</p>
                </div>
                <div className="flex gap-2 flex-wrap justify-center">
                  <span className="text-[10px] border border-nyt-green/40 text-nyt-lime px-3 py-1 rounded font-semibold">INTELLIGENCE LAYER</span>
                  <span className="text-[10px] border border-nyt-lime/40 text-nyt-lime px-3 py-1 rounded font-semibold">LATENCY MONITOR</span>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-nyt-green border border-nyt-green/30 px-3 py-1 rounded inline-block">
                Enterprise Framework
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                <span className="text-nyt-green">Optimized Automations</span> for Scalable Software
              </h2>
              <p className="text-slate-500 leading-relaxed">
                We embed call procedures and model evaluation loops directly into database layers, enabling automated actions and low-latency verification.
              </p>
              <div className="space-y-4 pt-2">
                {[
                  { title: "Analytical Model Evaluation", desc: "Verified data pipelines built to process queries securely while maintaining isolation constraints." },
                  { title: "Predictive Resource Tracking", desc: "Analyze indexing and execution trends to balance workloads automatically before peaks occur." },
                  { title: "Compliance-First Architecture", desc: "Every system starts with security, GDPR, HIPAA, and SOC2 built in — not bolted on." },
                ].map((f) => (
                  <div key={f.title} className="flex gap-3">
                    <div className="h-6 w-6 shrink-0 rounded-full bg-nyt-green flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{f.title}</p>
                      <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      <section id="testimonials" className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Clients <span className="text-nyt-green">love us!</span>
              </h2>
              <p className="text-slate-400 mt-1 text-sm">Here's what makes us go the extra mile!</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentTestimonial((p) => (p === 0 ? TESTIMONIALS.length - 1 : p - 1))}
                className="h-9 w-9 rounded-full border border-slate-300 hover:border-nyt-green flex items-center justify-center text-slate-500 hover:text-nyt-green transition"
              >
                <AppIcon name="chevron-down" size={16} className="rotate-90" />
              </button>
              <button
                onClick={() => setCurrentTestimonial((p) => (p === TESTIMONIALS.length - 1 ? 0 : p + 1))}
                className="h-9 w-9 rounded-full border border-slate-300 hover:border-nyt-green flex items-center justify-center text-slate-500 hover:text-nyt-green transition"
              >
                <AppIcon name="chevron-down" size={16} className="-rotate-90" />
              </button>
            </div>
          </div>

          {/* Avatar strip */}
          <div className="flex gap-5 mb-8">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className="relative shrink-0"
              >
                <div className={`h-20 w-20 rounded-full ${t.avatarBg} border-2 flex items-center justify-center transition-all ${currentTestimonial === i ? "border-nyt-green" : "border-slate-200 opacity-60"}`}>
                  <span className="text-2xl font-black text-slate-600">{t.name[0]}</span>
                </div>
                <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black/20">
                  <div className="h-7 w-7 rounded-full bg-nyt-green flex items-center justify-center">
                    <AppIcon name="play" size={11} className="text-white ml-0.5" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Testimonial card */}
          <div className="border border-slate-200 rounded-lg p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 w-full md:w-64 aspect-[4/5] bg-slate-100 rounded-lg flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-slate-900/50 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-nyt-green flex items-center justify-center">
                  <AppIcon name="play" size={20} className="text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 text-left">
                <p className="text-sm font-bold text-white">{TESTIMONIALS[currentTestimonial].name}</p>
                <p className="text-[10px] text-slate-200 font-semibold uppercase tracking-wider mt-0.5">{TESTIMONIALS[currentTestimonial].company}</p>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <p className="text-4xl text-nyt-green font-serif leading-none opacity-50">"</p>
              <p className="text-lg text-slate-700 leading-relaxed italic">
                {TESTIMONIALS[currentTestimonial].quote}
              </p>
              <div>
                <p className="font-bold text-slate-900">{TESTIMONIALS[currentTestimonial].name}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
                  {TESTIMONIALS[currentTestimonial].role} — {TESTIMONIALS[currentTestimonial].company}
                </p>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <AppIcon key={i} name="star" size={15} className="text-amber-400" />)}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-5">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Frequently Asked <span className="text-nyt-green">Questions</span>
              </h2>
              <p className="text-slate-400 mt-1 text-sm">Have questions about integrations or architecture setups?</p>
            </div>
            <AppButton variant="primary" size="medium" href="#contact" className="shrink-0">
              Book a Free Call →
            </AppButton>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[FAQS.slice(0,4), FAQS.slice(4)].map((group, gi) => (
              <div key={gi} className="space-y-3">
                {group.map((faq) => (
                  <div key={faq.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                    >
                      <span className="font-semibold text-slate-800 text-sm pr-4">{faq.q}</span>
                      <AppIcon
                        name="chevron-down"
                        size={16}
                        className={`shrink-0 text-slate-400 transition-transform ${expandedFaq === faq.id ? "rotate-180 !text-nyt-green" : ""}`}
                      />
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-5 pb-5 border-t border-slate-100">
                        <p className="text-sm text-slate-500 leading-relaxed pt-3">{faq.a}</p>
                        {faq.bulletPoints && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {faq.bulletPoints.map((pt, i) => (
                              <span key={i} className="text-xs border border-nyt-green/30 text-nyt-green px-2.5 py-1 rounded font-semibold bg-nyt-green/5">
                                {pt}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── LATEST INSIGHTS ────────────────────────────────────── */}
      <section id="insights" className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Latest Insights</h2>
              <p className="text-slate-400 text-sm mt-1">Learn about technology and its impact on modern businesses.</p>
            </div>
            <a href="#" className="text-sm font-bold text-nyt-green hover:underline shrink-0">Browse All Blogs →</a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            {/* Big card */}
            <div className="lg:col-span-7 border border-slate-200 rounded-lg overflow-hidden hover:border-nyt-green transition-colors">
              <div className="h-56 bg-gradient-to-br from-nyt-green/10 to-nyt-lime/10 flex items-center justify-center">
                <AppIcon name="code" size={64} color="primary" className="opacity-50" />
              </div>
              <div className="p-7 space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-nyt-green">Guide</p>
                <h3 className="font-extrabold text-slate-900 text-xl leading-snug">Step-by-Step Guide to Hire Node.js Developers: Skills, Cost & Platforms</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Everything about evaluating backend capabilities and budgeting for high-scale Node.js deployments.</p>
              </div>
            </div>

            {/* Side cards */}
            <div className="lg:col-span-5 space-y-4">
              {[
                { tag: "Sector Report", tagColor: "text-nyt-green", title: "Artificial Intelligence in the Transportation Industry", desc: "Driving the next era of mobility using predictive fleet tracking algorithms.", icon: "globe" as const },
                { tag: "Risk Assessment", tagColor: "text-purple-600", title: "Fraud Detection in Telecom: Prevention Strategies", desc: "Implementing real-time threat intelligence and verification layers for networks.", icon: "shield" as const },
                { tag: "Engineering", tagColor: "text-amber-600", title: "React Native vs Flutter: The 2024 Developer's Guide", desc: "Choosing the right cross-platform framework for your next mobile product.", icon: "code" as const },
              ].map((c) => (
                <div key={c.title} className="border border-slate-200 rounded-lg p-5 flex gap-4 hover:border-nyt-green transition-colors">
                  <div className="h-14 w-14 shrink-0 bg-nyt-green/10 rounded flex items-center justify-center">
                    <AppIcon name={c.icon} size={24} color="primary" />
                  </div>
                  <div>
                    <p className={`text-[9px] font-bold uppercase tracking-wider ${c.tagColor} mb-1`}>{c.tag}</p>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug">{c.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="text-center mt-10">
            <AppButton variant="outline" size="medium" href="#">Browse All Insights</AppButton>
          </div>

        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────── */}
      <section id="contact" className="py-16 bg-white relative overflow-hidden">

        {/* Background vectors */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <svg className="absolute -right-20 top-10 opacity-[0.06] w-96 h-96" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" stroke="#6cb790" strokeWidth="40"/>
            <circle cx="200" cy="200" r="100" stroke="#6cb790" strokeWidth="20"/>
          </svg>
          <svg className="absolute -left-16 bottom-20 opacity-[0.05] w-72 h-72" viewBox="0 0 300 300" fill="none">
            <path d="M150 20 Q280 80 270 150 Q260 230 150 280 Q40 230 30 150 Q20 80 150 20Z" fill="#6cb790"/>
          </svg>
        </div>

        <div className="mx-auto max-w-5xl px-6 relative z-10">

          {/* Section header */}
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
              Get in touch <span className="text-2xl">📧</span>
            </h2>
            <p className="text-nyt-green font-semibold text-lg mt-1">We'd love to hear from you.</p>
          </div>

          {/* Main white card */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left — contact info + testimonial */}
            <div className="space-y-6">
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Write Us</p>
                <a href="mailto:sales@nxtorbit.com" className="text-xl font-extrabold text-slate-900 hover:text-nyt-green transition">
                  sales@nxtorbit.com
                </a>
              </div>

              <div>
                <p className="text-xs text-slate-400 font-semibold mb-3">We are just a call away</p>
                <div className="space-y-1.5">
                  <p className="font-extrabold text-slate-900 text-sm">
                    +91 987-014-0055 <span className="text-xs text-slate-400 font-normal">(Sales)</span>
                  </p>
                  <p className="font-bold text-slate-700 text-sm">
                    +1 360-322-4913 <span className="text-xs text-slate-400 font-normal">(US Sales)</span>
                  </p>
                  <p className="font-bold text-slate-700 text-sm">
                    +91 995-806-8889 <span className="text-xs text-slate-400 font-normal">(HR)</span>
                  </p>
                </div>
              </div>

              {/* Testimonial card */}
              <div className="bg-nyt-green rounded-xl p-6 text-white space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-lg font-black shrink-0">
                    {TESTIMONIALS[currentTestimonial].name[0]}
                  </div>
                  <div>
                    <p className="font-extrabold text-sm">{TESTIMONIALS[currentTestimonial].name}</p>
                    <p className="text-white/70 text-xs italic">{TESTIMONIALS[currentTestimonial].company}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/90 italic">
                  "{TESTIMONIALS[currentTestimonial].quote}"
                </p>
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => setCurrentTestimonial((p) => (p === 0 ? TESTIMONIALS.length - 1 : p - 1))}
                    className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
                  >
                    <AppIcon name="chevron-down" size={14} className="rotate-90 text-white" />
                  </button>
                  <button
                    onClick={() => setCurrentTestimonial((p) => (p === TESTIMONIALS.length - 1 ? 0 : p + 1))}
                    className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
                  >
                    <AppIcon name="chevron-down" size={14} className="-rotate-90 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right — line-style form */}
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-6">Or fill this form</p>
              <form className="space-y-5" onSubmit={handleCaptchaVerify}>

                {/* Name */}
                <div className="border-b border-slate-300 focus-within:border-nyt-green transition-colors">
                  <input required placeholder="Name *" className="w-full py-2.5 text-sm text-slate-800 bg-transparent focus:outline-none placeholder-slate-400" />
                </div>

                {/* Email */}
                <div className="border-b border-slate-300 focus-within:border-nyt-green transition-colors">
                  <input required type="email" placeholder="Email *" className="w-full py-2.5 text-sm text-slate-800 bg-transparent focus:outline-none placeholder-slate-400" />
                </div>

                {/* Phone with country code */}
                <div className="flex items-end gap-3 border-b border-slate-300 focus-within:border-nyt-green transition-colors">
                  <select className="py-2.5 text-sm text-slate-700 bg-transparent focus:outline-none shrink-0 cursor-pointer">
                    <option>India (+91)</option>
                    <option>US (+1)</option>
                    <option>UAE (+971)</option>
                    <option>UK (+44)</option>
                  </select>
                  <AppIcon name="chevron-down" size={14} className="text-slate-400 mb-3 shrink-0 -ml-5" />
                  <input required placeholder="Phone Number *" className="flex-1 py-2.5 text-sm text-slate-800 bg-transparent focus:outline-none placeholder-slate-400" />
                </div>

                {/* Attach file */}
                <div className="border-b border-slate-300 focus-within:border-nyt-green transition-colors flex items-center justify-between">
                  <input type="file" className="w-full py-2.5 text-sm text-slate-500 bg-transparent focus:outline-none file:mr-3 file:border-0 file:bg-transparent file:text-nyt-green file:font-semibold file:text-sm cursor-pointer" />
                  <AppIcon name="arrow-right" size={16} className="text-nyt-green shrink-0 -rotate-45" />
                </div>

                {/* Query */}
                <div className="border-b border-slate-300 focus-within:border-nyt-green transition-colors">
                  <input required placeholder="Query *" className="w-full py-2.5 text-sm text-slate-800 bg-transparent focus:outline-none placeholder-slate-400" />
                </div>

                {/* Captcha + Submit */}
                <div className="flex items-center justify-between pt-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">What's <strong>7 + 2</strong> =</span>
                    <input
                      type="text"
                      required
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      className="w-12 border border-slate-300 rounded text-center text-sm py-1.5 focus:outline-none focus:border-nyt-green text-slate-900"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-nyt-green text-white font-extrabold text-sm px-7 py-3 rounded flex items-center gap-2 hover:brightness-105 transition tracking-wide uppercase"
                  >
                    Submit <AppIcon name="arrow-right" size={15} className="text-white" />
                  </button>
                </div>

                {captchaStatus === "success" && <p className="text-xs text-nyt-green font-bold">✓ Verified.</p>}
                {captchaStatus === "error" && <p className="text-xs text-red-500 font-bold">✗ Incorrect answer.</p>}
              </form>
            </div>

          </div>

          {/* ── Get your ideas validated ── */}
          <div className="mt-8 bg-slate-50 border border-slate-100 rounded-xl p-10 relative overflow-hidden">
            {/* Background blob vector */}
            <div className="absolute right-0 top-0 bottom-0 w-80 pointer-events-none overflow-hidden">
              <svg viewBox="0 0 320 200" className="absolute right-0 top-0 h-full w-full opacity-10" fill="none">
                <path d="M320 0 Q200 20 180 100 Q160 180 320 200Z" fill="#6cb790"/>
                <path d="M320 30 Q240 50 220 100 Q200 150 320 170Z" fill="#a5d088"/>
              </svg>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-slate-900">Get your ideas validated.</h3>
                <p className="text-nyt-green font-semibold">Let NXTorbit give you an honest opinion.</p>
                <p className="text-sm font-bold text-slate-700">Book your 45min. consultation.</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border-2 border-nyt-green text-nyt-green font-bold text-sm px-5 py-2.5 rounded hover:bg-nyt-green hover:text-white transition mt-2"
                >
                  Connect With Us <AppIcon name="arrow-right" size={14} />
                </a>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="h-14 w-14 rounded-full bg-slate-300 flex items-center justify-center text-xl font-black text-white shrink-0">A</div>
                <div>
                  <p className="font-extrabold text-slate-900">Ankit Singh</p>
                  <p className="text-xs text-slate-400 italic">COO</p>
                  <p className="text-xs text-slate-500 mt-1">sales@nxtorbit.com</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-slate-500">+91 704 2209 821</span>
                    <a href="#" className="text-xs text-nyt-green font-bold hover:underline">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Our Offices ── */}
          <div className="mt-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🏢</div>
              <h3 className="text-2xl font-extrabold text-slate-900">Our Offices</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { city: "Noida, India", addr: "5th Floor, Let's Connect Business Park, A-57, Sector 136, Noida, U.P, 201304" },
                { city: "Ontario, Canada", addr: "311, 4893 Clarendon st, Vancouver BC, V5R 3J3" },
                { city: "Virginia, USA", addr: "22375 Broderick Dr, Suite 225, Dulles VA 20166, USA" },
                { city: "Dubai", addr: "R320 – OF09, Office OF09-177, Um Hurair Second, Dubai, UAE" },
              ].map((o) => (
                <div key={o.city}>
                  <p className="font-extrabold text-slate-900 text-sm underline decoration-nyt-green underline-offset-2 mb-1">{o.city}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{o.addr}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Exceptional Results ── */}
          <div className="mt-16 text-center space-y-4">
            <div className="text-5xl">🏆</div>
            <h3 className="text-2xl font-extrabold text-slate-900">Exceptional Results for great clients</h3>
            <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
              Partnered with great brands and entrepreneurs all over the world; Fortune 500, Fortune 200, Global 2000 companies and world's largest political party of current Indian Prime Minister — Mr. Narendra Modi.
            </p>
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-nyt-green text-white font-bold text-sm px-7 py-3 rounded hover:brightness-105 transition mt-2"
            >
              See More <AppIcon name="arrow-right" size={14} className="text-white" />
            </a>
          </div>

        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="bg-nyt-charcoal text-white py-16">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-12 pb-12 border-b border-white/10">

            <div className="lg:col-span-4 space-y-4">
              {/* Inline SVG logo — no background, works on dark footer */}
              <svg width="160" height="48" viewBox="0 0 320 96" xmlns="http://www.w3.org/2000/svg">
                {/* Blue orbital arc */}
                <path d="M 108 18 Q 140 4 158 36 Q 168 58 140 72" fill="none" stroke="#4BC8E0" strokeWidth="5" strokeLinecap="round"/>
                {/* Green ball on arc */}
                <circle cx="108" cy="18" r="11" fill="#6cb790"/>
                {/* NXT text */}
                <text x="60" y="68" fontFamily="Arial Black, Arial, sans-serif" fontSize="52" fontWeight="900" fill="white" letterSpacing="-1">NXT</text>
                {/* orbit text */}
                <text x="168" y="68" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="400" fill="white">orbit</text>
                {/* small green dot above i in orbit */}
                <circle cx="254" cy="22" r="5" fill="#6cb790"/>
              </svg>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                NXTorbit is a global technology company delivering enterprise-grade mobile, web, AI, and cloud solutions since 2011.
              </p>
              <div className="flex gap-3 pt-1">
                <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-nyt-green transition"><AppIcon name="linkedin" size={18} /></a>
                <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-nyt-green transition"><AppIcon name="twitter" size={18} /></a>
                <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-nyt-green transition"><AppIcon name="instagram" size={18} /></a>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-3">Company</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                {["About Us","Blog","Career","Contact Us","TechTalks"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-nyt-green transition">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-3">Services</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                {["Android Dev","iOS Dev","React Native","Flutter","Blockchain","AI / ML"].map((l) => (
                  <li key={l}><a href="#services" className="hover:text-nyt-green transition">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-3">Case Studies</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                {["Daylyy","TrueFan","Airtel Xstream","Alba Cars","JoshCam","Mother Dairy"].map((l) => (
                  <li key={l}><a href="#work" className="hover:text-nyt-green transition">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-3">Our Offices</h4>
              <div className="space-y-4 text-xs text-slate-400">
                <div className="flex gap-2">
                  <span className="shrink-0">🇮🇳</span>
                  <div><p className="font-bold text-white text-sm mb-0.5">India HQ</p><p>5th Floor, Let's Connect, Noida UP 201301</p></div>
                </div>
                <div className="flex gap-2">
                  <span className="shrink-0">🇺🇸</span>
                  <div><p className="font-bold text-white text-sm mb-0.5">USA</p><p>22375 Broderick Dr, Suite 225, Dulles VA</p></div>
                </div>
                <div className="flex gap-2">
                  <span className="shrink-0">🇦🇪</span>
                  <div><p className="font-bold text-white text-sm mb-0.5">UAE</p><p>R320-OF09, Um Hurair Second, Dubai</p></div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">© {new Date().getFullYear()} NXTorbit Technology Pvt. Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-slate-400 hover:text-nyt-green transition">Privacy Policy</a>
              <a href="#" className="text-xs text-slate-400 hover:text-nyt-green transition">Sitemap</a>
              <div className="flex items-center gap-1.5 border border-white/20 px-3 py-1 rounded text-[10px] font-bold">
                <AppIcon name="lock" size={11} color="primary" />
                <span className="text-white font-extrabold">DMCA</span>
                <span className="text-slate-300">PROTECTED</span>
              </div>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
