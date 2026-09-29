import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const CustomCursor: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === 'undefined' || prefersReducedMotion) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let isVisible = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible && wrapperRef.current) {
        isVisible = true;
        wrapperRef.current.style.opacity = '1';
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    // Smooth trailing ring loop without triggering React renders
    const loop = () => {
      // Linear interpolation for smooth trailing
      currentX += (mouseX - currentX) * 0.25;
      currentY += (mouseY - currentY) * 0.25;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    const onMouseLeave = () => {
      isVisible = false;
      if (wrapperRef.current) {
        wrapperRef.current.style.opacity = '0';
      }
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (wrapperRef.current) {
        wrapperRef.current.style.opacity = '1';
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || !wrapperRef.current) return;
      const isInteractive = Boolean(
        target.closest('a, button, input, textarea, select, [role="button"], .spotlight-card')
      );
      wrapperRef.current.classList.toggle('custom-cursor-hover', isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={wrapperRef}
      style={{
        opacity: 0,
        transition: 'opacity 0.2s ease',
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
      aria-hidden="true"
    >
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{
          willChange: 'transform',
        }}
      />
    </div>
  );
};
