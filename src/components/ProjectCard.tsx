import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

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

  return (
    <Link
      to={`/projects/${slug}`}
      className="group block"
    >
      <div
        className="
          relative overflow-hidden rounded-3xl
          bg-white/12
          backdrop-blur-[28px] [-webkit-backdrop-filter:blur(28px)]
          saturate-140 contrast-110
          border border-white/24
          ring-1 ring-inset ring-white/12
          shadow-[0_6px_24px_rgba(17,24,39,0.10)]
          hover:bg-white/18 hover:shadow-[0_10px_32px_rgba(17,24,39,0.14)]
          transition-all duration-300
          p-8 md:p-10
        "
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          e.currentTarget.style.setProperty('--mx', ((e.clientX - r.left)/r.width).toString())
          e.currentTarget.style.setProperty('--my', ((e.clientY - r.top)/r.height).toString())
        }}
      >
        {/* Top inner highlight */}
        <div 
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.42), rgba(255,255,255,0) 44%)'
          }}
        />
        
        {/* Subtle frost noise */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)',
            backgroundSize: '2px 2px'
          }}
        />
        {/* Content */}
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
