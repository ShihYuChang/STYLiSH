/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: { 258: '258px', 450: '450px', 44: '44px' },
      height: {
        100: '100px',
        40: '40px',
      },
      colors: {
        'custom-gray': '#313538',
      },
      padding: {
        60: '60px',
        54: '54px',
        26: '26px',
      },
      margin: {
        57: '57px',
      },
      gap: {
        42: '42px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        logo: "url('./img/logo.svg')",
      },
    },
  },
  plugins: [],
};
