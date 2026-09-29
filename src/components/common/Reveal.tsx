import React, { useEffect, useRef } from 'react';
import { Box, type BoxProps } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../../hooks/useReducedMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface RevealProps extends BoxProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  duration = 0.75,
  yOffset = 30,
  ...boxProps
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, duration, yOffset, prefersReducedMotion]);

  return (
    <Box ref={containerRef} {...boxProps}>
      {children}
    </Box>
  );
};
