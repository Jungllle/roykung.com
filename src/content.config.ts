import { file, glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Load Markdown files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // ISO date (YYYY-MM-DD); YAML parses it to a Date, coerce handles strings too
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      // Draft posts are excluded from the blog index, post routes and the feed
      draft: z.boolean().default(false),
      // Relative path to an image next to the post, optimised by astro:assets
      heroImage: image().optional(),
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
