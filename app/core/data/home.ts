/** Copy and content for the homepage. Kept out of JSX so sections stay layout-only. */

export const HERO = {
  eyebrow: "Product engineering studio",
  headline: "Software that earns its place in the business.",
  /** Word index from which the headline switches to the brand gradient. */
  gradientFrom: 4,
  lead: "We design and build mobile, web, AI, and cloud systems for teams who need them to hold up under real load — and keep holding up three years later.",
  primaryCta: { label: "Book a Consultation", href: "/contact" },
  secondaryCta: { label: "See our work", href: "/case-studies" },
  stats: [
    { value: "1400+", label: "Products shipped" },
    { value: "35+", label: "Countries served" },
    { value: "98%", label: "Client retention" },
    { value: "14", label: "Years building" },
  ],
} as const;

export const CLIENT_LOGOS = [
  "Airtel Xstream",
  "Mother Dairy",
  "TrueFan",
  "Alba Cars",
  "Nik Bakers",
  "JoshCam",
  "Daylyy",
  "Lifology",
  "Strekla",
  "Mynt",
];

export const CAPABILITIES = [
  {
    title: "Mobile App Development",
    description:
      "Native iOS and Android alongside React Native and Flutter — chosen on the merits of your product, not our preference.",
    href: "/services/mobile",
    icon: "smartphone",
    points: ["Swift & Kotlin", "React Native", "Flutter", "App Store strategy"],
    featured: true,
  },
  {
    title: "AI & ML Solutions",
    description: "Models, retrieval, and agents wired into products people already use.",
    href: "/services/ai",
    icon: "sparkles",
    points: ["LLM pipelines", "Computer vision", "Forecasting"],
  },
  {
    title: "Web App Development",
    description: "Platforms, portals, and internal tooling built to stay fast as they grow.",
    href: "/services/web",
    icon: "globe",
    points: ["Next.js", "Design systems", "Realtime"],
  },
  {
    title: "DevOps & Cloud",
    description: "Pipelines, observability, and infrastructure that costs what it should.",
    href: "/services/devops",
    icon: "server",
    points: ["AWS & GCP", "Kubernetes", "CI/CD"],
  },
  {
    title: "UI/UX Design",
    description: "Research, interaction design, and systems your engineers can actually build.",
    href: "/services/design",
    icon: "pen-tool",
    points: ["Discovery", "Prototyping", "Design systems"],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Two weeks with your team, your data, and your users. We leave with a costed plan, not a proposal deck.",
    outputs: ["Technical audit", "Scope & estimate", "Risk register"],
  },
  {
    step: "02",
    title: "Design",
    description:
      "Flows, prototypes, and a design system — validated with real users before a line of production code exists.",
    outputs: ["User research", "Clickable prototype", "Design system"],
  },
  {
    step: "03",
    title: "Build",
    description:
      "Two-week sprints against a visible board. You see working software every fortnight, not a status report.",
    outputs: ["Sprint demos", "CI/CD from day one", "Automated tests"],
  },
  {
    step: "04",
    title: "Scale",
    description:
      "Launch, then the part most agencies skip: monitoring, performance work, and a roadmap that keeps earning.",
    outputs: ["Observability", "Performance budget", "Ongoing roadmap"],
  },
];

export const DIFFERENTIATORS = [
  {
    title: "Senior engineers, not a bench",
    description:
      "The people in your kickoff are the people writing the code. No hand-off to a junior team after the contract is signed.",
    icon: "users",
  },
  {
    title: "Fixed scope, visible burn",
    description:
      "You get a costed plan before we start and a live board while we run. No surprise invoices at the end of a quarter.",
    icon: "gauge",
  },
  {
    title: "Compliance built in",
    description:
      "HIPAA, SOC 2, PCI-DSS, DPDP. We build to the standard from the first commit instead of retrofitting it before an audit.",
    icon: "shield-check",
  },
  {
    title: "You own everything",
    description:
      "Source, infrastructure, documentation, and pipelines are yours from day one, in your accounts, under your licence.",
    icon: "key",
  },
  {
    title: "Handover that works",
    description:
      "Runbooks, architecture decision records, and paired sessions so your team can take the wheel whenever they want it.",
    icon: "book",
  },
  {
    title: "Support with a number on it",
    description:
      "Response and resolution times written into the contract, with an on-call rotation behind them.",
    icon: "life-buoy",
  },
];

export const INDUSTRY_SHOWCASE = [
  {
    id: "healthcare",
    label: "Healthcare",
    href: "/industries/healthcare",
    headline: "Clinical-grade systems, consumer-grade interfaces",
    description:
      "Telemedicine, EHR integration, and remote monitoring built HIPAA-compliant from the first commit — because retrofitting compliance costs more than building it.",
    points: [
      "HL7 FHIR and EHR integrations",
      "HIPAA-compliant video and messaging",
      "Remote patient monitoring at scale",
    ],
    stat: { value: "10M+", label: "Patients served" },
  },
  {
    id: "fintech",
    label: "Fintech",
    href: "/industries/fintech",
    headline: "Money movement that reconciles every time",
    description:
      "Payments, lending, and wealth platforms with PCI-DSS pipelines, audit trails, and the reconciliation logic regulators ask about.",
    points: [
      "PCI-DSS certified payment flows",
      "KYC / AML onboarding",
      "Ledger and reconciliation engines",
    ],
    stat: { value: "$120M+", label: "Processed through our builds" },
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    href: "/industries/ecommerce",
    headline: "Storefronts that survive their own launch day",
    description:
      "Catalog, checkout, and fulfilment systems that hold their conversion rate when traffic multiplies overnight.",
    points: [
      "Headless commerce architecture",
      "Sub-second catalog and search",
      "Inventory and logistics sync",
    ],
    stat: { value: "100k+", label: "Daily orders handled" },
  },
  {
    id: "logistics",
    label: "Logistics",
    href: "/industries/logistics",
    headline: "Fleets, routes, and the last mile",
    description:
      "Dispatch, tracking, and route optimisation platforms built for operations teams who work in the field, not at a desk.",
    points: [
      "Live fleet tracking",
      "Route optimisation",
      "Driver and warehouse apps",
    ],
    stat: { value: "99.9%", label: "Platform uptime" },
  },
];
