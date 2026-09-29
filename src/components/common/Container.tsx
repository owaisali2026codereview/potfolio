import React from 'react';
import { Box, type BoxProps } from '@chakra-ui/react';

export interface ContainerProps extends BoxProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <Box
      w="100%"
      maxW="1280px"
      mx="auto"
      px={{ base: '1.25rem', sm: '2rem', md: '3rem', lg: '4rem' }}
      {...props}
    >
      {children}
    </Box>
  );
};
