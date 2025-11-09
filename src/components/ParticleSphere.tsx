import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { FLAGS } from '@/config/flags'

const vertexShader = `
attribute vec2 uv;
uniform float uTime, uAmp, uSpeed;
varying float vMix;

void main() {
  float phase = position.x * 0.6 + position.z * 0.25 + uTime * uSpeed;
  float z = sin(phase) * uAmp;
  vec3 pos = vec3(position.x, z, position.z);

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;

  float dist = length(mv.xyz);
  gl_PointSize = clamp(120.0 / dist, 1.0, 8.0);

  // gradient shifts with the wave slightly
  vMix = fract(uv.x + 0.15 * sin(phase));
}
`

const fragmentShader = `
precision highp float;
uniform vec3 uColorA, uColorB;
varying float vMix;

void main() {
  vec2 p = gl_PointCoord - 0.5;
  float d = length(p);
  float circle = smoothstep(0.5, 0.0, d);
  vec3 color = mix(uColorA, uColorB, vMix);
  gl_FragColor = vec4(color, circle * 0.75);
}
`

export default function ParticleWave({ 
  amplitude = 0.4,
  speed = 0.3,
  particleCount = 3000
}: {
  amplitude?: number
  speed?: number
  particleCount?: number
}) {
  const pointsRef = useRef<THREE.Points>(null)
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uAmp: { value: amplitude },
    uSpeed: { value: speed },
    uColorA: { value: new THREE.Color('#7DC8FF') },
    uColorB: { value: new THREE.Color('#FF7AC7') },
  }), [])

  useEffect(() => {
    uniforms.uAmp.value = amplitude
  }, [amplitude, uniforms])

  useEffect(() => {
    uniforms.uSpeed.value = speed
  }, [speed, uniforms])

  const material = useMemo(() => new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: FLAGS.gradientParticles ? THREE.NormalBlending : THREE.AdditiveBlending,
    uniforms,
  }), [uniforms])

  useEffect(() => {
    const width = 20
    const depth = 20
    const gridSize = Math.sqrt(particleCount)
    const positions = new Float32Array(particleCount * 3)
    const uvs = new Float32Array(particleCount * 2)

    for (let i = 0; i < particleCount; i++) {
      const row = Math.floor(i / gridSize)
      const col = i % gridSize
      
      const x = (col / gridSize) * width - width / 2
      const z = (row / gridSize) * depth - depth / 2
      const y = 0

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      uvs[i * 2] = col / gridSize
      uvs[i * 2 + 1] = row / gridSize
    }

    const geom = new THREE.BufferGeometry()
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))
    geom.setDrawRange(0, particleCount)
    geom.computeBoundingSphere()

    if (pointsRef.current) {
      pointsRef.current.geometry?.dispose()
      pointsRef.current.geometry = geom
      pointsRef.current.frustumCulled = false
    }
  }, [particleCount])

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime()
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02
    }
  })

  return (
    <points
      ref={pointsRef}
      position={[0, 0.5, 0]}
      material={material}
    />
  )
}
