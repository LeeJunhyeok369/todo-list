export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          bg: {
            DEFAULT: "#ebeef1",
            1: "#f7f7f9",
            2: "#FFF",
            blue: "#5383E8",
            red: "#E84057",
          },
          text: {
            DEFAULT: "#212529",
            1: "#CED4DA",
            2: "#FFF",
            dark: "#333333",
          },
        },
        dark: {
          bg: {
            DEFAULT: "#212529",
            1: "#282830",
            2: "#868E96",
            3: "#282830",
            input: "#1C1C1F",
            btn: "#31313C",
          },
          text: {
            DEFAULT: "#ECECEC",
            1: "#282830",
            2: "#ACACAC",
            3: "#1C1C1F",
            input: "#ffffff",
            inputP: "#7B7A8E",
          },
        },
      },
    },
  },
  plugins: [],
};
