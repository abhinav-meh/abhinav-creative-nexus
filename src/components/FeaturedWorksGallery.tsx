import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import projects from '@/data/projects.json'
import { ArrowUpRight } from 'lucide-react'

type Project = (typeof projects)[number]

const widthClasses = [
  'md:col-span-2',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-2',
  'md:col-span-2',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-2',
  'md:col-span-3',
] as const

function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const widthClass = widthClasses[index % widthClasses.length]
  const isWide = widthClass !== 'md:col-span-1'

  useLayoutEffect(() => {
    const card = cardRef.current
    const content = contentRef.current
    const grid = card?.parentElement

    if (!card || !content || !grid) return

    const updateSpan = () => {
      const gridStyles = window.getComputedStyle(grid)
      const rowHeight = Number.parseFloat(gridStyles.gridAutoRows)
      const rowGap = Number.parseFloat(gridStyles.rowGap)

      if (!rowHeight) return

      const contentHeight = content.getBoundingClientRect().height
      const span = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap))
      card.style.gridRowEnd = `span ${span}`
    }

    const resizeObserver = new ResizeObserver(updateSpan)
    resizeObserver.observe(content)
    updateSpan()

    return () => resizeObserver.disconnect()
  }, [])

  return (
    <Link
      ref={cardRef}
      to={`/projects/${project.slug}`}
      className={`group relative self-start overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-[0_18px_50px_rgba(17,24,39,0.10)] backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 ${widthClass}`}
    >
      <div ref={contentRef} className="flex flex-col">
        <div
          className={`relative w-full overflow-hidden ${
            isWide ? 'aspect-[16/9]' : 'aspect-[4/3]'
          }`}
        >
          <img
            src={project.preview}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>

        <div className="flex flex-col gap-8 p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <span className="rounded-full border border-white/20 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-neutral-700 shadow-sm backdrop-blur-sm">
              {project.category}
            </span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold tracking-tight md:text-xl lg:text-2xl">
              {project.title}
            </h3>
            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function FeaturedWorksGallery() {
  return (
    <section className="w-full px-4 pb-24 md:px-6 md:pb-32 lg:px-8">
      <div className="mx-auto mb-8 flex max-w-7xl flex-col gap-3 px-2 md:mb-10 md:flex-row md:items-end md:justify-between md:px-0">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Featured Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">
            A glimpse into my expertise
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          A curated set of recent design, development, research, and
          tool-building work.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-flow-dense auto-rows-[8px] grid-cols-1 items-start gap-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <FeaturedProjectCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
