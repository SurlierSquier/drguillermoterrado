/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.hover-effect': {
        '@apply hover:opacity-85 hover:scale-110': {}
      }
    })
  }],
};
