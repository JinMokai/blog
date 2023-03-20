import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/scripts/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
    site: "https://jinmark-kai.github.io",
    base: "/blog",
    markdown: {
        shikiConfig: {
            theme: "github-dark",
        },
        rehypePlugins: ['rehype-slug', ['rehype-autolink-headings', {
            behavior: 'wrap'
        }]],
        remarkPlugins: [remarkReadingTime],
        extendDefaultPlugins: true
    }
});
