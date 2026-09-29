import React from 'react';
import { ParticleField } from '../objects/ParticleField';
import { TechGeometry } from '../objects/TechGeometry';

export const Hero3DScene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#C084FC" />
      <pointLight position={[-5, -5, -2]} intensity={0.5} color="#8B5CF6" />

      {/* Floating starry constellation */}
      <ParticleField count={130} />

      {/* Subtle background tech rings */}
      <TechGeometry />
    </>
  );
};
