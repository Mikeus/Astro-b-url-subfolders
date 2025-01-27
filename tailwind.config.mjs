import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2C3E50',
        'brand-green': '#27AE60',
        'brand-gray': '#F5F5F5'
      }
    }
  },
  plugins: [typography, forms]
}
