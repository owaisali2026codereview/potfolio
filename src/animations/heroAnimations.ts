import { gsap } from 'gsap';

export interface HeroAnimationRefs {
  roleLabel: HTMLElement | null;
  nameDisplay: HTMLElement | null;
  description: HTMLElement | null;
  ctaButtons: HTMLElement | null;
  portrait: HTMLElement | null;
  orbitContainer: HTMLElement | null;
  backgroundGlow: HTMLElement | null;
}

export function playHeroTimeline(refs: HeroAnimationRefs, isReducedMotion = false): gsap.core.Timeline {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  if (isReducedMotion) {
    // Immediate clean reveal without motion
    gsap.set(
      [
        refs.backgroundGlow,
        refs.roleLabel,
        refs.nameDisplay,
        refs.description,
        refs.ctaButtons,
        refs.portrait,
        refs.orbitContainer,
      ].filter(Boolean),
      { opacity: 1, y: 0, scale: 1 }
    );
    return tl;
  }

  // Section 17 Timeline:
  // 0ms Background appears
  if (refs.backgroundGlow) {
    tl.fromTo(
      refs.backgroundGlow,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.0 },
      0
    );
  }

  // 300ms Small role label appears
  if (refs.roleLabel) {
    tl.fromTo(
      refs.roleLabel,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.3
    );
  }

  // 450ms Name reveal begins
  if (refs.nameDisplay) {
    tl.fromTo(
      refs.nameDisplay,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.65 },
      0.45
    );
  }

  // 650ms Description appears
  if (refs.description) {
    tl.fromTo(
      refs.description,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.55 },
      0.65
    );
  }

  // 800ms CTA buttons appear
  if (refs.ctaButtons) {
    tl.fromTo(
      refs.ctaButtons,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.8
    );
  }

  // 950ms Portrait reveals
  if (refs.portrait) {
    tl.fromTo(
      refs.portrait,
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 0.75, ease: 'back.out(1.4)' },
      0.95
    );
  }

  // 1100ms Technology orbit begins
  if (refs.orbitContainer) {
    tl.fromTo(
      refs.orbitContainer,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.8 },
      1.1
    );
  }

  return tl;
}
