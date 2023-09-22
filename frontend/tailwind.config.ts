import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#4C4F6A',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
        smrtGray: '#444444',
        smrtBlack: '#282C4B',
        footerTitle: '#7DD5B3',
        grad2: '#C6EBC6',
        footerBg: '#1D293C',
        transDesc: '#9495A6',
        chosenQuestion: '#60A6EA',
        modalBg: '#0000004D',
        practiceGray: '#9495A6',
        practiceBorderGray: '#C0C0C0',
        subscribeButton: '#1D293C',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
