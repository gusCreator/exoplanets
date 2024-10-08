'use client';

import React, { useState } from 'react';
import {
  AnimatePresence, motion, Variants,
} from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa6';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Option } from './types';

interface SelectProps<T extends Option> {
  label?: string;
  def: T;
  comp?: React.ComponentType<{ option: T, onSelect?: () => void }>
  options: T[];
  className?: string;
}

export default function Select<T extends Option>({
  label, def, options, className, comp,
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<T>(def);
  const defComp = ({ option, onSelect }: { option: T; onSelect?: () => void }) => (
    <button
      type="button"
      onClick={onSelect}
      className="cursor-pointer"
    >
      <p>{option.unique}</p>
    </button>
  );
  const Comp = comp || defComp;
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const variants: Variants = {
    open: { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0% round 10px)' },
    closed: { opacity: 0, y: -10, clipPath: 'inset(10% 50% 90% 50% round 10px)' },
  };
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  const baseStyle = 'flex flex-col gap-1 justify-center w-fit p-3';
  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className={baseStyle}
    >
      {label && (
        <p
          className="font-audiowide text-primary text-xl"
        >
          {label}
        </p>
      )}
      <div
        className="flex flex-col w-fit text-secondary"
      >
        <motion.button
          type="button"
          onClick={handleOpen}
          onBlur={() => setIsOpen(false)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className={twMerge(clsx(
            'flex items-center gap-1 transition-colors hover:text-primary',
            {
              'text-primary': isOpen,
            },
          ), className)}
        >
          <Comp option={selected} />
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <FaAngleDown
              size={15}
            />
          </motion.div>
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              key={label}
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
              className="flex flex-col bg-tertiary rounded-md"
            >
              {
                options
                  .filter((option: T) => option !== selected)
                  .map((option: T) => (
                    <motion.li
                      key={option.unique}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={itemVariants}
                      className="hover:text-primary transition-colors"
                    >
                      <Comp option={option} onSelect={() => setSelected(option)} />
                    </motion.li>
                  ))
              }
            </motion.ul>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}
