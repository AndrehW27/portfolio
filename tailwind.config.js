/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: ['selector', '.white'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'uw': '2560px',   // ultrawide breakpoint (example)
      'uw2': '3440px',  // for 21:9 ultrawide monitors
    },
    extend: {
      colors: {
        // background: 'hsl(var(--background))',
        // surface: 'hsl(var(--surface))',
        // accent: 'hsl(var(--accent))',
        // text: {
        //   DEFAULT: 'hsl(var(--text))',
        //   muted: 'hsl(var(--text-muted))',
        // },
      }
    },
  },
  plugins: [],
}