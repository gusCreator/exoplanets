import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '@/constants/defaults';
import { useLocale } from 'next-intl';
import Language from '@/types/Language';
import Select from '../form/select/Select';
import OptionLanguage from './OptionLanguage';
import { OptionLang } from './types';

export default function SelectLanguage() {
  const locale = useLocale();
  const languages: OptionLang[] = AVAILABLE_LANGUAGES
    .filter((lang: Language) => lang.languageAbbr !== locale)
    .map((lang: Language) => ({ unique: lang.languageAbbr, ...lang }));
  const defLanguage = AVAILABLE_LANGUAGES
    .find((lang: Language) => lang.languageAbbr === locale) || DEFAULT_LANGUAGE;
  const defOption: OptionLang = { unique: defLanguage.languageAbbr, ...defLanguage };
  return (
    <Select
      options={languages}
      def={defOption}
      comp={OptionLanguage}
    />
  );
}
