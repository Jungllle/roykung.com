import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  output: 'server',
  adapter: cloudflare({
    imageService: 'cloudflare',
  }),
  site: 'https://roykung.com',
});