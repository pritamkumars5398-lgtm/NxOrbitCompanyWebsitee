/** Copy and content for the homepage. Kept out of JSX so sections stay layout-only. */

export const HERO = {
  eyebrow: "WE KEEP IT SIMPLE",
  headline: "Turning Complex Business Operations into Connected Enterprise Systems.",
  /** Word index from which the headline switches to the brand gradient. */
  gradientFrom: 4,
  lead: "NXT Orbit helps manufacturing and service businesses simplify complex operations through customized enterprise technology. From ERP and CRM to AI, cloud, and digital platforms, we build solutions that integrate seamlessly with your business, improve operational visibility, and support long-term growth.",
  primaryCta: { label: "Book a Consultation", href: "/contact" },
  secondaryCta: { label: "Explore Our Solutions", href: "#solutions" },
  stats: [
    { value: "5", label: "Years Building Enterprise Systems" },
    { value: "50+", label: "Enterprise Systems Delivered" },
    { value: "30+", label: "Manufacturing & Service Businesses Served" },
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
      "We design and build high-performance mobile applications utilizing Swift and Kotlin for native excellence, or React Native and Flutter for cross-platform efficiency. From offline-first architecture to automated app store deployment and secure hardware integration, we build apps that stay fast and scale cleanly.",
    href: "/services/mobile",
    icon: "smartphone",
    points: ["Swift & Kotlin", "React Native", "Flutter", "App Store strategy"],
    featured: true,
  },
  {
    title: "AI & ML Solutions",
    description:
      "We implement custom LLM pipelines, Retrieval-Augmented Generation (RAG) systems, and intelligent agents tailored to your business data. Whether you need computer vision for automated inspection, forecasting models for planning, or natural language search, we turn raw data into production-ready automation.",
    href: "/services/ai",
    icon: "sparkles",
    points: ["LLM pipelines", "Computer vision", "Forecasting"],
  },
  {
    title: "Web App Development",
    description:
      "We build modular web platforms, custom SaaS portals, and internal dashboards using Next.js and robust, accessible design systems. Our development focuses on fast initial render speeds, real-time collaboration features, secure integrations, and maintaining clean structures that won't slow you down.",
    href: "/services/web",
    icon: "globe",
    points: ["Next.js", "Design systems", "Realtime"],
  },
  {
    title: "DevOps & Cloud",
    description:
      "We architect high-availability cloud infrastructure on AWS and GCP using infrastructure-as-code and container orchestration. By setting up automated CI/CD pipelines, proactive security alerts, and advanced monitoring, we keep your systems online and running at peak performance while keeping bills optimized.",
    href: "/services/devops",
    icon: "server",
    points: ["AWS & GCP", "Kubernetes", "CI/CD"],
  },
  {
    title: "UI/UX Design",
    description:
      "We conduct user research, outline interactive user journeys, and construct comprehensive Figma design systems. By bridging the gap between product strategy and frontend development, we design digital interfaces that are visually exceptional, accessible, and ready for your engineering team to build.",
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
      "We map your processes, systems, and constraints directly with your team. You get a costed, milestone-based plan — not a proposal deck.",
    outputs: ["Technical audit", "Scope & estimate", "Risk register"],
  },
  {
    step: "02",
    title: "Architecture & Design",
    description:
      "Workflows, data models, and integration points validated against your real systems before a line of production code exists.",
    outputs: ["System architecture", "Integration design", "Prototype sign-off"],
  },
  {
    step: "03",
    title: "Build",
    description:
      "Development in fixed sprints against a visible board. You see working software on a fixed cadence, not a status report.",
    outputs: ["Sprint demos", "CI/CD from day one", "Automated testing"],
  },
  {
    step: "04",
    title: "Scale & Support",
    description:
      "Go-live is the start, not the finish — monitoring, performance tuning, and a support SLA that outlives the launch.",
    outputs: ["Observability", "Performance tuning", "Ongoing roadmap"],
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
    id: "manufacturing",
    label: "Manufacturing",
    href: "/industries/manufacturing",
    headline: "Engineered for Floor Operations, Supply Chains & Precision",
    description:
      "Every industry has unique workflows, compliance requirements, and operational priorities. Our solutions are designed around shop-floor and plant-level realities — not generic software.",
    points: [
      "Shop floor execution & machine telemetry",
      "Automated BOM & inventory reconciliation",
      "ERP & warehouse bi-directional sync",
    ],
    stat: { value: "99.8%", label: "Inventory accuracy" },
    image3d: "/assets/warehouse_wms_3d.jpg",
  },
  {
    id: "logistics",
    label: "Logistics & Supply Chain",
    href: "/industries/logistics",
    headline: "Fleets, Routes, Warehouses, and the Last Mile",
    description:
      "Dispatch, fleet tracking, freight execution, and warehouse management systems built for operations teams who work in real-time.",
    points: [
      "Live multi-modal shipment tracking",
      "Automated GRN, picking, and dispatch manifests",
      "Driver and operator workflow applications",
    ],
    stat: { value: "99.9%", label: "Platform uptime" },
    image3d: "/assets/logistics_map_truck.jpg",
  },
  {
    id: "bfsi",
    label: "BFSI",
    href: "/industries/fintech",
    headline: "Institutional Trust, Financial Logic & Regulatory Compliance",
    description:
      "Decoupled billing modules, transactional reporting, and lending engines built to comply with financial security directives and audit standards.",
    points: [
      "PCI-DSS compliant transactional pipelines",
      "Automated reconciliation & general ledger sync",
      "Real-time fraud and audit telemetry",
    ],
    stat: { value: "$120M+", label: "Processed through our builds" },
    image3d: "/assets/fintech_3d.jpg",
  },
  {
    id: "retail",
    label: "Retail & Distribution",
    href: "/industries/ecommerce",
    headline: "Omnichannel Inventory, Order Routing & Point of Sale",
    description:
      "Connecting regional warehouses, distribution centers, and digital retail storefronts into a unified live inventory engine.",
    points: [
      "Sub-second multi-location stock sync",
      "Automated distributor replenishment",
      "Real-time order tracking & fulfillment",
    ],
    stat: { value: "100k+", label: "Daily orders handled" },
    image3d: "/assets/ecommerce_3d.jpg",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    href: "/industries/healthcare",
    headline: "Clinical-Grade Systems, Consumer-Grade Interfaces",
    description:
      "Secure patient management, medical logistics, and EHR integrations built HIPAA-compliant from day one.",
    points: [
      "HIPAA-compliant data workflows",
      "Patient appointment & portal systems",
      "Secure medical record encryption",
    ],
    stat: { value: "10M+", label: "Records securely managed" },
    image3d: "/assets/healthcare_3d.jpg",
  },
  {
    id: "professional-services",
    label: "Professional Services",
    href: "/services",
    headline: "Client Portals, Resource Allocation & Project Automation",
    description:
      "Streamlined workflows that automate time logging, milestone billing, and client collaboration for service firms.",
    points: [
      "Custom client collaboration workspaces",
      "Resource scheduling & utilization analytics",
      "Milestone-driven automated invoicing",
    ],
    stat: { value: "40%", label: "Reduction in admin overhead" },
    image3d: "/assets/prof_services_3d.jpg",
  },
];
