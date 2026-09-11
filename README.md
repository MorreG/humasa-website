# Humåsa AB - Portfolio Website

This is the website for Humasa.se

## Tech Stack
- React
- Vite
- TailwindCSS

## Preview unfinished projects

Run `npm run dev` and open these paths on the local URL printed by Vite:

- `/preview/techtrade` — the full Techtrade page.
- `/preview/garnbutik` — the full Garnbutik page.

These preview routes are available only in the development server, not in
production builds or `npm run preview`. The regular `/techtrade` and `/garnbutik`
paths continue to show the work-in-progress page.

## Pre-rendered pages on GitHub Pages

`npm run build` builds the browser assets with Vite, then renders every public
route into HTML using the same React components. Each route has an HTML file
(for example, `dist/about/index.html`) containing its content and metadata.
GitHub Pages can serve these files directly; no application server is needed.
`npm run deploy` runs this build automatically through `predeploy`.

- `src/publicRoutes.js` lists public routes and is shared with `src/App.jsx`.
  Add new public paths there and register the corresponding page in the router.
  Development-only `/preview/*` routes are excluded from the production output.
- `src/entry-server.jsx` renders the page with `StaticRouter`. React 19 hoists
  metadata from the existing SEO components, which the build inserts into head.
  Keep page metadata in those components, not duplicated in `index.html`.
- `scripts/build-route-pages.mjs` builds both browser and temporary server
  bundles in the same mode so public environment settings, including the contact
  form endpoint, match. The temporary bundle is removed and never enters `dist`.
  Use `npm run build -- --mode staging` if a different Vite mode is needed.
- `src/main.jsx` hydrates matching pre-rendered HTML. Local development uses
  normal client rendering. Old `/?/about` links still work; if they resolve to a
  different route, the browser replaces the initial page and its metadata.

Directory routes can redirect permanently from `/about` to `/about/` before
returning 200. Both forms match React, including repeated contact-link clicks.
Unknown paths use `public/404.html` and retain a real 404 response.

### Preserving appearance and interactions

The page layouts, images, fonts, and CSS remain shared between the HTML build
and the browser. Browser-only work runs in effects. The navbar starts from a
consistent state and then reads the scroll position; initial refreshes allow
browser scroll restoration.

During initial hydration, entrance animations skip content already presented
in or above the viewport. This prevents text disappearing and reappearing when
JavaScript loads slowly. Sections below the viewport retain scroll reveals, and
later client-side navigation retains normal entrance behavior. Reduced-motion
preferences skip these entrance animations. Without JavaScript, initial page
content and links remain available; interactive controls require JavaScript.

### Verification

Run `npm run lint`, `npm run build`, and `npm run test:prerender`. The generated
HTML checks cover content, unique per-page metadata, canonical URLs, unfinished
pages' `noindex`, linked assets, and excluded preview/server files.

Serve `dist` using a plain static HTTP server to verify direct page requests.
Vite's dev/preview SPA fallback can hide missing files, so it is insufficient
for testing 404 behavior. Public paths must resolve to 200 and missing paths
must return 404. Repeat the live HTTP checks after deployment.

For rendering changes, compare desktop/mobile screenshots at the top, middle,
and bottom of pages. Check initial loads, in-app navigation, scroll restoration,
contact anchors, galleries, and a mocked contact-form submission. Check metadata
after navigating away from an unfinished page, and check for hydration errors.
Also test with JavaScript disabled and delayed: visible text must remain readable
and must not disappear when hydration starts.

## Contact form

The form at `/about#contact` sends name, email and message to Formspree. The
recipient is configured in Formspree, not in the browser: use
`hmsandreasson@gmail.com`. The `email` field sets Reply-To so replies go to the
visitor; `subject` labels notifications as coming from humasa.se.

### Activation

1. The production endpoint is `https://formspree.io/f/mgaepjkw`, saved in the
   tracked `.env.production` file. In Formspree, verify that the recipient is
   `hmsandreasson@gmail.com` and email notifications are enabled.
2. For local development, copy `.env.example` to `.env.local` and set
   `VITE_FORMSPREE_ENDPOINT` to that endpoint (or a separate test form).
   `.env.local` is ignored by Git. The endpoint is public; do not put account
   credentials or API secrets in any `VITE_` variable.
3. This integration submits with AJAX and includes Formspree's `_gotcha`
   honeypot. Use automatic spam filtering with the hosted reCAPTCHA step off
   for this setup. If CAPTCHA is required later, integrate an on-page challenge
   before enabling that requirement in the dashboard; a hosted CAPTCHA redirect
   cannot be completed by this AJAX form.
4. Restart the dev server after changing the endpoint. Vite embeds this public
   value at build time. Production builds, including `npm run deploy`, read
   `.env.production`; `.env.production.local` or an environment variable can
   override it. Rebuild and redeploy whenever the production endpoint changes.
5. Check the account's submission allowance and notifications in Formspree.

Without a valid endpoint the contact section shows a direct email link instead
of an inactive form. The form preserves text on failure, prevents concurrent
submissions, and only clears the fields after Formspree acknowledges success.
A network timeout has an uncertain delivery outcome, so retries are manual.

### Verification and deployment

- Run `npm run lint` and `npm run build`.
- Check required fields, invalid email, whitespace-only input, success, request
  failure, rate limits, and double clicks. Failure must preserve entered text.
- Check the contact section on desktop and mobile, including keyboard access.
- Deploy using `npm run deploy` when ready to publish.
- Submit a clearly marked test from `https://humasa.se/about#contact`, confirm it
  appears in the Formspree dashboard and the recipient inbox (check spam too),
  and verify Reply targets the visitor's email. A successful HTTP response alone
  does not prove inbox delivery.

Provider references: [AJAX submissions](https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax/),
[special fields](https://help.formspree.io/articles/building-your-form/special-fields/),
[honeypot](https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering),
[CAPTCHA settings](https://help.formspree.io/articles/form-and-project-settings/recaptcha-settings).

## Sites left to be added

- Klara Tyg & Garn Project

## Tahulet ed Tarha

The starter page is available at `/tahuletedtarha` and uses the Clean Choice layout and shared styles. Replace the placeholder text in `content` and the image paths and alt text in `images` at the top of `src/pages/TahuletEdTarha.jsx`. Image paths are relative to `public/`. The existing Tahulet project image is temporarily used in every image slot.
