import HeroSection from '@/components/HeroSection'
import ProjectList from '@/components/ProjectList'
import MinimalHeader from '@/components/MinimalHeader'
import ThreeBackground from '@/components/ThreeBackground'

const Index = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-white via-white to-white/80">
      <ThreeBackground />
      <div className="relative z-10 pointer-events-auto">
        <MinimalHeader />
        <HeroSection />
        <div className="relative bg-gradient-to-b from-transparent to-white/60">
          <ProjectList />
        </div>
      </div>
    </div>
  )
}

export default Index
