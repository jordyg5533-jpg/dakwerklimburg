import type { Metadata } from 'next';
import Link from 'next/link';
import { CircleCheck as CheckCircle2, Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bedankt voor je aanvraag — wij contacteren je binnen 24 uur',
  description:
    'Je dakwerk-aanvraag werd correct ontvangen. Een lokale dakwerker uit Limburg neemt binnen 24 uur contact op voor een gratis inmeting.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://dakwerklimburg.be/bedankt' },
};

export default function BedanktPage() {
  return (
    <main className="bg-white">
      <section className="bg-bg-alt py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <CheckCircle2 className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="text-primary font-bold text-3xl lg:text-5xl mb-6 leading-tight">
            Bedankt — je aanvraag is goed ontvangen
          </h1>
          <p className="text-main text-lg leading-relaxed mb-8">
            We hebben je aanvraag goed ontvangen en sturen ze meteen door naar
            een lokale dakwerker in jouw regio. Binnen 24 uur (op werkdagen)
            neemt iemand persoonlijk contact op voor een gratis inmeting. Geen
            call center, geen tussenpersoon — gewoon een vakman uit Limburg.
          </p>
          <p className="text-main text-lg leading-relaxed mb-10">
            Heb je nog een dringende vraag? Bel rechtstreeks naar +32 456 19 13
            60 of stuur een WhatsApp-bericht.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+32456191360"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-md transition-all"
            >
              <Phone className="h-5 w-5" />
              Bel +32 456 19 13 60
            </a>
            <a
              href="https://wa.me/32456191360"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-6 rounded-lg text-lg shadow-md transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp ons
            </a>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h2 className="text-primary font-semibold text-lg mb-3">
              Terug naar de site
            </h2>
            <Link
              href="/"
              className="text-accent hover:underline font-medium"
            >
              ← Terug naar de homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
