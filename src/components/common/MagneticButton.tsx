import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { Button, type ButtonProps } from '@chakra-ui/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface MagneticButtonProps extends ButtonProps {
  magneticStrength?: number;
  children: React.ReactNode;
}

export const MagneticButton = forwardRef<HTMLElement, MagneticButtonProps>(
  ({ magneticStrength = 0.25, children, onClick, style, ...buttonProps }, ref) => {
    const internalRef = useRef<HTMLElement>(null);
    useImperativeHandle(ref, () => internalRef.current as HTMLElement);

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const prefersReducedMotion = useReducedMotion();

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
      if (prefersReducedMotion || !internalRef.current) return;
      const { left, top, width, height } = internalRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distanceX = (e.clientX - centerX) * magneticStrength;
      const distanceY = (e.clientY - centerY) * magneticStrength;

      setPosition({ x: distanceX, y: distanceY });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    const isResting = position.x === 0 && position.y === 0;

    return (
      <Button
        ref={internalRef as React.Ref<any>}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          ...style,
          transform: prefersReducedMotion
            ? 'none'
            : `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isResting
            ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
            : 'transform 0.08s ease-out, background-color 0.25s ease, border-color 0.25s ease',
        }}
        {...buttonProps}
      >
        {children}
      </Button>
    );
  }
);

MagneticButton.displayName = 'MagneticButton';
