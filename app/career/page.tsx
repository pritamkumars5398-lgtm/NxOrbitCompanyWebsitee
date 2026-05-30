"use client";
import { useState } from "react";
import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";
import { AppButton } from "../shared/components/AppButton";
import { AppIcon } from "../shared/components/AppIcon";

const JOBS = [
  { id: 1, title: "Senior React Native Developer", dept: "Engineering", location: "Noida, India", type: "Full-time", exp: "4–7 years" },
  { id: 2, title: "Flutter Developer", dept: "Engineering", location: "Noida, India / Remote", type: "Full-time", exp: "2–5 years" },
  { id: 3, title: "Node.js Backend Engineer", dept: "Engineering", location: "Noida, India", type: "Full-time", exp: "3–6 years" },
  { id: 4, title: "UI/UX Designer", dept: "Design", location: "Noida, India", type: "Full-time", exp: "2–4 years" },
  { id: 5, title: "iOS Developer (Swift)", dept: "Engineering", location: "Noida, India", type: "Full-time", exp: "3–5 years" },
  { id: 6, title: "AI/ML Engineer", dept: "AI & Data", location: "Noida, India / Remote", type: "Full-time", exp: "3–6 years" },
  { id: 7, title: "DevOps Engineer", dept: "Infrastructure", location: "Noida, India", type: "Full-time", exp: "3–5 years" },
  { id: 8, title: "Business Development Executive", dept: "Sales", location: "Noida, India", type: "Full-time", exp: "1–3 years" },
  { id: 9, title: "Project Manager", dept: "Operations", location: "Noida, India", type: "Full-time", exp: "4–7 years" },
];

const DEPTS = ["All", "Engineering", "Design", "AI & Data", "Infrastructure", "Sales", "Operations"];

const PERKS = [
  { icon: "💰", title: "Competitive Pay", desc: "Market-leading salaries with annual reviews and performance bonuses." },
  { icon: "🏥", title: "Health Insurance", desc: "Comprehensive medical, dental, and vision coverage for you and your family." },
  { icon: "🌍", title: "Remote-Friendly", desc: "Hybrid and remote options available for eligible roles across departments." },
  { icon: "📚", title: "Learning Budget", desc: "₹30,000 annual budget for courses, certifications, and conferences." },
  { icon: "🕐", title: "Flexible Hours", desc: "Flexible start times and output-based performance culture." },
  { icon: "🚀", title: "Growth Fast-Track", desc: "Clear promotion tracks with dedicated mentorship programs." },
  { icon: "🎯", title: "Meaningful Work", desc: "Build apps used by millions — from Airtel to KFC to TrueFan." },
  { icon: "🎉", title: "Great Culture", desc: "Team outings, hackathons, annual retreats, and regular celebrations." },
];

export default function CareerPage() {
  const [activeDept, setActiveDept] = useState("All");
  const [openJob, setOpenJob] = useState<number | null>(null);
  const [applied, setApplied] = useState(false);

  const filtered = activeDept === "All" ? JOBS : JOBS.filter(j => j.dept === activeDept);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-10 right-10 opacity-[0.06] w-72 h-72" viewBox="0 0 300 300" fill="none">
            <circle cx="150" cy="150" r="130" stroke="#6cb790" strokeWidth="30"/>
            <circle cx="150" cy="150" r="70" stroke="#6cb790" strokeWidth="15"/>
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-3">We're Hiring</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
              Build Your Career<br />at <span className="text-nyt-green">NXTorbit</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl">
              Join a team of 200+ engineers, designers, and innovators building digital products used by millions across the globe. We hire for talent, invest in growth, and celebrate great work.
            </p>
            <div className="flex flex-wrap gap-4">
              <AppButton variant="primary" size="medium" href="#openings">View Open Positions</AppButton>
              <AppButton variant="outline" size="medium" href="#culture">Our Culture</AppButton>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
            {[["200+","Team Members"],["15+","Nationalities"],["50+","Projects/Year"],["4.8★","Glassdoor Rating"]].map(([n,l]) => (
              <div key={l} className="bg-white rounded-xl p-5 text-center" style={{boxShadow:'0 1px 12px rgba(0,0,0,0.06)'}}>
                <p className="text-2xl font-black text-slate-900">{n}</p>
                <p className="text-xs text-slate-400 mt-1 font-semibold">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section id="culture" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-2">Why NXTorbit</p>
            <h2 className="text-2xl font-extrabold text-slate-900">Life at NXTorbit</h2>
            <p className="text-slate-400 mt-2 text-sm">Everything you need to do the best work of your career.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PERKS.map((p) => (
              <div key={p.title} className="bg-slate-50 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-200">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section id="openings" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-1">Open Roles</p>
              <h2 className="text-2xl font-extrabold text-slate-900">Current Openings</h2>
            </div>
            <p className="text-sm text-slate-400">{filtered.length} position{filtered.length !== 1 ? "s" : ""} available</p>
          </div>

          {/* Dept filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {DEPTS.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDept(d)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${activeDept === d ? "bg-nyt-green text-white" : "bg-white text-slate-600 hover:text-nyt-green"}`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Job listings */}
          <div className="space-y-3">
            {filtered.map((job) => (
              <div key={job.id} className="bg-white rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenJob(openJob === job.id ? null : job.id)}
                  className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-nyt-green/10 flex items-center justify-center shrink-0">
                      <AppIcon name="code" size={18} color="primary" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{job.title}</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-xs text-slate-400">{job.dept}</span>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs text-slate-400">{job.location}</span>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs text-slate-400">{job.exp}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-semibold text-nyt-green bg-nyt-green/10 px-3 py-1 rounded-full">{job.type}</span>
                    <AppIcon name="chevron-down" size={16} className={`text-slate-400 transition-transform ${openJob === job.id ? "rotate-180" : ""}`} />
                  </div>
                </button>

                {openJob === job.id && (
                  <div className="px-5 pb-5 border-t border-slate-50">
                    <div className="pt-4 space-y-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Responsibilities</p>
                        <ul className="space-y-1.5 text-sm text-slate-600">
                          {["Design, develop, and maintain scalable production systems","Collaborate with cross-functional teams on product delivery","Write clean, well-tested, and documented code","Participate in code reviews and technical discussions"].map((r,i) => (
                            <li key={i} className="flex gap-2"><span className="text-nyt-green mt-0.5">✓</span>{r}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Requirements</p>
                        <ul className="space-y-1.5 text-sm text-slate-600">
                          {[`${job.exp} of professional experience`,"Strong fundamentals and problem-solving skills","Experience with Agile/Scrum workflows","Excellent communication skills"].map((r,i) => (
                            <li key={i} className="flex gap-2"><span className="text-nyt-green mt-0.5">•</span>{r}</li>
                          ))}
                        </ul>
                      </div>
                      <AppButton variant="primary" size="small" href="/contact">Apply for this Role →</AppButton>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK APPLY ── */}
      <section className="py-16 bg-nyt-dark">
        <div className="mx-auto max-w-3xl px-6 text-center space-y-6">
          <h2 className="text-2xl font-extrabold text-white">Don't see your role?</h2>
          <p className="text-slate-400 leading-relaxed">
            We're always looking for exceptional talent. Send us your resume and we'll reach out when the right opportunity opens up.
          </p>
          {applied ? (
            <div className="bg-nyt-green/10 rounded-xl p-6 text-nyt-lime font-bold">
              ✓ Application received! We'll be in touch within 3–5 business days.
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setApplied(true); }}
              className="bg-white/5 rounded-xl p-8 space-y-4 text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Full Name *</label>
                  <input required placeholder="Your name" className="w-full bg-white/10 text-white placeholder-slate-500 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:bg-white/15" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Email *</label>
                  <input required type="email" placeholder="you@example.com" className="w-full bg-white/10 text-white placeholder-slate-500 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:bg-white/15" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Role Applying For</label>
                  <input placeholder="e.g. React Native Developer" className="w-full bg-white/10 text-white placeholder-slate-500 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:bg-white/15" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Resume / Portfolio URL</label>
                  <input placeholder="https://..." className="w-full bg-white/10 text-white placeholder-slate-500 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:bg-white/15" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Cover Note</label>
                <textarea placeholder="Tell us about yourself..." rows={3} className="w-full bg-white/10 text-white placeholder-slate-500 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:bg-white/15 resize-none" />
              </div>
              <AppButton type="submit" variant="primary" size="medium" className="w-full">
                Submit Application →
              </AppButton>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
