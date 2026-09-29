import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Button,
  Text,
  Box,
  HStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { navigationLinks } from '../../data/navigation';
import { colors } from '../../theme/colors';
import { ArrowUpRight } from 'lucide-react';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const handleNavClick = (href: string) => {
    onClose();
    if (href.startsWith('/#') || href.startsWith('#')) {
      const id = href.replace('/#', '').replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const offset = 80;
          const pos = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      }, 200);
    }
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
      <DrawerOverlay bg="rgba(5, 5, 5, 0.85)" backdropFilter="blur(8px)" />
      <DrawerContent bg="#0A0A0F" borderLeft={`1px solid ${colors.border.subtle}`}>
        <DrawerHeader
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          py="24px"
          px="24px"
          borderBottom={`1px solid ${colors.border.subtle}`}
        >
          <HStack spacing="10px">
            <Box w="8px" h="8px" borderRadius="full" bg={colors.accent.primary} />
            <Text
              fontFamily="'Poppins', sans-serif"
              fontWeight={700}
              fontSize="18px"
              letterSpacing="0.08em"
              color="#FFFFFF"
            >
              OWAIS
            </Text>
          </HStack>
          <DrawerCloseButton
            position="static"
            color="#FFFFFF"
            fontSize="16px"
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
          />
        </DrawerHeader>

        <DrawerBody display="flex" flexDirection="column" justifyContent="space-between" py="40px" px="24px">
          <VStack align="flex-start" spacing="28px">
            <Text
              fontSize="12px"
              fontWeight={600}
              letterSpacing="0.1em"
              color={colors.text.muted}
              textTransform="uppercase"
              fontFamily="'JetBrains Mono', monospace"
            >
              // Navigation
            </Text>

            {navigationLinks.map((item, index) => (
              <Box
                key={item.label}
                as={RouterLink}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                fontSize="24px"
                fontWeight={600}
                color="#FFFFFF"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                w="100%"
                py="6px"
                transition="all 0.2s ease"
                _hover={{
                  color: colors.accent.highlight,
                  transform: 'translateX(6px)',
                }}
              >
                <Text>{item.label}</Text>
                <Text fontSize="13px" color={colors.text.muted} fontFamily="'JetBrains Mono', monospace">
                  0{index + 1}
                </Text>
              </Box>
            ))}
          </VStack>

          <VStack w="100%" spacing="16px" pt="40px" borderTop={`1px solid ${colors.border.subtle}`}>
            <Button
              as={RouterLink}
              to="/contact"
              onClick={onClose}
              variant="primary"
              w="100%"
              h="52px"
              rightIcon={<ArrowUpRight size={18} />}
            >
              Let's Talk
            </Button>
            <Text fontSize="13px" color={colors.text.muted} textAlign="center">
              Software Developer · MERN · TypeScript · React
            </Text>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
