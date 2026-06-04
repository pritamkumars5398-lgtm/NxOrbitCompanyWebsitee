import type { Metadata } from "next";
import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";
import { NewsletterForm } from "../shared/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog & Insights | NXTorbit",
  description:
    "Expert insights on mobile app development, AI/ML, web engineering, and digital transformation from the NXTorbit team.",
};

const CATEGORIES = ["All", "Mobile", "AI & ML", "Web Development", "Design", "DevOps", "Industry"];

const BLOG_POSTS = [
  {
    id: 1,
    title: "React Native vs Flutter in 2025: Which Should You Choose?",
    excerpt:
      "We compare React Native and Flutter across performance, developer experience, ecosystem maturity, and hiring — to help you make the right call for your next project.",
    category: "Mobile",
    author: "Arjun Mehta",
    authorRole: "Head of Mobile Engineering",
    date: "May 28, 2025",
    readTime: "8 min read",
    featured: true,
    tags: ["React Native", "Flutter", "Cross-Platform"],
  },
  {
    id: 2,
    title: "Building Production-Ready RAG Applications with LangChain and Claude",
    excerpt:
      "A deep-dive into retrieval-augmented generation: chunking strategies, embedding models, vector store selection, and reranking to get enterprise-grade answer quality.",
    category: "AI & ML",
    author: "Priya Nair",
    authorRole: "AI/ML Engineering Lead",
    date: "May 20, 2025",
    readTime: "12 min read",
    featured: true,
    tags: ["LangChain", "Claude", "RAG", "LLM"],
  },
  {
    id: 3,
    title: "Next.js 16 App Router: Everything You Need to Know",
    excerpt:
      "Server Components, Partial Prerendering, async params, and Cache Components — a practical guide to what's changed and how to migrate your existing projects.",
    category: "Web Development",
    author: "Rahul Sharma",
    authorRole: "Senior Frontend Engineer",
    date: "May 14, 2025",
    readTime: "10 min read",
    featured: true,
    tags: ["Next.js", "React", "App Router"],
  },
  {
    id: 4,
    title: "Designing for Trust: UI Patterns That Convert in Fintech",
    excerpt:
      "Security badges, progressive disclosure, microcopy, and motion design — the visual language that makes users feel safe enough to hand over their money.",
    category: "Design",
    author: "Sneha Kapoor",
    authorRole: "Lead UX Designer",
    date: "May 8, 2025",
    readTime: "7 min read",
    featured: false,
    tags: ["UI/UX", "Fintech", "Conversion"],
  },
  {
    id: 5,
    title: "Kubernetes Cost Optimization: 10 Strategies That Actually Work",
    excerpt:
      "From right-sizing nodes and using spot instances to namespace quotas and VPA — real strategies we've used to reduce client cloud bills by 40-60%.",
    category: "DevOps",
    author: "Vikram Singh",
    authorRole: "DevOps Architect",
    date: "April 30, 2025",
    readTime: "9 min read",
    featured: false,
    tags: ["Kubernetes", "AWS", "Cost Optimization"],
  },
  {
    id: 6,
    title: "HIPAA-Compliant Architecture for Mobile Health Apps",
    excerpt:
      "A practical guide to building HIPAA-compliant iOS and Android apps: PHI encryption, BAAs, audit logging, and minimum necessary access patterns.",
    category: "Industry",
    author: "Aditya Bose",
    authorRole: "Healthcare Tech Lead",
    date: "April 22, 2025",
    readTime: "11 min read",
    featured: false,
    tags: ["Healthcare", "HIPAA", "Security"],
  },
  {
    id: 7,
    title: "The State of On-Device AI in 2025: Core ML, ONNX, and MediaPipe",
    excerpt:
      "Running ML models on-device is no longer experimental. We compare frameworks, benchmark performance on flagship and budget devices, and share what we've shipped.",
    category: "AI & ML",
    author: "Priya Nair",
    authorRole: "AI/ML Engineering Lead",
    date: "April 15, 2025",
    readTime: "10 min read",
    featured: false,
    tags: ["On-Device AI", "Core ML", "Mobile"],
  },
  {
    id: 8,
    title: "How We Built a Real-Time Delivery Tracking System for 100k Daily Orders",
    excerpt:
      "The architecture behind a logistics platform processing 100,000+ daily deliveries: Kafka event streaming, geospatial indexing, and WebSocket driver updates.",
    category: "Web Development",
    author: "Rohit Gupta",
    authorRole: "Backend Engineering Lead",
    date: "April 8, 2025",
    readTime: "13 min read",
    featured: false,
    tags: ["Kafka", "Logistics", "Real-time", "Architecture"],
  },
  {
    id: 9,
    title: "Design Systems at Scale: Lessons from 5 Years of Enterprise UI",
    excerpt:
      "Token architecture, component governance, versioning strategy, and the organizational work that makes a design system actually get adopted by product teams.",
    category: "Design",
    author: "Sneha Kapoor",
    authorRole: "Lead UX Designer",
    date: "April 1, 2025",
    readTime: "8 min read",
    featured: false,
    tags: ["Design Systems", "Figma", "Component Library"],
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Mobile": "bg-blue-50 text-blue-700",
  "AI & ML": "bg-purple-50 text-purple-700",
  "Web Development": "bg-emerald-50 text-emerald-700",
  "Design": "bg-pink-50 text-pink-700",
  "DevOps": "bg-orange-50 text-orange-700",
  "Industry": "bg-slate-100 text-slate-700",
};

export default function BlogPage() {
  const featured = BLOG_POSTS.filter((p) => p.featured);
  const regular = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white text-nyt-charcoal font-sans antialiased">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-20 lg:py-24 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nyt-green/5 rounded-full translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-3">The NXTorbit Blog</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
              Insights from the<br />
              <span className="text-nyt-green">Engineering Floor</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
              Deep dives, practical guides, and industry perspectives from 200+ engineers who build production software every day.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED POSTS ── */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featured.map((post) => (
              <article
                key={post.id}
                className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-nyt-green/20
                  hover:shadow-xl hover:shadow-nyt-green/5 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Color bar */}
                <div className="h-1 bg-gradient-to-r from-nyt-green to-nyt-lime" />

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[post.category] || "bg-slate-100 text-slate-700"}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-nyt-green transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nyt-green to-nyt-lime flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {post.author.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">{post.author}</p>
                      <p className="text-xs text-slate-400">{post.date}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL POSTS ── */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-nyt-green">All Articles</h2>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors duration-150
                    ${cat === "All"
                      ? "bg-nyt-green text-white border-nyt-green"
                      : "bg-white text-slate-600 border-slate-200 hover:border-nyt-green hover:text-nyt-green"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...featured, ...regular].map((post) => (
              <article
                key={post.id}
                className="group bg-white hover:border-nyt-green/20 border border-slate-100
                  hover:shadow-lg hover:shadow-nyt-green/5 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Thumbnail placeholder */}
                <div className="h-40 bg-gradient-to-br from-nyt-dark to-slate-800 flex items-end p-4 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-2 right-2 w-20 h-20 bg-nyt-green/20 rounded-full" />
                    <div className="absolute bottom-2 left-2 w-12 h-12 bg-nyt-lime/20 rounded-full" />
                  </div>
                  <span className={`relative text-xs font-bold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[post.category] || "bg-slate-100 text-slate-700"}`}>
                    {post.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-slate-400">{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-nyt-green transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-nyt-green to-nyt-lime flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {post.author.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">{post.author}</p>
                      <p className="text-xs text-slate-400">{post.authorRole}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-20 bg-gradient-to-br from-nyt-dark to-slate-900">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-4">Stay Updated</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Engineering Insights, Delivered Monthly
          </h2>
          <p className="text-slate-400 mb-8">
            Join 12,000+ developers and tech leaders who read the NXTorbit engineering digest. No spam, ever.
          </p>
          <NewsletterForm />
          <p className="text-xs text-slate-500 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
