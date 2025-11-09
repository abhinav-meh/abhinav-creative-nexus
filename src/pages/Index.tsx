import HeroSection from '@/components/HeroSection'
import ProjectList from '@/components/ProjectList'
import MinimalHeader from '@/components/MinimalHeader'
import ThreeBackground from '@/components/ThreeBackground'

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
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
