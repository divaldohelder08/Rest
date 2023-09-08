/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fundo: "#000A0F",
        secundary: "#001119",
        terciary:"#00111A"
      },

      gridTemplateColumns: {
        all: "auto 20rem",
      },
    },
  },
  plugins: [],
}
