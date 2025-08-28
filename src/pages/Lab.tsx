import P5Sandbox from '@/components/P5Sandbox'
import Navigation from '@/components/Navigation'
import InteractiveGrid from '@/components/InteractiveGrid'


const Lab = () => {
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
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Creative Lab</h1>
            <p className="text-lg text-muted-foreground">
              Interactive p5.js sandbox with generators for random objects and waves. Use the controls to create and customize your artwork.
            </p>
          </div>

          <P5Sandbox />
        </div>
      </div>
      
      <Navigation />
    </div>
  )
}

export default Lab