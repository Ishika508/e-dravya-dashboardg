/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        science: {
          50: '#f0fdf4', // Very light green background
          100: '#dcfce7',
          500: '#22c55e', // Success
          600: '#16a34a', // Primary Green
          800: '#166534', // Dark Text
          900: '#14532d',
        },
        slate: {
          850: '#1e293b', // Sidebar
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
