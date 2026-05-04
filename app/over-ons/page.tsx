import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';

const TITLE = 'Over Ons — Dakwerk Limburg-platform';
const DESCRIPTION =
  'Maak kennis met Dakwerk Limburg: een netwerk van erkende lokale dakwerkers in heel Limburg, met focus op kwaliteit, transparantie en snelle service.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://dakwerklimburg.be/over-ons' },
  openGraph: {
    title: TITLE,
    description:
      'Maak kennis met Dakwerk Limburg: een netwerk van erkende lokale dakwerkers in heel Limburg.',
    url: 'https://dakwerklimburg.be/over-ons',
    type: 'website',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'Maak kennis met Dakwerk Limburg: een netwerk van erkende lokale dakwerkers in heel Limburg.',
    images: DEFAULT_TWITTER_IMAGES,
  },
};

export default function OverOnsPage() {
  return (
    <main className="bg-white">
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-8">
            Over Dakwerk Limburg
          </h1>
          <div className="space-y-6 text-main text-lg leading-relaxed">
            <p>
              Dakwerk Limburg is geen klassiek dakwerkbedrijf — wij zijn een platform dat
              huiseigenaars in Limburg verbindt met erkende lokale dakwerkers. Op die manier krijg
              je snel een vakman ter plaatse zonder zelf alle bedrijven in de regio te moeten
              afgaan.
            </p>
            <p>
              Onze dakwerkers zijn allemaal erkend (Bouwunie, Confederatie Bouw of gelijkwaardig)
              en geven 10-jarige aansprakelijkheid op hun werk, zoals wettelijk vereist. We
              selecteren actief op kwaliteit, reactiesnelheid en eerlijke prijsstelling — geen
              losse uitvoerders of zwartwerk.
            </p>
            <p>
              Voor jou als klant: één aanvraag, gratis inmeting, één duidelijke offerte. Geen
              tussenpersonen, geen call center, gewoon een vakman uit jouw regio die jouw dak komt
              bekijken.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
