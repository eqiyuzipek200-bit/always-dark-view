import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { projects } from "@/data";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  ArrowRight,
  Code2,
  Globe,
  Database,
  Briefcase,
} from "lucide-react";
import { TechStack } from "@/components/ui/TechStack";
import { Badge } from "@/components/ui/ProjectCard";
import { PageShell } from "@/components/layout/PageShell";
import { CtaLink } from "@/components/ui/CtaLink";
import { ProjectDetailSkeleton } from "@/components/ui/Skeletons";
import { SmartImage } from "@/components/ui/SmartImage";
import { IMAGE_SIZES } from "@/lib/image";
import { useI18n } from "@/lib/i18n";
import { pageSeo } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/projects/$id")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.id);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params }) => {
    const project = projects.find((p) => p.id === params.id);
    if (!project) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${project.title} | Marketplace Systems Architect`;
    const description = project.description;
    const path = `/projects/${params.id}`;

    return pageSeo({
      title,
      description,
      path,
      type: "article",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description,
          url: absoluteUrl(path),
          creator: { "@type": "Person", name: "Mostafa Samir" },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Projects", item: absoluteUrl("/projects") },
            {
              "@type": "ListItem",
              position: 3,
              name: project.title,
              item: absoluteUrl(path),
            },
          ],
        },
      ],
    });
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
  pendingComponent: ProjectDetailSkeleton,
});

function ProjectNotFound() {
  const { tr } = useI18n();
  return (
    <PageShell contained={false}>
      <div className="flex flex-1 flex-col items-center justify-center py-32 text-center">
        <h1 className="mb-4 font-display text-4xl font-bold text-foreground">
          {tr("project.notFound.title")}
        </h1>
        <CtaLink to="/projects" variant="secondary" withArrow={false}>
          <ArrowLeft className="size-4 rtl:rotate-180" />
          {tr("project.notFound.back")}
        </CtaLink>
      </div>
    </PageShell>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const { tr } = useI18n();

  const hasLiveSite = project.live !== "#";
  const projectIndex = projects.findIndex((item) => item.id === project.id);
  const nextProject = projects[projectIndex + 1];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;

  return (
    <PageShell contained={false} padded={false} className="pb-24 pt-24 sm:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-5 sm:px-8"
      >
        {/* Breadcrumb */}
        <div className="mb-12 md:mb-16">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-foreground/60 hover:text-primary transition-colors"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180" />
            {tr("project.detail.back")}
          </Link>
        </div>

        {/* Immersive Typography Header */}
        <header className="mb-16 md:mb-24">
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {project.category}
            </Badge>
            <Badge className="bg-foreground/5 text-foreground/70">{project.type}</Badge>
            {project.status && (
              <Badge className="bg-foreground/5 text-foreground/70">{project.status}</Badge>
            )}
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-8">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/70 max-w-4xl leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Elevated Showcase Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-2xl group"
            >
              {/* Decorative browser dots */}
              <div className="absolute top-0 inset-x-0 h-12 bg-foreground/5 border-b border-border/50 flex items-center px-6 gap-2 z-10 backdrop-blur-md">
                <div className="size-3 rounded-full bg-foreground/20"></div>
                <div className="size-3 rounded-full bg-foreground/20"></div>
                <div className="size-3 rounded-full bg-foreground/20"></div>
              </div>

              <div className="pt-12 aspect-[16/10] sm:aspect-[16/9]">
                <SmartImage
                  src={project.image}
                  alt={`${project.title} showcase`}
                  width={1280}
                  height={800}
                  sizes={IMAGE_SIZES.hero}
                  priority
                  fallbackStyle={project.gradient}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Technical Implementation Section */}
            <section className="pt-8">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                  <Code2 className="size-8" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-black uppercase">
                  {tr("project.detail.arch")}
                </h2>
              </div>
              <div className="bg-card border border-border p-8 rounded-2xl shadow-[var(--shadow-glow)]">
                <TechStack techs={project.tech} />
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-[calc(var(--nav-h,4.5rem)+1.25rem)]">
            {/* Project Brief Card */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute -top-24 -right-24 size-64 bg-primary/10 blur-[100px] rounded-xl pointer-events-none" />

              <h3 className="font-display text-2xl font-black uppercase mb-8 tracking-wide">
                {tr("project.detail.brief")}
              </h3>

              <div className="space-y-8 relative z-10">
                {project.client && (
                  <div className="flex items-start gap-5">
                    <div className="mt-1 bg-foreground/5 p-2.5 rounded-xl text-primary border border-border/50">
                      <Briefcase className="size-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black tracking-widest uppercase text-foreground/50 mb-1.5">
                        {tr("project.detail.client")}
                      </div>
                      <div className="font-bold text-lg">{project.client}</div>
                    </div>
                  </div>
                )}

                {project.database && (
                  <div className="flex items-start gap-5">
                    <div className="mt-1 bg-foreground/5 p-2.5 rounded-xl text-primary border border-border/50">
                      <Database className="size-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black tracking-widest uppercase text-foreground/50 mb-1.5">
                        {tr("project.detail.db")}
                      </div>
                      <div className="font-bold text-lg">{project.database}</div>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-foreground/5 p-2.5 rounded-xl text-primary border border-border/50">
                    <Globe className="size-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black tracking-widest uppercase text-foreground/50 mb-1.5">
                      {tr("project.detail.status")}
                    </div>
                    <div className="font-bold text-lg">
                      {hasLiveSite ? "Live in Production" : "Archived / Local"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-12 space-y-3 relative z-10">
                {hasLiveSite && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full inline-flex justify-center items-center gap-3 rounded-xl bg-primary px-6 py-4 font-sans text-xs font-black tracking-widest text-primary-foreground uppercase shadow-lg hover:shadow-primary/25 transition-all hover:scale-[1.02]"
                  >
                    <ExternalLink className="size-4" />
                    {tr("project.detail.visit")}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full inline-flex justify-center items-center gap-3 rounded-xl border border-border bg-foreground/5 px-6 py-4 font-sans text-xs font-black tracking-widest text-foreground uppercase hover:bg-foreground/10 transition-all"
                  >
                    <Github className="size-4" />
                    {tr("project.detail.source")}
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* Enhanced Prev/Next Navigation */}
        <div className="mt-32 pt-16 border-t border-border">
          <h3 className="text-center font-display text-2xl font-black uppercase text-foreground/50 mb-12">
            {tr("project.detail.continue")}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {prevProject ? (
              <Link
                to="/projects/$id"
                params={{ id: prevProject.id }}
                className="group relative overflow-hidden rounded-2xl bg-card p-8 border border-border shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 font-sans text-[10px] font-black tracking-widest text-primary uppercase mb-3">
                    <ArrowLeft className="size-3 rtl:rotate-180" /> {tr("project.detail.prev")}
                  </div>
                  <h4 className="font-display text-2xl md:text-3xl font-black uppercase text-card-foreground">
                    {prevProject.title}
                  </h4>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                to="/projects/$id"
                params={{ id: nextProject.id }}
                className="group relative overflow-hidden rounded-2xl bg-card p-8 border border-border shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 text-end"
              >
                <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col items-end">
                  <div className="flex items-center gap-2 font-sans text-[10px] font-black tracking-widest text-primary uppercase mb-3">
                    {tr("project.detail.next")} <ArrowRight className="size-3 rtl:rotate-180" />
                  </div>
                  <h4 className="font-display text-2xl md:text-3xl font-black uppercase text-card-foreground">
                    {nextProject.title}
                  </h4>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </motion.div>
    </PageShell>
  );
}
