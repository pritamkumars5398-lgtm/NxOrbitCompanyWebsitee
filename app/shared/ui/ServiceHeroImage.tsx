"use client";

interface ServiceHeroImageProps {
  src: string;
  alt: string;
}

export function ServiceHeroImage({ src, alt }: ServiceHeroImageProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
          onError={(e) => {
            // Clean fallback to default local asset if needed
            e.currentTarget.src = "/assets/service-hero-mobile.jpg";
          }}
        />
      </div>
    </div>
  );
}
