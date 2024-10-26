/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Default text shadow
        light: '1px 1px 2px rgba(255, 255, 255, 0.7)', // Light text shadow
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const textShadowUtilities = {
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-light': {
          'text-shadow': '1px 1px 2px rgba(255, 255, 255, 0.7)',
        },
        '.text-shadow-yellow': {
          'text-shadow': '2px 2px 4px rgba(255, 255, 0, 0.7)', // Yellow shadow utility
        },
      };
      addUtilities(textShadowUtilities, ['responsive', 'hover']);
    },
  ],
}
