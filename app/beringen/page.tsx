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
  'Dakwerker in Beringen — Erkende Lokale Dakwerken in heel Beringen en Deelgemeenten';
const DESCRIPTION =
  'Op zoek naar een dakwerker in Beringen? Dakwerk Limburg verbindt je met erkende lokale dakwerkers in Beringen-centrum, Beringen-Mijn, Beverlo, Koersel, Paal en omgeving. Specifieke ervaring met de mijn-cité Beringen-Mijn en de landelijke deelgemeenten. Gratis offerte binnen 24 uur.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://dakwerklimburg.be/beringen',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: 'https://dakwerklimburg.be/beringen',
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
      'Een dakwerker uit Beringen of een aangrenzende gemeente is vaak binnen de week ter plaatse — bij acute schade zelfs binnen 24 uur.',
  },
  {
    titel: 'Kennis van mijn-cité en landelijke bouw',
    tekst:
      'Beringen-Mijn vraagt erfgoed-kennis, hoeves in Koersel vragen kennis van grote kapconstructies — onze dakwerkers hebben allebei.',
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
  { naam: 'Beringen-centrum', postcode: '3580', info: 'winkelhart, mix rijwoningen en handelspanden' },
  { naam: 'Beringen-Mijn', postcode: '3582', info: 'beschermde mijntuinwijk, klassieke pannendaken, kleine kavels' },
  { naam: 'Beverlo', postcode: '3581', info: 'landelijke kern, vrijstaande woningen en hoeves' },
  { naam: 'Koersel', postcode: '3582', info: 'klassiek dorp, hoeves en boerderijen, akkerbouw' },
  { naam: 'Paal', postcode: '3583', info: 'dorpse kern aan E313, mix oud en nieuwbouw' },
  { naam: 'Stal', postcode: '3583', info: 'naoorlogse verkaveling, jaren 50-80 woningen' },
  { naam: 'Tervant', postcode: '3580', info: 'klassieke kerkdorp met landelijke woningen en boerderijen' },
  { naam: 'Korspel', postcode: '3581', info: 'klein gehucht, vrijstaand en hoevebouw' },
];

const BUURGEMEENTEN = [
  'Heusden-Zolder (3550)',
  'Houthalen-Helchteren (3530)',
  'Leopoldsburg (3970)',
  'Lummen (3560)',
  'Tessenderlo (3980)',
  'Ham (3945)',
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

const MIJN_BULLETS = [
  'Vergunningsplicht — voor structurele dakwerken in beschermd dorpsgezicht is een toelating Onroerend Erfgoed nodig naast de gewone stedenbouwkundige vergunning. Reken op extra weken in de planning.',
  'Verplichte materialen — klassieke gebakken pannen, zink of koper voor goten en bekledingen, geen synthetische alternatieven.',
  'Originele houten kapconstructie van bijna een eeuw oud — restauratie boven vervanging waar mogelijk, met behoud van originele elementen.',
  'Pannen die niet meer in productie zijn — vervanging vraagt zoeken naar tweedehands of erfgoed-replicaten. Een lokale dakwerker kent de bronnen die voor mijntuinwijken al jaren werken.',
];
const LANDELIJK_BULLETS = [
  'Grote dakoppervlaktes op hoeves en bijgebouwen — vraagt een dakwerker die met grote schalen kan werken zonder dagprijzen op te jagen.',
  'Originele kapconstructie met soms eikenhouten spanten — restaureren in plaats van vervangen is vaak haalbaar.',
  'Mix van bouwmaterialen — woonhuis in pannen, schuur in golfplaten of asbest-eternit. Asbestpremie van OVAM en eventueel VLIF-subsidie voor agrarische gebouwen.',
  'Premies en btw-tarief — voor hoeves waar je woont, kan het 6%-btw-tarief gelden bij renovatie van woningen ouder dan 10 jaar (let op: bedrijfsgebouwen vallen vaak buiten — vraag het vooraf na).',
];
const NAOORLOG_BULLETS = [
  'Onvoldoende of geen dakisolatie — Mijn VerbouwPremie kan hier vaak ingezet worden (R-waarde 4,5 minimum).',
  'Verouderde zinken bakgoten met verborgen lekkage — gevelschade vaak al opgetreden.',
  'Pannen die los of poreus geworden zijn na 50-70 jaar — gerichte herstelling vaak voldoende.',
  'Schoorstenen met versleten zinkwerk — een topoorzaak van waterintrede die niet meteen op het dakvlak zichtbaar is.',
];
const VILLA_BULLETS = [
  'Onderhoud van natuurleien — meestal niet zelf-vervangbaar, vraagt een gespecialiseerde dakwerker.',
  'Complex zinkwerk rond dakkapellen en kepers — foutgevoelige zones, lekkage begint vaak hier.',
  'Hogere kostprijs door grote oppervlakte — dus meer reden voor 2-3 vergelijkbare offertes.',
  "Soms platte daken op moderne villa's — EPDM, bitumen, PVC. Specifieke kennis vereist over naden, afschot en isolatie.",
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
      'Vul het formulier in met je naam, gemeente, type werk en korte beschrijving (vermeld of het over een Beringen-Mijn-woning of hoeve gaat). Of bel rechtstreeks +32 456 19 13 60.',
  },
  {
    nummer: 2,
    titel: 'Contact binnen 24 uur',
    tekst:
      'Een lokale dakwerker uit Beringen of een aangrenzende gemeente neemt rechtstreeks contact op.',
  },
  {
    nummer: 3,
    titel: 'Gratis inmeting ter plaatse',
    tekst:
      'De dakwerker komt langs (gratis en vrijblijvend), beoordeelt de situatie, geeft eerlijk advies. Voor erfgoed of grote opdrachten bekijken we ook de vergunningsplicht.',
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
      'Onze dakwerkers in Beringen zijn erkend (Bouwunie, Confederatie Bouw of gelijkwaardig), btw-plichtig en hebben een geldige beroepsverzekering.',
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
    vraag: 'Werken jullie in heel Beringen of alleen in het centrum?',
    antwoord:
      'We werken in heel Beringen en alle deelgemeenten — Beringen-Mijn, Beverlo, Koersel, Paal, Stal, Tervant en Korspel. Ook in de buurgemeenten Heusden-Zolder, Houthalen-Helchteren, Leopoldsburg, Lummen, Tessenderlo en Ham.',
  },
  {
    vraag: 'Mijn woning staat in Beringen-Mijn (beschermde mijntuinwijk) — hebben jullie ervaring met die typologie?',
    antwoord:
      'Ja. Beringen-Mijn is beschermd erfgoed (gebouwd vanaf 1907 voor mijnarbeiders en -bedienden). Onze dakwerkers werken regelmatig op deze woningen en weten welke pannen, welk zinkwerk en welke aanpak past. Voor structurele dakwerken in beschermd dorpsgezicht is een toelating Onroerend Erfgoed nodig — we helpen met de vergunningsaanvraag.',
  },
  {
    vraag: 'Wij hebben een hoeve in Koersel of Beverlo — is dat haalbaar?',
    antwoord:
      'Heel goed haalbaar. Hoeves vormen een aanzienlijk deel van onze opdrachten in de landelijke deelgemeenten van Beringen. We hebben dakwerkers met specifieke ervaring in grote oppervlaktes, eikenhouten kapconstructies, en gemengde bouwmaterialen tussen hoofdgebouw, schuren en stallen. Vaak werkbaar in fases om de kost te spreiden.',
  },
  {
    vraag: 'Mijn dak / tuinhuis lijkt asbestlei te zijn — kunnen jullie dat verwijderen?',
    antwoord:
      'Asbestverwijdering moet door een erkende asbestverwijderaar gebeuren — geen gewone dakwerker. We coördineren het volledige traject: verwijdering, nieuw dak, eventueel isolatie, en de aanvraag van de asbestpremie en Mijn VerbouwPremie. Voor agrarische gebouwen kan ook VLIF-subsidie van toepassing zijn.',
  },
  {
    vraag: 'Hoe snel kan een dakwerker uit Beringen langskomen voor een inmeting?',
    antwoord:
      'Bij niet-acute aanvragen meestal binnen 3-7 werkdagen. Bij acute lekkage of stormschade vaak binnen het uur tot 24 uur. Bel altijd eerst — telefonisch krijg je meteen een inschatting.',
  },
  {
    vraag: 'Krijg ik een lokale dakwerker, of een onderaannemer van buiten Limburg?',
    antwoord:
      'Een lokale dakwerker uit Beringen of een aangrenzende Limburgse gemeente. We werken expliciet niet met onderaannemers van buiten de provincie — voor erfgoed- en hoevedaken weegt regiokennis extra zwaar.',
  },
  {
    vraag: 'Wij willen dakisolatie laten plaatsen op een woning in Beringen-centrum of Stal — kom ik in aanmerking voor Mijn VerbouwPremie?',
    antwoord:
      'Heel waarschijnlijk wel. Voor dakisolatie moet je woning ouder dan 15 jaar zijn (naoorlogse Beringse woningen voldoen ruimschoots) en moet de R-waarde minstens 4,5 zijn. De premie kan oplopen tot enkele duizenden euro afhankelijk van je gezinsinkomen. Een lokale dakwerker helpt je gratis met de aanvraag.',
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
  '@id': 'https://dakwerklimburg.be/beringen#business',
  name: 'Dakwerk Limburg — Dakwerker in Beringen',
  image: 'https://i.postimg.cc/rstDYfLf/dakrenovatie-hero.jpg',
  description:
    'Erkende lokale dakwerkers in Beringen en alle deelgemeenten (Beringen-Mijn, Beverlo, Koersel, Paal, Stal, Tervant). Specifieke ervaring met de beschermde mijntuinwijk Beringen-Mijn en de landelijke deelgemeenten met hoeves. Gratis offerte binnen 24 uur.',
  url: 'https://dakwerklimburg.be/beringen',
  telephone: '+32456191360',
  email: 'info@dakwerklimburg.be',
  priceRange: '€€',
  areaServed: [
    { '@type': 'City', name: 'Beringen' },
    { '@type': 'City', name: 'Beringen-Mijn' },
    { '@type': 'City', name: 'Beverlo' },
    { '@type': 'City', name: 'Koersel' },
    { '@type': 'City', name: 'Paal' },
    { '@type': 'City', name: 'Heusden-Zolder' },
    { '@type': 'City', name: 'Houthalen-Helchteren' },
    { '@type': 'City', name: 'Leopoldsburg' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Beringen',
    addressRegion: 'Limburg',
    postalCode: '3580',
    addressCountry: 'BE',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dakwerken in Beringen',
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
      name: 'Werken jullie in heel Beringen of alleen in het centrum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We werken in heel Beringen en alle deelgemeenten — Beringen-Mijn, Beverlo, Koersel, Paal, Stal, Tervant en Korspel. Ook in de buurgemeenten Heusden-Zolder, Houthalen-Helchteren, Leopoldsburg, Lummen, Tessenderlo en Ham.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn woning staat in Beringen-Mijn — hebben jullie ervaring met die typologie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Beringen-Mijn is beschermd erfgoed (gebouwd vanaf 1907 voor mijnarbeiders en -bedienden). Onze dakwerkers werken regelmatig op deze woningen en weten welke pannen, welk zinkwerk en welke aanpak past. Voor structurele dakwerken in beschermd dorpsgezicht is een toelating Onroerend Erfgoed nodig — we helpen met de vergunningsaanvraag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wij hebben een hoeve in Koersel of Beverlo — is dat haalbaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heel goed haalbaar. Hoeves vormen een aanzienlijk deel van onze opdrachten in de landelijke deelgemeenten van Beringen. We hebben dakwerkers met specifieke ervaring in grote oppervlaktes, eikenhouten kapconstructies, en gemengde bouwmaterialen tussen hoofdgebouw, schuren en stallen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn dak of tuinhuis lijkt asbestlei te zijn — kunnen jullie dat verwijderen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Asbestverwijdering moet door een erkende asbestverwijderaar gebeuren — geen gewone dakwerker. We coördineren het volledige traject: verwijdering, nieuw dak, eventueel isolatie, en de aanvraag van de asbestpremie en Mijn VerbouwPremie. Voor agrarische gebouwen kan ook VLIF-subsidie van toepassing zijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel kan een dakwerker uit Beringen langskomen voor een inmeting?',
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
        text: 'Een lokale dakwerker uit Beringen of een aangrenzende Limburgse gemeente. We werken expliciet niet met onderaannemers van buiten de provincie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wij willen dakisolatie laten plaatsen op een woning in Beringen-centrum of Stal — kom ik in aanmerking voor Mijn VerbouwPremie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heel waarschijnlijk wel. Voor dakisolatie moet je woning ouder dan 15 jaar zijn en moet de R-waarde minstens 4,5 zijn. De premie kan oplopen tot enkele duizenden euro afhankelijk van je gezinsinkomen. Een lokale dakwerker helpt je gratis met de aanvraag.',
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

export default function BeringenPage() {
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
                Dakwerker in Beringen — erkend, lokaal, betrouwbaar
              </h1>
              <p className="text-main text-lg leading-relaxed mb-6">
                Op zoek naar een betrouwbare dakwerker in Beringen? Dakwerk Limburg verbindt
                je met erkende lokale dakwerkers die wonen en werken in Beringen-centrum,
                Beringen-Mijn, Beverlo, Koersel, Paal, Stal en Tervant. Of het nu gaat om
                een woning in de beschermde mijntuinwijk van Beringen-Mijn, een hoeve in
                Koersel, een naoorlogse rijwoning in Beringen-centrum, of een moderne villa
                in Paal — je krijgt iemand met kennis van het Beringse bouwprofiel. Eén
                aanvraag, gratis inmeting en een eerlijke offerte binnen 24 uur. Geen call
                center, geen tussenpersoon.
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
                  alt="Erkende dakwerker bezig op een dak in Beringen"
                  width={800}
                  height={533}
                  loading="eager"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            <div id="offerte-formulier">
              <LeadForm source="beringen-hero" />
            </div>
          </div>
        </div>
      </section>

      <section id="waarom-lokaal" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Waarom een lokale dakwerker uit Beringen kiezen?
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
            Beringen heeft één van de bekendste mijntuinwijken van Vlaanderen:
            Beringen-Mijn, gebouwd vanaf 1907 voor de mijnarbeiders en -bedienden van de
            steenkoolmijn. Vandaag is dit beschermd erfgoed (Be-MINE als ex-mijnsite, met
            cultureel hergebruik) en blijft het een aanzienlijk deel van de Beringse
            woningvoorraad. Daarnaast strekt het grondgebied zich uit naar landelijke
            deelgemeenten met hoeves en boerderijen (Beverlo, Koersel, Paal, Tervant). Een
            lokale dakwerker uit Beringen kent dat verschil — een ploeg uit Antwerpen niet.
          </p>
        </div>
      </section>

      <section id="werkgebied" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10">
            Werkgebied — heel Beringen en omgeving
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Beringen centrum en deelgemeenten
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
              Voor de kleinere kernen rond Beringen — denk aan Korspel, kleinere zones in
              Tervant, of grenszones richting Lummen of Ham — werken we ook standaard. Geef
              bij je aanvraag gewoon je gemeente en straat door, dan koppelen we je aan een
              dakwerker die in jouw buurt woont of er regelmatig werkt.
            </p>
          </div>
        </div>
      </section>

      <section id="diensten" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Onze dakwerkdiensten in Beringen
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
            een korte beschrijving. Een dakwerker uit Beringen komt gratis langs en geeft
            tijdens dat bezoek meteen advies. Voor woningen in Beringen-Mijn (beschermd
            dorpsgezicht) of voor hoeves in Koersel/Beverlo: vermeld dat in je aanvraag,
            dan sturen we de juiste dakwerker.
          </p>
        </div>
      </section>

      <section id="bouwstijlen" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Typische dakproblemen per bouwstijl in Beringen
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Beringen-Mijn — beschermde mijntuinwijk en koolwinning-erfgoed
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De mijntuinwijk Beringen-Mijn is gebouwd vanaf 1907 voor mijnarbeiders en
              -bedienden van de Kempische Steenkoolmijnen Beringen. Vandaag is dit
              beschermd erfgoed: klassieke tuinwijk-stijl, pannendaken op kleine kavels,
              decoratieve gevelelementen, originele kleur- en materiaalpalet. Het
              ex-mijnterrein zelf werd herontwikkeld als Be-MINE (cultuur, winkels,
              klimcentrum). Wat dit betekent voor woningen in de wijk:
            </p>
            <Bullets items={MIJN_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Beverlo, Koersel, Paal en Tervant — landelijke kernen en hoeves
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De deelgemeenten Beverlo, Koersel, Paal en Tervant hebben een landelijk
              profiel: hoeves, boerderijen, vrijstaande woningen op grotere kavels.
              Klassieke pannendaken, soms gemengd met golfplaten op stallen of
              bijgebouwen. Typische uitdagingen:
            </p>
            <Bullets items={LANDELIJK_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Naoorlogse verkavelingen — Beringen-centrum, Stal
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De naoorlogse verkavelingen in Beringen-centrum, Stal en delen van de andere
              deelgemeenten zijn typisch jaren 50-80 woningen — rijwoningen of half-open
              bebouwing met klassieke pannendaken, lage isolatiestandaard en originele
              zinken bakgoten. Veel mijnarbeiders woonden hier of verhuisden hierheen na
              het sluiten van de mijn. Typische problemen:
            </p>
            <Bullets items={NAOORLOG_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Villa-wijken en moderne nieuwbouw
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De moderne villa-wijken (in Paal langs de E313, in delen van Tervant en aan
              de rand van Beringen-centrum) hebben een ander profiel: grotere kavels,
              complexere dakvormen (mansarde, walmdaken, dakkapellen), hoogwaardige
              materialen. Typische uitdagingen:
            </p>
            <Bullets items={VILLA_BULLETS} />
          </div>

          <p className="text-main leading-relaxed">
            Beringen vraagt een dakwerker die zowel met een mijntuinwijk-woning kan werken
            (beschermd erfgoed, vaste materialen) als met een hoeve in Koersel (grote
            oppervlaktes, gemengde materialen) en een naoorlogse rijwoning in Stal
            (isolatie + nieuwe goten). Die kennis komt enkel van iemand uit de regio.
          </p>
        </div>
      </section>

      <section id="prijzen" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Wat kost dakwerk in Beringen?
          </h2>
          <p className="text-main leading-relaxed mb-8">
            Richtprijzen voor de meest gevraagde dakwerken in Beringen in 2026. Exacte
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
            Bovenstaande zijn richtprijzen voor woningen. Voor erfgoedwerk in
            Beringen-Mijn, hoeve-renovaties of grote villa&apos;s geldt een aangepaste
            prijslogica. Vermeld type pand en oppervlakte in je aanvraag. Meer detail op
            onze{' '}
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
            Vraag bij elke dakwerker (ook bij ons) naar erkenning en verzekering. Voor
            Beringen-Mijn en andere erfgoedwoningen: vraag naar referenties van eerdere
            monumentwerken.
          </p>
        </div>
      </section>

      <section id="faq" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
            Veelgestelde vragen — dakwerker in Beringen
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
                Plan vandaag nog je gratis dakscreening in Beringen
              </h2>
              <p className="text-main text-lg leading-relaxed mb-6">
                Vul het formulier in met je gemeente in Beringen of een deelgemeente, type
                werk en korte beschrijving. Of bel rechtstreeks naar{' '}
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
              <LeadForm source="beringen-cta" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
