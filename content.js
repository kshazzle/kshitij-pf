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
    "Software Engineer with 3.5+ years of experience building high-scale distributed systems, data platforms, and full-stack applications in Golang, Java, Spring Boot, TypeScript, and React/React Native. Proven track record delivering end-to-end backend services, ingestion pipelines, and mobile apps.",
  about: [
    "I'm a software engineer who has spent the last three and a half years shipping distributed systems, ingestion pipelines, and the occasional mobile app.",
    "My work tends to sit at the seam between data and product — building the systems that merchandisers, operations teams, and end users actually touch. I care about rollback plans, observability, and the kind of documentation people actually read.",
    "Lately I've been pushing GenAI tooling into my team's day-to-day: Cursor, MCP integrations, and a test-generation framework that cut review cycles in half.",
  ],
  skills: {
    Languages: ["Golang", "Java", "TypeScript", "JavaScript", "Python", "SQL"],
    Backend: ["Spring Boot", "Microservices", "REST APIs", "Kafka", "Pub/Sub", "Redis", "Elasticsearch"],
    Frontend: ["React", "React Native", "Redux", "Micro-frontends", "iOS", "Android"],
    "Cloud & DevOps": ["GCP", "Cloud Run", "BigQuery", "Docker", "CI/CD", "Datadog", "Sentry"],
    Databases: ["PostgreSQL", "MySQL", "Elasticsearch", "Redis", "Liquibase"],
    "AI Tooling": ["Cursor", "MCP", "GenAI workflow automation", "n8n"],
    Practices: ["System Design (HLD/LLD)", "Agile", "TDD", "Code Review", "Mentoring"],
  },
  experience: [
    {
      company: "Wayfair",
      role: "Software Engineer II",
      period: "Dec 2024 — Present",
      location: "Bangalore",
      bullets: [
        "Architected a product-ownership and assortment-management platform serving as the system of truth across merchandising. Authored RFCs covering ownership transfer, market-context transitions, and integration with downstream catalog, exclusivity, and audit systems.",
        "Designed a scalable data ingestion framework streaming Kafka, Pub/Sub, and BigQuery data into Elasticsearch and relational stores, indexing 30M+ records with sub-second query latency and 99.9% uptime; reduced new-source onboarding from weeks to days.",
        "Led high-scale data migrations with zero data loss across 50K-record, 40K-SKU, and 100K-SKU workloads by designing rollback strategies, validation plans, and post-migration monitors; introduced a Liquibase-based migration pattern adopted across 10+ repositories.",
        "Built end-to-end merchant workflows for product assignment lifecycle in React and Spring Boot, unblocking senior-merchant review bottlenecks and reducing manual merchandising operations by ~40%.",
        "Drove team-wide GenAI adoption using Cursor, MCP integrations, and an AI-based test-generation framework. Cut PR review and test cycles by ~50% and reduced MTTR by ~40% through Datadog dashboards, monitors, and alerts.",
      ],
    },
    {
      company: "Infra.Market",
      role: "Senior Software Engineer",
      period: "Jul 2022 — Dec 2024",
      location: "Bangalore",
      bullets: [
        "Owned end-to-end design and delivery of a Ticket Management System handling 100K+ tickets/day, reducing average turnaround time from 8 days to 3 days with fewer than 10 daily production issues.",
        "Served as Feature Owner and Solution Architect for backend systems in Golang, Kafka, and SQL. Authored HLD and LLD for Zendesk integration, a workflow orchestration engine, and role-based persona onboarding.",
        "Led a cross-functional team of 6 engineers, driving code reviews, sprint planning, and release management. Mentored 4 junior engineers through structured growth plans.",
        "Developed and launched a React Native mobile app from scratch, including the organisation's first iOS app; increased adoption by 55%, enabled multilingual support across 5 locales, and improved app load times by 70% via component libraries and Loyalty/KYC npm SDKs.",
        "Improved reliability through observability and CI/CD pipelines using Sentry, Microsoft Clarity, and AppCenter. Reduced crash rates by 25% and increased over-the-air update adoption by 50%.",
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
        'Nbhd ("neighborhood") turns mixed public and reference data into simple 0–100 scores so homebuyers can compare areas side-by-side. Walkability, safety, price, amenities — all rolled into one number per axis.',
      tags: ["Data", "Product", "India"],
      status: "In progress",
      year: "2026",
    },
    {
      name: "Canopy",
      tagline: "Carbon footprint awareness, one small action at a time.",
      description:
        "A platform that turns a quick lifestyle quiz and one-tap daily logs into an A–F carbon score, then runs a rule-based assistant that surfaces the single highest-impact change you can make next — with explainable reasoning behind every nudge. Built for the Prompt Hack.",
      tags: ["TypeScript", "Next.js", "Product"],
      status: "Live",
      year: "2026",
      url: "https://canopy-kshitijjainms-projects.vercel.app",
    },
    {
      name: "Transfer Deal or No Deal",
      tagline: "Build a football squad through briefcase picks and banker offers.",
      description:
        "A transfer-window game show: pick from ten briefcases per position, weigh the Banker's counter-offer, then keep your case or gamble on a repick. Play solo or in real-time multiplayer lobbies of up to five, where claimed players disappear from a shared board.",
      tags: ["Next.js", "Supabase", "Realtime"],
      status: "Live",
      year: "2026",
      url: "https://deal-no-deal.vercel.app",
    },
    {
      name: "What If? World Cup",
      tagline: "AI-written alternate World Cup timelines.",
      description:
        'Ask "what if?" and get a full alternate FIFA World Cup history — tournaments, awards, fan reactions, and lasting legacy — written by a football historian that never existed. Powered by Next.js, Prisma, and an OpenRouter-backed LLM.',
      tags: ["Next.js", "AI", "Prisma"],
      status: "Live",
      year: "2026",
      url: "https://whatif-worldcup.vercel.app",
    },
  ],
  stats: [
    { n: "3.5+", l: "Years shipping" },
    { n: "30M+", l: "Records indexed" },
    { n: "100K+", l: "Tickets/day" },
    { n: "5", l: "Locales supported" },
  ],
};
