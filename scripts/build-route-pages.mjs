import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';
import { publicRoutes } from '../src/publicRoutes.js';

const outputDirectory = new URL('../dist/', import.meta.url);
const projectDirectory = fileURLToPath(new URL('../', import.meta.url));
const mode = process.argv.includes('--mode')
  ? process.argv[process.argv.indexOf('--mode') + 1]
  : 'production';
if (!mode) throw new Error('--mode requires a value');

// Build both sides in the same mode, including the same public form settings.
await build({ root: projectDirectory, mode });
const template = await readFile(new URL('index.html', outputDirectory), 'utf8');
if (!template.includes('<!--app-head-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('The HTML template is missing its pre-render placeholders');
}

// Keep the temporary Node bundle outside dist so it cannot be deployed.
// Its location under node_modules also allows external packages to resolve.
const cacheDirectory = new URL('../node_modules/.cache/', import.meta.url);
await mkdir(cacheDirectory, { recursive: true });
const serverDirectory = await mkdtemp(fileURLToPath(new URL('humasa-prerender-', cacheDirectory)));
try {
  await build({
    root: projectDirectory,
    mode,
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: serverDirectory,
      copyPublicDir: false,
    },
  });
  const { renderPage } = await import(pathToFileURL(`${serverDirectory}/entry-server.js`).href);
  for (const route of Object.values(publicRoutes)) {
    const { head, body } = renderPage(route);
    const html = template.replace('<!--app-head-->', () => head)
      .replace('<div id="root"></div>', () => body);
    const directory = new URL(route === '/' ? './' : `${route.slice(1)}/`, outputDirectory);
    await mkdir(directory, { recursive: true });
    await writeFile(new URL('index.html', directory), html);
  }
  console.log(`Pre-rendered ${Object.keys(publicRoutes).length} public pages.`);
} finally {
  await rm(serverDirectory, { recursive: true, force: true });
}
