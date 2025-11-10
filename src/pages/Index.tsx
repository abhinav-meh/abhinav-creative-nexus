import ThreeBackground from '@/components/ThreeBackground'
import SiteNavLeft from '@/components/SiteNavLeft'
import SiteNavBottom from '@/components/SiteNavBottom'
import { Github, Linkedin, FileText } from 'lucide-react'

const Index = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background particle wave */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ThreeBackground />
      </div>

      {/* Navigation */}
      <SiteNavLeft />
      <SiteNavBottom />

      {/* Hero content */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center space-y-4 z-10 bg-transparent">
        <h1 className="text-6xl md:text-7xl font-black tracking-tight">
          Abhinav Mehrotra
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-gray-600">
          Creative Technologist &amp; Product Designer
        </h2>
        <p className="max-w-xl text-gray-500 text-base md:text-lg px-6">
          Researching, prototyping, designing and testing by day. Coding, no-coding, launching products by night.
        </p>
        
        {/* Social icons */}
        <div className="flex space-x-4 pt-4">
          <a 
            href="https://gist.github.com/abhinav-meh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-70 transition-opacity"
            style={{ color: '#737373' }}
          >
            <Github className="w-8 h-8" strokeWidth={1.5} />
          </a>
          <a 
            href="https://www.linkedin.com/in/abhinavux/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-70 transition-opacity"
            style={{ color: '#737373' }}
          >
            <Linkedin className="w-8 h-8" strokeWidth={1.5} />
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-70 transition-opacity"
            style={{ color: '#737373' }}
          >
            <FileText className="w-8 h-8" strokeWidth={1.5} />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Index
