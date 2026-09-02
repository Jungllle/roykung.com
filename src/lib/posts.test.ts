import { describe, it, expect } from 'vitest';
import { byNewest, groupByYear, isPublished } from './posts';

const post = (iso: string, draft = false) => ({
  id: iso,
  data: { pubDate: new Date(iso), draft },
});

describe('isPublished', () => {
  it('hides drafts outside dev', () => {
    expect(isPublished(post('2015-01-01', true), false)).toBe(false);
    expect(isPublished(post('2015-01-01', false), false)).toBe(true);
  });

  it('shows drafts in dev', () => {
    expect(isPublished(post('2015-01-01', true), true)).toBe(true);
  });

  it('defaults the dev flag from import.meta.env', () => {
    // Under vitest import.meta.env.DEV is true, so drafts are visible.
    expect(isPublished(post('2015-01-01', true))).toBe(true);
  });
});

describe('byNewest', () => {
  it('sorts newest first', () => {
    const sorted = [post('2012-01-01'), post('2016-01-01'), post('2014-06-01')]
      .sort(byNewest)
      .map((p) => p.id);
    expect(sorted).toEqual(['2016-01-01', '2014-06-01', '2012-01-01']);
  });
});

describe('groupByYear', () => {
  it('returns an empty list for no posts', () => {
    expect(groupByYear([])).toEqual([]);
  });

  it('groups by UTC year, newest year first, keeping order within a year', () => {
    const groups = groupByYear([
      post('2016-03-31'),
      post('2014-12-25'),
      post('2014-02-18'),
      post('2012-01-01'),
    ]);
    expect(groups.map((g) => g.year)).toEqual([2016, 2014, 2012]);
    expect(groups[1].posts.map((p) => p.id)).toEqual([
      '2014-12-25',
      '2014-02-18',
    ]);
  });

  it('keeps 1 January in its own year regardless of local timezone', () => {
    expect(groupByYear([post('2013-01-01')])[0].year).toBe(2013);
  });
});
