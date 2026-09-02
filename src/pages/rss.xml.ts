import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { byNewest, isPublished } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', isPublished)).sort(byNewest);
  return rss({
    title: 'Roy Lin 林昆彥',
    description:
      '林昆彥 (Roy Lin) 的文章 — 關於創業、產品、科技與生活的思考與紀錄。',
    site: context.site ?? 'https://roykung.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: '<language>zh-TW</language>',
  });
}
