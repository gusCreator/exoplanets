import User from '@/types/User';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Interactivetext from '../ui/InteractiveText';
import UserBox from './UserBox';

export default function UserAuth() {
  const t = useTranslations('components.user');
  // Esperar por los datos await
  const user: User = {
    email: 'lsequeiros@unsa.edu.pe',
    lastNames: 'Sequeiros Condori',
    names: 'Luis Gustavo',
    photo: '/img/es.svg',
    username: 'gusCreator',
  };
  if (user) {
    return (
      <UserBox username={user.username} photo={user.photo} />
    );
  }
  return (
    <Interactivetext
      leftGraphic={Image}
      lgProps={{
        src: '/img/google.svg', width: 20, height: 20, alt: t('profileImage'),
      }}
      content={t('login')}
      className="gap-1"
    />
  );
}
