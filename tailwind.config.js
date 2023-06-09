/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#111111',
      white: '#F9F9F9',
      darkGray: '#161616',
      orange: '#FF7425',
      silver: '#C9C9C9',
      black2: '#222222',
      lightGray: '#F5F5F5',
    },
    extend: {},
  },
  plugins: [],
};
