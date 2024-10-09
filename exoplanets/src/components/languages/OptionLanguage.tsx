'use client';

import { twMerge } from 'tailwind-merge';
import Image, { } from 'next/image';
import { OptionLang } from '@/types/Language';

interface OptionLangProps {
  option: OptionLang;
  onSelect?: () => void;
}

export default function OptionLanguage({
  option, onSelect,
}: OptionLangProps) {
  const baseStyle = 'cursor-pointer flex gap-2 justify-center items-center w-fit p-2 font-exo';
  const Comp = onSelect ? 'button' : 'div';
  return (
    <Comp
      type="button"
      className={twMerge(baseStyle)}
      onClick={onSelect}
    >
      <Image
        src={`/img/${option.languageAbbr}.svg`}
        width={20}
        height={20}
        alt={option.languageName}
      />
      <span>
        {option.languageName}
      </span>

    </Comp>
  );
}
