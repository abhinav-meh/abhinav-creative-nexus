import projects from "@/data/projects.json";
import SiteNavLeft from '@/components/SiteNavLeft';
import SiteNavBottom from '@/components/SiteNavBottom';

// Map project slugs to their hero/cover images
const projectCovers: Record<string, string> = {
  "tempo": "/src/assets/tempo-ui-home.png",
  "begig": "/src/assets/begig-client-dashboard.jpg",
  "woz": "/src/assets/woz-overview.jpg",
  "xuno": "/src/assets/xuno-hero.jpg",
  "dither-er": "/src/assets/dither-er-section-1.jpg",
  "amazeballs": "/src/assets/amazeballs-main-menu.png",
};

export default function Work() {
  const items = projects;

  return (
    <div className="min-h-[100svh] bg-white text-neutral-900 overflow-auto">
      <SiteNavLeft />
      <SiteNavBottom />
      
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 md:pl-32">
        {/* 2-col on desktop, stacked on mobile */}
        <div className="grid md:grid-cols-[360px_1fr] gap-10 py-14 pb-24 md:py-20">
          
          {/* LEFT: static copy (sticky on desktop) */}
          <aside className="md:sticky md:top-20 md:h-fit">
            <div className="md:pr-6">
              <h1 className="text-3xl md:text-5xl font-black tracking-tight">Selected Work</h1>
              <p className="mt-4 text-base md:text-lg text-neutral-600">
                A selection of design, research, and tools I've built. Click any tile to explore.
              </p>
            </div>
          </aside>

          {/* RIGHT: project image grid */}
          <main className="pb-[88px] md:pb-0">
            <ul
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
              aria-label="Projects"
            >
              {items.map((p) => (
                <li key={p.slug} className="group relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm hover:shadow-md transition-shadow">
                  <a href={`/projects/${p.slug}`} className="block h-full">
                    <div className="relative aspect-[4/3]">
                      {/* cover image */}
                      <img
                        src={projectCovers[p.slug] || `/images/projects/${p.slug}.jpg`}
                        alt={`${p.title} project preview`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      {/* subtle overlay + caption */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                        <h3 className="text-white drop-shadow-lg text-base font-semibold">
                          {p.title}
                        </h3>
                        <span className="text-white/90 text-xs font-medium">{p.category}</span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </main>
        </div>
      </div>
    </div>
  );
}
