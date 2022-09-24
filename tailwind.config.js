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
          lg: "1140px",
          xl: "1140px",
          "2xl": "1140px",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "custom-gray": "#212428",
        "custom-gray2": "#343A40",
        "custom-gray3": "#122333",
        "custom-gray4": "#495057",
        "custom-gray5": "#1d2124",
        "custom-gray6": "#212529",
        "custom-yellow": "#ffff00",
        "custom-yellow2": "#ffa500",
        "custom-yellow3": "#ffc107",
        "custom-yellow4": "#e0a800",
        "custom-blue": "#97bff1",
        "custom-blue2": "#0056b3",
      },
      // colors: {
      //   "custom-gray": "#eeeeee",
      //   "custom-gray2": "#eef6f9",
      //   "custom-gray3": "#686262",
      //   "custom-gray4": "#151f28",
      //   "custom-gray5": "#494444",
      //   "custom-gray6": "#eaecec",
      //   "custom-red": "#bb0000",
      //   "custom-red2": "#c12525",
      //   "custom-red3": "#f44336",
      //   "custom-blue": "#506fa3",
      // },
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
