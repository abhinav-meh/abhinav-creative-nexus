import { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleWave({ 
  amplitude = 0.4,
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
  const geometryRef = useRef<THREE.BufferGeometry | null>(null)
  
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

      // Initial gradient setup (will be animated in useFrame)
      const progress = col / gridSize
      
      // Vibrant Blue (#7DC8FF) to Warm Pink (#FF7AC7)
      // Blue: RGB(125, 200, 255) -> normalized (0.49, 0.784, 1.0)
      // Pink: RGB(255, 122, 199) -> normalized (1.0, 0.478, 0.78)
      colors[i * 3] = 0.49 + (1.0 - 0.49) * progress       // R
      colors[i * 3 + 1] = 0.784 + (0.478 - 0.784) * progress // G
      colors[i * 3 + 2] = 1.0 + (0.78 - 1.0) * progress      // B
    }

    return { positions, colors }
  }, [particleCount])

  // Update geometry when particle count changes
  useEffect(() => {
    if (pointsRef.current && geometryRef.current) {
      geometryRef.current.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometryRef.current.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      geometryRef.current.attributes.position.needsUpdate = true
      geometryRef.current.attributes.color.needsUpdate = true
    }
  }, [particleCount, positions, colors])

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime()
      
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      const colors = pointsRef.current.geometry.attributes.color.array as Float32Array
      const gridSize = Math.sqrt(particleCount)

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const row = Math.floor(i / gridSize)
        const col = i % gridSize
        
        const x = positions[i3]
        const z = positions[i3 + 2]
        
        // Create slow, calm wave motion with controlled amplitude
        const waveX = Math.sin(x * 0.5 + time * (0.3 * speed)) * (0.2 * amplitude)
        const waveZ = Math.sin(z * 0.5 + time * (0.2 * speed)) * (0.2 * amplitude)
        const wavePattern = Math.sin(x * 0.8 + z * 0.8 + time * (0.4 * speed)) * (0.25 * amplitude)
        
        const baseAmplitude = isHovered ? 0.8 : 0.7
        positions[i3 + 1] = (waveX + waveZ + wavePattern) * baseAmplitude

        // Animate gradient colors based on wave position and time
        const normalizedX = (x + 10) / 20 // Normalize x to 0-1
        const normalizedZ = (z + 10) / 20 // Normalize z to 0-1
        const wavePhase = Math.sin(x * 0.5 + time * 0.6) * 0.5 + 0.5 // 0-1 oscillation
        const depthPhase = Math.sin(z * 0.3 + time * 0.4) * 0.3 + 0.5 // Additional depth variation
        const progress = ((normalizedX * 0.6 + normalizedZ * 0.2) + wavePhase * 0.4 + depthPhase * 0.2) % 1
        
        // Vibrant Blue (#7DC8FF) to Warm Pink (#FF7AC7)
        colors[i3] = 0.49 + (1.0 - 0.49) * progress       // R
        colors[i3 + 1] = 0.784 + (0.478 - 0.784) * progress // G
        colors[i3 + 2] = 1.0 + (0.78 - 1.0) * progress      // B
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true
      pointsRef.current.geometry.attributes.color.needsUpdate = true
      
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
      <bufferGeometry ref={geometryRef}>
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
        transparent
        opacity={0.85}
        alphaTest={0.01}
        depthWrite={false}
        sizeAttenuation
        vertexColors
        blending={THREE.AdditiveBlending}
        toneMapped={false}
      />
    </points>
  )
}
