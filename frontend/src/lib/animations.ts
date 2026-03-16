/* Cloudflare-style motion: calm, crisp, consistent */

export const easeSmooth = [0.22, 1, 0.36, 1] as const;
export const durationFast = 0.2;
export const durationNormal = 0.4;
export const durationSlow = 0.55;

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

/** Scroll reveal: subtle fade + slide, once */
export const scrollReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeSmooth },
  },
};

export const scrollRevealTransition = { duration: 0.5, ease: easeSmooth };
