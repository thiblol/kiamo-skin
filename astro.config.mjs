// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Demo deploy target. NOT kiamoskin.com — that is the client's existing live
  // site. Canonical URLs, sitemap and OG tags all derive from this.
  site: 'https://kiamo-demo.pages.dev',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-display',
      weights: [300, 400],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Jost',
      cssVariable: '--font-sans',
      weights: [300, 400, 500],
      styles: ['normal'],
      subsets: ['latin'],
    },
  ],
});
