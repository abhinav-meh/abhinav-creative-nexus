import ThreeBackground from '@/components/ThreeBackground'
import SiteNavLeft from '@/components/SiteNavLeft'
import SiteNavBottom from '@/components/SiteNavBottom'

const Index = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-white">
      {/* Background grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ThreeBackground />
      </div>

      {/* Navigation */}
      <SiteNavLeft />
      <SiteNavBottom />

      {/* Hero content */}
      <section className="relative z-20 flex flex-col items-center justify-center h-screen text-center space-y-4 pointer-events-auto">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
          Abhinav Mehrotra
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-gray-600">
          Creative Technologist &amp; Product Designer
        </h2>
        <p className="max-w-lg text-gray-500 text-sm md:text-base px-6">
          Researching, prototyping, designing and testing by day. Coding, no-coding, launching products by night.
        </p>

        {/* Social links row */}
        <div className="flex items-center space-x-4 text-gray-700 mt-4">
          <a href="https://dribbble.com/abhimeh" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            Dribbble
          </a>
          <a href="https://linkedin.com/in/abhimeh" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            LinkedIn
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            Resume
          </a>
        </div>

        {/* Reveal email hint */}
        <p className="text-xs text-gray-400 mt-4">Press E to reveal email</p>

        {/* Scroll cue */}
        <div className="absolute bottom-8 text-xs tracking-widest text-gray-400">
          SCROLL ↓
        </div>
      </section>
    </div>
  )
}

export default Index
