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
        "canvas-dark":       "#0a0d12",
        "canvas-base":       "#0d1117",
        "surface-subtle":    "#161b22",
        "surface-raised":    "#21262d",
        "surface-highlight": "#2a313c",
        "border-dark":       "#30363d",
        "border-muted":      "#21262d",
        "text-primary":      "#f0f6fc",
        "text-secondary":    "#8b949e",
        "text-muted":        "#656d76",
        "accent-gold":       "#fabc45",
        "accent-amber":      "#d29922",
        "accent-teal":       "#3fb950",
        "accent-blue":       "#58a6ff",
      },
      fontFamily: {
        sans:    ["Geist", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["Hanken Grotesk", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
}
