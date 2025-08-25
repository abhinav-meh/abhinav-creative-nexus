import HeroSection from '@/components/HeroSection'
import ProjectGrid from '@/components/ProjectGrid'
import Navigation from '@/components/Navigation'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProjectGrid />
      <Navigation />
    </div>
  )
}

export default Index