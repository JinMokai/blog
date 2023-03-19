// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    updateDate: z.string().optional(),
    description: z
    .string()
    .max(
        160,
        "描述文字请保持160个字符"
    ),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.object({
        url: z.string().optional(),
        alt: z.string().optional()
    }).optional(),
    draft: z.boolean()
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
};