import { Link, createFileRoute } from "@tanstack/react-router";
import { PageSkeleton } from "@/components/ui/Skeletons";
import { ArrowRight, Code, Database, Cpu, Lock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18n";
import { useLocalizedContent } from "@/lib/localize";

const skillGroupsData = [
  {
    title: "Backend & Microservices",
    Icon: Code,
    skills: [".NET 8", "C#", "ASP.NET Core Web API", "Clean Architecture", "SignalR", "gRPC", "DDD", "Entity Framework", "LINQ"],
  },
  {
    title: "Frontend Engineering",
    Icon: Cpu,
    skills: ["Angular", "React.js", "Next.js", "Redux", "TypeScript", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Databases & Storage",
    Icon: Database,
    skills: ["SQL Server (Advanced Tuning)", "PostgreSQL", "Redis Caching", "MongoDB", "SSRS"],
  },
  {
    title: "DevOps, Security & QA",
    Icon: Lock,
    skills: ["Azure DevOps", "Docker", "Kubernetes", "OAuth 2.0", "JWT", "RBAC", "TDD", "Playwright", "Cypress"],
  },
];

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Stack — Mostafa Samir | Senior Full Stack Engineer" },
      {
        name: "description",
        content:
          "Full technical skills & stack: .NET 8 Microservices, Clean Architecture, Angular, Next.js, SQL Server, Redis, and Azure DevOps.",
      },
      { property: "og:title", content: "Skills & Stack — Mostafa Samir | Senior Full Stack Engineer" },
      { property: "og:description", content: "Full technical skills & stack: .NET 8 Microservices, Clean Architecture, Angular, Next.js, SQL Server, Redis, and Azure DevOps." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/skills" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Skills & Stack — Mostafa Samir | Senior Full Stack Engineer" },
      { name: "twitter:description", content: "Full technical skills & stack: .NET 8 Microservices, Clean Architecture, Angular, Next.js, SQL Server, Redis, and Azure DevOps." },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  pendingComponent: PageSkeleton,
  component: SkillsPage,
});

function SkillsPage() {
  const { tr } = useI18n();
  const { skillGroupTitle } = useLocalizedContent();
  return (
    <div className="min-h-screen select-none pt-24 pb-12 overflow-x-hidden">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-8 md:px-12">
        {/* Banner */}
        <section className="py-12 text-center">
          <span className="rounded-xl bg-foreground/10 px-4 py-1.5 font-sans text-xs font-black tracking-[0.25em] text-primary uppercase border border-border inline-block mb-4">
            {tr("skills.page.eyebrow")}
          </span>
          <h1 className="font-['Oswald',sans-serif] text-5xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight uppercase leading-tight mb-4">
            {tr("skills.title")}
          </h1>
          <p className="font-sans text-sm sm:text-base text-foreground/90 max-w-xl mx-auto leading-relaxed">
            {tr("skills.page.desc")}
          </p>
        </section>

        {/* Skills Cards Grid */}
        <section className="py-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroupsData.map(({ title, Icon, skills }) => (
              <div
                key={title}
                className="rounded-2xl bg-card p-8 border border-border shadow-[var(--shadow-glow)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="grid size-10 place-items-center rounded-xl bg-foreground/10 text-primary border border-border">
                    <Icon className="size-5" />
                  </div>
                  <h2 className="font-['Oswald',sans-serif] text-2xl font-bold text-card-foreground">
                    {skillGroupTitle(title)}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {skills.map((s) => (
                    <span
                      key={s}
                      dir="ltr"
                      className="rounded-xl bg-foreground/10 px-4 py-1.5 font-sans text-xs font-bold text-card-foreground border border-border shadow-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-card px-6 py-3 font-sans text-xs font-black tracking-widest text-card-foreground uppercase shadow-md border border-border hover:scale-105 transition-transform"
            >
              {tr("skills.page.projectsCta")}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-sans text-xs font-black tracking-widest text-primary-foreground uppercase shadow-md hover:scale-105 transition-transform"
            >
              {tr("skills.page.contactCta")}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
