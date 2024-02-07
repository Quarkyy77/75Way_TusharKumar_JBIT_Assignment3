/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: {
          "100": "#dde7ec",
          "200": "#dce6ec",
          "300": "#d6dde2",
          "400": "#d9d9d9",
          "500": "rgba(217, 217, 217, 0)",
          "600": "rgba(217, 217, 217, 0.4)",
        },
        darkslategray: {
          "100": "#27556e",
          "200": "#454655",
          "300": "#193b5b",
          "400": "#1f3659",
        },
        aliceblue: {
          "100": "#eaeef5",
          "200": "#e4ecf1",
        },
        darkgray: {
          "100": "#9da3ac",
          "200": "#9d9d9d",
        },
        gray: {
          "100": "#7c7c7c",
          "200": "#797979",
          "300": "#1a2144",
          "400": "rgba(255, 255, 255, 0.5)",
        },
        slategray: {
          "100": "#658297",
          "200": "#5e6c81",
        },
        steelblue: {
          "100": "#75a9e6",
          "200": "#547697",
          "300": "rgba(58, 75, 117, 0.46)",
        },
        whitesmoke: {
          "100": "#f2f2f2",
          "200": "#eaeaea",
          "300": "rgba(244, 242, 242, 0.88)",
          "400": "rgba(239, 241, 242, 0.5)",
          "500": "rgba(246, 247, 250, 0.7)",
        },
        darkslateblue: "rgba(14, 34, 87, 0.79)",
        dimgray: "#6a6f6f",
        midnightblue: {
          "100": "#090e3a",
          "200": "rgba(9, 14, 58, 0.17)",
          "300": "rgba(9, 14, 58, 0.33)",
          "400": "rgba(9, 14, 58, 0.5)",
          "500": "rgba(9, 14, 58, 0.83)",
          "600": "rgba(9, 14, 58, 0)",
        },
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "noto-sans": "'Noto Sans'",
        quicksand: "Quicksand",
        inter: "Inter",
      },
      borderRadius: {
        "8xl": "27px",
        "12xs": "1px",
        "8xs": "5px",
        "11xs-5": "1.5px",
        "4xl": "23px",
        sm: "14px",
        "7xs-5": "5.5px",
        "4xs": "9px",
      },
    },
    fontSize: {
      "13xl": "2rem",
      lgi: "1.19rem",
      "7xl": "1.63rem",
      sm: "0.88rem",
      base: "1rem",
      "5xl": "1.5rem",
      "35xl": "3.38rem",
      "24xl": "2.69rem",
      xl: "1.25rem",
      lg: "1.13rem",
      "6xl": "1.56rem",
      "15xl": "2.13rem",
      "31xl": "3.13rem",
      "23xl": "2.63rem",
      "27xl": "2.88rem",
      "9xl": "1.75rem",
      "18xl": "2.31rem",
      inherit: "inherit",
    },
    screens: {
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
