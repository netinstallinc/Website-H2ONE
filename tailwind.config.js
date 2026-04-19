/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display',
               'SF Pro Text', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'apple-blue': '#0071e3',
        'apple-gray': '#f5f5f7',
        'apple-dark': '#1d1d1f',
        'apple-mid': '#6e6e73',
      },
      fontSize: {
        'display': ['80px', { lineHeight: '1.05', letterSpacing: '-0.003em', fontWeight: '700' }],
        'headline': ['48px', { lineHeight: '1.08', letterSpacing: '-0.003em', fontWeight: '700' }],
        'title': ['28px', { lineHeight: '1.14', letterSpacing: '0', fontWeight: '600' }],
        'body': ['17px', { lineHeight: '1.47', letterSpacing: '-0.022em' }],
      },
      maxWidth: {
        'content': '980px',
      },
    },
  },
  plugins: [],
}
