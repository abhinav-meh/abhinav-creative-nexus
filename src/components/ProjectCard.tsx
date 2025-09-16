import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

interface ProjectCardProps {
  title: string
  description: string
  category: 'Design' | 'Development' | 'Game Dev' | 'Research' | 'Creative Tech'
  icon?: string
}

const getProjectSlug = (title: string) => {
  // Special case for specific project titles
  if (title === 'OOP Principles in Creative Coding') {
    return 'oop-creative-coding'
  }
  
  return title.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '')
}

const categoryStyles = {
  Design: 'bg-category-design/20 text-category-design border-category-design/30',
  Development: 'bg-category-developer/20 text-category-developer border-category-developer/30',
  'Game Dev': 'bg-category-experiment/20 text-category-experiment border-category-experiment/30',
  Research: 'bg-category-research/20 text-category-research border-category-research/30',
  'Creative Tech': 'bg-primary/20 text-primary border-primary/30'
}

export default function ProjectCard({ title, description, category, icon }: ProjectCardProps) {
  const slug = getProjectSlug(title)
  
  return (
    <Link to={`/projects/${slug}`}>
      <div className="group bg-transparent border-2 border-border hover:border-primary/50 rounded-lg p-4 sm:p-6 hover:shadow-card transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-fade-in min-h-[160px] sm:h-[180px]">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 h-full">
          {icon && (
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary rounded-lg flex items-center justify-center text-2xl sm:text-3xl shrink-0 group-hover:scale-110 transition-transform">
              {typeof icon === 'string' && icon.length > 10 ? (
                <img src={icon} alt={`${title} icon`} className="w-8 h-8 sm:w-10 sm:h-10" />
              ) : (
                <span>{icon}</span>
              )}
            </div>
          )}
          
          <div className="flex-1 min-w-0 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <h3 className="font-semibold text-base sm:text-lg text-card-foreground group-hover:text-primary transition-colors truncate">
                {title}
              </h3>
              <Badge 
                variant="outline" 
                className={`${categoryStyles[category]} shrink-0 text-xs self-start sm:self-auto`}
              >
                {category}
              </Badge>
            </div>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3 sm:line-clamp-4 overflow-hidden">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}