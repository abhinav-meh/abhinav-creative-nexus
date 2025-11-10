import * as THREE from "three";
import { useEffect, useRef } from "react";

export default function ClassicWave() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SEPARATION = 50,
      AMOUNTX = 60,
      AMOUNTY = 30;

    let camera: THREE.PerspectiveCamera, 
        scene: THREE.Scene, 
        renderer: THREE.WebGLRenderer, 
        particles: THREE.Points, 
        count = 0;

    const container = mountRef.current!;
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera = new THREE.PerspectiveCamera(120, width / height, 1, 10000);
    camera.position.y = 180;
    camera.position.z = 20;
    camera.rotation.x = 0.35;

    scene = new THREE.Scene();

    const numParticles = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    let i = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i * 3] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) + 10;
        scales[i] = 1;
        i++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    const texture = new THREE.TextureLoader().load(
      "data:image/svg+xml;base64," +
        btoa(
          `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
         <circle cx="16" cy="16" r="16" fill="white" />
       </svg>`
        )
    );

    const material = new THREE.PointsMaterial({
      color: 0x9ca3af,
      size: 4,
      sizeAttenuation: true,
      map: texture,
      alphaTest: 0.5,
      transparent: true,
    });

    material.needsUpdate = true;

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 1);
    container.appendChild(renderer.domElement);

    const animate = () => {
      const pos = geometry.attributes.position.array as Float32Array;
      const scl = geometry.attributes.scale.array as Float32Array;

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          pos[i * 3 + 1] =
            Math.sin((ix + count) * 0.5) * 15 +
            Math.sin((iy + count) * 0.5) * 15;
          scl[i] =
            (Math.sin((ix + count) * 0.5) + 2) * 4 +
            (Math.sin((iy + count) * 0.5) + 1) * 4;
          i++;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.scale.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.05;
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
}
