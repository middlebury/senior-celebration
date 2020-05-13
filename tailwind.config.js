module.exports = {
  purge: ['./src/**/*.html'],
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
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
      7: '64px',
      8: '96px'
    },
    fontSize: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '18px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '36px',
      9: '48px',
      10: '64px'
    },
    extend: {
      colors: {
        navy: '#0d395f',
        'navy-dark': '#022543',
        mine: '#202020'
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
    borderOpacity: false
  }
};
