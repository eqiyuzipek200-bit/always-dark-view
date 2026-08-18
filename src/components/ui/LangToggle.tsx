import { useI18n } from "@/lib/i18n";

export function LangToggle() {
  const { lang, toggleLang, tr } = useI18n();
  return (
    <button
      onClick={toggleLang}
      aria-label={tr("common.language")}
      className="grid h-10 min-w-10 place-items-center rounded-xl border border-border bg-secondary/50 px-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
    >
      {lang === "en" ? "ع" : "EN"}
    </button>
  );
}
