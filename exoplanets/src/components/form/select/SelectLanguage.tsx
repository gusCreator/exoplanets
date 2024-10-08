'use client';

import { useState } from 'react';
import {
  AnimatePresence, motion, Variants,
} from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa6';
import Language from '@/types/Language';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE, DEFAULT_LOCALE } from '@/constants/defaults';
import { Locale } from '@/i18n/routing';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import OptionLanguage from './OptionLanguage';

interface SelectProps {
  label?: string;
  defaultLocale?: Locale;
  className?: string
}

export default function SelectLanguage({
  label, defaultLocale = DEFAULT_LOCALE, className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const defaultLanguage = AVAILABLE_LANGUAGES.find(
    (lang: Language) => lang.languageAbbr === defaultLocale,
  ) || DEFAULT_LANGUAGE;
  const [selectedLanguage] = useState<Language>(defaultLanguage);
  const handleClickList = () => {
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
          onClick={handleClickList}
          onBlur={handleClickList}
          className={twMerge(clsx(
            'flex items-center gap-1 transition-colors hover:text-primary',
            {
              'text-primary': isOpen,
            },
          ), className)}
        >
          <OptionLanguage key="selected-language" {...selectedLanguage} />
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
              key="languages"
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
              className="flex flex-col bg-tertiary rounded-md"
            >
              {
                AVAILABLE_LANGUAGES
                  .filter((lang: Language) => selectedLanguage.languageAbbr !== lang.languageAbbr)
                  .map((lang: Language) => (
                    <motion.li
                      key={lang.languageAbbr}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={itemVariants}
                      className="hover:text-primary transition-colors"
                    >
                      <OptionLanguage {...lang} />
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
