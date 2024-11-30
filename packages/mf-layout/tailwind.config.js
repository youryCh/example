/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: ['./public/index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [tailwindScrollbar]
};
