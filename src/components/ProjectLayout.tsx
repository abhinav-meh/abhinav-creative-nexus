import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from './ui/button'
import MinimalHeader from './MinimalHeader'

interface ProjectLayoutProps {
  children: ReactNode
  title: string
  subtitle: string
  icon?: string
  buttons?: ReactNode
}

const ProjectLayout = ({ children, title, subtitle, icon, buttons }: ProjectLayoutProps) => {
  const navigate = useNavigate()
  const isImageIcon = icon && (icon.endsWith('.svg') || icon.endsWith('.png') || icon.endsWith('.jpg') || icon.endsWith('.webp'))

  return (
    <div className="min-h-screen bg-background">
      <MinimalHeader />
      
      <div className="container mx-auto px-6 py-32 max-w-5xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-12 text-muted-foreground hover:text-foreground -ml-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Work
        </Button>

        {/* Project Header */}
        <div className="mb-16 flex items-start gap-8">
          {icon && (
            <div className="w-20 h-20 flex items-center justify-center shrink-0">
              {isImageIcon ? (
                <img 
                  src={`/src/assets/${icon}`} 
                  alt={`${title} icon`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-5xl">{icon}</span>
              )}
            </div>
          )}
          
          <div className="flex-1">
            <h1 className="text-display md:text-hero font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground tracking-tight">{subtitle}</p>
            
            {buttons && <div className="mt-6 flex flex-wrap gap-3">{buttons}</div>}
          </div>
        </div>

        {/* Project Content */}
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ProjectLayout
