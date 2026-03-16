/* Cloudflare-style motion: single source of truth, calm, crisp */

export const easeSmooth = [0.22, 1, 0.36, 1] as const;
export const durationFast = 0.2;
export const durationNormal = 0.4;
export const durationSlow = 0.55;

/** Sitewide scroll reveal: one duration, one stagger step */
export const REVEAL_DURATION = 0.5;
export const REVEAL_STAGGER = 0.08;
export const REVEAL_Y = 24;
export const REVEAL_MARGIN = "-60px";

export function fadeUp(delay = 0, y = 20) {
  return {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: durationSlow, delay, ease: easeSmooth },
    },
  };
}

export const sectionHeading = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export const sectionHeadingSub = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export const defaultTransition = { duration: durationNormal, ease: easeSmooth };

/** Scroll reveal: single system used everywhere */
export const scrollReveal = {
  hidden: { opacity: 0, y: REVEAL_Y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: easeSmooth },
  },
};

export const scrollRevealTransition = { duration: REVEAL_DURATION, ease: easeSmooth };

/** Stagger container: use with motion.div + variants, children use scrollRevealStaggerItem */
export const scrollRevealStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: REVEAL_STAGGER,
      delayChildren: 0.1,
    },
  },
};

export const scrollRevealStaggerItem = {
  hidden: { opacity: 0, y: REVEAL_Y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: easeSmooth },
  },
};
