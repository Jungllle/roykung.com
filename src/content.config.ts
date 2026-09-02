import { file, glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
  }),
});

const talks = defineCollection({
  loader: file('./src/content/talks.yaml'),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

const songs = defineCollection({
  loader: file('./src/content/songs.yaml'),
  schema: z.object({
    title: z.string(),
    youtubeId: z.string().regex(/^[\w-]{11}$/, 'Expected a YouTube video id'),
  }),
});

export const collections = { blog, talks, songs };
