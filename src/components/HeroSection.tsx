import { useState, useEffect } from 'react'
import PixelGrid from './PixelGrid'
import { supabase } from '@/integrations/supabase/client'
import { Github, Linkedin, FileText } from 'lucide-react'

export default function HeroSection() {
  const [visitorCount, setVisitorCount] = useState(40)
  const [showEmail, setShowEmail] = useState(false)

  useEffect(() => {
    // Track unique visitor
    const trackUniqueVisitor = async () => {
      try {
        // Get or create unique visitor ID
        let visitorId = localStorage.getItem('visitor_id')
        if (!visitorId) {
          visitorId = crypto.randomUUID()
          localStorage.setItem('visitor_id', visitorId)
        }

        // Track visitor and get updated count
        const { data: newCount, error } = await supabase
          .rpc('track_unique_visitor', { visitor_uuid: visitorId })
        
        if (newCount && !error) {
          setVisitorCount(newCount)
        } else {
          // Fallback: get current count
          const { data, error: fetchError } = await supabase
            .from('visitor_stats')
            .select('total_visitors')
            .single()
          
          if (data && !fetchError) {
            setVisitorCount(data.total_visitors)
          }
        }
      } catch (error) {
        console.error('Error tracking unique visitor:', error)
      }
    }

    trackUniqueVisitor()

    // Listen for 'e' key press to reveal email
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'e' || e.key === 'E') {
        setShowEmail(true)
        setTimeout(() => setShowEmail(false), 5000)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <section className="relative h-[50vh] overflow-hidden bg-hero-gradient animate-gradient-shift bg-[length:400%_400%] font-space-mono">
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Pixel Grid Background */}
      <PixelGrid />
      
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center pt-20 md:pt-0">
        <div className="max-w-4xl">
          <div className="mb-6 text-sm font-mono text-white animate-fade-in">
            Hello, visitor <span className="font-bold text-white">#{visitorCount.toLocaleString()}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="block text-white">Abhinav Mehrotra</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-white font-light mb-8 animate-slide-up [animation-delay:0.2s]">
            <span className="text-white">Creative Technologist</span> <span className="text-white">•</span> 
            <span className="text-white"> Product Designer</span> <span className="text-white">•</span> 
            <span className="text-white"> Developer</span>
          </div>
          
          <div className="text-lg md:text-xl text-white max-w-3xl leading-relaxed animate-slide-up [animation-delay:0.4s]">
            Researching, prototyping, designing and testing by day.{' '}
            <span className="text-white font-medium">Coding, no-coding, launching products by night.</span>
          </div>
          
          {!showEmail && (
            <div className="mt-8 text-sm text-white font-mono animate-slide-up [animation-delay:0.6s]">
              Press <kbd className="px-2 py-1 bg-secondary rounded text-white">E</kbd> to reveal email
            </div>
          )}
          
          {showEmail && (
            <div className="mt-8 text-lg font-mono text-white animate-fade-in">
              <a 
                href="mailto:abhinav.comms@gmail.com" 
                className="hover:text-primary transition-colors duration-200"
              >
                abhinav.comms@gmail.com
              </a>
            </div>
          )}
          
          {/* Social Links */}
          <div className="mt-8 flex gap-4 animate-slide-up [animation-delay:0.8s]">
            <a
              href="https://github.com/abhinav-meh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinavux/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-200" />
            </a>
            <a
              href="/resume.pdf"
              download="Abhinav-Mehrotra-Resume.pdf"
              className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
              aria-label="Download Resume"
            >
              <FileText className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}