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
      primary: "#e1e1e6",
      secondary: "#c4c4cc",
      tertiary: "#202024",
      quaternary: "#454545",
      fade: {
        yellow: "#f7b125",
        pink: "#fd2875",
        "alt-pink": "rgba(253, 40, 117, 0.5)",
        "alt-yellow": "rgba(247, 177, 37, 0.35)",
      },
      components: {
        page: "#121216",
        button: "#272729",
        input: "#555559",
        overlay: "rgba(0, 0, 0, 0.5)",
        separator: "rgba(0, 0, 0, 0.1)",
      },
      utils: {
        transparent: "transparent",
      },
    },
    letterSpacing: {
      widest: "0.2rem",
    },
    boxShadow: {
      inner: "inset 0 0 0 2px #272729",
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
    extend: {
      backgroundImage: {
        "badge-surface": "url(/images/badge.svg)",
        "badge-band": "url(/images/band.svg)",
        "desktop-page": "url(/images/body-desktop.svg)",
        "desktop-badge-surface": "url(/images/badge-desktop.svg)",
      },
      fontSize: {
        "125%": "125%",
        "150%": "150%",
        "2.5xl": ["1.6rem", "2.1rem"],
        "6.5xl": ["4.125rem", "1"],
      },
      minWidth: {
        71: "17.75rem",
        101.25: "25.3125rem",
      },
      maxWidth: {
        68: "17rem",
        69: "17.25rem",
      },
      spacing: {
        hpx: "0.5px", // half a pixel
        1.75: "0.4375rem",
        4.5: "1.125rem",
        7.5: "1.875rem",
        14.5: "3.625rem",
        15: "3.75rem",
        19: "4.75rem",
        28.75: "7.1875rem",
        "-35": "-8.75rem",
        35: "8.75rem",
        35.75: "8.9375rem",
        39: "9.75rem",
        41: "10.25rem",
        42: "10.5rem",
        46: "11.515rem",
        94: "23.5rem",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
      animation: ["hover"],
      brightness: ["hover"],
      scale: ["active"],
    },
  },
  plugins: [],
};
