import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import xunoHero from "@/assets/xuno-hero.jpg"
import xunoSection2 from "@/assets/xuno-section-2.jpg"
import xunoSection3 from "@/assets/xuno-section-3.jpg"

const Xuno = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          
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
                XUNO is a data-driven advertising platform that leverages advanced analytics and machine learning 
                to optimize advertising campaigns and maximize ROI for businesses.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Real-time campaign performance analytics</li>
                <li>AI-powered audience targeting</li>
                <li>Cross-platform advertising management</li>
                <li>Predictive ROI modeling</li>
                <li>Automated bid optimization</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'TypeScript', 'Python', 'Machine Learning', 'Data Analytics', 'PostgreSQL'].map((tech) => (
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