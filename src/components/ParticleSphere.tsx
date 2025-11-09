import { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleWave({ 
  amplitude = 0.25,
  size = 0.08,
  speed = 0.3,
  particleCount = 3000
}: {
  amplitude?: number
  size?: number
  speed?: number
  particleCount?: number
}) {
  const pointsRef = useRef<THREE.Points>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  // Create soft circular texture with smooth falloff
  const circleTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext('2d')!
    
    // Clear canvas
    ctx.clearRect(0, 0, 64, 64)
    
    // Create radial gradient for soft circle
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)')
    gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.3)')
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
    
    // Draw soft circle
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 64, 64)
    
    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }, [])
  
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    
    const width = 20
    const depth = 20
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

      // Soft gradient for white background: light teal → lavender → pale peach
      const progress = col / gridSize
      
      if (progress < 0.33) {
        // Light Teal to Lavender
        const t = progress / 0.33
        colors[i * 3] = 0.6 + (0.7 - 0.6) * t      // R
        colors[i * 3 + 1] = 0.8 + (0.7 - 0.8) * t  // G
        colors[i * 3 + 2] = 0.85 + (0.9 - 0.85) * t  // B
      } else if (progress < 0.66) {
        // Lavender to Pale Peach
        const t = (progress - 0.33) / 0.33
        colors[i * 3] = 0.7 + (0.95 - 0.7) * t     // R
        colors[i * 3 + 1] = 0.7 + (0.85 - 0.7) * t  // G
        colors[i * 3 + 2] = 0.9 + (0.8 - 0.9) * t   // B
      } else {
        // Pale Peach
        colors[i * 3] = 0.95
        colors[i * 3 + 1] = 0.85
        colors[i * 3 + 2] = 0.8
      }
    }

    return { positions, colors }
  }, [particleCount])

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
        
        // Create slow, calm wave motion with controlled amplitude
        const waveX = Math.sin(x * 0.5 + time * (0.3 * speed)) * (0.15 * amplitude)
        const waveZ = Math.sin(z * 0.5 + time * (0.2 * speed)) * (0.15 * amplitude)
        const wavePattern = Math.sin(x * 0.8 + z * 0.8 + time * (0.4 * speed)) * (0.15 * amplitude)
        
        const baseAmplitude = isHovered ? 0.6 : 0.5
        positions[i3 + 1] = (waveX + waveZ + wavePattern) * baseAmplitude
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true
      
      // Gentle rotation
      pointsRef.current.rotation.y = time * 0.02
    }
  })

  return (
    <points
      ref={pointsRef}
      position={[0, 0.5, 0]}
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
        map={circleTexture}
        size={size}
        color="#bfbfbf"
        transparent
        opacity={0.55}
        alphaTest={0.01}
        depthWrite={false}
        sizeAttenuation
        blending={THREE.NormalBlending}
      />
    </points>
  )
}
