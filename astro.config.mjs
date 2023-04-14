import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/scripts/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
    site: "https://sage-souffle-01bff9.netlify.app/",
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
