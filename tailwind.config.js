/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}", // ts, tsx bhi add kar do future-proof ke liye
];
export const theme = {
  extend: {
    fontFamily: {
     nexa: ['Nexa', 'sans-serif'],
    },
  },
};
export const plugins = [
  require('tailwind-scrollbar-hide')
];
