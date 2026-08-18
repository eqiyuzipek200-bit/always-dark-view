import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data";
import { useI18n } from "@/lib/i18n";
import { useLocalizedContent } from "@/lib/localize";

export function Skills() {
  const { tr } = useI18n();
  const { skillGroupTitle } = useLocalizedContent();
  return (
    <section id="skills" className="scroll-mt-24 bg-background py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading title={tr("skills.title")} />
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="bg-card border border-border h-full rounded-2xl p-7 shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-1">
                <h3 className="mb-5 flex items-center gap-3 text-xl font-bold">
                  <span className="size-2 rounded-full bg-accent" />
                  {skillGroupTitle(group.title)}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      dir="ltr"
                      className="rounded-xl border border-border bg-foreground/10 px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
