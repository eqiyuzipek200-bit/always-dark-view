import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function PageHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="px-4 pb-6 pt-28 sm:px-5 sm:pt-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 eyebrow text-muted-foreground transition-colors hover:text-accent"
          >
            <ChevronLeft className="size-4 rtl:rotate-180" />
            Back home
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          {kicker && (
            <span className="mt-8 inline-block eyebrow-wide text-accent">
              {kicker}
            </span>
          )}
          <h1 className="mt-4 break-words font-display text-[clamp(2rem,10vw,3.75rem)] font-black uppercase leading-[0.95] tracking-tight text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
          )}
          <div className="mt-8 h-1.5 w-16 rounded-full bg-accent" />
        </Reveal>
      </div>
    </section>
  );
}
