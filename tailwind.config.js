module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Blue: "#0668af",
        Darkblue: "#022640",
        LightYellow: "#fffad5",
        LightBlue: "#5f9ecc",
        LightBrown: "#eed9ac",
        darkBody: "#020303",
        darkPurpal: "#473ea9",
        lightPripule: "#8f87e8",
        mediumPripule: "#847ae0",
        dashboardDarkBlue: "#353361",
        darkBrown: "#b05d4e",
        lightGray: "#d1d2cb",
        darBox: "#1b1e29",
      },
      zIndex: {
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        25: 25,
        50: 50,
        75: 75,
        100: 100,
        10000: 10000,
        auto: "auto",
      },

      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
        16: "16px",
        20: "20",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "780px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1650px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  variants: {
    extend: {
      translate: ["active", "group-hover"],
      display: ["group-hover"],
      transform: ["hover", "focus", "group-hover"],
      rotate: ["active", "group-hover"],
      float: ["responsive"],
      margin: ["responsive"],
      padding: ["responsive"],
      left: ["responsive"],
      right: ["responsive"],
      text: ["responsive", "focus"],
      borderWidth: ["responsive", "hover", "focus"],
      backgroundColor: ["hover", "focus"],
      ringWidth: ["hover", "active"],
      ringColor: ["hover", "active", "focus"],
    },
  },
  plugins: [],
};
