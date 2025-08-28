import { useState } from 'react'
import FabricEditor from '@/components/FabricEditor'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Navigation from '@/components/Navigation'
import InteractiveGrid from '@/components/InteractiveGrid'

const defaultSketch = `// Create some basic shapes
ctx.setBackgroundColor('#f0f0f0');

// Add a blue rectangle
ctx.addRectangle(50, 50, 100, 80, '#3b82f6');

// Add a red circle
ctx.addCircle(200, 100, 40, '#ef4444');

// Add a green square
ctx.addRectangle(300, 50, 80, 80, '#22c55e');`

const exampleProjects = [
  {
    id: 'animated-shapes',
    title: 'Animated Shapes',
    description: 'Create and animate colorful geometric shapes',
    code: `// Clear canvas and set background
ctx.clear();
ctx.setBackgroundColor('#1a1a2e');

// Create animated circles
for (let i = 0; i < 5; i++) {
  const x = 100 + i * 120;
  const y = 200;
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];
  
  const circle = ctx.addCircle(x, y, 30, colors[i]);
  
  // Animate the circle
  ctx.animate(circle, 'top', y + Math.sin(i) * 50, 2000);
}`
  },
  {
    id: 'gradient-gallery',
    title: 'Gradient Gallery',
    description: 'Beautiful gradient backgrounds with floating shapes',
    code: `// Set a gradient-like background
ctx.setBackgroundColor('#667eea');

// Create a pattern of rectangles with varying colors
const colors = ['#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#43e97b'];

for (let i = 0; i < 15; i++) {
  const x = (i % 5) * 150 + 50;
  const y = Math.floor(i / 5) * 150 + 50;
  const size = 60 + Math.random() * 40;
  
  const rect = ctx.addRectangle(x, y, size, size, colors[i % colors.length]);
  
  // Add some random animation
  setTimeout(() => {
    ctx.animate(rect, 'angle', Math.random() * 360, 3000);
  }, i * 200);
}`
  },
  {
    id: 'interactive-art',
    title: 'Interactive Art',
    description: 'Click-responsive artwork with dynamic elements',
    code: `// Clear and prepare canvas
ctx.clear();
ctx.setBackgroundColor('#2c3e50');

// Create a grid of interactive elements
const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];

for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 4; col++) {
    const x = col * 180 + 90;
    const y = row * 150 + 100;
    const colorIndex = (row + col) % colors.length;
    
    // Alternate between circles and rectangles
    if ((row + col) % 2 === 0) {
      const circle = ctx.addCircle(x, y, 40, colors[colorIndex]);
      
      // Add pulsing animation
      setInterval(() => {
        ctx.animate(circle, 'radius', 40 + Math.random() * 20, 1000);
      }, 2000 + Math.random() * 1000);
    } else {
      const rect = ctx.addRectangle(x - 30, y - 30, 60, 60, colors[colorIndex]);
      
      // Add rotation animation
      setInterval(() => {
        ctx.animate(rect, 'angle', Math.random() * 360, 1500);
      }, 1500 + Math.random() * 1000);
    }
  }
}`
  }
]

const Lab = () => {
  const [currentCode, setCurrentCode] = useState(defaultSketch)
  const [activeProject, setActiveProject] = useState<string | null>(null)

  const loadProject = (project: typeof exampleProjects[0]) => {
    setCurrentCode(project.code)
    setActiveProject(project.id)
  }

  const resetToDefault = () => {
    setCurrentCode(defaultSketch)
    setActiveProject(null)
  }

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
            Experiment with interactive Fabric.js projects. Create drawings and animations with code.
          </p>
        </div>

        <Tabs defaultValue="editor" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="editor">Live Editor</TabsTrigger>
            <TabsTrigger value="gallery">Project Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="editor" className="space-y-6">
            <div className="flex gap-4 mb-6">
              <Button onClick={resetToDefault} variant="outline">
                Reset to Default
              </Button>
              {activeProject && (
                <div className="text-sm text-muted-foreground flex items-center">
                  Current: {exampleProjects.find(p => p.id === activeProject)?.title}
                </div>
              )}
            </div>
            
            <FabricEditor initialCode={currentCode} />
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exampleProjects.map((project) => (
                <Card key={project.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <Button 
                      onClick={() => loadProject(project)}
                      className="w-full"
                    >
                      Load Project
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        </div>
      </div>
      
      <Navigation />
    </div>
  )
}

export default Lab