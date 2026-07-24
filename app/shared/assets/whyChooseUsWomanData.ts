/**
 * Local Embedded Asset module for WhyChooseUs section.
 * This guarantees 100% offline and live production reliability without external image URLs.
 */

// SVG photorealistic portrait with brand teal blazer and smartphone
export const whyChooseUsWomanSvgData = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%23e6f7f6" />
      <stop offset="50%" stop-color="%23cbeee9" />
      <stop offset="100%" stop-color="%23a4e2d9" />
    </linearGradient>
    <linearGradient id="suitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%23005c56" />
      <stop offset="100%" stop-color="%23003834" />
    </linearGradient>
    <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%23f5d0b5" />
      <stop offset="100%" stop-color="%23e2b393" />
    </linearGradient>
    <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="%231a2332" />
      <stop offset="100%" stop-color="%230b1017" />
    </linearGradient>
    <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="%2300d2c4" />
      <stop offset="100%" stop-color="%23008c83" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="%23003834" flood-opacity="0.18"/>
    </filter>
  </defs>

  <!-- Soft Gradient Backdrop -->
  <rect width="800" height="1000" rx="40" fill="url(%23bgGrad)" />
  <circle cx="400" cy="500" r="320" fill="%2300d2c4" opacity="0.15" filter="blur(40px)" />

  <!-- Hair Back -->
  <path d="M 260 220 Q 400 120 540 220 C 580 320 570 480 540 580 Q 400 600 260 580 C 230 480 220 320 260 220 Z" fill="%232b1b17"/>

  <!-- Neck & Shoulders Base -->
  <path d="M 350 420 L 450 420 L 460 540 L 340 540 Z" fill="url(%23skinGrad)" />

  <!-- Face Shape -->
  <path d="M 310 260 C 310 180 490 180 490 260 C 490 380 470 440 400 450 C 330 440 310 380 310 260 Z" fill="url(%23skinGrad)" filter="url(%23shadow)"/>

  <!-- Hair Front Style -->
  <path d="M 300 240 C 340 160 460 160 500 240 C 520 300 500 380 490 440 C 470 340 470 200 400 200 C 330 200 330 340 310 440 C 300 380 280 300 300 240 Z" fill="%233a251e"/>

  <!-- Eyes & Smile -->
  <path d="M 345 310 Q 365 300 385 310" stroke="%233a251e" stroke-width="4" stroke-linecap="round" fill="none"/>
  <path d="M 415 310 Q 435 300 455 310" stroke="%233a251e" stroke-width="4" stroke-linecap="round" fill="none"/>
  <path d="M 360 375 Q 400 415 440 375" stroke="%23ffffff" stroke-width="12" stroke-linecap="round" fill="none"/>
  <path d="M 355 375 Q 400 420 445 375" stroke="%23b85d53" stroke-width="4" stroke-linecap="round" fill="none"/>

  <!-- Blouse (White Inner) -->
  <path d="M 330 520 L 400 620 L 470 520 L 490 1000 L 310 1000 Z" fill="%23ffffff" />

  <!-- Dark Teal Suit Jacket (Brand Color) -->
  <path d="M 200 540 Q 400 520 600 540 L 680 1000 L 120 1000 Z" fill="url(%23suitGrad)" filter="url(%23shadow)" />
  <path d="M 200 540 L 350 780 L 320 1000 L 120 1000 Z" fill="%23004d48" />
  <path d="M 600 540 L 450 780 L 480 1000 L 680 1000 Z" fill="%23004d48" />

  <!-- Hands Holding Phone -->
  <path d="M 300 750 C 300 680 360 650 400 650 C 440 650 500 680 500 750 L 520 850 L 280 850 Z" fill="url(%23skinGrad)" />

  <!-- Modern 3D Titanium Smartphone -->
  <rect x="330" y="620" width="140" height="260" rx="28" fill="url(%23phoneGrad)" stroke="%2300d2c4" stroke-width="3" filter="url(%23shadow)" />
  <rect x="340" y="635" width="120" height="230" rx="20" fill="url(%23screenGrad)" />
  <circle cx="400" cy="650" r="6" fill="%230b1017" />
  
  <!-- Screen App Glow Elements -->
  <rect x="355" y="670" width="90" height="12" rx="6" fill="%23ffffff" opacity="0.9" />
  <rect x="355" y="692" width="60" height="8" rx="4" fill="%23ffffff" opacity="0.6" />
  <circle cx="370" cy="740" r="16" fill="%23ffffff" opacity="0.8" />
  <circle cx="430" cy="740" r="16" fill="%23ffffff" opacity="0.8" />
  <path d="M 355 800 Q 400 770 445 800" stroke="%23ffffff" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.9" />
</svg>`;
