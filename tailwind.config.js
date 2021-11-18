module.exports = {
  purge: ["./src/views/**/*.ejs"],
  darkMode: false,
  theme: {
    fontFamily: {
      primary: ["Roboto", "sans-serif"],
    },
    colors: {
      body: "#121216",
      button: "#272729",
      input: "#555559",
      primary: "#e1e1e6",
      secondary: "#c4c4cc",
      tertiary: "#202024",
      quaternary: "#454545",
      "yellow-fade": "#f7b125",
      "pink-fade": "#fd2875",
      overlay: "rgba(0, 0, 0, 0.5)",
      separator: "rgba(0, 0, 0, 0.1)",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        "badge-surface": "url(/images/badge.svg)",
        "badge-band": "url(/images/band.svg)",
        "desktop-body": "url(/images/body-desktop.svg)",
        "desktop-badge-surface": "url(/images/badge-desktop.svg)",
      },
      boxShadow: {
        inner: "inset 0 0 0 2px #272729",
      },
      maxWidth: {
        xs: "15.625rem",
      },
      maxHeight: {
        99: "24.75rem",
        111: "27.75rem",
        200: "50rem",
      },
      spacing: {
        hpx: "0.5px",
        4.5: "1.125rem",
        7.5: "1.875rem",
        15: "3.75rem",
        17.5: "4.375rem",
        32.25: "8.0625rem",
        "-35": "-8.75rem",
        35: "8.75rem",
        35.75: "8.9375rem",
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
      keyframes: {
        "finite-bounce": {
          "0%, 50%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-25%)" },
          "75%": { transform: "translateY(-20%)" },
        },
        "swipe-down": {
          from: { transform: "translateY(-9.5%)" },
          to: { transform: "translateY(0)" },
        },
        pop: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "60%": { transform: "scale(1.15)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "finite-bounce": "finite-bounce 1s ease-out",
        "swipe-down": "swipe-down 0.65s ease-out",
        pop: "pop 0.65s ease-in-out",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
      borderStyle: ["hover"],
      animation: ["hover"],
      brightness: ["hover"],
    },
  },
  plugins: [],
};
