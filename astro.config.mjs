import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://{{DOMAIN}}',
  integrations: [vue(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  compressHTML: true,
});
