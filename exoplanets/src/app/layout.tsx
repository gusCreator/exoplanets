import type { Metadata } from 'next';
import { orbitron, audiowide, exo2 } from '@/lib/fonts';
import './globals.css';
import Background from '@/components/layout/Background';

export const metadata: Metadata = {
  title: 'Exoplanets',
  description: 'Un lugar donde explorarás el espacio',
  authors: [
    { name: 'Luis Gustavo Sequeiros Condori', url: 'https://github.com/gusCreator' },
    { name: 'Christian Raúl Mestas Zegarra', url: 'https://github.com/cmestasz' },
    { name: 'Ryan Fabian Valdivia Segovia', url: 'https://github.com/RyanValdivia/' },
    { name: 'Álvaro Raúl Quispe Condori', url: 'https://github.com/ALVARO-QUISPE-UNSA/' },
    { name: 'Diego Alejandro Carbajal González', url: 'https://github.com/Gocardi' },
  ],
  applicationName: 'Exoplanets',
  keywords: 'exoplanets space nasa hackaton',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${audiowide.variable} ${exo2.variable} antialiased`}
      >
        <Background />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
