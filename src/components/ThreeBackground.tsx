import { Canvas } from '@react-three/fiber'
import ParticleWave from './ParticleSphere'

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 5, 12], fov: 60 }}
        className="pointer-events-auto"
        gl={{ alpha: true, premultipliedAlpha: false }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <ParticleWave />
      </Canvas>
    </div>
  )
}
