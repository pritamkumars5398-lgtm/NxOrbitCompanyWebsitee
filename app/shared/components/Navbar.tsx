"use client";
import { useState, useRef, useEffect } from "react";
import { AppButton } from "./AppButton";
import { AppIcon } from "./AppIcon";

const NAV_ITEMS = [
  {
    label: "Services",
    items: [
      { label: "Mobile App Development", href: "/services/mobile" },
      { label: "Web App Development",    href: "/services/web" },
      { label: "AI & ML Solutions",      href: "/services/ai" },
      { label: "UI/UX Design",           href: "/services/design" },
      { label: "Blockchain Development", href: "/services/blockchain" },
      { label: "DevOps & Cloud",         href: "/services/devops" },
    ],
  },
  {
    label: "Technology",
    items: [
      { label: "React Native", href: "/technology/react-native" },
      { label: "Flutter",      href: "/technology/flutter" },
      { label: "iOS (Swift)",  href: "/technology/ios" },
      { label: "Android",      href: "/technology/android" },
      { label: "Node.js",      href: "/technology/nodejs" },
      { label: "Next.js",      href: "/technology/nextjs" },
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "Healthcare",    href: "/industries/healthcare" },
      { label: "Fintech",       href: "/industries/fintech" },
      { label: "Education",     href: "/industries/education" },
      { label: "E-Commerce",    href: "/industries/ecommerce" },
      { label: "Logistics",     href: "/industries/logistics" },
      { label: "Entertainment", href: "/industries/entertainment" },
    ],
  },
  {
    label: "Portfolio",
    items: [
      { label: "Case Studies",           href: "/case-studies" },
      { label: "Client Success Stories", href: "/#testimonials" },
      { label: "View All Work",          href: "/portfolio" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About NXTorbit", href: "/#why-us" },
      { label: "Blog & Insights", href: "/blog" },
      { label: "Career",          href: "/career" },
      { label: "Contact Us",      href: "/contact" },
      { label: "Our Offices",     href: "/contact#offices" },
    ],
  },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const toggleDesktopMenu = (label: string) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  const toggleMobileItem = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <a href="/" className="shrink-0">
          <div style={{ height: "52px", overflow: "hidden" }}>
            <img
              src="/nxtorbit-logo.png"
              alt="NXTorbit"
              style={{ height: "98px", width: "auto", marginTop: "-20px" }}
            />
          </div>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_ITEMS.map((item) =>
            item.items ? (
              <div key={item.label} className="relative">
                <button
                  onClick={() => toggleDesktopMenu(item.label)}
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors duration-150
                    ${openMenu === item.label
                      ? "text-nyt-green bg-nyt-green/5"
                      : "text-slate-600 hover:text-nyt-green hover:bg-slate-50"
                    }`}
                >
                  {item.label}
                  <AppIcon
                    name="chevron-down"
                    size={12}
                    className={`transition-transform duration-200 ${openMenu === item.label ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown — always rendered, animated via CSS */}
                <div
                  role="menu"
                  className={`absolute top-full left-0 mt-1.5 w-60 bg-white rounded-xl shadow-lg z-50
                    transition-all duration-200 ease-out origin-top-left
                    ${openMenu === item.label
                      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 -translate-y-1 scale-95 pointer-events-none"
                    }`}
                  style={{ border: "1px solid #e8edf2" }}
                >
                  <div className="py-1.5">
                    {item.items.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        role="menuitem"
                        onClick={() => setOpenMenu(null)}
                        className="block px-4 py-2.5 text-sm font-medium text-slate-600
                          hover:text-nyt-green hover:bg-slate-50 transition-colors duration-100
                          first:rounded-t-lg last:rounded-b-lg"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-nyt-green
                  hover:bg-slate-50 transition-colors duration-150 rounded-lg"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Right actions — desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919763804442"
            className="text-sm font-semibold text-slate-500 hover:text-nyt-green transition-colors duration-150"
          >
            +91 9763804442
          </a>
          <AppButton variant="primary" size="small" href="/contact">
            Contact Us
          </AppButton>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => {
            setMobileOpen((prev) => !prev);
            setMobileExpanded(null);
          }}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors duration-150"
        >
          <AppIcon name={mobileOpen ? "close" : "menu"} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden border-t border-slate-100 bg-white overflow-hidden transition-all duration-300 ease-in-out
          ${mobileOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="overflow-y-auto max-h-[85vh]">
          {NAV_ITEMS.map((item) =>
            item.items ? (
              <div key={item.label} className="border-b border-slate-50">
                <button
                  onClick={() => toggleMobileItem(item.label)}
                  className="w-full flex items-center justify-between px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-nyt-green transition-colors duration-150"
                >
                  {item.label}
                  <AppIcon
                    name="chevron-down"
                    size={14}
                    className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180 text-nyt-green" : "text-slate-400"}`}
                  />
                </button>

                {/* Mobile accordion items */}
                <div
                  className={`overflow-hidden transition-all duration-250 ease-in-out
                    ${mobileExpanded === item.label ? "max-h-96" : "max-h-0"}`}
                >
                  <div className="bg-slate-50/70 px-6 pt-1 pb-2 space-y-0.5">
                    {item.items.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2.5 text-sm font-medium text-slate-600 hover:text-nyt-green
                          transition-colors duration-100 border-l-2 border-transparent hover:border-nyt-green pl-3"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-nyt-green
                  border-b border-slate-50 transition-colors duration-150"
              >
                {item.label}
              </a>
            )
          )}

          <div className="px-6 py-4 space-y-3">
            <a
              href="tel:+919763804442"
              className="block text-sm font-semibold text-slate-500 hover:text-nyt-green transition-colors"
            >
              +91 9763804442
            </a>
            <AppButton variant="primary" size="small" href="/contact" className="w-full">
              Contact Us
            </AppButton>
          </div>
        </div>
      </div>
    </header>
  );
}
