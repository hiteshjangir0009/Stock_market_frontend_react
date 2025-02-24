import { Colors } from './src/utils/Colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customtext:'#fff',
        customtextDark:'#000',
        customtextLight:'grey',
    
        primary:'#1e2130',
        secondary:'#fff',
    
        custombuy:'#00ff00',
        customsell:'#ff0000',
      },
    },
  },
  plugins: [],
}

