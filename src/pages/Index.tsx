import HeroSection from '@/components/HeroSection'
import ProjectGrid from '@/components/ProjectGrid'
import Changelog from '@/components/Changelog'
import Navigation from '@/components/Navigation'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <div className="flex">
        <main className="flex-1">
          <ProjectGrid />
        </main>
        <Changelog />
      </div>
      
      <Navigation />
    </div>
  )
}

export default Index