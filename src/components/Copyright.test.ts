import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import Copyright from './Copyright.astro';

describe('Copyright', () => {
  it('renders the current year and name', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Copyright);

    const currentYear = new Date().getFullYear();
    expect(result).toContain(currentYear.toString());
    expect(result).toContain('Roy Lin');
    expect(result).toContain('All Rights Reserved');
  });
});
