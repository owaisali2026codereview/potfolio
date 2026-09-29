import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  VStack,
  Heading,
  Text,
  HStack,
} from '@chakra-ui/react';
import { ArrowDown } from 'lucide-react';
import { Container } from '../common/Container';
import { HeroPortrait } from './HeroPortrait';
import { SkillOrbit } from './SkillOrbit';
import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { playHeroTimeline } from '../../animations/heroAnimations';
import { colors } from '../../theme/colors';

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeSkillHover, setActiveSkillHover] = useState<string | null>(null);

  // Animation timeline refs (Section 17)
  const roleLabelRef = useRef<HTMLDivElement>(null);
  const nameDisplayRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaButtonsRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const orbitContainerRef = useRef<HTMLDivElement>(null);
  const backgroundGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = {
      roleLabel: roleLabelRef.current,
      nameDisplay: nameDisplayRef.current,
      description: descriptionRef.current,
      ctaButtons: ctaButtonsRef.current,
      portrait: portraitRef.current,
      orbitContainer: orbitContainerRef.current,
      backgroundGlow: backgroundGlowRef.current,
    };

    const tl = playHeroTimeline(refs, prefersReducedMotion);
    return () => {
      tl.kill();
    };
  }, [prefersReducedMotion]);

  return (
    <Box
      as="section"
      id="hero"
      position="relative"
      minH={{ base: '100vh', lg: '100vh' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={{ base: '110px', md: '120px' }}
      pb={{ base: '60px', md: '80px' }}
      overflow="hidden"
    >
      {/* Hero Entrance Spotlight (smooth radial falloff without expensive GPU blur filter) */}
      <Box
        ref={backgroundGlowRef}
        position="absolute"
        top="-10%"
        left="50%"
        transform="translateX(-50%) translateZ(0)"
        w={{ base: '600px', md: '900px', lg: '1200px' }}
        h={{ base: '600px', md: '750px', lg: '900px' }}
        borderRadius="full"
        bg="radial-gradient(circle at 50% 40%, rgba(139, 92, 246, 0.22) 0%, rgba(139, 92, 246, 0.12) 30%, rgba(168, 85, 247, 0.04) 55%, transparent 70%)"
        pointerEvents="none"
        zIndex={0}
      />

      <Container position="relative" zIndex={1}>
        <Flex
          direction={{ base: 'column-reverse', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: '48px', lg: '32px' }}
        >
          {/* Left Column: Developer Identity & Positioning */}
          <VStack
            align={{ base: 'center', lg: 'flex-start' }}
            textAlign={{ base: 'center', lg: 'left' }}
            spacing={{ base: '18px', md: '22px' }}
            maxW={{ base: '100%', lg: '600px' }}
          >
            {/* Small Role Label */}
            <Box
              ref={roleLabelRef}
              display="inline-flex"
              alignItems="center"
              px="14px"
              py="5px"
              borderRadius="full"
              bg="rgba(139, 92, 246, 0.12)"
              border={`1px solid rgba(139, 92, 246, 0.3)`}
            >
              <Text
                fontFamily="'JetBrains Mono', monospace"
                fontSize="12px"
                fontWeight={600}
                letterSpacing="0.1em"
                color={colors.accent.highlight}
                textTransform="uppercase"
              >
                // SOFTWARE DEVELOPER
              </Text>
            </Box>

            {/* Display Headline */}
            <Heading
              ref={nameDisplayRef}
              as="h1"
              fontFamily="'Poppins', sans-serif"
              fontSize={{ base: '36px', sm: '46px', md: '56px', lg: '62px' }}
              fontWeight={700}
              lineHeight={{ base: '44px', sm: '54px', md: '64px', lg: '70px' }}
              letterSpacing="-0.03em"
              color="#FFFFFF"
            >
              MUHAMMAD <br />
              <Box
                as="span"
                bgGradient="linear(to-r, #FFFFFF, #C084FC, #8B5CF6)"
                bgClip="text"
              >
                OWAIS
              </Box>
            </Heading>

            {/* Sub-tagline and Editorial Description */}
            <Text
              ref={descriptionRef}
              fontSize={{ base: '16px', md: '18px', lg: '19px' }}
              lineHeight={{ base: '26px', md: '29px' }}
              color={colors.text.secondary}
              fontWeight={400}
              maxW="540px"
            >
              Building digital experiences with code. Focused on high-performance web applications,
              the MERN stack, TypeScript, and interactive engineering.
            </Text>

            {/* CTA Buttons */}
            <HeroCTA ctaRef={ctaButtonsRef} />
          </VStack>

          {/* Right Column: Hero Portrait + Animated Expertise Orbit */}
          <Box
            ref={orbitContainerRef}
            position="relative"
            w={{ base: '100%', lg: '500px' }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <HeroPortrait
              portraitRef={portraitRef}
              activeSkillName={activeSkillHover}
            />

            <SkillOrbit
              onSkillHover={setActiveSkillHover}
            />
          </Box>
        </Flex>

        {/* Scroll Indicator at bottom */}
        <Box
          display={{ base: 'none', lg: 'flex' }}
          position="absolute"
          bottom="-40px"
          left="50%"
          transform="translateX(-50%)"
          alignItems="center"
          cursor="pointer"
          opacity={0.6}
          transition="opacity 0.2s ease"
          _hover={{ opacity: 1 }}
          onClick={() => {
            const el = document.getElementById('about');
            if (el) {
              const offset = 80;
              const pos = el.getBoundingClientRect().top + window.scrollY - offset;
              window.scrollTo({ top: pos, behavior: 'smooth' });
            }
          }}
        >
          <HStack spacing="6px">
            <Text
              fontFamily="'JetBrains Mono', monospace"
              fontSize="11px"
              letterSpacing="0.1em"
              color={colors.text.muted}
              textTransform="uppercase"
            >
              scroll down
            </Text>
            <ArrowDown size={14} color={colors.accent.primary} />
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};
