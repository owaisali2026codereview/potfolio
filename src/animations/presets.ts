import { gsap } from 'gsap';

export const animationTiming = {
  fast: 0.25,
  medium: 0.5,
  slow: 0.8,
  deliberate: 1.2,
  ease: 'power3.out',
  easeBack: 'back.out(1.7)',
  easeSmooth: 'power2.inOut',
};

/**
 * Fade up entrance animation for DOM elements
 */
export function fadeUp(element: Element | Element[] | string, delay = 0, distance = 30) {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: distance,
    },
    {
      opacity: 1,
      y: 0,
      duration: animationTiming.medium,
      delay,
      ease: animationTiming.ease,
      clearProps: 'transform',
    }
  );
}

/**
 * Staggered fade in for lists/cards
 */
export function staggerFadeUp(elements: Element[] | string, stagger = 0.1, delay = 0) {
  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 25,
    },
    {
      opacity: 1,
      y: 0,
      duration: animationTiming.medium,
      stagger,
      delay,
      ease: animationTiming.ease,
      clearProps: 'transform',
    }
  );
}

/**
 * Scale and reveal
 */
export function scaleReveal(element: Element | string, delay = 0) {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.9,
    },
    {
      opacity: 1,
      scale: 1,
      duration: animationTiming.slow,
      delay,
      ease: animationTiming.easeBack,
    }
  );
}
