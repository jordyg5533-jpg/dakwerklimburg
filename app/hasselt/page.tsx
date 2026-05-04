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
import ScrollToFormButton from '../diensten/dakrenovatie/ScrollToFormButton';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';

const TITLE =
  'Dakwerker in Hasselt — Erkende Lokale Dakwerken in heel Hasselt en Deelgemeenten';
const DESCRIPTION =
  'Op zoek naar een dakwerker in Hasselt? Dakwerk Limburg verbindt je met erkende lokale dakwerkers in Hasselt-centrum, Kuringen, Kermt, Stevoort en omgeving. Gratis offerte binnen 24 uur.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://dakwerklimburg.be/hasselt',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: 'https://dakwerklimburg.be/hasselt',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const TRUST_KAARTEN = [
  {
    titel: 'Snelle reactietijd',
    tekst:
      'Een dakwerker uit Hasselt of een aangrenzende gemeente is vaak binnen de week ter plaatse voor een inmeting — bij acute schade zelfs binnen 24 uur.',
  },
  {
    titel: 'Kennis van lokale bouwstijlen',
    tekst:
      'Rijwoningen in het centrum, villa\u2019s in Stevoort, nieuwbouw aan de Universiteitslaan — onze dakwerkers kennen elke typologie en haar specifieke aanpak.',
  },
  {
    titel: 'Geen reiskosten in offerte',
    tekst:
      'Een lokale dakwerker rekent geen kilometers of verplaatsingskosten door — waardoor de offerte standaard 10-25% voordeliger uitvalt dan die van grote bedrijven uit Antwerpen of Brussel.',
  },
  {
    titel: 'Persoonlijk aanspreekpunt',
    tekst:
      'Je krijgt rechtstreeks contact met de dakwerker die het werk komt uitvoeren — ook na de oplevering. Geen call center, geen doorverwijzingen, geen wachtrijen.',
  },
];

const WIJKEN_DATA = [
  { naam: 'Hasselt-centrum', postcode: '3500', info: 'rijwoningen, herenhuizen, art deco, jaren 30-50 bouw' },
  { naam: 'Runkst', postcode: '3500', info: 'naoorlogse bouw, vooral jaren 60-80 woningen' },
  { naam: 'Kiewit', postcode: '3500', info: 'gemengd: oudere kern + nieuwbouw' },
  { naam: 'Sint-Lambrechts-Herk', postcode: '3500', info: 'villa-wijk, vrijstaande woningen, grotere kavels' },
  { naam: 'Kuringen', postcode: '3511', info: 'dorpse kern + villa-bouw, mix oud en nieuw' },
  { naam: 'Kermt', postcode: '3510', info: 'klassieke dorpskern, veel jaren 70-90 bouw' },
  { naam: 'Stevoort', postcode: '3512', info: 'landelijk, vrijstaande woningen, grotere percelen' },
  { naam: 'Stokrooie / Spalbeek', postcode: '3500', info: 'kleinere kernen, mix landelijk en residentieel' },
];

const BUURGEMEENTEN = [
  'Diepenbeek (3590)',
  'Zonhoven (3520)',
  'Heusden-Zolder (3550)',
  'Lummen (3560)',
  'Alken (3570)',
  'Sint-Truiden (3800)',
];

const DIENSTEN = [
  {
    href: '/diensten/dakrenovatie',
    titel: 'Dakrenovatie',
    tekst: 'Volledige renovatie of gedeeltelijke vernieuwing van je hellend dak.',
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

const OUDCENTRUM_BULLETS = [
  'Onvoldoende of geen dakisolatie — Mijn VerbouwPremie kan hier vaak ingezet worden',
  'Verouderde bakgoten met verborgen lekkage — gevelschade is dan vaak al opgetreden',
  'Pannen die los zitten of poreus geworden zijn — verschuivingen door storm',
  'Schoorstenen met versleten zinkwerk — een topoorzaak van waterintrede',
];
const NIEUWBOUW_BULLETS = [
  'EPDM-naden die na 10-15 jaar opnieuw geverifieerd moeten worden',
  'Daklichten en koepels die slecht aansluiten op het dakvlak',
  'Onvoldoende afschot — water dat blijft staan en op den duur indringt',
  'Garage- of carport-platen waar de afdichting beperkt onderhouden wordt',
];
const VILLA_BULLETS = [
  'Onderhoud van natuurleien — meestal niet zelf-vervangbaar, vraagt een gespecialiseerde dakwerker',
  'Complex zinkwerk rond dakkapellen en kepers — foutgevoelige zones',
  'Hogere kostprijs door grote oppervlakte — dus meer reden voor 2-3 vergelijkbare offertes',
  'Esthetiek mag NIET verloren gaan — moderne pannen op klassieke villa is geen oplossing',
];

const PRIJZEN_BLOKKEN = [
  { titel: 'Dakrenovatie volledige woning', prijs: 'vanaf €120/m²' },
  { titel: 'Plat dak vernieuwen (EPDM)', prijs: 'vanaf €100/m²' },
  { titel: 'Dakisolatie + Mijn VerbouwPremie', prijs: 'vanaf €60/m² (na premie)' },
  { titel: 'Nieuwe dakgoten zink', prijs: 'vanaf €60/lopende meter' },
];

const PROCES_STAPPEN = [
  {
    nummer: 1,
    titel: 'Aanvraag in 1 minuut',
    tekst:
      'Vul het formulier in met je naam, gemeente, type werk (renovatie, plat dak, isolatie, goten, stormschade) en korte beschrijving. Of bel rechtstreeks +32 456 19 13 60.',
  },
  {
    nummer: 2,
    titel: 'Contact binnen 24 uur',
    tekst:
      'Een lokale dakwerker uit Hasselt of een aangrenzende gemeente neemt rechtstreeks contact op om een afspraak in te plannen. Geen call center, geen tussenpersoon.',
  },
  {
    nummer: 3,
    titel: 'Gratis inmeting ter plaatse',
    tekst:
      'De dakwerker komt langs (gratis en vrijblijvend), beoordeelt de situatie, geeft eerlijk advies — soms is wat je dacht nodig is niet nodig — en bespreekt de opties.',
  },
  {
    nummer: 4,
    titel: 'Schriftelijke offerte',
    tekst:
      'Binnen 1-3 werkdagen ontvang je een gedetailleerde offerte: materiaal, oppervlakte, eventuele premies, planning. Geen verborgen meerwerken achteraf.',
  },
  {
    nummer: 5,
    titel: 'Uitvoering + garantie',
    tekst:
      'Na akkoord wordt een startdatum afgesproken. Klein werk: vaak binnen de week. Grote renovatie: planning op maat. 10-jarige wettelijke aansprakelijkheid op uitvoering, fabrieksgarantie op materialen.',
  },
];

const ERKENNING_KAARTEN = [
  {
    titel: 'Erkende vakmannen',
    tekst:
      'Onze dakwerkers in Hasselt zijn erkend (Bouwunie, Confederatie Bouw of gelijkwaardig), btw-plichtig en hebben een geldige beroepsverzekering. Geen losse uitvoerders, geen zwartwerk.',
  },
  {
    titel: '10-jarige aansprakelijkheid',
    tekst:
      'Bij elke uitvoering krijg je de wettelijke 10-jarige aansprakelijkheid van de aannemer (Wet Breyne) — verplicht voor structurele dakwerken en bewijst dat de uitvoerder een echte vakman is.',
  },
  {
    titel: 'Eerlijke offerte',
    tekst:
      'De inmeting is gratis en vrijblijvend. De offerte is schriftelijk, gedetailleerd en bindend. Je weet vooraf wat het kost en wat erbij zit — geen verrassingen op de eindfactuur.',
  },
];

const FAQ_DATA = [
  {
    vraag: 'Werken jullie in heel Hasselt of alleen in het centrum?',
    antwoord:
      'We werken in heel Hasselt en alle deelgemeenten — Kuringen, Kermt, Stevoort, Sint-Lambrechts-Herk, Runkst, Kiewit, Stokrooie, Spalbeek, Godsheide, Tuilt en Wimmertingen. Ook in de buurgemeenten Diepenbeek, Zonhoven, Heusden-Zolder, Lummen, Alken en Sint-Truiden.',
  },
  {
    vraag: 'Hoe snel kan een dakwerker uit Hasselt langskomen voor een inmeting?',
    antwoord:
      'Bij niet-acute aanvragen meestal binnen 3-7 werkdagen. Bij acute lekkage of stormschade vaak binnen het uur tot 24 uur, afhankelijk van de planning op dat moment. Bel altijd eerst — telefonisch krijg je meteen een inschatting.',
  },
  {
    vraag: 'Krijg ik een lokale dakwerker, of een onderaannemer van buiten Limburg?',
    antwoord:
      'Een lokale dakwerker uit Hasselt of een aangrenzende Limburgse gemeente. We werken expliciet niet met onderaannemers van buiten de provincie — dat is heel het punt van Dakwerk Limburg: lokale verbinding, lokale verantwoordelijkheid, lokale opvolging.',
  },
  {
    vraag: 'Wat kost een dakwerker in Hasselt vs een groot bedrijf van buiten de provincie?',
    antwoord:
      'Lokale dakwerkers in Hasselt zijn meestal 10-25% goedkoper dan grote bedrijven uit Antwerpen of Brussel. Reden: geen reiskosten ingecalculeerd, lagere overhead, geen tussenpersonen. Belangrijker nog: bij problemen of nazorg ben je sneller geholpen door iemand uit de regio.',
  },
  {
    vraag: 'Mijn woning is een rijwoning in het oude centrum — kunnen jullie dat aan?',
    antwoord:
      'Ja, en dat is zelfs een van onze meest voorkomende werken. De oude rijwoningen in het Hasseltse centrum hebben specifieke uitdagingen (bakgoten ingewerkt in gevel, gedeelde dakvlakken met buren, beperkte werkruimte). Onze dakwerkers kennen deze typologie en weten hoe ze de werken correct uitvoeren — ook in samenwerking met de buurman als het over een gedeelde gootlijn of nokafdichting gaat.',
  },
  {
    vraag: 'Wij willen dakisolatie laten plaatsen — kom ik in aanmerking voor Mijn VerbouwPremie?',
    antwoord:
      "Heel waarschijnlijk wel, als je woning ouder is dan 15 jaar (vaak het geval in Hasselt-centrum) en je voldoet aan de minimale R-waarde van 4,5. De premie kan oplopen tot enkele duizenden euro's afhankelijk van je gezinsinkomen. Een lokale dakwerker helpt je gratis met de aanvraag — zie ook /diensten/dakisolatie voor uitgebreide info.",
  },
  {
    vraag: "Wat is jullie ervaring met villa's in Stevoort of Sint-Lambrechts-Herk?",
    antwoord:
      "Veel ervaring. Villa's hebben vaak complexere dakvormen (mansardedaken, walmdaken, meerdere dakkapellen), grotere oppervlaktes en hoogwaardige materialen (natuurleien, koperen goten, zinken detailwerk). Onze ervaren dakwerkers in Hasselt werken regelmatig op dit type woning. Voor villa's vragen we standaard 2-3 vergelijkbare offertes om je een eerlijk beeld van de markt te geven.",
  },
  {
    vraag: 'Wat doen we als jullie offerte hoger is dan een concurrent?',
    antwoord:
      "Stuur ons gerust de andere offerte door. We vergelijken eerlijk: zit er evenveel werk in, zelfde materiaalkwaliteit, zelfde garantievoorwaarden, zelfde btw-aanslag? Vaak zijn 'goedkopere' offertes goedkoper omdat er essentieel werk uit gehaald is (bv. zinkwerk niet vervangen, dampscherm weggelaten, geen 10-jarige aansprakelijkheid). Wij geven dan eerlijk advies — soms is de andere offerte gewoon beter, dan zeggen we dat.",
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://dakwerklimburg.be/hasselt#business',
  name: 'Dakwerk Limburg — Dakwerker in Hasselt',
  image: 'https://i.postimg.cc/rstDYfLf/dakrenovatie-hero.jpg',
  description:
    'Erkende lokale dakwerkers in Hasselt en alle deelgemeenten (Kuringen, Kermt, Stevoort, Sint-Lambrechts-Herk, Runkst, Kiewit). Dakrenovatie, plat dak, dakisolatie, goten en stormschade. Gratis offerte binnen 24 uur.',
  url: 'https://dakwerklimburg.be/hasselt',
  telephone: '+32456191360',
  email: 'info@dakwerklimburg.be',
  priceRange: '€€',
  areaServed: [
    { '@type': 'City', name: 'Hasselt' },
    { '@type': 'City', name: 'Kuringen' },
    { '@type': 'City', name: 'Kermt' },
    { '@type': 'City', name: 'Stevoort' },
    { '@type': 'City', name: 'Sint-Lambrechts-Herk' },
    { '@type': 'City', name: 'Diepenbeek' },
    { '@type': 'City', name: 'Zonhoven' },
    { '@type': 'City', name: 'Alken' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hasselt',
    addressRegion: 'Limburg',
    postalCode: '3500',
    addressCountry: 'BE',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dakwerken in Hasselt',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dakrenovatie',
          url: 'https://dakwerklimburg.be/diensten/dakrenovatie',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Plat dak',
          url: 'https://dakwerklimburg.be/diensten/plat-dak',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dakisolatie',
          url: 'https://dakwerklimburg.be/diensten/dakisolatie',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Goten en zinkwerk',
          url: 'https://dakwerklimburg.be/diensten/goten-zinkwerk',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Stormschade',
          url: 'https://dakwerklimburg.be/diensten/stormschade',
        },
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA.map((item) => ({
    '@type': 'Question',
    name: item.vraag,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.antwoord,
    },
  })),
};

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((b, i) => (
        <li key={i} className="flex gap-3 text-main leading-relaxed">
          <span className="text-accent font-bold">•</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export default function HasseltPage() {
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
      <section className="bg-bg-alt py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
                Dakwerker in Hasselt — erkend, lokaal, betrouwbaar
              </h1>
              <p className="text-main text-lg leading-relaxed mb-6">
                Op zoek naar een betrouwbare dakwerker in Hasselt? Dakwerk Limburg verbindt je met
                erkende lokale dakwerkers die wonen en werken in Hasselt-centrum, Kuringen, Kermt,
                Stevoort, Sint-Lambrechts-Herk en alle deelgemeenten. Of het nu gaat om
                dakrenovatie van een rijwoning in het centrum, een plat dak op een nieuwbouw aan
                de Universiteitslaan, of dakisolatie op een woning in Runkst — je krijgt iemand
                met kennis van zaken en kennis van Hasselt. Eén aanvraag, gratis inmeting en een
                eerlijke offerte binnen 24 uur. Geen call center, geen tussenpersoon.
              </p>
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
                  alt="Erkende dakwerker bezig op een dak in Hasselt"
                  width={800}
                  height={533}
                  loading="eager"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            <div id="offerte-formulier">
              <LeadForm source="hasselt-hero" />
            </div>
          </div>
        </div>
      </section>

      <section id="waarom-lokaal" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Waarom een lokale dakwerker uit Hasselt kiezen?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {TRUST_KAARTEN.map((k) => (
              <div
                key={k.titel}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{k.titel}</h3>
                <p className="text-main leading-relaxed">{k.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-main leading-relaxed">
            De grootste dakwerkbedrijven in België zitten meestal in Antwerpen of Brussel en
            sturen ploegen uit naar Limburg. Resultaat: hogere prijs (reiskosten zijn
            ingecalculeerd), slechtere reactietijd bij problemen, en geen aanspreekpunt na de
            oplevering. Een lokale dakwerker uit Hasselt of een deelgemeente werkt op zijn eigen
            reputatie in zijn eigen regio — die kan zich geen slordig werk veroorloven.
          </p>
        </div>
      </section>

      <section id="werkgebied" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10">
            Werkgebied — heel Hasselt en omgeving
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Hasselt centrum en deelgemeenten
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {WIJKEN_DATA.map((w) => (
                <div
                  key={w.naam}
                  className="bg-white border border-gray-200 rounded-xl p-4"
                >
                  <div className="font-bold text-primary">
                    {w.naam}{' '}
                    <span className="text-sub text-sm font-normal">({w.postcode})</span>
                  </div>
                  <div className="text-sub text-sm">{w.info}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-4">Aangrenzende gemeenten</h3>
            <div className="flex flex-wrap gap-3">
              {BUURGEMEENTEN.map((g) => (
                <span
                  key={g}
                  className="bg-white border border-gray-200 rounded-full px-4 py-2 text-main text-sm"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Kleinere kernen en gehuchten</h3>
            <p className="text-main leading-relaxed">
              Voor de kleinere kernen en gehuchten rond Hasselt — denk aan Godsheide, Tuilt,
              Wimmertingen — werken we ook standaard. Geef bij je aanvraag gewoon je gemeente en
              straat door, dan koppelen we je aan een dakwerker die in jouw buurt woont of er
              regelmatig werkt.
            </p>
          </div>
        </div>
      </section>

      <section id="diensten" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Onze dakwerkdiensten in Hasselt
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
                  <span className="text-accent font-semibold group-hover:underline">
                    Lees meer →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-main leading-relaxed max-w-4xl mx-auto text-center">
            Niet zeker welke dienst je nodig hebt? Geen probleem. Vul het formulier in met een
            korte beschrijving van je dakprobleem of -plan. Een dakwerker uit Hasselt komt gratis
            langs voor een inmeting en geeft tijdens dat bezoek meteen advies — vaak is wat je
            dacht (bv. &lsquo;volledige renovatie&rsquo;) eigenlijk niet nodig en volstaat een
            gerichte herstelling. Eerlijk advies eerst, offerte daarna.
          </p>
        </div>
      </section>

      <section id="bouwstijlen" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Typische dakproblemen per bouwstijl in Hasselt
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Het oude centrum — rijwoningen en herenhuizen
            </h3>
            <p className="text-main leading-relaxed mb-4">
              Het oude Hasselt-centrum bestaat grotendeels uit rijwoningen en herenhuizen uit de
              jaren 1900-1960 — vaak met klassieke pannendaken op een houten kapconstructie, en
              bakgoten ingewerkt in de gevel. Typische problemen op deze woningen:
            </p>
            <Bullets items={OUDCENTRUM_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Nieuwbouw aan de rand — Hasselt-Zuid en Universiteitslaan
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De nieuwbouw aan Hasselt-Zuid, de Universiteitslaan, Casterwei en de noordrand kent
              een ander profiel: vaak platte daken in EPDM of bitumen, soms gemengde dakvormen
              met platte uitbouwen op een hellend dak. Typische problemen:
            </p>
            <Bullets items={NIEUWBOUW_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Villa-wijken — Stevoort, Kuringen, Sint-Lambrechts-Herk
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De villa-wijken (Stevoort, Kuringen-zuid, Sint-Lambrechts-Herk) hebben vaak grotere
              dakoppervlaktes, complexere dakvormen (mansarde, walmdaken, dakkapellen) en
              hoogwaardige materialen (natuurleien, koperen goten, zinkwerk in detail). Typische
              uitdagingen:
            </p>
            <Bullets items={VILLA_BULLETS} />
          </div>

          <p className="text-main leading-relaxed">
            Een dakwerker die Hasselt kent, weet welk type woning welke aanpak vraagt. Hij komt
            niet aanzetten met een standaardvoorstel — hij past zijn aanpak aan je woning aan, en
            aan de bouwstijl van de buurt. Dat is het verschil tussen iemand uit de regio en een
            ploeg die hier voor de eerste keer komt.
          </p>
        </div>
      </section>

      <section id="prijzen" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Wat kost dakwerk in Hasselt?
          </h2>
          <p className="text-main leading-relaxed mb-8">
            Richtprijzen voor de meest gevraagde dakwerken in Hasselt in 2026. Exacte offertes
            verschillen per woning — bouwstijl, oppervlakte, toegankelijkheid en materiaalkeuze
            spelen mee.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {PRIJZEN_BLOKKEN.map((p) => (
              <div
                key={p.titel}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-base font-bold text-primary mb-2">{p.titel}</h3>
                <p className="text-accent font-bold text-xl">{p.prijs}</p>
              </div>
            ))}
          </div>
          <p className="text-main leading-relaxed mb-8">
            Bovenstaande zijn richtprijzen. Voor uitgebreide prijsindicaties per dienst (inclusief
            premies, btw-tarief en wat er wel/niet bij hoort), zie onze{' '}
            <Link href="/diensten" className="text-accent font-semibold underline">
              diensten-pagina&apos;s
            </Link>
            . Een dakwerker uit Hasselt geeft je tijdens de gratis inmeting een gedetailleerde,
            schriftelijke offerte op maat.
          </p>
          <div className="text-center">
            <ScrollToFormButton>Vraag offerte aan voor jouw woning</ScrollToFormButton>
          </div>
        </div>
      </section>

      <section id="proces" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Hoe het werkt — in 5 stappen
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCES_STAPPEN.map((stap) => (
              <div
                key={stap.nummer}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
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

      <section id="erkenning" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Erkenning, garantie en verzekering
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {ERKENNING_KAARTEN.map((k) => (
              <div
                key={k.titel}
                className="bg-white border-2 border-accent/30 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{k.titel}</h3>
                <p className="text-main leading-relaxed">{k.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-main leading-relaxed text-center">
            Vraag bij elke dakwerker (ook bij ons) naar erkenning en verzekering. Wie er omheen
            draait of geen schriftelijke offerte wil geven, schrap je meteen van je lijst —
            onafhankelijk van hoe goedkoop hij is.
          </p>
        </div>
      </section>

      <section id="faq" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
            Veelgestelde vragen — dakwerker in Hasselt
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_DATA.map((item, i) => (
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

      <section id="cta" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Plan vandaag nog je gratis dakscreening in Hasselt
              </h2>
              <p className="text-main text-lg leading-relaxed mb-6">
                Vul het formulier in met je gemeente in Hasselt of een deelgemeente, type werk en
                korte beschrijving. Of bel rechtstreeks naar{' '}
                <a href="tel:+32456191360" className="text-accent font-bold hover:underline">
                  +32 456 19 13 60
                </a>
                . Een lokale dakwerker uit jouw buurt neemt binnen 24 uur contact op voor een
                gratis en vrijblijvende inmeting. Geen tussenpersonen, geen call center — gewoon
                vakmannen uit Hasselt en omgeving die jouw situatie komen bekijken.
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
              <LeadForm source="hasselt-cta" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
