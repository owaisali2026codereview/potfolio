import React from 'react';
import { Stack, HStack, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowDownRight, Mail } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';
import { colors } from '../../theme/colors';

interface HeroCTAProps {
  ctaRef?: React.RefObject<HTMLDivElement>;
}

export const HeroCTA: React.FC<HeroCTAProps> = ({ ctaRef }) => {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
      window.history.pushState(null, '', '#projects');
    }
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <Stack
      ref={ctaRef}
      direction={{ base: 'column', sm: 'row' }}
      spacing={{ base: '14px', sm: '18px' }}
      pt="10px"
      w={{ base: '100%', sm: 'auto' }}
    >
      <MagneticButton
        as={RouterLink}
        to="/#projects"
        onClick={handleScrollToProjects}
        variant="primary"
        rightIcon={<ArrowDownRight size={18} />}
        w={{ base: '100%', sm: 'auto' }}
        minW="180px"
      >
        View Projects
      </MagneticButton>

      <MagneticButton
        as={RouterLink}
        to="/#contact"
        onClick={handleScrollToContact}
        variant="secondary"
        rightIcon={<Mail size={17} />}
        w={{ base: '100%', sm: 'auto' }}
        minW="180px"
      >
        Let's Talk
      </MagneticButton>
    </Stack>
  );
};
