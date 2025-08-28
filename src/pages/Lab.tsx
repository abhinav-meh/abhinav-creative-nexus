import { useState } from 'react'
import P5Editor from '@/components/P5Editor'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Navigation from '@/components/Navigation'

const defaultSketch = `function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  fill(255, 0, 150);
  ellipse(mouseX, mouseY, 80, 80);
}`

const exampleProjects = [
  {
    id: 'particle-system',
    title: 'Particle System',
    description: 'Interactive particle effects that follow your mouse',
    code: `let particles = [];

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(220, 20, 15, 20);
  
  // Add new particle at mouse position
  if (mouseIsPressed) {
    particles.push(new Particle(mouseX, mouseY));
  }
  
  // Update and display particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1, 5));
    this.acc = createVector(0, 0.1);
    this.life = 255;
    this.hue = random(280, 320);
  }
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.life -= 3;
  }
  
  display() {
    stroke(this.hue, 80, 90, this.life);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
  }
  
  isDead() {
    return this.life <= 0;
  }
}`
  },
  {
    id: 'generative-art',
    title: 'Generative Art',
    description: 'Dynamic patterns that evolve over time',
    code: `let time = 0;

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 100, 100);
  noFill();
}

function draw() {
  background(220, 20, 10);
  
  translate(width / 2, height / 2);
  
  for (let i = 0; i < 100; i++) {
    let radius = map(i, 0, 100, 10, 200);
    let hue = map(i, 0, 100, 180, 300);
    
    stroke(hue, 80, 90);
    strokeWeight(2);
    
    let x = cos(time + i * 0.1) * radius;
    let y = sin(time + i * 0.05) * radius;
    
    ellipse(x, y, 20, 20);
  }
  
  time += 0.02;
}`
  },
  {
    id: 'wave-simulation',
    title: 'Wave Simulation',
    description: 'Beautiful sine wave patterns with interactive controls',
    code: `let time = 0;
let amplitude = 100;
let frequency = 0.01;

function setup() {
  createCanvas(800, 400);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(220, 30, 20);
  
  // Map mouse position to control parameters
  amplitude = map(mouseY, 0, height, 20, 150);
  frequency = map(mouseX, 0, width, 0.005, 0.03);
  
  stroke(280, 80, 90);
  strokeWeight(3);
  noFill();
  
  beginShape();
  for (let x = 0; x <= width; x += 5) {
    let y = height / 2 + sin(x * frequency + time) * amplitude;
    vertex(x, y);
  }
  endShape();
  
  // Secondary wave
  stroke(320, 60, 80);
  strokeWeight(2);
  beginShape();
  for (let x = 0; x <= width; x += 5) {
    let y = height / 2 + sin(x * frequency * 2 + time * 1.5) * amplitude * 0.5;
    vertex(x, y);
  }
  endShape();
  
  time += 0.05;
  
  // Instructions
  fill(0, 0, 100);
  textAlign(LEFT);
  textSize(16);
  text("Move mouse to control waves", 20, 30);
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
      <div 
        className="absolute inset-0 grid grid-cols-[repeat(auto-fit,64px)] grid-rows-[repeat(auto-fit,64px)] pointer-events-none"
        style={{gridTemplateColumns: 'repeat(auto-fit, 64px)', gridTemplateRows: 'repeat(auto-fit, 64px)'}}
      >
        {Array.from({ length: Math.ceil(window.innerWidth / 64) * Math.ceil(window.innerHeight / 64) }).map((_, i) => (
          <div
            key={i}
            className="border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 pointer-events-auto"
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Creative Lab</h1>
          <p className="text-lg text-muted-foreground">
            Experiment with interactive p5.js projects. Edit the code and see your changes in real-time.
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
            
            <P5Editor initialCode={currentCode} />
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