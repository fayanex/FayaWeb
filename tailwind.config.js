/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0A0C',
        surface: '#141417',
        line: '#2A2A2E',
        chrome: '#FFFFFF',
        silver: '#969598',
        muted: '#6E6E73',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: {
        wordmark: '0.28em',
      },
      maxWidth: {
        shell: '1240px',
      },
    },
  },
  plugins: [],
};
