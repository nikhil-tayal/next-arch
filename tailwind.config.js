module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#27b67c',
        secondary: '#322d59',
        danger: '#e57373',
        lighterText: '#666',
        outlineGray: '#E0E0E0',
      },
    },
    textColor: (theme) => ({
      ...theme('colors'),
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
    }),
  },
  plugins: [],

}
