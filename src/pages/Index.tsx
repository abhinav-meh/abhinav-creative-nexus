import HeroSection from '@/components/HeroSection'
import ProjectGrid from '@/components/ProjectGrid'
import Navigation from '@/components/Navigation'

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" style={{backgroundSize: '32px 32px'}}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      
      <div className="relative z-10">
        <HeroSection />
        <ProjectGrid />
        <Navigation />
      </div>
    </div>
  )
}

export default Index