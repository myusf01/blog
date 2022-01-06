module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      readex: '"Readex Pro"',
      jetbrain: '"JetBrains Mono"'
    },
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

    extend: {
      typography: (theme) => ({
        DEFAULT: {

          css: {

            h1: {
              color: theme('colors.gray.800')
            },
            h2: {
              color: theme('colors.gray.800')
            },
            h3: {
              color: theme('colors.gray.800')
            },

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
