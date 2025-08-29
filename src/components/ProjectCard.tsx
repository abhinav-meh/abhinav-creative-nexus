import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  category: 'Product' | 'Website' | 'Feature' | 'Research' | 'Experiment'
  icon?: string
}

const categoryStyles = {
  Product: 'bg-category-product/20 text-category-product border-category-product/30',
  Website: 'bg-category-website/20 text-category-website border-category-website/30',
  Feature: 'bg-category-feature/20 text-category-feature border-category-feature/30',
  Research: 'bg-category-research/20 text-category-research border-category-research/30',
  Experiment: 'bg-category-experiment/20 text-category-experiment border-category-experiment/30'
}

export default function ProjectCard({ title, description, category, icon }: ProjectCardProps) {
  return (
    <div className="group bg-transparent border-2 border-border hover:border-primary/50 rounded-lg p-4 hover:shadow-card transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-fade-in">
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