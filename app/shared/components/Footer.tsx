import { AppIcon } from "./AppIcon";

export default function Footer() {
  return (
    <footer className="bg-nyt-charcoal text-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-12 pb-12 border-b border-white/10">

          <div className="lg:col-span-4 space-y-4">
            <svg width="160" height="48" viewBox="0 0 320 96" xmlns="http://www.w3.org/2000/svg">
              <path d="M 108 18 Q 140 4 158 36 Q 168 58 140 72" fill="none" stroke="#4BC8E0" strokeWidth="5" strokeLinecap="round"/>
              <circle cx="108" cy="18" r="11" fill="#6cb790"/>
              <text x="60" y="68" fontFamily="Arial Black, Arial, sans-serif" fontSize="52" fontWeight="900" fill="white" letterSpacing="-1">NXT</text>
              <text x="168" y="68" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="400" fill="white">orbit</text>
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
              {[["About Us","/#why-us"],["Blog","/blog"],["Career","/career"],["Contact Us","/contact"],["TechTalks","/#insights"]].map(([l,h]) => (
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
            <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-3">Our Offices</h4>
            <div className="space-y-4 text-xs text-slate-400">
              {[
                ["🇮🇳","India HQ","5th Floor, Let's Connect, Noida UP 201301"],
                ["🇺🇸","USA","22375 Broderick Dr, Suite 225, Dulles VA"],
                ["🇦🇪","UAE","R320-OF09, Um Hurair Second, Dubai"],
              ].map(([flag,city,addr]) => (
                <div key={city as string} className="flex gap-2">
                  <span className="shrink-0">{flag}</span>
                  <div><p className="font-bold text-white text-sm mb-0.5">{city}</p><p>{addr}</p></div>
                </div>
              ))}
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
