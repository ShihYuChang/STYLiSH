/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xl: { min: '1280px' },
    },
    extend: {
      colors: {
        'custom-grey': '#3f3a3a',
        'custom-brown': '#8b572a',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        logo: "url('./img/logo.svg')",
        line: "url('./img/icons/line.svg')",
        facebook: "url('./img/icons/facebook.svg')",
        twitter: "url('./img/icons/twitter.svg')",
      },
    },
  },
  plugins: [],
};
