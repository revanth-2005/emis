/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red:   '#C43B31',
          dark:  '#8B2820',
          light: '#D96B62',
          pale:  '#FDF1F0',
        },
        neutral: {
          ink:   '#111827',
          muted: '#6B7280',
          rule:  '#E5E7EB',
          snow:  '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['Metropolis', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(0,0,0,0.08)',
        cta:  '0 4px 24px 0 rgba(196,59,49,0.25)',
      },
    },
  },
  plugins: [],
};
