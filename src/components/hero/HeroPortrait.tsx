import React from 'react';
import { Box, Image, Text, HStack } from '@chakra-ui/react';
import { colors } from '../../theme/colors';

interface HeroPortraitProps {
  portraitRef?: React.RefObject<HTMLDivElement>;
  activeSkillName?: string | null;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({
  portraitRef,
  activeSkillName,
}) => {
  return (
    <Box
      ref={portraitRef}
      position="relative"
      w={{ base: '220px', sm: '260px', md: '300px', lg: '340px' }}
      h={{ base: '220px', sm: '260px', md: '300px', lg: '340px' }}
      mx="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Outer Glow Halo */}
      <Box
        position="absolute"
        inset="-12px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, rgba(168, 85, 247, 0.1) 60%, transparent 80%)"
        filter="blur(16px)"
        pointerEvents="none"
      />

      {/* Decorative Technical Circular Frame with Accent Dashes */}
      <Box
        position="absolute"
        inset="-6px"
        borderRadius="full"
        border="1px dashed rgba(139, 92, 246, 0.4)"
        pointerEvents="none"
        className="orbit-track"
        style={{ animationDuration: '60s' }}
      />

      {/* Portrait Image Container */}
      <Box
        position="relative"
        w="100%"
        h="100%"
        borderRadius="full"
        overflow="hidden"
        border={`2px solid ${colors.border.accent}`}
        boxShadow="0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(139, 92, 246, 0.25)"
        bg="#0D0D14"
      >
        <Image
          src="/images/owais-portrait.jpg"
          alt="Muhammad Owais — Software Developer"
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="center top"
          filter="grayscale(20%) contrast(105%)"
          transition="all 0.5s ease"
          _hover={{
            filter: 'grayscale(0%) contrast(110%)',
            transform: 'scale(1.04)',
          }}
        />

        {/* Cinematic Vignette Overlay */}
        <Box
          position="absolute"
          inset={0}
          bg="radial-gradient(circle at 50% 50%, transparent 50%, rgba(5, 5, 5, 0.7) 100%)"
          pointerEvents="none"
        />
      </Box>

      {/* Status Badge: Available for Work */}
      <HStack
        position="absolute"
        bottom="-10px"
        bg="rgba(16, 16, 23, 0.92)"
        border={`1px solid ${colors.border.visible}`}
        borderRadius="full"
        px="14px"
        py="6px"
        boxShadow="0 4px 20px rgba(0, 0, 0, 0.6)"
        backdropFilter="blur(8px)"
        zIndex={3}
      >
        <Box w="8px" h="8px" borderRadius="full" bg="#10B981" className="pulse-status" />
        <Text fontSize="12px" fontWeight={500} color="#FFFFFF" letterSpacing="0.02em">
          {activeSkillName ? `Focus: ${activeSkillName}` : 'Available for Work'}
        </Text>
      </HStack>
    </Box>
  );
};
