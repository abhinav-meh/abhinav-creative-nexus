import { useMemo, useState } from "react";
import projects from "@/data/projects.json";
import ThreeBackground from "@/components/ThreeBackground";
import SiteNavLeft from '@/components/SiteNavLeft';
import SiteNavBottom from '@/components/SiteNavBottom';

type Project = {
  title: string;
  slug: string;
  category?: string;
  description?: string;
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
    () => (projects as Project[]),
    []
  );
  const [hovered, setHovered] = useState<Project | null>(null);

  return (
    <div className="min-h-[100svh] bg-white text-neutral-900 overflow-auto">
      <SiteNavLeft />
      <SiteNavBottom />
      
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 md:pl-32">
        <div className="grid md:grid-cols-[420px_1fr] gap-10 py-14 pb-24 md:py-20">
          {/* LEFT: titles */}
          <section className="md:pr-6">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-8">Selected Work</h1>
            <ul className="space-y-4 md:space-y-3">
              {items.map((p) => (
                <li key={p.slug}>
                  <button
                    className="group w-full text-left"
                    onMouseEnter={() => setHovered(p)}
                    onFocus={() => setHovered(p)}
                    onMouseLeave={() => setHovered((curr) => (curr?.slug === p.slug ? null : curr))}
                    onBlur={() => setHovered((curr) => (curr?.slug === p.slug ? null : curr))}
                    onClick={() => (window.location.href = `/projects/${p.slug}`)}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl md:text-3xl font-extrabold leading-tight
                                       text-neutral-900 group-hover:text-black transition-colors">
                        {p.title}
                      </span>
                      {p.category && (
                        <span className="text-sm uppercase tracking-wide text-neutral-400">
                          {p.category}
                        </span>
                      )}
                    </div>
                    <div className="h-px w-full bg-neutral-200/70 mt-3 group-hover:bg-neutral-300 transition-colors" />
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* RIGHT: preview (sticky) - only visible on hover */}
          {hovered && (
            <aside className="hidden md:block fixed right-0 top-0 w-[50vw] h-[100svh] z-30">
              <figure className="absolute inset-0">
                <img
                  src={projectCovers[hovered.slug] || `/images/projects/${hovered.slug}.jpg`}
                  alt={hovered.title}
                  className="h-full w-full object-cover
                             opacity-0 animate-[fadeIn_280ms_ease_forwards]"
                  loading="eager"
                />
                <figcaption className="sr-only">{hovered.title}</figcaption>
              </figure>
            </aside>
          )}
        </div>
      </div>

      {/* Fade animation */}
      <style>{`
        @keyframes fadeIn { to { opacity: 1 } }
      `}</style>
    </div>
  );
}
