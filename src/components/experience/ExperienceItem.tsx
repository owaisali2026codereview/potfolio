import React from 'react';
import { Box, HStack, VStack, Text, Tag, Heading } from '@chakra-ui/react';
import { type JourneyMilestone } from '../../data/experience';
import { colors } from '../../theme/colors';

interface ExperienceItemProps {
  milestone: JourneyMilestone;
  isLast?: boolean;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  milestone,
  isLast = false,
}) => {
  const isNow = milestone.year === 'NOW';

  return (
    <Box position="relative" pl={{ base: '36px', md: '48px' }} pb={isLast ? '0' : '48px'}>
      {/* Timeline Connecting Line */}
      {!isLast && (
        <Box
          position="absolute"
          left={{ base: '11px', md: '15px' }}
          top="24px"
          bottom="0"
          w="2px"
          bg={`linear-gradient(to bottom, ${colors.accent.primary} 0%, rgba(139, 92, 246, 0.15) 100%)`}
        />
      )}

      {/* Timeline Node Dot */}
      <Box
        position="absolute"
        left={{ base: '4px', md: '8px' }}
        top="6px"
        w="16px"
        h="16px"
        borderRadius="full"
        bg={isNow ? colors.accent.highlight : colors.accent.primary}
        border="3px solid #050505"
        boxShadow={isNow ? '0 0 16px #8B5CF6' : '0 0 8px rgba(139, 92, 246, 0.4)'}
      />

      {/* Content Card */}
      <Box
        p={{ base: '20px', md: '28px' }}
        borderRadius="18px"
        bg="rgba(16, 16, 23, 0.65)"
        border={`1px solid ${isNow ? colors.border.accent : colors.border.subtle}`}
        backdropFilter="blur(8px)"
        transition="all 0.3s ease"
        _hover={{
          borderColor: colors.border.visible,
          transform: 'translateX(4px)',
          bg: 'rgba(21, 21, 31, 0.8)',
        }}
      >
        <HStack justify="space-between" align="center" mb="8px" wrap="wrap">
          <Tag
            size="md"
            borderRadius="full"
            bg={isNow ? 'rgba(139, 92, 246, 0.25)' : 'rgba(255, 255, 255, 0.06)'}
            color={isNow ? colors.accent.highlight : '#FFFFFF'}
            fontFamily="'JetBrains Mono', monospace"
            fontWeight={700}
            fontSize="13px"
            px="12px"
          >
            {milestone.year}
          </Tag>

          <Text fontSize="13px" color={colors.accent.highlight} fontWeight={500}>
            {milestone.phase}
          </Text>
        </HStack>

        <Heading
          as="h3"
          fontSize={{ base: '17px', md: '19px' }}
          fontWeight={600}
          color="#FFFFFF"
          mt="6px"
          mb="8px"
          fontFamily="'Poppins', sans-serif"
        >
          {milestone.focus}
        </Heading>

        <Text fontSize="14px" lineHeight="23px" color={colors.text.secondary} mb="16px">
          {milestone.description}
        </Text>

        <HStack wrap="wrap" spacing="8px">
          {milestone.technologies.map((tech) => (
            <Tag
              key={tech}
              size="sm"
              borderRadius="6px"
              bg="rgba(255, 255, 255, 0.04)"
              color={colors.text.secondary}
              border={`1px solid ${colors.border.subtle}`}
              fontSize="11px"
            >
              {tech}
            </Tag>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};
