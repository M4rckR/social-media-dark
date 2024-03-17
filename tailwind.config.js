/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        "m-inter": ['Inter', 'sans-serif'],
      },
      colors: {
        // Primary Colors
        "m-green" : "hsl(163, 72%, 41%)",
        "m-red" : "hsl(356, 69%, 56%)",

        //Socials
        "m-facebook" : "hsl(208, 92%, 53%)",
        "m-twitter" : "hsl(203, 89%, 53%)",
          // Gradientes
          "m-instagram" : "hsl(37, 97%, 70%)",
          "m-instagram2" : "hsl(329, 70%, 58%)",
        "m-youtube" : "hsl(348, 97%, 39%)",

        // Dark theme toggles
          //Gradientes
          "m-dark-toogle" : "hsl(210, 78%, 56%)",
          "m-dark-toogle2" : "hsl(146, 68%, 55%)",
        
        // Light Theme
        "m-light-toogle" : "hsl(230, 22%, 74%)",  


        // Themes
        // Dark Theme
        "m-blue-bg" : "hsl(230, 17%, 14%)",
        "m-top-bg": "hsl(232, 19%, 15%)",
        "m-blue-card-bg-d": "hsl(228, 28%, 20%)",
        "m-blue-text": "hsl(228, 34%, 66%)",
        "m-white-text": "hsl(0, 0%, 100%)",

        // Light Theme
        "m-white-bg": "hsl(0, 0%, 100%)",
        "m-blue-top-bg": "hsl(225, 100%, 98%)",
        "m-blue-card-bg-l": "hsl(227, 47%, 96%)",
        "m-d-blue-text": "hsl(228, 12%, 44%)",
        "m-very-dark-blue-text": "hsl(230, 17%, 14%)"
      }
    },
  },
  plugins: [],
}

