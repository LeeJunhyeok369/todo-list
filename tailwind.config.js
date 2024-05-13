export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          bg: {
            DEFAULT: "#F8F9FA",
            1: "#CED4DA",
            2: "#868E96",
            3: "#495057",
          },
          text: {
            DEFAULT: "#212529",
            1: "#CED4DA",
            2: "#868E96",
            3: "#495057",
          },
        },
        dark: {
          bg: {
            DEFAULT: "#212529",
            1: "#CED4DA",
            2: "#868E96",
            3: "#495057",
          },
          text: {
            DEFAULT: "#ECECEC",
            1: "#D9D9D9",
            2: "#ACACAC",
            3: "#595959",
          },
        },
      },
    },
  },
  plugins: [],
};
