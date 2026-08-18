import { createFileRoute } from "@tanstack/react-router";
import { PageSkeleton } from "@/components/ui/Skeletons";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExperiencePreview } from "@/components/sections/home/ExperiencePreview";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Mostafa Samir | Senior Full Stack Engineer" },
      {
        name: "description",
        content:
          "Professional software engineering experience of Mostafa Samir — .NET 8 Microservices, SignalR IoT telemetry, and multi-tenant marketplace architectures.",
      },
      { property: "og:title", content: "Experience — Mostafa Samir | Senior Full Stack Engineer" },
      { property: "og:description", content: "Professional software engineering experience of Mostafa Samir — .NET 8 Microservices, SignalR IoT telemetry, and multi-tenant marketplace architectures." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/experience" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Experience — Mostafa Samir | Senior Full Stack Engineer" },
      { name: "twitter:description", content: "Professional software engineering experience of Mostafa Samir — .NET 8 Microservices, SignalR IoT telemetry, and multi-tenant marketplace architectures." },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  pendingComponent: PageSkeleton,
  component: ExperiencePage,
});

function ExperiencePage() {
  const { tr } = useI18n();
  return (
    <div className="min-h-screen select-none pt-24 pb-12 overflow-x-hidden">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-8 md:px-12">
        <section className="py-12 text-center">
          <span className="rounded-xl bg-foreground/10 px-4 py-1.5 font-sans text-xs font-black tracking-[0.25em] text-primary uppercase border border-border inline-block mb-4">
            {tr("experience.page.eyebrow")}
          </span>
          <h1 className="font-['Oswald',sans-serif] text-5xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight uppercase leading-tight mb-4">
            {tr("experience.page.title")}
          </h1>
          <p className="font-sans text-sm sm:text-base text-foreground/90 max-w-xl mx-auto leading-relaxed">
            {tr("experience.page.desc")}
          </p>
        </section>

        <ExperiencePreview />
      </main>
      <Footer />
    </div>
  );
}
