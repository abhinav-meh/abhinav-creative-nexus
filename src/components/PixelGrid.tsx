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

    const gridSize = 6
    const cols = Math.ceil(canvas.width / gridSize)
    const rows = Math.ceil(canvas.height / gridSize)
    
    let pixels: number[][] = []
    
    // Initialize pixel grid
    for (let i = 0; i < rows; i++) {
      pixels[i] = []
      for (let j = 0; j < cols; j++) {
        pixels[i][j] = Math.random() > 0.5 ? 1 : 0
      }
    }

    let animationId: number
    let lastTime = 0
    const interval = 150 // Animation speed

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= interval) {
        // Update random pixels (increased randomness)
        for (let i = 0; i < 10; i++) {
          const row = Math.floor(Math.random() * rows)
          const col = Math.floor(Math.random() * cols)
          pixels[row][col] = pixels[row][col] === 1 ? 0 : Math.random() > 0.3 ? 1 : 0
        }

        // Clear canvas
        ctx.fillStyle = 'transparent'
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw pixels with colorful effects
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            if (pixels[i][j] === 1) {
              // Random colorful pixels matching the gradient
              const colors = [
                'rgba(255, 165, 0, 0.8)',     // Orange
                'rgba(186, 85, 211, 0.8)',    // Light Purple
                'rgba(99, 179, 237, 0.8)',    // Blue
                'rgba(255, 255, 255, 0.9)'    // White accent
              ]
              
              const color = colors[Math.floor(Math.random() * colors.length)]
              ctx.fillStyle = color
              
              // Add glow effect
              ctx.shadowColor = color
              ctx.shadowBlur = 6
              ctx.fillRect(j * gridSize, i * gridSize, gridSize - 1, gridSize - 1)
              
              // Reset shadow
              ctx.shadowBlur = 0
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
      className="absolute inset-0 opacity-40"
      style={{ mixBlendMode: 'overlay' }}
    />
  )
}