/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      'dark-1': '#191919',
      'dark-2': '#2a2a2a',
      'dark-3': '#333333',
      'light-1': '#DEF0FF',
      'light-2': '#EFF8FF',
      'light-3': '#4D589D',
      'light-4': '#CADCE1',
      'grad-1': 'rgba(0, 100, 251, 1)',
      'grad-2': 'rgba(30, 205, 248, 1)',
      btn: '#0064FB',
      white: 'white',
      warcraft: '#b65e00',
    },
    fontFamily: {
      warcraft: ['Warcraft', 'Roboto'],
    },
    extend: {
      spacing: {
        2.5: '0.625rem',
      },
    },
    // extend: {
    //   boxShadow: {
    //     full: '0px 0px 2px 2px rgba(255, 36, 0,0.9)',
    //     base: '2px 2px 0px 0px rgba(255, 36, 0,0.6)',
    //   },
    // },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true, preferredStrategy: 'pseudoelements' }),
  ],
}
