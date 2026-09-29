import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/footer/Footer';
import { CustomCursor } from '../components/common/CustomCursor';
import { AppRoutes } from './routes';
import { useLenis } from '../hooks/useLenis';
import { HeroBackground } from '../components/hero/HeroBackground';

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll
  useLenis();
  const { pathname, hash } = useLocation();

  // Scroll restoration on route changes
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const targetPos = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return (
    <Box position="relative" minH="100vh" bg="#050505" color="#FFFFFF">
      {/* Global Animated Background with Three.js 3D Particles, Glow, and Tech Grid across all pages */}
      <HeroBackground isFixed={true} />

      {/* Custom Cursor for enhanced desktop interaction */}
      <CustomCursor />

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Page Routing */}
      <Box position="relative" zIndex={1}>
        <AppRoutes />
      </Box>

      {/* Global Minimal Footer */}
      <Box position="relative" zIndex={1}>
        <Footer />
      </Box>
    </Box>
  );
};
