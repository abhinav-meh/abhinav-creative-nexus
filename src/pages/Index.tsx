import HeroSection from '@/components/HeroSection'
import ProjectList from '@/components/ProjectList'
import MinimalHeader from '@/components/MinimalHeader'
import ThreeBackground from '@/components/ThreeBackground'

const Index = () => {
  return (
    <div className="min-h-screen relative bg-white">
      <ThreeBackground />
      <div className="relative z-10 pointer-events-auto">
        <MinimalHeader />
        <HeroSection />
        <section className="relative z-10 bg-gradient-to-b from-transparent to-white/70">
          <ProjectList />
        </section>
      </div>
    </div>
  )
}

export default Index
