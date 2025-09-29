import Navigation from '@/components/Navigation'
import InteractiveGrid from '@/components/InteractiveGrid'
import { Github, Linkedin, FileText } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Static Grid Pattern Background */}
      <div 
        className="absolute inset-0 bg-grid-pattern" 
        style={{backgroundSize: '64px 64px'}}
      ></div>
      
      {/* Interactive Grid Overlay */}
      <InteractiveGrid />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"></div>
      
      <div className="relative z-10 pb-24">
        <div className="container mx-auto px-6 py-20 max-w-4xl">
          {/* Header */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Abhinav Mehrotra</h1>
            <div className="text-xl text-muted-foreground space-y-2 mb-6">
              <p>MS-CTD Student, ATLAS Institute, CU Boulder</p>
              <p>Currently exploring the intersection of design, code, and creative technology.</p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/abhinav-meh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card/50 border border-border rounded-lg hover:bg-card hover:scale-105 transition-all duration-300 group"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinavux/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card/50 border border-border rounded-lg hover:bg-card hover:scale-105 transition-all duration-300 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-200" />
              </a>
              <a
                href="/resume.pdf"
                download="Abhinav-Mehrotra-Resume.pdf"
                className="p-3 bg-card/50 border border-border rounded-lg hover:bg-card hover:scale-105 transition-all duration-300 group"
                aria-label="Download Resume"
              >
                <FileText className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-200" />
              </a>
            </div>
          </header>

          {/* Main description */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  Teaching Assistant — guiding students in accessible design and development.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  <span className="text-primary">By day:</span> designer & developer, building products that are usable, beautiful, and human-centered.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="text-primary">By night:</span> serial house enthusiast, tinkerer, and maker of playful experiments.
                </p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Past Lives</h2>

            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Founding Designer at BeGig</h3>
                <p className="text-muted-foreground mb-2">Scaled a freelancing marketplace to 90k+ active users</p>
                <p className="leading-relaxed">
                  Built the design foundation and user experience that helped transform a startup idea into a thriving platform connecting freelancers with opportunities.
                </p>
              </div>
              
              <div className="border-l-2 border-muted pl-6">
                <h3 className="text-xl font-semibold mb-2">UX Designer at VDO.AI and WOZ</h3>
                <p className="leading-relaxed">
                  Crafted user experiences for advertising technology and communication platforms, focusing on intuitive interfaces and data-driven design decisions.
                </p>
              </div>
            </div>
          </section>

          {/* Playground Projects */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Playground Projects</h2>
            
            <div className="space-y-8">
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3">Amazeballs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Unity-powered game played with a custom wearable controller built from Arduino + accelerometer. 
                  Exploring the intersection of physical computing and game design.
                </p>
              </div>
              
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3">Interactive Installations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Data-driven experiments and playful prototypes that blur the line between art, technology, and human interaction.
                </p>
              </div>
            </div>
          </section>

          {/* Available indicator */}
          <div className="flex items-center gap-3 mt-16">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-medium">Available for projects</span>
          </div>
        </div>

        <Navigation />
      </div>
    </div>
  )
}

export default About