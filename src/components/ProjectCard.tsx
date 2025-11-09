import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  category: string
  icon?: string
  number: number
}

const getProjectSlug = (title: string) => {
  if (title === 'OOP Principles in Creative Coding') {
    return 'oop-creative-coding'
  }
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const categoryStyles: Record<string, string> = {
  'Design': 'text-design bg-design/10',
  'Development': 'text-development bg-development/10',
  'Research': 'text-research bg-research/10',
  'Tool': 'text-tool bg-tool/10'
}

export default function ProjectCard({ title, description, category, icon, number }: ProjectCardProps) {
  const slug = getProjectSlug(title)
  const isImageIcon = icon && (icon.endsWith('.svg') || icon.endsWith('.png') || icon.endsWith('.jpg'))

  return (
    <Link
      to={`/projects/${slug}`}
      className="group block"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        {/* Number */}
        <div className="text-6xl md:text-8xl font-light text-muted-foreground/30 tracking-tighter shrink-0">
          {number.toString().padStart(2, '0')}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-4 mb-4">
            {/* Icon */}
            {icon && (
              <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                {isImageIcon ? (
                  <img 
                    src={`/src/assets/${icon}`} 
                    alt={`${title} icon`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-3xl">{icon}</span>
                )}
              </div>
            )}

            {/* Title & Category */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="text-display font-bold group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <ArrowUpRight 
                  size={24} 
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                />
              </div>
              
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium tracking-tight ${categoryStyles[category] || ''}`}>
                {category}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground tracking-tight leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}
