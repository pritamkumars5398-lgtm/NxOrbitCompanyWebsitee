import type { HeroStat, FeatureItem, ProcessStep } from "./services";

export type TechPage = {
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

export const TECHNOLOGY_DATA: Record<string, TechPage> = {
  "react-native": {
    slug: "react-native",
    category: "Technology",
    title: "React Native Development",
    tagline: "One Codebase. Two Platforms. Zero Compromise.",
    description:
      "React Native lets you build truly native iOS and Android apps from a single JavaScript codebase. At NXTorbit, we've shipped 600+ React Native apps — from scrappy startups to apps with tens of millions of users.",
    heroStats: [
      { value: "600+", label: "React Native Apps" },
      { value: "60fps", label: "Smooth Animations" },
      { value: "40%", label: "Faster Time-to-Market" },
      { value: "95%", label: "Code Reuse Rate" },
    ],
    features: [
      {
        title: "Native Performance",
        description:
          "We write native modules in Swift and Kotlin where JavaScript can't keep up — ensuring 60fps animations and instant gestures.",
      },
      {
        title: "Expo & Bare Workflow",
        description:
          "We use Expo for rapid prototyping and bare React Native for full native control — whichever suits your project's needs.",
      },
      {
        title: "State Management",
        description:
          "Redux Toolkit, Zustand, Jotai, and React Query for predictable, performant state across complex app flows.",
      },
      {
        title: "Push Notifications",
        description:
          "FCM, APNs, and Expo Notifications with segmentation, deep linking, and rich media support out of the box.",
      },
      {
        title: "OTA Updates",
        description:
          "CodePush and Expo Updates for over-the-air JavaScript updates — ship bug fixes without App Store approval delays.",
      },
      {
        title: "Testing & CI/CD",
        description:
          "Jest, Detox, and Maestro for unit and end-to-end tests. Fastlane + GitHub Actions for automated build and deployment.",
      },
    ],
    process: [
      { step: "01", title: "Architecture Planning", description: "Navigation structure, state strategy, native module requirements, and monorepo setup." },
      { step: "02", title: "UI Component Library", description: "Custom design system in React Native with shared tokens for iOS and Android." },
      { step: "03", title: "Core Feature Development", description: "Sprint-based development with continuous integration and TestFlight/Play Console builds." },
      { step: "04", title: "Native Module Integration", description: "Camera, biometrics, maps, Bluetooth, and other device capabilities via native modules." },
      { step: "05", title: "QA Across Devices", description: "Testing on real iOS and Android devices across multiple OS versions and screen sizes." },
      { step: "06", title: "Store Submission", description: "App Store and Google Play submission with ASO, screenshots, and review support." },
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "React Query", "Reanimated", "Fastlane", "Jest"],
    ctaText: "Build Your React Native App",
    metaTitle: "React Native Development Company | NXTorbit",
    metaDescription:
      "NXTorbit builds high-performance React Native apps for iOS and Android. 600+ apps delivered with native performance and 95% code reuse.",
  },

  flutter: {
    slug: "flutter",
    category: "Technology",
    title: "Flutter Development",
    tagline: "Beautiful Apps. Any Platform. One Team.",
    description:
      "Flutter by Google compiles to native ARM code, giving you silky-smooth 60/120fps UIs on iOS, Android, web, and desktop from a single Dart codebase. We've delivered 200+ Flutter apps across consumer and enterprise markets.",
    heroStats: [
      { value: "200+", label: "Flutter Apps Shipped" },
      { value: "120fps", label: "UI Rendering" },
      { value: "6", label: "Platforms Supported" },
      { value: "30%", label: "Cost vs. Native" },
    ],
    features: [
      {
        title: "Cross-Platform by Default",
        description:
          "One Flutter codebase targets iOS, Android, web, Windows, macOS, and Linux — reducing cost and accelerating delivery.",
      },
      {
        title: "Custom Widget Engine",
        description:
          "Flutter's rendering engine gives you pixel-perfect UI on every platform without relying on native UI components.",
      },
      {
        title: "State Management",
        description:
          "Riverpod, BLoC, Provider, and GetX — we choose the right pattern for your app's complexity and team size.",
      },
      {
        title: "Platform Channel Integration",
        description:
          "Access native APIs — camera, biometrics, Bluetooth, GPS — through Flutter's platform channels with Swift/Kotlin bridges.",
      },
      {
        title: "Flutter Web & Desktop",
        description:
          "Extend your mobile app to web and desktop with the same codebase for internal tools, dashboards, and admin panels.",
      },
      {
        title: "Firebase Integration",
        description:
          "FlutterFire plugins for Firestore, Auth, Analytics, Remote Config, and Crashlytics — production-ready from day one.",
      },
    ],
    process: [
      { step: "01", title: "Platform Strategy", description: "Decide which platforms to target, define the architecture, and plan state management." },
      { step: "02", title: "Design in Flutter", description: "Implement your design system as a Flutter widget library for perfect fidelity." },
      { step: "03", title: "Feature Development", description: "Iterative sprints with continuous builds via Codemagic or Bitrise." },
      { step: "04", title: "Native Integrations", description: "Platform channels for any native API your app requires." },
      { step: "05", title: "Performance Profiling", description: "DevTools profiling to eliminate jank, reduce memory leaks, and optimize build size." },
      { step: "06", title: "Multi-Store Release", description: "Simultaneous release to App Store, Google Play, and web if applicable." },
    ],
    techStack: ["Flutter", "Dart", "Riverpod", "BLoC", "Firebase", "Codemagic", "FlutterFire", "Dio"],
    ctaText: "Start Your Flutter Project",
    metaTitle: "Flutter App Development Company | NXTorbit",
    metaDescription:
      "NXTorbit builds beautiful Flutter apps for iOS, Android, and web from a single codebase. Expert Dart developers with 200+ apps shipped.",
  },

  ios: {
    slug: "ios",
    category: "Technology",
    title: "iOS App Development",
    tagline: "Premium iOS Experiences Built for Apple Users",
    description:
      "We build native iOS applications using Swift and SwiftUI that take full advantage of the Apple ecosystem. From iPhone to iPad, Apple Watch, and Apple TV, our iOS team delivers apps that feel right at home on every Apple device.",
    heroStats: [
      { value: "400+", label: "iOS Apps Delivered" },
      { value: "Swift", label: "Native Codebase" },
      { value: "4.8★", label: "Avg App Store Rating" },
      { value: "15+", label: "Apple Frameworks Used" },
    ],
    features: [
      {
        title: "Swift & SwiftUI",
        description:
          "Modern Swift and SwiftUI development with type safety, concurrency (async/await), and declarative UI patterns.",
      },
      {
        title: "Apple Ecosystem Integration",
        description:
          "ARKit, Core ML, HealthKit, HomeKit, CarPlay, WidgetKit, and StoreKit — we use the platform's full potential.",
      },
      {
        title: "Core Data & CloudKit",
        description:
          "Local persistence with Core Data and seamless iCloud sync via CloudKit for a native Apple experience.",
      },
      {
        title: "App Performance",
        description:
          "Instruments profiling for memory, CPU, and energy — apps that are fast, efficient, and battery-friendly.",
      },
      {
        title: "In-App Purchases & Subscriptions",
        description:
          "StoreKit 2 implementation for one-time purchases, auto-renewable subscriptions, and family sharing.",
      },
      {
        title: "Apple Design Guidelines",
        description:
          "Human Interface Guidelines compliance for App Store approval, accessibility, and a familiar Apple-native feel.",
      },
    ],
    process: [
      { step: "01", title: "iOS Architecture", description: "MVVM, Clean Architecture, and modular Swift packages for maintainable codebases." },
      { step: "02", title: "Xcode & CI Setup", description: "Xcode project setup, code signing, and Fastlane CI/CD from day one." },
      { step: "03", title: "Core Development", description: "Feature-by-feature Swift development with unit and UI tests." },
      { step: "04", title: "Apple Integration", description: "Sign in with Apple, iCloud, ARKit, Core ML, and any ecosystem framework you need." },
      { step: "05", title: "TestFlight Beta", description: "Internal and external TestFlight distribution for staged user testing." },
      { step: "06", title: "App Store Launch", description: "App Review preparation, metadata, screenshots, and expedited review when needed." },
    ],
    techStack: ["Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit", "ARKit", "Core ML", "Combine"],
    ctaText: "Build Your iOS App",
    metaTitle: "iOS App Development Company | NXTorbit",
    metaDescription:
      "NXTorbit builds premium native iOS apps with Swift and SwiftUI. 400+ App Store apps, 4.8★ avg rating, full Apple ecosystem expertise.",
  },

  android: {
    slug: "android",
    category: "Technology",
    title: "Android App Development",
    tagline: "Reach 3 Billion Android Users Worldwide",
    description:
      "We engineer native Android applications using Kotlin and Jetpack Compose that perform flawlessly across the fragmented Android ecosystem. From budget devices to flagship foldables, we test and optimize for every screen.",
    heroStats: [
      { value: "450+", label: "Android Apps Shipped" },
      { value: "Kotlin", label: "First Codebase" },
      { value: "4.7★", label: "Avg Play Store Rating" },
      { value: "500+", label: "Devices Tested" },
    ],
    features: [
      {
        title: "Kotlin & Jetpack Compose",
        description:
          "Modern Kotlin-first development with Jetpack Compose declarative UI, coroutines, and Flow for reactive architecture.",
      },
      {
        title: "Material Design 3",
        description:
          "Material You (M3) implementation with dynamic color theming, adaptive layouts, and Google's latest design language.",
      },
      {
        title: "Jetpack Libraries",
        description:
          "Room, Navigation, WorkManager, Paging, ViewModel, and the full Jetpack suite for architecture best practices.",
      },
      {
        title: "Google Services Integration",
        description:
          "Maps, Pay, Fit, ML Kit, Firebase, and Play Services for features users expect on Android.",
      },
      {
        title: "Device Compatibility",
        description:
          "Testing across phones, tablets, foldables, Wear OS, and Android TV to ensure your app works everywhere.",
      },
      {
        title: "Play Store Optimization",
        description:
          "Pre-launch reports, crash-free rate monitoring, and store listing optimization for maximum installs.",
      },
    ],
    process: [
      { step: "01", title: "Android Architecture", description: "MVVM with Clean Architecture, Hilt DI, and modular Gradle setup for large teams." },
      { step: "02", title: "Compose UI", description: "Composable UI components with previews, theming, and accessibility support." },
      { step: "03", title: "Feature Development", description: "Sprint-based Kotlin development with JUnit and Espresso test coverage." },
      { step: "04", title: "Device Testing", description: "Firebase Test Lab runs on 500+ real devices to catch OS and OEM-specific issues." },
      { step: "05", title: "Internal Testing Track", description: "Staged rollout on Play Store from internal → alpha → beta → production." },
      { step: "06", title: "Production Release", description: "Production deployment with crash monitoring, ANR tracking, and Play Console analytics." },
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Coroutines", "Room", "Hilt", "Retrofit", "Firebase", "Gradle"],
    ctaText: "Build Your Android App",
    metaTitle: "Android App Development Company | NXTorbit",
    metaDescription:
      "NXTorbit builds native Kotlin and Jetpack Compose Android apps. 450+ apps shipped, tested on 500+ devices, 4.7★ Play Store rating.",
  },

  nodejs: {
    slug: "nodejs",
    category: "Technology",
    title: "Node.js Development",
    tagline: "High-Performance Backend Engineering with Node.js",
    description:
      "Node.js's event-driven, non-blocking architecture makes it the go-to choice for real-time APIs, microservices, and high-throughput backends. Our Node.js team builds systems that handle millions of concurrent connections without breaking a sweat.",
    heroStats: [
      { value: "300+", label: "Node.js Projects" },
      { value: "1M+", label: "Req/sec Sustained" },
      { value: "10ms", label: "Avg API Response" },
      { value: "99.99%", label: "Uptime Achieved" },
    ],
    features: [
      {
        title: "REST & GraphQL APIs",
        description:
          "Scalable Express, Fastify, and Apollo Server APIs with OpenAPI documentation, rate limiting, and JWT auth.",
      },
      {
        title: "Real-Time Systems",
        description:
          "WebSocket, Socket.io, and Server-Sent Events for live chats, notifications, dashboards, and collaborative tools.",
      },
      {
        title: "Microservices Architecture",
        description:
          "Event-driven microservices with RabbitMQ, Kafka, and gRPC for resilient, independently deployable services.",
      },
      {
        title: "Database Integration",
        description:
          "PostgreSQL, MongoDB, Redis, and DynamoDB — with Prisma ORM, connection pooling, and query optimization.",
      },
      {
        title: "Authentication & Security",
        description:
          "Passport.js, JWT, OAuth 2.0, and RBAC systems with rate limiting, input validation, and OWASP compliance.",
      },
      {
        title: "Serverless & Edge",
        description:
          "AWS Lambda, Vercel Edge Functions, and Cloudflare Workers for globally distributed, cost-efficient compute.",
      },
    ],
    process: [
      { step: "01", title: "API Design", description: "RESTful or GraphQL schema design with versioning strategy and authentication model." },
      { step: "02", title: "Database Schema", description: "Relational or NoSQL schema design, indexing strategy, and migration plan." },
      { step: "03", title: "Core API Development", description: "Business logic implementation with test-driven development and code review gates." },
      { step: "04", title: "Integration & Messaging", description: "Third-party API integrations, webhook handlers, and event queue setup." },
      { step: "05", title: "Load Testing", description: "k6 and Artillery load tests to validate performance under realistic traffic." },
      { step: "06", title: "Deploy & Monitor", description: "Docker containerization, Kubernetes deployment, and APM instrumentation." },
    ],
    techStack: ["Node.js", "TypeScript", "Express", "Fastify", "PostgreSQL", "Redis", "Kafka", "Docker"],
    ctaText: "Build Your Node.js Backend",
    metaTitle: "Node.js Development Company | NXTorbit",
    metaDescription:
      "NXTorbit builds high-performance Node.js backends, REST & GraphQL APIs, and real-time systems. 300+ projects, 1M+ req/sec sustained.",
  },

  nextjs: {
    slug: "nextjs",
    category: "Technology",
    title: "Next.js Development",
    tagline: "The React Framework for Production-Grade Web Apps",
    description:
      "Next.js is the gold standard for building fast, SEO-friendly React applications. With App Router, Server Components, and built-in optimizations, it's our default choice for SaaS products, e-commerce, and marketing sites that need to perform.",
    heroStats: [
      { value: "250+", label: "Next.js Projects" },
      { value: "98+", label: "Lighthouse Score" },
      { value: "< 1s", label: "Time to Interactive" },
      { value: "100%", label: "Core Web Vitals Pass" },
    ],
    features: [
      {
        title: "App Router & Server Components",
        description:
          "React Server Components, streaming, and partial prerendering for the fastest possible page loads and SEO.",
      },
      {
        title: "Static & Dynamic Rendering",
        description:
          "ISR, SSG, SSR, and on-demand revalidation — the right rendering strategy for every page in your application.",
      },
      {
        title: "API Routes & Server Actions",
        description:
          "Full-stack in one repo with Next.js API routes and Server Actions for form handling and data mutations.",
      },
      {
        title: "Image & Font Optimization",
        description:
          "next/image with automatic WebP, lazy loading, and LQIP; next/font for zero layout shift Google Fonts.",
      },
      {
        title: "Middleware & Edge Runtime",
        description:
          "Authentication, A/B testing, and geolocation at the edge via Next.js Middleware for sub-millisecond decisions.",
      },
      {
        title: "Vercel & Self-Hosted Deploy",
        description:
          "Optimized Vercel deployments with preview environments, or self-hosted on AWS/GCP with Docker and Nginx.",
      },
    ],
    process: [
      { step: "01", title: "Project Setup", description: "Monorepo or standalone setup, ESLint, Prettier, TypeScript strict mode, and Husky hooks." },
      { step: "02", title: "Design System", description: "Tailwind CSS or CSS Modules design system with shadcn/ui or custom component library." },
      { step: "03", title: "Page Architecture", description: "Route structure, data fetching patterns, and caching strategy per route segment." },
      { step: "04", title: "Feature Development", description: "Iterative Next.js development with Playwright E2E tests and Storybook component docs." },
      { step: "05", title: "Performance Audit", description: "Lighthouse, Web Vitals, and bundle analyzer to hit 95+ scores before launch." },
      { step: "06", title: "Deploy & CDN", description: "Vercel or AWS deployment with CloudFront CDN, edge caching, and monitoring." },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "Vercel", "PostgreSQL", "Playwright"],
    ctaText: "Build with Next.js",
    metaTitle: "Next.js Development Company | NXTorbit",
    metaDescription:
      "NXTorbit builds fast, SEO-optimized Next.js web applications. 250+ projects with 98+ Lighthouse scores and perfect Core Web Vitals.",
  },
};
