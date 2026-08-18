export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Responsive Web Design",
      "React Native",
      "RxJS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      ".NET 8",
      "ASP.NET Core",
      "C#",
      "ASP.NET Web API",
      "Microservices",
      "Node.js",
      "GraphQL",
      "LINQ",
      "Entity Framework",
    ],
  },
  {
    title: "Databases",
    skills: ["SQL Server (Advanced Tuning)", "PostgreSQL", "MongoDB", "Redis", "SSRS"],
  },
  {
    title: "Architecture & Patterns",
    skills: [
      "Clean Architecture",
      "Domain-Driven Design (DDD)",
      "Repository Pattern",
      "Unit of Work",
      "Event-Driven Architecture",
      "Multi-Tenant Architecture",
      "RBAC",
    ],
  },
  {
    title: "Real-Time & Communication",
    skills: ["SignalR", "gRPC", "WebSocket", "Kafka"],
  },
  {
    title: "DevOps & CI/CD",
    skills: ["Azure DevOps", "Docker", "Kubernetes", "TFS", "Git", "CI/CD Pipelines", "Terraform"],
  },
  {
    title: "Security & Testing",
    skills: ["OAuth 2.0", "JWT", "TDD", "Playwright", "Cypress"],
  },
];
