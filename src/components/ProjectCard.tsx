import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  category: string
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
  'Design': 'text-design',
  'Development': 'text-development',
  'Research': 'text-research',
  'Tool': 'text-tool'
}

export default function ProjectCard({ title, description, category, number }: ProjectCardProps) {
  const slug = getProjectSlug(title)

  return (
    <Link
      to={`/projects/${slug}`}
      className="group block"
    >
      <div className="border border-border rounded-lg p-8 md:p-10 hover:border-foreground transition-colors">
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
    </Link>
  )
}
