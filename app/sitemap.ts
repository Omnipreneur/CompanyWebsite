import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://omnipreneur.io';
  
  const routes = [
    '',
    '/hizmetler',
    '/cozumler',
    '/teknoloji',
    '/referanslar',
    '/blog',
    '/iletisim',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Turkish routes (default)
  routes.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: {
          tr: `${baseUrl}${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    });
  });

  // English routes
  routes.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: {
          tr: `${baseUrl}${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    });
  });

  return sitemapEntries;
}

