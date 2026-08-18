import { createFileRoute } from "@tanstack/react-router";
import { PageSkeleton } from "@/components/ui/Skeletons";
import { Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { useI18n } from "@/lib/i18n";

const channels = [
  { Icon: Mail, labelKey: "contact.channel.email", value: "m.ssaid356@gmail.com", href: "mailto:m.ssaid356@gmail.com" },
  { Icon: Phone, labelKey: "contact.channel.phone", value: "+20 106 735 8073", href: "https://wa.me/+201067358073" },
  { Icon: MapPin, labelKey: "contact.channel.location", valueKey: "contact.channel.locationValue" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mostafa Samir | Senior Full Stack Engineer" },
      {
        name: "description",
        content:
          "Get in touch with Mostafa Samir for marketplace engineering, .NET 8 Microservices, or full-stack web applications.",
      },
      { property: "og:title", content: "Contact — Mostafa Samir | Senior Full Stack Engineer" },
      { property: "og:description", content: "Get in touch with Mostafa Samir for marketplace engineering, .NET 8 Microservices, or full-stack web applications." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact — Mostafa Samir | Senior Full Stack Engineer" },
      { name: "twitter:description", content: "Get in touch with Mostafa Samir for marketplace engineering, .NET 8 Microservices, or full-stack web applications." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  pendingComponent: PageSkeleton,
  component: ContactPage,
});

function ContactPage() {
  const { tr } = useI18n();
  return (
    <div className="min-h-screen select-none pt-24 pb-12 overflow-x-hidden">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-8 md:px-12">
        {/* Banner */}
        <section className="py-12 text-center">
          <span className="rounded-xl bg-foreground/10 px-4 py-1.5 font-sans text-xs font-black tracking-[0.25em] text-primary uppercase border border-border inline-block mb-4">
            {tr("contact.page.eyebrow")}
          </span>
          <h1 className="font-['Oswald',sans-serif] text-5xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight uppercase leading-tight mb-4">
            {tr("contact.page.title")}
          </h1>
          <p className="font-sans text-sm sm:text-base text-foreground/90 max-w-xl mx-auto leading-relaxed">
            {tr("contact.page.desc")}
          </p>
        </section>

        {/* Contact Channels Grid */}
        <section className="py-6 mb-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {channels.map(({ Icon, labelKey, value, valueKey, href }) => (
              <div
                key={labelKey}
                className="rounded-2xl bg-card p-7 border border-border shadow-lg text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-transform"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-foreground/10 text-card-foreground mb-4 border border-border">
                  <Icon className="size-5 text-primary" />
                </div>
                <span className="font-sans text-[10px] font-black tracking-[0.2em] text-card-foreground/80 uppercase mb-1">
                  {tr(labelKey)}
                </span>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="font-sans text-sm font-bold text-card-foreground hover:text-primary transition-colors break-all"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="font-sans text-sm font-bold text-card-foreground">{valueKey ? tr(valueKey) : value}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <Contact showHeading={false} />
      </main>
      <Footer />
    </div>
  );
}
