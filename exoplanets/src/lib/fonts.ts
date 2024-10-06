import { Orbitron, Audiowide, Exo_2 } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});
const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-audiowide',
});
const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-exo',
});

export { orbitron, audiowide, exo2 };
