import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  site: 'https://dotdaniel.dev',

  vite: {
    plugins: [tailwindcss()],
  },
});