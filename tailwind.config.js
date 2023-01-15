/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
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
        accent: {
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
