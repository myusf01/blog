module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // extend: {
    //   typography: {
    //     DEFAULT: {
    //       css: {
    //         h1: {
    //           color: '#f9c136'
    //         }
    //       }
    //     }
    //   }
    fontFamily:{
      sans: ['Readex Pro', 'ui-sans-serif', 'system-ui'],
      mono: ['JetBrains Mono', 'monospace']
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.gray.800')},
            h2: {
              color: theme('colors.gray.800')},
          },
        },
      }),
    }
    
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
