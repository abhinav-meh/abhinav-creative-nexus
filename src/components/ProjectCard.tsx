import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  category: 'Design' | 'Development' | 'Game Dev'
  icon?: string
}

const categoryStyles = {
  Design: 'bg-category-design/20 text-category-design border-category-design/30',
  Development: 'bg-category-developer/20 text-category-developer border-category-developer/30',
  'Game Dev': 'bg-category-experiment/20 text-category-experiment border-category-experiment/30'
}

export default function ProjectCard({ title, description, category, icon }: ProjectCardProps) {
  return (
    <div className="group bg-transparent border-2 border-border hover:border-primary/50 rounded-lg p-4 hover:shadow-card transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-fade-in h-[140px]">
      <div className="flex items-start gap-4">
        {icon && (
          <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
            {icon}
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <Badge 
              variant="outline" 
              className={`${categoryStyles[category]} shrink-0 text-xs`}
            >
              {category}
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}