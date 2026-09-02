// Post-build smoke test for the static output in dist/.
// Run with `npm run test:smoke` after `npm run build`. Uses only node:test so
// it needs no extra dependencies and runs in a few milliseconds.
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { test } from 'node:test';

const DIST = resolve(process.argv[2] ?? 'dist');
const SITE = 'https://roykung.com';

const read = (rel) => readFileSync(join(DIST, rel), 'utf8');

function* htmlFiles(dir = DIST) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.name.endsWith('.html')) yield path;
  }
}

/** Resolve a site-relative path to the file Static Assets would serve. */
function servedFile(pathname) {
  const clean = decodeURIComponent(pathname.split(/[?#]/)[0]);
  const candidates = clean.endsWith('/')
    ? [join(DIST, clean, 'index.html')]
    : [
        join(DIST, clean),
        join(DIST, `${clean}.html`),
        join(DIST, clean, 'index.html'),
      ];
  return candidates.find((c) => existsSync(c) && statSync(c).isFile());
}

test('dist/ exists with the top-level pages', () => {
  assert.ok(existsSync(DIST), `${DIST} missing – run \`npm run build\` first`);
  for (const rel of [
    'index.html',
    '404.html',
    'blog/index.html',
    'talk/index.html',
    'songs/index.html',
    'rss.xml',
    'sitemap-index.xml',
    'robots.txt',
    '_headers',
  ]) {
    assert.ok(existsSync(join(DIST, rel)), `missing ${rel}`);
  }
});

test('every blog post directory has an index.html', () => {
  const posts = readdirSync(join(DIST, 'blog'), { withFileTypes: true }).filter(
    (d) => d.isDirectory(),
  );
  assert.ok(posts.length > 0, 'no blog posts built');
  for (const post of posts) {
    assert.ok(
      existsSync(join(DIST, 'blog', post.name, 'index.html')),
      post.name,
    );
  }
});

test('RSS lists exactly the built posts with trailing-slash links', () => {
  const rss = read('rss.xml');
  const links = [...rss.matchAll(/<item>.*?<link>([^<]+)<\/link>/gs)].map(
    (m) => m[1],
  );
  const built = readdirSync(join(DIST, 'blog'), { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => `${SITE}/blog/${d.name}/`)
    .sort();
  assert.deepEqual([...links].sort(), built);
});

test('sitemap URLs all resolve to built files', () => {
  const sitemap = read('sitemap-0.xml');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  assert.ok(locs.length > 0, 'empty sitemap');
  for (const loc of locs) {
    assert.ok(loc.startsWith(SITE), `unexpected origin: ${loc}`);
    const pathname = new URL(loc).pathname;
    assert.ok(pathname.endsWith('/'), `missing trailing slash: ${loc}`);
    assert.ok(servedFile(pathname), `sitemap entry has no file: ${loc}`);
  }
});

test('internal links and asset references resolve to built files', () => {
  const broken = [];
  for (const file of htmlFiles()) {
    const html = readFileSync(file, 'utf8');
    for (const m of html.matchAll(/\b(?:href|src)="(\/[^"]*)"/g)) {
      const target = m[1];
      if (!servedFile(target))
        broken.push(`${file.slice(DIST.length)} → ${target}`);
    }
  }
  assert.deepEqual(broken, []);
});

test('every page has a canonical URL with a trailing slash and the RSS link', () => {
  for (const file of htmlFiles()) {
    const html = readFileSync(file, 'utf8');
    const rel = file.slice(DIST.length);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    assert.ok(canonical, `${rel}: no canonical`);
    assert.ok(
      canonical.startsWith(SITE) && canonical.endsWith('/'),
      `${rel}: ${canonical}`,
    );
    assert.match(
      html,
      /rel="alternate" type="application\/rss\+xml"/,
      `${rel}: no RSS link`,
    );
  }
});

test('profile image is served as an optimised asset, not the raw JPEG', () => {
  const html = read('index.html');
  assert.match(html, /<img src="\/_astro\/profile\.[\w-]+\.webp"/);
  assert.ok(
    !existsSync(join(DIST, 'profile.jpeg')),
    'raw profile.jpeg still in dist/',
  );
});

test('_headers carries the security policy for every path', () => {
  const headers = read('_headers');
  const block = headers.split(/\n(?=\S)/).find((b) => b.startsWith('/*\n'));
  assert.ok(block, 'no /* block in _headers');
  for (const name of [
    'Content-Security-Policy',
    'Strict-Transport-Security',
    'X-Content-Type-Options',
    'Referrer-Policy',
    'Permissions-Policy',
  ]) {
    assert.match(block, new RegExp(`^  ${name}: `, 'm'), `missing ${name}`);
  }
});

test('pages contain no inline scripts or styles, so the strict CSP holds', () => {
  const offenders = [];
  for (const file of htmlFiles()) {
    const html = readFileSync(file, 'utf8');
    const rel = file.slice(DIST.length);
    // <script> without src is inline; JSON-LD data blocks never execute.
    for (const m of html.matchAll(/<script\b([^>]*)>/g)) {
      if (!/\bsrc=/.test(m[1]) && !/application\/ld\+json/.test(m[1]))
        offenders.push(`${rel}: inline <script${m[1]}>`);
    }
    if (/<style\b/.test(html)) offenders.push(`${rel}: <style> element`);
    if (/\sstyle="/.test(html)) offenders.push(`${rel}: style attribute`);
  }
  assert.deepEqual(offenders, []);
});
