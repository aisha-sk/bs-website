import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '30': '7.5rem',
        '25': '6.25rem',
      },
      animation: {
        'float': 'float 20s infinite linear',
        'fadeInUp': 'fadeInUp 1s ease-out',
        'pulse-custom': 'pulse 2s infinite',
        'slideUp': 'slideUp 0.3s ease-out',
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        'glass': {
          'bg': 'rgba(255, 255, 255, 0.1)',
          'border': 'rgba(255, 255, 255, 0.2)',
        }
      }
    },
  },
  plugins: [],
}
export default config