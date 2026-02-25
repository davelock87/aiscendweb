import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  twitterHandle?: string;
  h1?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = 'https://automatizacionesaiscend.com/logo600.png',
  url = 'https://automatizacionesaiscend.com',
  type = 'website',
  author = 'AISCEND',
  twitterHandle = '@AISCEND_AI',
  h1
}) => {
  const fullTitle = `${title} | AISCEND - AI Automation Solutions`;
  const canonicalUrl = url;

  return (
    <Helmet>
      <html lang="es" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      <title>{fullTitle}</title>
      <canonical href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="AISCEND" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={twitterHandle} />

      <meta name="theme-color" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="alternate" hrefLang="es" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl.replace(/\/$/, '') + '/en'} />
    </Helmet>
  );
};
