export const SITE = {
  title: "Andrei Simion",
  description:
    "Enterprise Architecture & AI Adoption Consulting. Helping organizations design resilient systems, adopt AI strategically, and accelerate digital transformation.",
  url: "https://www.andreisimion.eu",
  author: "Andrei Simion",
  tagline: "Architecture That Thinks Ahead",
  email: "contact@andreisimion.eu",
  linkedin: "https://www.linkedin.com/in/andrei-simion-eu/",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Enterprise Architecture",
    slug: "enterprise-architecture",
    summary:
      "Align technology with business strategy through structured, scalable architecture.",
    icon: "building-2",
    features: [
      "Architecture roadmaps & governance",
      "Cloud foundation design",
      "C4 Model documentation",
      "Technology standards & principles",
    ],
  },
  {
    title: "AI Adoption Strategy",
    slug: "ai-adoption",
    summary:
      "Integrate AI into your operations with a clear, risk-aware adoption framework.",
    icon: "brain-circuit",
    features: [
      "AI readiness assessment",
      "Use-case identification & prioritization",
      "LLM integration patterns",
      "Responsible AI governance",
    ],
  },
  {
    title: "Data & Integration",
    slug: "data-integration",
    summary:
      "Unify data across platforms with modern integration and data architecture.",
    icon: "database",
    features: [
      "Data platform design",
      "API-first integration strategy",
      "ETL/ELT pipeline architecture",
      "Data quality & governance",
    ],
  },
  {
    title: "Process Automation",
    slug: "process-automation",
    summary:
      "Eliminate manual bottlenecks and drive efficiency through intelligent automation.",
    icon: "workflow",
    features: [
      "Process mining & analysis",
      "Automation roadmap",
      "RPA & low-code solutions",
      "KPI-driven optimization",
    ],
  },
  {
    title: "Cloud & Platform Advisory",
    slug: "cloud-advisory",
    summary:
      "Navigate cloud adoption with confidence, from migration to multi-cloud governance.",
    icon: "cloud",
    features: [
      "Cloud migration strategy",
      "Multi-cloud governance",
      "Cost optimization",
      "Security & compliance",
    ],
  },
] as const;
