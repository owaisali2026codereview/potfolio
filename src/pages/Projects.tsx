import React, { useState } from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { projects } from '../data/projects';
import { colors } from '../theme/colors';

const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Architecture'] as const;

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filtered = selectedFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedFilter);

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
          tag="// COMPLETE ARCHIVE"
          title="ENGINEERED PROJECTS & SYSTEMS"
          subtitle="Explore full-stack web applications, frontend architectures, and backend gateways built with modern TypeScript, React, and MERN."
        />

        {/* Filter categories */}
        <HStack spacing="10px" wrap="wrap" mb="36px">
          {categories.map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <Button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                size="sm"
                borderRadius="full"
                bg={isActive ? colors.accent.primary : 'rgba(16, 16, 23, 0.6)'}
                color={isActive ? '#FFFFFF' : colors.text.secondary}
                border={`1px solid ${isActive ? colors.accent.primary : colors.border.subtle}`}
                _hover={{
                  bg: isActive ? colors.accent.secondary : 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                }}
                px="16px"
                py="8px"
                fontSize="13px"
              >
                {cat}
              </Button>
            );
          })}
        </HStack>

        <ProjectGrid projects={filtered} />
      </Container>
    </Box>
  );
};
