import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei'
import * as THREE from 'three'

function FloatingGeometry() {
  const meshRef = useRef<THREE.Group>(null!)
  const sphere1Ref = useRef<THREE.Mesh>(null!)
  const sphere2Ref = useRef<THREE.Mesh>(null!)
  const boxRef = useRef<THREE.Mesh>(null!)
  const torusRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.1
    }
    
    if (sphere1Ref.current) {
      sphere1Ref.current.position.y = Math.sin(time * 0.8) * 0.5
      sphere1Ref.current.rotation.x = time * 0.3
    }
    
    if (sphere2Ref.current) {
      sphere2Ref.current.position.x = Math.cos(time * 0.6) * 2
      sphere2Ref.current.position.z = Math.sin(time * 0.6) * 2
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.2
      boxRef.current.rotation.y = time * 0.3
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.4
      torusRef.current.position.y = Math.cos(time * 0.7) * 0.8
    }
  })

  return (
    <group ref={meshRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      
      <Sphere ref={sphere1Ref} args={[0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#10B981" 
          roughness={0.2} 
          metalness={0.8}
          emissive="#10B981"
          emissiveIntensity={0.1}
        />
      </Sphere>
      
      <Sphere ref={sphere2Ref} args={[0.4]} position={[2, 1, 2]}>
        <meshStandardMaterial 
          color="#8B5CF6" 
          roughness={0.1} 
          metalness={0.9}
          emissive="#8B5CF6"
          emissiveIntensity={0.1}
        />
      </Sphere>
      
      <Box ref={boxRef} args={[0.6, 0.6, 0.6]} position={[-2, 0.5, 1]}>
        <meshStandardMaterial 
          color="#EC4899" 
          roughness={0.3} 
          metalness={0.7}
          emissive="#EC4899"
          emissiveIntensity={0.05}
        />
      </Box>
      
      <Torus ref={torusRef} args={[1.2, 0.3, 8, 16]} position={[1, -1, -1]}>
        <meshStandardMaterial 
          color="#F59E0B" 
          roughness={0.2} 
          metalness={0.8}
          emissive="#F59E0B"
          emissiveIntensity={0.1}
        />
      </Torus>
    </group>
  )
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 50 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <FloatingGeometry />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}