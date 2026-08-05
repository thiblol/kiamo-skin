// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { articles } from './src/data/articles.ts';

const BUILD_DATE = new Date().toISOString().slice(0, 10);

// https://astro.build/config
export default defineConfig({
  // The live domain. Canonical URLs, sitemap and OG tags all derive from this.
  site: 'https://kiamoskin.com',
  // Canonicals and the sitemap emit trailing slashes, and Cloudflare 308s to the
  // slashed form. Enforcing it here keeps internal links off that redirect hop.
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Google uses lastmod to schedule recrawls. Articles carry a real
      // dateModified from git history; everything else gets the build date.
      serialize: (item) => {
        const slug = new URL(item.url).pathname.replace(/^\/journal\/|\/$/g, '');
        const article = articles.find((a) => a.slug === slug);
        item.lastmod = article?.dateModified ?? BUILD_DATE;
        return item;
      },
    }),
  ],
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
