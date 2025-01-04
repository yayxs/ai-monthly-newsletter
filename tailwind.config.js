/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary))',
        secondary: 'rgb(var(--secondary))',
        accent: 'rgb(var(--accent))',
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        surface: 'rgb(var(--surface))',
        cursor: {
          DEFAULT: '#191919',
          hover: '#2d2d2d',
          light: '#191919',
          dark: '#e6e6e6',
        },
      },
    },
  },
  plugins: [],
}
