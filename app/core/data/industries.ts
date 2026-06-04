import type { HeroStat, FeatureItem, ProcessStep } from "./services";

export type IndustryPage = {
  slug: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  heroStats: HeroStat[];
  features: FeatureItem[];
  process: ProcessStep[];
  useCases: string[];
  ctaText: string;
  metaTitle: string;
  metaDescription: string;
};

export const INDUSTRIES_DATA: Record<string, IndustryPage> = {
  healthcare: {
    slug: "healthcare",
    category: "Industries",
    title: "Healthcare Technology",
    tagline: "Digital Health Solutions That Save Lives",
    description:
      "We build HIPAA-compliant mobile and web applications for hospitals, clinics, insurers, and health-tech startups. From telemedicine platforms to AI-powered diagnostics, our healthcare engineering team understands both the technology and the compliance landscape.",
    heroStats: [
      { value: "80+", label: "Health Apps Delivered" },
      { value: "HIPAA", label: "Compliant by Design" },
      { value: "10M+", label: "Patients Served" },
      { value: "99.9%", label: "System Uptime" },
    ],
    features: [
      {
        title: "Telemedicine Platforms",
        description:
          "Video consultation apps with HIPAA-compliant WebRTC, appointment scheduling, e-prescriptions, and EMR integration.",
      },
      {
        title: "Electronic Health Records",
        description:
          "EHR and EMR systems with HL7 FHIR compliance, provider workflows, and patient portal integration.",
      },
      {
        title: "Remote Patient Monitoring",
        description:
          "IoT-connected wearable integrations for real-time vitals, chronic disease management, and alert systems.",
      },
      {
        title: "AI Diagnostics",
        description:
          "Computer vision models for medical imaging analysis, NLP for clinical notes, and predictive risk scoring.",
      },
      {
        title: "Hospital Management Systems",
        description:
          "End-to-end HMS with bed management, inventory, billing, pharmacy, and multi-department coordination.",
      },
      {
        title: "Health & Wellness Apps",
        description:
          "Consumer health apps with Apple HealthKit, Google Fit, fitness tracking, nutrition, and mental wellness features.",
      },
    ],
    process: [
      { step: "01", title: "Compliance Scoping", description: "HIPAA, GDPR, DPDP, and regional health regulation mapping before architecture begins." },
      { step: "02", title: "Clinical Workflow Design", description: "Shadow clinicians, map care pathways, and design workflows that reduce administrative burden." },
      { step: "03", title: "Secure Architecture", description: "PHI encryption at rest and in transit, audit logging, access controls, and BAAs." },
      { step: "04", title: "Interoperability", description: "HL7 FHIR, ICD-10, SNOMED CT, and EHR system integration (Epic, Cerner, Athenahealth)." },
      { step: "05", title: "Clinical Validation", description: "Usability testing with clinicians and patients before launch." },
      { step: "06", title: "Regulatory Submission", description: "FDA SaMD guidance, CE marking support, and ongoing compliance monitoring." },
    ],
    useCases: [
      "Telemedicine & Video Consultations",
      "Electronic Health Records (EHR)",
      "Remote Patient Monitoring",
      "AI Medical Imaging",
      "Hospital Management Systems",
      "Mental Health & Wellness Apps",
      "Clinical Trial Management",
      "Pharmacy & Prescription Apps",
    ],
    ctaText: "Build Your Health Tech Solution",
    metaTitle: "Healthcare App Development | NXTorbit",
    metaDescription:
      "NXTorbit builds HIPAA-compliant telemedicine, EHR, and AI healthcare applications. 80+ health apps delivered, 10M+ patients served.",
  },

  fintech: {
    slug: "fintech",
    category: "Industries",
    title: "Fintech Solutions",
    tagline: "Building the Future of Financial Services",
    description:
      "We engineer digital banking, payment, lending, and investment platforms for fintech startups and financial institutions. Our fintech team understands PCI-DSS, RBI guidelines, and the regulatory complexity of building in financial services.",
    heroStats: [
      { value: "60+", label: "Fintech Apps Built" },
      { value: "PCI-DSS", label: "Certified Approach" },
      { value: "$5B+", label: "Transactions Processed" },
      { value: "150ms", label: "Avg Payment Latency" },
    ],
    features: [
      {
        title: "Digital Banking",
        description:
          "Neobank and challenger bank apps with account management, KYC, transfers, statements, and card management.",
      },
      {
        title: "Payment Gateways",
        description:
          "PCI-DSS compliant payment processing with Stripe, Razorpay, Braintree, and direct acquiring integrations.",
      },
      {
        title: "Lending & Credit",
        description:
          "BNPL, personal loan, and credit line platforms with credit scoring, underwriting automation, and collections.",
      },
      {
        title: "Wealth Management",
        description:
          "Investment apps with portfolio management, robo-advisory, real-time market data, and algorithmic trading.",
      },
      {
        title: "KYC & Compliance",
        description:
          "Automated KYC/AML pipelines with document verification, liveness checks, and regulatory reporting.",
      },
      {
        title: "Crypto & DeFi",
        description:
          "Crypto exchange backends, DeFi protocol frontends, portfolio trackers, and Web3 wallet integrations.",
      },
    ],
    process: [
      { step: "01", title: "Regulatory Mapping", description: "Map your target markets to applicable regulations: RBI, PCI-DSS, FCA, SEC, GDPR, DPDP." },
      { step: "02", title: "Security Architecture", description: "Zero-trust network design, HSM integration, tokenization, and fraud prevention systems." },
      { step: "03", title: "Core Banking Integration", description: "CBS, payment rail (SWIFT, SEPA, UPI, ACH), and open banking API integration." },
      { step: "04", title: "Risk & Fraud Engine", description: "ML-based fraud detection, transaction monitoring, and rule-based risk scoring." },
      { step: "05", title: "Compliance Testing", description: "Penetration testing, PCI scope reduction, and regulatory sandbox testing." },
      { step: "06", title: "Launch & Scale", description: "Phased rollout with circuit breakers, fallback payment rails, and 24/7 NOC monitoring." },
    ],
    useCases: [
      "Neobanking & Digital Wallets",
      "Payment Gateway Integration",
      "Lending & BNPL Platforms",
      "Investment & Robo-Advisory",
      "KYC / AML Automation",
      "Crypto Exchange Platforms",
      "Insurance Technology (InsurTech)",
      "Open Banking APIs",
    ],
    ctaText: "Build Your Fintech Product",
    metaTitle: "Fintech App Development | NXTorbit",
    metaDescription:
      "NXTorbit builds PCI-DSS compliant payment, lending, and digital banking applications. 60+ fintech apps, $5B+ in transactions processed.",
  },

  education: {
    slug: "education",
    category: "Industries",
    title: "Education Technology",
    tagline: "Transforming How the World Learns",
    description:
      "We build e-learning platforms, LMS solutions, and edtech products that make education more accessible, engaging, and effective. From K-12 to corporate training, our team has shipped platforms used by millions of learners worldwide.",
    heroStats: [
      { value: "70+", label: "Edtech Apps Built" },
      { value: "5M+", label: "Learners Reached" },
      { value: "50+", label: "Countries" },
      { value: "SCORM", label: "& xAPI Compliant" },
    ],
    features: [
      {
        title: "Learning Management Systems",
        description:
          "Custom LMS platforms with course authoring, learner tracking, assessments, certificates, and SCORM/xAPI compliance.",
      },
      {
        title: "Live & Recorded Video",
        description:
          "Video streaming with Agora, Twilio, or Zoom SDK for live classes, recordings, and interactive virtual classrooms.",
      },
      {
        title: "AI-Powered Learning",
        description:
          "Adaptive learning paths, AI tutors, automated grading, and personalized content recommendations.",
      },
      {
        title: "Gamification",
        description:
          "Points, badges, leaderboards, streaks, and reward systems that keep learners engaged and coming back.",
      },
      {
        title: "Assessment & Proctoring",
        description:
          "Quizzes, coding challenges, video assessments, and AI-powered online proctoring for certifications.",
      },
      {
        title: "Mobile Learning",
        description:
          "Offline-first mobile apps with downloaded content, push notifications, and progress sync on reconnect.",
      },
    ],
    process: [
      { step: "01", title: "Pedagogy & UX Research", description: "Understand learner behavior, learning objectives, and instructional design requirements." },
      { step: "02", title: "Content Architecture", description: "Course structure, taxonomy, metadata schema, and content delivery network setup." },
      { step: "03", title: "Platform Development", description: "Core LMS, video player, assessment engine, and learner dashboard development." },
      { step: "04", title: "Integration", description: "SSO, payment gateways, CRM, Zoom/Meet, and third-party content providers." },
      { step: "05", title: "Mobile Apps", description: "iOS and Android apps with offline download, push reminders, and progress tracking." },
      { step: "06", title: "Analytics & Reporting", description: "Learner analytics, completion rates, assessment performance, and ROI dashboards." },
    ],
    useCases: [
      "Learning Management Systems (LMS)",
      "Live Online Classroom Platforms",
      "AI-Adaptive Learning",
      "Corporate Training & L&D",
      "K-12 Education Apps",
      "Test Prep & Competitive Exams",
      "Professional Certification Platforms",
      "Coding Bootcamp Platforms",
    ],
    ctaText: "Build Your Edtech Platform",
    metaTitle: "EdTech App Development | NXTorbit",
    metaDescription:
      "NXTorbit builds e-learning platforms, LMS, and edtech apps that reach millions of learners. SCORM compliant, AI-powered, mobile-first.",
  },

  ecommerce: {
    slug: "ecommerce",
    category: "Industries",
    title: "E-Commerce Solutions",
    tagline: "Commerce Platforms Built for Scale and Conversion",
    description:
      "We build high-converting e-commerce storefronts, multi-vendor marketplaces, and headless commerce platforms that handle peak traffic without flinching. Our team has powered platforms processing hundreds of millions in GMV.",
    heroStats: [
      { value: "100+", label: "Commerce Platforms" },
      { value: "$500M+", label: "GMV Processed" },
      { value: "3x", label: "Avg Conversion Lift" },
      { value: "Black Friday", label: "Traffic Ready" },
    ],
    features: [
      {
        title: "Headless Commerce",
        description:
          "Decoupled frontend (Next.js) with commerce backends — Shopify, BigCommerce, Medusa, or custom — for maximum flexibility.",
      },
      {
        title: "Multi-Vendor Marketplace",
        description:
          "Seller onboarding, product catalog management, commission engines, payout systems, and dispute resolution.",
      },
      {
        title: "Mobile Shopping Apps",
        description:
          "Native iOS and Android shopping apps with AR try-on, visual search, wishlists, and one-tap checkout.",
      },
      {
        title: "Checkout Optimization",
        description:
          "Guest checkout, address autocomplete, multi-payment methods, and A/B tested checkout flows that reduce cart abandonment.",
      },
      {
        title: "Inventory & Order Management",
        description:
          "Real-time inventory sync, multi-warehouse OMS, returns management, and 3PL integration.",
      },
      {
        title: "Personalization & AI",
        description:
          "ML-powered product recommendations, dynamic pricing, personalized search, and customer segmentation.",
      },
    ],
    process: [
      { step: "01", title: "Commerce Strategy", description: "Define your commerce model, platform choice, and integration landscape." },
      { step: "02", title: "UX & Conversion Design", description: "Conversion-optimized storefront design with heatmap and funnel analysis input." },
      { step: "03", title: "Platform Development", description: "Frontend storefront, backend APIs, and third-party integration development." },
      { step: "04", title: "Payment & Tax", description: "Multi-currency payments, GST/VAT tax calculation, and PCI-compliant checkout." },
      { step: "05", title: "Performance & Load Testing", description: "CDN optimization, database tuning, and load testing for 10x peak traffic." },
      { step: "06", title: "Launch & Growth", description: "A/B testing, SEO optimization, analytics dashboards, and post-launch CRO." },
    ],
    useCases: [
      "D2C E-Commerce Storefronts",
      "Multi-Vendor Marketplaces",
      "B2B Commerce Portals",
      "Mobile Shopping Apps",
      "Subscription Commerce",
      "Flash Sale & Group Buying",
      "Grocery & Quick Commerce",
      "Luxury & Fashion Commerce",
    ],
    ctaText: "Build Your Commerce Platform",
    metaTitle: "E-Commerce App Development | NXTorbit",
    metaDescription:
      "NXTorbit builds high-converting e-commerce platforms, marketplaces, and headless commerce solutions. $500M+ GMV processed across 100+ projects.",
  },

  logistics: {
    slug: "logistics",
    category: "Industries",
    title: "Logistics & Supply Chain",
    tagline: "Technology That Keeps the World Moving",
    description:
      "We build fleet management, delivery tracking, warehouse management, and supply chain visibility platforms for logistics companies, 3PLs, and on-demand delivery startups. Our systems handle millions of shipments and real-time tracking events daily.",
    heroStats: [
      { value: "50+", label: "Logistics Platforms" },
      { value: "5M+", label: "Daily Deliveries Tracked" },
      { value: "Real-time", label: "GPS Tracking" },
      { value: "40%", label: "Route Efficiency Gain" },
    ],
    features: [
      {
        title: "Fleet Management",
        description:
          "Real-time GPS tracking, driver management, vehicle maintenance scheduling, and fuel monitoring dashboards.",
      },
      {
        title: "Last-Mile Delivery",
        description:
          "Delivery driver apps, route optimization, proof of delivery, and customer notification systems.",
      },
      {
        title: "Warehouse Management",
        description:
          "WMS with pick-and-pack workflows, barcode/QR scanning, inventory management, and receiving automation.",
      },
      {
        title: "Supply Chain Visibility",
        description:
          "End-to-end shipment tracking, ETA prediction, exception management, and carrier API aggregation.",
      },
      {
        title: "Route Optimization",
        description:
          "AI-powered route planning with traffic data, time windows, vehicle capacity, and multi-stop optimization.",
      },
      {
        title: "Customer Tracking Portal",
        description:
          "Branded shipment tracking pages, SMS/email notifications, and delivery rescheduling self-service.",
      },
    ],
    process: [
      { step: "01", title: "Operations Mapping", description: "Map your fulfillment workflows, integration points, and data sources before building." },
      { step: "02", title: "Tracking Infrastructure", description: "GPS device integration, event streaming with Kafka, and real-time mapping layer." },
      { step: "03", title: "Driver & Dispatcher Apps", description: "Native mobile apps for drivers and a web dashboard for operations teams." },
      { step: "04", title: "ERP & TMS Integration", description: "SAP, Oracle, and TMS integration for order management and carrier APIs." },
      { step: "05", title: "Analytics Layer", description: "KPI dashboards for on-time rates, delivery costs, utilization, and SLA performance." },
      { step: "06", title: "Scale & Optimize", description: "ML route optimization, predictive ETA, and continuous operational improvement." },
    ],
    useCases: [
      "Fleet Management & Tracking",
      "Last-Mile Delivery Apps",
      "Warehouse Management (WMS)",
      "On-Demand Delivery Platforms",
      "Freight & Cargo Management",
      "Cold Chain Monitoring",
      "Reverse Logistics & Returns",
      "Supply Chain Analytics",
    ],
    ctaText: "Build Your Logistics Platform",
    metaTitle: "Logistics App Development | NXTorbit",
    metaDescription:
      "NXTorbit builds fleet management, last-mile delivery, and supply chain visibility platforms. 5M+ daily deliveries tracked across 50+ logistics apps.",
  },

  entertainment: {
    slug: "entertainment",
    category: "Industries",
    title: "Entertainment & Media",
    tagline: "Engaging Experiences at Massive Scale",
    description:
      "We build streaming platforms, creator tools, fan engagement apps, and gaming backends for media companies and entertainment startups. Our systems handle millions of concurrent streams and real-time interactions — without buffering.",
    heroStats: [
      { value: "40+", label: "Entertainment Apps" },
      { value: "50M+", label: "Daily Active Users" },
      { value: "4K", label: "Streaming Support" },
      { value: "< 3s", label: "Stream Start Time" },
    ],
    features: [
      {
        title: "Video Streaming Platforms",
        description:
          "OTT platforms with adaptive bitrate streaming (HLS/DASH), CDN integration, DRM, and multi-device support.",
      },
      {
        title: "Live Streaming",
        description:
          "Low-latency live streaming with real-time chat, super chats, polls, and interactive viewer engagement.",
      },
      {
        title: "Creator & Fan Platforms",
        description:
          "Creator monetization platforms with subscription tiers, exclusive content, direct messaging, and tipping.",
      },
      {
        title: "Social Entertainment",
        description:
          "Short-form video, social audio (Spaces/Clubhouse), and community-driven entertainment products.",
      },
      {
        title: "Music & Podcast Apps",
        description:
          "Streaming players, offline downloads, playlist management, lyrics sync, and podcast RSS aggregation.",
      },
      {
        title: "Gaming Backends",
        description:
          "Game server infrastructure, matchmaking, leaderboards, in-game purchases, and anti-cheat systems.",
      },
    ],
    process: [
      { step: "01", title: "Content Architecture", description: "CDN strategy, encoding pipeline, DRM licensing, and content delivery network setup." },
      { step: "02", title: "UX for Engagement", description: "Design for discovery, binge-watching, creator-to-fan connection, and retention loops." },
      { step: "03", title: "Streaming Infrastructure", description: "Wowza, AWS MediaLive, or MUX-based streaming with adaptive bitrate and failover." },
      { step: "04", title: "Monetization Layer", description: "Subscription billing, AVOD, TVOD, and in-app purchases with Stripe and IAP." },
      { step: "05", title: "Multi-Platform Apps", description: "iOS, Android, Smart TV (Fire TV, tvOS, Android TV), and web player development." },
      { step: "06", title: "Scale & Reliability", description: "Auto-scaling infrastructure, CDN tuning, and chaos engineering for launch-day resilience." },
    ],
    useCases: [
      "OTT Streaming Platforms",
      "Live Streaming & Events",
      "Creator Monetization Apps",
      "Music & Podcast Streaming",
      "Social Entertainment & Rooms",
      "Fan Engagement Platforms",
      "Gaming Backends & Services",
      "Sports & Live Score Apps",
    ],
    ctaText: "Build Your Entertainment Platform",
    metaTitle: "Entertainment App Development | NXTorbit",
    metaDescription:
      "NXTorbit builds OTT streaming, creator platforms, and entertainment apps. 50M+ DAU served across 40+ entertainment products.",
  },
};
