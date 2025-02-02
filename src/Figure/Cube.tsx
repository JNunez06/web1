import { useRef, useState, useEffect } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

export function Cube() {
  const meshRef = useRef<Mesh>(null);
  const [color, setColor] = useState("blue");
  const scaleRef = useRef<[number, number, number]>([2, 2, 2]);

  // Cambio de color para el cubo
  useEffect(() => {
    const interval = setInterval(() => {
      setColor(color === "blue" ? "orange" : "blue");
    }, 1000); // Cambia de color cada segundo

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [color]);

  // Efecto de pulsación para el cubo (cambio de escala)
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;

      // Pulsar el cubo: variar la escala ligeramente
      const pulseFactor = Math.sin(Date.now() * 0.001) * 0.2 + 2; // Pulsar entre 2 y 2.2
      scaleRef.current = [pulseFactor, pulseFactor, pulseFactor];
      meshRef.current.scale.set(...scaleRef.current);
    }
  });

  // Referencias para otras figuras geométricas
  const smallShapesRef = useRef<(Mesh | null)[]>([]);

  useFrame(() => {
    smallShapesRef.current.forEach((shape, index) => {
      if (shape) {
        shape.rotation.x += 0.01 + index * 0.005; // Rotación diferente para cada figura
        shape.rotation.y += 0.01 + index * 0.005;

        // Variar la escala de las figuras más pequeñas
        const scaleFactor = Math.sin(Date.now() * 0.002 + index) * 0.2 + 0.5;
        shape.scale.set(scaleFactor, scaleFactor, scaleFactor);
      }
    });
  });

  return (
    <>
      {/* Luz direccional para resaltar el cubo */}
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <ambientLight intensity={0.3} />
      
      {/* Cubo con animación */}
      <mesh ref={meshRef} rotation={[0.5, 0.5, 0]} scale={scaleRef.current}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Figuras geométricas más pequeñas */}
      {["sphere", "cylinder", "cone"].map((type, index) => {
        return (
          <mesh
            key={index}
            ref={(el) => (smallShapesRef.current[index] = el)}
            position={[Math.sin(index) * 3, Math.cos(index) * 3, Math.sin(index * 0.5) * 3]}
          >
            {type === "sphere" && <sphereGeometry args={[0.3, 32, 32]} />}
            {type === "cylinder" && <cylinderGeometry args={[0.3, 0.3, 1, 32]} />}
            {type === "cone" && <coneGeometry args={[0.3, 1, 32]} />}
            <meshStandardMaterial color={`hsl(${(index * 100) % 360}, 100%, 50%)`} />
          </mesh>
        );
      })}
    </>
  );
}
