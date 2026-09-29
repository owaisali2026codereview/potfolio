import React, { useEffect, useRef } from 'react';
import { Box, type BoxProps } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../../hooks/useReducedMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface SplitTextProps extends BoxProps {
  text: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  delay = 0,
  as = 'h2',
  ...boxProps
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(' ');

  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion) return;

    const wordElements = el.querySelectorAll('.split-word');
    if (!wordElements.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordElements,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, prefersReducedMotion, text]);

  if (prefersReducedMotion) {
    return (
      <Box as={as} {...boxProps}>
        {text}
      </Box>
    );
  }

  return (
    <Box ref={containerRef} as={as} display="inline-block" {...boxProps} aria-label={text}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="split-word"
          style={{
            display: 'inline-block',
            marginRight: '0.28em',
            willChange: 'transform, opacity',
          }}
        >
          {word}
        </span>
      ))}
    </Box>
  );
};
