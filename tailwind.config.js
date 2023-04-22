/** @type {import('tailwindcss').Config} */

const colors = {
  navie: {
    DEFAULT: "var(--color-scale-navie-0)",
    1: "var(--color-scale-navie-1)",
  },
  white: {
    DEFAULT: "var(--color-scale-white-0)"
  },
  grey: {
    DEFAULT: "var(--color-scale-grey-0)",
    1: "var(--color-scale-grey-1)",
    2: "var(--color-scale-grey-2)",
    3: "var(--color-scale-grey-3)",
    4: "var(--color-scale-grey-4)",
  },
  coral: {
    DEFAULT: "var(--color-scale-coral-0)",
    1: "var(--color-scale-coral-1)",
  },
  green: {
    DEFAULT: "var(--color-scale-green-0)",
  },
  purple: {
    DEFAULT: "var(--color-scale-purple-0)",
    1: "var(--color-scale-purple-1)",
    2: "var(--color-scale-purple-2)",
  },
  blue: {
    DEFAULT: "var(--color-scale-blue-0)",
  },
  green: {
    DEFAULT: "var(--color-scale-green-0)",
  },
  white: {
    DEFAULT: "var(--color-scale-white-0)",
  }
}

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue"],
  theme: {
    fontFamily: {
      sans: ["Mona Sans", "Mona Sans Header Fallback", "-apple-system, BlinkMacSystemFont",
      "Segoe UI", "Helvetica, Arial, sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"]
    },
    colors,
    extend: {
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.16, 1, 0.3, 1)'
      },
      fontSize: {
        "3xl": ["32px", "44px"],
        "6xl": ["64px", "68px"],
        "7xl": ["80px", "80px"],
      }
    },
  },
  plugins: [],
}

