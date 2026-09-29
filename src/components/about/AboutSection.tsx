import React from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  HStack,
} from '@chakra-ui/react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { SectionHeading } from '../common/SectionHeading';
import { Reveal } from '../common/Reveal';
import { profileData } from '../../data/profile';
import { colors } from '../../theme/colors';
import { Code2, Layers, Cpu, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { aboutPhilosophy } = profileData;

  const pillarIcons = [
    <Layers size={22} color={colors.accent.highlight} />,
    <Code2 size={22} color={colors.accent.highlight} />,
    <Cpu size={22} color={colors.accent.highlight} />,
  ];

  return (
    <Section id="about" hasBorderBottom>
      <Container>
        <SectionHeading
          tag="// ABOUT & PHILOSOPHY"
          title={aboutPhilosophy.title}
          subtitle="Software development anchored in architectural clarity, user experience, and production standards."
        />

        <SimpleGrid columns={{ base: 1, lg: 12 }} spacing={{ base: '36px', lg: '48px' }}>
          {/* Editorial Statement (Left 7 Cols) */}
          <Box gridColumn={{ lg: 'span 7' }}>
            <Reveal yOffset={25}>
              <Box
                p={{ base: '24px', md: '36px' }}
                borderRadius="20px"
                bg="rgba(16, 16, 23, 0.6)"
                border={`1px solid ${colors.border.subtle}`}
                backdropFilter="blur(12px)"
                position="relative"
                overflow="hidden"
              >
                {/* Accent top border strip */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="3px"
                  bg="linear-gradient(90deg, #8B5CF6 0%, #C084FC 100%)"
                />

                <Text
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize="13px"
                  color={colors.accent.highlight}
                  mb="16px"
                >
                  " {aboutPhilosophy.quote} "
                </Text>

                <VStack align="flex-start" spacing="18px">
                  {aboutPhilosophy.paragraphs.map((p, idx) => (
                    <Text
                      key={idx}
                      fontSize={{ base: '15px', md: '16px' }}
                      lineHeight="27px"
                      color={colors.text.secondary}
                    >
                      {p}
                    </Text>
                  ))}
                </VStack>

                {/* Key engineering traits checklist */}
                <HStack
                  spacing={{ base: '12px', md: '20px' }}
                  wrap="wrap"
                  pt="24px"
                  mt="20px"
                  borderTop={`1px solid ${colors.border.subtle}`}
                >
                  {['Production-Oriented', 'MERN & TypeScript', 'Performance Focused', 'WCAG Accessible'].map(
                    (trait) => (
                      <HStack key={trait} spacing="6px">
                        <CheckCircle2 size={16} color={colors.accent.primary} />
                        <Text fontSize="13px" fontWeight={500} color="#FFFFFF">
                          {trait}
                        </Text>
                      </HStack>
                    )
                  )}
                </HStack>
              </Box>
            </Reveal>
          </Box>

          {/* Architecture Pillars (Right 5 Cols) */}
          <Box gridColumn={{ lg: 'span 5' }}>
            <VStack spacing="20px" align="stretch">
              {aboutPhilosophy.pillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 0.12} yOffset={25}>
                  <Box
                    p="24px"
                    borderRadius="16px"
                    bg="rgba(16, 16, 23, 0.45)"
                    border={`1px solid ${colors.border.subtle}`}
                    transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                    _hover={{
                      borderColor: colors.border.accent,
                      transform: 'translateY(-3px)',
                      bg: 'rgba(21, 21, 31, 0.7)',
                    }}
                  >
                    <HStack spacing="14px" mb="10px">
                      <Box
                        p="10px"
                        borderRadius="12px"
                        bg="rgba(139, 92, 246, 0.12)"
                        border="1px solid rgba(139, 92, 246, 0.25)"
                      >
                        {pillarIcons[index % pillarIcons.length]}
                      </Box>
                      <Heading
                        as="h3"
                        fontFamily="'Poppins', sans-serif"
                        fontSize="17px"
                        fontWeight={600}
                        color="#FFFFFF"
                      >
                        {pillar.title}
                      </Heading>
                    </HStack>

                    <Text fontSize="14px" lineHeight="22px" color={colors.text.secondary}>
                      {pillar.description}
                    </Text>
                  </Box>
                </Reveal>
              ))}
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Section>
  );
};
