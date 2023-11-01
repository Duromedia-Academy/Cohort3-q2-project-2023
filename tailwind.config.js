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
        'home-pattern': "url(../images/homeSec1img1.jpg)",
        'home-pattern2': "url(../images/homeSec1img1b.jpg)",
        'collage-pattern': "url(../images/homeSec2img1.jpg)",
        'home-sustain-pattern': "url(../images/homeSec5img1.png)",
        'home-impact-pattern': "url(../images/homeSec6img1.jpg)",
        'hero-pattern': "url(../images/eagle.svg)",
        'header-pattern': "url(../images/sustain-1.png)",
        'about-pattern': "url(../images/aboutSec1img1.jpg)",
        'aliko-pattern': "url(../images/aboutSec3img1.jpg)",
        'business-pattern': "url(../images/busSec1img1.jpg)",
        'sustain-pattern': "url(../images/sustainSec1img1.png)",
        'investor-pattern': "url(../images/invSec1img1.png)",
        'foundation-pattern': "url(../images/adfSec1img1.png)",
        'career-pattern': "url(../images/careerSec1img1.png)",
        'contact-pattern': "url(../images/contactSec1img1.svg)",
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
