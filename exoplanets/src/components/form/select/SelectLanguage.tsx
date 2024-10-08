'use client';

import { HTMLAttributes, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa6';
import Language from '@/types/Language';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE, DEFAULT_LOCALE } from '@/constants/defaults';
import { Locale } from '@/i18n/routing';
import OptionLanguage from './OptionLanguage';

interface SelectProps extends HTMLAttributes<HTMLUListElement> {
  label?: string;
  defaultLocale?: Locale;
}

export default function SelectLanguage({
  label, defaultLocale = DEFAULT_LOCALE, ...props
}: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const defaultLanguage = AVAILABLE_LANGUAGES.find(
    (lang: Language) => lang.languageAbbr === defaultLocale,
  ) || DEFAULT_LANGUAGE;
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(defaultLanguage);
  const baseStyle = 'flex flex-col gap-1 justify-center w-fit p-3';
  const handleClickList = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (lang: Language) => {
    setSelectedLanguage(lang);
  };
  return (
    <div className={baseStyle}>
      {label && (
        <p
          className="font-audiowide text-primary text-xl"
        >
          {label}
        </p>
      )}
      <button
        type="button"
        onClick={handleClickList}
        className="flex items-center text-secondary"
      >
        <OptionLanguage key="selected-language" {...selectedLanguage} />
        <FaAngleDown />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="languages"
            {...props}
          >
            {
              AVAILABLE_LANGUAGES
                .filter((lang: Language) => selectedLanguage.languageAbbr !== lang.languageAbbr)
                .map((lang: Language) => (
                  <OptionLanguage key={lang.languageAbbr} handleSelect={handleSelect} {...lang} />
                ))
            }
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
