import React, { useState } from 'react';
import {
  Box,
  HStack,
  Button,
  SimpleGrid,
  Text,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { SectionHeading } from '../common/SectionHeading';
import { Reveal } from '../common/Reveal';
import { SkillItem } from './SkillItem';
import { SkillMarquee } from './SkillMarquee';
import { skills, type SkillCategory, type Skill } from '../../data/skills';
import { colors } from '../../theme/colors';
import { Terminal, CheckCircle2 } from 'lucide-react';

const categories: Array<'All' | SkillCategory> = [
  'All',
  'Frontend',
  'Backend',
  'Databases',
  'Programming',
  'Architecture',
];

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | SkillCategory>('All');
  const [activeSkill, setActiveSkill] = useState<Skill>(skills[0]);

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === selectedCategory);

  return (
    <Section id="skills" hasBorderBottom pb="0">
      <Container mb={{ base: '48px', md: '72px' }}>
        <SectionHeading
          tag="// TECHNICAL CAPABILITIES"
          title="ENGINEERING EXPERTISE"
          subtitle="Specialized in full-stack architecture, clean frontend implementations, and reliable database systems. Zero fluff, production-ready fundamentals."
        />

        {/* Category Filter Tabs */}
        <Reveal yOffset={20}>
          <HStack
            spacing="10px"
            wrap="wrap"
            mb="36px"
            justify={{ base: 'center', md: 'flex-start' }}
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <Button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  size="sm"
                  borderRadius="full"
                  bg={isActive ? colors.accent.primary : 'rgba(16, 16, 23, 0.6)'}
                  color={isActive ? '#FFFFFF' : colors.text.secondary}
                  border={`1px solid ${isActive ? colors.accent.primary : colors.border.subtle}`}
                  _hover={{
                    bg: isActive ? colors.accent.secondary : 'rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                  }}
                  px="18px"
                  py="16px"
                  fontSize="13px"
                  fontWeight={500}
                >
                  {cat}
                </Button>
              );
            })}
          </HStack>
        </Reveal>

        {/* Technical Grid & Dynamic Inspector */}
        <SimpleGrid columns={{ base: 1, lg: 12 }} spacing="32px">
          {/* Skills Grid (8 Cols) */}
          <Box gridColumn={{ lg: 'span 8' }}>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing="18px">
              {filteredSkills.map((skill, index) => (
                <Reveal key={skill.id} delay={index * 0.05} yOffset={20}>
                  <SkillItem
                    skill={skill}
                    isSelected={activeSkill.id === skill.id}
                    onSelect={() => setActiveSkill(skill)}
                  />
                </Reveal>
              ))}
            </SimpleGrid>
          </Box>

          {/* Real-time Capability Inspector Panel (Right 4 Cols) */}
          <Box gridColumn={{ lg: 'span 4' }}>
            <Box
              position={{ lg: 'sticky' }}
              top="100px"
              p="28px"
              borderRadius="20px"
              bg="rgba(16, 16, 23, 0.75)"
              border={`1px solid ${colors.border.accent}`}
              backdropFilter="blur(16px)"
              boxShadow="0 20px 40px rgba(0, 0, 0, 0.6)"
            >
              <HStack spacing="10px" mb="16px">
                <Terminal size={18} color={colors.accent.highlight} />
                <Text
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize="12px"
                  color={colors.accent.highlight}
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                >
                  // CAPABILITY INSPECTOR
                </Text>
              </HStack>

              <Heading
                as="h3"
                fontSize="22px"
                fontWeight={700}
                color="#FFFFFF"
                mb="8px"
                fontFamily="'Poppins', sans-serif"
              >
                {activeSkill.name}
              </Heading>

              <Text
                fontSize="12px"
                color={colors.accent.highlight}
                fontFamily="'JetBrains Mono', monospace"
                mb="16px"
              >
                Category: {activeSkill.category}
              </Text>

              <Text fontSize="14px" lineHeight="24px" color={colors.text.secondary} mb="24px">
                {activeSkill.description}
              </Text>

              <VStack align="stretch" spacing="10px" pt="18px" borderTop={`1px solid ${colors.border.subtle}`}>
                <Text fontSize="12px" fontWeight={600} color={colors.text.muted} textTransform="uppercase">
                  Engineering Scope:
                </Text>
                <HStack spacing="8px">
                  <CheckCircle2 size={14} color={colors.accent.primary} />
                  <Text fontSize="13px" color="#FFFFFF">
                    Production Architecture
                  </Text>
                </HStack>
                <HStack spacing="8px">
                  <CheckCircle2 size={14} color={colors.accent.primary} />
                  <Text fontSize="13px" color="#FFFFFF">
                    Type Safety & Clean Contracts
                  </Text>
                </HStack>
                <HStack spacing="8px">
                  <CheckCircle2 size={14} color={colors.accent.primary} />
                  <Text fontSize="13px" color="#FFFFFF">
                    Performance Optimized
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Infinite Technology Marquee (Section 21) */}
      <SkillMarquee />
    </Section>
  );
};
