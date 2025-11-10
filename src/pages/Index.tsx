import ThreeBackground from '@/components/ThreeBackground'
import SiteNavLeft from '@/components/SiteNavLeft'
import SiteNavBottom from '@/components/SiteNavBottom'

const Index = () => {
  return (
    <div className="relative screen bg-white">
      {/* Background grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ThreeBackground />
      </div>

      {/* Navigation */}
      <SiteNavLeft />
      <SiteNavBottom />

      {/* Hero content */}
      <main className="relative z-10 grid place-items-center h-full md:pl-20 pointer-events-auto">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-black">
            Abhinav Mehrotra
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-neutral-600">
            Creative Technologist & Product Designer
          </p>
        </div>
      </main>
    </div>
  )
}

export default Index
