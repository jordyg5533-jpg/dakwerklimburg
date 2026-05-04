import { cities } from '@/lib/cities';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';

interface StadPageProps {
  params: { stad: string };
}

export function generateStaticParams() {
  return cities.map((city) => ({
    stad: city.slug,
  }));
}

export function generateMetadata({ params }: StadPageProps) {
  const city = cities.find((c) => c.slug === params.stad);
  if (!city) return {};

  const title = `Dakwerker ${city.name} — Betrouwbare Dakwerken & Gratis Offerte`;
  const description = `Op zoek naar een dakwerker in ${city.name}? ${city.description} Gratis offerte binnen 24 uur.`;
  const url = `https://dakwerklimburg.be/${city.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Dakwerk Limburg',
      locale: 'nl_BE',
      type: 'website',
      images: DEFAULT_OG_IMAGES,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: DEFAULT_TWITTER_IMAGES,
    },
  };
}

export default function StadPage({ params }: StadPageProps) {
  const city = cities.find((c) => c.slug === params.stad);
  if (!city) notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">
        Dakwerker {city.name}
      </h1>
      <p className="text-sub text-lg mb-8">{city.description}</p>
      <p className="text-main mb-8">
        Deze pagina wordt binnenkort volledig uitgewerkt met lokale informatie,
        diensten en een offerteformulier specifiek voor {city.name}.
      </p>
      <Link
        href="/"
        className="inline-block bg-accent hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-all"
      >
        ← Terug naar Dakwerk Limburg
      </Link>
    </main>
  );
}
