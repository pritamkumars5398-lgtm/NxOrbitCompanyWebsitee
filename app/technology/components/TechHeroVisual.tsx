import React from "react";

interface TechHeroVisualProps {
  slug: string;
  title: string;
  techStack: string[];
}

export function TechHeroVisual({ slug, title, techStack }: TechHeroVisualProps) {
  // Render official vector logos and high-tech visual cards for each technology
  const renderTechLogo = () => {
    switch (slug) {
      case "flutter":
        return (
          <div className="relative flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#01B5F6]/10 to-[#02569B]/15 rounded-3xl blur-xl" />
            <div className="relative z-10 flex flex-col items-center">
              {/* Flutter Official SVG Logo */}
              <svg className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl animate-float-slow" viewBox="0 0 100 100" fill="none">
                <path d="M57.5 12.5L25 45L37.5 57.5L82.5 12.5H57.5Z" fill="#42A5F5" />
                <path d="M57.5 47.5L37.5 67.5L50 80L82.5 47.5H57.5Z" fill="#0D47A1" />
                <path d="M37.5 67.5L57.5 87.5H82.5L62.5 67.5L37.5 67.5Z" fill="#01579B" />
                <path d="M50 80L37.5 67.5L57.5 47.5L70 60L50 80Z" fill="#29B6F6" />
              </svg>
              <div className="mt-4 bg-[#02569B]/10 px-4 py-1.5 rounded-full border border-[#01B5F6]/30 backdrop-blur-md">
                <span className="text-xs font-black text-[#02569B] uppercase tracking-wider">Flutter 3.x Engine • Dart 3</span>
              </div>
            </div>
          </div>
        );

      case "react-native":
        return (
          <div className="relative flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#61DAFB]/10 to-[#00BBA9]/15 rounded-3xl blur-xl" />
            <div className="relative z-10 flex flex-col items-center">
              {/* React Native Spinning Orbit Atom Logo */}
              <svg className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl animate-spin-slow" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="8" fill="#61DAFB" />
                <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="3.5" />
                <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(60 50 50)" />
                <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(120 50 50)" />
              </svg>
              <div className="mt-4 bg-[#61DAFB]/10 px-4 py-1.5 rounded-full border border-[#61DAFB]/30 backdrop-blur-md">
                <span className="text-xs font-black text-[#0A2E4D] uppercase tracking-wider">React 19 Core • Expo Architecture</span>
              </div>
            </div>
          </div>
        );

      case "ios":
        return (
          <div className="relative flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F05138]/10 to-[#FF8000]/15 rounded-3xl blur-xl" />
            <div className="relative z-10 flex flex-col items-center">
              {/* Swift Bird Official SVG Logo */}
              <svg className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl animate-float-slow" viewBox="0 0 128 128" fill="none">
                <rect width="128" height="128" rx="28" fill="url(#swiftGrad)" />
                <path d="M96 76C86 92 68 98 52 92C66 84 76 72 80 58C62 72 44 70 32 60C44 56 52 48 56 36C40 48 28 44 24 38C34 32 46 30 58 32C72 34 84 42 92 54C94 50 94 44 92 40C98 48 100 62 96 76Z" fill="white" />
                <defs>
                  <linearGradient id="swiftGrad" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF8500" />
                    <stop offset="1" stopColor="#F05138" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="mt-4 bg-[#F05138]/10 px-4 py-1.5 rounded-full border border-[#F05138]/30 backdrop-blur-md">
                <span className="text-xs font-black text-[#F05138] uppercase tracking-wider">Swift 5.10 • SwiftUI Native</span>
              </div>
            </div>
          </div>
        );

      case "android":
        return (
          <div className="relative flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3DDC84]/10 to-[#00BBA9]/15 rounded-3xl blur-xl" />
            <div className="relative z-10 flex flex-col items-center">
              {/* Android Bugdroid Official SVG Logo */}
              <svg className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl animate-float-slow" viewBox="0 0 100 100">
                <line x1="30" y1="36" x2="20" y2="20" stroke="#3DDC84" strokeWidth="5" strokeLinecap="round" />
                <line x1="70" y1="36" x2="80" y2="20" stroke="#3DDC84" strokeWidth="5" strokeLinecap="round" />
                <circle cx="26" cy="18" r="4.5" fill="#3DDC84" />
                <circle cx="74" cy="18" r="4.5" fill="#3DDC84" />
                <rect x="16" y="38" width="68" height="42" rx="12" fill="#3DDC84" />
                <circle cx="36" cy="56" r="5" fill="white" />
                <circle cx="64" cy="56" r="5" fill="white" />
                <rect x="8" y="42" width="9" height="26" rx="4.5" fill="#3DDC84" />
                <rect x="83" y="42" width="9" height="26" rx="4.5" fill="#3DDC84" />
                <rect x="28" y="82" width="10" height="16" rx="5" fill="#3DDC84" />
                <rect x="62" y="82" width="10" height="16" rx="5" fill="#3DDC84" />
              </svg>
              <div className="mt-4 bg-[#3DDC84]/10 px-4 py-1.5 rounded-full border border-[#3DDC84]/30 backdrop-blur-md">
                <span className="text-xs font-black text-[#0A2E4D] uppercase tracking-wider">Kotlin 2.0 • Jetpack Compose</span>
              </div>
            </div>
          </div>
        );

      case "nodejs":
        return (
          <div className="relative flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#339933]/10 to-[#00BBA9]/15 rounded-3xl blur-xl" />
            <div className="relative z-10 flex flex-col items-center">
              {/* Node.js Hexagon Official SVG Logo */}
              <svg className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl animate-float-slow" viewBox="0 0 100 100" fill="none">
                <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="#339933" />
                <polygon points="50,12 83,31 83,69 50,88 17,69 17,31" fill="#215732" />
                <path d="M50 28 L68 38 V62 L50 72 L32 62 V38 Z" fill="#66CC33" />
                <text x="50" y="56" textAnchor="middle" fill="white" fontSize="20" fontWeight="900" fontFamily="sans-serif">JS</text>
              </svg>
              <div className="mt-4 bg-[#339933]/10 px-4 py-1.5 rounded-full border border-[#339933]/30 backdrop-blur-md">
                <span className="text-xs font-black text-[#215732] uppercase tracking-wider">Node.js 22 LTS • V8 Engine</span>
              </div>
            </div>
          </div>
        );

      case "nextjs":
      default:
        return (
          <div className="relative flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2E4D]/10 to-[#00BBA9]/15 rounded-3xl blur-xl" />
            <div className="relative z-10 flex flex-col items-center">
              {/* Next.js Emblem Logo */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#0A2E4D] flex items-center justify-center text-white text-5xl font-black shadow-2xl border-4 border-[#00BBA9] animate-float-slow">
                N
              </div>
              <div className="mt-4 bg-[#0A2E4D]/10 px-4 py-1.5 rounded-full border border-[#0A2E4D]/30 backdrop-blur-md">
                <span className="text-xs font-black text-[#0A2E4D] uppercase tracking-wider">Next.js 16 • Turbopack</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="glass-panel rounded-3xl p-6 md:p-8 bento-card-animated border border-white/80 shadow-xl relative overflow-hidden">
      {/* Live Badge Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
        <span className="text-xs font-black uppercase tracking-wider text-[#006B7D]">Technology Showcase</span>
        <span className="text-xs font-bold text-[#82C458] bg-[#82C458]/10 px-3 py-1 rounded-full flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#82C458] animate-pulse" />
          Active Stack
        </span>
      </div>

      {/* Official Technology Logo & Graphic */}
      {renderTechLogo()}

      {/* Tech Stack Chips */}
      <div className="mt-4 pt-4 border-t border-slate-100">
        <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-2">Supported Libraries & Ecosystem</p>
        <div className="flex flex-wrap gap-1.5">
          {techStack.slice(0, 5).map((tech) => (
            <span key={tech} className="text-xs font-bold text-[#0A2E4D] bg-[#F3F7F9] px-3 py-1 rounded-lg border border-slate-200/60">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
