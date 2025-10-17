import HeroSection from '@/components/HeroSection'
import ProjectGrid from '@/components/ProjectGrid'
import Navigation from '@/components/Navigation'
import InteractiveGrid from '@/components/InteractiveGrid'

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Static Grid Pattern Background */}
      <div 
        className="absolute inset-0 bg-grid-pattern" 
        style={{backgroundSize: '64px 64px'}}
      ></div>
      
      {/* Interactive Grid Overlay */}
      <InteractiveGrid />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"></div>
      
      <div className="relative z-10 pb-24">
        <HeroSection />
        <ProjectGrid />
        <Navigation />
      </div>
    </div>
  )
}

export default Index