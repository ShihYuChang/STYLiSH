/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-grey': '#313538',
        'custom-brown': '#8b572a',
        'icon-brown': '#4c4747',
        'icon-hover-brown': '#9E724D',
        'cart-qty-brown': '#8b572a',
        'footer-text-white': '#f5f5f5',
        'border-grey': '#828282',
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
