"use client";

interface ServiceHeroImageProps {
  src: string;
  alt: string;
}

export function ServiceHeroImage({ 
  src, 
  alt, 
}: ServiceHeroImageProps) {
  return (
    <div className="relative group w-full">
      {/* Outer Ambient Glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500 to-brand-500 opacity-20 blur-xl transition duration-1000 group-hover:opacity-35 group-hover:duration-200" />
      
      {/* Card Frame */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
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
        </div>
      </div>
    </div>
  );
}
