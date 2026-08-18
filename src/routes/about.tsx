import { Link, createFileRoute } from "@tanstack/react-router";
import { PageSkeleton } from "@/components/ui/Skeletons";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18n";

const stats = [
  { value: "4+", key: "about.stat.years" },
  { value: "300%", key: "about.stat.throughput" },
  { value: "1,000+", key: "about.stat.iot" },
  { value: ".NET 8", key: "about.stat.microservices" },
];

const principles = [1, 2, 3, 4].map((n) => ({
  titleKey: `about.principle.${n}.title`,
  bodyKey: `about.principle.${n}.body`,
}));

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mostafa Samir | Senior Full Stack Engineer" },
      {
        name: "description",
        content:
          "Senior Full Stack Engineer with 4+ years of experience specializing in high-performance .NET 8 Microservices & Next.js marketplaces.",
      },
      { property: "og:title", content: "About — Mostafa Samir | Senior Full Stack Engineer" },
      { property: "og:description", content: "Senior Full Stack Engineer with 4+ years of experience specializing in high-performance .NET 8 Microservices & Next.js marketplaces." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About — Mostafa Samir | Senior Full Stack Engineer" },
      { name: "twitter:description", content: "Senior Full Stack Engineer with 4+ years of experience specializing in high-performance .NET 8 Microservices & Next.js marketplaces." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  pendingComponent: PageSkeleton,
  component: AboutPage,
});

function AboutPage() {
  const { tr } = useI18n();
  return (
    <div className="min-h-screen select-none pt-24 pb-12 overflow-x-hidden">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-8 md:px-12">
        {/* Header Banner */}
        <section className="py-12 text-center">
          <span className="rounded-xl bg-foreground/10 px-4 py-1.5 font-sans text-xs font-black tracking-[0.25em] text-primary uppercase border border-border inline-block mb-4">
            {tr("about.page.eyebrow")}
          </span>
          <h1 className="font-['Oswald',sans-serif] text-5xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight uppercase leading-tight mb-4">
            {tr("about.page.title")}
          </h1>
          <p className="font-sans text-sm sm:text-base text-foreground/90 max-w-2xl mx-auto leading-relaxed">
            {tr("about.page.desc")}
          </p>
        </section>

        {/* Stats Grid */}
        <section className="py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.key}
                className="rounded-2xl bg-card p-6 text-center border border-border shadow-lg"
              >
                <div
                  dir="ltr"
                  className="font-['Oswald',sans-serif] text-3xl sm:text-4xl font-bold text-card-foreground"
                >
                  {s.value}
                </div>

                <div className="font-sans text-[11px] font-black tracking-wider text-card-foreground/80 uppercase mt-1">
                  {tr(s.key)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-12">
          <h2 className="font-['Oswald',sans-serif] text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center uppercase tracking-tight">
            {tr("about.page.approach")}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.titleKey}
                className="rounded-2xl bg-card p-8 border border-border shadow-[var(--shadow-glow)]"
              >
                <h3 className="font-['Oswald',sans-serif] text-2xl font-bold text-card-foreground flex items-center gap-3 mb-3">
                  <CheckCircle2 className="size-5 text-primary" />
                  {tr(p.titleKey)}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-card-foreground/85 leading-relaxed">
                  {tr(p.bodyKey)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 rounded-xl bg-card px-6 py-3 font-sans text-xs font-black tracking-widest text-card-foreground uppercase shadow-md border border-border hover:scale-105 transition-transform"
            >
              {tr("about.page.skillsCta")}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-sans text-xs font-black tracking-widest text-primary-foreground uppercase shadow-md hover:scale-105 transition-transform"
            >
              {tr("about.page.contactCta")}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
