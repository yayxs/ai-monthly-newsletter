/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
          DEFAULT: '#21808D',
          dark: '#21808D',
        },
        deepseek: {
          DEFAULT: 'rgb(var(--deepseek-color))',
          dark: 'rgb(var(--deepseek-color-dark))',
        },
      },
    },
  },
  safelist: [
    'hover:border-cursor',
    'hover:border-perplexity',
    'hover:border-deepseek',
    'hover:text-cursor',
    'hover:text-perplexity',
    'hover:text-deepseek',
    'hover:shadow-cursor',
    'hover:shadow-perplexity',
    'hover:shadow-deepseek',
    'group-hover:border-cursor',
    'group-hover:border-perplexity',
    'group-hover:border-deepseek',
    'group-hover:text-cursor',
    'group-hover:text-perplexity',
    'group-hover:text-deepseek',
    'dark:hover:border-cursor',
    'dark:hover:border-perplexity',
    'dark:hover:border-deepseek',
    'dark:hover:text-cursor',
    'dark:hover:text-perplexity',
    'dark:hover:text-deepseek',
    'dark:group-hover:border-cursor',
    'dark:group-hover:border-perplexity',
    'dark:group-hover:border-deepseek',
    'dark:group-hover:text-cursor',
    'dark:group-hover:text-perplexity',
    'dark:group-hover:text-deepseek',
  ],
  plugins: [],
}
