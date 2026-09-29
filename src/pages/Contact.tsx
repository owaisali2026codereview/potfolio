import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container } from '../components/common/Container';
import { ContactSection } from '../components/contact/ContactSection';
import { colors } from '../theme/colors';

export const Contact: React.FC = () => {
  return (
    <Box as="main" pt={{ base: '100px', md: '130px' }} pb="80px">
      <Container>
        <Button
          as={RouterLink}
          to="/"
          variant="ghost"
          size="sm"
          leftIcon={<ArrowLeft size={16} />}
          mb="20px"
          color={colors.text.secondary}
          _hover={{ color: '#FFFFFF' }}
        >
          Back to Overview
        </Button>
      </Container>
      <ContactSection />
    </Box>
  );
};
