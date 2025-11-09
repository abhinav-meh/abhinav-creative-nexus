import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import ParticleWave from './ParticleSphere'
import GridControlsPanel from './GridControlsPanel'

interface CameraControllerProps {
  positionY: number
  positionZ: number
  rotationX: number
  fov: number
}

function CameraController({ positionY, positionZ, rotationX, fov }: CameraControllerProps) {
  const { camera } = useThree()
  
  useEffect(() => {
    camera.position.set(0, positionY, positionZ)
    camera.rotation.x = rotationX
    if ('fov' in camera) {
      (camera as any).fov = fov
      camera.updateProjectionMatrix()
    }
  }, [camera, positionY, positionZ, rotationX, fov])
  
  return null
}

export default function ThreeBackground() {
  // Mobile cap for particle density
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const maxParticles = isMobile ? 5000 : 8000

  const [waveAmplitude, setWaveAmplitude] = useState(() => {
    const saved = localStorage.getItem('waveAmplitude')
    return saved ? parseFloat(saved) : 0.4
  })
  
  const [particleCount, setParticleCount] = useState(() => {
    const saved = localStorage.getItem('particleCount')
    const count = saved ? parseInt(saved, 10) : 3000
    return Math.min(count, maxParticles)
  })
  
  const [waveSpeed, setWaveSpeed] = useState(() => {
    const saved = localStorage.getItem('waveSpeed')
    return saved ? parseFloat(saved) : 0.3
  })

  const [cameraPositionY, setCameraPositionY] = useState(() => {
    const saved = localStorage.getItem('cameraPositionY')
    return saved ? parseFloat(saved) : 3
  })

  const [cameraPositionZ, setCameraPositionZ] = useState(() => {
    const saved = localStorage.getItem('cameraPositionZ')
    return saved ? parseFloat(saved) : 10
  })

  const [cameraRotationX, setCameraRotationX] = useState(() => {
    const saved = localStorage.getItem('cameraRotationX')
    return saved ? parseFloat(saved) : -0.3
  })

  const [fov, setFov] = useState(() => {
    const saved = localStorage.getItem('fov')
    return saved ? parseFloat(saved) : 75
  })

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('waveAmplitude', waveAmplitude.toString())
  }, [waveAmplitude])
  
  useEffect(() => {
    localStorage.setItem('particleCount', particleCount.toString())
  }, [particleCount])
  
  useEffect(() => {
    localStorage.setItem('waveSpeed', waveSpeed.toString())
  }, [waveSpeed])

  useEffect(() => {
    localStorage.setItem('cameraPositionY', cameraPositionY.toString())
  }, [cameraPositionY])

  useEffect(() => {
    localStorage.setItem('cameraPositionZ', cameraPositionZ.toString())
  }, [cameraPositionZ])

  useEffect(() => {
    localStorage.setItem('cameraRotationX', cameraRotationX.toString())
  }, [cameraRotationX])

  useEffect(() => {
    localStorage.setItem('fov', fov.toString())
  }, [fov])

  const handleReset = () => {
    setWaveAmplitude(0.4)
    setParticleCount(3000)
    setWaveSpeed(0.3)
    setCameraPositionY(3)
    setCameraPositionZ(10)
    setCameraRotationX(-0.3)
    setFov(75)
  }

  return (
    <>
      <Canvas
        camera={{ position: [0, cameraPositionY, cameraPositionZ], fov }}
        gl={{ 
          alpha: false,
          antialias: true,
          powerPreference: 'high-performance'
        }}
        onCreated={({ gl, scene }) => {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
          gl.setClearColor('#ffffff', 1)
          scene.background = new THREE.Color('#ffffff')
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          background: '#ffffff'
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleWave 
          amplitude={waveAmplitude}
          speed={waveSpeed}
          particleCount={particleCount}
        />
        <CameraController 
          positionY={cameraPositionY}
          positionZ={cameraPositionZ}
          rotationX={cameraRotationX}
          fov={fov}
        />
      </Canvas>
      
      <GridControlsPanel
        waveAmplitude={waveAmplitude}
        particleCount={particleCount}
        waveSpeed={waveSpeed}
        cameraRotationX={cameraRotationX}
        cameraPositionY={cameraPositionY}
        cameraPositionZ={cameraPositionZ}
        fov={fov}
        onWaveAmplitudeChange={setWaveAmplitude}
        onParticleCountChange={setParticleCount}
        onWaveSpeedChange={setWaveSpeed}
        onCameraRotationXChange={setCameraRotationX}
        onCameraPositionYChange={setCameraPositionY}
        onCameraPositionZChange={setCameraPositionZ}
        onFovChange={setFov}
        onReset={handleReset}
      />
    </>
  )
}
