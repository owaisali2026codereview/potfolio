import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { colors } from './colors';
import { typography } from './typography';
import { spacing, radii, shadows, breakpoints } from './tokens';
import { ButtonStyles } from './componentStyles';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles: {
    global: {
      'html, body': {
        background: colors.background.primary,
        color: colors.text.primary,
        fontFamily: typography.fonts.body,
        overflowX: 'hidden',
        scrollBehavior: 'smooth',
      },
      '::selection': {
        background: colors.accent.primary,
        color: '#FFFFFF',
      },
      '*': {
        borderColor: colors.border.subtle,
      },
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-track': {
        background: colors.background.primary,
      },
      '::-webkit-scrollbar-thumb': {
        background: 'rgba(139, 92, 246, 0.4)',
        borderRadius: '4px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: colors.accent.primary,
      },
    },
  },
  colors: {
    bg: {
      primary: colors.background.primary,
      secondary: colors.background.secondary,
    },
    surface: {
      primary: colors.surface.primary,
      secondary: colors.surface.secondary,
      card: colors.surface.card,
    },
    brand: {
      50: '#F5F3FF',
      100: '#EDE9FE',
      200: '#DDD6FE',
      300: '#C4B5FD',
      400: '#A78BFA',
      500: '#8B5CF6',
      600: '#7C3AED',
      700: '#6D28D9',
      800: '#5B21B6',
      900: '#4C1D95',
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      muted: colors.text.muted,
    },
    border: {
      subtle: colors.border.subtle,
      visible: colors.border.visible,
      accent: colors.border.accent,
    },
  },
  fonts: typography.fonts,
  space: spacing,
  radii,
  shadows,
  breakpoints,
  components: {
    Button: ButtonStyles,
  },
});

export * from './colors';
export * from './typography';
export * from './tokens';
