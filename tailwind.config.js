/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'desktop': '1280px',
      'laptop': '1024px',
      'ipad': '992px',
      'other': '820px',
      'large':'768px',
      'tablet': '640px',
      'meduim': '576px',
      'mobile': '400px',
      'small':'320px'
    },
  },
  plugins: [require('daisyui'),],
}

