import type { ReactNode, Ref } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

interface PageShellProps {
  children: ReactNode;
  /** Wrap the content in a centered container. Disable for full-bleed pages. */
  contained?: boolean;
  /** Apply the standard top/bottom page padding. Disable for hero-first pages. */
  padded?: boolean;
  /** Extra classes for the <main> landmark. */
  className?: string;
  /** Optional ref for pages with pointer-driven main content. */
  mainRef?: Ref<HTMLElement>;
}

/**
 * The single page chrome: navbar, main landmark and footer.
 * Routes render content only — never their own navbar/footer.
 */
export function PageShell({
  children,
  contained = true,
  padded = true,
  className,
  mainRef,
}: PageShellProps) {
  return (
    <div className="flex min-h-screen select-none flex-col overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main
        ref={mainRef}
        className={cn(
          "flex-1",
          padded && "pb-12 pt-24",
          contained && "mx-auto w-full max-w-6xl px-4 sm:px-8 md:px-12",
          className,
        )}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
