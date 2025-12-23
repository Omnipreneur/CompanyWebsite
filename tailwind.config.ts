import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#705CF2',
          light: '#8B7AF5',
          dark: '#5A4AC9',
        },
        blue: {
          1: '#2E83F2',
          2: '#3098F2',
          3: '#35BDF2',
        },
        ink: '#0D0D0D',
        background: '#F7F8FA',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #705CF2 0%, #2E83F2 35%, #3098F2 60%, #35BDF2 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;

