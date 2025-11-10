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
        <section className="relative z-10">
          {/* Subtle backdrop plate that gives blur something to sample */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[0]
                       bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(0,0,0,0.06),transparent_60%)]
                       bg-no-repeat"
          />
          {/* Cards container above the plate */}
          <div className="relative z-[1]">
            <ProjectList />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Index
