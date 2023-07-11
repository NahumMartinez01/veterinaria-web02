/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      objectFit: {
        'contain': 'contain',
        'cover': 'cover',
        'fill': 'fill',
        'none': 'none',
        'scale-down': 'scale-down',
      },
    },
  },
  plugins: [],
}