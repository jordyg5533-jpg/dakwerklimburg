export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: number;
  metaTitle: string;
  metaDescription: string;
}

export const articles: Article[] = [
  {
    slug: 'kosten-dakrenovatie-limburg',
    title: 'Wat kost een dakrenovatie in Limburg? Prijsgids 2025',
    excerpt:
      'Wat mag een dakrenovatie in Limburg kosten in 2025? Een volledig overzicht van prijzen per m² voor hellende daken, platte daken en dakisolatie — inclusief tips om te besparen.',
    category: 'Prijzen & Budget',
    publishDate: '2025-05-07',
    readTime: 7,
    metaTitle: 'Kosten dakrenovatie Limburg 2025 — Prijsgids per m²',
    metaDescription:
      'Wat kost een dakrenovatie in Limburg? Actuele prijzen per m² voor hellend dak, plat dak en dakisolatie — inclusief premies en bespaartips.',
  },
  {
    slug: 'dakrenovatie-premie-limburg',
    title: 'Dakrenovatie premie Limburg 2025 — Alle subsidies op een rij',
    excerpt:
      'Welke premies zijn er voor dakrenovatie in Limburg? Alles over de Mijn VerbouwPremie, gemeentepremies en energieleningen — inclusief een stappenplan om ze aan te vragen.',
    category: 'Premies & Subsidies',
    publishDate: '2025-05-07',
    readTime: 8,
    metaTitle: 'Dakrenovatie premie Limburg 2025 — Mijn VerbouwPremie & subsidies',
    metaDescription:
      'Welke premies zijn er voor dakrenovatie in Limburg? Mijn VerbouwPremie, gemeentepremies en energieleningen. Tot 30% terugbetaling op dakisolatie.',
  },
  {
    slug: 'epdm-of-pvc-plat-dak',
    title: 'EPDM of PVC voor uw plat dak: wat is de beste keuze?',
    excerpt:
      'EPDM of PVC voor uw plat dak? We vergelijken beide materialen op prijs, levensduur, onderhoud en toepassing — zodat u de juiste keuze maakt voor uw situatie.',
    category: 'Materialen & Technieken',
    publishDate: '2025-05-07',
    readTime: 6,
    metaTitle: 'EPDM of PVC plat dak: vergelijking, prijs en beste keuze (2025)',
    metaDescription:
      'EPDM of PVC voor uw plat dak? Vergelijk beide materialen op prijs, levensduur en onderhoud. Ontdek welke dakbedekking het beste past bij uw situatie.',
  },
];
