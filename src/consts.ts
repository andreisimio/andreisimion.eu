export const SITE = {
  title: "Andrei Simion",
  description:
    "Enterprise Architecture, Data Architecture & Intelligent Automation. Helping organizations streamline processes, adopt AI practically, and build data-driven operations.",
  url: "https://www.andreisimion.eu",
  author: "Andrei Simion",
  tagline: "Structure. Automate. Scale.",
  email: "simion.andrei@gmail.com",
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
      "C4 Model & Structurizr documentation",
      "Technology standards & principles",
      "Solution design & review",
    ],
  },
  {
    title: "Data Architecture",
    slug: "data-architecture",
    summary:
      "Design robust data foundations — from modeling and integration to governance and analytics-ready pipelines.",
    icon: "database",
    features: [
      "Data modeling & common data models",
      "Data lake & warehouse architecture",
      "ETL/ELT pipeline design",
      "Data quality & governance frameworks",
    ],
  },
  {
    title: "AI & Intelligent Automation",
    slug: "ai-automation",
    summary:
      "Put AI to work with practical automation — using Claude, n8n, and LLM-powered workflows that deliver real results.",
    icon: "brain-circuit",
    features: [
      "AI-assisted workflow design with Claude",
      "n8n automation pipelines",
      "LLM integration & prompt engineering",
      "Responsible AI governance",
    ],
  },
  {
    title: "Business Process Optimization",
    slug: "business-processes",
    summary:
      "Map, streamline, and automate business processes to eliminate waste and accelerate throughput.",
    icon: "workflow",
    features: [
      "Process mapping & analysis",
      "Workflow automation with n8n & low-code",
      "KPI-driven optimization",
      "Change management & adoption",
    ],
  },
  {
    title: "Professional Workflows & Tooling",
    slug: "professional-workflows",
    summary:
      "Build modern, efficient development and documentation workflows with best-in-class tools.",
    icon: "terminal",
    features: [
      "VS Code & Claude Code setup",
      "Documentation as Code (C4, Structurizr, MDX)",
      "Git-based knowledge management",
      "CI/CD & DevOps practices",
    ],
  },
] as const;
