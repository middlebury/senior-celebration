const rem = (unit) => unit / 16 + 'rem';

module.exports = {
  purge: ['./src/**/*.html', './src/js/*.js'],
  theme: {
    fontFamily: {
      sans: [
        'whitney ssm a',
        'whitney ssm b',
        'tahoma',
        'geneva',
        'sans-serif'
      ],
      serif: ['sentinel ssm a', 'sentinel ssm b', 'georgia', 'serif']
    },
    container: {
      center: true,
      padding: '1rem'
    },
    lineHeight: {
      heading: '1.4',
      body: '1.7',
      none: '1'
    },
    spacing: {
      0: 0,
      1: rem(4),
      2: rem(8),
      3: rem(16),
      4: rem(24),
      5: rem(32),
      6: rem(48),
      7: rem(64),
      8: rem(96)
    },
    fontSize: {
      1: rem(12),
      2: rem(14),
      3: rem(16),
      4: rem(18),
      5: rem(20),
      6: rem(24),
      7: rem(28),
      8: rem(36),
      9: rem(48),
      10: rem(64)
    },
    extend: {
      colors: {
        navy: '#0d395f',
        'navy-dark': '#022543',
        mine: '#202020',
        gray: '#767676',
        'gray-light': '#dedede',
        'gray-lighter': '#f8f8f8'
      }
    }
  },
  variants: {
    margin: ['responsive', 'last'],
    padding: ['responsive', 'last']
  },
  plugins: [],
  corePlugins: {
    textOpacity: false,
    borderOpacity: false,
    backgroundOpacity: false
  }
};
