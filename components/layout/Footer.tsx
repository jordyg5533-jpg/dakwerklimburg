'use client';

import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { useOfferteModal } from '@/components/providers/OfferteModalProvider';
import { cities } from '@/lib/cities';

function Footer() {
  const { openModal } = useOfferteModal();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link href="/" className="text-xl font-bold">
              <span className="text-white">Dakwerk </span>
              <span className="text-accent">Limburg</span>
            </Link>
            <p className="text-blue-200 text-sm mt-4 leading-relaxed">
              Betrouwbare dakwerkers in heel Limburg. Wij verbinden u met gecertificeerde vakmensen voor dakrenovatie, plat dak, dakisolatie en goten. Gratis offerte binnen 24 uur.
            </p>
            <button
              onClick={() => openModal('footer-cta')}
              className="mt-6 bg-accent hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg text-sm transition-all inline-block"
            >
              Gratis offerte aanvragen
            </button>
          </div>

          <div>
            <h3 className="text-accent font-bold text-sm uppercase tracking-wider mb-4">
              Onze Diensten
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/diensten/dakrenovatie" className="text-blue-200 text-sm hover:text-white transition-colors">
                  Dakrenovatie
                </Link>
              </li>
              <li>
                <Link href="/diensten/plat-dak" className="text-blue-200 text-sm hover:text-white transition-colors">
                  Plat Dak
                </Link>
              </li>
              <li>
                <Link href="/diensten/dakisolatie" className="text-blue-200 text-sm hover:text-white transition-colors">
                  Dakisolatie
                </Link>
              </li>
              <li>
                <Link href="/diensten/goten-zinkwerk" className="text-blue-200 text-sm hover:text-white transition-colors">
                  Goten & Zinkwerk
                </Link>
              </li>
              <li>
                <Link href="/diensten/stormschade" className="text-blue-200 text-sm hover:text-white transition-colors">
                  Stormschade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-accent font-bold text-sm uppercase tracking-wider mb-4">
              Kenniscentrum
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/kennis/kosten-dakrenovatie-limburg" className="text-blue-200 text-sm hover:text-white transition-colors">
                  Kosten dakrenovatie 2025
                </Link>
              </li>
              <li>
                <Link href="/kennis/dakrenovatie-premie-limburg" className="text-blue-200 text-sm hover:text-white transition-colors">
                  Premies Limburg 2025
                </Link>
              </li>
              <li>
                <Link href="/kennis/epdm-of-pvc-plat-dak" className="text-blue-200 text-sm hover:text-white transition-colors">
                  EPDM of PVC plat dak
                </Link>
              </li>
            </ul>
            <h3 className="text-accent font-bold text-sm uppercase tracking-wider mb-4">
              Werkgebied
            </h3>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/${city.slug}`}
                    className="text-blue-200 text-sm hover:text-white transition-colors"
                  >
                    Dakwerker {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-accent font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a
                  href="tel:+32456191360"
                  className="text-white font-bold text-sm hover:text-accent transition-colors"
                >
                  +32 456 19 13 60
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@dakwerklimburg.be"
                  className="text-blue-200 text-sm hover:text-white transition-colors"
                >
                  info@dakwerklimburg.be
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-blue-200 text-sm">
                  <p>Ma - Vr: 7:00 - 18:00</p>
                  <p>Za: 8:00 - 14:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-blue-200 text-sm">Actief in heel Limburg</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-blue-300 text-xs">
            <p>© 2026 Dakwerk Limburg. Alle rechten voorbehouden.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacyverklaring
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookiebeleid
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
