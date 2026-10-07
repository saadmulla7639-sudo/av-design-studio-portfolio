import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        luxury: {
          50: '#f8f4ef',
          100: '#efe3d2',
          200: '#dfc7a7',
          300: '#d0a97b',
          400: '#b8865f',
          500: '#9a6a49',
          600: '#7f533c',
          700: '#663e32',
          800: '#2c231d',
          900: '#171310',
        },
      },
      boxShadow: {
        glow: '0 24px 60px rgba(10, 10, 10, 0.18)',
      },
      backgroundImage: {
        grain: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};

export default config;
