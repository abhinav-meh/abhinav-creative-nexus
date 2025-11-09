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
        className={`
          relative overflow-hidden border rounded-2xl p-8 md:p-10 
          transition-all duration-300
          ${isHovered 
            ? 'border-foreground/20 bg-background/50 backdrop-blur-xl shadow-md' 
            : 'border-border/10 bg-background shadow-sm'
          }
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Parallax Sheen */}
        {FLAGS.cardSheen && isHovered && (
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-200"
            style={sheenStyle}
          />
        )}

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
