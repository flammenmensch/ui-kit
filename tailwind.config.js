const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/components/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      colors: ({ colors }) => ({
        background: colors.white,
        foreground: colors.stone['800'],
        primary: colors.stone['800'],
        secondary: colors.gray['500'],
        accent: colors.sky['600'],
        danger: colors.red['600'],
        success: colors.emerald['600'],
        warning: colors.yellow['400'],
        link: colors.sky['600'],
      }),
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        '*': {
          color: theme('colors.primary'),
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.tight'),
          letterSpacing: theme('letterSpacing.normal'),
        },
        h1: {
          fontSize: theme('fontSize.5xl'),
          fontWeight: theme('fontWeight.bold'),
          lineHeight: theme('lineHeight.tight'),
          letterSpacing: theme('letterSpacing.normal'),
        },
        h2: {
          fontSize: theme('fontSize.4xl'),
          fontWeight: theme('fontWeight.bold'),
          lineHeight: theme('lineHeight.tight'),
          letterSpacing: theme('letterSpacing.normal'),
        },
        h3: {
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.tight'),
          letterSpacing: theme('letterSpacing.normal'),
        },
        h4: {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.normal'),
          letterSpacing: theme('letterSpacing.normal'),
        },
        h5: {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.normal'),
          letterSpacing: theme('letterSpacing.normal'),
        },
        h6: {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.bold'),
          lineHeight: theme('lineHeight.normal'),
          letterSpacing: theme('letterSpacing.wide'),
        },
        small: {
          color: theme('colors.secondary'),
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.normal'),
          letterSpacing: theme('letterSpacing.wide'),
        },
        u: {
          textDecoration: 'underline',
          textUnderlineOffset: theme('textUnderlineOffset.2'),
        },
        abbr: {
          textDecoration: 'underline',
          textDecorationStyle: 'dotted',
          textUnderlineOffset: theme('textUnderlineOffset.2'),
        },
        a: {
          color: theme('colors.link'),
          textDecoration: 'underline',
          textUnderlineOffset: theme('textUnderlineOffset.2'),
        },
        'strong, b': {
          fontWeight: theme('fontWeight.semibold'),
        },
        'i, em, cite': {
          fontStyle: 'italic',
        },
        mark: {
          backgroundColor: theme('colors.warning'),
          padding: theme('spacing[0.5]'),
        },
        ins: {
          textDecoration: 'none',
          color: theme('colors.success'),
        },
        del: {
          color: theme('colors.danger'),
        },
        kbd: {
          color: theme('colors.background'),
          backgroundColor: theme('colors.foreground'),
          borderRadius: theme('borderRadius.DEFAULT'),
          fontWeight: theme('fontWeight.semibold'),
          letterSpacing: theme('letterSpacing.wider'),
          padding: theme('spacing[2]'),
        },
        code: {
          backgroundColor: theme('colors.gray[200]'),
          borderRadius: theme('borderRadius.DEFAULT'),
          color: theme('colors.secondary'),
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.normal'),
          letterSpacing: theme('letterSpacing.wide'),
          paddingTop: theme('spacing[0.5]'),
          paddingRight: theme('spacing[1.5]'),
          paddingBottom: theme('spacing[0.5]'),
          paddingLeft: theme('spacing[1.5]'),
        },
      });
    }),
    require('tailwindcss-react-aria-components'),
  ],
};
