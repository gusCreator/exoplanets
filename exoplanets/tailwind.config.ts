import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        red: 'var(--red)',
        green: 'var(--green)',
      },
      keyframes: {
        moveBackground: {
          '0%': {
            top: '0%', left: '0%', transform: 'translate(0, 0)',
          }, // Esquina superior izquierda
          '30%': {
            top: '0%', left: '100%', transform: 'translate(-100%, 0)',
          }, // Esquina superior derecha
          '50%': {
            top: '100%', left: '100%', transform: 'translate(-100%, -100%)',
          }, // Esquina inferior derecha
          '80%': {
            top: '100%', left: '0%', transform: 'translate(0, -100%)',
          }, // Esquina inferior izquierda
          '100%': {
            top: '0%', left: '0%', transform: 'translate(0, 0)',
          }, // Regresa a la esquina superior izquierda
        },
      },
      animation: {
        corners: 'moveBackground 20s 3s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
