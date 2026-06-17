import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import NavigationBar from './NavigationBar.astro';

describe('NavigationBar', () => {
  it('renders correctly with all nav items', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(NavigationBar);

    expect(result).toContain('Roy Lin 林昆彥');
    expect(result).toContain('/blog');
    expect(result).toContain('文章');
    expect(result).toContain('/talk');
    expect(result).toContain('演講分享');
    expect(result).toContain('/songs');
    expect(result).toContain('喜歡的歌曲');
  });
});
