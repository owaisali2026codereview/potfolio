import React from 'react';
import { Box, VStack, Heading, Text, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { colors } from '../theme/colors';
import { Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <Box
      as="main"
      minH="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt="100px"
      pb="80px"
      textAlign="center"
    >
      <Container>
        <VStack spacing="24px" maxW="540px" mx="auto">
          <Text
            fontFamily="'JetBrains Mono', monospace"
            fontSize={{ base: '80px', md: '120px' }}
            fontWeight={800}
            lineHeight="1"
            bgGradient="linear(to-r, #8B5CF6, #C084FC)"
            bgClip="text"
            letterSpacing="-0.04em"
          >
            404
          </Text>

          <Heading
            as="h1"
            fontSize={{ base: '26px', md: '34px' }}
            fontWeight={700}
            color="#FFFFFF"
            fontFamily="'Poppins', sans-serif"
          >
            Looks like this page <br />
            got lost in the stack.
          </Heading>

          <Text fontSize="16px" color={colors.text.secondary}>
            The URL you requested could not be resolved or was shifted during an architectural refactor.
          </Text>

          <Button
            as={RouterLink}
            to="/"
            variant="primary"
            size="lg"
            leftIcon={<Home size={18} />}
            mt="12px"
          >
            Back Home
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};
