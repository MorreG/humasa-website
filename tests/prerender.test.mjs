import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import { test } from 'node:test';
import { publicRoutes } from '../src/publicRoutes.js';

const dist = new URL('../dist/', import.meta.url);
const unfinished = new Set(['/techtrade', '/garnbutik']);

for (const route of Object.values(publicRoutes)) {
  test(`${route} delivers page content and a single complete metadata set`, async () => {
    const file = new URL(route === '/' ? 'index.html' : `${route.slice(1)}/index.html`, dist);
    const html = await readFile(file, 'utf8');
    const head = html.slice(0, html.indexOf('</head>'));
    const body = html.slice(html.indexOf('<body>'));

    assert.match(body, /<main[\s>]/);
    assert.match(body, /<h1[\s>][\s\S]+?<\/h1>/);
    assert.match(body, /<a[^>]+href="\/about#contact"/);
    assert.ok(body.includes(`data-prerendered="${route}"`));
    assert.equal((html.match(/<title[\s>]/g) || []).length, 1);
    assert.equal((html.match(/name="description"/g) || []).length, 1);
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
    assert.ok(head.includes(`href="https://humasa.se${route}"`));
    for (const property of ['og:title', 'og:description', 'og:url', 'og:image']) {
      assert.equal((head.match(new RegExp(`property="${property}"`, 'g')) || []).length, 1);
    }
    assert.match(head, /property="og:image" content="https:\/\/humasa\.se\//);
    assert.doesNotMatch(body, /<title[\s>]|name="description"|rel="canonical"/);
    assert.equal(head.includes('content="noindex, follow"'), unfinished.has(route));

    // Missing bundles would leave a readable but noninteractive page.
    const assets = [...html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)];
    assert.ok(assets.some(([, path]) => path.endsWith('.js')));
    assert.ok(assets.some(([, path]) => path.endsWith('.css')));
    for (const [, path] of assets) await access(new URL(path.slice(1), dist));
  });
}

test('project-specific content and form configuration survive build-time rendering', async () => {
  const stockwik = await readFile(new URL('stockwik/index.html', dist), 'utf8');
  const about = await readFile(new URL('about/index.html', dist), 'utf8');
  assert.match(stockwik, /<title[^>]*>Dekalmontering för Stockwik \| Humåsa<\/title>/);
  assert.match(stockwik, /Guldkant på tillvaron/);
  // Either the configured form or the deliberate email fallback must exist.
  assert.match(about, /aria-label="Kontaktformulär"|Kontakta mig via mejl/);
});

test('previews and the temporary server bundle are excluded from deployment', async () => {
  await assert.rejects(access(new URL('preview/index.html', dist)));
  await assert.rejects(access(new URL('preview/techtrade/index.html', dist)));
  await assert.rejects(access(new URL('preview/garnbutik/index.html', dist)));
  const entries = await readdir(dist, { recursive: true });
  assert.ok(!entries.some(path => path.includes('entry-server')));
  const errorPage = await readFile(new URL('404.html', dist), 'utf8');
  assert.match(errorPage, /Sidan hittades inte/);
  assert.match(errorPage, /noindex/);
  assert.doesNotMatch(errorPage, /l\.replace|window\.location/);
});
