import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
uniform float uTime, uAmp, uSpeed, uSizeBase;
varying float vFade;

void main() {
  float phase = position.x * 0.6 + position.y * 0.25 + uTime * uSpeed;
  float z = sin(phase) * uAmp;
  vec3 pos = vec3(position.xy, z);

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;

  float dist = max(length(mv.xyz), 0.001);
  gl_PointSize = clamp(uSizeBase * 160.0 / dist, 2.6, 5.0);

  // optional slight depth fade so far dots are lighter
  vFade = clamp(1.0 - smoothstep(6.0, 14.0, dist), 0.55, 1.0);
}
`

const fragmentShader = `
precision highp float;
uniform vec3 uMonoColor;
varying float vFade;

void main() {
  vec2 p = gl_PointCoord - 0.5;
  float d = length(p);
  float circle = smoothstep(0.5, 0.0, d);
  gl_FragColor = vec4(uMonoColor, circle * 0.62 * vFade);
}
`

export default function ParticleWave({ 
  amplitude = 0.35,
  speed = 0.3,
  particleCount = 3600
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
    uMonoColor: { value: new THREE.Color('#BDBDBD') },
    uSizeBase: { value: 1.6 },
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
    blending: THREE.NormalBlending,
    uniforms,
  }), [uniforms])

  useEffect(() => {
    const count = particleCount
    const cols = Math.ceil(Math.sqrt(count))
    const rows = cols

    const positions = new Float32Array(count * 3)
    let i = 0
    for (let y = 0; y < rows && i < count; y++) {
      for (let x = 0; x < cols && i < count; x++) {
        positions[i * 3 + 0] = (x - cols / 2) * 0.25
        positions[i * 3 + 1] = (y - rows / 2) * 0.25
        positions[i * 3 + 2] = 0.0
        i++
      }
    }

    const geom = new THREE.BufferGeometry()
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geom.setDrawRange(0, count)
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
      material={material}
    />
  )
}
