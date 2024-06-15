/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: {
      "body-bg-color": "#14213D",
      "secondary-color": "#1E355C",
      "interactive-states-bg": "#FB8500",
      "interactive-hover": "#B46000",
    },

    colors: {
      "text-color": "#FFFFFF",
      "secondary-text-color": "#1E355C",
      "states-color": "#FB8500",
      "interactive-hover": "#B46000",
    },

    fontFamily: {
      "Inter-font-family": ["Inter", "sans-serif"],
    },

    screens: {
      desktop: "80rem",
      tablet: { min: "48rem", max: "80rem" },
    },

    extend: {
      animation: {
        fadeIn: "fadeIn 0.2s linear",
        fadeOut: "fadeOut 0.2s linear",
        animationReduce:
          "animationReduce 0.0s linear" /*Reduced motion (No Animation)*/,
        borderAnim: "borderAnim 3s ease-out infinit",
      },

      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0.7",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        fadeOut: {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },

        animationReduce: {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        borderAnim: {
          "0%": {
            borderTop: "2px",
            borderColor: "rgb(247, 140, 26)",
          },

          "100%": {
            borderLeft: "2px;",
            borderColor: "rgba(247, 140, 26, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
