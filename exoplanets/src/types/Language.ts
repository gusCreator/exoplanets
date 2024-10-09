import { Option } from '@/components/form/select/types';
import { Locale } from '@/i18n/routing';

export default interface Language {
  languageAbbr: Locale;
  languageName: string;
}

export interface OptionLang extends Language, Option { }
