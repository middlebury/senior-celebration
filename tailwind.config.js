const rem = (unit) => unit / 16 + 'rem';

const PROD = process.env.NODE_ENV === 'production';

// use px in dev so tailwind ext shows pixel values which are easier to match to designs than remembering rem conversion
const remify = (scale) => scale.map((n) => (PROD ? rem(n) : n + 'px'));

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
    spacing: remify([0, 4, 8, 16, 24, 32, 48, 64, 96]),
    fontSize: remify([10, 12, 14, 16, 18, 20, 24, 28, 36, 48, 64]),
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
