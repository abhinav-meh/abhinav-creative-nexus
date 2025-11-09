import { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleSphere() {
  const pointsRef = useRef<THREE.Points>(null)
  const [isHovered, setIsHovered] = useState(false)

  const particleCount = 2000
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const radius = 2

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }

    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime()
      
      // Rotate sphere slowly
      pointsRef.current.rotation.y = time * 0.1
      pointsRef.current.rotation.x = time * 0.05

      // Expand/contract on hover
      const targetScale = isHovered ? 1.3 : 1
      pointsRef.current.scale.x += (targetScale - pointsRef.current.scale.x) * 0.05
      pointsRef.current.scale.y += (targetScale - pointsRef.current.scale.y) * 0.05
      pointsRef.current.scale.z += (targetScale - pointsRef.current.scale.z) * 0.05

      // Wave effect
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      const originalPositions = particles

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const wave = Math.sin(time * 2 + originalPositions[i3] * 2) * 0.05
        
        positions[i3] = originalPositions[i3] + wave * originalPositions[i3]
        positions[i3 + 1] = originalPositions[i3 + 1] + wave * originalPositions[i3 + 1]
        positions[i3 + 2] = originalPositions[i3 + 2] + wave * originalPositions[i3 + 2]
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true
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
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isHovered ? 0.04 : 0.03}
        color={isHovered ? '#0EA5E9' : '#94a3b8'}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}
