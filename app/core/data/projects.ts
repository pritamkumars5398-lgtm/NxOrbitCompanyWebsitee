import { WORK_ITEMS } from "@/app/core/constants/app.constant";

export type Project = {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  industry: string;
  platform: string;
  result: string;
  resultLabel: string;
  /** Short outcome metrics shown on the case-study blocks. */
  metrics: { value: string; label: string }[];
};

const META: Record<
  string,
  Pick<Project, "industry" | "platform" | "metrics"> & { resultLabel: string }
> = {
  daylyy: {
    industry: "Social",
    platform: "iOS & Android",
    resultLabel: "Day-90 retention",
    metrics: [
      { value: "89%", label: "User retention" },
      { value: "40ms", label: "Feed delivery" },
      { value: "4.8", label: "App Store rating" },
    ],
  },
  alba: {
    industry: "Automotive",
    platform: "Web & Mobile",
    resultLabel: "Transactions processed",
    metrics: [
      { value: "$120M", label: "Transactions processed" },
      { value: "62%", label: "Faster valuations" },
      { value: "3x", label: "Enquiry conversion" },
    ],
  },
  truefan: {
    industry: "Entertainment",
    platform: "iOS & Android",
    resultLabel: "Active interactions",
    metrics: [
      { value: "4.4M", label: "Active interactions" },
      { value: "99.9%", label: "Delivery success" },
      { value: "12", label: "Languages supported" },
    ],
  },
  joshcam: {
    industry: "Creator tools",
    platform: "iOS & Android",
    resultLabel: "Creators on the platform",
    metrics: [
      { value: "50M+", label: "Creators" },
      { value: "60fps", label: "Timeline scrubbing" },
      { value: "1.2s", label: "Export start time" },
    ],
  },
  airtel: {
    industry: "Telecom",
    platform: "iOS & Android",
    resultLabel: "Concurrent users",
    metrics: [
      { value: "12M+", label: "Concurrent users" },
      { value: "99.98%", label: "Uptime" },
      { value: "180ms", label: "P95 response" },
    ],
  },
  motherdairy: {
    industry: "FMCG & logistics",
    platform: "iOS & Android",
    resultLabel: "Daily deliveries",
    metrics: [
      { value: "100k", label: "Daily deliveries" },
      { value: "28%", label: "Route time saved" },
      { value: "0.4%", label: "Failed deliveries" },
    ],
  },
  nikbakers: {
    industry: "Retail",
    platform: "Web & Mobile",
    resultLabel: "Kitchen-to-app sync",
    metrics: [
      { value: "Real-time", label: "Stock sync" },
      { value: "34%", label: "Repeat orders" },
      { value: "18", label: "Locations live" },
    ],
  },
};

/** WORK_ITEMS carries the copy; META adds the commercial detail. */
export const PROJECTS: Project[] = WORK_ITEMS.map((item) => {
  const meta = META[item.id];
  return {
    id: item.id,
    name: item.name,
    tagline: item.tagline,
    desc: item.desc,
    industry: meta?.industry ?? "Product",
    platform: meta?.platform ?? "iOS & Android",
    result: item.highlight,
    resultLabel: meta?.resultLabel ?? "Headline result",
    metrics: meta?.metrics ?? [],
  };
});

export const PROJECT_INDUSTRIES = [
  "All",
  ...Array.from(new Set(PROJECTS.map((project) => project.industry))),
];
