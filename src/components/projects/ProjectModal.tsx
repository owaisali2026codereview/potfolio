import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Image,
  Heading,
  Text,
  HStack,
  VStack,
  Tag,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, CheckCircle } from 'lucide-react';
import { type Project } from '../../data/projects';
import { colors } from '../../theme/colors';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered scrollBehavior="inside">
      <ModalOverlay bg="rgba(5, 5, 5, 0.85)" backdropFilter="blur(12px)" />
      <ModalContent
        bg="#0D0D14"
        border={`1px solid ${colors.border.visible}`}
        borderRadius="24px"
        overflow="hidden"
        color="#FFFFFF"
        mx="16px"
      >
        {/* Project Header Banner Image */}
        <Box position="relative" h={{ base: '200px', md: '280px' }} w="100%">
          <Image
            src={project.image}
            alt={project.title}
            w="100%"
            h="100%"
            objectFit="cover"
          />
          <Box
            position="absolute"
            inset={0}
            bg="linear-gradient(to top, #0D0D14 10%, transparent 80%)"
          />
          <ModalCloseButton
            position="absolute"
            top="16px"
            right="16px"
            bg="rgba(5, 5, 5, 0.7)"
            borderRadius="full"
            p="8px"
            _hover={{ bg: 'rgba(255, 255, 255, 0.15)' }}
          />
        </Box>

        <ModalHeader pt="12px" pb="16px" px={{ base: '20px', md: '32px' }}>
          <HStack justify="space-between" align="center" wrap="wrap" mb="8px">
            <Tag
              size="sm"
              borderRadius="full"
              bg="rgba(139, 92, 246, 0.15)"
              color={colors.accent.highlight}
              fontFamily="'JetBrains Mono', monospace"
            >
              {project.category}
            </Tag>
            <Text fontSize="13px" color={colors.text.muted} fontFamily="'JetBrains Mono', monospace">
              ROLE: {project.role}
            </Text>
          </HStack>

          <Heading as="h2" fontSize={{ base: '22px', md: '28px' }} fontWeight={700}>
            {project.title}
          </Heading>
          <Text fontSize="14px" color={colors.text.secondary} fontWeight={400} mt="4px">
            {project.subtitle}
          </Text>
        </ModalHeader>

        <ModalBody px={{ base: '20px', md: '32px' }} pb="32px">
          <VStack align="stretch" spacing="24px">
            {/* Tech Stack Pills */}
            <HStack wrap="wrap" spacing="8px">
              {project.technologies.map((tech) => (
                <Tag
                  key={tech}
                  size="md"
                  borderRadius="full"
                  bg="rgba(255, 255, 255, 0.05)"
                  color="#FFFFFF"
                  border={`1px solid ${colors.border.subtle}`}
                >
                  {tech}
                </Tag>
              ))}
            </HStack>

            {/* Problem & Solution Grid */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="18px">
              <Box p="18px" borderRadius="14px" bg="rgba(16, 16, 23, 0.7)" border={`1px solid ${colors.border.subtle}`}>
                <Text fontSize="12px" fontWeight={600} color={colors.accent.highlight} fontFamily="'JetBrains Mono', monospace" mb="6px">
                  // THE CHALLENGE
                </Text>
                <Text fontSize="13px" lineHeight="22px" color={colors.text.secondary}>
                  {project.problem}
                </Text>
              </Box>

              <Box p="18px" borderRadius="14px" bg="rgba(16, 16, 23, 0.7)" border={`1px solid ${colors.border.subtle}`}>
                <Text fontSize="12px" fontWeight={600} color={colors.accent.highlight} fontFamily="'JetBrains Mono', monospace" mb="6px">
                  // THE ARCHITECTURAL SOLUTION
                </Text>
                <Text fontSize="13px" lineHeight="22px" color={colors.text.secondary}>
                  {project.solution}
                </Text>
              </Box>
            </SimpleGrid>

            {/* Key Features */}
            <Box>
              <Text fontSize="13px" fontWeight={600} color="#FFFFFF" mb="12px" textTransform="uppercase" letterSpacing="0.05em">
                Engineered Features
              </Text>
              <VStack align="stretch" spacing="10px">
                {project.keyFeatures.map((feat, idx) => (
                  <HStack key={idx} align="flex-start" spacing="10px">
                    <CheckCircle size={16} color={colors.accent.primary} style={{ marginTop: '3px', flexShrink: 0 }} />
                    <Text fontSize="13px" lineHeight="20px" color={colors.text.secondary}>
                      {feat}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </Box>

            {/* Actions: Live Demo, GitHub, Dedicated Detail Page */}
            <HStack spacing="14px" pt="16px" borderTop={`1px solid ${colors.border.subtle}`} wrap="wrap">
              <Button
                as={RouterLink}
                to={`/projects/${project.slug}`}
                onClick={onClose}
                variant="primary"
                size="md"
                rightIcon={<ArrowUpRight size={16} />}
              >
                Full Case Study
              </Button>

              {project.liveUrl && (
                <Button
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="md"
                  leftIcon={<ExternalLink size={16} />}
                >
                  Live Preview
                </Button>
              )}

              {project.githubUrl && (
                <Button
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="md"
                  leftIcon={<Github size={16} />}
                >
                  Source Code
                </Button>
              )}
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
