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
    <div className="min-h-[100svh] bg-white text-neutral-900 overflow-auto">
      <SiteNavLeft />
      <SiteNavBottom />
      
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 md:pl-32">
        <div className="grid md:grid-cols-[420px_1fr] gap-10 py-14 pb-24 md:py-20">
          
          {/* LEFT — titles in ALL CAPS, no tags */}
          <section className="relative z-10 md:pr-6">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-8 text-neutral-900">SELECTED WORK</h1>
            <ul className="space-y-4 md:space-y-3 relative z-10">
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
                    <span className="block uppercase tracking-[0.08em] text-2xl md:text-3xl
                                     font-extrabold leading-tight text-neutral-900 group-hover:text-black transition-colors">
                      {p.title}
                    </span>
                    <div className="h-px w-full bg-neutral-200/70 mt-3 group-hover:bg-neutral-300 transition-colors" />
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* RIGHT — wave container by default; image on hover (desktop) */}
          <aside className="relative md:sticky md:top-0 md:h-[100svh] rounded-3xl overflow-hidden z-0">
            {/* Wave lives in its own container, always rendered */}
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

            {/* Frame */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.06] rounded-3xl pointer-events-none z-20" />
          </aside>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { to { opacity: 1 } }
      `}</style>
    </div>
  );
}
