import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const dataSource = await readFile(new URL('../src/data/helpPages.ts', import.meta.url), 'utf8');
const slugs = [...dataSource.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]);
const titles = [...dataSource.matchAll(/title:\s*'([^']+)'/g)].map((match) => match[1]);

test('content collection has at least 15 curated routes', () => {
  assert.ok(slugs.length >= 15);
});

test('slugs and titles are unique', () => {
  assert.equal(new Set(slugs).size, slugs.length);
  assert.equal(new Set(titles).size, titles.length);
});

test('no promotional/referral or APK download links are embedded', async () => {
  const files = [
    '../src/data/helpPages.ts', '../src/pages/index.astro', '../src/layouts/BaseLayout.astro'
  ];
  const source = (await Promise.all(files.map((file) => readFile(new URL(file, import.meta.url), 'utf8')))).join('\n');
  assert.doesNotMatch(source, /\b(?:deposit bonus|sign.?up bonus|refer and earn|download apk now)\b/i);
  assert.doesNotMatch(source, /Response\.redirect|googlebot|bingbot/i);
});

test('official cybercrime resource is present', async () => {
  const layout = await readFile(new URL('../src/layouts/BaseLayout.astro', import.meta.url), 'utf8');
  assert.match(layout, /cybercrime\.gov\.in/);
  assert.match(layout, /1930/);
});
