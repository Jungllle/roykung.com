import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    mdx()
  ],
  output: 'server',
  adapter: cloudflare({
    imageService: 'cloudflare',
  }),
  site: 'https://roykung.com',
});
