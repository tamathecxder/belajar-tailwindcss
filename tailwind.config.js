module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: {
        13: '3.25rem'
      },
      fontFamily: {
        'inter': ['Inter']
      },
      colors: {
        'atomic': '#243c5a'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'shaking': 'shakingFrames 1s ease-in-out infinite',
      },
      keyframes: {
        shakingFrames: {
          '0% 100%': { tranform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' }
        }
      }
    },
  },
  plugins: [],
}
