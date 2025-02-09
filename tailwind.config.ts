import { type Config } from 'tailwindcss';

const config: Config = {
  content: ['./App.{js,jsx,ts,tsx}', './index.html', './src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
    },
    extend: {
      colors: {
        'custom-neutral': {
          1: '#f7f8fa',
        },
        'green-neon': {
          100: '#E7FDDC',
          200: '#CCF1B9',
          300: '#B1E597',
          400: '#96D974',
          500: '#7ACD51',
          600: '#5FC12F',
          700: '#44B50C',
          800: '#3B9C3F',
          900: '#188920',
        },
      },
    },
  },
};

export default config;
