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
        ink: {
          950: '#050A14',
          900: '#0B1020',
        },
        slate: {
          800: '#111827',
          700: '#1F2937',
        },
        text: {
          primary: '#EAF0FF',
          muted: '#A7B0C0',
        },
        cyan: {
          DEFAULT: '#22D3EE',
          500: '#22D3EE',
        },
        blue: {
          electric: '#3B82F6',
        },
        success: '#34D399',
        warning: '#FBBF24',
        critical: '#EF4444',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(34, 211, 238, 0.3)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
export default config
