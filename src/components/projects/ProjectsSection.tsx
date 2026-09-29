import React, { useState } from 'react';
import { Box, HStack, Button, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectGrid } from './ProjectGrid';
import { projects } from '../../data/projects';
import { colors } from '../../theme/colors';

const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Architecture'] as const;

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedFilter);

  return (
    <Section id="projects" hasBorderBottom>
      <Container>
        <SectionHeading
          tag="// PORTFOLIO HIGHLIGHTS"
          title="SELECTED WORK"
          subtitle="A selection of interfaces, applications and systems built with modern web technologies."
        />

        {/* Filter categories */}
        <HStack
          spacing="10px"
          wrap="wrap"
          mb="36px"
          justify={{ base: 'center', md: 'flex-start' }}
        >
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

        {/* Project Grid */}
        <ProjectGrid projects={filteredProjects} />

        {/* View All Projects Action Link */}
        <VStack mt="48px">
          <Button
            as={RouterLink}
            to="/projects"
            variant="secondary"
            size="lg"
            rightIcon={<ArrowUpRight size={18} />}
            px="32px"
          >
            Explore All Case Studies & Projects
          </Button>
        </VStack>
      </Container>
    </Section>
  );
};
