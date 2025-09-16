import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import InteractiveGrid from "@/components/InteractiveGrid"
import Navigation from "@/components/Navigation"
import xunoHero from "@/assets/xuno-hero.jpg"
import xunoSection2 from "@/assets/xuno-section-2.jpg"
import xunoSection3 from "@/assets/xuno-section-3.jpg"

const Xuno = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Interactive Grid Overlay */}
      <InteractiveGrid />
      
      {/* Navigation */}
      <Navigation />
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Work
          </Button>
          
          <div className="max-w-4xl">
            <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
              <div className="lg:w-1/3">
                <div className="w-32 h-32 bg-secondary rounded-lg flex items-center justify-center text-6xl mb-6">
                  📊
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">XUNO</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Data Powered Advertising
                </p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
              <p className="text-muted-foreground mb-6">
                XUNO is a comprehensive web design project for a data-powered advertising platform. 
                The design focuses on showcasing personalized e-commerce solutions and revenue optimization features 
                through clean, modern interfaces and intuitive user experiences.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Design Features</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Clean, modern interface design</li>
                <li>Intuitive user experience flow</li>
                <li>Mobile-responsive layouts</li>
                <li>Professional color palette and typography</li>
                <li>Clear information hierarchy and visual organization</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Design Tools Used</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Figma', 'Adobe XD', 'UI/UX Design', 'Responsive Design', 'Prototyping', 'Visual Design'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Platform Overview</h3>
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
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                    XUNO's main platform showcasing personalized e-commerce solutions that increase revenue opportunities and strengthen customer relationships
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6">Revenue Optimization Features</h3>
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
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                    Advanced features for e-commerce publishers including personalized upsells, premium marketplace integration, and tailored customer experiences
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6">How XUNO Works</h3>
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
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                    The complete XUNO workflow from customer interaction to personalized engagement, powered by cutting-edge machine learning and seamless integrations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Xuno