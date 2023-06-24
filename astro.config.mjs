import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/scripts/remark-reading-time.mjs';
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://chkaiblog.eu.org/",
  markdown: {
    shikiConfig: {
      theme: "dracula"
    },
    syntaxHighlight: 'shiki',
    rehypePlugins: ['rehype-slug', ['rehype-autolink-headings', {
      behavior: 'wrap'
    }]],
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true
  },
  integrations: [sitemap(), robotsTxt()]
});
