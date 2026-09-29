import React, { Suspense, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Hero3DScene } from './scenes/Hero3DScene';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const ThreeCanvas: React.FC = memo(() => {
  const prefersReducedMotion = useReducedMotion();

  // If user requested reduced motion, avoid WebGL canvas loop completely
  if (prefersReducedMotion) {
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
    );
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        transform: 'translateZ(0)',
      }}
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 7], fov: 60 }}
          dpr={[1, 1.25]}
          gl={{
            antialias: false, // Disabling MSAA saves ~30% GPU fill rate with soft particles
            alpha: true,
            powerPreference: 'high-performance',
            stencil: false,
            depth: false,
          }}
          style={{ width: '100%', height: '100%' }}
        >
          <Hero3DScene />
        </Canvas>
      </Suspense>
    </div>
  );
});

ThreeCanvas.displayName = 'ThreeCanvas';
