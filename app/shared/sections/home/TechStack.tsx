"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Smartphone,
  Globe,
  Server,
  Cloud,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";

interface TechCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  description: string;
  technologies: {
    name: string;
    description: string;
    href: string;
    tags: string[];
  }[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "mobile",
    label: "Mobile Development",
    icon: Smartphone,
    description: "High-performance native and cross-platform mobile apps for iOS and Android.",
    technologies: [
      {
        name: "React Native",
        description: "Cross-platform mobile apps with 95%+ code reuse and 60fps native performance.",
        href: "/technology/react-native",
        tags: ["iOS", "Android", "Expo", "TypeScript"],
      },
      {
        name: "Flutter",
        description: "Google's UI toolkit for crafting beautiful natively compiled desktop and mobile apps.",
        href: "/technology/flutter",
        tags: ["Dart", "Cross-Platform", "Custom Widgets"],
      },
      {
        name: "Native iOS (Swift)",
        description: "Maximum platform performance with Swift, SwiftUI, and iOS Core Frameworks.",
        href: "/technology/ios",
        tags: ["Swift", "SwiftUI", "CoreML", "Metal"],
      },
      {
        name: "Native Android (Kotlin)",
        description: "Modern Android development with Jetpack Compose, Coroutines, and Material 3.",
        href: "/technology/android",
        tags: ["Kotlin", "Jetpack Compose", "Coroutines"],
      },
    ],
  },
  {
    id: "web",
    label: "Frontend & Web",
    icon: Globe,
    description: "Ultra-fast, SEO-optimized web applications and responsive web platforms.",
    technologies: [
      {
        name: "Next.js & React",
        description: "Full-stack React framework with Server Components, SSR, and edge rendering.",
        href: "/technology/nextjs",
        tags: ["Next.js 14", "React 18", "Server Components", "SSR"],
      },
      {
        name: "TypeScript",
        description: "Strongly typed JavaScript ensuring zero runtime type errors and solid architecture.",
        href: "/technology/typescript",
        tags: ["Type-Safe", "ESNext", "Scalable Architecture"],
      },
      {
        name: "Tailwind CSS & Motion",
        description: "Utility-first CSS paired with fluid micro-animations for stunning interfaces.",
        href: "/technology/frontend-ui",
        tags: ["Responsive", "Framer Motion", "Design Systems"],
      },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    icon: Server,
    description: "Scalable microservices, distributed APIs, and resilient data processing pipelines.",
    technologies: [
      {
        name: "Node.js & Express",
        description: "Event-driven asynchronous backend systems powering high-throughput APIs.",
        href: "/technology/nodejs",
        tags: ["Node.js", "TypeScript", "REST APIs", "WebSockets"],
      },
      {
        name: "Python & FastAPI",
        description: "High-performance Python backends for AI integration and data engineering.",
        href: "/technology/python",
        tags: ["FastAPI", "Django", "AsyncIO", "Swagger"],
      },
      {
        name: "GraphQL & REST",
        description: "Flexible API layers providing precise data fetching and instant subscriptions.",
        href: "/technology/graphql",
        tags: ["Apollo", "Schema First", "Real-time"],
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: Cloud,
    description: "Cloud-native infrastructure, automated CI/CD pipelines, and 99.99% uptime SLA.",
    technologies: [
      {
        name: "AWS & Google Cloud",
        description: "Elastic cloud hosting, serverless functions, and auto-scaling infrastructure.",
        href: "/technology/aws-cloud",
        tags: ["Serverless", "S3", "CloudFront", "Lambda"],
      },
      {
        name: "Docker & Kubernetes",
        description: "Containerized application delivery with automated orchestration and scaling.",
        href: "/technology/devops",
        tags: ["Containers", "Kubernetes", "Helm", "CI/CD"],
      },
    ],
  },
  {
    id: "ai",
    label: "AI & Smart Systems",
    icon: Cpu,
    description: "Integrating Large Language Models, computer vision, and predictive machine learning.",
    technologies: [
      {
        name: "OpenAI & LLM Integration",
        description: "Embedding intelligent conversational AI, RAG search, and automated workflows.",
        href: "/technology/ai-ml",
        tags: ["GPT-4", "LangChain", "Vector DBs", "RAG"],
      },
      {
        name: "Computer Vision & ML",
        description: "Custom machine learning models for image recognition, OCR, and predictive analytics.",
        href: "/technology/ai-ml",
        tags: ["PyTorch", "TensorFlow", "Scikit-Learn"],
      },
    ],
  },
];

export function TechStack() {
  const [activeTab, setActiveTab] = useState<string>("mobile");

  const activeCategory = TECH_CATEGORIES.find((cat) => cat.id === activeTab) || TECH_CATEGORIES[0];

  return (
    <Section tone="white" spacing="lg" id="tech-stack">
      <Container>
        <Reveal className="mb-12 text-center max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="MODERN TECH STACK"
            title="Engineered with Battle-Tested Technologies"
            description="We build with cutting-edge frameworks, robust cloud infrastructure, and enterprise-grade tools to ensure speed, security, and effortless scaling."
            align="center"
          />
        </Reveal>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {TECH_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#01242e] text-white scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                <Icon className={`size-4 ${isActive ? "text-[#00d2c4]" : "text-slate-500"}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Cards Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeCategory.technologies.map((tech) => (
              <div
                key={tech.name}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#00d2c4]/50 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#008c83] uppercase">
                      <Sparkles className="size-3.5 text-[#00d2c4]" />
                      Featured Tech
                    </span>
                    <span className="size-2 rounded-full bg-emerald-500" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#008c83] transition-colors mb-2">
                    {tech.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {tech.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 mb-6">
                    {tech.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="size-3 text-teal-600" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={tech.href}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#008c83] group-hover:text-[#005f57] transition-colors pt-4 border-t border-slate-100"
                >
                  Explore Capabilities
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
}
