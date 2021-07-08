module.exports = {
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
    aspectRatio: ['responsive']
  },
  theme: {
    aspectRatio: { // defaults to {}
      'none': 0,
      'square': [1, 1], // or 1 / 1, or simply 1
      '16/9': [16, 9],  // or 16 / 9
      '4/3': [4, 3],    // or 4 / 3
      '21/9': [21, 9],  // or 21 / 9
    },
    extend: {
      colors: {
        primary: '#850000',
        bgGray70: "#c3c3c3CC",
        bgGray: "#c3c3c3",
      },
      keyframes: {
        minislide: {
          '25%': { opacity: 1 },
          '40%': { opacity: 0 },
        }
      },
      animation: {
        'minislide': 'minislide 30s infinite',
        'bounce-fast': 'bounce 0.5s  infinite',
      }
    }
  },
  plugins: [
    require('tailwindcss-aspect-ratio'),
  ]
}