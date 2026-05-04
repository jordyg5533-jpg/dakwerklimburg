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
  'Dakwerker in Sint-Truiden — Erkende Lokale Dakwerken in heel Sint-Truiden en Deelgemeenten';
const DESCRIPTION =
  'Op zoek naar een dakwerker in Sint-Truiden? Dakwerk Limburg verbindt je met erkende lokale dakwerkers in Sint-Truiden-centrum, Brustem, Velm, Zepperen, Wilderen en omgeving. Ervaring met erfgoed, hoeves en agrarische loodsen. Gratis offerte binnen 24 uur.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://dakwerklimburg.be/sint-truiden',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: 'https://dakwerklimburg.be/sint-truiden',
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
      'Een dakwerker uit Sint-Truiden of een aangrenzende Haspengouwse gemeente is vaak binnen de week ter plaatse voor een inmeting — bij acute schade zelfs binnen 24 uur.',
  },
  {
    titel: 'Kennis van Haspengouw-bouw',
    tekst:
      'Van beschermde herenhuizen in het centrum tot vierkantshoeves in Velm en fruitloodsen in Wilderen — onze dakwerkers kennen elke Truiense typologie.',
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
  { naam: 'Sint-Truiden-centrum', postcode: '3800', info: 'historische binnenstad, beschermd erfgoed, herenhuizen 1800-1900' },
  { naam: 'Brustem', postcode: '3800', info: 'voormalige militaire luchthaven, mix dorpse kern en verkavelingen' },
  { naam: 'Aalst-bij-Sint-Truiden', postcode: '3800', info: 'klassieke dorpskern met fruitboomgaarden eromheen' },
  { naam: 'Velm', postcode: '3806', info: 'fruitstreek, hoeves en boerderijen, klassieke pannendaken' },
  { naam: 'Wilderen', postcode: '3803', info: 'landelijk, brouwerijdorp, grote vrijstaande woningen' },
  { naam: 'Zepperen', postcode: '3800', info: 'historische kerkdorp, oude rijwoningen en hoeves' },
  { naam: 'Schurhoven / Melveren', postcode: '3800', info: 'naoorlogse verkavelingen, jaren 60-80 woningen' },
  { naam: 'Ordingen / Runkelen', postcode: '3800', info: 'landelijke deelgemeenten, vrijstaand en boerderijen' },
];

const BUURGEMEENTEN = [
  'Borgloon (3840)',
  'Gingelom (3890)',
  'Heers (3870)',
  'Nieuwerkerken (3850)',
  'Hasselt (3500)',
  'Alken (3570)',
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

const ERFGOED_BULLETS = [
  'Verplichte materialen — natuurleien, klassieke gebakken pannen, gootbeplating in zink of koper. Moderne pannen of metalen daken zijn vaak niet toegelaten.',
  'Stedenbouwkundige vergunning of toelating Onroerend Erfgoed — voor structurele dakwerken op beschermde panden, vraag dit altijd vooraf na bij de gemeente.',
  'Originele houten kapconstructie van 100-200 jaar oud — lokaal aangetast door insecten, vocht, of voorgaande slechte ingrepen. Vraagt vakmensen die kunnen herstellen, niet enkel vervangen.',
  'Bakgoten ingewerkt in de gevel — typisch voor herenhuizen, vaak verborgen lekkage en gevelschade als gevolg. Reparatie kan ingewikkeld zijn omdat de goot grotendeels in het metselwerk verdwijnt.',
];
const HOEVES_BULLETS = [
  'Grote dakoppervlaktes — een hoevedak is vaak 200-500 m² of meer, wat materiaalkost en planning sterk beïnvloedt. Vraagt een dakwerker die met grote oppervlaktes kan werken zonder dagprijzen op te jagen.',
  'Originele kapconstructie met soms eikenhouten spanten — restaureren in plaats van vervangen is vaak haalbaar én goedkoper, maar vraagt een vakman die het verschil kent.',
  'Mix van bouwmaterialen door eeuwen heen — het hoofdgebouw in pannen, de schuur in golfplaten, een aanbouw in bitumen. Soms moet alles tegelijk aangepakt worden, soms gefaseerd.',
  'Premies en btw-tarief — voor een hoeve waar je woont of die je verhuurt, kan het 6%-btw-tarief gelden bij renovatie van woningen ouder dan 10 jaar (let op: bedrijfsgebouwen vallen hier vaak buiten — vraag het vooraf na).',
];
const LOODSEN_BULLETS = [
  'Asbestlei en eternit-golfplaten op oudere loodsen — verwijdering MOET door een erkende asbestverwijderaar gebeuren. We kunnen het volledige traject coördineren: verwijdering + nieuw dak + isolatie.',
  'Asbestpremie van OVAM en Mijn VerbouwPremie — voor bedrijfsgebouwen gelden andere voorwaarden dan voor woningen, maar er zijn wel degelijk subsidiekanalen voor land- en tuinbouw via VLIF.',
  'Grote oppervlaktes met platte daken — EPDM, staaldakplaten of bitumen-roofing. Materialkeuze hangt sterk af van gebruik (koeling fruitloods? verwarming? open opslag?).',
  'Verzekeringscombinatie — bij loodsen waar fruit, machines of voertuigen liggen, is een lekkende of ingestorte dak een direct verzekeringsthema. Lokale dakwerker = sneller herstel = minder schade.',
];
const NAOORLOG_BULLETS = [
  'Onvoldoende of geen dakisolatie — Mijn VerbouwPremie kan hier vaak ingezet worden (R-waarde 4,5 minimum, premie tot enkele duizenden euro afhankelijk van inkomen).',
  'Verouderde zinken bakgoten met verborgen lekkage — gevelschade vaak al opgetreden. Vervangen door nieuwe zinkwerk is normale onderhoudsinvestering om de 50-60 jaar.',
  'Pannen die los of poreus geworden zijn na 50-70 jaar — gerichte herstelling vaak voldoende, maar bij grote schade is volledige hernieuwing met meteen isolatie de beste optie.',
  'Villa-wijken met natuurleien, koperen goten of complex zinkwerk — vragen ervaren dakwerkers die ook met kwaliteitsmaterialen kunnen werken. 2-3 vergelijkbare offertes is hier standaard.',
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
      'Vul het formulier in met je naam, gemeente, type werk (renovatie, plat dak, isolatie, goten, stormschade — of een agrarische loods/hoeve), en korte beschrijving. Of bel rechtstreeks +32 456 19 13 60.',
  },
  {
    nummer: 2,
    titel: 'Contact binnen 24 uur',
    tekst:
      'Een lokale dakwerker uit Sint-Truiden of een aangrenzende gemeente neemt rechtstreeks contact op om een afspraak in te plannen. Voor agrarische gebouwen sturen we een dakwerker met specifieke ervaring.',
  },
  {
    nummer: 3,
    titel: 'Gratis inmeting ter plaatse',
    tekst:
      'De dakwerker komt langs (gratis en vrijblijvend), beoordeelt de situatie, geeft eerlijk advies — soms is wat je dacht nodig is niet nodig — en bespreekt de opties. Voor erfgoedpanden bekijken we ook de vergunningsplicht.',
  },
  {
    nummer: 4,
    titel: 'Schriftelijke offerte',
    tekst:
      'Binnen 1-3 werkdagen ontvang je een gedetailleerde offerte: materiaal, oppervlakte, eventuele premies (Mijn VerbouwPremie, asbestpremie, VLIF voor land- en tuinbouw), planning. Geen verborgen meerwerken achteraf.',
  },
  {
    nummer: 5,
    titel: 'Uitvoering + garantie',
    tekst:
      'Na akkoord wordt een startdatum afgesproken. Klein werk: vaak binnen de week. Grote renovatie of hoevedak: planning op maat, vaak in fases. 10-jarige wettelijke aansprakelijkheid op uitvoering, fabrieksgarantie op materialen.',
  },
];

const ERKENNING_KAARTEN = [
  {
    titel: 'Erkende vakmannen',
    tekst:
      'Onze dakwerkers in Sint-Truiden zijn erkend (Bouwunie, Confederatie Bouw of gelijkwaardig), btw-plichtig en hebben een geldige beroepsverzekering. Geen losse uitvoerders, geen zwartwerk.',
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
    vraag: 'Werken jullie in heel Sint-Truiden of alleen in het centrum?',
    antwoord:
      'We werken in heel Sint-Truiden en alle deelgemeenten — Brustem, Aalst, Velm, Wilderen, Zepperen, Schurhoven, Melveren, Ordingen, Runkelen, Engelmanshoven, Gelinden, Gorsem, Groot-Gelmen, Halmaal, Kerkom, Kortenbos, Metsteren en Duras. Ook in de buurgemeenten Borgloon, Gingelom, Heers, Nieuwerkerken, Hasselt en Alken.',
  },
  {
    vraag: 'Mijn woning staat in het beschermde centrum van Sint-Truiden — kunnen jullie dat aan?',
    antwoord:
      'Ja. We werken regelmatig op herenhuizen en oude rijwoningen in het Truiense centrum. Belangrijk: voor structurele dakwerken op beschermde panden of in beschermd dorpsgezicht is een stedenbouwkundige vergunning nodig en moeten de materialen voldoen aan de erfgoed-richtlijnen (natuurleien, klassieke pannen, zink of koper voor goten). Tijdens de gratis inmeting bespreken we welke materialen toegelaten zijn en helpen we waar nodig met de vergunningsaanvraag.',
  },
  {
    vraag: 'Wij hebben een hoeve of vierkantshoeve in Haspengouw — is dat haalbaar?',
    antwoord:
      'Heel goed haalbaar. Hoeves en vierkantshoeves vormen een aanzienlijk deel van onze opdrachten in de Sint-Truiden-regio. We hebben dakwerkers met specifieke ervaring in grote dakoppervlaktes (200-500 m²+), originele eikenhouten kapconstructies, en gemengde bouwmaterialen tussen hoofdgebouw en bijgebouwen. Vaak kunnen we werken in fases om de kost te spreiden.',
  },
  {
    vraag: 'Mijn fruitloods of bedrijfsgebouw heeft golfplaten / asbestlei — wat dan?',
    antwoord:
      'Asbestverwijdering moet door een erkende asbestverwijderaar gebeuren — geen gewone dakwerker. We coördineren het volledige traject: verwijdering door een erkende firma, nieuw dak (staaldakplaten, EPDM of pannen afhankelijk van gebruik), eventueel isolatie, en de aanvraag van de asbestpremie en VLIF-subsidie als het over een agrarisch gebouw gaat. Tijdens de gratis inmeting bekijken we eerst of het werkelijk asbest is en welke route het meest zinvol is.',
  },
  {
    vraag: 'Hoe snel kan een dakwerker uit Sint-Truiden langskomen voor een inmeting?',
    antwoord:
      'Bij niet-acute aanvragen meestal binnen 3-7 werkdagen. Bij acute lekkage of stormschade (denk aan een lekke fruitloods in oogstperiode) vaak binnen het uur tot 24 uur, afhankelijk van de planning op dat moment. Bel altijd eerst — telefonisch krijg je meteen een inschatting.',
  },
  {
    vraag: 'Krijg ik een lokale dakwerker, of een onderaannemer van buiten Limburg?',
    antwoord:
      'Een lokale dakwerker uit Sint-Truiden of een aangrenzende Limburgse of Brabantse gemeente. We werken expliciet niet met onderaannemers van buiten de regio — dat is heel het punt van Dakwerk Limburg: lokale verbinding, lokale verantwoordelijkheid, lokale opvolging. Voor erfgoed- en hoevedaken weegt dat extra zwaar, omdat regiokennis hier essentieel is.',
  },
  {
    vraag: 'Wat kost dakwerk in Sint-Truiden vs een groot bedrijf van buiten de provincie?',
    antwoord:
      'Lokale dakwerkers in Sint-Truiden zijn meestal 10-25% goedkoper dan grote bedrijven uit Antwerpen of Brussel. Voor agrarische opdrachten en hoeves loopt dat verschil zelfs hoger op door de schaal van de werken. Reden: geen reiskosten ingecalculeerd, lagere overhead, geen tussenpersonen. Belangrijker nog: bij problemen of nazorg ben je sneller geholpen door iemand uit de regio.',
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
  '@id': 'https://dakwerklimburg.be/sint-truiden#business',
  name: 'Dakwerk Limburg — Dakwerker in Sint-Truiden',
  image: 'https://i.postimg.cc/rstDYfLf/dakrenovatie-hero.jpg',
  description:
    'Erkende lokale dakwerkers in Sint-Truiden en alle deelgemeenten (Brustem, Aalst, Velm, Wilderen, Zepperen, Schurhoven). Dakrenovatie, plat dak, dakisolatie, goten en stormschade. Specifieke ervaring met erfgoed in het centrum, hoeves in Haspengouw en agrarische loodsen. Gratis offerte binnen 24 uur.',
  url: 'https://dakwerklimburg.be/sint-truiden',
  telephone: '+32456191360',
  email: 'info@dakwerklimburg.be',
  priceRange: '€€',
  areaServed: [
    { '@type': 'City', name: 'Sint-Truiden' },
    { '@type': 'City', name: 'Brustem' },
    { '@type': 'City', name: 'Velm' },
    { '@type': 'City', name: 'Wilderen' },
    { '@type': 'City', name: 'Zepperen' },
    { '@type': 'City', name: 'Borgloon' },
    { '@type': 'City', name: 'Gingelom' },
    { '@type': 'City', name: 'Heers' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sint-Truiden',
    addressRegion: 'Limburg',
    postalCode: '3800',
    addressCountry: 'BE',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dakwerken in Sint-Truiden',
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
      name: 'Werken jullie in heel Sint-Truiden of alleen in het centrum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We werken in heel Sint-Truiden en alle deelgemeenten — Brustem, Aalst, Velm, Wilderen, Zepperen, Schurhoven, Melveren, Ordingen, Runkelen, Engelmanshoven, Gelinden, Gorsem, Groot-Gelmen, Halmaal, Kerkom, Kortenbos, Metsteren en Duras. Ook in de buurgemeenten Borgloon, Gingelom, Heers, Nieuwerkerken, Hasselt en Alken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn woning staat in het beschermde centrum van Sint-Truiden — kunnen jullie dat aan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. We werken regelmatig op herenhuizen en oude rijwoningen in het Truiense centrum. Belangrijk: voor structurele dakwerken op beschermde panden of in beschermd dorpsgezicht is een stedenbouwkundige vergunning nodig en moeten de materialen voldoen aan de erfgoed-richtlijnen (natuurleien, klassieke pannen, zink of koper voor goten). Tijdens de gratis inmeting bespreken we welke materialen toegelaten zijn en helpen we waar nodig met de vergunningsaanvraag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wij hebben een hoeve of vierkantshoeve in Haspengouw — is dat haalbaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heel goed haalbaar. Hoeves en vierkantshoeves vormen een aanzienlijk deel van onze opdrachten in de Sint-Truiden-regio. We hebben dakwerkers met specifieke ervaring in grote dakoppervlaktes (200-500 m²+), originele eikenhouten kapconstructies, en gemengde bouwmaterialen tussen hoofdgebouw en bijgebouwen. Vaak kunnen we werken in fases om de kost te spreiden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn fruitloods of bedrijfsgebouw heeft golfplaten of asbestlei — wat dan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Asbestverwijdering moet door een erkende asbestverwijderaar gebeuren — geen gewone dakwerker. We coördineren het volledige traject: verwijdering door een erkende firma, nieuw dak (staaldakplaten, EPDM of pannen afhankelijk van gebruik), eventueel isolatie, en de aanvraag van de asbestpremie en VLIF-subsidie als het over een agrarisch gebouw gaat. Tijdens de gratis inmeting bekijken we eerst of het werkelijk asbest is en welke route het meest zinvol is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel kan een dakwerker uit Sint-Truiden langskomen voor een inmeting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij niet-acute aanvragen meestal binnen 3-7 werkdagen. Bij acute lekkage of stormschade (denk aan een lekke fruitloods in oogstperiode) vaak binnen het uur tot 24 uur, afhankelijk van de planning op dat moment. Bel altijd eerst — telefonisch krijg je meteen een inschatting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Krijg ik een lokale dakwerker, of een onderaannemer van buiten Limburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een lokale dakwerker uit Sint-Truiden of een aangrenzende Limburgse of Brabantse gemeente. We werken expliciet niet met onderaannemers van buiten de regio — dat is heel het punt van Dakwerk Limburg: lokale verbinding, lokale verantwoordelijkheid, lokale opvolging. Voor erfgoed- en hoevedaken weegt dat extra zwaar, omdat regiokennis hier essentieel is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost dakwerk in Sint-Truiden vs een groot bedrijf van buiten de provincie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lokale dakwerkers in Sint-Truiden zijn meestal 10-25% goedkoper dan grote bedrijven uit Antwerpen of Brussel. Voor agrarische opdrachten en hoeves loopt dat verschil zelfs hoger op door de schaal van de werken. Reden: geen reiskosten ingecalculeerd, lagere overhead, geen tussenpersonen. Belangrijker nog: bij problemen of nazorg ben je sneller geholpen door iemand uit de regio.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doen we als jullie offerte hoger is dan een concurrent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Stuur ons gerust de andere offerte door. We vergelijken eerlijk: zit er evenveel werk in, zelfde materiaalkwaliteit, zelfde garantievoorwaarden, zelfde btw-aanslag? Vaak zijn 'goedkopere' offertes goedkoper omdat er essentieel werk uit gehaald is (bv. zinkwerk niet vervangen, dampscherm weggelaten, geen 10-jarige aansprakelijkheid). Wij geven dan eerlijk advies — soms is de andere offerte gewoon beter, dan zeggen we dat.",
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

export default function SintTruidenPage() {
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
                Dakwerker in Sint-Truiden — erkend, lokaal, betrouwbaar
              </h1>
              <p className="text-main text-lg leading-relaxed mb-6">
                Op zoek naar een betrouwbare dakwerker in Sint-Truiden? Dakwerk Limburg verbindt
                je met erkende lokale dakwerkers die wonen en werken in Sint-Truiden-centrum,
                Brustem, Velm, Zepperen, Wilderen, Aalst-bij-Sint-Truiden en alle deelgemeenten
                van Haspengouw. Of het nu gaat om dakrenovatie van een historisch herenhuis in
                het centrum, een hoevedak in de fruitstreek, een loods van een fruitteler in
                Velm, of dakisolatie op een verkaveling in Schurhoven — je krijgt iemand met
                kennis van de Truiense en Haspengouwse bouwtraditie. Eén aanvraag, gratis
                inmeting en een eerlijke offerte binnen 24 uur. Geen call center, geen
                tussenpersoon.
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
                  alt="Erkende dakwerker bezig op een dak in Sint-Truiden"
                  width={800}
                  height={533}
                  loading="eager"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            <div id="offerte-formulier">
              <LeadForm source="sint-truiden-hero" />
            </div>
          </div>
        </div>
      </section>

      <section id="waarom-lokaal" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Waarom een lokale dakwerker uit Sint-Truiden kiezen?
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
            Sint-Truiden is geen doorsnee Limburgse stad: het is de hoofdstad van de Vlaamse
            fruitstreek, met een beschermde middeleeuwse binnenstad, talloze hoeves verspreid
            over Haspengouw, en grote agrarische loodsen voor fruittelers en akkerbouwbedrijven.
            Een dakwerker uit Antwerpen of Brussel ziet hier &lsquo;gewoon daken&rsquo;. Een
            lokale dakwerker uit Sint-Truiden weet wat een vakwerkdak is, hoe een Haspengouwse
            hoeve gebouwd is, welke materialen op een beschermd monument toegelaten zijn, en
            welke premies bij welk type woning of bedrijfsgebouw horen.
          </p>
        </div>
      </section>

      <section id="werkgebied" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10">
            Werkgebied — heel Sint-Truiden en Haspengouw
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Sint-Truiden centrum en deelgemeenten
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
              Voor de kleinere kernen rond Sint-Truiden — denk aan Engelmanshoven, Gelinden,
              Gorsem, Groot-Gelmen, Halmaal, Kerkom, Kortenbos, Metsteren of Duras — werken we
              ook standaard. Geef bij je aanvraag gewoon je gemeente en straat door, dan
              koppelen we je aan een dakwerker die in jouw buurt woont of er regelmatig werkt.
            </p>
          </div>
        </div>
      </section>

      <section id="diensten" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Onze dakwerkdiensten in Sint-Truiden
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
            korte beschrijving van je dakprobleem of -plan. Een dakwerker uit Sint-Truiden komt
            gratis langs voor een inmeting en geeft tijdens dat bezoek meteen advies — vaak is
            wat je dacht (bv. &lsquo;volledige renovatie&rsquo;) eigenlijk niet nodig en
            volstaat een gerichte herstelling. Eerlijk advies eerst, offerte daarna. Voor
            agrarische gebouwen en loodsen: zeg dat erbij in je aanvraag, dan sturen we een
            dakwerker met specifieke ervaring met grote oppervlaktes.
          </p>
        </div>
      </section>

      <section id="bouwstijlen" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Typische dakproblemen per bouwstijl in Sint-Truiden
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Het historische centrum — beschermd erfgoed en oude rijwoningen
            </h3>
            <p className="text-main leading-relaxed mb-4">
              Het historische centrum van Sint-Truiden — Grote Markt, Stapelstraat, Plankstraat,
              omgeving van de abdijtoren — bestaat grotendeels uit beschermde rijwoningen en
              herenhuizen uit de 18de en 19de eeuw, soms met oudere kernen. Veel woningen vallen
              onder erfgoed-bescherming of liggen in een beschermd dorpsgezicht. Typische
              dakproblemen en aandachtspunten:
            </p>
            <Bullets items={ERFGOED_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Hoeves en boerderijen — Haspengouwse fruit- en akkerbouwregio
            </h3>
            <p className="text-main leading-relaxed mb-4">
              Haspengouwse hoeves en boerderijen vormen een eigen typologie: vierkantshoeves
              rond een gesloten erf, langgevelhoeves, gesloten woonhuizen met aanpalende stallen
              en schuren. Vaak grote daken, klassieke pannen of natuurleien, soms gemengd met
              later toegevoegde golfplaten op stallen. Typische uitdagingen:
            </p>
            <Bullets items={HOEVES_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Agrarische loodsen, fruitloodsen en bedrijfsgebouwen
            </h3>
            <p className="text-main leading-relaxed mb-4">
              Voor fruittelers, akkerbouwers en kleine bedrijven in Sint-Truiden zijn loodsen en
              bedrijfsgebouwen de werkruimte. Deze gebouwen hebben vaak grote platte of licht
              hellende daken, vaak in golfplaten (waaronder soms asbest-eternit van vóór 2001),
              bitumen of staaldakplaten. Typische problemen en aandachtspunten:
            </p>
            <Bullets items={LOODSEN_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Naoorlogse verkavelingen en villa-wijken
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De naoorlogse verkavelingen rond Sint-Truiden — Schurhoven, Melveren, delen van
              Brustem en de westelijke uitbreidingen — zijn typisch jaren 50-80 woningen:
              rijwoningen of half-open bebouwing met klassieke pannendaken, lage
              isolatiestandaard en originele zinken bakgoten. De villa-wijken (vaak in Wilderen,
              Brustem of langs de invalswegen) hebben een ander profiel met grotere kavels en
              complexere dakvormen. Typische problemen:
            </p>
            <Bullets items={NAOORLOG_BULLETS} />
          </div>

          <p className="text-main leading-relaxed">
            Sint-Truiden vraagt een dakwerker die zowel met een 200 jaar oud erfgoedpand kan
            werken als met een fruitloods van 800 m² in golfplaten. Die combinatie van vakkennis
            vind je niet bij een ploeg uit Antwerpen die hier voor de eerste keer komt. Een
            lokale dakwerker uit Haspengouw kent de bouwstijlen, de premies, de erfgoed-regels
            én de specificiteit van agrarische gebouwen — en past zijn aanpak en offerte daarop
            aan.
          </p>
        </div>
      </section>

      <section id="prijzen" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Wat kost dakwerk in Sint-Truiden?
          </h2>
          <p className="text-main leading-relaxed mb-8">
            Richtprijzen voor de meest gevraagde dakwerken in Sint-Truiden in 2026. Exacte
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
            Bovenstaande zijn richtprijzen voor woningen. Voor uitgebreide prijsindicaties per
            dienst (inclusief premies, btw-tarief en wat er wel/niet bij hoort), zie onze{' '}
            <Link href="/diensten" className="text-accent font-semibold underline">
              diensten-pagina&apos;s
            </Link>
            . Voor hoeves, agrarische loodsen of grote bedrijfsgebouwen geldt een andere
            prijslogica — geef je type gebouw en oppervlakte aan in je aanvraag, dan krijg je
            een offerte die met die schaal rekening houdt.
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
            onafhankelijk van hoe goedkoop hij is. Voor erfgoedpanden: vraag naar referenties
            van eerdere monumentwerken. Voor asbestverwijdering: controleer ook de erkenning van
            de asbestverwijderaar via OVAM.
          </p>
        </div>
      </section>

      <section id="faq" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
            Veelgestelde vragen — dakwerker in Sint-Truiden
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
                Plan vandaag nog je gratis dakscreening in Sint-Truiden
              </h2>
              <p className="text-main text-lg leading-relaxed mb-6">
                Vul het formulier in met je gemeente in Sint-Truiden of een deelgemeente, type
                werk (woning, hoeve, loods of bedrijfsgebouw) en korte beschrijving. Of bel
                rechtstreeks naar{' '}
                <a href="tel:+32456191360" className="text-accent font-bold hover:underline">
                  +32 456 19 13 60
                </a>
                . Een lokale dakwerker uit jouw buurt neemt binnen 24 uur contact op voor een
                gratis en vrijblijvende inmeting. Geen tussenpersonen, geen call center — gewoon
                vakmannen uit Sint-Truiden en Haspengouw die jouw situatie komen bekijken.
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
              <LeadForm source="sint-truiden-cta" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
