import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from './ui/button'
import SiteNavLeft from './SiteNavLeft'
import SiteNavBottom from './SiteNavBottom'

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
    <div className="h-screen bg-background overflow-y-auto">
      <SiteNavLeft />
      <SiteNavBottom />
      
      <div className="container mx-auto px-6 py-32 max-w-5xl md:pl-32">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/work')}
          className="mb-12 text-muted-foreground hover:text-foreground -ml-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Work
        </Button>

        {/* Project Header */}
        <div className="mb-16">
          <h1 className="text-display md:text-hero font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground tracking-tight">{subtitle}</p>
          
          {buttons && <div className="mt-6 flex flex-wrap gap-3">{buttons}</div>}
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
