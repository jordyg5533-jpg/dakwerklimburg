import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';

interface Dienst {
  slug: string;
  name: string;
  description: string;
}

const diensten: Dienst[] = [
  { slug: 'dakisolatie', name: 'Dakisolatie', description: 'Professionele dakisolatie voor energiebesparing in Limburg.' },
  { slug: 'goten-zinkwerk', name: 'Goten & Zinkwerk', description: 'Dakgoten en zinkwerk: plaatsing, reiniging en vervanging.' },
  { slug: 'stormschade', name: 'Stormschade', description: 'Spoedservice bij stormschade aan uw dak in Limburg.' },
];

interface DienstPageProps {
  params: { dienst: string };
}

export function generateStaticParams() {
  return diensten.map((d) => ({ dienst: d.slug }));
}

export function generateMetadata({ params }: DienstPageProps) {
  const dienst = diensten.find((d) => d.slug === params.dienst);
  if (!dienst) return {};

  const title = `${dienst.name} in Limburg — Betrouwbare Dakwerkers & Gratis Offerte`;
  const description = `${dienst.description} Gratis offerte binnen 24 uur van een lokale vakman.`;
  const url = `https://dakwerklimburg.be/diensten/${dienst.slug}`;

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

export default function DienstPage({ params }: DienstPageProps) {
  const dienst = diensten.find((d) => d.slug === params.dienst);
  if (!dienst) notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">
        {dienst.name} in Limburg
      </h1>
      <p className="text-sub text-lg mb-8">{dienst.description}</p>
      <p className="text-main mb-8">
        Deze pagina wordt binnenkort volledig uitgewerkt met meer informatie,
        voorbeelden en een offerteformulier specifiek voor {dienst.name.toLowerCase()}.
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
