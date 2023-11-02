module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  variants: {
    
   display: ['responsive', 'hover', 'focus'],
  },
  theme: {
    extend: {
      backgroundImage: {
        'mobile-image': "url('/img/Myproject.jpg')",
        'large-image': "url('/img/My\project.jpg')",
      },
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': {'raw': '(min-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)'},
          '80%': { transform: 'scaleY(1.2)'},
          '100%': { transform: 'scaleY(1)'},
        },
      },
      fontFamily: {
        sans: [
          "Darker Grotesque, sans-serif"
        ]
      },
      animation:{
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: {
    tailwindcss: {},
        autoprefixer: {},
  },
}

