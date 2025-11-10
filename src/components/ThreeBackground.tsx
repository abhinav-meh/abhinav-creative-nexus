import { Canvas, useFrame } from '@react-three/fiber'
import ParticleWave from './ParticleSphere'
import * as THREE from 'three'
import { useState, useEffect } from 'react'
import GridControlsPanel from './GridControlsPanel'
import { useThree } from '@react-three/fiber'

const DEFAULTS = {
  amplitude: 0.4,
  size: 0.16,
  speed: 0.3,
  particleCount: 6000,
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
  // Handle window resize for grid scaling
  const [viewportSize, setViewportSize] = useState({ width: window.innerWidth, height: window.innerHeight })
  
  useEffect(() => {
    const handleResize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Load from localStorage or use defaults
  const [waveAmplitude, setWaveAmplitude] = useState(() => {
    const saved = localStorage.getItem('gridControls_amplitude')
    return saved ? parseFloat(saved) : DEFAULTS.amplitude
  })
  
  const [particleCount, setParticleCount] = useState(() => {
    const saved = localStorage.getItem('gridControls_particleCount')
    return saved ? parseInt(saved) : DEFAULTS.particleCount
  })
  
  const [waveSpeed, setWaveSpeed] = useState(() => {
    const saved = localStorage.getItem('gridControls_speed')
    return saved ? parseFloat(saved) : DEFAULTS.speed
  })

  // Camera state with localStorage
  const [positionY, setPositionY] = useState(() => {
    const saved = localStorage.getItem('gridControls_cameraY')
    return saved ? parseFloat(saved) : 3.5
  })
  
  const [positionZ, setPositionZ] = useState(() => {
    const saved = localStorage.getItem('gridControls_cameraZ')
    return saved ? parseFloat(saved) : 9.5
  })
  
  const [rotationX, setRotationX] = useState(() => {
    const saved = localStorage.getItem('gridControls_cameraRotX')
    return saved ? parseFloat(saved) : -0.45
  })
  
  const [fov, setFov] = useState(() => {
    const saved = localStorage.getItem('gridControls_fov')
    return saved ? parseFloat(saved) : 65
  })

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('gridControls_amplitude', waveAmplitude.toString())
  }, [waveAmplitude])
  
  useEffect(() => {
    localStorage.setItem('gridControls_particleCount', particleCount.toString())
  }, [particleCount])
  
  useEffect(() => {
    localStorage.setItem('gridControls_speed', waveSpeed.toString())
  }, [waveSpeed])

  useEffect(() => {
    localStorage.setItem('gridControls_cameraY', positionY.toString())
  }, [positionY])

  useEffect(() => {
    localStorage.setItem('gridControls_cameraZ', positionZ.toString())
  }, [positionZ])

  useEffect(() => {
    localStorage.setItem('gridControls_cameraRotX', rotationX.toString())
  }, [rotationX])

  useEffect(() => {
    localStorage.setItem('gridControls_fov', fov.toString())
  }, [fov])

  const handleReset = () => {
    setWaveAmplitude(DEFAULTS.amplitude)
    setParticleCount(DEFAULTS.particleCount)
    setWaveSpeed(DEFAULTS.speed)
    setPositionY(3.5)
    setPositionZ(9.5)
    setRotationX(-0.45)
    setFov(65)
  }

  return (
    <>
      <GridControlsPanel
        waveAmplitude={waveAmplitude}
        particleCount={particleCount}
        waveSpeed={waveSpeed}
        cameraRotationX={rotationX}
        cameraPositionY={positionY}
        cameraPositionZ={positionZ}
        fov={fov}
        onWaveAmplitudeChange={setWaveAmplitude}
        onParticleCountChange={setParticleCount}
        onWaveSpeedChange={setWaveSpeed}
        onCameraRotationXChange={setRotationX}
        onCameraPositionYChange={setPositionY}
        onCameraPositionZChange={setPositionZ}
        onFovChange={setFov}
        onReset={handleReset}
      />
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <Canvas
          camera={{ position: [0, positionY, positionZ], fov }}
          gl={{ alpha: false }}
          style={{ pointerEvents: 'none', background: '#ffffff' }}
          onCreated={({ scene, gl, camera }) => {
            gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            gl.setClearColor('#ffffff', 1)
            scene.background = new THREE.Color('#ffffff')
            gl.domElement.style.pointerEvents = 'none'
            
            // Closer camera for more immersive feel
            camera.position.set(0, 1.0, 7.2)
            camera.rotation.x = -0.28
            if (camera instanceof THREE.PerspectiveCamera) {
              camera.fov = 50
              camera.updateProjectionMatrix()
            }
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
        <ParticleWave 
          key={`${viewportSize.width}-${viewportSize.height}`}
          position={[0, 0.95, 0]}
          amplitude={waveAmplitude}
          size={DEFAULTS.size}
          speed={waveSpeed}
          particleCount={particleCount}
        />
      </Canvas>
      </div>
    </>
  )
}
