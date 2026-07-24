/**
 * Single source of truth for site navigation. The header mega-menu, the mobile
 * drawer, and the footer all read from here so a new service page only has to
 * be added once.
 */

export type NavLink = {
  label: string;
  href: string;
  /** Shown in the mega menu only. Keep to one short line. */
  description?: string;
  /** Lucide icon name, resolved in `NavIcon`. */
  icon?: string;
};

export type NavGroup = {
  label: string;
  /** `mega` renders the two-column panel; `list` renders a compact dropdown. */
  layout: "mega" | "list";
  /** Promo rail shown on the right of a mega panel. */
  feature?: { title: string; description: string; href: string; cta: string };
  links: NavLink[];
};

export const SERVICE_LINKS: NavLink[] = [
  {
    label: "Mobile App Development",
    href: "/services/mobile",
    description: "Native and cross-platform apps built to ship and scale.",
    icon: "smartphone",
  },
  {
    label: "Web App Development",
    href: "/services/web",
    description: "Performant web platforms and internal tooling.",
    icon: "globe",
  },
  {
    label: "AI & ML Solutions",
    href: "/services/ai",
    description: "Models, agents, and pipelines wired into your product.",
    icon: "sparkles",
  },
  {
    label: "UI/UX Design",
    href: "/services/design",
    description: "Research-led interfaces and design systems.",
    icon: "pen-tool",
  },
  {
    label: "Blockchain Development",
    href: "/services/blockchain",
    description: "Contracts, wallets, and audited on-chain systems.",
    icon: "link",
  },
  {
    label: "DevOps & Cloud",
    href: "/services/devops",
    description: "CI/CD, observability, and cost-aware infrastructure.",
    icon: "server",
  },
];

export const TECHNOLOGY_LINKS: NavLink[] = [
  { label: "React Native", href: "/technology/react-native", icon: "atom" },
  { label: "Flutter", href: "/technology/flutter", icon: "layers" },
  { label: "iOS (Swift)", href: "/technology/ios", icon: "apple" },
  { label: "Android (Kotlin)", href: "/technology/android", icon: "bot" },
  { label: "Node.js", href: "/technology/nodejs", icon: "hexagon" },
  { label: "Next.js", href: "/technology/nextjs", icon: "triangle" },
];

export const INDUSTRY_LINKS: NavLink[] = [
  { label: "Healthcare", href: "/industries/healthcare", icon: "heart-pulse" },
  { label: "Fintech", href: "/industries/fintech", icon: "landmark" },
  { label: "Education", href: "/industries/education", icon: "graduation-cap" },
  { label: "E-Commerce", href: "/industries/ecommerce", icon: "shopping-bag" },
  { label: "Logistics", href: "/industries/logistics", icon: "truck" },
  { label: "Entertainment", href: "/industries/entertainment", icon: "clapperboard" },
];

export const COMPANY_LINKS: NavLink[] = [
  { label: "Case Studies", href: "/case-studies", description: "Outcomes, not screenshots." },
  { label: "Our Work", href: "/portfolio", description: "Selected products we have shipped." },
  { label: "Careers", href: "/career", description: "Open roles and how we hire." },
  { label: "Contact", href: "/contact", description: "Talk to an engineer, not a form." },
];

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Services",
    layout: "mega",
    links: SERVICE_LINKS,
    feature: {
      title: "Start with a technical audit",
      description:
        "A two-week review of your architecture, delivery pipeline, and roadmap risk — with a costed plan at the end.",
      href: "/contact",
      cta: "Book an audit",
    },
  },
  { label: "Technology", layout: "list", links: TECHNOLOGY_LINKS },
  { label: "Industries", layout: "list", links: INDUSTRY_LINKS },
  {
    label: "Company",
    layout: "mega",
    links: COMPANY_LINKS,
    feature: {
      title: "1,400+ products shipped",
      description:
        "Fourteen years of engineering for startups and enterprises across 35 countries.",
      href: "/case-studies",
      cta: "See the work",
    },
  },
];

export const CONTACT_DETAILS = {
  phone: "+91 9763804442",
  phoneHref: "tel:+919763804442",
  email: "info@itnextsolutions.com",
  emailHref: "mailto:info@itnextsolutions.com",
  address:
    "Office No. 903, Kamdhenu 23 West, TTC Industrial Area, MIDC, Pawne, Navi Mumbai 400705",
  hours: "Mon–Fri, 10:30 AM – 7:30 PM IST",
} as const;
