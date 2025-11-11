/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Adjust paths to your project
//   theme: {
//     extend: {
//       keyframes: {
//         'zoom-out-fade': {
//           '0%': { opacity: '1', transform: 'scale(1)' },
//           '100%': { opacity: '0', transform: 'scale(0.5)' },
//         },
//       },
//       animation: {
//         'zoom-out-fade': 'zoom-out-fade 1.5s ease forwards',
//       },
//     },
//   },
//   plugins: [],
// };



module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Adjust paths as needed
  theme: {
    extend: {
      keyframes: {
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(2)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'zoom-in': 'zoom-in 1s ease forwards',
      },
    },
  },
  plugins: [],
};



