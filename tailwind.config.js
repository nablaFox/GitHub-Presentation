/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue"],
  theme: {
    fontFamily: {
      sans: ["Mona Sans", "Mona Sans Header Fallback", "-apple-system, BlinkMacSystemFont",
      "Segoe UI", "Helvetica, Arial, sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"]
    },
    colors: {
      "black-navie": "var(--color-black-navie)",
      white: "var(--color-white)",
      grey: "var(--color-grey)",
      coral: "var(--color-coral)",
      green: "var(--color-green)",
      purple: {
        DEFAULT: "var(--color-purple)",
        1: "var(--color-purple-1)",
      },
      blue: "var(--color-blue)",
    },
    extend: {
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    },
  },
  plugins: [],
}

