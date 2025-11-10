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
        <ProjectList />
      </div>
    </div>
  )
}

export default Index
