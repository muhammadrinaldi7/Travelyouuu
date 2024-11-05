/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#4FC3F7',
          200: '#29B6F6',
          300: '#00BCD4',
        },
        accent: {
          100: '#FFEB3B',
          200: '#FFD600',
          300: '#FF9800',
        },
        secondary: {
          100: '#66BB6A',
          200: '#43A047',
          300: '#C0CA33',
        },
        background: {
          light: '#FFFFFF',
          soft: '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        title: ['Montserrat', 'sans-serif'],
        logo: ['Pacifico', 'cursive'],
        bigtittle: ['Boogaloo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

