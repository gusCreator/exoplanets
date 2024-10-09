import Input from '@/components/form/input/Input';
import SelectLanguage from '@/components/languages/SelectLanguage';
import TextButton from '@/components/buttons/TextButton';
import { FaHouse } from 'react-icons/fa6';
import UserAuth from '@/components/user/UserAuth';

export default function Home() {
  return (
    <h1>
      <TextButton leftIcon={FaHouse} content="Hola" />
      <Input label="Hola" name="other" />
      <SelectLanguage showLabel />
      <UserAuth />
    </h1>
  );
}
