export const spacing = {
  xs: '8px',
  sm: '16px',
  md: '30px',
  lg: '40px',
  xl: '96px',
  container: 'clamp(1rem, 4vw, 5rem)',
} as const;

export const radii = {
  none: '0px',
  sm: '8px',
  md: '20px',
  lg: '27px',
  xl: '9999px',
  full: '9999px',
} as const;

export const shadows = {
  accentGlow: '0 0 25px rgba(139, 92, 246, 0.45)',
  accentGlowLg: '0 0 50px rgba(139, 92, 246, 0.3)',
  card: '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
  cardHover: '0 20px 40px -15px rgba(139, 92, 246, 0.25)',
} as const;

export const transitions = {
  default: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  slow: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  fast: 'all 0.15s ease-out',
} as const;

export const breakpoints = {
  base: '0px',
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
