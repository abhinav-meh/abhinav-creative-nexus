import { Canvas } from '@react-three/fiber'
import ParticleSphere from './ParticleSphere'

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        className="pointer-events-auto"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleSphere />
      </Canvas>
    </div>
  )
}
