import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1A1A1A',
        ground: '#F8F7F4',
        rule: '#DEDBD5',
        muted: '#8A8880',
        accent: '#2B4C7E',
        'accent-green': '#2E7D52',
        'aurora-blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        'aurora-indigo': {
          300: '#a5b4fc',
          400: '#818cf8',
        },
        'aurora-violet': {
          200: '#ddd6fe',
          300: '#c4b5fd',
        },
      },
      fontFamily: {
        sohne: ['var(--font-sohne)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        title: ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.005em' }],
        heading: ['1.875rem', { lineHeight: '1.3' }],
        h3: ['1.375rem', { lineHeight: '1.4' }],
        lead: ['1.125rem', { lineHeight: '1.6' }],
        body: ['1rem', { lineHeight: '1.65' }],
        small: ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        cta: ['0.9375rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
      },
      letterSpacing: {
        label: '0.12em',
      },
      maxWidth: {
        prose: '68ch',
        '8xl': '88rem',
      },
      borderColor: {
        DEFAULT: '#DEDBD5',
      },
      animation: {
        aurora: 'aurora 60s linear infinite',
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: '0% 0%, 0% 0%' },
          to: { backgroundPosition: '300% 0%, -300% 0%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
