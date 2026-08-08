import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://www.ermisglobal.com',
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
  ],
});
