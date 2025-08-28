import { useEffect, useRef, useState } from 'react'
import p5 from 'p5'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'

interface P5SandboxProps {
  className?: string
}

const P5Sandbox = ({ className }: P5SandboxProps) => {
  const sketchRef = useRef<HTMLDivElement>(null)
  const p5InstanceRef = useRef<p5 | null>(null)
  
  // Controls state
  const [objectCount, setObjectCount] = useState([10])
  const [waveAmplitude, setWaveAmplitude] = useState([50])
  const [waveFrequency, setWaveFrequency] = useState([0.02])
  const [colorMode, setColorMode] = useState('rainbow')
  const [objectType, setObjectType] = useState('circles')
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [backgroundType, setBacgroundType] = useState('gradient')

  // Animation state
  const animationStateRef = useRef({
    time: 0,
    objects: [] as any[],
    waves: [] as any[],
    mouseHistory: [] as any[]
  })

  const generateObjects = () => {
    if (!p5InstanceRef.current) return
    
    const p = p5InstanceRef.current
    const state = animationStateRef.current
    
    state.objects = []
    
    for (let i = 0; i < objectCount[0]; i++) {
      const obj = {
        x: p.random(p.width),
        y: p.random(p.height),
        size: p.random(10, 50),
        color: getRandomColor(p, i),
        speed: p.random(1, 3),
        direction: p.random(p.TWO_PI),
        rotationSpeed: p.random(-0.1, 0.1),
        rotation: 0,
        type: objectType
      }
      state.objects.push(obj)
    }
    
    toast.success(`Generated ${objectCount[0]} ${objectType}!`)
  }

  const generateWaves = () => {
    if (!p5InstanceRef.current) return
    
    const p = p5InstanceRef.current
    const state = animationStateRef.current
    
    state.waves = []
    
    const waveCount = 3
    for (let i = 0; i < waveCount; i++) {
      const wave = {
        amplitude: waveAmplitude[0] * (0.5 + Math.random() * 0.5),
        frequency: waveFrequency[0] * (0.5 + Math.random() * 1.5),
        phase: p.random(p.TWO_PI),
        yOffset: p.height * (0.2 + (i / waveCount) * 0.6),
        color: getRandomColor(p, i),
        thickness: p.random(2, 8)
      }
      state.waves.push(wave)
    }
    
    toast.success(`Generated ${waveCount} waves!`)
  }

  const getRandomColor = (p: p5, index: number) => {
    switch (colorMode) {
      case 'rainbow':
        return p.color(p.map(index, 0, 10, 0, 360), 80, 90)
      case 'ocean':
        return p.color(p.random(180, 240), 70, p.random(60, 90))
      case 'sunset':
        return p.color(p.random(0, 60), 80, p.random(70, 100))
      case 'forest':
        return p.color(p.random(60, 120), 60, p.random(40, 80))
      default:
        return p.color(p.random(360), 70, 80)
    }
  }

  const clearCanvas = () => {
    const state = animationStateRef.current
    state.objects = []
    state.waves = []
    state.mouseHistory = []
    toast.info('Canvas cleared!')
  }

  useEffect(() => {
    if (!sketchRef.current) return

    // Remove existing sketch
    if (p5InstanceRef.current) {
      p5InstanceRef.current.remove()
    }

    // Create new p5 instance
    p5InstanceRef.current = new p5((p: p5) => {
      const state = animationStateRef.current

      p.setup = () => {
        p.createCanvas(800, 600)
        p.colorMode(p.HSB, 360, 100, 100, 100)
        
        // Initialize with some default objects and waves
        setTimeout(() => {
          generateObjects()
          generateWaves()
        }, 100)
      }

      p.draw = () => {
        // Background
        if (backgroundType === 'gradient') {
          for (let y = 0; y < p.height; y++) {
            const alpha = p.map(y, 0, p.height, 0, 100)
            p.stroke(220, 30, 20 + alpha * 0.3)
            p.line(0, y, p.width, y)
          }
        } else if (backgroundType === 'particles') {
          p.background(220, 20, 10, 10)
        } else {
          p.background(220, 20, 15)
        }

        // Update time
        state.time += 0.01 * animationSpeed[0]

        // Track mouse history for trails
        if (p.frameCount % 3 === 0) {
          state.mouseHistory.push({ x: p.mouseX, y: p.mouseY })
          if (state.mouseHistory.length > 20) {
            state.mouseHistory.shift()
          }
        }

        // Draw mouse trail
        p.noFill()
        for (let i = 0; i < state.mouseHistory.length - 1; i++) {
          const alpha = p.map(i, 0, state.mouseHistory.length, 0, 50)
          p.stroke(280, 60, 80, alpha)
          p.strokeWeight(p.map(i, 0, state.mouseHistory.length, 1, 5))
          if (state.mouseHistory[i] && state.mouseHistory[i + 1]) {
            p.line(
              state.mouseHistory[i].x, state.mouseHistory[i].y,
              state.mouseHistory[i + 1].x, state.mouseHistory[i + 1].y
            )
          }
        }

        // Draw waves
        state.waves.forEach((wave, index) => {
          p.stroke(wave.color)
          p.strokeWeight(wave.thickness)
          p.noFill()
          
          p.beginShape()
          for (let x = 0; x <= p.width; x += 5) {
            const y = wave.yOffset + 
              p.sin(x * wave.frequency + state.time + wave.phase) * wave.amplitude +
              p.sin(x * wave.frequency * 2 + state.time * 1.5) * wave.amplitude * 0.3
            p.vertex(x, y)
          }
          p.endShape()
        })

        // Draw and animate objects
        state.objects.forEach((obj) => {
          p.push()
          p.translate(obj.x, obj.y)
          p.rotate(obj.rotation)
          
          p.fill(obj.color)
          p.stroke(obj.color)
          p.strokeWeight(2)

          switch (obj.type) {
            case 'circles':
              p.ellipse(0, 0, obj.size)
              break
            case 'squares':
              p.rectMode(p.CENTER)
              p.rect(0, 0, obj.size, obj.size)
              break
            case 'triangles':
              const size = obj.size / 2
              p.triangle(-size, size, size, size, 0, -size)
              break
            case 'stars':
              drawStar(p, 0, 0, obj.size / 4, obj.size / 2, 5)
              break
          }
          
          p.pop()

          // Update object position
          obj.x += p.cos(obj.direction) * obj.speed
          obj.y += p.sin(obj.direction) * obj.speed
          obj.rotation += obj.rotationSpeed

          // Wrap around screen
          if (obj.x < -obj.size) obj.x = p.width + obj.size
          if (obj.x > p.width + obj.size) obj.x = -obj.size
          if (obj.y < -obj.size) obj.y = p.height + obj.size
          if (obj.y > p.height + obj.size) obj.y = -obj.size
        })

        // Interactive elements on mouse press
        if (p.mouseIsPressed) {
          p.fill(320, 80, 90, 50)
          p.noStroke()
          p.ellipse(p.mouseX, p.mouseY, 50 + p.sin(state.time * 5) * 20)
        }
      }

      // Helper function to draw star
      const drawStar = (p: p5, x: number, y: number, radius1: number, radius2: number, npoints: number) => {
        const angle = p.TWO_PI / npoints
        const halfAngle = angle / 2.0
        p.beginShape()
        for (let a = 0; a < p.TWO_PI; a += angle) {
          let sx = x + p.cos(a) * radius2
          let sy = y + p.sin(a) * radius2
          p.vertex(sx, sy)
          sx = x + p.cos(a + halfAngle) * radius1
          sy = y + p.sin(a + halfAngle) * radius1
          p.vertex(sx, sy)
        }
        p.endShape(p.CLOSE)
      }

    }, sketchRef.current)

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove()
        p5InstanceRef.current = null
      }
    }
  }, [])

  // Update effects when controls change
  useEffect(() => {
    if (objectCount[0] !== animationStateRef.current.objects.length) {
      generateObjects()
    }
  }, [objectCount, objectType, colorMode])

  useEffect(() => {
    generateWaves()
  }, [waveAmplitude, waveFrequency, colorMode])

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 ${className}`}>
      {/* Canvas */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>P5.js Sandbox</CardTitle>
          </CardHeader>
          <CardContent>
            <div 
              ref={sketchRef} 
              className="w-full border border-border rounded-md overflow-hidden bg-card"
            />
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Object Generator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Object Type</Label>
              <Select value={objectType} onValueChange={setObjectType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="circles">Circles</SelectItem>
                  <SelectItem value="squares">Squares</SelectItem>
                  <SelectItem value="triangles">Triangles</SelectItem>
                  <SelectItem value="stars">Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Count: {objectCount[0]}</Label>
              <Slider
                value={objectCount}
                onValueChange={setObjectCount}
                max={50}
                min={1}
                step={1}
              />
            </div>

            <Button onClick={generateObjects} className="w-full">
              Generate Objects
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Wave Generator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Amplitude: {waveAmplitude[0]}</Label>
              <Slider
                value={waveAmplitude}
                onValueChange={setWaveAmplitude}
                max={150}
                min={10}
                step={5}
              />
            </div>

            <div>
              <Label>Frequency: {waveFrequency[0].toFixed(3)}</Label>
              <Slider
                value={waveFrequency}
                onValueChange={setWaveFrequency}
                max={0.1}
                min={0.005}
                step={0.005}
              />
            </div>

            <Button onClick={generateWaves} className="w-full">
              Generate Waves
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Style Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Color Palette</Label>
              <Select value={colorMode} onValueChange={setColorMode}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rainbow">Rainbow</SelectItem>
                  <SelectItem value="ocean">Ocean</SelectItem>
                  <SelectItem value="sunset">Sunset</SelectItem>
                  <SelectItem value="forest">Forest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Background</Label>
              <Select value={backgroundType} onValueChange={setBacgroundType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="solid">Solid</SelectItem>
                  <SelectItem value="gradient">Gradient</SelectItem>
                  <SelectItem value="particles">Particles</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Animation Speed: {animationSpeed[0]}x</Label>
              <Slider
                value={animationSpeed}
                onValueChange={setAnimationSpeed}
                max={3}
                min={0.1}
                step={0.1}
              />
            </div>

            <Button onClick={clearCanvas} variant="outline" className="w-full">
              Clear Canvas
            </Button>
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Interactive</Badge>
          <Badge variant="secondary">Mouse Trails</Badge>
          <Badge variant="secondary">Animated</Badge>
        </div>
      </div>
    </div>
  )
}

export default P5Sandbox