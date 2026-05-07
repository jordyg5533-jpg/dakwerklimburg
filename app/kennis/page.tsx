import Link from 'next/link';
import type { Metadata } from 'next';
import { Clock, ArrowRight } from 'lucide-react';
import { articles } from '@/lib/articles';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Kenniscentrum dakwerken Limburg — Prijzen, premies & tips',
  description:
    'Alles wat u moet weten over dakwerken in Limburg: actuele prijzen, premies, materiaalkeuze en onderhoudstips van erkende dakwerkers.',
  alternates: {
    canonical: 'https://dakwerklimburg.be/kennis',
  },
  openGraph: {
    title: 'Kenniscentrum dakwerken Limburg | Dakwerk Limburg',
    description:
      'Prijzen, premies en tips voor dakwerken in Limburg. Praktische gidsen van erkende vakmannen.',
    type: 'website',
    url: 'https://dakwerklimburg.be/kennis',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kenniscentrum dakwerken Limburg',
    description: 'Prijzen, premies en tips voor dakwerken in Limburg.',
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  'Prijzen & Budget': 'bg-green-100 text-green-800',
  'Premies & Subsidies': 'bg-blue-100 text-blue-800',
  'Materialen & Technieken': 'bg-orange-100 text-orange-800',
};

export default function KennisPage() {
  return (
    <div className="bg-white">
      <section className="bg-primary text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">
            Kenniscentrum
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white">
            Alles over dakwerken in Limburg
          </h1>
          <p className="text-blue-200 mt-4 max-w-2xl text-lg leading-relaxed">
            Praktische gidsen over prijzen, premies en materiaalkeuze — zodat u
            goed beslagen ten ijs komt bij uw dakwerker.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/kennis/${article.slug}`}
                className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col bg-background"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <span
                    className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${
                      CATEGORY_COLORS[article.category] ?? 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {article.category}
                  </span>
                  <h2 className="text-primary font-bold text-lg leading-snug group-hover:text-accent transition-colors mb-3">
                    {article.title}
                  </h2>
                  <p className="text-sub text-sm leading-relaxed flex-1 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-sub pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime} min leestijd
                    </span>
                    <span>
                      {new Date(article.publishDate).toLocaleDateString('nl-BE', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
                <div className="px-6 pb-5">
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:underline">
                    Lees artikel <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Klaar om te starten?
          </h2>
          <p className="text-blue-200 mb-6">
            Vraag een gratis en vrijblijvende offerte aan bij een erkende dakwerker in uw regio.
          </p>
          <Link
            href="/#hero"
            className="inline-block bg-accent hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Gratis offerte aanvragen →
          </Link>
        </div>
      </section>
    </div>
  );
}
