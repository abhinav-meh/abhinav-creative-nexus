import { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleWave() {
  const pointsRef = useRef<THREE.Points>(null)
  const [isHovered, setIsHovered] = useState(false)

  const particleCount = 3000
  
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    
    const width = 8
    const depth = 8
    const gridSize = Math.sqrt(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const row = Math.floor(i / gridSize)
      const col = i % gridSize
      
      const x = (col / gridSize) * width - width / 2
      const z = (row / gridSize) * depth - depth / 2
      const y = 0

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      // Gradient from blue to pink to orange
      const progress = col / gridSize
      
      if (progress < 0.33) {
        // Blue to Pink
        const t = progress / 0.33
        colors[i * 3] = 0.36 + (0.93 - 0.36) * t      // R: blue to pink
        colors[i * 3 + 1] = 0.67 + (0.55 - 0.67) * t  // G: blue to pink
        colors[i * 3 + 2] = 0.93 + (0.75 - 0.93) * t  // B: blue to pink
      } else if (progress < 0.66) {
        // Pink to Orange
        const t = (progress - 0.33) / 0.33
        colors[i * 3] = 0.93 + (1.0 - 0.93) * t       // R: pink to orange
        colors[i * 3 + 1] = 0.55 + (0.64 - 0.55) * t  // G: pink to orange
        colors[i * 3 + 2] = 0.75 + (0.31 - 0.75) * t  // B: pink to orange
      } else {
        // Orange
        colors[i * 3] = 1.0
        colors[i * 3 + 1] = 0.64
        colors[i * 3 + 2] = 0.31
      }
    }

    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime()
      
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      const gridSize = Math.sqrt(particleCount)

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const row = Math.floor(i / gridSize)
        const col = i % gridSize
        
        const x = positions[i3]
        const z = positions[i3 + 2]
        
        // Create wave motion
        const waveX = Math.sin(x * 0.5 + time * 0.8) * 0.3
        const waveZ = Math.sin(z * 0.5 + time * 0.5) * 0.3
        const wavePattern = Math.sin(x * 0.8 + z * 0.8 + time) * 0.5
        
        const baseAmplitude = isHovered ? 1.2 : 0.8
        positions[i3 + 1] = (waveX + waveZ + wavePattern) * baseAmplitude
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true
      
      // Slight rotation
      pointsRef.current.rotation.y = time * 0.05
    }
  })

  return (
    <points
      ref={pointsRef}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isHovered ? 0.08 : 0.06}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
