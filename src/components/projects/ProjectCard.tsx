import React from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  HStack,
  VStack,
  Tag,
  Button,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, Eye } from 'lucide-react';
import { type Project } from '../../data/projects';
import { colors } from '../../theme/colors';

interface ProjectCardProps {
  project: Project;
  onQuickView: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onQuickView }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <Box
      className="spotlight-card"
      onMouseMove={handleMouseMove}
      borderRadius="20px"
      bg="rgba(16, 16, 23, 0.75)"
      border={`1px solid ${colors.border.subtle}`}
      overflow="hidden"
      display="flex"
      flexDirection="column"
      transition="all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
      _hover={{
        borderColor: colors.border.accent,
        boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 25px rgba(139, 92, 246, 0.15)',
        transform: 'translateY(-6px)',
      }}
    >
      {/* Visual Thumbnail with Overlay */}
      <Box
        position="relative"
        h={{ base: '220px', md: '250px' }}
        w="100%"
        overflow="hidden"
        bg="#0D0D14"
      >
        <Image
          src={project.image}
          alt={project.title}
          w="100%"
          h="100%"
          objectFit="cover"
          transition="transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
          _hover={{ transform: 'scale(1.06)' }}
        />

        {/* Gradient Scrim */}
        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(to top, rgba(16, 16, 23, 0.95) 0%, rgba(16, 16, 23, 0.2) 60%, transparent 100%)"
        />

        {/* Top Badges: Project Number & Category */}
        <HStack position="absolute" top="16px" left="16px" right="16px" justify="space-between">
          <Text
            fontFamily="'JetBrains Mono', monospace"
            fontSize="14px"
            fontWeight={700}
            color="#FFFFFF"
            bg="rgba(5, 5, 5, 0.75)"
            px="10px"
            py="4px"
            borderRadius="8px"
            border={`1px solid ${colors.border.subtle}`}
          >
            {project.id}
          </Text>

          <Tag
            size="sm"
            borderRadius="full"
            bg="rgba(139, 92, 246, 0.2)"
            color={colors.accent.highlight}
            border="1px solid rgba(139, 92, 246, 0.35)"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="11px"
          >
            {project.category}
          </Tag>
        </HStack>

        {/* Floating Quick View Button on Image */}
        <Button
          onClick={() => onQuickView(project)}
          position="absolute"
          bottom="16px"
          right="16px"
          size="sm"
          borderRadius="full"
          bg="rgba(5, 5, 5, 0.8)"
          color="#FFFFFF"
          border={`1px solid ${colors.border.visible}`}
          backdropFilter="blur(6px)"
          leftIcon={<Eye size={14} />}
          _hover={{ bg: colors.accent.primary, borderColor: colors.accent.primary }}
          fontSize="12px"
        >
          Quick Architecture
        </Button>
      </Box>

      {/* Content Body */}
      <VStack align="stretch" p={{ base: '20px', md: '26px' }} spacing="16px" flex="1" justify="space-between">
        <VStack align="flex-start" spacing="10px">
          <Heading
            as="h3"
            fontSize={{ base: '19px', md: '21px' }}
            fontWeight={700}
            color="#FFFFFF"
            lineHeight="28px"
          >
            {project.title}
          </Heading>

          <Text fontSize="14px" lineHeight="22px" color={colors.text.secondary}>
            {project.description}
          </Text>
        </VStack>

        {/* Technologies Pills */}
        <VStack align="stretch" spacing="16px">
          <HStack wrap="wrap" spacing="6px">
            {project.technologies.map((tech) => (
              <Tag
                key={tech}
                size="sm"
                variant="subtle"
                bg="rgba(255, 255, 255, 0.05)"
                color="#E2E8F0"
                borderRadius="6px"
                fontSize="11px"
              >
                {tech}
              </Tag>
            ))}
          </HStack>

          {/* Action Row */}
          <HStack justify="space-between" pt="12px" borderTop={`1px solid ${colors.border.subtle}`}>
            <Button
              as={RouterLink}
              to={`/projects/${project.slug}`}
              variant="ghost"
              size="sm"
              color={colors.accent.highlight}
              p="0"
              h="auto"
              rightIcon={<ArrowUpRight size={16} />}
              _hover={{ color: '#FFFFFF', transform: 'translateX(3px)' }}
            >
              View Case Study
            </Button>

            <HStack spacing="8px">
              {project.githubUrl && (
                <Box
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  p="8px"
                  borderRadius="8px"
                  color={colors.text.secondary}
                  _hover={{ color: '#FFFFFF', bg: 'rgba(255, 255, 255, 0.08)' }}
                  aria-label={`${project.title} GitHub repository`}
                >
                  <Github size={18} />
                </Box>
              )}
              {project.liveUrl && (
                <Box
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  p="8px"
                  borderRadius="8px"
                  color={colors.text.secondary}
                  _hover={{ color: '#FFFFFF', bg: 'rgba(255, 255, 255, 0.08)' }}
                  aria-label={`${project.title} live preview`}
                >
                  <ExternalLink size={18} />
                </Box>
              )}
            </HStack>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};
