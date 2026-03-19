import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  site: 'https://dotdaniel.dev',

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-ibm-plex-mono',
      weights: [500],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});