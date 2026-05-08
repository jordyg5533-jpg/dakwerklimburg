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
  'Dakwerker in Tongeren — Erkende Lokale Dakwerken in heel Tongeren en Deelgemeenten';
const DESCRIPTION =
  'Op zoek naar een dakwerker in Tongeren? Dakwerk Limburg verbindt je met erkende lokale dakwerkers in Tongeren-centrum, Berg, Lauw, Rutten, Vreren en omgeving. Specifieke ervaring met beschermd erfgoed in de oudste stad van België en Haspengouwse hoeves. Gratis offerte binnen 24 uur.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://dakwerklimburg.be/tongeren',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: 'https://dakwerklimburg.be/tongeren',
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
      'Een dakwerker uit Tongeren of een aangrenzende Haspengouwse gemeente is vaak binnen de week ter plaatse voor een inmeting — bij acute schade zelfs binnen 24 uur.',
  },
  {
    titel: 'Kennis van Romeins-middeleeuws erfgoed',
    tekst:
      'Van een herenhuis aan de Romeinse stadsmuur tot een beschermd pand in de binnenstad — onze dakwerkers kennen de erfgoed-richtlijnen, de toegelaten materialen en de Onroerend Erfgoed-procedure.',
  },
  {
    titel: 'Geen reiskosten in offerte',
    tekst:
      'Een lokale dakwerker rekent geen kilometers of verplaatsingskosten door — offertes vallen standaard 10-25% voordeliger uit dan bij grote bedrijven uit Antwerpen of Brussel.',
  },
  {
    titel: 'Persoonlijk aanspreekpunt',
    tekst:
      'Je krijgt rechtstreeks contact met de dakwerker die het werk komt uitvoeren — ook na de oplevering. Geen call center, geen doorverwijzingen.',
  },
];

const WIJKEN_DATA = [
  { naam: 'Tongeren-centrum', postcode: '3700', info: 'beschermd erfgoed, Romeinse muur, herenhuizen 1700-1900, antiekkwartier' },
  { naam: 'Berg', postcode: '3700', info: 'dorpse kern dichtbij centrum, mix oude en nieuwe woningen' },
  { naam: 'Lauw', postcode: '3700', info: 'landelijk, akkerbouw, klassieke pannendaken' },
  { naam: 'Rutten', postcode: '3700', info: 'fruitstreek, hoeves en boerderijen' },
  { naam: 'Vreren', postcode: '3700', info: 'landelijke kern, vrijstaande woningen en hoeves' },
  { naam: 'Piringen', postcode: '3700', info: 'klassiek dorp, jaren 60-80 verkavelingen' },
  { naam: 'Mal / Henis', postcode: '3700', info: 'naoorlogse verkavelingen, rijwoningen en half-open' },
  { naam: 'Sluizen / Nerem', postcode: '3700', info: 'kleinere kernen aan de zuidelijke rand' },
];

const BUURGEMEENTEN = [
  'Bilzen (3740)',
  'Hoeselt (3730)',
  'Riemst (3770)',
  'Borgloon (3840)',
  'Heers (3870)',
  'Sint-Truiden (3800)',
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

const ERFGOED_BULLETS = [
  'Vergunningsplicht — voor structurele dakwerken op beschermde panden of in beschermd stadsgezicht is een toelating van Onroerend Erfgoed nodig naast de gewone stedenbouwkundige vergunning. Reken op extra weken in de planning.',
  'Verplichte materialen — natuurleien, klassieke gebakken pannen, zink of koper voor goten en bekledingen. Moderne synthetische materialen of metalen daken zijn meestal uitgesloten.',
  'Originele kapconstructie van honderden jaren oud — vaak eikenhouten spanten, soms aangetast door insecten, vocht of slechte voorgaande ingrepen. Restauratie boven vervanging waar mogelijk.',
  'Bakgoten ingewerkt in de gevel, soms gedeelde dakvlakken met buurpanden, smalle straten met beperkte werkruimte — typisch Tongerse uitdagingen die een lokale ploeg kent.',
];
const HOEVES_BULLETS = [
  'Grote dakoppervlaktes — een hoevedak is vaak 200-500 m² of meer. Vraagt een dakwerker die met grote oppervlaktes kan werken zonder dagprijzen op te jagen.',
  'Originele kapconstructie met eikenhouten spanten — restaureren in plaats van vervangen is vaak haalbaar én goedkoper, mits een vakman die het verschil kent.',
  'Mix van bouwmaterialen door eeuwen heen — hoofdgebouw in pannen, schuur in golfplaten of leien, aanbouw in bitumen. Soms gefaseerde aanpak nodig.',
  'Premies en subsidies — VLIF voor land- en tuinbouw, asbestpremie OVAM voor oude golfplaten, Mijn VerbouwPremie voor het woongedeelte. Een lokale dakwerker kent deze routes.',
];
const NAOORLOG_BULLETS = [
  'Onvoldoende of geen dakisolatie — Mijn VerbouwPremie kan hier vaak ingezet worden (R-waarde 4,5 minimum, premie tot enkele duizenden euro afhankelijk van inkomen).',
  'Verouderde zinken bakgoten met verborgen lekkage — gevelschade vaak al opgetreden. Vervangen door nieuw zinkwerk is normale onderhoudsinvestering om de 50-60 jaar.',
  'Pannen die los of poreus geworden zijn na 50-70 jaar — verschuivingen door storm, vraag dan eerst herstelling voor je aan volledige hernieuwing denkt.',
  'Schoorstenen met versleten zinkwerk — een topoorzaak van waterintrede die zonder aanleiding op de gevel zichtbaar wordt.',
];
const VILLA_BULLETS = [
  'Onderhoud van natuurleien — meestal niet zelf-vervangbaar, vraagt een gespecialiseerde dakwerker.',
  'Complex zinkwerk rond dakkapellen en kepers — foutgevoelige zones, lekkage begint vaak hier.',
  'Hogere kostprijs door grote oppervlakte — dus meer reden voor 2-3 vergelijkbare offertes.',
  'Klanten uit Maastricht of Nederlands-Limburg — we werken regelmatig op woningen aan beide zijden van de grens, factuur en btw worden volgens je woonplaats correct opgesteld.',
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
      'Vul het formulier in met je naam, gemeente, type werk en korte beschrijving (vermeld of het over een erfgoed- of monumentpand gaat). Of bel rechtstreeks +32 456 19 13 60.',
  },
  {
    nummer: 2,
    titel: 'Contact binnen 24 uur',
    tekst:
      'Een lokale dakwerker uit Tongeren of een aangrenzende gemeente neemt rechtstreeks contact op om een afspraak in te plannen. Voor erfgoedpanden sturen we een dakwerker met specifieke ervaring in monumentenwerk.',
  },
  {
    nummer: 3,
    titel: 'Gratis inmeting ter plaatse',
    tekst:
      'De dakwerker komt langs (gratis en vrijblijvend), beoordeelt de situatie, geeft eerlijk advies en bespreekt de opties. Voor beschermde panden bekijken we ook de vergunningsplicht en de toelating Onroerend Erfgoed.',
  },
  {
    nummer: 4,
    titel: 'Schriftelijke offerte',
    tekst:
      'Binnen 1-3 werkdagen ontvang je een gedetailleerde offerte: materiaal, oppervlakte, eventuele premies (Mijn VerbouwPremie, asbestpremie, VLIF), planning. Geen verborgen meerwerken.',
  },
  {
    nummer: 5,
    titel: 'Uitvoering + garantie',
    tekst:
      "Na akkoord wordt een startdatum afgesproken. 10-jarige wettelijke aansprakelijkheid op uitvoering, fabrieksgarantie op materialen. Voor erfgoedwerk: we leveren ook de uitvoeringsfoto's voor het erfgoeddossier.",
  },
];

const ERKENNING_KAARTEN = [
  {
    titel: 'Erkende vakmannen',
    tekst:
      'Onze dakwerkers in Tongeren zijn erkend (Bouwunie, Confederatie Bouw of gelijkwaardig), btw-plichtig en hebben een geldige beroepsverzekering. Geen losse uitvoerders, geen zwartwerk.',
  },
  {
    titel: '10-jarige aansprakelijkheid',
    tekst:
      'Bij elke uitvoering krijg je de wettelijke 10-jarige aansprakelijkheid van de aannemer (Wet Breyne) — verplicht voor structurele dakwerken.',
  },
  {
    titel: 'Eerlijke offerte',
    tekst:
      'De inmeting is gratis en vrijblijvend. De offerte is schriftelijk, gedetailleerd en bindend. Je weet vooraf wat het kost en wat erbij zit.',
  },
];

const FAQ_DATA = [
  {
    vraag: 'Werken jullie in heel Tongeren of alleen in het centrum?',
    antwoord:
      "We werken in heel Tongeren en alle deelgemeenten — Berg, Lauw, Rutten, Vreren, Piringen, Mal, Henis, Sluizen, Nerem, Diets-Heur, 's Herenelderen, Koninksem, Mulken, Neerrepen, Overrepen, Riksingen en Widooie. Ook in de buurgemeenten Bilzen, Hoeselt, Riemst, Borgloon, Heers en Sint-Truiden.",
  },
  {
    vraag: 'Mijn woning ligt in het beschermde centrum van Tongeren — kunnen jullie dat aan?',
    antwoord:
      'Ja. Het beschermde centrum is een belangrijk deel van onze opdrachten in Tongeren. Voor structurele dakwerken op beschermde panden of in beschermd stadsgezicht is een toelating van Onroerend Erfgoed nodig en moeten de materialen voldoen aan de erfgoed-richtlijnen (natuurleien, klassieke pannen, zink/koper goten). Tijdens de gratis inmeting bespreken we welke materialen toegelaten zijn en helpen we waar nodig met de vergunningsaanvraag.',
  },
  {
    vraag: 'Wij hebben een hoeve in zuidelijk Tongeren (Rutten, Lauw, Vreren) — is dat haalbaar?',
    antwoord:
      'Heel goed haalbaar. Hoeves vormen een aanzienlijk deel van onze opdrachten in zuidelijk Tongeren en de bredere Haspengouwse regio. We hebben dakwerkers met specifieke ervaring in grote oppervlaktes (200-500 m²+), eikenhouten kapconstructies, en gemengde bouwmaterialen tussen hoofdgebouw, schuren en stallen. Vaak werkbaar in fases om de kost te spreiden.',
  },
  {
    vraag: 'Hoe snel kan een dakwerker uit Tongeren langskomen voor een inmeting?',
    antwoord:
      'Bij niet-acute aanvragen meestal binnen 3-7 werkdagen. Bij acute lekkage of stormschade vaak binnen het uur tot 24 uur, afhankelijk van de planning op dat moment. Bel altijd eerst — telefonisch krijg je meteen een inschatting.',
  },
  {
    vraag: 'Krijg ik een lokale dakwerker, of een onderaannemer van buiten Limburg?',
    antwoord:
      'Een lokale dakwerker uit Tongeren of een aangrenzende Limburgse gemeente. We werken expliciet niet met onderaannemers van buiten de provincie — voor erfgoed- en hoevedaken weegt regiokennis extra zwaar.',
  },
  {
    vraag: 'Ik woon in Maastricht of Nederlands-Limburg — kunnen jullie ook daar werken?',
    antwoord:
      'Voor woningen vlakbij de grens (denk aan Eijsden, Maastricht-Zuid, Cadier en Keer): ja, we werken regelmatig over de grens. Btw en factuur worden volgens je woonadres correct opgesteld (Belgisch tarief voor Belgische woningen, Nederlands tarief voor Nederlandse). Vermeld in je aanvraag dat het over een Nederlands adres gaat zodat we de juiste dakwerker en administratie inschakelen.',
  },
  {
    vraag: 'Wat kost dakwerk in Tongeren vs een groot bedrijf van buiten de provincie?',
    antwoord:
      'Lokale dakwerkers in Tongeren zijn meestal 10-25% goedkoper dan grote bedrijven uit Antwerpen of Brussel. Voor erfgoedwerk loopt dat verschil vaak hoger op door de specialisatie. Reden: geen reiskosten ingecalculeerd, lagere overhead, geen tussenpersonen.',
  },
  {
    vraag: 'Wat doen we als jullie offerte hoger is dan een concurrent?',
    antwoord:
      "Stuur ons gerust de andere offerte door. We vergelijken eerlijk: zit er evenveel werk in, zelfde materiaalkwaliteit, zelfde garantievoorwaarden? Vaak zijn 'goedkopere' offertes goedkoper omdat er essentieel werk uit gehaald is (bv. zinkwerk niet vervangen, dampscherm weggelaten, geen 10-jarige aansprakelijkheid). Wij geven dan eerlijk advies — soms is de andere offerte gewoon beter, dan zeggen we dat.",
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://dakwerklimburg.be/tongeren#business',
  name: 'Dakwerk Limburg — Dakwerker in Tongeren',
  image: '/images/dakrenovatie-hero.png',
  description:
    'Erkende lokale dakwerkers in Tongeren en alle deelgemeenten (Berg, Lauw, Rutten, Vreren, Piringen, Henis). Dakrenovatie, plat dak, dakisolatie, goten en stormschade. Specifieke ervaring met Romeins-middeleeuws beschermd erfgoed in centrum en hoeves in zuidelijk Haspengouw. Gratis offerte binnen 24 uur.',
  url: 'https://dakwerklimburg.be/tongeren',
  telephone: '+32456191360',
  email: 'info@dakwerklimburg.be',
  priceRange: '€€',
  areaServed: [
    { '@type': 'City', name: 'Tongeren' },
    { '@type': 'City', name: 'Berg' },
    { '@type': 'City', name: 'Lauw' },
    { '@type': 'City', name: 'Rutten' },
    { '@type': 'City', name: 'Vreren' },
    { '@type': 'City', name: 'Bilzen' },
    { '@type': 'City', name: 'Hoeselt' },
    { '@type': 'City', name: 'Riemst' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tongeren',
    addressRegion: 'Limburg',
    postalCode: '3700',
    addressCountry: 'BE',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dakwerken in Tongeren',
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
      name: 'Werken jullie in heel Tongeren of alleen in het centrum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We werken in heel Tongeren en alle deelgemeenten — Berg, Lauw, Rutten, Vreren, Piringen, Mal, Henis, Sluizen, Nerem, Diets-Heur, 's Herenelderen, Koninksem, Mulken, Neerrepen, Overrepen, Riksingen en Widooie. Ook in de buurgemeenten Bilzen, Hoeselt, Riemst, Borgloon, Heers en Sint-Truiden.",
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn woning ligt in het beschermde centrum van Tongeren — kunnen jullie dat aan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Het beschermde centrum is een belangrijk deel van onze opdrachten in Tongeren. Voor structurele dakwerken op beschermde panden of in beschermd stadsgezicht is een toelating van Onroerend Erfgoed nodig en moeten de materialen voldoen aan de erfgoed-richtlijnen (natuurleien, klassieke pannen, zink/koper goten). Tijdens de gratis inmeting bespreken we welke materialen toegelaten zijn en helpen we waar nodig met de vergunningsaanvraag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wij hebben een hoeve in zuidelijk Tongeren (Rutten, Lauw, Vreren) — is dat haalbaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heel goed haalbaar. Hoeves vormen een aanzienlijk deel van onze opdrachten in zuidelijk Tongeren en de bredere Haspengouwse regio. We hebben dakwerkers met specifieke ervaring in grote oppervlaktes (200-500 m²+), eikenhouten kapconstructies, en gemengde bouwmaterialen tussen hoofdgebouw, schuren en stallen. Vaak werkbaar in fases om de kost te spreiden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel kan een dakwerker uit Tongeren langskomen voor een inmeting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij niet-acute aanvragen meestal binnen 3-7 werkdagen. Bij acute lekkage of stormschade vaak binnen het uur tot 24 uur, afhankelijk van de planning op dat moment. Bel altijd eerst — telefonisch krijg je meteen een inschatting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Krijg ik een lokale dakwerker, of een onderaannemer van buiten Limburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een lokale dakwerker uit Tongeren of een aangrenzende Limburgse gemeente. We werken expliciet niet met onderaannemers van buiten de provincie — voor erfgoed- en hoevedaken weegt regiokennis extra zwaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ik woon in Maastricht of Nederlands-Limburg — kunnen jullie ook daar werken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor woningen vlakbij de grens (Eijsden, Maastricht-Zuid, Cadier en Keer): ja, we werken regelmatig over de grens. Btw en factuur worden volgens je woonadres correct opgesteld (Belgisch tarief voor Belgische woningen, Nederlands tarief voor Nederlandse). Vermeld in je aanvraag dat het over een Nederlands adres gaat zodat we de juiste dakwerker en administratie inschakelen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost dakwerk in Tongeren vs een groot bedrijf van buiten de provincie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lokale dakwerkers in Tongeren zijn meestal 10-25% goedkoper dan grote bedrijven uit Antwerpen of Brussel. Voor erfgoedwerk loopt dat verschil vaak hoger op door de specialisatie. Reden: geen reiskosten ingecalculeerd, lagere overhead, geen tussenpersonen.',
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

export default function TongerenPage() {
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
                Dakwerker in Tongeren — erkend, lokaal, betrouwbaar
              </h1>
              <p className="text-main text-lg leading-relaxed mb-6">
                Op zoek naar een betrouwbare dakwerker in Tongeren? Dakwerk Limburg verbindt je
                met erkende lokale dakwerkers die wonen en werken in Tongeren-centrum, Berg,
                Lauw, Rutten, Vreren, Piringen en alle deelgemeenten. Of het nu gaat om een
                renovatie van een herenhuis aan de Romeinse stadsmuur, een hoevedak in
                zuidelijk Haspengouw, een naoorlogse rijwoning in Henis, of een villa in de
                buurt van de Nederlandse grens — je krijgt iemand met kennis van zaken en
                kennis van de oudste stad van België. Eén aanvraag, gratis inmeting en een
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
                  src="/images/dakrenovatie-hero.png"
                  alt="Erkende dakwerker bezig op een dak in Tongeren"
                  width={800}
                  height={533}
                  loading="eager"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            <div id="offerte-formulier">
              <LeadForm source="tongeren-hero" />
            </div>
          </div>
        </div>
      </section>

      <section id="waarom-lokaal" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Waarom een lokale dakwerker uit Tongeren kiezen?
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
            Tongeren is geen gewone stad: het is de oudste stad van België, met een Romeinse
            stadsmuur uit de 2de eeuw, een middeleeuwse Onze-Lieve-Vrouwebasiliek, en een
            beschermde binnenstad met talloze monumenten en herenhuizen. Daarnaast strekt het
            grondgebied zich uit tot diep in het zuidelijke Haspengouw met klassieke
            vierkantshoeves en akkerbouwbedrijven. Een dakwerker uit Antwerpen of Brussel weet
            niet wat een Romeinse muurzone betekent voor de bouwvergunning, of welke pannen op
            een 17de-eeuws herenhuis horen. Een lokale dakwerker uit Tongeren wel.
          </p>
        </div>
      </section>

      <section id="werkgebied" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10">
            Werkgebied — heel Tongeren en zuidelijk Haspengouw
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Tongeren centrum en deelgemeenten
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
              Voor de kleinere kernen rond Tongeren — denk aan Diets-Heur, &rsquo;s
              Herenelderen, Koninksem, Mulken, Neerrepen, Overrepen, Riksingen of Widooie —
              werken we ook standaard. Geef bij je aanvraag gewoon je gemeente en straat door,
              dan koppelen we je aan een dakwerker die in jouw buurt woont of er regelmatig
              werkt.
            </p>
          </div>
        </div>
      </section>

      <section id="diensten" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Onze dakwerkdiensten in Tongeren
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
            korte beschrijving van je dakprobleem of -plan. Een dakwerker uit Tongeren komt
            gratis langs voor een inmeting en geeft tijdens dat bezoek meteen advies — vaak is
            wat je dacht (bv. &lsquo;volledige renovatie&rsquo;) eigenlijk niet nodig en
            volstaat een gerichte herstelling. Voor erfgoedpanden in het beschermde centrum
            sturen we een dakwerker met specifieke ervaring in monumentenwerk.
          </p>
        </div>
      </section>

      <section id="bouwstijlen" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Typische dakproblemen per bouwstijl in Tongeren
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Het historische centrum — Romeins, middeleeuws en barok erfgoed
            </h3>
            <p className="text-main leading-relaxed mb-4">
              Het historische centrum van Tongeren is uniek in België: Romeinse fundamenten,
              middeleeuwse stadsmuren met torens, een gotisch-romaanse
              Onze-Lieve-Vrouwebasiliek, en honderden beschermde herenhuizen uit de 17de tot
              19de eeuw. Het hele binnenstadsgebied valt onder erfgoed-bescherming of
              beschermd dorpsgezicht. Typische aandachtspunten:
            </p>
            <Bullets items={ERFGOED_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Hoeves en boerderijen in zuidelijk Haspengouw
            </h3>
            <p className="text-main leading-relaxed mb-4">
              Het zuidelijk grondgebied van Tongeren ligt in Haspengouw — fruit- en
              akkerbouwregio met klassieke vierkantshoeves, langgevelhoeves en gesloten
              woonhuizen met aanpalende stallen. Rutten, Lauw, Vreren en de gehuchten errond
              hebben dit profiel. Typische uitdagingen:
            </p>
            <Bullets items={HOEVES_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Naoorlogse verkavelingen — Tongeren-Oost, Henis, Berg
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De naoorlogse verkavelingen rond Tongeren — Tongeren-Oost, Henis, Mal, delen van
              Berg en Piringen — zijn typisch jaren 50-80 woningen. Rijwoningen of half-open
              bebouwing met klassieke pannendaken, lage isolatiestandaard en originele zinken
              bakgoten. Typische problemen:
            </p>
            <Bullets items={NAOORLOG_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Villa-wijken en grensgebied richting Nederlands-Limburg
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De villa-wijken (rondom de Pliniuspark-zone, langs de invalswegen, en in
              deelgemeenten als Vreren, Sluizen en de grensstreek met Nederlands-Limburg)
              hebben een ander profiel: grotere kavels, complexere dakvormen (mansarde,
              walmdaken, dakkapellen), hoogwaardige materialen. Tongeren ligt op 20 km van
              Maastricht — sommige eigenaars zoeken bewust een Belgische dakwerker voor de
              prijs én de korte afstand. Typische uitdagingen:
            </p>
            <Bullets items={VILLA_BULLETS} />
          </div>

          <p className="text-main leading-relaxed">
            Tongeren vraagt een dakwerker die zowel een 200 jaar oud beschermd herenhuis kan
            aanpakken als een vierkantshoeve in Rutten of een nieuwbouw aan de Maastrichtse
            grens. Die combinatie van kennis vind je niet bij een ploeg uit Antwerpen die
            hier voor de eerste keer komt. Een lokale dakwerker uit Tongeren of Haspengouw
            kent de bouwstijlen, de erfgoedregels, de typische Tongerse uitdagingen — en past
            zijn aanpak en offerte daarop aan.
          </p>
        </div>
      </section>

      <section id="prijzen" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Wat kost dakwerk in Tongeren?
          </h2>
          <p className="text-main leading-relaxed mb-8">
            Richtprijzen voor de meest gevraagde dakwerken in Tongeren in 2026. Exacte offertes
            verschillen per woning — bouwstijl, oppervlakte, toegankelijkheid en
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
            Bovenstaande zijn richtprijzen voor woningen. Voor uitgebreide prijsindicaties per
            dienst (inclusief premies, btw-tarief en wat er wel/niet bij hoort), zie onze{' '}
            <Link href="/diensten" className="text-accent font-semibold underline">
              diensten-pagina&apos;s
            </Link>
            . Voor erfgoedpanden, hoeves of grote villa&apos;s geldt een aangepaste
            prijslogica — vermeld type pand en oppervlakte in je aanvraag.
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
            lijst — onafhankelijk van hoe goedkoop hij is. Voor erfgoedpanden: vraag naar
            referenties van eerdere monumentwerken en, indien beschikbaar, een
            toelatingsattest van Onroerend Erfgoed.
          </p>
        </div>
      </section>

      <section id="faq" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
            Veelgestelde vragen — dakwerker in Tongeren
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
                Plan vandaag nog je gratis dakscreening in Tongeren
              </h2>
              <p className="text-main text-lg leading-relaxed mb-6">
                Vul het formulier in met je gemeente in Tongeren of een deelgemeente, type
                werk en korte beschrijving. Of bel rechtstreeks naar{' '}
                <a href="tel:+32456191360" className="text-accent font-bold hover:underline">
                  +32 456 19 13 60
                </a>
                . Een lokale dakwerker uit jouw buurt neemt binnen 24 uur contact op voor een
                gratis en vrijblijvende inmeting. Geen tussenpersonen, geen call center —
                gewoon vakmannen uit Tongeren en omgeving die jouw situatie komen bekijken.
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
              <LeadForm source="tongeren-cta" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
