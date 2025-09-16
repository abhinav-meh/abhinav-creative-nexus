import Navigation from '@/components/Navigation'
import InteractiveGrid from '@/components/InteractiveGrid'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import confluenceThumbnail from '@/assets/confluence-thumbnail.svg'

const Confluence = () => {
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
                <img 
                  src={confluenceThumbnail} 
                  alt="Confluence logo" 
                  className="w-12 h-12" 
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Confluence</h1>
                <p className="text-lg text-muted-foreground">
                  Interactive digital water simulation with motion control
                </p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Confluence is an immersive digital water simulation that brings fluid dynamics to life through TouchDesigner. 
                The installation responds to real-time accelerometer input, creating a dynamic and interactive experience where 
                physical movement translates into digital water behavior.
              </p>
              
              <div className="bg-card/50 rounded-lg p-8 border border-border mb-8">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-muted-foreground mb-4">
                  This interactive installation explores the intersection of physical motion and digital representation, 
                  using TouchDesigner's powerful visual programming environment to create realistic water simulations 
                  that respond to accelerometer data in real-time.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-foreground">Role:</strong> Creative Technologist
                  </div>
                  <div>
                    <strong className="text-foreground">Duration:</strong> 6 weeks
                  </div>
                  <div>
                    <strong className="text-foreground">Platform:</strong> TouchDesigner
                  </div>
                  <div>
                    <strong className="text-foreground">Type:</strong> Interactive Installation
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-card/50 rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-4">Technical Implementation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Real-time fluid dynamics simulation</li>
                    <li>• Accelerometer data integration</li>
                    <li>• TouchDesigner visual programming</li>
                    <li>• GPU-accelerated particle systems</li>
                    <li>• Motion-responsive visual feedback</li>
                    <li>• Custom shader development</li>
                  </ul>
                </div>

                <div className="bg-card/50 rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-4">Creative Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Dynamic water surface tension</li>
                    <li>• Gravity-responsive flow patterns</li>
                    <li>• Interactive ripple effects</li>
                    <li>• Color-responsive fluid visualization</li>
                    <li>• Multi-layered depth perception</li>
                    <li>• Ambient lighting integration</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card/50 rounded-lg p-8 border border-border mb-8">
                <h2 className="text-2xl font-semibold mb-6">Hardware Integration</h2>
                <p className="text-muted-foreground mb-6">
                  The installation uses precision accelerometer sensors to capture subtle movements and translate 
                  them into fluid motion parameters. The system processes motion data at high frequency to ensure 
                  responsive and natural water behavior.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Sensor Hardware</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• High-precision accelerometer</li>
                      <li>• Wireless data transmission</li>
                      <li>• Real-time data processing</li>
                      <li>• Low-latency communication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Motion Mapping</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• X/Y/Z axis interpretation</li>
                      <li>• Gesture recognition algorithms</li>
                      <li>• Smoothing and filtering</li>
                      <li>• Calibration systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Visual Response</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Fluid velocity control</li>
                      <li>• Surface displacement</li>
                      <li>• Particle density variation</li>
                      <li>• Color intensity mapping</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-6">TouchDesigner Workflow</h2>
                <p className="text-muted-foreground mb-6">
                  Built entirely within TouchDesigner's node-based environment, Confluence leverages the platform's 
                  real-time capabilities to create seamless integration between sensor input and visual output.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Data Processing Pipeline</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Serial data input from accelerometer</li>
                      <li>• Real-time filtering and noise reduction</li>
                      <li>• Motion vector calculation and smoothing</li>
                      <li>• Parameter mapping to fluid properties</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Visual Generation</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• GPU-based particle system generation</li>
                      <li>• Custom GLSL shaders for water effects</li>
                      <li>• Real-time lighting and reflection</li>
                      <li>• High-resolution output rendering</li>
                    </ul>
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

export default Confluence