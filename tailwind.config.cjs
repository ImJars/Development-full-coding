/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0C1222",
        "secondary": "#0F172A",
        "text-purple": "#8B5CF6",
        "text-blue": "#60A5FA",
        "text-gray": "#64748B",
        "text-general": "#909EB2",
      },
    },
  },
  plugins: [],
}