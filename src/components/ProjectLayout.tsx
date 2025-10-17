import Navigation from '@/components/Navigation'
import InteractiveGrid from '@/components/InteractiveGrid'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ReactNode } from 'react'

interface ProjectLayoutProps {
  children: ReactNode
  title: string
  subtitle: string
  icon?: string
  buttons?: ReactNode
}

const ProjectLayout = ({ children, title, subtitle, icon, buttons }: ProjectLayoutProps) => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background relative">
      {/* Static Grid Pattern Background */}
      <div 
        className="absolute inset-0 bg-grid-pattern" 
        style={{backgroundSize: '64px 64px'}}
      ></div>
      
      {/* Interactive Grid Overlay */}
      <InteractiveGrid />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"></div>
      
      <div className="relative z-10 pb-24">
        <div className="container mx-auto px-4 py-16">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Work
          </Button>
          
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                {icon && (
                  icon.endsWith('.svg') || icon.endsWith('.png') || icon.endsWith('.jpg') || icon.endsWith('.webp') ? (
                    <img 
                      src={icon} 
                      alt={`${title} logo`} 
                      className="w-12 h-12" 
                    />
                  ) : (
                    <span className="text-3xl">{icon}</span>
                  )
                )}
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">{title}</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  {subtitle}
                </p>
                {buttons && (
                  <div className="flex gap-3">
                    {buttons}
                  </div>
                )}
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              {children}
            </div>
          </div>
        </div>
      </div>
      
      <Navigation />
    </div>
  )
}

export default ProjectLayout