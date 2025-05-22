// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // or './pages/**/*' if using Pages Router
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif'],
        covered: ['var(--font-covered)', 'cursive'],
      },
    },
  },
  plugins: [],
};
