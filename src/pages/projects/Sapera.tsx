import Navigation from '@/components/Navigation'
import InteractiveGrid from '@/components/InteractiveGrid'

const Sapera = () => {
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
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center text-4xl">
                📊
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Sapera</h1>
                <p className="text-lg text-muted-foreground">
                  Project management platform design
                </p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Project content and media will be updated here.
              </p>
              
              <div className="bg-card/50 rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p className="text-muted-foreground">
                  Content about the Sapera project will be added here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Navigation />
    </div>
  )
}

export default Sapera