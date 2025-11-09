import { Canvas } from '@react-three/fiber'
import ParticleWave from './ParticleSphere'
import * as THREE from 'three'

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 2, 10], fov: 60 }}
        style={{ pointerEvents: 'none' }}
        onCreated={({ scene, gl }) => {
          scene.background = new THREE.Color('#ffffff')
          gl.domElement.style.pointerEvents = 'none'
        }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <ParticleWave />
      </Canvas>
    </div>
  )
}
