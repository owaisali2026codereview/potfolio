import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
}

export const ParticleField: React.FC<ParticleFieldProps> = ({ count = 130 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const baseColor = new THREE.Color('#8B5CF6');
    const highlightColor = new THREE.Color('#C084FC');
    const altColor = new THREE.Color('#3B82F6');

    for (let i = 0; i < count; i++) {
      // Spread in a cylindrical / spherical space around the camera
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14 - 2;

      // Color variation between primary purple and highlight violet/blue
      const mixedColor = baseColor.clone();
      const r = Math.random();
      if (r > 0.6) {
        mixedColor.lerp(highlightColor, Math.random());
      } else if (r > 0.3) {
        mixedColor.lerp(altColor, 0.4);
      }

      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    // Gentle rotation
    pointsRef.current.rotation.y += delta * 0.035;
    pointsRef.current.rotation.x += delta * 0.012;

    // Direct pointer tracking from R3F internal state with zero React renders
    pointsRef.current.position.x = THREE.MathUtils.lerp(
      pointsRef.current.position.x,
      state.pointer.x * 0.6,
      0.05
    );
    pointsRef.current.position.y = THREE.MathUtils.lerp(
      pointsRef.current.position.y,
      state.pointer.y * 0.6,
      0.05
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};
