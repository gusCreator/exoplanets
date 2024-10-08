import { LiHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import Image, { } from 'next/image';
import Language from '@/types/Language';
import { Link, usePathname } from '@/i18n/routing';

interface OptionSelectProps extends LiHTMLAttributes<HTMLLIElement>, Language {
  handleSelect?: (lang: Language) => void;
}

export default function OptionLanguage({
  languageAbbr, languageName, handleSelect, ...props
}: OptionSelectProps) {
  const pathname = usePathname();
  const handleSelection = () => {
    if (handleSelect) {
      handleSelect({ languageAbbr, languageName });
    }
  };
  const baseStyle = 'cursor-pointer flex gap-2 justify-center items-center w-fit p-2 font-exo text-secondary';
  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li
      className={twMerge(baseStyle, props.className)}
      onClick={handleSelection}
      {...props}
    >
      <Link
        href={pathname}
        hrefLang={languageAbbr}
        locale={languageAbbr}
      >
        <Image
          src={`/img/${languageAbbr}.svg`}
          width={20}
          height={20}
          alt={languageName}
        />
        <span>
          {languageName}
        </span>

      </Link>
    </li>
  );
}
