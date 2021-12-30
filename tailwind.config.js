module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xxs: "320px",
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        keyboard: {
          100: "#bec6d0",
          900: "#43302b",
        },
      },
    },
  },
  plugins: [],
};
