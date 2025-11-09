import HeroSection from '@/components/HeroSection'
import ProjectList from '@/components/ProjectList'
import MinimalHeader from '@/components/MinimalHeader'
import ThreeBackground from '@/components/ThreeBackground'
import GridBackground from '@/components/GridBackground'

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-background/95 -z-10" />
      <GridBackground />
      <ThreeBackground />
      <div className="relative">
        <MinimalHeader />
        <HeroSection />
        <ProjectList />
      </div>
    </div>
  )
}

export default Index
