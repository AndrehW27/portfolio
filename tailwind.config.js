/** @type {import('tailwindcss').Config} */
export default {
//   darkMode: 'class', // <-- important!
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // background: 'hsl(var(--background))',
        // surface: 'hsl(var(--surface))',
        // accent: 'hsl(var(--accent))',
        // text: {
        //   DEFAULT: 'hsl(var(--text))',
        //   muted: 'hsl(var(--text-muted))',
        // },
      },
    },
  },
  plugins: [],
}