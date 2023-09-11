/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'container-small': '540px',
        'container-medium': '720px',
        'container-big': '960px',
        'container-large': '1140px',
      },
      backgroundImage: {
        'hero-pattern': "url(../src/images/eagle.svg)",
      },
      lineHeight: {
        'extra-loose': '2.83',
        '12': '3rem',
      },
      screens: {
        'phone': '992px',
        // => @media (max-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}
