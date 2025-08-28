import { useEffect, useRef, useState } from 'react'
import { Canvas as FabricCanvas, Circle, Rect, PencilBrush } from 'fabric'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { Toolbar } from './Toolbar'
import { ColorPicker } from './ColorPicker'

interface FabricEditorProps {
  initialCode?: string
}

const FabricEditor = ({ initialCode = '' }: FabricEditorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null)
  const [activeColor, setActiveColor] = useState('#3b82f6')
  const [activeTool, setActiveTool] = useState<'select' | 'draw' | 'rectangle' | 'circle'>('select')
  const [code, setCode] = useState(initialCode)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 800,
      height: 600,
      backgroundColor: '#ffffff',
    })

    // Initialize the freeDrawingBrush
    canvas.freeDrawingBrush = new PencilBrush(canvas)
    canvas.freeDrawingBrush.color = activeColor
    canvas.freeDrawingBrush.width = 2

    setFabricCanvas(canvas)
    toast.success('Canvas ready! Start creating!')

    return () => {
      canvas.dispose()
    }
  }, [])

  useEffect(() => {
    if (!fabricCanvas) return

    fabricCanvas.isDrawingMode = activeTool === 'draw'
    
    if (activeTool === 'draw' && fabricCanvas.freeDrawingBrush) {
      fabricCanvas.freeDrawingBrush.color = activeColor
      fabricCanvas.freeDrawingBrush.width = 2
    }
  }, [activeTool, activeColor, fabricCanvas])

  useEffect(() => {
    setCode(initialCode)
    if (initialCode.trim()) {
      setTimeout(() => {
        executeCode()
      }, 100)
    }
  }, [initialCode])

  const handleToolClick = (tool: typeof activeTool) => {
    setActiveTool(tool)

    if (!fabricCanvas) return

    if (tool === 'rectangle') {
      const rect = new Rect({
        left: 100,
        top: 100,
        fill: activeColor,
        width: 100,
        height: 100,
      })
      fabricCanvas.add(rect)
      fabricCanvas.setActiveObject(rect)
      fabricCanvas.renderAll()
    } else if (tool === 'circle') {
      const circle = new Circle({
        left: 100,
        top: 100,
        fill: activeColor,
        radius: 50,
      })
      fabricCanvas.add(circle)
      fabricCanvas.setActiveObject(circle)
      fabricCanvas.renderAll()
    }
  }

  const handleClear = () => {
    if (!fabricCanvas) return
    fabricCanvas.clear()
    fabricCanvas.backgroundColor = '#ffffff'
    fabricCanvas.renderAll()
    toast.success('Canvas cleared!')
  }

  const executeCode = () => {
    if (!fabricCanvas || !code.trim()) return

    try {
      setError(null)
      
      // Create a safe context for code execution
      const context = {
        canvas: fabricCanvas,
        addRectangle: (x: number, y: number, width: number, height: number, color: string = activeColor) => {
          const rect = new Rect({
            left: x,
            top: y,
            fill: color,
            width,
            height,
          })
          fabricCanvas.add(rect)
          fabricCanvas.renderAll()
          return rect
        },
        addCircle: (x: number, y: number, radius: number, color: string = activeColor) => {
          const circle = new Circle({
            left: x,
            top: y,
            fill: color,
            radius,
          })
          fabricCanvas.add(circle)
          fabricCanvas.renderAll()
          return circle
        },
        clear: () => {
          fabricCanvas.clear()
          fabricCanvas.backgroundColor = '#ffffff'
          fabricCanvas.renderAll()
        },
        setBackgroundColor: (color: string) => {
          fabricCanvas.backgroundColor = color
          fabricCanvas.renderAll()
        },
        animate: (object: any, property: string, value: any, duration: number = 1000) => {
          return new Promise((resolve) => {
            object.animate(property, value, {
              duration,
              onChange: () => fabricCanvas.renderAll(),
              onComplete: resolve
            })
          })
        }
      }

      // Execute user code with safe context
      const userFunction = new Function('ctx', code)
      userFunction(context)
      
      toast.success('Code executed successfully!')
    } catch (err) {
      console.error('Code execution error:', err)
      setError(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`)
      toast.error('Failed to execute code')
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Canvas and Tools */}
      <Card>
        <CardHeader>
          <CardTitle>Creative Canvas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4 items-center flex-wrap">
            <Toolbar 
              activeTool={activeTool} 
              onToolClick={handleToolClick} 
              onClear={handleClear} 
            />
            <ColorPicker 
              color={activeColor} 
              onChange={setActiveColor} 
            />
          </div>
          <div className="border border-border rounded-lg shadow-lg overflow-hidden">
            <canvas ref={canvasRef} className="max-w-full" />
          </div>
        </CardContent>
      </Card>

      {/* Code Editor */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Code Editor</CardTitle>
          <Button onClick={executeCode} size="sm">
            Run Code
          </Button>
        </CardHeader>
        <CardContent>
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="font-mono text-sm min-h-[400px] resize-none"
            placeholder="Write your Fabric.js code here..."
          />
          {error && (
            <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
              <p className="text-sm text-destructive font-mono">{error}</p>
            </div>
          )}
          <div className="mt-4 text-xs text-muted-foreground">
            <p>Available functions:</p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>ctx.addRectangle(x, y, width, height, color)</li>
              <li>ctx.addCircle(x, y, radius, color)</li>
              <li>ctx.clear()</li>
              <li>ctx.setBackgroundColor(color)</li>
              <li>ctx.animate(object, property, value, duration)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default FabricEditor