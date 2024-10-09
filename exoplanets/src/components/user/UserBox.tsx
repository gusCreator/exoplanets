'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import BoxDown from '../form/select/BoxDown';
import OptionUser from './OptionUser';
import HeaderUserBox from './HeaderUserBox';

export default function UserBox() {
  const t = useTranslations('components.user');
  const router = useRouter();
  const handleProfile = () => {
    router.push('/profile');
  };
  const handleLogout = () => {
    console.log('Cerró sesión');
  };
  return (
    <BoxDown
      headerBox={HeaderUserBox}
      headerBoxProps={{ title: 'Luis Gustavo', invertedStyle: true, image: '/img/en.svg' }}
    >
      <OptionUser option={{ unique: 'profile', display: t('profile') }} onSelect={handleProfile} />
      <OptionUser option={{ unique: 'logout', display: t('logout') }} onSelect={handleLogout} />
    </BoxDown>
  );
}
