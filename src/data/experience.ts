export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Senior Software Developer",
    company: "WE3DS Company",
    period: "Jul 2024 — Present",
    points: [
      "Architected and implemented scalable .NET 8 Microservices using Clean Architecture and Domain-Driven Design (DDD) for enterprise marketplace workflows.",
      "Led transition to multi-tenant architectures with secure data isolation and hierarchical role-based access control (RBAC).",
      "Engineered high-throughput integration layers managing 1000+ IoT endpoints using SignalR real-time telemetry.",
      "Automated CI/CD pipelines using Azure DevOps and TFS, significantly reducing deployment cycles.",
      "Optimized database performance by 300% through strategic SQL query tuning, indexing, and Redis distributed caching.",
    ],
  },
  {
    role: "Full Stack Developer (Freelance)",
    company: "Self-Employed",
    period: "Nov 2023 — Jul 2024",
    points: [
      "Developed end-to-end web applications using Next.js and React for dynamic, SEO-friendly marketplace frontends.",
      "Built robust API backends using .NET Core following clean architecture principles.",
      "Integrated complex third-party REST APIs (Payments, Auth, Mapping) to extend platform capabilities.",
      "Containerized legacy services using Docker for streamlined development and cloud migration.",
    ],
  },
];
