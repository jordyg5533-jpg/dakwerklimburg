'use client';

import { Check, Phone } from 'lucide-react';
import LeadForm from '@/components/forms/LeadForm';

const TRUST_BULLETS = [
  'Binnen 24u contact',
  'Gratis en vrijblijvend',
  'Erkende lokale dakwerker',
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative text-white min-h-[500px] md:min-h-[700px] overflow-hidden"
    >
      <img
        src="https://i.postimg.cc/nrQXw3td/homepage-hero.jpg"
        alt="Erkende dakwerker plaatst dakisolatie en pannen op een hellend dak in Limburg"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-[center_right]"
      />
      <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-md">
              Dakwerker in <span className="text-accent">Limburg</span> — Vakkundige Dakwerken met Garantie
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mt-6 max-w-md leading-relaxed">
              Erkende dakwerker bij u in de buurt — voor dakrenovatie, plat dak, dakisolatie, goten en stormschade.
            </p>

            <ul className="mt-8 space-y-3">
              {TRUST_BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3 text-base text-gray-100">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-accent shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            <a
              href="tel:+32456191360"
              className="inline-flex items-center gap-2 mt-10 bg-accent hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-lg transition-colors"
            >
              <Phone className="h-5 w-5" />
              Bel nu +32 456 19 13 60
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <h2 className="text-primary text-2xl font-bold mb-2">
              Vraag uw gratis offerte aan
            </h2>
            <p className="text-sub text-sm mb-6">
              Reactie binnen 24 uur van een erkende dakwerker in uw regio.
            </p>
            <LeadForm source="homepage-hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
