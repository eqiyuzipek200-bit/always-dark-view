import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data";
import { useI18n } from "@/lib/i18n";
import { useLocalizedContent } from "@/lib/localize";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export function Experience({ showHeading = true }: { showHeading?: boolean } = {}) {
  const { tr } = useI18n();
  const { experience: localizeExperience } = useLocalizedContent();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="experience"
      className="scroll-mt-24 overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-5">
        {showHeading && <SectionHeading title={tr("experience.title")} />}

        {/* Timeline Container */}
        <motion.div
          className="relative space-y-8 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline line */}
          <div className="absolute bottom-0 start-5 top-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent sm:start-8 md:left-1/2 md:-translate-x-1/2" />

          {experience.map((raw, index) => {
            const item = localizeExperience(raw);
            return (
            <motion.div key={item.company} className="relative" variants={itemVariants}>
              {/* Timeline dot */}
              <div className="absolute start-0 top-4 z-10 md:left-1/2 md:-translate-x-1/2">
                <div className="flex size-11 items-center justify-center rounded-xl border-2 border-background bg-gradient-to-br from-accent to-accent/80 shadow-lg shadow-accent/20 sm:size-16">
                  <Briefcase className="size-5 text-accent-foreground sm:size-7" />
                </div>
              </div>

              {/* Content card */}
              <div
                className={`ms-14 sm:ms-24 md:w-1/2 ${index % 2 === 1 ? "md:ms-auto md:me-0 md:pe-12" : "md:ms-0 md:ps-12"}`}
              >
                <Reveal delay={index * 0.1}>
                  <div className="group bg-card border border-border relative overflow-hidden rounded-2xl p-4 shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-2 sm:p-6 md:p-8">
                    {/* Accent corner */}
                    <div className="absolute -end-12 -top-12 size-32 rounded-xl bg-accent/5 blur-3xl transition-all duration-500 group-hover:bg-accent/10" />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Period badge */}
                      <div className="inline-flex items-center gap-2 rounded-xl bg-accent/10 px-3 py-1.5 mb-4 border border-accent/20">
                        <Calendar className="size-3.5 text-accent" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                          {item.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-3 break-words text-xl font-bold leading-tight text-foreground sm:text-2xl md:text-xl lg:text-2xl">
                        {item.role}
                      </h3>

                      {/* Company */}
                      <div className="mt-2 flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-accent" />
                        <p className="text-sm font-semibold text-accent">{item.company}</p>
                      </div>

                      {/* Divider */}
                      <div className="my-5 h-px bg-gradient-to-r from-border via-accent/20 to-transparent" />

                      {/* Achievement points */}
                      <ul className="space-y-3">
                        {item.points.map((point, pointIndex) => (
                          <motion.li
                            key={point}
                            className="flex gap-3 text-sm leading-relaxed text-muted-foreground group/item"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: pointIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="mt-1.5 shrink-0">
                              <ChevronRight className="size-4 text-accent/60 transition-all duration-300 group-hover/item:text-accent group-hover/item:translate-x-0.5 rtl:rotate-180" />
                            </div>
                            <span className="transition-colors duration-300 group-hover/item:text-foreground">
                              {point}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Hover indicator */}
                      <div className="absolute -end-1 top-1/2 h-12 w-1 -translate-y-1/2 bg-gradient-to-b from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>
                </Reveal>
              </div>
            </motion.div>
            );
          })}

          {/* End marker */}
          <motion.div
            className="relative ml-0 md:ml-1/2 md:-translate-x-1/2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: experience.length * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex size-11 items-center justify-center rounded-xl border-2 border-background bg-gradient-to-br from-accent/20 to-accent/10 sm:size-16">
              <div className="size-3 rounded-full bg-accent" />
            </div>
          </motion.div>
        </motion.div>

        {/* Summary stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { labelKey: "experience.stats.years", value: "4+" },
            { labelKey: "experience.stats.companies", value: "2" },
            { labelKey: "experience.stats.teamScale", value: "1000+" },
          ].map((stat) => (
            <div
              key={stat.labelKey}
              className="bg-card border border-border rounded-2xl px-2 py-5 text-center shadow-[var(--shadow-glow)] sm:px-4 sm:py-6 md:px-6 md:py-8"
            >
              <p className="text-xl font-bold text-accent sm:text-2xl md:text-3xl">{stat.value}</p>
              <p className="mt-1 break-words text-[10px] uppercase tracking-wide text-muted-foreground sm:text-xs sm:tracking-wider md:text-sm">
                {tr(stat.labelKey)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
