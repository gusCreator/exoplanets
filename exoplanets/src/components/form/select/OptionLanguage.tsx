import { twMerge } from 'tailwind-merge';
import Image, { } from 'next/image';
import Language from '@/types/Language';
import { Link, usePathname } from '@/i18n/routing';

interface OptionSelectProps extends Language {
}

export default function OptionLanguage({
  languageAbbr, languageName,
}: OptionSelectProps) {
  const pathname = usePathname();
  const baseStyle = 'cursor-pointer flex gap-2 justify-center items-center w-fit p-2 font-exo';
  return (
    <Link
      hrefLang={languageAbbr}
      locale={languageAbbr}
      className={twMerge(baseStyle)}
      href={pathname}
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
  );
}
