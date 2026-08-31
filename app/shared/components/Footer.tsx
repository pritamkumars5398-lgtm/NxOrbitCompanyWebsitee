import { AppIcon } from "./AppIcon";

export default function Footer() {
  return (
    <footer className="bg-nyt-charcoal text-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-12 pb-12 border-b border-white/10">

          <div className="lg:col-span-4 space-y-4">
            <a href="/" className="inline-block shrink-0 bg-white rounded-lg px-3 py-1">
              <div style={{ height: "52px", overflow: "hidden" }}>
                <img
                  src="/nxtorbit-logo.png"
                  alt="NXTorbit"
                  style={{ height: "98px", width: "auto", marginTop: "-20px" }}
                />
              </div>
            </a>
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
              {[["About Us","/#why-us"],["Career","/career"],["Contact Us","/contact"]].map(([l,h]) => (
                <li key={l}><a href={h} className="hover:text-nyt-green transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-3">Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                ["Mobile App Dev", "/services/mobile"],
                ["Web Development", "/services/web"],
                ["AI / ML", "/services/ai"],
                ["UI/UX Design", "/services/design"],
                ["Blockchain", "/services/blockchain"],
                ["DevOps", "/services/devops"]
              ].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-nyt-green transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-3">Case Studies</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[["Daylyy","/portfolio"],["TrueFan","/portfolio"],["Airtel Xstream","/portfolio"],["Alba Cars","/portfolio"],["JoshCam","/portfolio"],["Mother Dairy","/portfolio"]].map(([l,h]) => (
                <li key={l}><a href={h} className="hover:text-nyt-green transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-3">Contact Us</h4>
            <div className="space-y-4 text-xs text-slate-400">
              <div className="flex gap-2.5">
                <AppIcon name="building" size={16} className="shrink-0 mt-0.5 text-nyt-lime" />
                <div>
                  <p className="font-bold text-white text-sm mb-0.5">India HQ</p>
                  <p>Office No. 903, Kamdhenu 23 west, TTC Industrial area, MIDC Industrial area, Pawne, Navi Mumbai, 400705.</p>
                </div>
              </div>
              <div className="flex gap-2.5">
                <AppIcon name="phone" size={16} className="shrink-0 mt-0.5 text-nyt-lime" />
                <div>
                  <p className="font-bold text-white text-sm mb-0.5">Phone</p>
                  <p>+91 9763804442</p>
                </div>
              </div>
              <div className="flex gap-2.5">
                <AppIcon name="mail" size={16} className="shrink-0 mt-0.5 text-nyt-lime" />
                <div>
                  <p className="font-bold text-white text-sm mb-0.5">Email</p>
                  <p>info@nxt-orbit.com</p>
                </div>
              </div>
              <div className="flex gap-2.5">
                <AppIcon name="clock" size={16} className="shrink-0 mt-0.5 text-nyt-lime" />
                <div>
                  <p className="font-bold text-white text-sm mb-0.5">Business Hours</p>
                  <p>Mon - Fri: 10:30 AM - 7:30 PM</p>
                  <p>Sat: flexible hours</p>
                </div>
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
  );
}
