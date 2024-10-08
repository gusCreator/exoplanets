import Input from '@/components/form/input/Input';
import SelectLanguage from '@/components/form/select/SelectLanguage';
import TextButton from '@/components/ui/TextButton';
import { Locale } from '@/i18n/routing';
import { FaHouse } from 'react-icons/fa6';

export default async function Home({
  params: { locale },
}: Readonly<{ params: { locale: Locale } }>) {
  return (
    <h1>
      <TextButton leftIcon={FaHouse} content="Hola" />
      <Input label="Hola" name="other" />
      <SelectLanguage label="Seleccionar idioma" defaultLocale={locale} />
    </h1>
  );
}
