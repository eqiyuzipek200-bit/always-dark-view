import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

interface PageShellProps {
  children: ReactNode;
  /** Wrap the content in a centered container. Disable for full-bleed pages. */
  contained?: boolean;
  className?: string;
}

/**
 * The single page chrome: navbar, main landmark and footer.
 * Routes render content only — never their own navbar/footer.
 */
export function PageShell({ children, contained = true, className }: PageShellProps) {
  return (
    <div className="min-h-screen select-none overflow-x-hidden pb-12 pt-24">
      <Navbar />
      <main className={cn(contained && "mx-auto max-w-6xl px-4 sm:px-8 md:px-12", className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
