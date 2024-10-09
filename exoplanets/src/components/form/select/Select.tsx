'use client';

import React, { useState, ReactNode } from 'react';
import {
  AnimatePresence, motion,
} from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa6';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Option, OptionProps } from './types'; // Asegúrate de importar estas interfaces
import { boxVariants, itemVariants } from './variants';
import DefaultOption from './DefaultOption';
import { isOptionElement } from './utils';

interface SelectProps<T extends Option> {
  label?: string;
  def: T;
  comp?: React.ComponentType<OptionProps<T>>;
  className?: string;
  children: ReactNode;
}

export default function Select<T extends Option>({
  label,
  def,
  className,
  children,
  comp: Comp = DefaultOption,
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<T>(def);

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
      {label && (
        <p className="font-audiowide text-primary text-xl">
          {label}
        </p>
      )}
      <div className="flex flex-col w-fit text-secondary">
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
            <FaAngleDown size={15} />
          </motion.div>
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              key={label}
              initial="closed"
              animate="open"
              exit="closed"
              variants={boxVariants}
              className="flex flex-col bg-tertiary rounded-md"
            >
              {/* Renderizamos los children aquí */}
              {React.Children.map(children, (child) => (
                isOptionElement<T>(child) && child.props.option.unique !== selected.unique && (
                  <motion.li
                    key={child.key} // Asegúrate de que cada child tenga una key única
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={itemVariants}
                    className="hover:text-primary transition-colors"
                  >
                    {React.cloneElement(child, {
                      onSelect: () => {
                        setSelected(child.props.option); // Establece el elemento seleccionado
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
      </div>
    </motion.div>
  );
}
