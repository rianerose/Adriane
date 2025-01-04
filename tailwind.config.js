/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        customAccent: "#7a49bd",
        customPrimary: "#6c5ce7",
        customSecondary: "#c7b8ea",
      },
      fontWeight: {
        extraBold: "700",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
