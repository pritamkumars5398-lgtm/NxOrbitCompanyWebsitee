"use client";
import { useState, useRef, useEffect } from "react";
import { AppButton } from "./AppButton";
import { AppIcon } from "./AppIcon";

const NAV_ITEMS = [
  {
    label: "Services",
    items: [
      { label: "Mobile App Development", href: "/services/mobile", icon: "📱" },
      { label: "Web App Development",    href: "/services/web",    icon: "🌐" },
      { label: "AI & ML Solutions",      href: "/services/ai",     icon: "🤖" },
      { label: "UI/UX Design",           href: "/services/design", icon: "🎨" },
      { label: "Blockchain Development", href: "/services/blockchain", icon: "⛓️" },
      { label: "DevOps & Cloud",         href: "/services/devops", icon: "☁️" },
    ],
  },
  {
    label: "Technology",
    items: [
      { label: "React Native", href: "/technology/react-native", icon: "⚛️" },
      { label: "Flutter",      href: "/technology/flutter",      icon: "🦋" },
      { label: "iOS (Swift)",  href: "/technology/ios",          icon: "🍎" },
      { label: "Android",      href: "/technology/android",      icon: "🤖" },
      { label: "Node.js",      href: "/technology/nodejs",       icon: "🟢" },
      { label: "Next.js",      href: "/technology/nextjs",       icon: "▲" },
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "Healthcare",       href: "/industries/healthcare",  icon: "🏥" },
      { label: "Fintech",          href: "/industries/fintech",     icon: "💳" },
      { label: "Education",        href: "/industries/education",   icon: "🎓" },
      { label: "E-Commerce",       href: "/industries/ecommerce",   icon: "🛒" },
      { label: "Logistics",        href: "/industries/logistics",   icon: "🚚" },
      { label: "Entertainment",    href: "/industries/entertainment",icon: "🎬" },
    ],
  },
  {
    label: "Portfolio",
    items: [
      { label: "Case Studies",          href: "/#work",       icon: "📂" },
      { label: "Client Success Stories",href: "/#testimonials",icon: "⭐" },
      { label: "View All Work",         href: "/#work",       icon: "🗂️" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About NXTorbit", href: "/#why-us",    icon: "🏢" },
      { label: "Blog & Insights",href: "/#insights",  icon: "📝" },
      { label: "Career",         href: "/career",      icon: "💼" },
      { label: "Contact Us",     href: "/contact",     icon: "✉️" },
      { label: "Our Offices",    href: "/contact#offices", icon: "📍" },
    ],
  },
  { label: "Blog", href: "/#insights" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header ref={ref} className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <a href="/">
          <div style={{ height: "52px", overflow: "hidden" }}>
            <img src="/nxtorbit-logo.png" alt="NXTorbit" style={{ height: "98px", width: "auto", marginTop: "-20px" }} />
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) =>
            item.items ? (
              <div key={item.label} className="relative">
                <button
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded transition-colors ${openMenu === item.label ? "text-nyt-green" : "text-slate-600 hover:text-nyt-green"}`}
                >
                  {item.label}
                  <AppIcon name="chevron-down" size={13} className={`transition-transform duration-200 ${openMenu === item.label ? "rotate-180 text-nyt-green" : ""}`} />
                </button>

                {/* Dropdown panel */}
                {openMenu === item.label && (
                  <div
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                    className="absolute top-full left-0 mt-0 w-56 bg-white shadow-xl rounded-xl py-2 z-50"
                    style={{ border: "1px solid #f1f5f9" }}
                  >
                    {item.items.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:text-nyt-green hover:bg-slate-50 transition-colors"
                      >
                        <span className="text-base">{sub.icon}</span>
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={item.label} href={item.href} className="px-3 py-2 text-sm font-semibold text-slate-600 hover:text-nyt-green transition-colors rounded">
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919870140055" className="text-sm font-semibold text-slate-500 hover:text-nyt-green transition-colors">
            +91 987-014-0055
          </a>
          <AppButton variant="primary" size="small" href="/contact">Contact Us</AppButton>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-slate-600">
          <AppIcon name={mobileOpen ? "close" : "menu"} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white max-h-[80vh] overflow-y-auto">
          {NAV_ITEMS.map((item) =>
            item.items ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  className="w-full flex items-center justify-between px-6 py-3 text-sm font-semibold text-slate-700 hover:text-nyt-green"
                >
                  {item.label}
                  <AppIcon name="chevron-down" size={14} className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                </button>
                {mobileExpanded === item.label && (
                  <div className="bg-slate-50 px-6 py-2 space-y-1">
                    {item.items.map((sub) => (
                      <a key={sub.label} href={sub.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 py-2 text-sm text-slate-600 hover:text-nyt-green">
                        <span>{sub.icon}</span> {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="block px-6 py-3 text-sm font-semibold text-slate-700 hover:text-nyt-green border-t border-slate-50">
                {item.label}
              </a>
            )
          )}
          <div className="px-6 py-4 border-t border-slate-100">
            <AppButton variant="primary" size="small" href="/contact" className="w-full">Contact Us</AppButton>
          </div>
        </div>
      )}
    </header>
  );
}
