import { useNavigate } from 'react-router-dom'
import ThreeBackground from '@/components/ThreeBackground'
import SiteNavLeft from '@/components/SiteNavLeft'
import SiteNavBottom from '@/components/SiteNavBottom'
import ScrollIndicator from '@/components/ScrollIndicator'
import FeaturedWorksGallery from '@/components/FeaturedWorksGallery'
import ScrollTakeoverBackground from '@/components/ScrollTakeoverBackground'
import { Github, Linkedin, FileText } from 'lucide-react'

const Index = () => {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background particle wave */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ThreeBackground />
      </div>
      <ScrollTakeoverBackground />

      {/* Navigation */}
      <SiteNavLeft />
      <SiteNavBottom />

      <main className="relative z-10 md:pl-20">
        {/* Hero content */}
        <section id="home-hero" className="relative flex min-h-[100svh] flex-col items-center justify-center gap-4 px-6 pb-28 pt-24 text-center bg-transparent">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black tracking-tight md:text-7xl">
              Abhinav Mehrotra
            </h1>
            <h2 className="mt-4 text-2xl font-light text-muted-foreground md:text-3xl">
              Product Designer &amp; Developer
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              Researching, prototyping, designing and testing by day. Coding, no-coding, launching products by night.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => navigate('/work')}
              className="mt-8 rounded-full border border-foreground/20 px-6 py-3 text-sm tracking-wide text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              See My Work
            </button>

            {/* Social icons */}
            <div className="mt-6 flex justify-center space-x-4">
              <a
                href="https://gist.github.com/abhinav-meh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-opacity hover:opacity-70"
              >
                <Github className="h-8 w-8" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinavux/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-opacity hover:opacity-70"
              >
                <Linkedin className="h-8 w-8" strokeWidth={1.5} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-opacity hover:opacity-70"
              >
                <FileText className="h-8 w-8" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <ScrollIndicator />
        </section>

        <FeaturedWorksGallery />
      </main>
    </div>
  )
}

export default Index
