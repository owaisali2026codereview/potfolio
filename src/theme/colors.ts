export const colors = {
  background: {
    primary: '#050505',
    secondary: '#0A0A0F',
    gradient: 'radial-gradient(circle at 50% 40%, rgba(139, 92, 246, 0.18), transparent 40%), linear-gradient(135deg, #050505 0%, #0A0A0F 50%, #050505 100%)',
  },
  surface: {
    primary: '#101017',
    secondary: '#15151F',
    card: 'rgba(16, 16, 23, 0.85)',
    cardHover: 'rgba(21, 21, 31, 0.95)',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#A7A7B3',
    muted: '#70707C',
  },
  accent: {
    primary: '#8B5CF6',
    secondary: '#A855F7',
    highlight: '#C084FC',
    glow: 'rgba(139, 92, 246, 0.35)',
    subtle: 'rgba(139, 92, 246, 0.12)',
  },
  border: {
    subtle: 'rgba(255, 255, 255, 0.08)',
    visible: 'rgba(255, 255, 255, 0.14)',
    accent: 'rgba(139, 92, 246, 0.4)',
    hover: 'rgba(192, 132, 252, 0.6)',
  },
  status: {
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  }
} as const;

export type ThemeColors = typeof colors;
