import {
  Atom,
  Bot,
  Clapperboard,
  Globe,
  GraduationCap,
  HeartPulse,
  Hexagon,
  Landmark,
  Layers,
  Link2,
  PenTool,
  Server,
  Ship,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Triangle,
  Truck,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the string icon names used in `core/data/navigation.ts` onto Lucide
 * components. Keeping the data layer free of JSX means it stays serialisable
 * and usable from server components.
 */
const ICONS: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  globe: Globe,
  sparkles: Sparkles,
  "pen-tool": PenTool,
  link: Link2,
  server: Server,
  atom: Atom,
  layers: Layers,
  apple: Smartphone,
  bot: Bot,
  hexagon: Hexagon,
  triangle: Triangle,
  "heart-pulse": HeartPulse,
  landmark: Landmark,
  "graduation-cap": GraduationCap,
  "shopping-bag": ShoppingBag,
  truck: Truck,
  clapperboard: Clapperboard,
  ship: Ship,
};

export function NavIcon({ name, className }: { name?: string; className?: string }) {
  const Icon = name ? ICONS[name] : undefined;
  if (!Icon) return null;
  return <Icon aria-hidden className={className} strokeWidth={1.6} />;
}
