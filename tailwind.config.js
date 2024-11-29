/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    fontFamily: {
      sans: ['Play', 'ui-sans-serif', 'system-ui', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
};
