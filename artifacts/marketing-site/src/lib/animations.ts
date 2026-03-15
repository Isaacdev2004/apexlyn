export const easeSmooth = [0.22, 1, 0.36, 1] as const;

export function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay, ease: easeSmooth },
    },
  };
}

export const sectionHeading = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export const sectionHeadingSub = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export const defaultTransition = { duration: 0.55, ease: easeSmooth };
