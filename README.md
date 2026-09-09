# Humåsa AB - Portfolio Website

This is the website for Humasa.se

## Tech Stack
- React
- Vite
- TailwindCSS

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
