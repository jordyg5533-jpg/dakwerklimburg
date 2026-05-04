import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';

const TITLE = 'Onze Dakwerkdiensten — Erkende Dakwerken in heel Limburg';
const DESCRIPTION =
  'Overzicht van alle dakwerken in Limburg: dakrenovatie, plat dak, dakisolatie, goten en zinkwerk, stormschade. Erkende dakwerker, gratis offerte binnen 24 uur.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://dakwerklimburg.be/diensten' },
  openGraph: {
    title: TITLE,
    description: 'Overzicht van alle dakwerken in Limburg.',
    url: 'https://dakwerklimburg.be/diensten',
    type: 'website',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Overzicht van alle dakwerken in Limburg.',
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const DIENSTEN = [
  {
    href: '/diensten/dakrenovatie',
    titel: 'Dakrenovatie',
    foto: 'https://i.postimg.cc/3NDkbtHn/dakrenovatie-kaart.jpg',
    alt: 'Dakrenovatie van een hellend dak in Limburg',
    omschrijving:
      'Volledige of gedeeltelijke renovatie van hellende daken in Limburg. Vanaf €120/m².',
  },
  {
    href: '/diensten/plat-dak',
    titel: 'Plat Dak',
    foto: 'https://i.postimg.cc/NLqKhRgm/plat-dak-kaart.jpg',
    alt: 'Plat dak vernieuwen in EPDM',
    omschrijving:
      'Plat dak vernieuwen in EPDM, bitumen of PVC. Eerlijke prijs en lange garantie.',
  },
  {
    href: '/diensten/dakisolatie',
    titel: 'Dakisolatie',
    foto: 'https://i.postimg.cc/WzJdf5P7/dakisolatie-kaart.jpg',
    alt: 'Dakisolatie aangebracht onder de pannen',
    omschrijving:
      "Dakisolatie met Mijn VerbouwPremie. Tot duizenden euro's premie via Vlaanderen.",
  },
  {
    href: '/diensten/goten-zinkwerk',
    titel: 'Goten & Zinkwerk',
    foto: 'https://i.postimg.cc/1XN8YvZM/goten-kaart.jpg',
    alt: 'Nieuwe dakgoten en zinkwerk',
    omschrijving:
      'Nieuwe dakgoten, regenpijpen en zinkwerk. Vanaf €60 per lopende meter.',
  },
  {
    href: '/diensten/stormschade',
    titel: 'Stormschade',
    foto: 'https://i.postimg.cc/LhKJdjHj/stormschade-kaart.jpg',
    alt: 'Dakwerker herstelt stormschade',
    omschrijving:
      'Snelle herstellingen na storm of acute lekkage. Binnen het uur ter plaatse.',
  },
];

export default function DienstenPage() {
  return (
    <main className="bg-white">
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
            Onze Dakwerkdiensten in Limburg
          </h1>
          <p className="text-main text-lg leading-relaxed mb-12 max-w-3xl">
            Dakwerk Limburg verbindt je met erkende dakwerkers voor elke vorm van dakwerk in de
            provincie. Hieronder een overzicht van onze diensten — klik door voor details, prijzen
            en premies per dienst.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {DIENSTEN.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-accent transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={d.foto}
                    alt={d.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-primary mb-2">{d.titel}</h2>
                  <p className="text-main text-sm leading-relaxed">{d.omschrijving}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-bg-alt rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Niet zeker welke dienst je nodig hebt?
            </h2>
            <p className="text-main text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Vraag een gratis dakscreening aan. Een lokale erkende dakwerker komt langs, bekijkt
              je dak en vertelt je eerlijk wat nodig is — zonder verplichtingen.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+32456191360"
                className="inline-flex items-center gap-2 bg-accent hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-md transition-all"
              >
                <Phone className="w-5 h-5" />
                Bel +32 456 19 13 60
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all"
              >
                Naar contactpagina
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
