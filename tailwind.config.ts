import { type Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  plugins: [
    plugin((api) => {
      api.addUtilities({
        '.scrollbar-hidden': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
    }),
  ],
  content: ['./App.{js,jsx,ts,tsx}', './index.html', './src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
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
