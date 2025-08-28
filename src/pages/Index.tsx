import HeroSection from '@/components/HeroSection'
import ProjectGrid from '@/components/ProjectGrid'
import Navigation from '@/components/Navigation'

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Static Grid Pattern Background */}
      <div 
        className="absolute inset-0 bg-grid-pattern" 
        style={{backgroundSize: '64px 64px'}}
      ></div>
      
      {/* Interactive Grid Overlay */}
      <div 
        className="absolute inset-0 grid grid-cols-[repeat(auto-fit,64px)] grid-rows-[repeat(auto-fit,64px)] pointer-events-none"
        style={{gridTemplateColumns: 'repeat(auto-fit, 64px)', gridTemplateRows: 'repeat(auto-fit, 64px)'}}
      >
        {Array.from({ length: Math.ceil(window.innerWidth / 64) * Math.ceil(window.innerHeight / 64) }).map((_, i) => (
          <div
            key={i}
            className="border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 pointer-events-auto"
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"></div>
      
      <div className="relative z-10">
        <HeroSection />
        <ProjectGrid />
        <Navigation />
      </div>
    </div>
  )
}

export default Index