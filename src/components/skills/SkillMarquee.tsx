import React from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { marqueeTechnologies } from '../../data/skills';
import { TechLogo } from '../common/TechLogo';
import { colors } from '../../theme/colors';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const SkillMarquee: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // Duplicate items for continuous infinite scroll
  const marqueeItems = [...marqueeTechnologies, ...marqueeTechnologies];

  return (
    <Box
      py={{ base: '32px', md: '44px' }}
      position="relative"
      overflow="hidden"
      borderTop={`1px solid ${colors.border.subtle}`}
      borderBottom={`1px solid ${colors.border.subtle}`}
      bg="rgba(10, 10, 15, 0.6)"
      backdropFilter="blur(8px)"
      maskImage="linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
      WebkitMaskImage="linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
    >
      <VStack spacing={{ base: '20px', md: '26px' }} align="center">
        {/* Top Header from Reference: FULLSTACK WEB DEVELOPMENT */}
        <Text
          fontFamily="'Poppins', sans-serif"
          fontSize={{ base: '11px', md: '12px' }}
          fontWeight={600}
          letterSpacing="0.25em"
          color={colors.text.muted}
          textTransform="uppercase"
        >
          FULLSTACK WEB DEVELOPMENT
        </Text>

        {/* Infinite Scrolling Row of Authentic Brand Logos */}
        <Box
          className={prefersReducedMotion ? '' : 'animate-marquee'}
          display="flex"
          alignItems="center"
          gap="28px"
          overflowX={prefersReducedMotion ? 'auto' : 'visible'}
          px="20px"
          py="6px"
        >
          {marqueeItems.map((tech, index) => (
            <HStack
              key={`${tech}-${index}`}
              spacing="12px"
              flexShrink={0}
              px="20px"
              py="10px"
              borderRadius="full"
              bg="rgba(16, 16, 23, 0.75)"
              border={`1px solid ${colors.border.subtle}`}
              boxShadow="0 4px 16px rgba(0, 0, 0, 0.4)"
              transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
              cursor="default"
              _hover={{
                borderColor: colors.accent.primary,
                bg: 'rgba(21, 21, 31, 0.95)',
                transform: 'scale(1.08) translateY(-2px)',
                boxShadow: '0 8px 24px rgba(139, 92, 246, 0.35)',
              }}
            >
              <TechLogo name={tech} size={26} animate={!prefersReducedMotion} />
              <Text
                fontFamily="'Poppins', sans-serif"
                fontSize="13px"
                fontWeight={600}
                letterSpacing="0.04em"
                color="#FFFFFF"
              >
                {tech}
              </Text>
            </HStack>
          ))}
        </Box>

        {/* Bottom Tagline from Reference: THINK. CODE. INNOVATE. */}
        <Text
          fontFamily="'JetBrains Mono', monospace"
          fontSize={{ base: '10px', md: '11px' }}
          fontWeight={500}
          letterSpacing="0.3em"
          color={colors.accent.highlight}
          textTransform="uppercase"
        >
          THINK. CODE. INNOVATE.
        </Text>
      </VStack>
    </Box>
  );
};
