const plugin = require('tailwindcss/plugin');

module.exports = {
  backfaceVisibility: plugin(function ({ addUtilities }) {
    addUtilities({
      '.backface-visible': {
        'backface-visibility': 'visible',
        '-moz-backface-visibility': 'visible',
        '-webkit-backface-visibility': 'visible',
        '-ms-backface-visibility': 'visible',
      },
      '.backface-hidden': {
        'backface-visibility': 'hidden',
        '-moz-backface-visibility': 'hidden',
        '-webkit-backface-visibility': 'hidden',
        '-ms-backface-visibility': 'hidden',
      },
    });
  }),
};
