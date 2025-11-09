import { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleSphere() {
  const pointsRef = useRef<THREE.Points>(null!)
  const [isHovered, setIsHovered] = useState(false)
  const particleCount = 2000
  
  const { positions, originalPositions } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const originalPositions = new Float32Array(particleCount * 3)
    
    // Create particles in a sphere formation
    for (let i = 0; i < particleCount; i++) {
      const radius = 2 + Math.random() * 0.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      
      originalPositions[i * 3] = x
      originalPositions[i * 3 + 1] = y
      originalPositions[i * 3 + 2] = z
    }
    
    return { positions, originalPositions }
  }, [particleCount])

  useFrame((state) => {
    if (!pointsRef.current) return
    
    const time = state.clock.getElapsedTime()
    pointsRef.current.rotation.y = time * 0.1
    pointsRef.current.rotation.x = Math.sin(time * 0.2) * 0.1
    
    const positionAttribute = pointsRef.current.geometry.attributes.position
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      const originalX = originalPositions[i3]
      const originalY = originalPositions[i3 + 1]
      const originalZ = originalPositions[i3 + 2]
      
      if (isHovered) {
        // Expand particles outward on hover
        const distance = Math.sqrt(originalX ** 2 + originalY ** 2 + originalZ ** 2)
        const expansionFactor = 1.5
        positionAttribute.array[i3] = originalX * expansionFactor
        positionAttribute.array[i3 + 1] = originalY * expansionFactor
        positionAttribute.array[i3 + 2] = originalZ * expansionFactor
      } else {
        // Return to original position with slight wave animation
        const wave = Math.sin(time * 2 + i * 0.01) * 0.1
        positionAttribute.array[i3] = originalX + wave
        positionAttribute.array[i3 + 1] = originalY + wave
        positionAttribute.array[i3 + 2] = originalZ + wave
      }
    }
    
    positionAttribute.needsUpdate = true
  })

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#10B981" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      
      <points
        ref={pointsRef}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isHovered ? 0.08 : 0.05}
          color={isHovered ? "#14f195" : "#10B981"}
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  )
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [6, 2, 6], fov: 50 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <ParticleSphere />
      </Canvas>
    </div>
  )
}