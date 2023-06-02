/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        50: "180px",
        "zag-p-h-l": "55%",
        "zag-p-h-m": "60%",
        "zag-p-h-s": "65.5%",
      },
      width: {
        70: "300px",
      },
      textColor: {
        "zag-gray": "#666666",
        "zag-gray-1": "#888888",
      },
      borderRadius: {
        "zag-top-lg": "30px 30px 0 0",
      },
      borderColor: {
        "zag-gray": "#DDDDDD",
      },
      borderWidth: {
        "zag-1": "1px",
      },

      colors: {
        "zag-pink": { 100: "#FDF3F9", 200: "#BF477F" },
        "zag-gray-200": "#EEEEEE",
      },
    },
  },
  plugins: [],
};
