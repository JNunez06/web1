import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FuturisticBackgroundProps {
  theme: string; // Usamos 'theme' directamente
}

export function FuturisticBackground({ theme }: FuturisticBackgroundProps) {
  const points = useRef<THREE.Points>(null!);
  const particlesCount = 5000;

  // Generar posiciones aleatorias de partículas
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  // Animación continua de partículas
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (points.current) {
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        points.current.geometry.attributes.position.array[i3] += Math.sin(time + i * 0.1) * 0.005;
        points.current.geometry.attributes.position.array[i3 + 1] += Math.cos(time + i * 0.1) * 0.005;
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <color attach="background" args={[theme === "dark" ? "#000000" : "#ffffff"]} />
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.015}
          color={theme === "dark" ? "#ffffff" : "#000000"} // Usamos directamente 'theme'
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>
    </>
  );
}
