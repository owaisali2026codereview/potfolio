import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Image,
  Tag,
  Button,
} from '@chakra-ui/react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Reveal } from '../components/common/Reveal';
import { projects } from '../data/projects';
import { colors } from '../theme/colors';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, CheckCircle, AlertTriangle } from 'lucide-react';

export const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];

  if (!project) {
    return (
      <Box as="main" pt="140px" pb="100px" textAlign="center">
        <Container>
          <Heading as="h1" fontSize="36px" color="#FFFFFF" mb="16px">
            Project Not Found
          </Heading>
          <Text fontSize="16px" color={colors.text.secondary} mb="28px">
            The project requested does not exist or has been relocated.
          </Text>
          <Button as={RouterLink} to="/projects" variant="primary">
            Back to All Projects
          </Button>
        </Container>
      </Box>
    );
  }

  // Calculate Next Project for Section 24 requirement: "12. Next project"
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <Box as="main" pt={{ base: '100px', md: '120px' }} pb="100px">
      <Container>
        {/* Navigation Breadcrumb */}
        <Button
          as={RouterLink}
          to="/projects"
          variant="ghost"
          size="sm"
          leftIcon={<ArrowLeft size={16} />}
          mb="32px"
          color={colors.text.secondary}
          _hover={{ color: '#FFFFFF' }}
        >
          Back to Projects
        </Button>

        {/* 1. Project Hero */}
        <VStack align="flex-start" spacing="16px" mb="36px">
          <HStack spacing="12px">
            <Tag
              size="md"
              borderRadius="full"
              bg="rgba(139, 92, 246, 0.2)"
              color={colors.accent.highlight}
              fontFamily="'JetBrains Mono', monospace"
            >
              {project.category}
            </Tag>
            <Text fontSize="13px" color={colors.text.muted} fontFamily="'JetBrains Mono', monospace">
              // ROLE: {project.role}
            </Text>
          </HStack>

          <Heading
            as="h1"
            fontFamily="'Poppins', sans-serif"
            fontSize={{ base: '30px', sm: '38px', md: '48px' }}
            fontWeight={700}
            color="#FFFFFF"
            lineHeight={{ base: '38px', md: '56px' }}
          >
            {project.title}
          </Heading>

          <Text fontSize={{ base: '16px', md: '18px' }} color={colors.text.secondary} maxW="780px">
            {project.subtitle}
          </Text>

          {/* Links: Live Demo & GitHub */}
          <HStack spacing="14px" pt="8px" wrap="wrap">
            {project.liveUrl && (
              <Button
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                rightIcon={<ExternalLink size={16} />}
              >
                Launch Live App
              </Button>
            )}
            {project.githubUrl && (
              <Button
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                leftIcon={<Github size={16} />}
              >
                GitHub Repository
              </Button>
            )}
          </HStack>
        </VStack>

        {/* 9. Screenshots / Featured Media */}
        <Box
          position="relative"
          h={{ base: '260px', sm: '380px', md: '500px' }}
          borderRadius="24px"
          overflow="hidden"
          border={`1px solid ${colors.border.visible}`}
          mb="56px"
          boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.9)"
        >
          <Image
            src={project.image}
            alt={project.title}
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>

        {/* 2 & 3. Problem and Solution */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="32px" mb="48px">
          <Reveal yOffset={25}>
            <Box
              p="32px"
              borderRadius="20px"
              bg="rgba(16, 16, 23, 0.65)"
              border={`1px solid ${colors.border.subtle}`}
              h="100%"
            >
              <Text fontSize="12px" fontWeight={700} color={colors.accent.highlight} fontFamily="'JetBrains Mono', monospace" mb="12px">
                // 01. THE PROBLEM
              </Text>
              <Heading as="h3" fontSize="20px" color="#FFFFFF" mb="12px">
                Requirements & Constraints
              </Heading>
              <Text fontSize="15px" lineHeight="26px" color={colors.text.secondary}>
                {project.problem}
              </Text>
            </Box>
          </Reveal>

          <Reveal delay={0.1} yOffset={25}>
            <Box
              p="32px"
              borderRadius="20px"
              bg="rgba(16, 16, 23, 0.65)"
              border={`1px solid ${colors.border.subtle}`}
              h="100%"
            >
              <Text fontSize="12px" fontWeight={700} color={colors.accent.highlight} fontFamily="'JetBrains Mono', monospace" mb="12px">
                // 02. THE SOLUTION
              </Text>
              <Heading as="h3" fontSize="20px" color="#FFFFFF" mb="12px">
                Engineering Implementation
              </Heading>
              <Text fontSize="15px" lineHeight="26px" color={colors.text.secondary}>
                {project.solution}
              </Text>
            </Box>
          </Reveal>
        </SimpleGrid>

        {/* 5 & 6. Technology & Architecture */}
        <SimpleGrid columns={{ base: 1, lg: 12 }} spacing="32px" mb="48px">
          <Box gridColumn={{ lg: 'span 7' }}>
            <Reveal yOffset={25}>
              <Box
                p="32px"
                borderRadius="20px"
                bg="rgba(16, 16, 23, 0.65)"
                border={`1px solid ${colors.border.subtle}`}
              >
                <Text fontSize="12px" fontWeight={700} color={colors.accent.highlight} fontFamily="'JetBrains Mono', monospace" mb="12px">
                  // 03. SYSTEM ARCHITECTURE
                </Text>
                <Heading as="h3" fontSize="20px" color="#FFFFFF" mb="12px">
                  Structural & Data Flow Design
                </Heading>
                <Text fontSize="15px" lineHeight="26px" color={colors.text.secondary}>
                  {project.architecture}
                </Text>
              </Box>
            </Reveal>
          </Box>

          <Box gridColumn={{ lg: 'span 5' }}>
            <Reveal delay={0.1} yOffset={25}>
              <Box
                p="32px"
                borderRadius="20px"
                bg="rgba(16, 16, 23, 0.65)"
                border={`1px solid ${colors.border.subtle}`}
              >
                <Text fontSize="12px" fontWeight={700} color={colors.accent.highlight} fontFamily="'JetBrains Mono', monospace" mb="12px">
                  // 04. TECH STACK EMPLOYED
                </Text>
                <Heading as="h3" fontSize="20px" color="#FFFFFF" mb="16px">
                  Core Technologies
                </Heading>
                <HStack wrap="wrap" spacing="10px">
                  {project.technologies.map((tech) => (
                    <Tag
                      key={tech}
                      size="lg"
                      borderRadius="full"
                      bg="rgba(139, 92, 246, 0.15)"
                      color="#FFFFFF"
                      border={`1px solid ${colors.border.accent}`}
                      px="16px"
                      py="8px"
                      fontSize="13px"
                    >
                      {tech}
                    </Tag>
                  ))}
                </HStack>
              </Box>
            </Reveal>
          </Box>
        </SimpleGrid>

        {/* 7 & 8. Key Features & Challenges */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="32px" mb="48px">
          {/* Key Features */}
          <Box p="32px" borderRadius="20px" bg="rgba(16, 16, 23, 0.65)" border={`1px solid ${colors.border.subtle}`}>
            <Text fontSize="12px" fontWeight={700} color={colors.accent.highlight} fontFamily="'JetBrains Mono', monospace" mb="12px">
              // 05. KEY FEATURES
            </Text>
            <VStack align="stretch" spacing="14px">
              {project.keyFeatures.map((feat, index) => (
                <HStack key={index} align="flex-start" spacing="12px">
                  <CheckCircle size={18} color={colors.accent.primary} style={{ marginTop: '2px', flexShrink: 0 }} />
                  <Text fontSize="14px" lineHeight="22px" color={colors.text.secondary}>
                    {feat}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>

          {/* Challenges & Technical Resolution */}
          <Box p="32px" borderRadius="20px" bg="rgba(16, 16, 23, 0.65)" border={`1px solid ${colors.border.subtle}`}>
            <Text fontSize="12px" fontWeight={700} color={colors.accent.highlight} fontFamily="'JetBrains Mono', monospace" mb="12px">
              // 06. CHALLENGES & OVERCOMINGS
            </Text>
            <VStack align="stretch" spacing="14px">
              {project.challenges.map((chal, index) => (
                <HStack key={index} align="flex-start" spacing="12px">
                  <AlertTriangle size={18} color="#F59E0B" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <Text fontSize="14px" lineHeight="22px" color={colors.text.secondary}>
                    {chal}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </SimpleGrid>

        {/* 10. Factual Measurable Outcomes */}
        <Box p="32px" borderRadius="20px" bg="rgba(16, 16, 23, 0.65)" border={`1px solid ${colors.border.subtle}`} mb="56px">
          <Text fontSize="12px" fontWeight={700} color={colors.accent.highlight} fontFamily="'JetBrains Mono', monospace" mb="12px">
            // 07. MEASURABLE OUTCOMES
          </Text>
          <VStack align="stretch" spacing="10px">
            {project.outcomes.map((out, index) => (
              <HStack key={index} align="flex-start" spacing="10px">
                <Box w="6px" h="6px" borderRadius="full" bg={colors.accent.primary} mt="8px" flexShrink={0} />
                <Text fontSize="14px" lineHeight="22px" color={colors.text.secondary}>
                  {out}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>

        {/* 12. Next Project Navigation Card */}
        <Box
          p="32px"
          borderRadius="24px"
          bg="rgba(16, 16, 23, 0.9)"
          border={`1px solid ${colors.border.accent}`}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap="20px"
        >
          <Box>
            <Text fontSize="12px" color={colors.accent.highlight} fontFamily="'JetBrains Mono', monospace">
              NEXT CASE STUDY →
            </Text>
            <Heading as="h3" fontSize="22px" color="#FFFFFF" mt="4px">
              {nextProject.title}
            </Heading>
            <Text fontSize="14px" color={colors.text.secondary}>
              {nextProject.category} · {nextProject.technologies.slice(0, 3).join(', ')}
            </Text>
          </Box>

          <Button
            as={RouterLink}
            to={`/projects/${nextProject.slug}`}
            variant="primary"
            rightIcon={<ArrowUpRight size={18} />}
          >
            Read Next Study
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
