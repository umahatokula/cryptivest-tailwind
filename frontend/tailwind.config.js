/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'stake': {
          50: "#efecf8",
          100: "#cec7e6",
          200: "#aba2d7",
          300: "#897dc9",
          400: "#6759bb",
          500: "#4b40a2",
          600: "#38327e",
          700: "#272459",
          800: "#161635",
          900: "#070713"
        },
        'primary': {
          50: '#f8e4ff',
          100: '#e2b4ff',
          200: '#ce83fb',
          300: '#ba53f9',
          400: '#a623f7',
          500: '#8d0cdd',
          600: '#6d07ac',
          700: '#4e047c',
          800: '#2f014b',
          900: '#12001d',
        },
        'accent': {
          50: '#ffe9df',
          100: '#ffc6b2',
          200: '#fca182',
          300: '#fa7c52',
          400: '#f75722',
          500: '#dd3e09',
          600: '#ad2f05',
          700: '#7d2103',
          800: '#4c1200',
          900: '#1f0400',
        },
        'dark': {
          50: '#C1C2C5',
          100: '#A6A7AB',
          200: '#909296',
          300: '#5C5F66',
          400: '#373A40',
          500: '#2C2E33',
          600: '#25262B',
          700: '#1A1B1E',
          800: '#141517',
          900: '#101113',
        }
      },
      animation: {
        text: 'text 5s ease infinite',
        blob: "blob 7s infinite",
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}
