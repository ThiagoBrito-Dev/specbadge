module.exports = {
  purge: ["./**/*.html"],
  darkMode: false,
  theme: {
    fontFamily: {
      primary: ["Roboto", "sans-serif"],
    },
    colors: {
      body: "#121214",
      primary: "#e1e1e6",
      secondary: "#c4c4cc",
    },
    boxShadow: {
      DEFAULT: "0 0 15px 2.5px #1b1b1d",
      none: "0 0 0 0",
    },
    maxWidth: {
      xs: "15.625rem",
    },
    extend: {
      backgroundImage: {
        "badge-surface": "url(../../assets/badge.svg)",
        "badge-band": "url(../../assets/band.svg)",
        "desktop-body": "url(../../assets/body-desktop.svg)",
        "desktop-badge-surface": "url(../../assets/badge-desktop.svg)",
      },
      spacing: {
        15: "3.75rem",
        17.25: "4.3125rem",
        "-35": "-8.75rem",
        35: "8.75rem",
        41: "10.25rem",
        46: "11.515rem",
        89.5: "22.375rem",
        94: "23.5rem",
        152: "38rem",
        203: "50.75rem",
      },
      inset: {
        "-3.75": "-0.9375rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
