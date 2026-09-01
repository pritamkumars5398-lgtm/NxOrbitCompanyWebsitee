"use client";

interface ServiceHeroImageProps {
  src: string;
  alt: string;
  badgeText?: string;
  categoryText?: string;
  statBadge?: {
    label: string;
    value: string;
  };
}

export function ServiceHeroImage({ 
  src, 
  alt, 
  badgeText = "Global Standard",
  categoryText = "Global Standard",
  statBadge 
}: ServiceHeroImageProps) {
  return (
    <div className="relative group w-full">
      {/* Outer Ambient Glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-500 to-brand-500 opacity-20 blur-xl transition duration-1000 group-hover:opacity-35 group-hover:duration-200" />
      
      {/* Card Frame */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
            onError={(e) => {
              // Clean fallback to default real logistics asset if needed
              e.currentTarget.src = "/assets/hero_slider_1.webp";
            }}
          />

          {/* Optional Top Right Live Stat Badge */}
          {statBadge && (
            <div className="absolute top-3.5 right-3.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/20 px-3.5 py-2 text-white shadow-lg flex items-center gap-2.5">
              <span className="flex size-2 rounded-full bg-teal-400 animate-pulse" />
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-300 uppercase tracking-wider leading-none mb-0.5">{statBadge.label}</span>
                <span className="text-xs font-extrabold text-teal-300 leading-none">{statBadge.value}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Premium Glassmorphism Badge */}
      <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white/85 backdrop-blur-md border border-white/80 p-3.5 shadow-xl flex items-center gap-3 transition-transform duration-500 group-hover:-translate-y-1">
        <span className="flex size-9 items-center justify-center rounded-xl bg-teal-500 text-white shadow-md shadow-teal-500/20">
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </span>
        <div className="flex flex-col">
          <span className="text-[9px] font-bold text-teal-600 uppercase tracking-widest leading-none mb-1">{categoryText}</span>
          <span className="text-[11px] font-extrabold text-slate-800 leading-none">{badgeText}</span>
        </div>
      </div>
    </div>
  );
}
