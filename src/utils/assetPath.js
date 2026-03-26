/**
 * Returns the correct path for a public asset, respecting the Vite base URL.
 * Use this instead of hardcoded absolute paths like "/IMG/photo.jpg".
 * Works correctly both on localhost and when deployed to GitHub Pages.
 *
 * @param {string} path - Path relative to the public folder, e.g. "IMG/photo.jpg"
 * @returns {string} Full resolved path
 */
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
