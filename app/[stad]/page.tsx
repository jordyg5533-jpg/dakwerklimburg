import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import LeadForm from '@/components/forms/LeadForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cities } from '@/lib/cities';
import { notFound } from 'next/navigation';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';

interface StadPageProps {
  params: { stad: string };
}

export function generateStaticParams() {
  return cities.map((city) => ({ stad: city.slug }));
}

export function generateMetadata({ params }: StadPageProps): Metadata {
  const city = cities.find((c) => c.slug === params.stad);
  if (!city) return {};

  const title = `Dakwerker ${city.name} — Erkende Lokale Dakwerken & Gratis Offerte`;
  const description = `Op zoek naar een dakwerker in ${city.name}? Dakwerk Limburg verbindt u met erkende lokale dakwerkers in ${city.name} en omgeving. ${city.description} Gratis offerte binnen 24 uur.`;
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

const DIENSTEN = [
  {
    href: '/diensten/dakrenovatie',
    titel: 'Dakrenovatie',
    tekst: 'Volledige renovatie of gedeeltelijke vernieuwing van uw hellend dak.',
    img: 'https://i.postimg.cc/3NDkbtHn/dakrenovatie-kaart.jpg',
  },
  {
    href: '/diensten/plat-dak',
    titel: 'Plat dak',
    tekst: 'EPDM, bitumen of roofing — plaatsing en herstelling van platte daken.',
    img: 'https://i.postimg.cc/NLqKhRgm/plat-dak-kaart.jpg',
  },
  {
    href: '/diensten/dakisolatie',
    titel: 'Dakisolatie',
    tekst: 'Isolatie tussen, onder of boven de dakconstructie, met premie-begeleiding.',
    img: 'https://i.postimg.cc/WzJdf5P7/dakisolatie-kaart.jpg',
  },
  {
    href: '/diensten/goten-zinkwerk',
    titel: 'Goten en zinkwerk',
    tekst: 'Nieuwe dakgoten, regenpijpen en zinkwerk rond schoorsteen en dakkapel.',
    img: 'https://i.postimg.cc/1XN8YvZM/goten-kaart.jpg',
  },
  {
    href: '/diensten/stormschade',
    titel: 'Stormschade',
    tekst: 'Snelle noodherstelling bij storm of lekkage — 24/7 bereikbaar.',
    img: 'https://i.postimg.cc/LhKJdjHj/stormschade-kaart.jpg',
  },
];

const PRIJZEN = [
  { titel: 'Dakrenovatie volledige woning', prijs: 'vanaf €120/m²' },
  { titel: 'Plat dak vernieuwen (EPDM)', prijs: 'vanaf €100/m²' },
  { titel: 'Dakisolatie + Mijn VerbouwPremie', prijs: 'vanaf €60/m² (na premie)' },
  { titel: 'Nieuwe dakgoten zink', prijs: 'vanaf €60/lopende meter' },
];

const PROCES_STAPPEN = [
  {
    nummer: 1,
    titel: 'Aanvraag in 1 minuut',
    tekst: 'Vul het formulier in met uw naam, gemeente, type werk en korte beschrijving. Of bel rechtstreeks +32 456 19 13 60.',
  },
  {
    nummer: 2,
    titel: 'Contact binnen 24 uur',
    tekst: 'Een lokale dakwerker uit uw gemeente of een aangrenzende gemeente neemt rechtstreeks contact op.',
  },
  {
    nummer: 3,
    titel: 'Gratis inmeting ter plaatse',
    tekst: 'De dakwerker komt langs (gratis en vrijblijvend), beoordeelt de situatie en geeft eerlijk advies.',
  },
  {
    nummer: 4,
    titel: 'Schriftelijke offerte',
    tekst: 'Binnen 1–3 werkdagen een gedetailleerde offerte: materiaal, oppervlakte, premies, planning. Geen verborgen meerwerken.',
  },
  {
    nummer: 5,
    titel: 'Uitvoering + garantie',
    tekst: 'Na akkoord: startdatum afgesproken. 10-jarige wettelijke aansprakelijkheid op uitvoering, fabrieksgarantie op materialen.',
  },
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((b, i) => (
        <li key={i} className="flex gap-3 text-main leading-relaxed">
          <span className="text-accent font-bold shrink-0">•</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export default function StadPage({ params }: StadPageProps) {
  const city = cities.find((c) => c.slug === params.stad);
  if (!city) notFound();

  const faqData = [
    {
      vraag: `Werken jullie in heel ${city.name} of alleen in het centrum?`,
      antwoord: `We werken in heel ${city.name}${city.deelgemeenten && city.deelgemeenten.length > 0 ? ` en alle deelgemeenten — ${city.deelgemeenten.map((d) => d.naam).join(', ')}` : ''}. ${city.buurgemeenten && city.buurgemeenten.length > 0 ? `Ook in de buurgemeenten ${city.buurgemeenten.slice(0, 3).join(', ')} en omgeving.` : ''}`,
    },
    {
      vraag: `Hoe snel kan een dakwerker uit ${city.name} langskomen voor een inmeting?`,
      antwoord: `Bij niet-acute aanvragen meestal binnen 3–7 werkdagen. Bij acute lekkage of stormschade vaak binnen het uur tot 24 uur. Bel altijd eerst op +32 456 19 13 60 — telefonisch krijgt u meteen een inschatting.`,
    },
    {
      vraag: `Kom ik in aanmerking voor de Mijn VerbouwPremie in ${city.name}?`,
      antwoord: `Ja, de Mijn VerbouwPremie is van toepassing in heel Vlaanderen, dus ook in ${city.name}. Voor dakisolatie moet uw woning ouder zijn dan 15 jaar en moet de R-waarde minstens 4,5 zijn. De premie kan oplopen tot enkele duizenden euro, afhankelijk van uw inkomen. Een lokale dakwerker helpt u gratis met de aanvraag.`,
    },
    {
      vraag: `Krijg ik een lokale dakwerker of iemand van buiten Limburg?`,
      antwoord: `Altijd een lokale dakwerker uit ${city.name} of een aangrenzende Limburgse gemeente. We werken niet met onderaannemers van buiten de provincie — lokale kennis van bouwstijl en klimaat weegt zwaar in ons selectieproces.`,
    },
    {
      vraag: 'Wat kost een dakrenovatie in 2026?',
      antwoord: `Richtprijzen in 2026: dakrenovatie volledig pand vanaf €120/m², plat dak (EPDM) vanaf €100/m², dakisolatie vanaf €60/m² na premie, nieuwe zinken goten vanaf €60/lopende meter. Exacte prijzen variëren per oppervlakte, daktype en materiaalkeuze. Vraag een gratis offerte aan — u zit nergens aan vast.`,
    },
    {
      vraag: 'Zijn jullie erkend en verzekerd?',
      antwoord: `Ja. Alle dakwerkers in ons netwerk zijn erkend (Bouwunie, Confederatie Bouw of gelijkwaardig), btw-plichtig en hebben een geldige beroepsverzekering. Bij elke uitvoering krijgt u de wettelijke 10-jarige aansprakelijkheid van de aannemer.`,
    },
    {
      vraag: `Wat als de offerte duurder is dan een concurrent?`,
      antwoord: `Stuur ons gerust de andere offerte door. We vergelijken eerlijk: zit er evenveel werk in, zelfde materiaalkwaliteit, zelfde garantievoorwaarden? 'Goedkopere' offertes zijn soms goedkoper omdat er essentieel werk uit gehaald is. Wij geven eerlijk advies — ook als de andere offerte beter is.`,
    },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://dakwerklimburg.be/${city.slug}#business`,
    name: `Dakwerk Limburg — Dakwerker in ${city.name}`,
    image: 'https://i.postimg.cc/rstDYfLf/dakrenovatie-hero.jpg',
    description: `Erkende lokale dakwerkers in ${city.name} en omgeving. ${city.description} Gratis offerte binnen 24 uur.`,
    url: `https://dakwerklimburg.be/${city.slug}`,
    telephone: '+32456191360',
    email: 'info@dakwerklimburg.be',
    priceRange: '€€',
    areaServed: [
      { '@type': 'City', name: city.name },
      ...(city.deelgemeenten ?? []).map((d) => ({ '@type': 'City', name: d.naam })),
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: 'Limburg',
      postalCode: city.postalCodes.split('–')[0],
      addressCountry: 'BE',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Dakwerken in ${city.name}`,
      itemListElement: DIENSTEN.map((d) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: d.titel, url: `https://dakwerklimburg.be${d.href}` },
      })),
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({
      '@type': 'Question',
      name: f.vraag,
      acceptedAnswer: { '@type': 'Answer', text: f.antwoord },
    })),
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="bg-bg-alt py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
                Dakwerker in {city.name} — erkend, lokaal, betrouwbaar
              </h1>
              <p className="text-main text-lg leading-relaxed mb-4">
                Op zoek naar een betrouwbare dakwerker in {city.name}? Dakwerk Limburg
                verbindt u met erkende lokale dakwerkers die wonen en werken in {city.name}{' '}
                en de omliggende gemeenten. {city.description}
              </p>
              {city.lokaleContext && (
                <p className="text-main text-base leading-relaxed mb-6">
                  {city.lokaleContext}
                </p>
              )}
              <a
                href="tel:+32456191360"
                className="inline-flex items-center gap-3 bg-accent hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-md transition-all mb-8"
              >
                <Phone className="w-6 h-6" />
                Bel +32 456 19 13 60
              </a>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://i.postimg.cc/rstDYfLf/dakrenovatie-hero.jpg"
                  alt={`Erkende dakwerker bezig op een dak in ${city.name}`}
                  width={800}
                  height={533}
                  loading="eager"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            <div id="offerte-formulier">
              <LeadForm source={`${city.slug}-hero`} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Waarom lokaal ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Waarom een lokale dakwerker uit {city.name} kiezen?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                titel: 'Snelle reactietijd',
                tekst: `Een dakwerker uit ${city.name} of een aangrenzende gemeente is vaak binnen de week ter plaatse — bij acute schade zelfs binnen 24 uur.`,
              },
              {
                titel: 'Kennis van de lokale bouwstijl',
                tekst: `${city.name} heeft zijn eigen woningprofiel. Een lokale dakwerker kent de specifieke dakconstructies, materialen en veelvoorkomende problemen in uw regio.`,
              },
              {
                titel: 'Geen reiskosten in offerte',
                tekst: 'Een lokale dakwerker rekent geen kilometers door — offertes vallen standaard 10–25% voordeliger uit dan bij grote bedrijven van buiten de provincie.',
              },
              {
                titel: 'Persoonlijk aanspreekpunt',
                tekst: 'U krijgt rechtstreeks contact met de dakwerker die het werk uitvoert — ook na de oplevering. Geen call center, geen tussenpersonen.',
              },
            ].map((k) => (
              <div key={k.titel} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-3">{k.titel}</h3>
                <p className="text-main leading-relaxed">{k.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Werkgebied ── */}
      {city.deelgemeenten && city.deelgemeenten.length > 0 && (
        <section className="py-16 lg:py-20 bg-bg-alt">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10">
              Werkgebied — heel {city.name} en omgeving
            </h2>
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {city.name} centrum en deelgemeenten
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {city.deelgemeenten.map((w) => (
                  <div key={w.naam} className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="font-bold text-primary">
                      {w.naam}{' '}
                      <span className="text-sub text-sm font-normal">({w.postcode})</span>
                    </div>
                    <div className="text-sub text-sm">{w.info}</div>
                  </div>
                ))}
              </div>
            </div>
            {city.buurgemeenten && city.buurgemeenten.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Aangrenzende gemeenten</h3>
                <div className="flex flex-wrap gap-3">
                  {city.buurgemeenten.map((g) => (
                    <span
                      key={g}
                      className="bg-white border border-gray-200 rounded-full px-4 py-2 text-main text-sm"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Bouwprofiel ── */}
      {city.bouwprofiel && (
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Typische dakproblemen in {city.name}
            </h2>
            <p className="text-main leading-relaxed mb-8">{city.bouwprofiel}</p>
            {city.typischeProblemen && city.typischeProblemen.length > 0 && (
              <>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Meest voorkomende dakproblemen per woningtype
                </h3>
                <Bullets items={city.typischeProblemen} />
              </>
            )}
          </div>
        </section>
      )}

      {/* ── Diensten ── */}
      <section className={`py-16 lg:py-20 ${city.bouwprofiel ? 'bg-bg-alt' : ''}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Onze dakwerkdiensten in {city.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {DIENSTEN.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.titel}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{d.titel}</h3>
                  <p className="text-main text-sm leading-relaxed mb-3">{d.tekst}</p>
                  <span className="text-accent font-semibold group-hover:underline">Lees meer →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prijzen ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Wat kost dakwerk in {city.name}?
          </h2>
          <p className="text-main leading-relaxed mb-8">
            Richtprijzen voor de meest gevraagde dakwerken in {city.name} in 2026. Exacte
            offertes verschillen per woning — bouwstijl, oppervlakte, toegankelijkheid en
            materiaalkeuze spelen mee.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {PRIJZEN.map((p) => (
              <div key={p.titel} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-primary mb-2">{p.titel}</h3>
                <p className="text-accent font-bold text-xl">{p.prijs}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="#offerte-formulier"
              className="inline-flex items-center gap-2 bg-accent hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-all"
            >
              Vraag gratis offerte aan
            </a>
          </div>
        </div>
      </section>

      {/* ── Proces ── */}
      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Hoe het werkt — in 5 stappen
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCES_STAPPEN.map((stap) => (
              <div key={stap.nummer} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-bold text-xl flex items-center justify-center mb-4">
                  {stap.nummer}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{stap.titel}</h3>
                <p className="text-main text-sm leading-relaxed">{stap.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Erkenning ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Erkenning, garantie en verzekering
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                titel: 'Erkende vakmannen',
                tekst: `Onze dakwerkers in ${city.name} zijn erkend (Bouwunie, Confederatie Bouw of gelijkwaardig), btw-plichtig en hebben een geldige beroepsverzekering.`,
              },
              {
                titel: '10-jarige aansprakelijkheid',
                tekst: 'Bij elke uitvoering krijgt u de wettelijke 10-jarige aansprakelijkheid van de aannemer (Wet Breyne).',
              },
              {
                titel: 'Eerlijke offerte',
                tekst: 'De inmeting is gratis en vrijblijvend. De offerte is schriftelijk, gedetailleerd en bindend. Geen verborgen meerwerken.',
              },
            ].map((k) => (
              <div key={k.titel} className="bg-white border-2 border-accent/30 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-3">{k.titel}</h3>
                <p className="text-main leading-relaxed">{k.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
            Veelgestelde vragen — dakwerker in {city.name}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-primary font-semibold">
                  {item.vraag}
                </AccordionTrigger>
                <AccordionContent className="text-main leading-relaxed">
                  {item.antwoord}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Plan vandaag nog uw gratis dakscreening in {city.name}
              </h2>
              <p className="text-main text-lg leading-relaxed mb-6">
                Vul het formulier in met uw gemeente, type werk en korte beschrijving. Of
                bel rechtstreeks naar{' '}
                <a href="tel:+32456191360" className="text-accent font-bold hover:underline">
                  +32 456 19 13 60
                </a>
                . Een lokale dakwerker uit uw buurt neemt binnen 24 uur contact op voor een
                gratis en vrijblijvende inmeting.
              </p>
              <a
                href="tel:+32456191360"
                className="inline-flex items-center gap-3 bg-accent hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-md transition-all"
              >
                <Phone className="w-6 h-6" />
                Bel +32 456 19 13 60
              </a>
              <p className="text-sub text-sm mt-4">
                Of mail ons op{' '}
                <a href="mailto:info@dakwerklimburg.be" className="underline hover:text-accent">
                  info@dakwerklimburg.be
                </a>
                .
              </p>
            </div>
            <div>
              <LeadForm source={`${city.slug}-cta`} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Andere steden ── */}
      <section className="py-12 bg-bg-alt">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            Ook actief in andere Limburgse steden
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="bg-white border border-gray-200 hover:border-accent rounded-full px-4 py-2 text-main text-sm hover:text-accent transition-colors"
                >
                  Dakwerker {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
