import { Canvas, useFrame } from '@react-three/fiber'
import ParticleWave from './ParticleSphere'
import * as THREE from 'three'
import { useState, useEffect } from 'react'
import GridControlsPanel from './GridControlsPanel'
import { useThree } from '@react-three/fiber'

const DEFAULTS = {
  amplitude: 0.2,
  size: 0.12,
  speed: 0.3,
}

function CameraController({ 
  positionY, 
  positionZ, 
  rotationX, 
  fov 
}: { 
  positionY: number
  positionZ: number
  rotationX: number
  fov: number
}) {
  const { camera } = useThree()
  
  useEffect(() => {
    camera.position.y = positionY
    camera.position.z = positionZ
    camera.rotation.x = rotationX
    if ('fov' in camera && camera instanceof THREE.PerspectiveCamera) {
      camera.fov = fov
      camera.updateProjectionMatrix()
    }
  }, [positionY, positionZ, rotationX, fov, camera])
  
  return null
}

export default function ThreeBackground() {
  // Load from localStorage or use defaults
  const [waveAmplitude, setWaveAmplitude] = useState(() => {
    const saved = localStorage.getItem('gridControls_amplitude')
    return saved ? parseFloat(saved) : DEFAULTS.amplitude
  })
  
  const [particleSize, setParticleSize] = useState(() => {
    const saved = localStorage.getItem('gridControls_size')
    return saved ? parseFloat(saved) : DEFAULTS.size
  })
  
  const [waveSpeed, setWaveSpeed] = useState(() => {
    const saved = localStorage.getItem('gridControls_speed')
    return saved ? parseFloat(saved) : DEFAULTS.speed
  })

  // Camera defaults
  const [positionY] = useState(3.5)
  const [positionZ] = useState(8)
  const [rotationX] = useState(-0.45)
  const [fov] = useState(60)

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('gridControls_amplitude', waveAmplitude.toString())
  }, [waveAmplitude])
  
  useEffect(() => {
    localStorage.setItem('gridControls_size', particleSize.toString())
  }, [particleSize])
  
  useEffect(() => {
    localStorage.setItem('gridControls_speed', waveSpeed.toString())
  }, [waveSpeed])

  const handleReset = () => {
    setWaveAmplitude(DEFAULTS.amplitude)
    setParticleSize(DEFAULTS.size)
    setWaveSpeed(DEFAULTS.speed)
  }

  return (
    <>
      <GridControlsPanel
        waveAmplitude={waveAmplitude}
        particleSize={particleSize}
        waveSpeed={waveSpeed}
        onWaveAmplitudeChange={setWaveAmplitude}
        onParticleSizeChange={setParticleSize}
        onWaveSpeedChange={setWaveSpeed}
        onReset={handleReset}
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
        <CameraController 
          positionY={positionY}
          positionZ={positionZ}
          rotationX={rotationX} 
          fov={fov}
        />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <group rotation={[-0.25, 0, 0]}>
          <ParticleWave 
            amplitude={waveAmplitude}
            size={particleSize}
            speed={waveSpeed}
          />
        </group>
      </Canvas>
      </div>
    </>
  )
}
