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

export const PRODUCT_LINKS: NavLink[] = [
  {
    label: "NXT Orbit Freight",
    href: "/products/nxt-orbit-freight",
    description: "AI-native Freight Operating System.",
    icon: "ship",
  },
  {
    label: "NXT WMS",
    href: "/products/nxt-wms",
    description: "Autonomous warehouse management system.",
    icon: "layers",
  },
  {
    label: "Courier Express",
    href: "/products/courier-express",
    description: "Multicarrier shipping and RTO defense.",
    icon: "truck",
  },
  {
    label: "NXT Sales & Finance",
    href: "/products/nxt-sales-finance",
    description: "CRM, billing, and accounting suite.",
    icon: "landmark",
  },
];

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
  { label: "React Native", href: "/technology/react-native", description: "Cross-platform mobile apps with native performance.", icon: "atom" },
  { label: "Flutter", href: "/technology/flutter", description: "Multi-platform iOS, Android, and web apps from one codebase.", icon: "layers" },
  { label: "iOS (Swift)", href: "/technology/ios", description: "High-performance native iOS applications.", icon: "apple" },
  { label: "Android (Kotlin)", href: "/technology/android", description: "Modern native Android apps built for scale.", icon: "bot" },
  { label: "Node.js", href: "/technology/nodejs", description: "Scalable backend services, REST APIs, and microservices.", icon: "hexagon" },
  { label: "Next.js", href: "/technology/nextjs", description: "Full-stack React applications and SSR web platforms.", icon: "triangle" },
];

export const INDUSTRY_LINKS: NavLink[] = [
  { label: "Healthcare", href: "/industries/healthcare", description: "HIPAA-compliant medical and health tech systems.", icon: "heart-pulse" },
  { label: "Fintech", href: "/industries/fintech", description: "PCI-DSS compliant banking, payments, and financial software.", icon: "landmark" },
  { label: "Education", href: "/industries/education", description: "EdTech platforms, LMS, and interactive learning systems.", icon: "graduation-cap" },
  { label: "E-Commerce", href: "/industries/ecommerce", description: "High-conversion storefronts, inventory, and checkout engines.", icon: "shopping-bag" },
  { label: "Logistics", href: "/industries/logistics", description: "Fleet tracking, WMS, freight OS, and supply chain tech.", icon: "truck" },
  { label: "Entertainment", href: "/industries/entertainment", description: "Media streaming, content platforms, and interactive apps.", icon: "clapperboard" },
];

export const COMPANY_LINKS: NavLink[] = [
  { label: "Case Studies", href: "/case-studies", description: "Outcomes, metrics & real client stories.", icon: "briefcase" },
  { label: "Our Work", href: "/portfolio", description: "Selected enterprise products shipped.", icon: "layers" },
  { label: "Careers", href: "/career", description: "Open engineering roles & culture.", icon: "users" },
  { label: "Contact", href: "/contact", description: "Talk to an engineer, not a form.", icon: "mail" },
];

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Services",
    layout: "mega",
    links: SERVICE_LINKS,
    feature: {
      title: "Start with a technical audit",
      description:
        "A review of your architecture, delivery pipeline, and roadmap risk — with a costed plan at the end.",
      href: "/contact",
      cta: "Book an audit",
    },
  },
  {
    label: "Technology",
    layout: "mega",
    links: TECHNOLOGY_LINKS,
    feature: {
      title: "Explore our tech capabilities",
      description:
        "From React Native to cloud-native backends, we build on reliable and modern engineering standards.",
      href: "/contact",
      cta: "Talk to an engineer",
    },
  },
  {
    label: "Industries",
    layout: "mega",
    links: INDUSTRY_LINKS,
    feature: {
      title: "Industry Specific Solutions",
      description:
        "Tailored software engineering across Healthcare, Fintech, Logistics, and E-Commerce.",
      href: "/contact",
      cta: "Learn more",
    },
  },
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
  {
    label: "Products",
    layout: "mega",
    links: PRODUCT_LINKS,
    feature: {
      title: "NXT Enterprise Suite",
      description:
        "AI-native Operating Systems for Freight, Warehouse, Courier & Financial operations.",
      href: "/products/nxt-orbit-freight",
      cta: "Explore Suite",
    },
  },
];

export const CONTACT_DETAILS = {
  phone: "+91 9763804442",
  phoneHref: "tel:+919763804442",
  email: "info@nxt-orbit.com",
  emailHref: "mailto:info@nxt-orbit.com",
  address:
    "Office No. 903, Kamdhenu 23 West, TTC Industrial Area, MIDC, Pawne, Navi Mumbai 400705",
  hours: "Mon–Fri, 10:30 AM – 7:30 PM IST",
} as const;
