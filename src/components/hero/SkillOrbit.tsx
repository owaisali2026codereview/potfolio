import React, { useState } from 'react';
import { Box, Text, HStack, Tooltip, Tag } from '@chakra-ui/react';
import { skills, type Skill } from '../../data/skills';
import { colors } from '../../theme/colors';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TechLogo } from '../common/TechLogo';

interface SkillOrbitProps {
  orbitRef?: React.RefObject<HTMLDivElement>;
  onSkillHover?: (skillName: string | null) => void;
}

export const SkillOrbit: React.FC<SkillOrbitProps> = ({
  orbitRef,
  onSkillHover,
}) => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Get core orbit skills
  const orbitSkills = skills.filter((s) => s.orbitIndex !== undefined);
  const totalSkills = orbitSkills.length;

  const handleMouseEnter = (skill: Skill) => {
    setActiveSkill(skill);
    if (onSkillHover) onSkillHover(skill.name);
  };

  const handleMouseLeave = () => {
    setActiveSkill(null);
    if (onSkillHover) onSkillHover(null);
  };

  return (
    <>
      {/* =========================================================================
          Desktop & Tablet Circular Orbit (Section 15)
          ========================================================================= */}
      <Box
        ref={orbitRef}
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        inset={{ md: '-60px', lg: '-80px' }}
        pointerEvents="none"
        zIndex={2}
      >
        {/* Subtle Orbit Path Rings */}
        <Box
          position="absolute"
          inset="20px"
          borderRadius="full"
          border="1px solid rgba(139, 92, 246, 0.18)"
          pointerEvents="none"
        />
        <Box
          position="absolute"
          inset="60px"
          borderRadius="full"
          border="1px dashed rgba(255, 255, 255, 0.08)"
          pointerEvents="none"
        />

        {/* Orbit Nodes Container */}
        <Box
          position="absolute"
          inset="0"
          className={prefersReducedMotion ? '' : 'orbit-track'}
        >
          {orbitSkills.map((skill, index) => {
            // Calculate orbital position on circumference (radius ~46%)
            const angle = (index / totalSkills) * 2 * Math.PI;
            const leftPercent = 50 + 44 * Math.cos(angle);
            const topPercent = 50 + 44 * Math.sin(angle);
            const isHovered = activeSkill?.id === skill.id;

            return (
              <Box
                key={skill.id}
                position="absolute"
                left={`${leftPercent}%`}
                top={`${topPercent}%`}
                transform="translate(-50%, -50%)"
                pointerEvents="auto"
              >
                {/* Counter-rotation keeps labels readable while orbiting */}
                <Box className={prefersReducedMotion ? '' : 'orbit-node'}>
                  <Tooltip
                    label={skill.description}
                    hasArrow
                    placement="top"
                    bg="#101017"
                    color="#FFFFFF"
                    border={`1px solid ${colors.border.accent}`}
                    px="12px"
                    py="8px"
                    borderRadius="10px"
                    fontSize="12px"
                    lineHeight="16px"
                    maxW="220px"
                    boxShadow="0 10px 25px rgba(0, 0, 0, 0.8)"
                  >
                    <Box
                      as="button"
                      onMouseEnter={() => handleMouseEnter(skill)}
                      onMouseLeave={handleMouseLeave}
                      onFocus={() => handleMouseEnter(skill)}
                      onBlur={handleMouseLeave}
                      cursor="pointer"
                      display="inline-flex"
                      alignItems="center"
                      px="14px"
                      py="6px"
                      borderRadius="full"
                      bg={isHovered ? 'rgba(139, 92, 246, 0.95)' : 'rgba(16, 16, 23, 0.85)'}
                      border={
                        isHovered
                          ? `1px solid ${colors.accent.highlight}`
                          : `1px solid ${colors.border.visible}`
                      }
                      color={isHovered ? '#FFFFFF' : '#E2E8F0'}
                      backdropFilter="blur(8px)"
                      boxShadow={
                        isHovered
                          ? '0 0 20px rgba(139, 92, 246, 0.7), 0 4px 12px rgba(0, 0, 0, 0.5)'
                          : '0 4px 12px rgba(0, 0, 0, 0.4)'
                      }
                      transition="all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
                      _hover={{
                        transform: 'scale(1.12)',
                      }}
                      _focusVisible={{
                        outline: 'none',
                        boxShadow: `0 0 0 3px ${colors.accent.primary}`,
                      }}
                    >
                      <Box mr="8px" display="inline-flex" alignItems="center">
                        <TechLogo name={skill.id} size={18} animate={!prefersReducedMotion} />
                      </Box>
                      <Text
                        fontSize="13px"
                        fontWeight={600}
                        letterSpacing="0.02em"
                        fontFamily="'Poppins', sans-serif"
                      >
                        {skill.name}
                      </Text>
                    </Box>
                  </Tooltip>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* =========================================================================
          Mobile Optimized Radial / Grid Strip (Section 35)
          ========================================================================= */}
      <Box display={{ base: 'block', md: 'none' }} mt="24px" w="100%">
        <HStack
          spacing="8px"
          justify="center"
          wrap="wrap"
          px="8px"
        >
          {orbitSkills.map((skill) => (
            <Tag
              key={skill.id}
              size="md"
              borderRadius="full"
              variant="subtle"
              bg="rgba(16, 16, 23, 0.8)"
              border={`1px solid ${colors.border.subtle}`}
              color="#FFFFFF"
              py="6px"
              px="12px"
              mb="6px"
              fontSize="12px"
              fontWeight={500}
            >
              <Box mr="6px" display="inline-flex" alignItems="center">
                <TechLogo name={skill.id} size={15} animate={false} />
              </Box>
              {skill.name}
            </Tag>
          ))}
        </HStack>
      </Box>
    </>
  );
};
