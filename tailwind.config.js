/** @type {import('tailwindcss').Config} */
const generateWidths = (gap = '2rem') => {
  const widths = {};
  for (let i = 2; i <= 6; i++) {
    widths[`1/${i}-with-gap`] = `calc(100% / ${i} - (${gap} / ${i}))`;
  }
  return widths;
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1/4-with-gap-7': 'calc(100% / 4 - 1.75rem)',
      }
    },
    container: {
      center: true,
      padding: '2rem'
    },
  },
  plugins: [],
}

