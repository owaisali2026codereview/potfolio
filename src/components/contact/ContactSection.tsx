import React from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  HStack,
} from '@chakra-ui/react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { SectionHeading } from '../common/SectionHeading';
import { Reveal } from '../common/Reveal';
import { ContactForm } from './ContactForm';
import { SITE_CONFIG } from '../../utils/constants';
import { colors } from '../../theme/colors';
import { Mail, MapPin, Github, Linkedin, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <Section id="contact">
      <Container>
        <SimpleGrid columns={{ base: 1, lg: 12 }} spacing={{ base: '48px', lg: '56px' }}>
          {/* Left Column: Direct communication info (5 Cols) */}
          <Box gridColumn={{ lg: 'span 5' }}>
            <SectionHeading
              tag="// INITIATE DIALOGUE"
              title="HAVE AN IDEA? LET'S BUILD IT."
              subtitle="Whether you have an upcoming project, want to discuss software architecture, or simply wish to connect, let's talk."
            />

            <VStack spacing="24px" align="stretch" mt="32px">
              {/* Email direct card */}
              <Box
                as="a"
                href={`mailto:${SITE_CONFIG.email}`}
                p="20px"
                borderRadius="16px"
                bg="rgba(16, 16, 23, 0.5)"
                border={`1px solid ${colors.border.subtle}`}
                display="flex"
                alignItems="center"
                transition="all 0.25s ease"
                _hover={{
                  borderColor: colors.border.accent,
                  bg: 'rgba(21, 21, 31, 0.8)',
                  transform: 'translateX(4px)',
                }}
              >
                <Box
                  p="10px"
                  borderRadius="12px"
                  bg="rgba(139, 92, 246, 0.12)"
                  mr="16px"
                >
                  <Mail size={20} color={colors.accent.highlight} />
                </Box>
                <Box>
                  <Text fontSize="12px" color={colors.text.muted} textTransform="uppercase" fontWeight={600}>
                    Direct Email
                  </Text>
                  <Text fontSize="15px" fontWeight={500} color="#FFFFFF">
                    {SITE_CONFIG.email}
                  </Text>
                </Box>
              </Box>

              {/* Location card */}
              <Box
                p="20px"
                borderRadius="16px"
                bg="rgba(16, 16, 23, 0.5)"
                border={`1px solid ${colors.border.subtle}`}
                display="flex"
                alignItems="center"
              >
                <Box
                  p="10px"
                  borderRadius="12px"
                  bg="rgba(139, 92, 246, 0.12)"
                  mr="16px"
                >
                  <MapPin size={20} color={colors.accent.highlight} />
                </Box>
                <Box>
                  <Text fontSize="12px" color={colors.text.muted} textTransform="uppercase" fontWeight={600}>
                    Availability & Location
                  </Text>
                  <Text fontSize="15px" fontWeight={500} color="#FFFFFF">
                    Available Worldwide (Remote / Hybrid)
                  </Text>
                </Box>
              </Box>

              {/* Social Channels */}
              <Box pt="12px">
                <Text fontSize="13px" fontWeight={600} color={colors.text.muted} textTransform="uppercase" mb="14px">
                  Verified Profiles:
                </Text>
                <HStack spacing="14px">
                  <Box
                    as="a"
                    href={SITE_CONFIG.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    p="12px"
                    borderRadius="12px"
                    bg="rgba(16, 16, 23, 0.6)"
                    border={`1px solid ${colors.border.subtle}`}
                    color="#FFFFFF"
                    transition="all 0.25s ease"
                    _hover={{
                      borderColor: colors.accent.primary,
                      bg: 'rgba(139, 92, 246, 0.15)',
                      transform: 'translateY(-2px)',
                    }}
                    aria-label="Muhammad Owais GitHub"
                  >
                    <Github size={20} />
                  </Box>

                  <Box
                    as="a"
                    href={SITE_CONFIG.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    p="12px"
                    borderRadius="12px"
                    bg="rgba(16, 16, 23, 0.6)"
                    border={`1px solid ${colors.border.subtle}`}
                    color="#FFFFFF"
                    transition="all 0.25s ease"
                    _hover={{
                      borderColor: colors.accent.primary,
                      bg: 'rgba(139, 92, 246, 0.15)',
                      transform: 'translateY(-2px)',
                    }}
                    aria-label="Muhammad Owais LinkedIn"
                  >
                    <Linkedin size={20} />
                  </Box>

                  <Box
                    as="a"
                    href={`mailto:${SITE_CONFIG.email}`}
                    p="12px"
                    borderRadius="12px"
                    bg="rgba(16, 16, 23, 0.6)"
                    border={`1px solid ${colors.border.subtle}`}
                    color="#FFFFFF"
                    transition="all 0.25s ease"
                    _hover={{
                      borderColor: colors.accent.primary,
                      bg: 'rgba(139, 92, 246, 0.15)',
                      transform: 'translateY(-2px)',
                    }}
                    aria-label="Muhammad Owais Email"
                  >
                    <MessageSquare size={20} />
                  </Box>
                </HStack>
              </Box>
            </VStack>
          </Box>

          {/* Right Column: Interactive Form (7 Cols) */}
          <Box gridColumn={{ lg: 'span 7' }}>
            <Reveal yOffset={25}>
              <ContactForm />
            </Reveal>
          </Box>
        </SimpleGrid>
      </Container>
    </Section>
  );
};
