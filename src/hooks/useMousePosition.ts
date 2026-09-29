import { useState, useEffect } from 'react';

export interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        setMousePosition({
          x: clientX,
          y: clientY,
          normalizedX: (clientX / innerWidth) * 2 - 1,
          normalizedY: -(clientY / innerHeight) * 2 + 1,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
}
