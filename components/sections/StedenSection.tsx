import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { cities } from '@/lib/cities';

export default function StedenSection() {
  return (
    <section id="steden" className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center">
          Dakwerkers in heel Limburg
        </h2>
        <p className="text-sub text-center mt-4 max-w-2xl mx-auto">
          Wij zijn actief in alle grote Limburgse steden. Kies uw stad en
          ontvang een gratis offerte van een lokale dakwerker bij u in de buurt.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 items-stretch">
          {cities.map((city) => (
            <Link
              href={`/${city.slug}`}
              key={city.slug}
              className="group bg-background rounded-xl p-5 border border-gray-100 hover:border-accent hover:shadow-md transition-all duration-200 hover:-translate-y-1 h-full flex"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                  <h3 className="font-bold text-primary group-hover:text-accent transition-colors">
                    {city.name}
                  </h3>
                </div>
                <p className="text-sub text-xs mb-2">
                  {city.population} inwoners
                </p>
                <p className="text-main text-sm leading-relaxed line-clamp-4">
                  {city.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-sub text-sm text-center mt-8">
          Uw stad niet in de lijst? Wij werken in heel Limburg.
          <Link
            href="#hero"
            className="text-accent font-semibold hover:underline ml-1"
          >
            Vraag hier uw offerte aan →
          </Link>
        </p>
      </div>
    </section>
  );
}
