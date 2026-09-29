import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function initScrollReveal(element: HTMLElement | string, options = {}) {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
        ...options,
      },
    }
  );
}

export function initStaggerReveal(container: HTMLElement | string, itemSelector: string, stagger = 0.15) {
  return gsap.fromTo(
    itemSelector,
    {
      opacity: 0,
      y: 35,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
}
