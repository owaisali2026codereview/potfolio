import React from 'react';
import { Box, HStack, VStack, Text, Tag } from '@chakra-ui/react';
import { type Skill } from '../../data/skills';
import { colors } from '../../theme/colors';

interface SkillItemProps {
  skill: Skill;
  isSelected?: boolean;
  onSelect?: () => void;
}

export const SkillItem: React.FC<SkillItemProps> = ({
  skill,
  isSelected = false,
  onSelect,
}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <Box
      className="spotlight-card"
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      p="20px"
      borderRadius="16px"
      bg={isSelected ? 'rgba(21, 21, 31, 0.95)' : 'rgba(16, 16, 23, 0.6)'}
      border={isSelected ? `1px solid ${colors.accent.primary}` : `1px solid ${colors.border.subtle}`}
      boxShadow={isSelected ? '0 0 20px rgba(139, 92, 246, 0.25)' : 'none'}
      cursor="pointer"
      transition="all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
      _hover={{
        borderColor: colors.border.accent,
        bg: 'rgba(21, 21, 31, 0.85)',
      }}
    >
      <HStack justify="space-between" align="flex-start" mb="8px">
        <HStack spacing="10px">
          <Box
            w="8px"
            h="8px"
            borderRadius="full"
            bg={isSelected ? colors.accent.highlight : colors.accent.primary}
          />
          <Text
            fontFamily="'Poppins', sans-serif"
            fontWeight={600}
            fontSize="16px"
            color="#FFFFFF"
          >
            {skill.name}
          </Text>
        </HStack>

        <Tag
          size="sm"
          variant="subtle"
          bg="rgba(139, 92, 246, 0.12)"
          color={colors.accent.highlight}
          borderRadius="full"
          fontSize="11px"
          px="8px"
          fontFamily="'JetBrains Mono', monospace"
        >
          {skill.category}
        </Tag>
      </HStack>

      <Text fontSize="13px" lineHeight="20px" color={colors.text.secondary}>
        {skill.description}
      </Text>
    </Box>
  );
};
