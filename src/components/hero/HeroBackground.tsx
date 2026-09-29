import React, { memo } from 'react';
import { Box } from '@chakra-ui/react';
import { ThreeCanvas } from '../../three/ThreeCanvas';

interface HeroBackgroundProps {
  backgroundRef?: React.RefObject<HTMLDivElement>;
  isFixed?: boolean;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = memo(({
  backgroundRef,
  isFixed = true,
}) => {
  return (
    <Box
      position={isFixed ? 'fixed' : 'absolute'}
      inset={0}
      w="100vw"
      h="100vh"
      overflow="hidden"
      pointerEvents="none"
      zIndex={0}
      aria-hidden="true"
      style={{
        transform: 'translateZ(0)',
        contain: 'strict',
      }}
    >
      {/* 1. Primary Top/Center Radial Purple Gradient (Smooth pure CSS color-stops, 0 GPU rasterization cost) */}
      <Box
        ref={backgroundRef}
        position="absolute"
        top="-10%"
        left="50%"
        transform="translateX(-50%) translateZ(0)"
        w={{ base: '600px', md: '900px', lg: '1200px' }}
        h={{ base: '600px', md: '750px', lg: '900px' }}
        borderRadius="full"
        bg="radial-gradient(circle at 50% 40%, rgba(139, 92, 246, 0.18) 0%, rgba(139, 92, 246, 0.10) 35%, rgba(168, 85, 247, 0.03) 60%, transparent 75%)"
        pointerEvents="none"
      />

      {/* 2. Secondary Rim Glow on Bottom Right */}
      <Box
        position="absolute"
        bottom="-15%"
        right="-5%"
        transform="translateZ(0)"
        w="600px"
        h="600px"
        borderRadius="full"
        bg="radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.10) 0%, rgba(168, 85, 247, 0.04) 40%, transparent 70%)"
        pointerEvents="none"
      />

      {/* 3. Subtle Left Ambient Bloom */}
      <Box
        position="absolute"
        top="45%"
        left="-10%"
        transform="translateZ(0)"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.07) 0%, rgba(192, 132, 252, 0.02) 45%, transparent 70%)"
        pointerEvents="none"
      />

      {/* 4. Subtle Technical Grid Pattern covering full viewport */}
      <Box
        position="absolute"
        inset={0}
        className="bg-tech-grid"
        opacity={0.6}
        style={{ transform: 'translateZ(0)' }}
      />

      {/* 5. Three.js WebGL Constellation and Ambient Tech Rings */}
      <ThreeCanvas />
    </Box>
  );
});

HeroBackground.displayName = 'HeroBackground';
