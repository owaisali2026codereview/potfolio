import React from 'react';
import { Box, type BoxProps } from '@chakra-ui/react';

export interface SectionProps extends BoxProps {
  id?: string;
  children: React.ReactNode;
  hasBorderBottom?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  hasBorderBottom = false,
  ...props
}) => {
  return (
    <Box
      as="section"
      id={id}
      py={{ base: '60px', md: '90px', lg: '120px' }}
      position="relative"
      borderBottom={hasBorderBottom ? '1px solid rgba(255, 255, 255, 0.06)' : 'none'}
      {...props}
    >
      {children}
    </Box>
  );
};
