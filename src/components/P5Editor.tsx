
import { useEffect, useRef, useState } from 'react'
import p5 from 'p5'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'

interface P5EditorProps {
  initialCode?: string
}

const P5Editor = ({ initialCode = '' }: P5EditorProps) => {
  const sketchRef = useRef<HTMLDivElement>(null)
  const p5InstanceRef = useRef<p5 | null>(null)
  const [code, setCode] = useState(initialCode)
  const [error, setError] = useState<string | null>(null)

  const runSketch = () => {
    console.log('runSketch called with code:', code)
    // Remove existing sketch
    if (p5InstanceRef.current) {
      p5InstanceRef.current.remove()
      p5InstanceRef.current = null
    }

    if (!sketchRef.current) return

    try {
      // Clear any previous errors
      setError(null)
      console.log('About to create p5 instance')
      
      // Create new p5 instance using instance mode properly
      p5InstanceRef.current = new p5((p: p5) => {
        console.log('p5 instance callback called')
        
        try {
          // Store user's setup and draw functions
          let userSetup: (() => void) | null = null;
          let userDraw: (() => void) | null = null;
          
          // Create a context with all p5 functions bound
          const p5Context = {
            // Core functions
            createCanvas: p.createCanvas.bind(p),
            background: p.background.bind(p),
            fill: p.fill.bind(p),
            stroke: p.stroke.bind(p),
            noStroke: p.noStroke.bind(p),
            noFill: p.noFill.bind(p),
            ellipse: p.ellipse.bind(p),
            rect: p.rect.bind(p),
            line: p.line.bind(p),
            point: p.point.bind(p),
            triangle: p.triangle.bind(p),
            quad: p.quad.bind(p),
            arc: p.arc.bind(p),
            circle: p.circle.bind(p),
            square: p.square.bind(p),
            
            // Transform functions
            translate: p.translate.bind(p),
            rotate: p.rotate.bind(p),
            scale: p.scale.bind(p),
            push: p.push.bind(p),
            pop: p.pop.bind(p),
            
            // Math and random
            random: p.random.bind(p),
            noise: p.noise.bind(p),
            map: p.map.bind(p),
            constrain: p.constrain.bind(p),
            lerp: p.lerp.bind(p),
            sin: p.sin.bind(p),
            cos: p.cos.bind(p),
            tan: p.tan.bind(p),
            
            // Colors
            color: p.color.bind(p),
            red: p.red.bind(p),
            green: p.green.bind(p),
            blue: p.blue.bind(p),
            alpha: p.alpha.bind(p),
            
            // Constants and dynamic properties
            get width() { return p.width; },
            get height() { return p.height; },
            get mouseX() { return p.mouseX; },
            get mouseY() { return p.mouseY; },
            get mouseIsPressed() { return p.mouseIsPressed; },
            get frameCount() { return p.frameCount; },
            PI: p.PI,
            TWO_PI: p.TWO_PI,
            HALF_PI: p.HALF_PI,
            
            // Special functions to capture user setup/draw
            setup: (fn: () => void) => { userSetup = fn; },
            draw: (fn: () => void) => { userDraw = fn; }
          };
          
          // Execute user code with p5 context
          const userCode = `
            with (p5Context) {
              ${code}
            }
          `;
          
          const executeCode = new Function('p5Context', userCode);
          executeCode(p5Context);
          
          // Set up p5 lifecycle
          p.setup = () => {
            if (userSetup) userSetup();
          };
          
          p.draw = () => {
            if (userDraw) userDraw();
          };
          
          console.log('Code executed successfully')
        } catch (err) {
          console.error('Sketch execution error:', err)
          setError(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`)
        }
      }, sketchRef.current)

      console.log('p5 instance created successfully')
      toast.success('Sketch updated!')
    } catch (err) {
      console.error('Sketch creation error:', err)
      setError(`Creation error: ${err instanceof Error ? err.message : 'Unknown error'}`)
      toast.error('Failed to create sketch')
    }
  }

  const stopSketch = () => {
    if (p5InstanceRef.current) {
      p5InstanceRef.current.remove()
      p5InstanceRef.current = null
      toast.info('Sketch stopped')
    }
  }

  useEffect(() => {
    console.log('P5Editor mounted with initialCode:', initialCode)
    setCode(initialCode)
    if (initialCode.trim()) {
      console.log('Setting timeout to run sketch')
      // Small delay to ensure the component is mounted
      setTimeout(() => {
        console.log('Timeout expired, calling runSketch')
        runSketch()
      }, 100)
    }
  }, [initialCode])

  useEffect(() => {
    console.log('Code changed:', code)
    // Auto-run when code changes (with debounce)
    const timeoutId = setTimeout(() => {
      if (code.trim()) {
        console.log('Auto-running sketch due to code change')
        runSketch()
      }
    }, 1000) // 1 second debounce

    return () => {
      clearTimeout(timeoutId)
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove()
      }
    }
  }, [code])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Code Editor */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Code Editor</CardTitle>
          <div className="flex gap-2">
            <Button onClick={runSketch} size="sm">
              Run
            </Button>
            <Button onClick={stopSketch} variant="outline" size="sm">
              Stop
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="font-mono text-sm min-h-[400px] resize-none"
            placeholder="Write your p5.js code here..."
          />
          {error && (
            <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
              <p className="text-sm text-destructive font-mono">{error}</p>
            </div>
          )}
          <div className="mt-4 text-xs text-muted-foreground">
            <p>Tips:</p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>Use setup() and draw() functions</li>
              <li>Press "Run" to execute your code</li>
              <li>Check the console for errors</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Canvas Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Live Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            ref={sketchRef} 
            className="w-full border border-border rounded-md overflow-hidden bg-card"
            style={{ minHeight: '400px' }}
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default P5Editor
