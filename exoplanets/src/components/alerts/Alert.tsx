import React from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { FaXmark } from 'react-icons/fa6';
import { AlertOptions } from '@/lib/hooks';

export interface AlertProps {
  alertOptions: AlertOptions;
  isVisible: boolean;
  hideAlert: () => void;
}

export default function Alert({
  alertOptions, isVisible, hideAlert,
}: AlertProps) {
  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  const baseStyle = 'fixed top-0 right-0 rounded-md border-2 max-w-56 w-fit p-3 shadow-lg z-50 flex gap-2 m-1.5 text-sm font-exo';
  const determinateStyle = clsx({
    'bg-green-dark text-green border-green': alertOptions.type === 'success',
    'bg-red-dark text-red border-red': alertOptions.type === 'error',
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="modal"
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
          variants={variants}
          className={twMerge(
            baseStyle,
            determinateStyle,
          )}
        >
          <span>{alertOptions.message}</span>
          <FaXmark
            onClick={hideAlert}
            className="cursor-pointer"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
