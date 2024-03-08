const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const {
  backfaceVisibility,
} = require('./src/tailwind-plugins/backfaceVisibility');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      keyframes: {
        'lift-up': {
          '0%, 100%': { transform: 'translateZ(0px)' },
          '50%': { transform: 'translateZ(60px) rotateY(180deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        'lift-up-shadow': {
          '50%': {
            opacity: '0.5',
            transform: 'translateZ(30px) rotateY(180deg)',
          },
          '100%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        'lift-up': 'lift-up 500ms ease-out forwards',
        'lift-up-shadow': 'lift-up-shadow 500ms ease-out forwards',
      },
    },
  },
  plugins: [backfaceVisibility],
};
