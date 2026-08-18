import { useI18n } from "@/lib/i18n";
import {
  categoryAr,
  experienceAr,
  projectAr,
  projectStatusAr,
  projectTypeAr,
  skillGroupAr,
  testimonialAr,
} from "@/data/ar";
import type { Project } from "@/data/projects";
import type { ExperienceItem } from "@/data/experience";
import type { Testimonial } from "@/data/testimonials";

/**
 * Content localisation: the data layer stays English, this hook returns the
 * Arabic counterpart when the UI language is Arabic (falls back to English).
 */
export function useLocalizedContent() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  return {
    lang,
    isAr: ar,
    /** Pick between an English and an Arabic string. */
    pick: (en: string, arabic?: string) => (ar && arabic ? arabic : en),
    projectTitle: (p: Project) => (ar && projectAr[p.id]?.title) || p.title,
    projectDescription: (p: Project) => (ar && projectAr[p.id]?.description) || p.description,
    category: (value: string) => (ar && categoryAr[value]) || value,
    projectType: (value: string) => (ar && projectTypeAr[value]) || value,
    projectStatus: (value?: string) => (value ? (ar && projectStatusAr[value]) || value : value),
    skillGroupTitle: (value: string) => (ar && skillGroupAr[value]) || value,
    experience: (item: ExperienceItem): ExperienceItem =>
      ar && experienceAr[item.company] ? { ...item, ...experienceAr[item.company] } : item,
    testimonial: (item: Testimonial): Testimonial =>
      ar && testimonialAr[item.name] ? { ...item, ...testimonialAr[item.name] } : item,
  };
}

/**
 * Latin-only strings (tech names, client brands, URLs) keep LTR flow even
 * inside an RTL page, otherwise trailing punctuation jumps to the wrong side.
 */
export const latinProps = { dir: "ltr" as const, className: "keep-latin" };
