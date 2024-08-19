/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        cl_blue: "#03AED2",
        cl_blueLight: "#68D2E8",
        cl_yellow: "#FDDE55",
        cl_baige: "#FEEFAD",
      }
    },
    container: {
      center: true
    },
    fontFamily: {
      Nunito: ["Nunito", "sans-serif"]
    }
  },
  plugins: [],
}

