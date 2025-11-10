import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
uniform float uTime, uAmp, uSpeed, uSizeBase;
void main() {
  // positions are on XZ plane; displace height on Y
  float phase = position.x * 0.6 + position.z * 0.25 + uTime * uSpeed;
  float h = sin(phase) * uAmp;
  vec3 pos = vec3(position.x, h, position.z);

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;

  float dist = max(length(mv.xyz), 0.001);
  gl_PointSize = clamp(uSizeBase * 160.0 / dist, 2.6, 6.0);
}
`

const fragmentShader = `
precision highp float;
uniform vec3 uMonoColor;
void main() {
  vec2 p = gl_PointCoord - 0.5;
  float d = length(p);
  float circle = smoothstep(0.5, 0.0, d);
  gl_FragColor = vec4(uMonoColor, circle * 0.62);
}
`

export default function ParticleWave({ 
  position = [0, 0.5, 0],
  amplitude = 0.4,
  size = 0.08,
  speed = 0.3,
  particleCount = 3000
}: {
  position?: [number, number, number]
  amplitude?: number
  size?: number
  speed?: number
  particleCount?: number
}) {
  const pointsRef = useRef<THREE.Points>(null)
  const geometryRef = useRef<THREE.BufferGeometry | null>(null)
  
  const uniforms = useMemo(() => ({
    uTime:      { value: 0 },
    uAmp:       { value: amplitude },
    uSpeed:     { value: speed },
    uMonoColor: { value: new THREE.Color('#BDBDBD') },
    uSizeBase:  { value: 3.0 },
  }), [amplitude, speed])

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.NormalBlending,
      }),
    [uniforms]
  )

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    
    const width = 20
    const depth = 20
    const gridSize = Math.sqrt(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const row = Math.floor(i / gridSize)
      const col = i % gridSize
      
      const x = (col / gridSize) * width - width / 2
      const z = (row / gridSize) * depth - depth / 2
      const y = 0

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }

    return positions
  }, [particleCount])

  // Update geometry when particle count changes
  useEffect(() => {
    if (pointsRef.current && geometryRef.current) {
      geometryRef.current.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometryRef.current.attributes.position.needsUpdate = true
    }
  }, [particleCount, positions])

  // Update uniforms when props change
  useEffect(() => {
    uniforms.uAmp.value = amplitude
    uniforms.uSpeed.value = speed
  }, [amplitude, speed, uniforms])

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime()
  })

  // Create geometry
  useEffect(() => {
    const geom = new THREE.BufferGeometry()
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geom.setDrawRange(0, particleCount)
    geom.computeBoundingSphere()

    if (pointsRef.current) {
      pointsRef.current.geometry?.dispose()
      pointsRef.current.geometry = geom
      pointsRef.current.frustumCulled = false
    }
    geometryRef.current = geom
  }, [positions, particleCount])

  return (
    <points
      ref={pointsRef}
      position={position}
      material={material}
    />
  )
}
