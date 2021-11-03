module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        pimary: '0px 0px 40px rgba(0, 0, 0, 0.15)'
      },
      colors: {
        orange: {
          400: '#FE492D',
          600: '#FE482D',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
