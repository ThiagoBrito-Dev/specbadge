module.exports = {
  purge: ["./src/**/*.html"],
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
    },
    maxWidth: {
      xs: "15.625rem",
    },
    extend: {
      backgroundImage: {
        "badge-surface": "url(../../assets/background.svg)",
      },
      spacing: {
        46: "11.515rem",
        94: "23.5rem",
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
