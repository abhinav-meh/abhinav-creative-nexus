import SiteNavLeft from '@/components/SiteNavLeft'
import SiteNavBottom from '@/components/SiteNavBottom'

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavLeft />
      <SiteNavBottom />
      
      <div className="container mx-auto px-6 py-32 max-w-4xl md:pl-32">
        <h1 className="text-hero font-bold mb-12">About</h1>
        
        <div className="space-y-12 text-lg tracking-tight leading-relaxed">
          <p className="text-muted-foreground">
            I'm a Creative Technologist and Product Designer passionate about crafting meaningful digital experiences 
            that bridge the gap between human needs and technological possibilities.
          </p>
          
          <div>
            <h2 className="text-heading font-bold mb-6">Background</h2>
            <p className="text-muted-foreground">
              Currently studying at the University of Colorado Boulder, I combine rigorous research methodologies 
              with hands-on development to create products that are both beautiful and functional.
            </p>
          </div>
          
          <div>
            <h2 className="text-heading font-bold mb-6">Approach</h2>
            <p className="text-muted-foreground">
              My work lives at the intersection of design and technology. I believe in prototyping early, 
              testing often, and iterating based on real user feedback. Whether it's conducting user research, 
              designing interfaces, or writing code, I'm committed to creating experiences that matter.
            </p>
          </div>
          
          <div>
            <h2 className="text-heading font-bold mb-6">Interests</h2>
            <p className="text-muted-foreground">
              Beyond work, I'm fascinated by creative coding, generative art, and exploring how emerging 
              technologies can enhance human creativity and connection. I'm always experimenting with new 
              tools and techniques in my digital lab.
            </p>
          </div>
          
          <div className="pt-8 border-t border-border">
            <h2 className="text-heading font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-4">
              I'm always interested in collaborating on meaningful projects or discussing ideas. 
              Feel free to reach out via email or connect with me on LinkedIn.
            </p>
            <div className="flex flex-col gap-2">
              <a 
                href="mailto:abhinavmehrotra@berkeley.edu" 
                className="text-primary hover:underline"
              >
                abhinavmehrotra@berkeley.edu
              </a>
              <a 
                href="https://www.linkedin.com/in/abhinavux/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/abhinav-meh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
