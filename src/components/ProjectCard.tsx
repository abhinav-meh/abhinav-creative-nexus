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
      <div className="group bg-transparent border-2 border-border hover:border-primary/50 rounded-lg p-6 hover:shadow-card transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-fade-in h-[180px]">
        <div className="flex items-start gap-5">
          {icon && (
            <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform">
              {icon.endsWith('.svg') ? (
                <img src={icon} alt={`${title} icon`} className="w-10 h-10" />
              ) : (
                icon
              )}
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <Badge 
                variant="outline" 
                className={`${categoryStyles[category]} shrink-0 text-xs`}
              >
                {category}
              </Badge>
            </div>
            
            <p className="text-base text-muted-foreground leading-relaxed line-clamp-4">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}