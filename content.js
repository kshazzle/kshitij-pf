// Shared content source of truth for all portfolio designs
window.KJ_CONTENT = {
  name: "Kshitij Jain",
  initials: "KJ",
  title: "Software Engineer",
  tagline: "Distributed systems, data platforms, and full-stack builds.",
  location: "Bangalore, India",
  email: "kshitijjainm@gmail.com",
  links: {
    linkedin: "LinkedIn",
    leetcode: "LeetCode",
    github: "GitHub",
  },
  summary:
    "Software Engineer with 3.5+ years building high-scale distributed systems, data platforms, and full-stack applications. I like systems that don't break at 3am, migrations that don't lose data, and tests that write themselves.",
  about: [
    "I'm a software engineer who has spent the last three and a half years shipping backend services, ingestion pipelines, and the occasional mobile app.",
    "My work tends to sit at the seam between data and product — building the systems that merchandisers, operations teams, and end users actually touch. I care about rollback plans, observability, and the kind of documentation people read on their second day.",
    "Lately I've been pushing GenAI tooling into my team's day-to-day: Cursor, MCP integrations, and a test-generation framework that cut review cycles in half.",
  ],
  skills: {
    Languages: ["Golang", "Java", "TypeScript", "JavaScript", "Python", "SQL"],
    Backend: ["Spring Boot", "Microservices", "REST APIs", "Kafka", "Pub/Sub", "Redis", "Elasticsearch"],
    Frontend: ["React", "React Native", "Redux", "Micro-frontends", "iOS", "Android"],
    "Cloud & DevOps": ["GCP", "Cloud Run", "BigQuery", "Docker", "CI/CD", "Datadog", "Sentry"],
    Databases: ["PostgreSQL", "MySQL", "Elasticsearch", "Redis", "Liquibase"],
    "AI Tooling": ["Cursor", "MCP", "GenAI workflows", "n8n"],
    Practices: ["System Design (HLD/LLD)", "Agile", "TDD", "Code Review", "Mentoring"],
  },
  experience: [
    {
      company: "Wayfair",
      role: "Software Engineer II",
      period: "Dec 2024 — Present",
      location: "Bangalore",
      bullets: [
        "Architected a product-ownership and assortment-management platform — the system of truth across merchandising. Authored RFCs covering ownership transfer, market-context transitions, and integration with catalog, exclusivity, and audit systems.",
        "Designed a scalable data ingestion framework streaming Kafka, Pub/Sub, and BigQuery into Elasticsearch and relational stores. Indexes 30M+ records with sub-second query latency and 99.9% uptime; reduced new-source onboarding from weeks to days.",
        "Led high-scale data migrations with zero data loss across 50K, 40K-SKU, and 100K-SKU workloads. Introduced a Liquibase-based migration pattern adopted across 10+ repositories.",
        "Built end-to-end merchant workflows in React + Spring Boot. Unblocked senior-merchant review bottlenecks and reduced manual merchandising ops by ~40%.",
        "Drove team-wide GenAI adoption via Cursor, MCP, and a GenAI test-generation framework. Cut PR review cycles ~50% and MTTR ~40%.",
      ],
    },
    {
      company: "Infra.Market",
      role: "Senior Software Engineer",
      period: "Jul 2022 — Dec 2024",
      location: "Bangalore",
      bullets: [
        "Owned end-to-end design and delivery of a Ticket Management System handling 100K+ tickets/day. Cut average turnaround from 8 days to 3; fewer than 10 daily production issues.",
        "Solution Architect for Golang + Kafka + SQL backend systems. Authored HLD/LLD for Zendesk integration, a workflow orchestration engine, and role-based persona onboarding.",
        "Led a cross-functional team of 6 engineers. Mentored 4 juniors through structured growth plans.",
        "Built and launched a React Native mobile app from scratch — including the org's first iOS app. Increased adoption by 55%, multilingual across 5 locales, load times improved 70%.",
        "Improved reliability via Sentry, Microsoft Clarity, AppCenter. Reduced crash rates 25% and increased OTA update adoption 50%.",
      ],
    },
  ],
  education: [
    {
      school: "The National Institute of Engineering, Mysore",
      degree: "B.E. in Information Science",
      period: "Aug 2018 — Jun 2022",
      detail: "GPA: 9.0 / 10",
    },
  ],
  projects: [
    {
      name: "NBHD",
      tagline: "Compare Bangalore neighborhoods at a glance.",
      description:
        "Nbhd (\u201Cneighborhood\u201D) turns mixed public and reference data into simple 0–100 scores so homebuyers can compare areas side-by-side. Walkability, safety, price, amenities — all rolled into one number per axis.",
      tags: ["Data", "Product", "India"],
      status: "In progress",
      year: "2026",
    },
    {
      name: "—",
      tagline: "Open slot.",
      description: "More projects coming soon. Placeholder for future work.",
      tags: [],
      status: "Placeholder",
      year: "—",
    },
    {
      name: "—",
      tagline: "Open slot.",
      description: "More projects coming soon. Placeholder for future work.",
      tags: [],
      status: "Placeholder",
      year: "—",
    },
  ],
  stats: [
    { n: "3.5+", l: "Years shipping" },
    { n: "30M+", l: "Records indexed" },
    { n: "100K+", l: "Tickets/day" },
    { n: "5", l: "Locales supported" },
  ],
};
