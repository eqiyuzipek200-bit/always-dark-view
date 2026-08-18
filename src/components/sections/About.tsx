import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/lib/i18n";

const stats = [
  { value: "$1B+", label: "GMV shipped" },
  { value: "10+", label: "Years building" },
  { value: "5M+", label: "Users served" },
  { value: "12", label: "Marketplaces launched" },
];

export function About() {
  const { tr } = useI18n();

  return (
    <section id="about" className="scroll-mt-24 py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading kicker={tr("about.kicker")} title={tr("about.title")} />
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            {tr("about.body")}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-1">
                <div className="text-3xl font-extrabold text-accent">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Get in Touch Button */}
        <Reveal delay={0.4}>
          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-accent-outline"
            >
              {tr("about.cta")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
