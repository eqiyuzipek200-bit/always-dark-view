import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { credentials, type CredentialItem } from "@/data/credentials";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Award,
  Compass,
  ShieldCheck,
  Rocket,
  Database,
  Container,
  Languages,
} from "lucide-react";

const ICONS = [Award, Compass, ShieldCheck, Rocket, Database, Container, Languages];
const EASE = [0.22, 1, 0.36, 1] as const;
const AUTOPLAY_MS = 7000;

/** Groups of 3 credentials → one carousel slide each. */
function useSlides() {
  return useMemo(() => {
    const items = credentials.filter(
      (c) => c.tab === "certifications" || c.tab === "education",
    );
    const slides: CredentialItem[][] = [];
    for (let i = 0; i < items.length; i += 3) slides.push(items.slice(i, i + 3));
    return slides.slice(0, 3);
  }, []);
}

export function Testimonials() {
  const { tr, lang, isRTL } = useI18n();
  const reduce = useReducedMotion();
  const slides = useSlides();
  const total = slides.length;

  const [activeIdx, setActiveIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [openId, setOpenId] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number, direction: number) => {
      setDir(direction);
      setOpenId(null);
      setActiveIdx(((next % total) + total) % total);
    },
    [total],
  );

  const prev = useCallback(() => go(activeIdx - 1, -1), [activeIdx, go]);
  const next = useCallback(() => go(activeIdx + 1, 1), [activeIdx, go]);

  // Autoplay, paused on hover/focus or when a detail panel is open.
  useEffect(() => {
    if (paused || openId || reduce || total < 2) return;
    const id = window.setTimeout(next, AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [paused, openId, reduce, total, next, activeIdx]);

  const slide = slides[activeIdx] ?? [];
  const featured = slide[0];
  const side = slide.slice(1);

  const enterX = reduce ? 0 : (isRTL ? -1 : 1) * dir * 48;

  return (
    <section
      id="awards"
      className="w-full bg-background py-20 px-4 sm:px-8 md:px-12 text-foreground select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") (isRTL ? prev : next)();
        if (e.key === "ArrowLeft") (isRTL ? next : prev)();
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Title & Controls */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 24 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="font-sans text-xs font-black tracking-[0.2em] text-foreground/80 uppercase block mb-3">
                No{" "}
                <span className="inline-block relative w-[2ch] align-baseline">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={activeIdx}
                      initial={reduce ? {} : { y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={reduce ? {} : { y: -8, opacity: 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="absolute inset-0 text-primary"
                    >
                      {activeIdx + 1}
                    </motion.span>
                  </AnimatePresence>
                </span>
                /{total}
              </span>
              <h2 className="font-['Oswald',sans-serif] text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-8">
                {tr("awards.title1")}
                <br />
                {tr("awards.title2")}
              </h2>
            </motion.div>

            <div className="flex items-center gap-3">
              <motion.button
                onClick={prev}
                whileTap={reduce ? {} : { scale: 0.9 }}
                whileHover={reduce ? {} : { y: -2 }}
                className="grid size-11 place-items-center rounded-xl bg-foreground/10 border border-border text-foreground hover:bg-foreground/20 transition-colors"
                aria-label={tr("awards.prev")}
              >
                <ChevronLeft className="size-5 rtl:rotate-180" />
              </motion.button>
              <motion.button
                onClick={next}
                whileTap={reduce ? {} : { scale: 0.9 }}
                whileHover={reduce ? {} : { y: -2 }}
                className="grid size-11 place-items-center rounded-xl bg-foreground/10 border border-border text-foreground hover:bg-foreground/20 transition-colors"
                aria-label={tr("awards.next")}
              >
                <ChevronRight className="size-5 rtl:rotate-180" />
              </motion.button>

              {/* Progress dots */}
              <div className="flex items-center gap-2 ms-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i, i > activeIdx ? 1 : -1)}
                    aria-label={`${i + 1}/${total}`}
                    aria-current={i === activeIdx}
                    className="relative h-1.5 rounded-full bg-foreground/20 overflow-hidden transition-all"
                    style={{ width: i === activeIdx ? 32 : 12 }}
                  >
                    {i === activeIdx && (
                      <motion.span
                        layoutId="award-dot"
                        className="absolute inset-0 rounded-full bg-primary"
                        transition={{ duration: 0.4, ease: EASE }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Slide content */}
          <AnimatePresence mode="wait" custom={dir} initial={false}>
            <motion.div
              key={activeIdx}
              className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
              initial={reduce ? { opacity: 0 } : { opacity: 0, x: enterX }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, x: -enterX }}
              transition={{ duration: 0.45, ease: EASE }}
              drag={reduce ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) (isRTL ? prev : next)();
                else if (info.offset.x > 70) (isRTL ? next : prev)();
              }}
            >
              {/* Featured card */}
              {featured && (
                <FeaturedCard
                  item={featured}
                  lang={lang}
                  reduce={!!reduce}
                  open={openId === featured.id}
                  onToggle={() =>
                    setOpenId((o) => (o === featured.id ? null : featured.id))
                  }
                  detailsLabel={tr("awards.learnMore")}
                  index={0}
                />
              )}

              {/* Side cards */}
              <div className="flex flex-col gap-5">
                {side.map((item, i) => (
                  <SideCard
                    key={item.id}
                    item={item}
                    lang={lang}
                    reduce={!!reduce}
                    index={i + 1}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function iconFor(id: string) {
  let sum = 0;
  for (const ch of id) sum += ch.charCodeAt(0);
  return ICONS[sum % ICONS.length] ?? Award;
}

function FeaturedCard({
  item,
  lang,
  reduce,
  open,
  onToggle,
  detailsLabel,
  index,
}: {
  item: CredentialItem;
  lang: "en" | "ar";
  reduce: boolean;
  open: boolean;
  onToggle: () => void;
  detailsLabel: string;
  index: number;
}) {
  const Icon = iconFor(item.id);
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE, delay: reduce ? 0 : 0.08 * index }}
      className="relative rounded-2xl bg-card p-8 border border-border shadow-[var(--shadow-glow)] flex flex-col items-center text-center"
    >
      <span className="rounded-xl bg-foreground/10 px-4 py-1 font-sans text-[10px] font-black tracking-widest text-primary uppercase mb-6 border border-border">
        {item.year}
      </span>

      <motion.div
        whileHover={reduce ? {} : { rotate: -6, scale: 1.06 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="grid size-16 place-items-center rounded-xl bg-foreground/15 text-foreground mb-6 border border-border shadow-inner"
      >
        <Icon className="size-8 text-primary" />
      </motion.div>

      <h3 className="font-['Oswald',sans-serif] text-2xl font-bold text-card-foreground mb-3 leading-tight">
        {item.title[lang]}
      </h3>

      <p className="font-sans text-xs text-card-foreground/85 leading-relaxed mb-6 max-w-xs">
        {item.summary[lang]}
      </p>

      <button
        onClick={onToggle}
        aria-expanded={open}
        className="group inline-flex items-center gap-3 rounded-xl bg-background px-6 py-3 shadow-md border border-border transition-transform hover:scale-105"
      >
        <span className="grid size-6 place-items-center rounded-xl bg-primary text-primary-foreground">
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="grid place-items-center"
          >
            <Play className="size-3 fill-primary-foreground text-primary-foreground ms-0.5" />
          </motion.span>
        </span>
        <span className="font-sans text-xs font-black tracking-[0.2em] text-foreground uppercase">
          {detailsLabel}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="w-full overflow-hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: reduce ? 0 : 0.05, delayChildren: 0.1 } } }}
              className="mt-6 space-y-2 text-start"
            >
              {item.highlights[lang].map((h) => (
                <motion.li
                  key={h}
                  variants={{
                    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 8 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="flex gap-2 font-sans text-[11px] leading-relaxed text-card-foreground/80"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {h}
                </motion.li>
              ))}
            </motion.ul>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {item.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-border bg-foreground/10 px-2 py-0.5 font-sans text-[9px] font-black uppercase tracking-widest text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
            {item.credentialId && (
              <p className="mt-3 font-sans text-[10px] tracking-widest text-card-foreground/60 uppercase">
                {item.credentialId}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SideCard({
  item,
  lang,
  reduce,
  index,
}: {
  item: CredentialItem;
  lang: "en" | "ar";
  reduce: boolean;
  index: number;
}) {
  const Icon = iconFor(item.id);
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE, delay: reduce ? 0 : 0.08 * index }}
      whileHover={reduce ? {} : { y: -6 }}
      className="rounded-2xl bg-card p-6 border border-border shadow-md flex flex-col items-center text-center hover:bg-card/90 transition-colors"
    >
      <div className="grid size-12 place-items-center rounded-xl bg-foreground/10 text-foreground mb-3">
        <Icon className="size-6 text-primary" />
      </div>
      <h4 className="font-['Oswald',sans-serif] text-lg font-bold text-card-foreground mb-2 leading-tight max-w-[220px]">
        {item.title[lang]}
      </h4>
      <p className="font-sans text-[11px] text-card-foreground/70 mb-3 max-w-[240px] leading-relaxed">
        {item.org[lang]}
      </p>
      <span className="rounded-xl bg-foreground/10 px-3 py-0.5 font-sans text-[9px] font-black tracking-widest text-primary uppercase border border-border">
        {item.year}
      </span>
    </motion.div>
  );
}
