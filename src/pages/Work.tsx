import { useMemo, useState, useEffect } from "react";
import projects from "@/data/projects.json";
import ThreeBackground from "@/components/ThreeBackground";
import SiteNavLeft from '@/components/SiteNavLeft';
import SiteNavBottom from '@/components/SiteNavBottom';

type Project = { 
  title: string; 
  slug: string; 
  cover?: string;
};

// Map project slugs to their hero/cover images
const projectCovers: Record<string, string> = {
  "tempo": "/src/assets/tempo-ui-home.png",
  "begig": "/src/assets/begig-client-dashboard.jpg",
  "woz": "/src/assets/woz-overview.jpg",
  "xuno": "/src/assets/xuno-hero.jpg",
  "dither-er": "/src/assets/dither-er-section-1.jpg",
  "amazeballs": "/src/assets/amazeballs-main-menu.png",
  "oop-creative-coding": "/OOP_Principles_Creative_Coding_Paper.pdf",
  "confluence": "/src/assets/confluence-thumbnail.svg",
};

export default function Work() {
  const items = useMemo<Project[]>(
    () => (projects as any[]).map(p => ({ 
      title: p.title, 
      slug: p.slug, 
      cover: projectCovers[p.slug]
    })),
    []
  );
  const [hovered, setHovered] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsMobile(m.matches);
    apply();
    m.addEventListener?.("change", apply);
    return () => m.removeEventListener?.("change", apply);
  }, []);

  const handleEnter = (p: Project) => !isMobile && setHovered(p);
  const handleLeave = (p: Project) => !isMobile && setHovered(curr => (curr?.slug === p.slug ? null : curr));
  const go = (slug: string) => (window.location.href = `/projects/${slug}`);

  return (
    <div className="min-h-[100svh] bg-white text-neutral-900">
      <SiteNavLeft />
      <SiteNavBottom />
      
      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] min-h-[100svh]">
        {/* LEFT: solid white, text column */}
        <section className="relative bg-white z-10 md:pl-32 md:pr-10 px-6 py-12 md:py-16 flex items-center">
          <div className="w-full">
            <ul className="space-y-8 max-w-none">
              {items.map((p) => (
                <li key={p.slug}>
                  <button
                    className="group w-full text-left"
                    onMouseEnter={() => handleEnter(p)}
                    onMouseLeave={() => handleLeave(p)}
                    onFocus={() => handleEnter(p)}
                    onBlur={() => handleLeave(p)}
                    onClick={() => go(p.slug)}
                  >
                    <span className="block uppercase tracking-widest text-[clamp(20px,3.0vw,40px)]
                                     leading-[1.1] font-bold text-neutral-900 transition-colors">
                      {p.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* RIGHT: wave only */}
        <aside className="relative md:sticky md:top-0 md:h-[100svh] overflow-hidden z-0">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <ThreeBackground />
          </div>

          {/* On desktop hover, show preview image over the wave */}
          {!isMobile && hovered && (
            <img
              src={hovered.cover ?? `/images/projects/${hovered.slug}.jpg`}
              alt={hovered.title}
              className="absolute inset-0 z-10 h-full w-full object-cover opacity-0 animate-[fadeIn_220ms_ease_forwards]"
              loading="eager"
            />
          )}
        </aside>
      </div>

      <style>{`
        @keyframes fadeIn { to { opacity: 1 } }
      `}</style>
    </div>
  );
}
