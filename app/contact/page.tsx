import type { Metadata } from 'next';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import LeadForm from '@/components/forms/LeadForm';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';

const TITLE = 'Contact — Dakwerker in Limburg';
const DESCRIPTION =
  'Neem contact op met Dakwerk Limburg via WhatsApp, telefoon of e-mail. Binnen 24 uur reactie van een lokale erkende dakwerker uit jouw regio in Limburg.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://dakwerklimburg.be/contact' },
  openGraph: {
    title: TITLE,
    description:
      'Neem contact op met Dakwerk Limburg via WhatsApp, telefoon of e-mail. Binnen 24 uur reactie.',
    url: 'https://dakwerklimburg.be/contact',
    type: 'website',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'Neem contact op met Dakwerk Limburg via WhatsApp, telefoon of e-mail. Binnen 24 uur reactie.',
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const WA_LINK =
  'https://wa.me/32456191360?text=' +
  encodeURIComponent(
    'Hallo, ik zou graag een vrijblijvende offerte ontvangen voor dakwerken.'
  );

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
            Contact opnemen
          </h1>
          <p className="text-main text-lg leading-relaxed mb-10 max-w-3xl">
            Bel rechtstreeks, stuur een WhatsApp, mail ons, of vul het formulier in. Binnen 24 uur
            krijgt u contact van een lokale erkende dakwerker uit uw regio.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <a
              href="tel:+32456191360"
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <div className="font-bold text-primary mb-1">Bellen</div>
              <div className="text-main">+32 456 19 13 60</div>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="font-bold text-primary mb-1">WhatsApp</div>
              <div className="text-main">Stuur bericht</div>
            </a>
            <a
              href="mailto:info@dakwerklimburg.be"
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <div className="font-bold text-primary mb-1">E-mail</div>
              <div className="text-main">info@dakwerklimburg.be</div>
            </a>
          </div>

          <div className="max-w-2xl mx-auto">
            <LeadForm source="contact-page" />
          </div>
        </div>
      </section>
    </main>
  );
}
