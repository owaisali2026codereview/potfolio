import React from 'react';
import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Container } from '../common/Container';
import { profileData } from '../../data/profile';
import { SITE_CONFIG } from '../../utils/constants';
import { colors } from '../../theme/colors';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      as="footer"
      py={{ base: '48px', md: '64px' }}
      borderTop={`1px solid ${colors.border.subtle}`}
      bg="#050505"
      position="relative"
    >
      <Container>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
          gap="32px"
        >
          {/* Identity & Core Stack */}
          <VStack align="flex-start" spacing="8px">
            <HStack spacing="10px">
              <Box w="8px" h="8px" borderRadius="full" bg={colors.accent.primary} />
              <Text
                fontFamily="'Poppins', sans-serif"
                fontWeight={700}
                fontSize="17px"
                letterSpacing="0.06em"
                color="#FFFFFF"
              >
                {SITE_CONFIG.name.toUpperCase()}
              </Text>
            </HStack>

            <Text fontSize="13px" color={colors.text.secondary}>
              {SITE_CONFIG.role} · React · TypeScript · MERN · Python
            </Text>
          </VStack>

          {/* Social Profiles from centralized profile data */}
          <HStack spacing="24px" wrap="wrap">
            {profileData.socials.map((social) => (
              <ChakraLink
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                fontSize="13px"
                fontWeight={500}
                color={colors.text.secondary}
                transition="color 0.2s ease"
                _hover={{ color: colors.accent.highlight, textDecoration: 'none' }}
              >
                {social.platform}
              </ChakraLink>
            ))}

            {/* Back to top button */}
            <Box
              as="button"
              onClick={scrollToTop}
              display="inline-flex"
              alignItems="center"
              p="8px"
              borderRadius="full"
              bg="rgba(16, 16, 23, 0.8)"
              border={`1px solid ${colors.border.subtle}`}
              color={colors.text.secondary}
              transition="all 0.2s ease"
              _hover={{
                color: '#FFFFFF',
                borderColor: colors.accent.primary,
                transform: 'translateY(-2px)',
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </Box>
          </HStack>
        </Flex>

        {/* Copyright notice */}
        <Box
          mt="40px"
          pt="24px"
          borderTop="1px solid rgba(255, 255, 255, 0.04)"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap="12px"
        >
          <Text fontSize="12px" color={colors.text.muted}>
            © {SITE_CONFIG.copyrightYear} Muhammad Owais. Engineered with React, TypeScript & Three.js.
          </Text>

          <Text fontSize="12px" color={colors.text.muted} fontFamily="'JetBrains Mono', monospace">
            LATENCY: OPTIMAL · CRAFT: PRODUCTION
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
