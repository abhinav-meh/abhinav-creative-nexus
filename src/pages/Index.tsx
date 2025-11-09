import HeroSection from '@/components/HeroSection'
import ProjectList from '@/components/ProjectList'
import MinimalHeader from '@/components/MinimalHeader'
import ThreeBackground from '@/components/ThreeBackground'

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-background/95 -z-10" />
      <ThreeBackground />
      <div className="relative z-10">
        <MinimalHeader />
        <HeroSection />
        <ProjectList />
      </div>
    </div>
  )
}

export default Index
