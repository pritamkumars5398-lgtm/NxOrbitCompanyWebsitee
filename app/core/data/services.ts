export type HeroStat = { value: string; label: string };
export type FeatureItem = { title: string; description: string };
export type ProcessStep = { step: string; title: string; description: string };

export type ServicePage = {
  slug: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  heroStats: HeroStat[];
  features: FeatureItem[];
  process: ProcessStep[];
  techStack: string[];
  ctaText: string;
  metaTitle: string;
  metaDescription: string;
};

export const SERVICES_DATA: Record<string, ServicePage> = {
  mobile: {
    slug: "mobile",
    category: "Services",
    title: "Mobile App Development",
    tagline: "Build World-Class Mobile Experiences",
    description:
      "From consumer apps to enterprise mobility solutions, we design and engineer mobile applications that deliver real business outcomes. With 1400+ apps shipped across iOS and Android, our team knows what it takes to succeed in the App Store and Google Play.",
    heroStats: [
      { value: "1400+", label: "Apps Delivered" },
      { value: "35+", label: "Countries Served" },
      { value: "200+", label: "Mobile Engineers" },
      { value: "98%", label: "Client Retention" },
    ],
    features: [
      {
        title: "Native iOS Development",
        description:
          "Swift and SwiftUI apps that leverage the full Apple ecosystem — ARKit, HealthKit, Core ML, Siri Shortcuts, and StoreKit.",
      },
      {
        title: "Native Android Development",
        description:
          "Kotlin-first Android apps optimized for performance, battery life, and discovery on Google Play.",
      },
      {
        title: "React Native",
        description:
          "One codebase, two platforms. We build production-grade React Native apps used by millions of daily active users.",
      },
      {
        title: "Flutter",
        description:
          "Google's UI toolkit for beautiful, natively compiled applications from a single codebase with 60fps rendering.",
      },
      {
        title: "App Architecture & Scalability",
        description:
          "MVVM, Clean Architecture, and modular codebases designed to scale alongside your user base without rewrites.",
      },
      {
        title: "Post-Launch Support",
        description:
          "Ongoing maintenance, performance monitoring, OS update compatibility, and iterative feature roadmap execution.",
      },
    ],
    process: [
      { step: "01", title: "Discovery & Strategy", description: "We analyze your audience, define KPIs, and map out the product strategy and technical approach." },
      { step: "02", title: "UX/UI Design", description: "Wireframes, interactive prototypes, and pixel-perfect designs aligned with your brand identity." },
      { step: "03", title: "Agile Development", description: "Sprint-based development with weekly demos, test-driven code, and continuous integration." },
      { step: "04", title: "QA & Testing", description: "Manual and automated testing across real devices, OS versions, and network conditions." },
      { step: "05", title: "App Store Launch", description: "Submission to App Store and Google Play with ASO optimization for discoverability." },
      { step: "06", title: "Grow & Iterate", description: "Analytics, A/B testing, push notifications, and ongoing feature development." },
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS", "GraphQL", "Redux"],
    ctaText: "Start Your Mobile Project",
    metaTitle: "Mobile App Development Company | NXTorbit",
    metaDescription:
      "NXTorbit builds high-performance iOS and Android mobile apps for startups and enterprises. 1400+ apps delivered across 35+ countries. Get a free consultation.",
  },

  web: {
    slug: "web",
    category: "Services",
    title: "Web App Development",
    tagline: "Enterprise-Grade Web Applications",
    description:
      "We engineer scalable, high-performance web applications that power businesses globally. From SaaS platforms to customer-facing portals, our full-stack team delivers solutions built to handle millions of users with 99.9% uptime.",
    heroStats: [
      { value: "500+", label: "Web Apps Built" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "10+", label: "Years Experience" },
      { value: "200+", label: "Full-Stack Engineers" },
    ],
    features: [
      {
        title: "Frontend Engineering",
        description:
          "React, Next.js, and TypeScript SPAs with exceptional UX, accessibility standards, and Core Web Vitals scores.",
      },
      {
        title: "Backend & APIs",
        description:
          "Scalable Node.js, Python, and Go backends with RESTful and GraphQL APIs designed for growth.",
      },
      {
        title: "SaaS Platform Development",
        description:
          "Multi-tenant architectures, subscription billing, role-based access control, and usage metering.",
      },
      {
        title: "Progressive Web Apps",
        description:
          "Offline-first PWAs that deliver native app-like experiences in the browser — no App Store required.",
      },
      {
        title: "E-Commerce Solutions",
        description:
          "Custom storefronts, headless commerce, and marketplace platforms built to handle peak traffic at scale.",
      },
      {
        title: "Performance Optimization",
        description:
          "Core Web Vitals tuning, CDN strategy, database query optimization, and sub-second load times.",
      },
    ],
    process: [
      { step: "01", title: "Architecture Design", description: "Define tech stack, system design, and scalability requirements before a line of code is written." },
      { step: "02", title: "Design System", description: "Component libraries, design tokens, and responsive layouts for consistent UI at any scale." },
      { step: "03", title: "Frontend Development", description: "Component-driven development with Storybook, accessibility checks, and design system integration." },
      { step: "04", title: "Backend & Database", description: "API development, schema design, caching layers, and message queue management." },
      { step: "05", title: "Testing & Security", description: "Unit, integration, and end-to-end tests. Security audits and penetration testing included." },
      { step: "06", title: "Deploy & Monitor", description: "CI/CD pipelines, cloud deployment, real-time alerting, and performance dashboards." },
    ],
    techStack: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "Docker"],
    ctaText: "Build Your Web Application",
    metaTitle: "Web App Development Company | NXTorbit",
    metaDescription:
      "NXTorbit engineers scalable React and Next.js web applications for enterprises and startups. Full-stack development with 99.9% uptime SLA.",
  },

  ai: {
    slug: "ai",
    category: "Services",
    title: "AI & ML Solutions",
    tagline: "Intelligence That Drives Real Business Value",
    description:
      "We build AI-powered products and integrate machine learning into existing systems. From LLM-powered applications to custom computer vision pipelines, our AI team turns raw data into competitive advantage — faster than you'd expect.",
    heroStats: [
      { value: "50+", label: "AI Projects Delivered" },
      { value: "10+", label: "AI/ML Engineers" },
      { value: "GPT-4o", label: "& Claude Integration" },
      { value: "3x", label: "Average Efficiency Gain" },
    ],
    features: [
      {
        title: "LLM Integration & RAG",
        description:
          "GPT-4o, Claude, and Gemini integrations with retrieval-augmented generation for enterprise knowledge bases and intelligent search.",
      },
      {
        title: "Custom ML Models",
        description:
          "Predictive analytics, recommendation engines, and classification models trained on your proprietary data.",
      },
      {
        title: "Computer Vision",
        description:
          "Image recognition, object detection, OCR, and real-time video analytics for industrial and consumer applications.",
      },
      {
        title: "Natural Language Processing",
        description:
          "Sentiment analysis, text classification, named entity extraction, and multilingual NLP pipelines.",
      },
      {
        title: "AI Agents & Chatbots",
        description:
          "Intelligent conversational agents that handle complex multi-step workflows, customer interactions, and internal automation.",
      },
      {
        title: "MLOps & Model Deployment",
        description:
          "Production ML pipelines, model versioning, drift detection, and continuous retraining workflows.",
      },
    ],
    process: [
      { step: "01", title: "Data Assessment", description: "Audit your existing data assets and map the AI opportunity landscape for maximum ROI." },
      { step: "02", title: "Use Case Definition", description: "Prioritize high-value AI use cases and define measurable success metrics." },
      { step: "03", title: "Data Engineering", description: "Data pipelines, cleaning, labeling, and feature engineering to feed model training." },
      { step: "04", title: "Model Development", description: "Algorithm selection, training, validation, hyperparameter tuning, and evaluation." },
      { step: "05", title: "Integration", description: "Seamlessly embed AI capabilities into your existing product or internal workflow." },
      { step: "06", title: "Monitor & Improve", description: "Continuous performance monitoring, A/B testing, and iterative model improvement." },
    ],
    techStack: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Anthropic", "HuggingFace", "LangChain", "AWS SageMaker"],
    ctaText: "Explore AI Solutions",
    metaTitle: "AI & ML Development Services | NXTorbit",
    metaDescription:
      "NXTorbit builds AI-powered applications, LLM integrations, and custom ML solutions for enterprises. Transform your business with intelligent automation.",
  },

  design: {
    slug: "design",
    category: "Services",
    title: "UI/UX Design",
    tagline: "Design That Converts, Delights, and Scales",
    description:
      "Our design team creates digital experiences that balance aesthetics with function. From early-stage discovery through production-ready design systems, we help products stand out and convert — grounded in real user research.",
    heroStats: [
      { value: "800+", label: "Screens Designed" },
      { value: "40+", label: "Design Experts" },
      { value: "4.9★", label: "Avg Design Rating" },
      { value: "2x", label: "Avg Conversion Lift" },
    ],
    features: [
      {
        title: "User Research",
        description:
          "User interviews, competitive analysis, journey mapping, and persona development to ground every design decision in real data.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Low to high-fidelity wireframes and interactive prototypes that validate ideas before a single line of code is written.",
      },
      {
        title: "Visual Design",
        description:
          "Stunning, pixel-perfect visual designs that align with your brand identity and resonate emotionally with your users.",
      },
      {
        title: "Design Systems",
        description:
          "Scalable, token-based design systems with component libraries for consistent experiences across every touchpoint.",
      },
      {
        title: "Interaction Design",
        description:
          "Micro-animations, gestures, and transitions that make interactions feel natural, fast, and genuinely delightful.",
      },
      {
        title: "Accessibility (WCAG)",
        description:
          "WCAG 2.1 AA compliant designs ensuring your product is usable by everyone, regardless of ability.",
      },
    ],
    process: [
      { step: "01", title: "Research & Discovery", description: "Stakeholder interviews, user research, heuristic evaluation, and competitive benchmarking." },
      { step: "02", title: "Information Architecture", description: "Sitemaps, user flows, content hierarchy, and navigation structure definition." },
      { step: "03", title: "Wireframes", description: "Low-fidelity sketches to high-fidelity wireframes validating layout and interaction patterns." },
      { step: "04", title: "Visual Design", description: "High-fidelity mockups with your brand language, color system, and typography." },
      { step: "05", title: "Prototyping & Testing", description: "Clickable prototypes tested with real users. Iterate until the experience is right." },
      { step: "06", title: "Handoff & Support", description: "Developer-ready Figma specs with ongoing design support during the build phase." },
    ],
    techStack: ["Figma", "Adobe XD", "Principle", "Zeplin", "Lottie", "Framer", "Maze", "InVision"],
    ctaText: "Start Your Design Project",
    metaTitle: "UI/UX Design Services | NXTorbit",
    metaDescription:
      "NXTorbit's UI/UX design team creates beautiful, high-converting digital experiences for mobile and web. Research-driven design that scales.",
  },

  blockchain: {
    slug: "blockchain",
    category: "Services",
    title: "Blockchain Development",
    tagline: "Building the Decentralized Future",
    description:
      "We design and engineer blockchain solutions across DeFi, NFTs, DAO governance, and enterprise use cases. Our team combines deep protocol knowledge with product thinking to deliver Web3 products that are secure, scalable, and production-ready.",
    heroStats: [
      { value: "30+", label: "Blockchain Projects" },
      { value: "5+", label: "Chains Supported" },
      { value: "$500M+", label: "TVL Deployed" },
      { value: "15+", label: "Smart Contract Audits" },
    ],
    features: [
      {
        title: "Smart Contract Development",
        description:
          "Solidity and Rust smart contracts for Ethereum, Polygon, Solana, Avalanche, and other EVM-compatible chains.",
      },
      {
        title: "DeFi Protocols",
        description:
          "AMMs, lending protocols, yield aggregators, and liquidity management platforms with gas-optimized contracts.",
      },
      {
        title: "NFT Platforms",
        description:
          "NFT marketplaces, minting platforms, and on-chain royalty management systems at any throughput.",
      },
      {
        title: "DAO & Governance",
        description:
          "Governance token design, on-chain voting mechanisms, treasury management contracts, and multi-sig solutions.",
      },
      {
        title: "Crypto Wallets",
        description:
          "Custodial and non-custodial wallet solutions with multi-signature support, hardware wallet integration, and DApp connectivity.",
      },
      {
        title: "Enterprise Blockchain",
        description:
          "Private and permissioned blockchain networks for supply chain, healthcare, trade finance, and identity management.",
      },
    ],
    process: [
      { step: "01", title: "Tokenomics Design", description: "Token economic model design, incentive alignment, vesting schedules, and governance structure." },
      { step: "02", title: "Protocol Architecture", description: "Chain selection, contract architecture, oracle strategy, and cross-chain bridge design." },
      { step: "03", title: "Smart Contract Dev", description: "Test-driven smart contract development with 100% unit test coverage and gas profiling." },
      { step: "04", title: "Security Audit", description: "Internal code review followed by a third-party smart contract security audit." },
      { step: "05", title: "Frontend & UX", description: "Web3 frontend with MetaMask, WalletConnect, and multi-wallet support." },
      { step: "06", title: "Mainnet Launch", description: "Staged deployment from testnet to mainnet with monitoring dashboards and incident response." },
    ],
    techStack: ["Solidity", "Ethereum", "Polygon", "Hardhat", "ethers.js", "Web3.js", "IPFS", "The Graph"],
    ctaText: "Build Your Blockchain Solution",
    metaTitle: "Blockchain Development Company | NXTorbit",
    metaDescription:
      "NXTorbit builds DeFi protocols, NFT platforms, and enterprise blockchain solutions. Expert Solidity developers and Web3 product teams.",
  },

  devops: {
    slug: "devops",
    category: "Services",
    title: "DevOps & Cloud Engineering",
    tagline: "Ship Faster. Scale Smarter. Sleep Better.",
    description:
      "We help engineering teams move from manual deployments to automated, observable, and resilient cloud infrastructure. Our DevOps practice reduces deployment time by up to 70% and eliminates the operational toil that holds teams back.",
    heroStats: [
      { value: "200+", label: "Cloud Projects" },
      { value: "99.99%", label: "Uptime Achieved" },
      { value: "70%", label: "Deploy Time Reduction" },
      { value: "AWS", label: "Advanced Partner" },
    ],
    features: [
      {
        title: "CI/CD Pipelines",
        description:
          "GitHub Actions, GitLab CI, and Jenkins pipelines for automated testing, building, and zero-downtime deployments.",
      },
      {
        title: "Cloud Migration",
        description:
          "Lift-and-shift to cloud-native migration strategies for AWS, GCP, and Azure with minimal business disruption.",
      },
      {
        title: "Kubernetes & Containers",
        description:
          "EKS, GKE, and self-managed Kubernetes clusters with Helm charts, Istio service mesh, and ArgoCD GitOps.",
      },
      {
        title: "Infrastructure as Code",
        description:
          "Terraform and Pulumi for reproducible, version-controlled, peer-reviewed cloud infrastructure.",
      },
      {
        title: "Observability Stack",
        description:
          "Datadog, Prometheus, Grafana, and ELK stack for metrics, logs, traces, and intelligent alerting.",
      },
      {
        title: "Security & Compliance",
        description:
          "DevSecOps integration, vulnerability scanning, secrets management with Vault, and compliance automation.",
      },
    ],
    process: [
      { step: "01", title: "Infrastructure Audit", description: "Assess current infrastructure, identify bottlenecks, security gaps, and cost inefficiencies." },
      { step: "02", title: "Architecture Design", description: "Cloud architecture blueprints with high availability, disaster recovery, and cost optimization." },
      { step: "03", title: "IaC Implementation", description: "Codify all infrastructure with Terraform and establish GitOps delivery workflows." },
      { step: "04", title: "CI/CD Rollout", description: "Build automated pipelines for every team and service, with staged rollout strategies." },
      { step: "05", title: "Observability Setup", description: "Configure monitoring, alerting, dashboards, and on-call runbooks from day one." },
      { step: "06", title: "Continuous Optimization", description: "Ongoing cost rightsizing, capacity planning, and security posture hardening." },
    ],
    techStack: ["AWS", "GCP", "Azure", "Terraform", "Kubernetes", "Docker", "GitHub Actions", "Prometheus"],
    ctaText: "Modernize Your Infrastructure",
    metaTitle: "DevOps & Cloud Engineering Services | NXTorbit",
    metaDescription:
      "NXTorbit provides DevOps consulting, CI/CD pipelines, Kubernetes, and cloud migration for engineering teams. Ship faster with confidence.",
  },
};
