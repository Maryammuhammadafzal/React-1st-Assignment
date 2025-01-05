/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        bounceNew: "bounce 100s infinite;",
      },
      keyframes: {
        bounceNew: {
          "0%": {
            "transform": "translateY(-2%)" ,
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)"
          },
          "100%": {
            "transform": "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1);"
          },
          "50%": {
            "transform": "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1);"
          },

        },
       
          fill: {
            "0%": { width: "0%" },
            "50%": { width: "100%" },
            "100%": { width: "0%" },
          },
          animation: {
            fill: "fill 2s infinite",
          },
      }
    },
  },
  plugins: [],
}

