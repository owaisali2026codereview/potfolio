import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { colors } from '../../theme/colors';

export interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  maxWidth?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  align = 'left',
  maxWidth = '680px',
}) => {
  const isCentered = align === 'center';

  return (
    <VStack
      align={isCentered ? 'center' : 'flex-start'}
      textAlign={isCentered ? 'center' : 'left'}
      spacing="14px"
      maxW={maxWidth}
      mx={isCentered ? 'auto' : '0'}
      mb={{ base: '36px', md: '56px' }}
    >
      {tag && (
        <Box
          display="inline-flex"
          alignItems="center"
          px="12px"
          py="4px"
          borderRadius="full"
          bg="rgba(139, 92, 246, 0.1)"
          border="1px solid rgba(139, 92, 246, 0.25)"
        >
          <Text
            fontSize="12px"
            fontWeight={600}
            letterSpacing="0.08em"
            color={colors.accent.highlight}
            textTransform="uppercase"
            fontFamily="'JetBrains Mono', monospace"
          >
            {tag}
          </Text>
        </Box>
      )}

      <Heading
        as="h2"
        fontFamily="'Poppins', sans-serif"
        fontSize={{ base: '28px', sm: '34px', md: '42px' }}
        fontWeight={700}
        lineHeight={{ base: '36px', sm: '42px', md: '50px' }}
        letterSpacing="-0.02em"
        color="#FFFFFF"
      >
        {title}
      </Heading>

      {subtitle && (
        <Text
          fontSize={{ base: '15px', md: '17px' }}
          lineHeight="26px"
          color={colors.text.secondary}
          fontWeight={400}
        >
          {subtitle}
        </Text>
      )}
    </VStack>
  );
};
