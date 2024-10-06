import TextButton from '@/components/ui/TextButton';
import { FaHouse } from 'react-icons/fa6';

export default function Home() {
  return (
    <h1>
      <TextButton leftIcon={FaHouse} content="Hola" />
    </h1>
  );
}
