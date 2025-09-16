import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

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
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'TypeScript', 'Python', 'Machine Learning', 'Data Analytics', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Xuno