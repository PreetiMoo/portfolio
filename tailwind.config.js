/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05050a',
          900: '#0b0b14',
          850: '#101023',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 10px 40px rgba(0,0,0,0.65)',
        card: '0 0 0 1px rgba(255,255,255,0.06), 0 16px 50px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'accent-gradient':
          'linear-gradient(90deg, rgb(96 165 250) 0%, rgb(168 85 247) 50%, rgb(59 130 246) 100%)',
        'hero-radial':
          'radial-gradient(900px circle at 15% 15%, rgba(59,130,246,0.20), transparent 55%), radial-gradient(900px circle at 85% 10%, rgba(168,85,247,0.18), transparent 55%), radial-gradient(1000px circle at 50% 80%, rgba(56,189,248,0.10), transparent 55%)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-30%)' },
          '100%': { transform: 'translateX(30%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

