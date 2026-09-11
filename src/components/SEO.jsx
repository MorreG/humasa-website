import { Helmet } from 'react-helmet-async';
import { asset } from '../utils/assetPath';

export default function SEO({ title, description, image, url }) {
  const siteTitle = 'Humåsa';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Humåsa erbjuder skräddarsydda konsulttjänster inom webbutveckling, design och hantverk.';
  const defaultImage = asset('IMG/DSC_1836.JPG');
  const siteUrl = 'https://humasa.se';
  const pageUrl = new URL(url || '/', siteUrl).href;
  const imageUrl = new URL(image || defaultImage, siteUrl).href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title data-page-seo="true">{fullTitle}</title>
      <meta data-page-seo="true" name="description" content={description || defaultDescription} />
      <link data-page-seo="true" rel="canonical" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta data-page-seo="true" property="og:type" content="website" />
      <meta data-page-seo="true" property="og:url" content={pageUrl} />
      <meta data-page-seo="true" property="og:title" content={fullTitle} />
      <meta data-page-seo="true" property="og:description" content={description || defaultDescription} />
      <meta data-page-seo="true" property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta data-page-seo="true" property="twitter:card" content="summary_large_image" />
      <meta data-page-seo="true" property="twitter:url" content={pageUrl} />
      <meta data-page-seo="true" property="twitter:title" content={fullTitle} />
      <meta data-page-seo="true" property="twitter:description" content={description || defaultDescription} />
      <meta data-page-seo="true" property="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
