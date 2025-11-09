import { Canvas } from '@react-three/fiber'
import ParticleWave from './ParticleSphere'
import * as THREE from 'three'

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-white via-white/80 to-[#f2f2f2]">
      <Canvas
        camera={{ position: [0, 1, 8], fov: 55 }}
        gl={{ alpha: false }}
        style={{ pointerEvents: 'none', background: '#ffffff' }}
        onCreated={({ scene, gl }) => {
          scene.background = new THREE.Color('#ffffff')
          gl.setClearColor('#ffffff', 1)
          gl.domElement.style.pointerEvents = 'none'
        }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <group rotation={[-0.25, 0, 0]}>
          <ParticleWave />
        </group>
      </Canvas>
    </div>
  )
}
