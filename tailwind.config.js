/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#050816',
        card: '#151030',
        primary: '#915EFF',
        secondary: '#00ffff',
        accent: '#a855f7',
      },
      boxShadow: {
        glow: '0 0 25px rgba(145, 94, 255, 0.35)',
        cyan: '0 0 30px rgba(0, 255, 255, 0.2)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 4s ease-in-out infinite',
        pulseSlow: 'pulseSlow 5s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '1' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at center, rgba(255,255,255,0.14) 1px, transparent 1px)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
