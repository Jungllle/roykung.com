import { describe, it, expect } from 'vitest';
import { talkSource, yearRange } from './talks';

describe('talkSource', () => {
  it('recognises YouTube', () => {
    expect(talkSource('https://www.youtube.com/watch?v=abc')).toBe('YouTube');
    expect(talkSource('https://youtu.be/abc')).toBe('YouTube');
  });

  it('recognises 運動筆記', () => {
    expect(talkSource('https://basketball.biji.co/index.php?q=1')).toBe(
      '運動筆記',
    );
  });

  it('recognises SpeakerDeck and SlideShare', () => {
    expect(talkSource('https://speakerdeck.com/roykung/x')).toBe('SpeakerDeck');
    expect(talkSource('https://www.slideshare.net/roykung/x')).toBe(
      'SlideShare',
    );
  });

  it('falls back to the hostname', () => {
    expect(talkSource('https://www.example.org/talk')).toBe('example.org');
  });
});

describe('yearRange', () => {
  it('returns an empty string for no dates', () => {
    expect(yearRange([])).toBe('');
  });

  it('returns a single year when all dates share it', () => {
    expect(yearRange([new Date('2016-03-31'), new Date('2016-01-01')])).toBe(
      '2016',
    );
  });

  it('returns first – last for a spread of years', () => {
    expect(
      yearRange([
        new Date('2014-03-14'),
        new Date('2012-06-05'),
        new Date('2016-03-31'),
      ]),
    ).toBe('2012 – 2016');
  });
});
