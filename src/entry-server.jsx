import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export function renderPage(pathname) {
  const markup = renderToString(
    <StrictMode>
      <HelmetProvider>
        <StaticRouter location={pathname}>
          <div id="root" data-prerendered={pathname}>
            <App />
          </div>
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  );

  // React 19 hoists the existing SEO components' metadata (and resource hints)
  // ahead of this wrapper. Keep that HTML in head and hydrate only the body.
  const bodyStart = markup.indexOf('<div id="root"');
  if (bodyStart === -1) throw new Error(`Missing rendered root for ${pathname}`);
  const head = markup.slice(0, bodyStart);
  if (!head.includes('<title ') || !head.includes('rel="canonical"')) {
    throw new Error(`Missing page metadata for ${pathname}`);
  }
  return { head, body: markup.slice(bodyStart) };
}
