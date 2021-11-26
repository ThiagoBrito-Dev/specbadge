module.exports = {
  purge: ["./src/views/**/*.ejs", "./public/scripts/badge.js"],
  darkMode: false,
  theme: {
    screens: {
      xs: "375px",
      ml: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
    letterSpacing: {
      widest: "0.2rem",
    },
    extend: {
      backgroundImage: {
        "badge-surface": "url(/images/badge.svg)",
        "badge-band": "url(/images/band.svg)",
        "desktop-body": "url(/images/body-desktop.svg)",
        "desktop-badge-surface": "url(/images/badge-desktop.svg)",
      },
      fontSize: {
        "1.5xl": ["1.375rem", "1.875rem"],
        "1.75xl": ["1.4375rem", "1.9375rem"],
        "2.5xl": ["1.6rem", "2.1rem"],
        "3.5xl": ["2.125rem", "2.375rem"],
        "3.75xl": ["2.15rem", "2.4rem"],
        "4.5xl": ["2.45rem", "2.625rem"],
        "4.75xl": ["2.64rem", "2.815rem"],
        "7.5xl": ["5.25rem", "1"],
        "7.75xl": ["5.625rem", "1"],
      },
      boxShadow: {
        inner: "inset 0 0 0 2px #272729",
      },
      minWidth: {
        71: "17.75rem",
        101.25: "25.3125rem",
      },
      maxWidth: {
        68: "16.75rem",
        "card-md": "29.75rem",
        "card-lg": "32.25rem",
      },
      spacing: {
        hpx: "0.5px",
        1.75: "0.4375rem",
        3.75: "0.9375rem",
        4.5: "1.125rem",
        4.75: "1.1875rem",
        5.5: "1.375rem",
        7.5: "1.875rem",
        8.5: "2.175rem",
        11.5: "2.875rem",
        12.5: "3.25rem",
        14.5: "3.625rem",
        15: "3.75rem",
        17.5: "4.375rem",
        21.25: "5.3125rem",
        23.5: "5.875rem",
        29: "7.25rem",
        "-35": "-8.75rem",
        35: "8.75rem",
        35.75: "8.9375rem",
        41: "10.25rem",
        41.75: "10.4375rem",
        42: "10.5rem",
        46: "11.515rem",
        89.5: "22.375rem",
        94: "23.5rem",
        104: "26rem",
        118.5: "29.625rem",
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
      scale: ["active"],
    },
  },
  plugins: [],
};
