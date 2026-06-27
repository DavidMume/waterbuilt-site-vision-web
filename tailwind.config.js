/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif:  ['"Playfair Display"', 'Georgia', 'serif'],
        sans:   ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono:   ['"JetBrains Mono"', '"Fira Code"', 'Menlo', 'monospace'],
      },
      colors: {
        obsidian: { DEFAULT: '#0a0a0b', 50: '#111114', 100: '#18181d', 200: '#22222a', 300: '#2e2e38' },
        signal:   { DEFAULT: '#D71920', dark: '#a8141a', light: '#ff2d36', muted: '#D7192020' },
        concrete: { DEFAULT: '#8b8c8e', light: '#b0b2b5', dark: '#5a5b5d' },
        steel:    { DEFAULT: '#2d5a8e', light: '#4a8fd4', muted: '#2d5a8e30' },
        amber:    { warning: '#f59e0b', dark: '#d97706', muted: '#f59e0b20' },
        safety:   { orange: '#f97316', muted: '#f9731620' },
        neon:     { green: '#22c55e', muted: '#22c55e20' },
      },
      maxWidth: { content: '1200px' },
      backgroundImage: {
        'grid-obsidian': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      backgroundSize: { 'grid-48': '48px 48px' },
      animation: {
        'scan': 'scan 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'blink': 'blink 1.2s step-end infinite',
        'flow': 'flow 2s ease-in-out infinite',
      },
      keyframes: {
        scan:  { '0%': { top: '0%' }, '100%': { top: '100%' } },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        flow:  { '0%,100%': { opacity: '0.4', transform: 'scaleX(0.6)' }, '50%': { opacity: '1', transform: 'scaleX(1)' } },
      },
    },
  },
  plugins: [],
}
