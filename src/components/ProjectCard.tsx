import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useState, useRef, MouseEvent, CSSProperties } from 'react'
import { FLAGS } from '@/config/flags'

interface ProjectCardProps {
  title: string
  description: string
  category: string
  number: number
  slug: string
}

const categoryStyles: Record<string, string> = {
  'Design': 'text-design',
  'Development': 'text-development',
  'Research': 'text-research',
  'Tool': 'text-tool'
}

export default function ProjectCard({ title, description, category, number, slug }: ProjectCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !FLAGS.cardSheen) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    
    setMousePosition({ x, y })
  }

  const sheenStyle: CSSProperties = FLAGS.cardSheen ? {
    background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255, 255, 255, 0.35), transparent 60%)`,
    mixBlendMode: 'soft-light' as const,
  } : {}

  return (
    <Link
      to={`/projects/${slug}`}
      className="group block"
    >
      <div 
        ref={cardRef}
        className="
          relative overflow-hidden rounded-3xl p-8 md:p-10
          border border-white/35
          bg-white/18
          backdrop-blur-2xl
          [-webkit-backdrop-filter:blur(24px)]
          ring-1 ring-inset ring-white/10
          shadow-[0_6px_24px_rgba(17,24,39,0.10)]
          hover:shadow-[0_10px_32px_rgba(17,24,39,0.14)]
          transition-all duration-300
          will-change-transform
        "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Liquid sheen (cursor-follow) */}
        {FLAGS.cardSheen && (
          <div 
            className="pointer-events-none absolute inset-0 transition-opacity duration-200"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `
                radial-gradient(
                  520px 240px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
                  rgba(255,255,255,0.55) 0%,
                  rgba(255,255,255,0.25) 26%,
                  rgba(255,255,255,0.10) 46%,
                  transparent 62%
                )
              `,
              mixBlendMode: 'soft-light' as const,
            }}
          />
        )}

        {/* Subtle inner highlight at top (liquid rim) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.45), rgba(255,255,255,0) 42%)'
          }}
        />

        {/* Very faint noise for realism */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><filter id='n' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 0 0.25'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`
          }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-6 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <ArrowUpRight 
                  size={24} 
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" 
                />
              </div>
              
              <span className={`text-sm font-medium tracking-tight ${categoryStyles[category] || 'text-muted-foreground'}`}>
                {category}
              </span>
            </div>

            <div className="text-4xl font-light text-muted-foreground/20 tracking-tighter">
              {number.toString().padStart(2, '0')}
            </div>
          </div>

          <p className="text-base text-muted-foreground tracking-tight leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}
