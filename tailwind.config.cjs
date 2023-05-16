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
        "card": "#1E293B",
        "card-icon-one": "#78350F",
        "card-icon-two": "#831843",
        "card-icon-three": "#0C4A6E",
        "text-white-gray": "#CBD5E1",
        "table-color": "#161E31",

        "js-icon": "#EFD81D",
        "react-icon": "#5ED3F3",
        "tailwind-icon": "#36B7F0",
        "python-icon": "#3871A1",
        "solidity-icon": "#616161",
        "vs-code-icon": "#127BC6",
        "framer-icon": "#41A0EB",

        'update_primary': '#17181D',
        'update_secondary': '#F21E4E',
        'update_tertiary': '##0C0D12',

        'table_activate': '#1D263A',
      },
      maxWidth: {
        display: '70rem',
      },
      backdropBlur: {
        xs: '5px',
      },
      padding: {
        '2.5px': '2.5px',
      },
      translate: {
        'line': '105px',
      },
      fontSize: {
        'xxs': '0.5rem',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      animate: {
        spin: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      inset: {
        'Flowbite': '70px',
      }
    },
  },
  plugins: [],
}