import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './styles/_cleanchoice.css'
import './styles/_stockwik.css'
import './styles/_booking.css'
import './styles/_hero.css'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import { normalizePath } from './utils/normalizePath'

const root = document.getElementById('root');
const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

if (root.dataset.prerendered === normalizePath(window.location.pathname)) {
  hydrateRoot(root, app);
} else {
  // Development has no pre-rendered HTML. Old /?/ links can also point at a
  // different page from the downloaded document; render that route normally.
  root.removeAttribute('data-prerendered');
  document.head.querySelectorAll('[data-page-seo]').forEach(tag => tag.remove());
  createRoot(root).render(app);
}
