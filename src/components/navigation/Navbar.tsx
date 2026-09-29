import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, ArrowUpRight } from 'lucide-react';
import { Container } from '../common/Container';
import { NavigationLink } from './NavigationLink';
import { MobileMenu } from './MobileMenu';
import { navigationLinks } from '../../data/navigation';
import { colors } from '../../theme/colors';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  // Scroll listener for background blur and scroll-spy active state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll-spy active section detection on homepage
      if (location.pathname === '/') {
        const sections = ['contact', 'journey', 'skills', 'about', 'projects'];
        let current = 'home';
        const scrollPosition = window.scrollY + 140;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el && el.offsetTop <= scrollPosition) {
            current = sectionId;
            break;
          }
        }
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleTalkClick = (e: React.MouseEvent<HTMLElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('contact');
      if (el) {
        const offset = 80;
        const pos = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
        window.history.pushState(null, '', '#contact');
      }
    }
  };

  const handleLogoClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', window.location.pathname);
    }
  }, [location.pathname]);

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      transition="all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
      bg={isScrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent'}
      backdropFilter={isScrolled ? 'blur(16px)' : 'none'}
      borderBottom={isScrolled ? `1px solid ${colors.border.subtle}` : '1px solid transparent'}
      py={isScrolled ? '14px' : '22px'}
    >
      <Container>
        <Flex align="center" justify="space-between">
          {/* Brand Logo */}
          <RouterLink to="/" onClick={handleLogoClick} style={{ textDecoration: 'none' }}>
            <HStack spacing="10px" cursor="pointer">
              <Box
                w="10px"
                h="10px"
                borderRadius="full"
                bg={colors.accent.primary}
                boxShadow="0 0 10px #8B5CF6"
              />
              <Text
                fontFamily="'Poppins', sans-serif"
                fontWeight={700}
                fontSize="18px"
                letterSpacing="0.08em"
                color="#FFFFFF"
                transition="color 0.2s ease"
                _hover={{ color: colors.accent.highlight }}
              >
                OWAIS
              </Text>
            </HStack>
          </RouterLink>

          {/* Desktop Navigation Links with Scroll-Spy Integration */}
          <HStack
            as="nav"
            spacing="4px"
            display={{ base: 'none', md: 'flex' }}
            bg={isScrolled ? 'rgba(16, 16, 23, 0.7)' : 'rgba(16, 16, 23, 0.45)'}
            px="12px"
            py="6px"
            borderRadius="full"
            border={`1px solid ${colors.border.subtle}`}
            backdropFilter="blur(12px)"
          >
            {navigationLinks.map((item) => {
              const isHash = item.href.startsWith('/#') || item.href.startsWith('#');
              const target = isHash ? (item.href.startsWith('/#') ? item.href.slice(2) : item.href.slice(1)) : 'home';
              const isCurrent = location.pathname === '/' ? activeSection === target : location.pathname === item.href;

              return (
                <NavigationLink
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  isActive={isCurrent}
                />
              );
            })}
          </HStack>

          {/* Right Action: Let's Talk CTA & Mobile Hamburger */}
          <HStack spacing="12px">
            <Button
              as={RouterLink}
              to="/contact"
              onClick={handleTalkClick}
              variant="outlineBadge"
              display={{ base: 'none', sm: 'inline-flex' }}
              rightIcon={<ArrowUpRight size={14} />}
              py="8px"
              px="18px"
            >
              Let's Talk
            </Button>

            <IconButton
              aria-label="Open Navigation Menu"
              icon={<Menu size={22} />}
              onClick={onOpen}
              display={{ base: 'flex', md: 'none' }}
              variant="ghost"
              color="#FFFFFF"
              _hover={{ bg: 'rgba(255, 255, 255, 0.08)' }}
              size="md"
            />
          </HStack>
        </Flex>
      </Container>

      {/* Accessible Mobile Menu Overlay */}
      <MobileMenu isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
