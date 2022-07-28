module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: "985px",
          xl: "985px",
          "2xl": "985px",
        },
      },
      fontFamily: {
        trebuchetMs: ["trebuchet ms, sans-serif"],
        arial: ["arial, sans-serif"],
      },
      colors: {
        "custom-gray": "#eeeeee",
        "custom-gray2": "#eef6f9",
        "custom-gray3": "#686262",
        "custom-gray4": "#151f28",
        "custom-gray5": "#494444",
        "custom-gray6": "#eaecec",
        "custom-red": "#bb0000",
        "custom-red2": "#c12525",
        "custom-red3": "#f44336",
        "custom-blue": "#506fa3",
      },
      // animation: {
      //   marquee: "marquee 5s linear infinite",
      // },
      // keyframes: {
      //   marquee: {
      //     "0%": { transform: "translateX(0%)" },
      //     "100%": { transform: "translateX(-100%)" },
      //   },
      // },
    },
  },
  plugins: [],
};
