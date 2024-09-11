/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['"Montserrat"'],
      },
      screens: {
        "sm": "576px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1440px",
      },
      colors: {
        'cl-black': 'var(--cl-black)',
        'cl-red': 'var(--cl-red)',
        'cl-primary-50': 'var(--cl-primary-50)',
        'bkg-subtle': 'var(--bkg-subtle)',
      },
      container: {
        center:true,
      },
    },
  },
  plugins: [],
}