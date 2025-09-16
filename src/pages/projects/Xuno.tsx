import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import InteractiveGrid from "@/components/InteractiveGrid"
import Navigation from "@/components/Navigation"
import xunoHero from "@/assets/xuno-hero.jpg"
import xunoSection2 from "@/assets/xuno-section-2.jpg"
import xunoSection3 from "@/assets/xuno-section-3.jpg"
import xunoLogo from "@/assets/xuno-logo.svg"

const Xuno = () => {
  const navigate = useNavigate()

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
        <div className="container mx-auto px-4 py-16">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Work
          </Button>
          
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                <img src={xunoLogo} alt="XUNO Logo" className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">XUNO</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Data Powered Advertising
                </p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                XUNO is a comprehensive web design project for a data-powered advertising platform. 
                The design focuses on showcasing personalized e-commerce solutions and revenue optimization features 
                through clean, modern interfaces and intuitive user experiences.
              </p>
              
              <div className="bg-card/50 rounded-lg p-8 border border-border mb-8">
                <h2 className="text-2xl font-semibold mb-4">Project Context</h2>
                <p className="text-muted-foreground mb-4">
                  This project involved creating a complete web design system for a data-powered advertising platform, 
                  focusing on clean interfaces and user-friendly experiences for e-commerce optimization.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-foreground">Role:</strong> UI/UX Designer
                  </div>
                  <div>
                    <strong className="text-foreground">Timeline:</strong> 2 months
                  </div>
                  <div>
                    <strong className="text-foreground">Tools:</strong> Figma
                  </div>
                  <div>
                    <strong className="text-foreground">Type:</strong> Web Design
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-8 text-center">Platform Overview</h2>
                <img 
                  src={xunoHero} 
                  alt="XUNO platform hero section showing personalized e-commerce solutions"
                  className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgb(39 39 42)';
                    e.currentTarget.style.minHeight = '400px';
                    e.currentTarget.style.display = 'flex';
                    e.currentTarget.style.alignItems = 'center';
                    e.currentTarget.style.justifyContent = 'center';
                    e.currentTarget.innerHTML = '<span style="color: rgb(161 161 170); font-size: 14px;">Platform Overview Screenshot</span>';
                  }}
                />
                <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                  XUNO's main platform showcasing personalized e-commerce solutions that increase revenue opportunities and strengthen customer relationships
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-8 text-center">Revenue Optimization Features</h2>
                <img 
                  src={xunoSection2} 
                  alt="XUNO revenue optimization features including personalized upsells and premium marketplace"
                  className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgb(39 39 42)';
                    e.currentTarget.style.minHeight = '400px';
                    e.currentTarget.style.display = 'flex';
                    e.currentTarget.style.alignItems = 'center';
                    e.currentTarget.style.justifyContent = 'center';
                    e.currentTarget.innerHTML = '<span style="color: rgb(161 161 170); font-size: 14px;">Revenue Features Screenshot</span>';
                  }}
                />
                <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                  Advanced features for e-commerce publishers including personalized upsells, premium marketplace integration, and tailored customer experiences
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-8 text-center">How XUNO Works</h2>
                <img 
                  src={xunoSection3} 
                  alt="XUNO workflow showing 4-step process and business benefits with machine learning capabilities"
                  className="w-4/5 max-w-4xl mx-auto rounded-lg border border-border mb-6 shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgb(39 39 42)';
                    e.currentTarget.style.minHeight = '400px';
                    e.currentTarget.style.display = 'flex';
                    e.currentTarget.style.alignItems = 'center';
                    e.currentTarget.style.justifyContent = 'center';
                    e.currentTarget.innerHTML = '<span style="color: rgb(161 161 170); font-size: 14px;">Workflow Diagram Screenshot</span>';
                  }}
                />
                <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                  The complete XUNO workflow from customer interaction to personalized engagement, powered by cutting-edge machine learning and seamless integrations
                </p>
              </div>

              <div className="bg-card/50 rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-6">Design Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Clean Interface Design</h3>
                    <p className="text-muted-foreground text-sm">Modern, intuitive layouts focused on user experience and accessibility</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Responsive Design</h3>
                    <p className="text-muted-foreground text-sm">Mobile-first approach ensuring optimal experience across all devices</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Visual Hierarchy</h3>
                    <p className="text-muted-foreground text-sm">Clear information organization with professional typography and color palette</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">User Flow Design</h3>
                    <p className="text-muted-foreground text-sm">Seamless user journeys optimized for conversion and engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Navigation />
    </div>
  )
}

export default Xuno