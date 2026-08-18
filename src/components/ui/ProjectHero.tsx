import type { Project } from "@/data/projects";
import { SmartImage } from "@/components/ui/SmartImage";
import { IMAGE_SIZES } from "@/lib/image";

interface ProjectHeroProps {
  project: Project;
  children?: React.ReactNode;
}

export function ProjectHero({ project, children }: ProjectHeroProps) {
  return (
    <div className="relative h-64 overflow-hidden sm:h-96 md:h-[500px]">
      <SmartImage
        src={project.image}
        alt={`${project.title} screenshot`}
        width={1280}
        height={500}
        sizes={IMAGE_SIZES.hero}
        priority
        fallbackStyle={project.gradient}
        className="size-full"
        imgClassName="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/70" />
      {children}
    </div>
  );
}
