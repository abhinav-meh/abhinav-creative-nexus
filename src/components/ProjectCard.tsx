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
          relative overflow-hidden rounded-2xl
          bg-white/10 backdrop-blur-xl
          border border-white/20
          shadow-[inset_0_0_0.5px_rgba(255,255,255,0.4),0_4px_20px_rgba(0,0,0,0.05)]
          saturate-150 contrast-110
          transition-all duration-300
          hover:bg-white/20 hover:shadow-[inset_0_0_0.5px_rgba(255,255,255,0.5),0_6px_30px_rgba(0,0,0,0.08)]
          p-8 md:p-10
          before:absolute before:inset-0 
          before:bg-gradient-to-br before:from-white/20 before:to-transparent 
          before:opacity-30 before:pointer-events-none
        "
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          e.currentTarget.style.setProperty('--mx', ((e.clientX - r.left)/r.width).toString())
          e.currentTarget.style.setProperty('--my', ((e.clientY - r.top)/r.height).toString())
        }}
      >
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
