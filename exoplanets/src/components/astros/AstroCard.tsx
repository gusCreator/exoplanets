'use client';

import { defaultColor, invertedColor } from '@/styles/colors';
import { Astro } from '@/types/Astro';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';

interface AstroCardProps<T extends Astro> {
  astro: T;
  invertedStyle?: boolean;
  onClick: () => void;
  fontTitle: 'font-audiowide' | 'font-exo';
}

export default function AstroCard<T extends Astro>({
  astro, onClick, invertedStyle, fontTitle = 'font-exo',
}: AstroCardProps<T>) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const baseStyle = 'relative flex flex-col gap-3 p-4 border-primary hover:border-secondary transition-colors duration-200 ease-out hover:ease-out border-2 rounded-2xl drop-shadow-lg';
  const colors = invertedStyle ? invertedColor : defaultColor;
  const iconVariants: Variants = {
    initial: {
      x: 2,
      y: -2,
      opacity: 0,
      scale: 1.1,
      transition: { ease: 'easeOut' },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { ease: 'easeInOut' },
    },
    exit: {
      x: 2,
      y: -2,
      opacity: 0,
      scale: 1.1,
      transition: { ease: 'easeIn' },
    },
  };
  const buttonVariants: Variants = {
    ontap: {
      scale: 0.98,
      transition: { ease: 'easeOut' },
    },
    animate: {
      scale: 1,
      transition: { ease: 'easeInOut' },
    },
  };
  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      className={twMerge(baseStyle, colors, fontTitle)}
      whileTap="ontap"
      animate="animate"
      variants={buttonVariants}
    >
      <div
        className="relative w-full aspect-square rounded-full overflow-clip"
      >
        <Image
          src={astro.imageUrl}
          alt={astro.name}
          fill
          className="object-contain"
        />
      </div>
      <p>{astro.name}</p>
      <AnimatePresence>
        {
          isHover && (
            <motion.div
              className="absolute top-2 right-2"
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              variants={iconVariants}
            >
              <FiExternalLink />
            </motion.div>
          )
        }
      </AnimatePresence>
    </motion.button>
  );
}
