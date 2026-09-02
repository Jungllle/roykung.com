/** Human-readable label for where a talk is hosted, derived from its URL. */
export function talkSource(url: string): string {
  const host = new URL(url).hostname.replace(/^www\./, '');
  if (host === 'youtube.com' || host === 'youtu.be') return 'YouTube';
  if (host.endsWith('biji.co')) return '運動筆記';
  if (host === 'speakerdeck.com') return 'SpeakerDeck';
  if (host === 'slideshare.net') return 'SlideShare';
  return host;
}

/**
 * Inclusive year range label such as "2012 – 2016", or "2016" for a single year.
 * Uses UTC because content dates are parsed from ISO strings as UTC midnight.
 */
export function yearRange(dates: readonly Date[]): string {
  if (dates.length === 0) return '';
  const years = dates.map((d) => d.getUTCFullYear());
  const first = Math.min(...years);
  const last = Math.max(...years);
  return first === last ? `${first}` : `${first} – ${last}`;
}
