import { Canvas, useFrame } from '@react-three/fiber'
import ParticleWave from './ParticleSphere'
import * as THREE from 'three'
import { useState, useEffect } from 'react'
import CameraDebugPanel from './CameraDebugPanel'
import { useThree } from '@react-three/fiber'

function CameraController({ rotationX }: { rotationX: number }) {
  const { camera } = useThree()
  
  useEffect(() => {
    camera.rotation.x = rotationX
  }, [rotationX, camera])
  
  return null
}

export default function ThreeBackground() {
  const [positionY, setPositionY] = useState(3.5)
  const [positionZ, setPositionZ] = useState(8)
  const [rotationX, setRotationX] = useState(-0.45)
  const [fov, setFov] = useState(60)

  return (
    <>
      <CameraDebugPanel
        positionY={positionY}
        positionZ={positionZ}
        rotationX={rotationX}
        fov={fov}
        onPositionYChange={(v) => setPositionY(v[0])}
        onPositionZChange={(v) => setPositionZ(v[0])}
        onRotationXChange={(v) => setRotationX(v[0])}
        onFovChange={(v) => setFov(v[0])}
      />
      
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-white via-white/80 to-[#f2f2f2]">
        <Canvas
          camera={{ position: [0, positionY, positionZ], fov }}
          gl={{ alpha: false }}
          style={{ pointerEvents: 'none', background: '#ffffff' }}
          onCreated={({ scene, gl }) => {
            scene.background = new THREE.Color('#ffffff')
            gl.setClearColor('#ffffff', 1)
            gl.domElement.style.pointerEvents = 'none'
          }}
        >
        <CameraController rotationX={rotationX} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <group rotation={[-0.25, 0, 0]}>
          <ParticleWave />
        </group>
      </Canvas>
      </div>
    </>
  )
}
