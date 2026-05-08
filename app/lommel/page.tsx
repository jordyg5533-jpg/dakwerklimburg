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
  'Dakwerker in Lommel — Erkende Lokale Dakwerken in heel Lommel en Kempen';
const DESCRIPTION =
  'Op zoek naar een dakwerker in Lommel? Dakwerk Limburg verbindt je met erkende lokale dakwerkers in Lommel-centrum, Kerkhoven, Kolonie, Heeserbergen, Stevensvennen en omgeving. Specifieke ervaring met Kempische bouw, glas- en mijnarbeiderswijken en grenswoningen. Gratis offerte binnen 24 uur.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://dakwerklimburg.be/lommel',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: 'https://dakwerklimburg.be/lommel',
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
      'Een dakwerker uit Lommel of een aangrenzende gemeente in de noordelijke Kempen is vaak binnen de week ter plaatse — bij acute schade zelfs binnen 24 uur.',
  },
  {
    titel: 'Kennis van Kempische bouw',
    tekst:
      'Zandgrond, dennenbossen, klassieke Kempische dorpswoningen, glas- en mijnarbeiderswijken — onze dakwerkers kennen het Lommelse bouwprofiel.',
  },
  {
    titel: 'Geen reiskosten in offerte',
    tekst:
      'Een lokale dakwerker rekent geen kilometers door — offertes vallen standaard 10-25% voordeliger uit dan bij grote bedrijven uit Antwerpen of Brussel.',
  },
  {
    titel: 'Persoonlijk aanspreekpunt',
    tekst:
      'Je krijgt rechtstreeks contact met de dakwerker die het werk komt uitvoeren — ook na de oplevering. Geen call center.',
  },
];

const WIJKEN_DATA = [
  { naam: 'Lommel-centrum', postcode: '3920', info: 'winkelhart, mix rijwoningen en handelspanden' },
  { naam: 'Kerkhoven', postcode: '3920', info: 'naoorlogse verkavelingen, jaren 60-80 woningen' },
  { naam: 'Kolonie / Werkplaatsen', postcode: '3920', info: 'voormalige glas-/mijnarbeiderswijk, klassieke pannendaken op kleine kavels' },
  { naam: 'Heeserbergen', postcode: '3920', info: 'verkavelingen aan rand centrum, mix oud en nieuw' },
  { naam: 'Stevensvennen', postcode: '3920', info: "vooral nieuwbouw en moderne villa's" },
  { naam: 'Gestel / Heuvelplein', postcode: '3920', info: 'klassieke kerkdorpen, vrijstaande woningen en boerderijen' },
  { naam: 'Kattenbos', postcode: '3920', info: 'landelijk, recreatieve woningen, grenszone' },
  { naam: 'Lommel-Barrier', postcode: '3920', info: 'grenszone Nederlands-Brabant, mix bouwjaren' },
];

const BUURGEMEENTEN = [
  'Pelt (3910)',
  'Hechtel-Eksel (3940)',
  'Mol (2400)',
  'Balen (2490)',
  'Hamont-Achel (3930)',
  'Eindhoven / Bergeijk (NL)',
];

const DIENSTEN = [
  {
    href: '/diensten/dakrenovatie',
    titel: 'Dakrenovatie',
    tekst: 'Volledige renovatie of gedeeltelijke vernieuwing van je hellend dak.',
    img: '/images/dakrenovatie-kaart.png',
  },
  {
    href: '/diensten/plat-dak',
    titel: 'Plat dak',
    tekst: 'EPDM, bitumen of roofing — plaatsing en herstelling van platte daken.',
    img: '/images/plat-dak-kaart.png',
  },
  {
    href: '/diensten/dakisolatie',
    titel: 'Dakisolatie',
    tekst: 'Isolatie tussen, onder of boven de dakconstructie, met premie-begeleiding.',
    img: '/images/dakisolatie-kaart.png',
  },
  {
    href: '/diensten/goten-zinkwerk',
    titel: 'Goten en zinkwerk',
    tekst: 'Nieuwe dakgoten, regenpijpen en zinkwerk rond schoorsteen en dakkapel.',
    img: '/images/goten-kaart.png',
  },
  {
    href: '/diensten/stormschade',
    titel: 'Stormschade',
    tekst: 'Snelle noodherstelling bij storm of lekkage — 24/7 bereikbaar.',
    img: '/images/stormschade-kaart.png',
  },
];

const KEMPEN_BULLETS = [
  'Zandgrond geeft minder verzakking maar wel zandverstuiving — pannendaken hebben extra aandacht voor windbelasting nodig.',
  'Houten kapconstructies zijn historisch in de Kempen wijdverbreid — restauratie boven vervanging is vaak haalbaar.',
  'Veel woningen met grote bijgebouwen (schuren, garages, tuinhuisjes) — vaak in golfplaten of asbest-eternit, asbestpremie OVAM is hier interessant.',
  'Klassieke Kempische dorpswoningen met bakgoten of zinken hanggoten — bij vele meer dan 50 jaar oud.',
];
const ARBEIDERS_BULLETS = [
  'Woningen 50-100 jaar oud — kapconstructie lokaal aangetast, isolatie afwezig of minimaal.',
  'Mijn VerbouwPremie zeer interessant voor dakisolatie (R-waarde 4,5+) — premie tot enkele duizenden euro afhankelijk van inkomen.',
  'Originele zinken bakgoten — bij de meeste arbeiderswoningen meer dan 50 jaar oud, vervanging is normale onderhoudscyclus.',
  'Soms beschermd als bouwkundig erfgoed — controleer eerst of je woning in beschermd dorpsgezicht of monumentenlijst staat voor je structureel werk start.',
];
const NAOORLOG_BULLETS = [
  'Onvoldoende of geen dakisolatie — Mijn VerbouwPremie kan hier vaak ingezet worden (R-waarde 4,5 minimum).',
  'Verouderde zinken bakgoten met verborgen lekkage — gevelschade vaak al opgetreden.',
  'Pannen die los of poreus geworden zijn na 50-70 jaar — gerichte herstelling vaak voldoende.',
  'Schoorstenen met versleten zinkwerk — een topoorzaak van waterintrede die niet meteen op het dakvlak zichtbaar is.',
];
const RECREATIE_BULLETS = [
  'Recreatieve woningen die slechts deels van het jaar bewoond zijn — extra aandacht voor onderhoud, vooral aan zinkwerk en goten waar bladbedekking en stilstaand water schade veroorzaken.',
  'Houten chalets en blokhutten — vraagt vakwerk in plaats van standaard pannendak-aanpak.',
  'Klanten uit Nederlands-Brabant die bewust een Belgische dakwerker zoeken — prijsverschil + korte afstand. Btw en factuur worden volgens je woonadres correct opgesteld.',
  'Bedrijfspanden in industriezone Lommel-Maatheide — vaak grote platte daken in EPDM, bitumen of staaldakplaten, met eigen onderhoudslogica.',
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
      'Vul het formulier in met je naam, gemeente, type werk en korte beschrijving (vermeld of het over een recreatieve woning of grensadres gaat). Of bel rechtstreeks +32 456 19 13 60.',
  },
  {
    nummer: 2,
    titel: 'Contact binnen 24 uur',
    tekst:
      'Een lokale dakwerker uit Lommel of een aangrenzende Kempen-gemeente neemt rechtstreeks contact op.',
  },
  {
    nummer: 3,
    titel: 'Gratis inmeting ter plaatse',
    tekst:
      'De dakwerker komt langs (gratis en vrijblijvend), beoordeelt de situatie, geeft eerlijk advies en bespreekt de opties.',
  },
  {
    nummer: 4,
    titel: 'Schriftelijke offerte',
    tekst:
      'Binnen 1-3 werkdagen een gedetailleerde offerte: materiaal, oppervlakte, premies, planning. Geen verborgen meerwerken.',
  },
  {
    nummer: 5,
    titel: 'Uitvoering + garantie',
    tekst:
      'Na akkoord: startdatum afgesproken. 10-jarige wettelijke aansprakelijkheid op uitvoering, fabrieksgarantie op materialen.',
  },
];

const ERKENNING_KAARTEN = [
  {
    titel: 'Erkende vakmannen',
    tekst:
      'Onze dakwerkers in Lommel zijn erkend (Bouwunie, Confederatie Bouw of gelijkwaardig), btw-plichtig en hebben een geldige beroepsverzekering.',
  },
  {
    titel: '10-jarige aansprakelijkheid',
    tekst:
      'Bij elke uitvoering krijg je de wettelijke 10-jarige aansprakelijkheid van de aannemer (Wet Breyne).',
  },
  {
    titel: 'Eerlijke offerte',
    tekst:
      'De inmeting is gratis en vrijblijvend. De offerte is schriftelijk, gedetailleerd en bindend.',
  },
];

const FAQ_DATA = [
  {
    vraag: 'Werken jullie in heel Lommel of alleen in het centrum?',
    antwoord:
      'We werken in heel Lommel en alle deelgemeenten — Kerkhoven, Kolonie, Werkplaatsen, Heeserbergen, Stevensvennen, Gestel, Heuvelplein, Kattenbos en Lommel-Barrier. Ook in de buurgemeenten Pelt, Hechtel-Eksel, Mol, Balen en Hamont-Achel.',
  },
  {
    vraag: 'Mijn woning ligt in de oude arbeiderswijk Kolonie of Werkplaatsen — hebben jullie daar ervaring?',
    antwoord:
      'Ja. De arbeiderswijken Kolonie en Werkplaatsen vormen een eigen typologie (rijwoningen, half-open bebouwing, kleine kavels, klassieke pannendaken). Onze dakwerkers werken regelmatig op deze woningen. Voor structurele dakwerken: controleer eerst of je woning in beschermd dorpsgezicht of monumentenlijst staat — we helpen daarmee tijdens de gratis inmeting.',
  },
  {
    vraag: 'Mijn dak / tuinhuis lijkt asbestlei te zijn — kunnen jullie dat verwijderen?',
    antwoord:
      'Asbestverwijdering moet door een erkende asbestverwijderaar gebeuren — geen gewone dakwerker. We coördineren het volledige traject: verwijdering, nieuw dak, eventueel isolatie, en de aanvraag van de asbestpremie en Mijn VerbouwPremie. Tijdens de gratis inmeting bekijken we eerst of het werkelijk asbest is.',
  },
  {
    vraag: 'Hoe snel kan een dakwerker uit Lommel langskomen voor een inmeting?',
    antwoord:
      'Bij niet-acute aanvragen meestal binnen 3-7 werkdagen. Bij acute lekkage of stormschade vaak binnen het uur tot 24 uur. Bel altijd eerst — telefonisch krijg je meteen een inschatting.',
  },
  {
    vraag: 'Krijg ik een lokale dakwerker, of een onderaannemer van buiten Limburg?',
    antwoord:
      'Een lokale dakwerker uit Lommel of een aangrenzende gemeente in de noordelijke Kempen. We werken expliciet niet met onderaannemers van buiten de regio.',
  },
  {
    vraag: 'Ik woon in Nederlands-Brabant (Bergeijk, Eindhoven-omgeving) — kunnen jullie ook daar werken?',
    antwoord:
      'Voor woningen vlakbij de grens: ja, we werken regelmatig over de grens. Btw en factuur worden volgens je woonadres correct opgesteld (Belgisch tarief voor Belgische woningen, Nederlands tarief voor Nederlandse). Vermeld in je aanvraag dat het over een Nederlands adres gaat.',
  },
  {
    vraag: 'Wij willen dakisolatie laten plaatsen op een woning in Kolonie of Heeserbergen — kom ik in aanmerking voor Mijn VerbouwPremie?',
    antwoord:
      'Heel waarschijnlijk wel. Voor dakisolatie moet je woning ouder dan 15 jaar zijn (Kolonie en Heeserbergen voldoen ruimschoots) en moet de R-waarde minstens 4,5 zijn. De premie kan oplopen tot enkele duizenden euro afhankelijk van je gezinsinkomen. Een lokale dakwerker helpt je gratis met de aanvraag.',
  },
  {
    vraag: 'Wat doen we als jullie offerte hoger is dan een concurrent?',
    antwoord:
      "Stuur ons gerust de andere offerte door. We vergelijken eerlijk: zit er evenveel werk in, zelfde materiaalkwaliteit, zelfde garantievoorwaarden? Vaak zijn 'goedkopere' offertes goedkoper omdat er essentieel werk uit gehaald is. Wij geven dan eerlijk advies — soms is de andere offerte gewoon beter, dan zeggen we dat.",
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://dakwerklimburg.be/lommel#business',
  name: 'Dakwerk Limburg — Dakwerker in Lommel',
  image: '/images/dakrenovatie-hero.png',
  description:
    'Erkende lokale dakwerkers in Lommel en alle deelgemeenten (Kerkhoven, Kolonie, Werkplaatsen, Heeserbergen, Stevensvennen). Specifieke ervaring met Kempische bouwtraditie, glas- en mijnarbeiderswijken, en grenswoningen richting Nederlands-Brabant. Gratis offerte binnen 24 uur.',
  url: 'https://dakwerklimburg.be/lommel',
  telephone: '+32456191360',
  email: 'info@dakwerklimburg.be',
  priceRange: '€€',
  areaServed: [
    { '@type': 'City', name: 'Lommel' },
    { '@type': 'City', name: 'Kerkhoven' },
    { '@type': 'City', name: 'Kolonie' },
    { '@type': 'City', name: 'Heeserbergen' },
    { '@type': 'City', name: 'Stevensvennen' },
    { '@type': 'City', name: 'Pelt' },
    { '@type': 'City', name: 'Hechtel-Eksel' },
    { '@type': 'City', name: 'Hamont-Achel' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lommel',
    addressRegion: 'Limburg',
    postalCode: '3920',
    addressCountry: 'BE',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dakwerken in Lommel',
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
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Werken jullie in heel Lommel of alleen in het centrum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We werken in heel Lommel en alle deelgemeenten — Kerkhoven, Kolonie, Werkplaatsen, Heeserbergen, Stevensvennen, Gestel, Heuvelplein, Kattenbos en Lommel-Barrier. Ook in de buurgemeenten Pelt, Hechtel-Eksel, Mol, Balen en Hamont-Achel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn woning ligt in de oude arbeiderswijk Kolonie of Werkplaatsen — hebben jullie daar ervaring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. De arbeiderswijken Kolonie en Werkplaatsen vormen een eigen typologie (rijwoningen, half-open bebouwing, kleine kavels, klassieke pannendaken). Onze dakwerkers werken regelmatig op deze woningen. Voor structurele dakwerken: controleer eerst of je woning in beschermd dorpsgezicht of monumentenlijst staat — we helpen daarmee tijdens de gratis inmeting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn dak of tuinhuis lijkt asbestlei te zijn — kunnen jullie dat verwijderen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Asbestverwijdering moet door een erkende asbestverwijderaar gebeuren — geen gewone dakwerker. We coördineren het volledige traject: verwijdering, nieuw dak, eventueel isolatie, en de aanvraag van de asbestpremie en Mijn VerbouwPremie. Tijdens de gratis inmeting bekijken we eerst of het werkelijk asbest is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel kan een dakwerker uit Lommel langskomen voor een inmeting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij niet-acute aanvragen meestal binnen 3-7 werkdagen. Bij acute lekkage of stormschade vaak binnen het uur tot 24 uur. Bel altijd eerst — telefonisch krijg je meteen een inschatting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Krijg ik een lokale dakwerker, of een onderaannemer van buiten Limburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een lokale dakwerker uit Lommel of een aangrenzende gemeente in de noordelijke Kempen. We werken expliciet niet met onderaannemers van buiten de regio.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ik woon in Nederlands-Brabant — kunnen jullie ook daar werken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor woningen vlakbij de grens (Bergeijk, Eindhoven-omgeving): ja, we werken regelmatig over de grens. Btw en factuur worden volgens je woonadres correct opgesteld. Vermeld in je aanvraag dat het over een Nederlands adres gaat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wij willen dakisolatie laten plaatsen op een woning in Kolonie of Heeserbergen — kom ik in aanmerking voor Mijn VerbouwPremie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heel waarschijnlijk wel. Voor dakisolatie moet je woning ouder dan 15 jaar zijn (Kolonie en Heeserbergen voldoen ruimschoots) en moet de R-waarde minstens 4,5 zijn. De premie kan oplopen tot enkele duizenden euro afhankelijk van je gezinsinkomen. Een lokale dakwerker helpt je gratis met de aanvraag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doen we als jullie offerte hoger is dan een concurrent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Stuur ons gerust de andere offerte door. We vergelijken eerlijk: zit er evenveel werk in, zelfde materiaalkwaliteit, zelfde garantievoorwaarden? Vaak zijn 'goedkopere' offertes goedkoper omdat er essentieel werk uit gehaald is. Wij geven dan eerlijk advies — soms is de andere offerte gewoon beter, dan zeggen we dat.",
      },
    },
  ],
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

export default function LommelPage() {
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
                Dakwerker in Lommel — erkend, lokaal, betrouwbaar
              </h1>
              <p className="text-main text-lg leading-relaxed mb-6">
                Op zoek naar een betrouwbare dakwerker in Lommel? Dakwerk Limburg verbindt je
                met erkende lokale dakwerkers die wonen en werken in Lommel-centrum,
                Kerkhoven, Kolonie, Heeserbergen, Stevensvennen, Werkplaatsen en alle
                deelgemeenten van de noordelijke Kempen. Of het nu gaat om een Kempische
                woning op zandgrond, een glas- of mijnarbeiderswoning in Kolonie, een
                naoorlogse verkaveling in Heeserbergen of een recreatieve woning aan de
                Nederlandse grens — je krijgt iemand met kennis van het Lommelse en
                Kempische bouwprofiel. Eén aanvraag, gratis inmeting en een eerlijke offerte
                binnen 24 uur. Geen call center, geen tussenpersoon.
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
                  src="/images/dakrenovatie-hero.png"
                  alt="Erkende dakwerker bezig op een dak in Lommel"
                  width={800}
                  height={533}
                  loading="eager"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            <div id="offerte-formulier">
              <LeadForm source="lommel-hero" />
            </div>
          </div>
        </div>
      </section>

      <section id="waarom-lokaal" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Waarom een lokale dakwerker uit Lommel kiezen?
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
            Lommel ligt in de noordelijke Kempen — zandgrond, dennenbossen, grensgebied met
            Nederlands-Brabant (Eindhoven op 25 km). De Lommelse woningvoorraad is gevormd
            door drie golven: oude Kempische landbouwbouw, glas- en mijnindustrie
            (Lommel-Kolonie was woonwijk voor glasarbeiders), en moderne villawijken met
            ruimte voor vakantie- en grensbewoners. Een dakwerker uit Antwerpen ziet hier
            &apos;gewoon Limburg&apos;, maar Lommelse zandgrond en Kempische bouwtraditie
            verschillen sterk van Maasmechelen of Tongeren.
          </p>
        </div>
      </section>

      <section id="werkgebied" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10">
            Werkgebied — heel Lommel en de noordelijke Kempen
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Lommel centrum en deelgemeenten
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {WIJKEN_DATA.map((w) => (
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
              Voor de kleinere kernen rond Lommel — denk aan de gehuchten richting Pelt, de
              bossen van Stevensvennen, of grenszones nabij Bergeijk en Eindhoven — werken
              we ook standaard. Geef bij je aanvraag gewoon je gemeente en straat door, dan
              koppelen we je aan een dakwerker die in jouw buurt woont of er regelmatig
              werkt.
            </p>
          </div>
        </div>
      </section>

      <section id="diensten" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Onze dakwerkdiensten in Lommel
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
            Niet zeker welke dienst je nodig hebt? Geen probleem. Vul het formulier in met
            een korte beschrijving van je dakprobleem of -plan. Een dakwerker uit Lommel
            komt gratis langs voor een inmeting en geeft tijdens dat bezoek meteen advies.
            Voor recreatieve woningen of grensdossiers (Nederlands adres): vermeld dat in je
            aanvraag, dan sturen we de juiste dakwerker en passen we de administratie
            correct aan.
          </p>
        </div>
      </section>

      <section id="bouwstijlen" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Typische dakproblemen per bouwstijl in Lommel
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Kempische bouwtraditie en zandgrond
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De klassieke Kempische woning staat op zandgrond met heide- en dennenbossen
              rondom — totaal anders dan de leem- en kleigrond van Haspengouw. Typische
              Kempische bouw: lage gebouwen, bakstenen of cementblokken, klassieke
              pannendaken (vaak rode keramiek of beton), grote dakkapellen, soms strodekking
              als historisch element. Typische aandachtspunten:
            </p>
            <Bullets items={KEMPEN_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Glas- en mijnarbeiderswijken — Kolonie, Werkplaatsen
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De wijken Kolonie en Werkplaatsen zijn historisch verbonden met de
              glasindustrie en mijnbouw die Lommel groot maakten. Klassieke
              arbeiderstuinwijken met kleine kavels, rijwoningen of half-open bebouwing,
              klassieke pannendaken, vaak zonder echte isolatie en met originele zinken
              bakgoten. Typische problemen:
            </p>
            <Bullets items={ARBEIDERS_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Naoorlogse verkavelingen — Lommel-centrum, Kerkhoven, Heeserbergen
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De naoorlogse verkavelingen rond Lommel — Kerkhoven, Heeserbergen, delen van
              het centrum — zijn typisch jaren 50-80 woningen: rijwoningen of half-open
              bebouwing met klassieke pannendaken, lage isolatiestandaard en originele
              zinken bakgoten. Typische problemen:
            </p>
            <Bullets items={NAOORLOG_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Recreatieve woningen en grensligging met Nederlands-Brabant
            </h3>
            <p className="text-main leading-relaxed mb-4">
              Lommel is een toeristische gemeente met de Sahara, het Pijnven, vele bossen
              en recreatieve verblijven. Ook ligt Lommel direct aan de Nederlandse grens
              (Bergeijk, Eindhoven op 25 km). Voor recreatieve woningen, vakantiehuisjes of
              woningen aan de grens speelt:
            </p>
            <Bullets items={RECREATIE_BULLETS} />
          </div>

          <p className="text-main leading-relaxed">
            Lommel vraagt een dakwerker die op zandgrond kan werken, het verschil kent
            tussen een Kempische dorpswoning en een arbeiderswoning in Kolonie, en die ook
            met recreatieve woningen of grensdossiers vlot omgaat. Een ploeg uit Brussel of
            Antwerpen heeft hier weinig ervaring — een lokale dakwerker uit Lommel of Pelt
            wel.
          </p>
        </div>
      </section>

      <section id="prijzen" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Wat kost dakwerk in Lommel?
          </h2>
          <p className="text-main leading-relaxed mb-8">
            Richtprijzen voor de meest gevraagde dakwerken in Lommel in 2026. Exacte
            offertes verschillen per woning — bouwstijl, oppervlakte, toegankelijkheid en
            materiaalkeuze spelen mee.
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
            Bovenstaande zijn richtprijzen voor woningen. Voor recreatieve woningen,
            bedrijfspanden of grensdossiers geldt een aangepaste prijslogica. Vermeld type
            pand en oppervlakte in je aanvraag. Meer detail op onze{' '}
            <Link href="/diensten" className="text-accent font-semibold underline">
              diensten-pagina&apos;s
            </Link>
            .
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
            Vraag bij elke dakwerker (ook bij ons) naar erkenning en verzekering. Wie er
            omheen draait of geen schriftelijke offerte wil geven, schrap je meteen van je
            lijst.
          </p>
        </div>
      </section>

      <section id="faq" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
            Veelgestelde vragen — dakwerker in Lommel
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
                Plan vandaag nog je gratis dakscreening in Lommel
              </h2>
              <p className="text-main text-lg leading-relaxed mb-6">
                Vul het formulier in met je gemeente in Lommel of een grenzone, type werk en
                korte beschrijving. Of bel rechtstreeks naar{' '}
                <a href="tel:+32456191360" className="text-accent font-bold hover:underline">
                  +32 456 19 13 60
                </a>
                . Een lokale dakwerker uit jouw buurt neemt binnen 24 uur contact op voor
                een gratis en vrijblijvende inmeting. Geen tussenpersonen, geen call center.
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
              <LeadForm source="lommel-cta" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
