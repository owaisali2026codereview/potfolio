import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const TechGeometry: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.12;
      ringRef.current.rotation.y += delta * 0.16;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.2;
      coreRef.current.rotation.z += delta * 0.08;
    }
    if (meshRef.current) {
      // Direct pointer tilt from R3F internal state with zero React renders
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        state.pointer.x * 0.25,
        0.05
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        -state.pointer.y * 0.25,
        0.05
      );
    }
  });

  return (
    <group ref={meshRef} position={[2.5, 0, -2]}>
      {/* Outer Wireframe Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.2, 0.025, 12, 64]} />
        <meshBasicMaterial color="#8B5CF6" wireframe={false} transparent opacity={0.3} />
      </mesh>

      {/* Second Inner Tilted Ring */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.5, 0.02, 12, 48]} />
        <meshBasicMaterial color="#C084FC" wireframe transparent opacity={0.18} />
      </mesh>

      {/* Floating Geometric Node in space */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#15151F"
          emissive="#8B5CF6"
          emissiveIntensity={0.25}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
};
