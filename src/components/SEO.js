// src/components/SEO.js
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url }) => {
  return (
    <Helmet>
      <title>
        {title}
      </title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Optional: Open Graph / social preview */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
};

export default SEO;
