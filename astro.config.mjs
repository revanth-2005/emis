import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://ermisglobal.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
  ],
});
