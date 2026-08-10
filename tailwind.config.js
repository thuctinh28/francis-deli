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
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'Arial', 'sans-serif'],
        condensed: ['"Oswald"', 'Arial Narrow', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('img/hero.webp')",
      },
    },
  },
};
