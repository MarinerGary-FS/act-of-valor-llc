'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Duration tokens (in seconds for framer-motion)
export const DURATIONS = {
  instant: 0,
  fast: 0.1,
  normal: 0.2,
  moderate: 0.3,
  slow: 0.5,
  deliberate: 0.7,
  cinematic: 1,
} as const;

// Easing presets
export const EASINGS = {
  standard: [0.4, 0, 0.2, 1],
  decelerate: [0, 0, 0.2, 1],
  accelerate: [0.4, 0, 1, 1],
} as const;

export const SPRINGS = {
  spring: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 30,
  },
  springGentle: {
    type: 'spring' as const,
    stiffness: 150,
    damping: 25,
  },
};

// Transition presets
export const transition = {
  standard: {
    duration: DURATIONS.normal,
    ease: EASINGS.standard,
  },
  spring: SPRINGS.spring,
  springGentle: SPRINGS.springGentle,
  slow: {
    duration: DURATIONS.slow,
    ease: EASINGS.standard,
  },
  deliberate: {
    duration: DURATIONS.deliberate,
    ease: EASINGS.standard,
  },
} as const;

// Named animation variants

/**
 * Fade in and slide up: opacity 0, y 20 → opacity 1, y 0
 * Default duration: 0.5s with standard easing
 */
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.slow,
      ease: EASINGS.standard,
    },
  },
};

/**
 * Larger fade and slide up for hero elements: opacity 0, y 40 → opacity 1, y 0
 * Default duration: 0.7s (deliberate) with standard easing
 */
export const fadeUpHero = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.deliberate,
      ease: EASINGS.standard,
    },
  },
};

/**
 * Opacity-only transition
 * Fast in (0.2s), faster out (0.15s)
 */
export const fadeOnly = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.standard,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: EASINGS.accelerate,
    },
  },
};

/**
 * Scale in for modals: opacity 0 + scale 0.95 → opacity 1, scale 1
 */
export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.standard,
    },
  },
};

/**
 * Slide from right: x 100% → x 0
 * For mobile menu and drawer animations
 */
export const slideFromRight = {
  hidden: {
    x: '100%',
  },
  visible: {
    x: 0,
    transition: {
      duration: DURATIONS.moderate,
      ease: EASINGS.standard,
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: DURATIONS.moderate,
      ease: EASINGS.accelerate,
    },
  },
};

/**
 * Container variant with staggered children
 * Stagger delay: 0.1s between children
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * Container variant with faster staggered children
 * Stagger delay: 0.06s between children
 */
export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

/**
 * Hook for scroll-triggered reveal animations
 * Returns ref to attach to element and inView boolean
 * Triggers when element is within -20% viewport margin
 */
export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-20%' });

  return { ref, inView };
}
