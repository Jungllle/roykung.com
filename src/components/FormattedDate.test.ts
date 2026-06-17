import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import FormattedDate from './FormattedDate.astro';

describe('FormattedDate', () => {
  it('renders the date correctly in short format', async () => {
    const container = await AstroContainer.create();
    
    // Create a fixed date for testing
    const testDate = new Date('2026-06-17T10:00:00Z');
    
    const result = await container.renderToString(FormattedDate, {
      props: {
        date: testDate,
      },
    });

    // Check if the ISO string is in the datetime attribute
    expect(result).toContain(testDate.toISOString());
    // Check if the formatted output "Jun 17, 2026" (or similar depending on timezone/locale, but we forced en-us) is present
    expect(result).toMatch(/Jun 17, 2026/i);
  });
});
