/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#121212',
        'dark-secondary': '#1E1E1E',

        'light-primary': '#F0F0F0',
        'light-secondary': '#E0E0E0',

        'primary-text-dark': '#E0E0E0',
        'secondary-text-dark': '#A0A0A0',

        'primary-text-light': '#212121',
        'secondary-text-light': '#757575',
        'accent': '#f54242',
      },
      backgroundPosition: {
        'top-20': 'center top 20%',
      },
      fontFamily: {
        sans: ['Baskervville SC', 'serif'],
      },
      backgroundImage: {
        'bg_1': "url('https://senpaiiart-photos.s3.us-west-1.amazonaws.com/background/senpaiiiart_100.jpg')",
        'bg_2': "url('https://senpaiiart-photos.s3.us-west-1.amazonaws.com/background/senpaiiiart_300.jpg')",
        'bg_3': "url('https://senpaiiart-photos.s3.us-west-1.amazonaws.com/background/senpaiiiart_200.jpg')",
      }



    },
  },
  plugins: [],
}

