export type Job = {
  id: number;
  title: string;
  dept: string;
  location: string;
  type: string;
  exp: string;
  summary: string;
};

export const DEPARTMENTS = [
  "All",
  "Engineering",
  "Design",
  "AI & Data",
  "Infrastructure",
  "Sales",
  "Operations",
] as const;

export const JOBS: Job[] = [
  {
    id: 1,
    title: "Senior React Native Developer",
    dept: "Engineering",
    location: "Navi Mumbai, India",
    type: "Full-time",
    exp: "4–7 years",
    summary:
      "Own the architecture of cross-platform apps with millions of monthly users, and write the native modules when JavaScript can't keep up.",
  },
  {
    id: 2,
    title: "Flutter Developer",
    dept: "Engineering",
    location: "Navi Mumbai / Remote",
    type: "Full-time",
    exp: "2–5 years",
    summary:
      "Build production Flutter apps end to end — state management, platform channels, and the release pipeline behind them.",
  },
  {
    id: 3,
    title: "Node.js Backend Engineer",
    dept: "Engineering",
    location: "Navi Mumbai, India",
    type: "Full-time",
    exp: "3–6 years",
    summary:
      "Design APIs and data models that stay fast under load, with the observability to prove it in production.",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    dept: "Design",
    location: "Navi Mumbai, India",
    type: "Full-time",
    exp: "2–4 years",
    summary:
      "Take products from research through to a design system engineers can build without guessing.",
  },
  {
    id: 5,
    title: "iOS Developer (Swift)",
    dept: "Engineering",
    location: "Navi Mumbai, India",
    type: "Full-time",
    exp: "3–5 years",
    summary:
      "Swift and SwiftUI work across consumer and enterprise apps, including the Apple frameworks most teams never touch.",
  },
  {
    id: 6,
    title: "AI/ML Engineer",
    dept: "AI & Data",
    location: "Navi Mumbai / Remote",
    type: "Full-time",
    exp: "3–6 years",
    summary:
      "Ship models into products people use daily — retrieval pipelines, evaluation harnesses, and the serving layer underneath.",
  },
  {
    id: 7,
    title: "DevOps Engineer",
    dept: "Infrastructure",
    location: "Navi Mumbai, India",
    type: "Full-time",
    exp: "3–5 years",
    summary:
      "Own CI/CD, infrastructure as code, and the cost line. Make deploys boring for everyone else.",
  },
  {
    id: 8,
    title: "Business Development Executive",
    dept: "Sales",
    location: "Navi Mumbai, India",
    type: "Full-time",
    exp: "1–3 years",
    summary:
      "Talk to founders and CTOs about hard technical problems, and know enough to tell when we're the wrong fit.",
  },
  {
    id: 9,
    title: "Project Manager",
    dept: "Operations",
    location: "Navi Mumbai, India",
    type: "Full-time",
    exp: "4–7 years",
    summary:
      "Run delivery across two or three engagements — scope, risk, and the difficult conversations that keep projects honest.",
  },
];

export const PERKS = [
  {
    icon: "wallet",
    title: "Competitive pay",
    description: "Benchmarked salaries, annual reviews, and performance bonuses that are actually paid.",
  },
  {
    icon: "shield",
    title: "Health cover",
    description: "Medical, dental, and vision for you and your immediate family from day one.",
  },
  {
    icon: "globe",
    title: "Hybrid by default",
    description: "Remote and hybrid options on every role where the work genuinely allows it.",
  },
  {
    icon: "book",
    title: "Learning budget",
    description: "₹30,000 a year for courses, certifications, and conferences — no approval theatre.",
  },
  {
    icon: "clock",
    title: "Flexible hours",
    description: "Output-based culture. Start when you think best; ship what you said you would.",
  },
  {
    icon: "trending",
    title: "Real progression",
    description: "Published levels, a clear promotion track, and a mentor assigned in week one.",
  },
  {
    icon: "target",
    title: "Work that ships",
    description: "Products used by millions of people — not internal prototypes nobody sees.",
  },
  {
    icon: "heart",
    title: "A team worth staying for",
    description: "Hackathons, retreats, and a 98% retention rate that says more than a perks list.",
  },
];

export const HIRING_STEPS = [
  {
    step: "01",
    title: "Intro call",
    description: "Thirty minutes with the hiring manager. What you've built, what you want next.",
  },
  {
    step: "02",
    title: "Technical conversation",
    description: "A real problem from our work, discussed together. No whiteboard algorithm trivia.",
  },
  {
    step: "03",
    title: "Team session",
    description: "Meet the people you'd work with daily and ask them anything about the job.",
  },
  {
    step: "04",
    title: "Offer",
    description: "Decision and written offer within three working days of the last conversation.",
  },
];
