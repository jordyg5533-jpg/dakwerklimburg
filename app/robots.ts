import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/bedankt'],
      },
    ],
    sitemap: 'https://dakwerklimburg.be/sitemap.xml',
  };
}
