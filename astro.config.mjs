import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  site: 'https://roykung.com',
  // Match Cloudflare Static Assets, which serves /blog/index.html at /blog/
  // and redirects /blog there. Keeping dev and canonical URLs identical.
  trailingSlash: 'always',
  // Prefetch internal links on hover so navigation feels instant without
  // shipping a framework. Pairs with <ClientRouter /> in Layout.astro.
  prefetch: true,
});
