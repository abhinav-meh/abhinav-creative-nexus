import { useEffect, useMemo, useState } from "react";
import ThreeBackground from "@/components/ThreeBackground";
import SiteNavLeft from '@/components/SiteNavLeft';
import SiteNavBottom from '@/components/SiteNavBottom';
import projects from "@/data/projects.json";

type Project = {
  slug: string;
  title: string;
  preview: string;
};

export default function Work() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  // Detect touch (no hover) to disable previews on mobile/tablet
  const isTouch = useMemo(
    () => (typeof window !== "undefined" ? matchMedia("(hover: none)").matches : false),
    []
  );

  // Ensure we don't "stick" a preview when the device changes orientation
  useEffect(() => {
    if (isTouch) setActiveSlug(null);
  }, [isTouch]);

  return (
    <div className="h-screen overflow-hidden bg-white text-neutral-900">
      <SiteNavLeft />
      <SiteNavBottom />
      
      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] min-h-[100svh]">
        {/* LEFT: solid white, titles always visible */}
        <section className="relative z-10 bg-white md:pl-32 md:pr-10 px-6 py-12 md:py-16 flex items-center">
          <ul className="w-full space-y-8 md:space-y-10">
            {(projects as Project[]).map((p) => (
              <li
                key={p.slug}
                onMouseEnter={() => !isTouch && setActiveSlug(p.slug)}
                onMouseLeave={() => !isTouch && setActiveSlug(null)}
                onFocus={() => !isTouch && setActiveSlug(p.slug)}
                onBlur={() => !isTouch && setActiveSlug(null)}
                className="uppercase tracking-tight font-bold text-[clamp(24px,3.5vw,48px)] leading-[1.1]"
              >
                <a
                  href={`/projects/${p.slug}`}
                  className="outline-none focus:underline underline-offset-4 text-neutral-900 hover:text-black transition-colors"
                  aria-describedby={`p-${p.slug}`}
                >
                  {p.title}
                </a>
                <span id={`p-${p.slug}`} className="sr-only">
                  View {p.title}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* RIGHT: wave with preview layer above it */}
        <section className="relative z-0 h-[100svh] overflow-hidden">
          {/* Particle wave stays behind */}
          <div className="absolute inset-0">
            <ThreeBackground />
          </div>

          {/* Preview layer — fades/scales in on hover/focus (desktop only) */}
          <div className="absolute inset-0">
            {(projects as Project[]).map((p, idx) => (
              <img
                key={p.slug}
                src={p.preview}
                alt=""
                aria-hidden="true"
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
                className={[
                  "absolute inset-0 w-full h-full object-cover",
                  "transition-[opacity,transform,filter] duration-300 ease-out will-change-transform",
                  !isTouch && activeSlug === p.slug
                    ? "opacity-100 scale-100 blur-0"
                    : "opacity-0 scale-[0.96] blur-[2px] pointer-events-none",
                ].join(" ")}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
