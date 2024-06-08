/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: {
      "body-bg-color": "#14213D",
      "secondary-color": "#1E355C",
      "interactive-states-bg": "#FB8500",
    },

    colors: {
      "text-color": "#FFFFFF",
      "secondary-text-color": "#1E355C",
      "states-color": "#FB8500",
    },

    extend: {},
  },
  plugins: [],
};
