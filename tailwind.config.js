/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        full: '0px 0px 2px 2px rgba(255, 36, 0,0.9)',
        base: '2px 2px 0px 0px rgba(255, 36, 0,0.6)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true, preferredStrategy: 'pseudoelements' }),
  ],
}
