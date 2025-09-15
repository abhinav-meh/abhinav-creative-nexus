import { useState, useEffect } from 'react'
import PixelGrid from './PixelGrid'

export default function HeroSection() {
  const [visitorCount, setVisitorCount] = useState(55715)
  const [showEmail, setShowEmail] = useState(false)

  useEffect(() => {
    // Simulate visitor count increment
    const timer = setTimeout(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3) + 1)
    }, 2000)

    // Listen for 'e' key press to reveal email
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'e' || e.key === 'E') {
        setShowEmail(true)
        setTimeout(() => setShowEmail(false), 5000)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <section className="relative h-[50vh] overflow-hidden bg-hero-gradient animate-gradient-shift bg-[length:400%_400%] font-space-mono">
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Pixel Grid Background */}
      <PixelGrid />
      
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
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
              hello@abhinavmehrotra.com
            </div>
          )}
        </div>
      </div>
      
      {/* Gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}