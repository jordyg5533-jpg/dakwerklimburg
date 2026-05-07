import { cities } from '@/lib/cities';
import type { MetadataRoute } from 'next';

const baseUrl = 'https://dakwerklimburg.be';

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const dienstPages = [
    'dakrenovatie',
    'plat-dak',
    'dakisolatie',
    'goten-zinkwerk',
    'stormschade',
  ].map((dienst) => ({
    url: `${baseUrl}/diensten/${dienst}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const kennisPages = [
    'kosten-dakrenovatie-limburg',
    'dakrenovatie-premie-limburg',
    'epdm-of-pvc-plat-dak',
    'hoe-herken-je-een-daklek',
    'wanneer-dak-vervangen',
    'asbest-dak-vervangen-limburg',
    'epc-verbeteren-dakisolatie',
    'plat-dak-herstellen-of-vervangen',
    'leien-dak-levensduur-kosten',
  ].map((slug) => ({
    url: `${baseUrl}/kennis/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    ...cityPages,
    ...dienstPages,
    {
      url: `${baseUrl}/kennis`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    ...kennisPages,
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];
}
