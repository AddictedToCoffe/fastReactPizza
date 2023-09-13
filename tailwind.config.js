/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: "Roboto Mono, monospace" },
    extend: {
      colors: { pizza: "#123456" },
      fontSize: { huge: ["80rem", { lineHeight: "1" }] },
      height: { screen: "100dvh" },
    },
  },
  plugins: [],
};

//jezeli chcemy dodac jakies czcionki kolory itp to wrzucamy to do theme - ale tam to nadpisuje czyli wyrzuca wszystko i zapisuje nowe a jezeli chcemy zostawic pozostale to wrzucamy to do extend jako dodatek.
