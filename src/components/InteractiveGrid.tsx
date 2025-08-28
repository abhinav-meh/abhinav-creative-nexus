import { useState, useEffect } from 'react'

const InteractiveGrid = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const gridSize = 64
  const cols = Math.ceil(dimensions.width / gridSize)
  const rows = Math.ceil(dimensions.height / gridSize)
  const totalCells = cols * rows

  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${gridSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${gridSize}px)`,
      }}
    >
      {Array.from({ length: totalCells }).map((_, i) => (
        <div
          key={i}
          className="border border-transparent hover:border-primary/40 hover:bg-primary/8 transition-all duration-300 pointer-events-auto cursor-crosshair hover:shadow-[0_0_20px_rgba(99,179,237,0.2)]"
        />
      ))}
    </div>
  )
}

export default InteractiveGrid