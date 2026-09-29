import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from './ChakraProvider';
import { Box, Heading, Text, Button, Container } from '@chakra-ui/react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public override state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by portfolio ErrorBoundary:', error, errorInfo);
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <Box
          minH="100vh"
          bg="#050505"
          color="#FFFFFF"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="20px"
          textAlign="center"
        >
          <Container maxW="600px">
            <Heading as="h1" fontSize="28px" mb="16px" color="#EF4444">
              An unexpected application error occurred.
            </Heading>
            <Text fontSize="15px" color="#A7A7B3" mb="24px">
              The portfolio encountered an exception. Please reload the interface or return home.
            </Text>
            <Button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.href = '/';
              }}
              bg="#8B5CF6"
              color="#FFFFFF"
              _hover={{ bg: '#A855F7' }}
              borderRadius="full"
              px="24px"
            >
              Reload Portfolio
            </Button>
          </Container>
        </Box>
      );
    }

    return this.props.children;
  }
}

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <ChakraProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </ChakraProvider>
    </ErrorBoundary>
  );
};
