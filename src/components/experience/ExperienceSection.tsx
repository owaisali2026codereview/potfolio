import React from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  HStack,
  Tag,
} from '@chakra-ui/react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { SectionHeading } from '../common/SectionHeading';
import { Reveal } from '../common/Reveal';
import { ExperienceItem } from './ExperienceItem';
import { journeyTimeline, developmentPhilosophy } from '../../data/experience';
import { colors } from '../../theme/colors';
import { ArrowRight, Lightbulb, Compass, Code, ShieldCheck, Rocket } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const stageIcons = [
    <Lightbulb size={20} color={colors.accent.highlight} />,
    <Compass size={20} color={colors.accent.highlight} />,
    <Code size={20} color={colors.accent.highlight} />,
    <ShieldCheck size={20} color={colors.accent.highlight} />,
    <Rocket size={20} color={colors.accent.highlight} />,
  ];

  return (
    <Section id="journey" hasBorderBottom>
      <Container>
        <SimpleGrid columns={{ base: 1, lg: 12 }} spacing={{ base: '48px', lg: '56px' }}>
          {/* Left Column: Factual Journey Timeline (7 Cols) */}
          <Box gridColumn={{ lg: 'span 7' }}>
            <SectionHeading
              tag="// ROADMAP & EVOLUTION"
              title="JOURNEY & PROGRESSION"
              subtitle="Documenting key phases of technical mastery, from computer science fundamentals to production full-stack engineering."
            />

            <Box position="relative">
              {journeyTimeline.map((milestone, index) => (
                <Reveal key={milestone.year} delay={index * 0.1} yOffset={25}>
                  <ExperienceItem
                    milestone={milestone}
                    isLast={index === journeyTimeline.length - 1}
                  />
                </Reveal>
              ))}
            </Box>
          </Box>

          {/* Right Column: Development Philosophy (5 Cols) (Section 25) */}
          <Box gridColumn={{ lg: 'span 5' }}>
            <SectionHeading
              tag="// PROCESS"
              title="DEVELOPMENT PHILOSOPHY"
              subtitle="THINK → DESIGN → BUILD → TEST → SHIP"
            />

            <VStack spacing="16px" align="stretch">
              {developmentPhilosophy.map((item, index) => (
                <Reveal key={item.id} delay={index * 0.08} yOffset={20}>
                  <Box
                    p="20px"
                    borderRadius="16px"
                    bg="rgba(16, 16, 23, 0.5)"
                    border={`1px solid ${colors.border.subtle}`}
                    transition="all 0.25s ease"
                    _hover={{
                      borderColor: colors.border.accent,
                      bg: 'rgba(21, 21, 31, 0.75)',
                      transform: 'translateX(4px)',
                    }}
                  >
                    <HStack justify="space-between" mb="8px">
                      <HStack spacing="12px">
                        <Box
                          p="8px"
                          borderRadius="10px"
                          bg="rgba(139, 92, 246, 0.12)"
                        >
                          {stageIcons[index % stageIcons.length]}
                        </Box>
                        <Heading
                          as="h4"
                          fontSize="15px"
                          fontWeight={700}
                          fontFamily="'JetBrains Mono', monospace"
                          color={colors.accent.highlight}
                        >
                          {item.stage}
                        </Heading>
                      </HStack>

                      <Tag
                        size="sm"
                        borderRadius="full"
                        bg="rgba(255, 255, 255, 0.05)"
                        color={colors.text.muted}
                        fontFamily="'JetBrains Mono', monospace"
                        fontSize="11px"
                      >
                        0{item.index}
                      </Tag>
                    </HStack>

                    <Text fontSize="14px" fontWeight={600} color="#FFFFFF" mb="4px">
                      {item.title}
                    </Text>

                    <Text fontSize="13px" lineHeight="20px" color={colors.text.secondary}>
                      {item.summary}
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
