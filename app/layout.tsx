import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { CursorGlow } from "@/app/shared/backdrop/CursorGlow";
import { Footer } from "@/app/shared/layout/Footer";
import { Header } from "@/app/shared/layout/Header";
import { ScrollProgress } from "@/app/shared/layout/ScrollProgress";
import { SmoothScroll } from "@/app/shared/layout/SmoothScroll";
import { FloatingActions } from "@/app/shared/components/FloatingActions";
import { ConsultationModal } from "@/app/shared/ui/ConsultationModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NXTorbit — Product Engineering for Mobile, Web, AI & Cloud",
  description:
    "NXTorbit designs and engineers mobile apps, web platforms, AI systems, and cloud infrastructure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col bg-surface font-sans text-ink-800">
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <SmoothScroll>
          <ScrollProgress />
          <CursorGlow />
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingActions />
          <ConsultationModal />
        </SmoothScroll>
      </body>
    </html>
  );
}
