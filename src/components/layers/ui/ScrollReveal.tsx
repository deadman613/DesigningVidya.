import React, { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right' 
  | 'scale-up' 
  | 'scale-down'
  | 'blur-in'
  | 'slide-up'
  | 'rotate-in';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const animationClasses: Record<AnimationType, { initial: string; visible: string }> = {
  'fade-up': {
    initial: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    initial: 'opacity-0 -translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    initial: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    initial: 'opacity-0 -translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  'scale-up': {
    initial: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
  'scale-down': {
    initial: 'opacity-0 scale-105',
    visible: 'opacity-100 scale-100',
  },
  'blur-in': {
    initial: 'opacity-0 blur-sm',
    visible: 'opacity-100 blur-0',
  },
  'slide-up': {
    initial: 'opacity-0 translate-y-16',
    visible: 'opacity-100 translate-y-0',
  },
  'rotate-in': {
    initial: 'opacity-0 rotate-3 scale-95',
    visible: 'opacity-100 rotate-0 scale-100',
  },
};

export function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  className,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({
    threshold,
    triggerOnce: once,
  });

  const { initial, visible } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out will-change-transform',
        isVisible ? visible : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {children}
    </div>
  );
}

// Staggered reveal for lists/grids
interface StaggeredRevealProps {
  children: ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  duration?: number;
  className?: string;
  childClassName?: string;
}

export function StaggeredReveal({
  children,
  animation = 'fade-up',
  staggerDelay = 100,
  duration = 600,
  className,
  childClassName,
}: StaggeredRevealProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { initial, visible } = animationClasses[animation];

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          className={cn(
            'transition-all ease-out will-change-transform',
            isVisible ? visible : initial,
            childClassName
          )}
          style={{
            transitionDuration: `${duration}ms`,
            transitionDelay: `${index * staggerDelay}ms`,
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
