const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Readex Pro"', ...fontFamily.sans],
      mono: ['"JetBrains Mono"', ...fontFamily.mono],
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
              color: theme('colors.gray.700')
            },
            h2: {
              color: theme('colors.gray.700')
            },
            h3: {
              color: theme('colors.gray.700')
            },
            h4: {
              color: theme('colors.gray.700')
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
