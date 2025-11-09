import HeroSection from '@/components/HeroSection'
import ProjectList from '@/components/ProjectList'
import MinimalHeader from '@/components/MinimalHeader'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MinimalHeader />
      <HeroSection />
      <ProjectList />
    </div>
  )
}

export default Index
