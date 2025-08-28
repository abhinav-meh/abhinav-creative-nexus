
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
      
      // Create new p5 instance using global mode simulation
      p5InstanceRef.current = new p5((p: p5) => {
        console.log('p5 instance callback called')
        
        try {
          // Make all p5 functions available globally
          const originalSetup = (window as any).setup;
          const originalDraw = (window as any).draw;
          
          // Bind all p5 functions to global scope
          Object.getOwnPropertyNames(p).forEach(key => {
            if (typeof (p as any)[key] === 'function') {
              (window as any)[key] = (p as any)[key].bind(p);
            } else {
              (window as any)[key] = (p as any)[key];
            }
          });
          
          // Bind p5 constants
          (window as any).PI = p.PI;
          (window as any).TWO_PI = p.TWO_PI;
          (window as any).HALF_PI = p.HALF_PI;
          
          // Safely create getters for p5 dynamic properties
          const props = ['width', 'height', 'mouseX', 'mouseY', 'mouseIsPressed', 'frameCount'];
          props.forEach(prop => {
            try {
              Object.defineProperty(window, prop, { 
                get: () => (p as any)[prop],
                configurable: true 
              });
            } catch (e) {
              // Property already exists, just assign it
              (window as any)[prop] = (p as any)[prop];
            }
          });
          
          // Execute the user code
          eval(code);
          
          // Restore original functions if they existed
          if (originalSetup) (window as any).setup = originalSetup;
          if (originalDraw) (window as any).draw = originalDraw;
          
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
