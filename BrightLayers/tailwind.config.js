/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Lato"],
        pSans: ["Public Sans"]
      },
      boxShadow: {
        'top-only': '0px -4px 8.1px 0px rgba(0, 0, 0, 0.25)',
      },
      keyframes: {
        reveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
      },
      animation: {
        reveal: 'reveal 2s linear forwards',
      },
    },
  },
  plugins: [],
}
