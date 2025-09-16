import ProjectLayout from '@/components/ProjectLayout'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import confluenceThumbnail from '@/assets/confluence-thumbnail.svg'

const Confluence = () => {
  const buttons = (
    <Button 
      variant="outline" 
      size="sm"
      asChild
    >
      <a 
        href="https://confluence-installation.netlify.app/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        Visit Website
      </a>
    </Button>
  )

  return (
    <ProjectLayout
      title="Confluence"
      subtitle="Interactive digital water simulation with motion control"
      icon={confluenceThumbnail}
      buttons={buttons}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">My Role</h3>
          <p className="text-lg text-foreground">Brand & Web Designer, Creative Technologist</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Platform</h3>
          <p className="text-lg text-foreground">TouchDesigner</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Type</h3>
          <p className="text-lg text-foreground">Interactive Installation</p>
        </div>
      </div>

      <p className="text-lg text-muted-foreground mb-8">
        Confluence is an immersive digital water simulation that brings fluid dynamics to life through TouchDesigner. 
        This collaborative installation explores the convergence of physical movement and digital fluid behavior, 
        creating an interactive cairn sculpture that responds to motion with real-time water simulations and lighting effects.
      </p>
      
      <div className="bg-card/50 rounded-lg p-8 border border-border mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-muted-foreground mb-6">
          Confluence represents "The Journey" - an artistic exploration that began with fluid simulation and evolved 
          into a comprehensive interactive installation. The project combines physical fabrication, motion sensing, 
          and digital visualization to create an immersive experience where visitors can influence virtual water 
          through their movements.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Team Members</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Alex LaFontaine:</strong> Digital Media Photography & Graphic Design</li>
              <li><strong>Shalimar Alvarado Cruz Hebbeler:</strong> Creative Technologist</li>
              <li><strong>Klinger Abe:</strong> Audio, Visual & Design Production</li>
              <li><strong>Abhinav Homer Mehrotra:</strong> Chief Fabricator, Creative Technologist, Web Developer, TouchDesigner Developer & Photographer</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Project Details</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><strong className="text-foreground">Platform:</strong> TouchDesigner</div>
              <div><strong className="text-foreground">Type:</strong> Interactive Installation</div>
              <div><strong className="text-foreground">Input:</strong> Motion Control</div>
              <div><strong className="text-foreground">Output:</strong> Fluid Simulation & Lighting</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card/50 rounded-lg p-8 border border-border mb-8">
        <h2 className="text-2xl font-semibold mb-6">Design Evolution</h2>
        <p className="text-muted-foreground mb-6">
          The project underwent significant evolution from concept to completion. Initially conceived as a smaller 
          set piece with an LCD screen, the design expanded into a full-scale interactive cairn sculpture with 
          integrated lighting and motion control systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Early Concept</h3>
            <p className="text-sm text-muted-foreground">
              Original idea featured a smaller installation displaying TouchDesigner fluid simulation on LCD screens, 
              exploring the four states of water through visual representation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Design Transition</h3>
            <p className="text-sm text-muted-foreground">
              Evolution from smoke-based simulation to water fluid dynamics, incorporating color-based interactivity 
              and expanding the scale to create an immersive environment.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Final Implementation</h3>
            <p className="text-sm text-muted-foreground">
              Interactive cairn sculpture with motion sensing, real-time fluid simulation, integrated lighting system, 
              and comprehensive user experience design.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-card/50 rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold mb-4">Technical Implementation</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Real-time fluid dynamics simulation in TouchDesigner</li>
            <li>• Circuit Playground accelerometer integration</li>
            <li>• UDP data transmission at 56555 port</li>
            <li>• OSC routing for lighting control (/light1, /light2, /light3)</li>
            <li>• GPU-accelerated particle systems</li>
            <li>• Custom lighting control with intensity, zoom, and color</li>
            <li>• Real-time motion mapping and calibration</li>
          </ul>
        </div>

        <div className="bg-card/50 rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold mb-4">Creative Features</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Motion-responsive water simulation</li>
            <li>• Dynamic lighting with ColorChauvet fixtures</li>
            <li>• Interactive ripple and flow effects</li>
            <li>• Color-responsive fluid visualization</li>
            <li>• Ambient environment integration</li>
            <li>• Real-time visual feedback systems</li>
            <li>• Immersive cairn sculpture interaction</li>
          </ul>
        </div>
      </div>

      <div className="bg-card/50 rounded-lg p-8 border border-border mb-8">
        <h2 className="text-2xl font-semibold mb-6">Physical Fabrication</h2>
        <p className="text-muted-foreground mb-6">
          The centerpiece cairn sculpture was meticulously crafted using advanced digital fabrication techniques. 
          Each stone was modeled in SolidWorks and precisely manufactured to create the illusion of natural balance 
          while housing sophisticated interactive technology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Design Process</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• SolidWorks 3D modeling of organic stone forms</li>
              <li>• Contour slicing for laser cutting preparation</li>
              <li>• Over 100 individual chipboard pieces</li>
              <li>• Five separate organic stone assemblies</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Construction Methods</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Precision laser cutting from chipboard</li>
              <li>• Traditional fastening techniques</li>
              <li>• Hidden 3D printed internal components</li>
              <li>• Careful balance engineering</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Technology Integration</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Circuit Playground embedded sensors</li>
              <li>• Concealed wiring and electronics</li>
              <li>• Delicately balanced illusion</li>
              <li>• Interactive interface design</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-card/50 rounded-lg p-8 border border-border mb-8">
        <h2 className="text-2xl font-semibold mb-6">Hardware & Sensor Integration</h2>
        <p className="text-muted-foreground mb-6">
          The installation employs Circuit Playground accelerometers to capture motion data, which is transmitted 
          via UDP protocol to TouchDesigner for real-time processing and visualization. The system includes 
          comprehensive lighting control for creating ambient environments.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Motion Sensing</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Circuit Playground accelerometer</li>
              <li>• UDP transmission on port 56555</li>
              <li>• Real-time data streaming</li>
              <li>• Motion vector interpretation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Lighting System</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• ColorChauvet LED fixtures</li>
              <li>• OSC routing for light control</li>
              <li>• Intensity, zoom, and color control</li>
              <li>• Center spotlight configuration</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Data Processing</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• HSL color space manipulation</li>
              <li>• Real-time scaling and filtering</li>
              <li>• Motion-to-fluid parameter mapping</li>
              <li>• Lighting synchronization</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-card/50 rounded-lg p-8 border border-border">
        <h2 className="text-2xl font-semibold mb-6">TouchDesigner Implementation</h2>
        <p className="text-muted-foreground mb-6">
          The complete system was developed using TouchDesigner's node-based visual programming environment, 
          creating sophisticated real-time interactions between motion sensing, fluid simulation, and lighting control. 
          The project file "T3D fluid + GPT.3.toe" contains the entire interactive system.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Data Processing Pipeline</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• UDP receive on port 56555 for motion data</li>
              <li>• Real-time scaling and normalization (0-255 range)</li>
              <li>• HSL color space conversion and manipulation</li>
              <li>• Motion vector smoothing and filtering</li>
              <li>• Parameter mapping to fluid and lighting properties</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Visual & Control Systems</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• GPU-accelerated fluid dynamics simulation</li>
              <li>• OSC routing for lighting fixture control</li>
              <li>• Real-time rendering at 60 FPS</li>
              <li>• Timeline control with range limiting</li>
              <li>• Global input/output management system</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Performance Specs</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• 60 FPS real-time rendering</li>
              <li>• 120 BPM tempo synchronization</li>
              <li>• 600-frame timeline range</li>
              <li>• Multi-window display support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Control Parameters</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Global input/output routing</li>
              <li>• Intensity and strobe controls</li>
              <li>• Color and zoom parameters</li>
              <li>• Active/inactive state management</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Integration Features</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Live data visualization</li>
              <li>• Real-time parameter adjustment</li>
              <li>• Multiple lighting zone control</li>
              <li>• Responsive interface design</li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectLayout>
  )
}

export default Confluence