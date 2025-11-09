import { useEffect, useState } from 'react'
import { Github, Linkedin, FileDown } from 'lucide-react'
import { supabase } from '@/integrations/supabase/client'
import ScrollIndicator from './ScrollIndicator'

export default function HeroSection() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [showEmail, setShowEmail] = useState(false)

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const { data, error } = await supabase.rpc('track_unique_visitor')
        if (error) throw error
        if (data !== null) {
          setVisitorCount(data)
        }
      } catch (error) {
        console.error('Error tracking visitor:', error)
      }
    }

    trackVisitor()

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'e' || e.key === 'E') {
        setShowEmail(true)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-32">
      {/* Visitor Counter */}
      {visitorCount !== null && (
        <div className="absolute top-24 left-6 md:left-12 text-xs tracking-tight text-muted-foreground">
          Visitor #{visitorCount.toLocaleString()}
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-hero font-bold mb-6">
          Abhinav Mehrotra
        </h1>
        
        <p className="text-display font-light mb-8 text-muted-foreground">
          Creative Technologist & Product Designer
        </p>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-muted-foreground tracking-tight leading-relaxed">
          Researching, prototyping, designing and testing by day. 
          Coding, no-coding, launching products by night.
        </p>

        {/* Contact & Links */}
        <div className="flex flex-col items-center gap-6">
          {/* Email */}
          <div className="text-sm tracking-tight">
            {isTouchDevice || showEmail ? (
              <a 
                href="mailto:abhinavmehrotra@berkeley.edu" 
                className="text-foreground hover:text-primary transition-colors"
              >
                abhinavmehrotra@berkeley.edu
              </a>
            ) : (
              <p className="text-muted-foreground">
                Press <kbd className="px-2 py-1 bg-muted rounded text-xs">E</kbd> to reveal email
              </p>
            )}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/abhinav-meh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinavux/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Resume"
            >
              <FileDown size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  )
}
