
import { Box } from '@chakra-ui/react';
import { HeroSection } from '../components/hero/HeroSection';
import { AboutSection } from '../components/about/AboutSection';
import { ProjectsSection } from '../components/projects/ProjectsSection';
import { SkillsSection } from '../components/skills/SkillsSection';
import { ExperienceSection } from '../components/experience/ExperienceSection';
import { ContactSection } from '../components/contact/ContactSection';

export const Home: React.FC = () => {
  return (
    <Box as="main" id="main-content">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </Box>
  );
};
