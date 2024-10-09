'use client';

import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '@/constants/defaults';
import { useLocale, useTranslations } from 'next-intl';
import Language, { OptionLang } from '@/types/Language';
import { usePathname, useRouter } from '@/i18n/routing';
import Select from '../form/select/Select';
import OptionLanguage from './OptionLanguage';

interface SelectLanguageProps {
  showLabel: boolean;
}

export default function SelectLanguage({
  showLabel,
}: SelectLanguageProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('components.languages');
  const label = showLabel ? t('selectLang') : undefined;
  const languages: OptionLang[] = AVAILABLE_LANGUAGES
    .map((lang: Language) => ({ unique: lang.languageAbbr, ...lang }));
  const defLanguage = AVAILABLE_LANGUAGES
    .find((lang: Language) => lang.languageAbbr === locale) || DEFAULT_LANGUAGE;
  const defOption: OptionLang = { unique: defLanguage.languageAbbr, ...defLanguage };
  const pushLanguage = (lang: Language) => {
    router.replace(pathname, { locale: lang.languageAbbr });
  };
  return (
    <Select
      def={defOption}
      label={label}
      comp={OptionLanguage}
    >
      {
        languages.map((lang: OptionLang) => (
          <OptionLanguage key={lang.unique} option={lang} onSelect={() => pushLanguage(lang)} />
        ))
      }
    </Select>
  );
}
