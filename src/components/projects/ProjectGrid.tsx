import React, { useState } from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Reveal } from '../common/Reveal';
import { type Project } from '../../data/projects';

interface ProjectGridProps {
  projects: Project[];
  columns?: { base: number; md: number; lg: number };
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  columns = { base: 1, md: 2, lg: 2 },
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Box w="100%">
      <SimpleGrid columns={columns} spacing={{ base: '24px', md: '32px' }}>
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.1} yOffset={25}>
            <ProjectCard
              project={project}
              onQuickView={(p) => setSelectedProject(p)}
            />
          </Reveal>
        ))}
      </SimpleGrid>

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </Box>
  );
};
