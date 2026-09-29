import type { ComponentStyleConfig } from '@chakra-ui/react';
import { colors } from './colors';
import { radii } from './tokens';

export const ButtonStyles: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 500,
    fontFamily: `'Poppins', sans-serif`,
    borderRadius: radii.lg,
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: 'pointer',
    _focusVisible: {
      boxShadow: `0 0 0 3px ${colors.accent.primary}`,
      outline: 'none',
    },
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
  },
  variants: {
    primary: {
      bg: colors.accent.primary,
      color: '#FFFFFF',
      px: '27px',
      py: '21px',
      h: '54px',
      fontSize: '16px',
      boxShadow: '0 4px 20px rgba(139, 92, 246, 0.35)',
      _hover: {
        bg: colors.accent.secondary,
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 30px rgba(139, 92, 246, 0.55)',
        _disabled: {
          bg: colors.accent.primary,
          transform: 'none',
        },
      },
      _active: {
        transform: 'translateY(0px)',
        bg: colors.accent.primary,
      },
    },
    secondary: {
      bg: 'transparent',
      color: '#FFFFFF',
      border: `1px solid ${colors.border.visible}`,
      px: '27px',
      py: '21px',
      h: '54px',
      fontSize: '16px',
      _hover: {
        borderColor: colors.accent.highlight,
        bg: 'rgba(139, 92, 246, 0.08)',
        transform: 'translateY(-2px)',
        boxShadow: '0 0 20px rgba(139, 92, 246, 0.25)',
      },
      _active: {
        transform: 'translateY(0px)',
        bg: 'rgba(139, 92, 246, 0.15)',
      },
    },
    ghost: {
      bg: 'transparent',
      color: colors.text.secondary,
      _hover: {
        color: '#FFFFFF',
        bg: 'rgba(255, 255, 255, 0.05)',
      },
    },
    outlineBadge: {
      bg: 'rgba(139, 92, 246, 0.08)',
      color: colors.accent.highlight,
      border: `1px solid rgba(139, 92, 246, 0.25)`,
      borderRadius: radii.full,
      fontSize: '13px',
      fontWeight: 500,
      px: '14px',
      py: '6px',
      h: 'auto',
      _hover: {
        borderColor: colors.accent.primary,
        bg: 'rgba(139, 92, 246, 0.16)',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
};
