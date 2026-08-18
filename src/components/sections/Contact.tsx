import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/lib/i18n";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export function Contact({ showHeading = true }: { showHeading?: boolean } = {}) {
  const { tr } = useI18n();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (_values: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success(tr("contact.success"));
    reset();
  };

  const fieldClass =
    "w-full rounded-xl border border-border bg-foreground/10 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-foreground/50 focus:border-primary/60 focus:bg-foreground/15";

  return (
    <section id="contact" className="scroll-mt-24 py-28">
      <div className="mx-auto max-w-2xl px-5">
        {showHeading && <SectionHeading title={tr("contact.title")} />}
        <Reveal>
          <p className="mb-10 text-center text-foreground/70">{tr("contact.subtitle")}</p>
        </Reveal>

        <Reveal>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl bg-card border border-border shadow-[var(--shadow-glow)] space-y-5 p-7">
            <div>
              <label className="mb-2 block text-sm font-medium text-card-foreground">{tr("contact.name")}</label>
              <input {...register("name")} className={fieldClass} placeholder="Jane Doe" />
              {errors.name && (
                <p className="mt-1.5 text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-card-foreground">{tr("contact.email")}</label>
              <input {...register("email")} className={fieldClass} placeholder="jane@company.com" />
              {errors.email && (
                <p className="mt-1.5 text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-card-foreground">{tr("contact.message")}</label>
              <textarea
                {...register("message")}
                rows={5}
                className={`${fieldClass} resize-none`}
                placeholder="Tell me about your marketplace..."
              />
              {errors.message && (
                <p className="mt-1.5 text-sm text-destructive">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-sans text-sm font-black tracking-widest text-primary-foreground uppercase shadow-md transition-all hover:scale-105 disabled:opacity-60"
            >
              {tr("contact.send")}
              <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
