import Input from '@/components/form/input/Input';
import SelectLanguage from '@/components/languages/SelectLanguage';
import InteractiveText from '@/components/ui/InteractiveText';
import { FaHouse } from 'react-icons/fa6';
import UserAuth from '@/components/user/UserAuth';

export default function Home() {
  return (
    <h1>
      <InteractiveText leftGraphic={FaHouse} lgProps={{}} content="Hola" />
      <Input label="Hola" name="other" />
      <SelectLanguage showLabel />
      <UserAuth />
    </h1>
  );
}
