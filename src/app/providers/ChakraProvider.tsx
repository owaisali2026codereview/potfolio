import React from 'react';
import { ChakraProvider as BaseChakraProvider } from '@chakra-ui/react';
import { theme } from '../../theme';

interface ChakraProviderProps {
  children: React.ReactNode;
}

export const ChakraProvider: React.FC<ChakraProviderProps> = ({ children }) => {
  return <BaseChakraProvider theme={theme}>{children}</BaseChakraProvider>;
};
