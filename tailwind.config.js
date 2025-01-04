/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cursor: {
          DEFAULT: 'rgb(var(--cursor-color))',
          dark: 'rgb(var(--cursor-color-dark))',
        },
        perplexity: {
          DEFAULT: 'rgb(var(--perplexity-color))',
          dark: 'rgb(var(--perplexity-color-dark))',
        },
      },
    },
  },
  safelist: [
    'hover:border-cursor',
    'hover:border-perplexity',
    'hover:text-cursor',
    'hover:text-perplexity',
    'hover:shadow-cursor',
    'hover:shadow-perplexity',
    'group-hover:border-cursor',
    'group-hover:border-perplexity',
    'group-hover:text-cursor',
    'group-hover:text-perplexity',
    'dark:hover:border-cursor',
    'dark:hover:border-perplexity',
    'dark:hover:text-cursor',
    'dark:hover:text-perplexity',
    'dark:group-hover:border-cursor',
    'dark:group-hover:border-perplexity',
    'dark:group-hover:text-cursor',
    'dark:group-hover:text-perplexity',
  ],
  plugins: [],
}
