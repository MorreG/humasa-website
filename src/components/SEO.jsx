import { Helmet } from 'react-helmet-async';
import { asset } from '../utils/assetPath';

export default function SEO({ title, description, image, url }) {
  const siteTitle = 'Humåsa';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Humåsa erbjuder skräddarsydda konsulttjänster inom webbutveckling, design och hantverk.';
  const defaultImage = asset('IMG/DSC_1836.JPG');
  const siteUrl = 'https://humasa.se'; // Update with actual domain if different

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={`${siteUrl}${url || ''}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${url || ''}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${siteUrl}${url || ''}`} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}
