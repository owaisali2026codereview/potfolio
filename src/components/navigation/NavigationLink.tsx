import React from 'react';
import { Link as ChakraLink, type LinkProps } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { colors } from '../../theme/colors';

export interface NavigationLinkProps extends LinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  label,
  onClick,
  ...props
}) => {
  const location = useLocation();
  const isHash = href.startsWith('/#') || href.startsWith('#');
  const targetHash = isHash ? (href.startsWith('/#') ? href.slice(2) : href.slice(1)) : '';
  const isActive = isHash
    ? location.pathname === '/' && location.hash === `#${targetHash}`
    : location.pathname === href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick();

    if (isHash && location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(targetHash);
      if (el) {
        const offset = 80;
        const targetPos = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
        window.history.pushState(null, '', `#${targetHash}`);
      }
    }
  };

  return (
    <ChakraLink
      as={RouterLink}
      to={href}
      onClick={handleClick}
      fontSize="14px"
      fontWeight={500}
      color={isActive ? '#FFFFFF' : colors.text.secondary}
      position="relative"
      py="8px"
      px="12px"
      borderRadius="8px"
      transition="all 0.25s ease"
      _hover={{
        color: '#FFFFFF',
        textDecoration: 'none',
        bg: 'rgba(255, 255, 255, 0.05)',
      }}
      _after={
        isActive
          ? {
            content: '""',
            position: 'absolute',
            bottom: '2px',
            left: '12px',
            right: '12px',
            height: '2px',
            backgroundColor: colors.accent.primary,
            borderRadius: '2px',
          }
          : undefined
      }
      {...props}
    >
      {label}
    </ChakraLink>
  );
};
