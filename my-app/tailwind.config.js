module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mid: '950px',
        sm_custom: '690px',
        md_custom: '710px',
        title_two: '420px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        sand: '#e1cbab',
        gold: '#e3b068',
      },
      fontFamily: {
        alfarn: ['alfarn', 'Verdana', 'Arial', 'sans-serif'],
        kumbh_sans: ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}