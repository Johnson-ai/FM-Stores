/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0f0f0f",
        neon: "#00fff7",
        cyberpink: "#ff00c8",
        cybershadow: "#110011",
      },
      fontFamily: {
        techno: ["Orbitron", "sans-serif"],
        futuristic: ["Share Tech Mono", "monospace"],
      },
      boxShadow: {
        neon: "0 0 10px #00fff7, 0 0 20px #00fff7",
        pinkglow: "0 0 15px #ff00c8, 0 0 25px #ff00c8",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
