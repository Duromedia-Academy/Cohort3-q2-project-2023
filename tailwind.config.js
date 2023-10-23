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
        'home-pattern': "url(../src/images/homeSec1img1.jpg)",
        'collage-pattern': "url(../src/images/homeSec2img1.jpg)",
        'home-sustain-pattern': "url(../src/images/homeSec5img1.png)",
        'home-impact-pattern': "url(../src/images/homeSec6img1.jpg)",
        'hero-pattern': "url(../src/images/eagle.svg)",
        'header-pattern': "url(../src/images/sustain-1.png)",
        'about-pattern': "url(../src/images/aboutSec1img1.jpg)",
        'aliko-pattern': "url(../src/images/aboutSec3img1.jpg)",
        'business-pattern': "url(../src/images/busSec1img1.jpg)",
        'sustain-pattern': "url(../src/images/sustainSec1img1.png)",
        'investor-pattern': "url(../src/images/invSec1img1.png)",
        'foundation-pattern': "url(../src/images/adfSec1img1.png)",
        'career-pattern': "url(../src/images/careerSec1img1.png)",
        'contact-pattern': "url(../src/images/contactSec1img1.svg)",
      },
      lineHeight: {
        'extra-loose': '2.83',
        '12': '3rem',
      },
      screens: {
        'phone': '992px',
        // => @media (max-width: 992px) { ... }
      },
      fontFamily: {
        lato: ['Lato'],
      },
    },
  },
  plugins: [],
}
