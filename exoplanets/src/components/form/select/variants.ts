import { Variants } from 'framer-motion';

export const boxVariants: Variants = {
  open: { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0% round 10px)' },
  closed: { opacity: 0, y: -10, clipPath: 'inset(10% 50% 90% 50% round 10px)' },
};
export const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
