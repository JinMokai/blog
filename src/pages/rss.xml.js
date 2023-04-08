import rss from "@astrojs/rss"
import { getCollection } from "astro:content";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function get(content) {
    const blog = await getCollection("blog", ({ data }) => {
        // 如果是不是草稿就显示
        return data.draft === false;
    });
    // 排序为降序
    blog.sort((a, b) => {
        const dateA = new Date(a.data.pubDate);
        const dateB = new Date(b.data.pubDate);
        return dateB - dateA;
    });
    return rss({
        title: "Jinkai's blogs",
        description: "A Simple and Elegant Blog",
        site: content.site,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            // Compute RSS link from post `slug`
            // This example assumes all posts are rendered as `/blog/[slug]` routes
            link: `/blog/${post.slug}/`,
        })),
    })
}