/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        burgundy: '#581C21',
        cream: '#FDFBF7',
        dark: '#1C1917',
        sand: '#EAE5DB',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
        condensed: ['Arial Narrow', 'Aptos Narrow', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('img/hero.webp')",
      },
    },
  },
};
