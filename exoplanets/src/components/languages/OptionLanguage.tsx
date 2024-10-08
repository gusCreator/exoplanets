'use client';

import { twMerge } from 'tailwind-merge';
import Image, { } from 'next/image';
import { Link, usePathname } from '@/i18n/routing';
import { OptionLang } from './types';

interface OptionLangProps {
  option: OptionLang;
  onSelect?: () => void;
}

export default function OptionLanguage({
  option, onSelect,
}: OptionLangProps) {
  const pathname = usePathname();
  const baseStyle = 'cursor-pointer flex gap-2 justify-center items-center w-fit p-2 font-exo';
  return (
    <Link
      hrefLang={option.languageAbbr}
      locale={option.languageAbbr}
      className={twMerge(baseStyle)}
      href={pathname}
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

    </Link>
  );
}
