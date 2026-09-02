/** The subset of blog frontmatter these helpers need. */
export interface PostLike {
  data: { pubDate: Date; draft: boolean };
}

/** Drafts are hidden everywhere except the local dev server. */
export function isPublished(post: PostLike, isDev = import.meta.env.DEV) {
  return isDev || !post.data.draft;
}

/** Newest first. */
export function byNewest<T extends PostLike>(a: T, b: T): number {
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}

/**
 * Group posts by publication year, newest year first, preserving the
 * incoming order within a year. Uses UTC because ISO dates parse as UTC.
 */
export function groupByYear<T extends PostLike>(
  posts: readonly T[],
): { year: number; posts: T[] }[] {
  const groups = new Map<number, T[]>();
  for (const post of posts) {
    const year = post.data.pubDate.getUTCFullYear();
    const bucket = groups.get(year);
    if (bucket) bucket.push(post);
    else groups.set(year, [post]);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => b - a)
    .map(([year, posts]) => ({ year, posts }));
}
