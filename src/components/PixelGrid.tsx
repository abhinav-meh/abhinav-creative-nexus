import { useEffect, useRef } from 'react'

export default function PixelGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const gridSize = 20
    const cols = Math.ceil(canvas.width / gridSize)
    const rows = Math.ceil(canvas.height / gridSize)
    
    let pixels: number[][] = []
    
    // Initialize pixel grid
    for (let i = 0; i < rows; i++) {
      pixels[i] = []
      for (let j = 0; j < cols; j++) {
        pixels[i][j] = Math.random() > 0.8 ? 1 : 0
      }
    }

    let animationId: number
    let lastTime = 0
    const interval = 150 // Animation speed

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= interval) {
        // Update random pixels
        for (let i = 0; i < 3; i++) {
          const row = Math.floor(Math.random() * rows)
          const col = Math.floor(Math.random() * cols)
          pixels[row][col] = pixels[row][col] === 1 ? 0 : Math.random() > 0.7 ? 1 : 0
        }

        // Clear canvas
        ctx.fillStyle = 'transparent'
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw pixels
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            if (pixels[i][j] === 1) {
              ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
              ctx.fillRect(j * gridSize, i * gridSize, gridSize - 1, gridSize - 1)
            }
          }
        }

        lastTime = currentTime
      }

      animationId = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-20"
      style={{ mixBlendMode: 'overlay' }}
    />
  )
}