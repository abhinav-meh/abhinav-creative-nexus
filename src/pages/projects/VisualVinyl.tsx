import ProjectLayout from '@/components/ProjectLayout'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

const VisualVinyl = () => {
  const buttons = (
    <>
      <Button
        variant="outline"
        size="sm"
        asChild
      >
        <a
          href="https://github.com/abhinav-meh/visual_vinyl.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4 mr-2" />
          View Repository
        </a>
      </Button>
    </>
  )

  return (
    <ProjectLayout
      title="Visual Vinyl"
      subtitle="An Interactive Musical Interface Inspired by Synesthesia"
      icon="🎵"
      buttons={buttons}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Year
          </h3>
          <p className="text-lg text-foreground">2025–2026</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            My Role
          </h3>
          <p className="text-lg text-foreground">
            Creative Technologist
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            Institution
          </h3>
          <p className="text-lg text-foreground">
            University of Colorado Boulder
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          Abstract
        </h2>

        <p className="text-lg text-muted-foreground">
          Visual Vinyl is a tangible music-making system inspired by synesthesia,
          the phenomenon in which sensory experiences overlap. Users compose by
          arranging colored magnetic tessellations on a rotating platter,
          transforming physical arrangements into evolving musical compositions.
          By combining computer vision, physical computing, and generative
          sound, the project explores new ways of making music through touch
          and movement.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          Project Overview
        </h2>

        <p className="text-lg text-muted-foreground mb-8">
          Traditional music software relies heavily on screens and abstract
          interfaces. Visual Vinyl investigates how musical composition can
          become more tactile and playful. A camera observes a small region of
          a spinning platter while a computer vision pipeline interprets colors
          and spatial relationships as musical events. The result is an
          instrument that sits between a turntable, a sequencer, and a kinetic
          sculpture.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card/50 rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Interaction Design
            </h3>

            <p className="text-muted-foreground mb-4">
              Users create music by manipulating physical pieces rather than
              interacting with screens. Color, shape, and rotation work together
              to produce melodies and harmonies.
            </p>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Color-to-note mapping using a pentatonic scale</li>
              <li>• Tessellated magnetic pieces inspired by mathematical tilings</li>
              <li>• Rotational sequencing that transforms space into time</li>
              <li>• Modular compositions through physical arrangement</li>
            </ul>
          </div>

          <div className="bg-card/50 rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Technical System
            </h3>

            <p className="text-muted-foreground mb-4">
              The system combines machine perception with audio synthesis to
              translate visual information into sound.
            </p>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• OpenCV-based color detection pipeline</li>
              <li>• Python and OSC communication</li>
              <li>• SuperCollider audio synthesis</li>
              <li>• Motorized acrylic turntable with removable magnetic pieces</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          My Contributions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card/50 rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Interaction Design
            </h3>

            <p className="text-muted-foreground">
              Designed the overall interaction model and explored how synesthesia
              and tangible interfaces can create new approaches to musical
              expression.
            </p>
          </div>

          <div className="bg-card/50 rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Physical Prototyping
            </h3>

            <p className="text-muted-foreground">
              Developed the acrylic enclosure, rotating platter, and magnetic
              tessellated components through rapid prototyping and fabrication.
            </p>
          </div>

          <div className="bg-card/50 rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Creative Technology
            </h3>

            <p className="text-muted-foreground">
              Built the software pipeline connecting OpenCV, Python, OSC, and
              SuperCollider into a responsive musical instrument.
            </p>
          </div>
        </div>
      </div>
    </ProjectLayout>
  )
}

export default VisualVinyl