module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // ...
  darkMode: 'class', // Enable dark mode as a class variant
  variants: {
    extend: {
      backgroundColor: ['dark'], // Add backgroundColor as a variant for dark mode
      textColor: ['dark'], // Add textColor as a variant for dark mode
    },
  },
  plugins: [
    // ...
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#1E40AF', // Define primary background color
        secondary: '#FBBF24', // Define secondary background color
      },
      textColor: {
        primary: '#1E40AF', // Define primary text color
        secondary: '#FBBF24', // Define secondary text color
      },
    },
  },
}