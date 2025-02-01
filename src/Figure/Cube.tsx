import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

export function Cube() {
    const meshRef = useRef<Mesh>(null);
  
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
      }
    });
  
    return (
      <mesh ref={meshRef} rotation={[0.5, 0.5, 0]} scale={[2, 2, 2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    );
  }

