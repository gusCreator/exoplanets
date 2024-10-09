'use client';

import React, { useState, ReactNode } from 'react';
import {
  AnimatePresence, motion,
} from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa6';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { boxVariants, itemVariants } from './variants';
import DefaultHeaderBox from './DefaultHeaderBox';
import { HeaderBoxProps, Option } from './types';
import { isOptionElement } from './utils';

interface BoxProps<T extends HeaderBoxProps> {
  headerBox?: React.ComponentType<T>;
  headerBoxProps: T;
  className?: string;
  children: ReactNode;
}

export default function BoxDown<T extends HeaderBoxProps, O extends Option>({
  headerBox: HeaderBox = DefaultHeaderBox,
  headerBoxProps,
  className,
  children,
}: BoxProps<T>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const baseStyle = 'flex flex-col gap-1 justify-center w-fit p-3';

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className={baseStyle}
    >
      <motion.button
        type="button"
        onClick={handleOpen}
        onBlur={() => setIsOpen(false)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={twMerge(clsx(
          'flex items-center gap-1 transition-colors hover:text-primary text-secondary',
          {
            'text-primary': isOpen,
          },
        ), className)}
      >
        <div>
          <HeaderBox
            {...headerBoxProps}
          />
        </div>
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <FaAngleDown size={15} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key={headerBoxProps.title}
            initial="closed"
            animate="open"
            exit="closed"
            variants={boxVariants}
            className="flex flex-col bg-tertiary rounded-md"
          >
            {React.Children.map(children, (child) => (
              isOptionElement<O>(child) && (
                <motion.li
                  key={child?.toString()}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={itemVariants}
                  className="hover:text-primary transition-colors"
                >
                  {React.cloneElement(child, {
                    onSelect: () => {
                      setIsOpen(false); // Cerrar el menú al seleccionar
                      if (child.props.onSelect) {
                        child.props.onSelect();
                      }
                    },
                  })}
                </motion.li>
              )
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
