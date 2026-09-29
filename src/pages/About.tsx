import React from 'react';
import { Box, VStack, Heading, Text, SimpleGrid, HStack, Tag, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { profileData } from '../data/profile';
import { colors } from '../theme/colors';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const { aboutPhilosophy } = profileData;

  return (
    <Box as="main" pt={{ base: '100px', md: '130px' }} pb="80px">
      <Container>
        <Button
          as={RouterLink}
          to="/"
          variant="ghost"
          size="sm"
          leftIcon={<ArrowLeft size={16} />}
          mb="32px"
          color={colors.text.secondary}
          _hover={{ color: '#FFFFFF' }}
        >
          Back to Overview
        </Button>

        <SectionHeading
          tag="// ABOUT MUHAMMAD OWAIS"
          title="ENGINEERING WITH PURPOSE & PRECISION"
          subtitle="A deeper look into my architectural mindset, craftsmanship, and commitment to production software standards."
        />

        <SimpleGrid columns={{ base: 1, lg: 12 }} spacing="48px" mb="64px">
          <Box gridColumn={{ lg: 'span 8' }}>
            <VStack align="stretch" spacing="24px">
              {aboutPhilosophy.paragraphs.map((para, index) => (
                <Reveal key={index} delay={index * 0.1} yOffset={20}>
                  <Text fontSize={{ base: '16px', md: '18px' }} lineHeight="30px" color={colors.text.secondary}>
                    {para}
                  </Text>
                </Reveal>
              ))}

              <Reveal delay={0.3} yOffset={20}>
                <Box
                  p="28px"
                  borderRadius="20px"
                  bg="rgba(16, 16, 23, 0.7)"
                  border={`1px solid ${colors.border.accent}`}
                  mt="20px"
                >
                  <Heading as="h3" fontSize="18px" color="#FFFFFF" mb="14px">
                    Core Technical Pillars
                  </Heading>
                  <VStack align="stretch" spacing="12px">
                    {aboutPhilosophy.pillars.map((pillar) => (
                      <HStack key={pillar.title} align="flex-start" spacing="12px">
                        <CheckCircle2 size={18} color={colors.accent.primary} style={{ marginTop: '2px', flexShrink: 0 }} />
                        <Box>
                          <Text fontSize="15px" fontWeight={600} color="#FFFFFF">
                            {pillar.title}
                          </Text>
                          <Text fontSize="14px" color={colors.text.secondary} lineHeight="22px">
                            {pillar.description}
                          </Text>
                        </Box>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              </Reveal>
            </VStack>
          </Box>

          <Box gridColumn={{ lg: 'span 4' }}>
            <Box
              p="28px"
              borderRadius="20px"
              bg="rgba(16, 16, 23, 0.6)"
              border={`1px solid ${colors.border.subtle}`}
              position="sticky"
              top="120px"
            >
              <Text fontSize="12px" color={colors.accent.highlight} fontFamily="'JetBrains Mono', monospace" mb="8px">
                // QUICK FACTS
              </Text>
              <VStack align="stretch" spacing="14px" mt="16px">
                <Box>
                  <Text fontSize="12px" color={colors.text.muted}>Role</Text>
                  <Text fontSize="15px" fontWeight={600} color="#FFFFFF">Software Developer</Text>
                </Box>
                <Box>
                  <Text fontSize="12px" color={colors.text.muted}>Primary Stack</Text>
                  <Text fontSize="15px" fontWeight={600} color="#FFFFFF">MERN, TypeScript, React</Text>
                </Box>
                <Box>
                  <Text fontSize="12px" color={colors.text.muted}>Databases</Text>
                  <Text fontSize="15px" fontWeight={600} color="#FFFFFF">MongoDB, MySQL</Text>
                </Box>
                <Box>
                  <Text fontSize="12px" color={colors.text.muted}>Programming</Text>
                  <Text fontSize="15px" fontWeight={600} color="#FFFFFF">JavaScript, TypeScript, Python</Text>
                </Box>
              </VStack>

              <Button
                as={RouterLink}
                to="/contact"
                variant="primary"
                w="100%"
                mt="28px"
                rightIcon={<ArrowUpRight size={16} />}
              >
                Let's Connect
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
