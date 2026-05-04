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
  'Dakwerker in Maasmechelen — Erkende Lokale Dakwerken in heel Maasmechelen en Maasdorpen';
const DESCRIPTION =
  'Op zoek naar een dakwerker in Maasmechelen? Dakwerk Limburg verbindt je met erkende lokale dakwerkers in Maasmechelen, Eisden, Mechelen-aan-de-Maas, Vucht, Boorsem en omgeving. Specifieke ervaring met de Eisden-Tuinwijk en de Maasdorpen. Gratis offerte binnen 24 uur.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://dakwerklimburg.be/maasmechelen',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: 'https://dakwerklimburg.be/maasmechelen',
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
      'Een dakwerker uit Maasmechelen of een aangrenzende Maaslandse gemeente is vaak binnen de week ter plaatse — bij acute schade zelfs binnen 24 uur.',
  },
  {
    titel: 'Kennis van mijn-cités en Maasdorpen',
    tekst:
      'Van de beschermde Eisden-Tuinwijk tot een Maasdorp met opstijgend vocht — onze dakwerkers kennen het lokale bouwprofiel en passen de aanpak aan.',
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
  { naam: 'Maasmechelen-centrum', postcode: '3630', info: 'winkelhart, mix rijwoningen en appartementen' },
  { naam: 'Eisden / Eisden-Tuinwijk', postcode: '3630', info: 'beschermde mijn-cité 1923-1935, klassieke tuinwijk' },
  { naam: 'Mechelen-aan-de-Maas', postcode: '3630', info: 'Maasdorp, oude rijwoningen langs de Maas, vochtaandacht' },
  { naam: 'Vucht', postcode: '3630', info: 'Maasdorp, dorpse kern, vrijstaand en boerderijen' },
  { naam: 'Boorsem', postcode: '3631', info: 'Maasdorp, klassieke pannendaken, landelijk' },
  { naam: 'Kotem', postcode: '3630', info: 'Maasdorp, mix oud en nieuw, dorpse kern' },
  { naam: 'Leut / Meeswijk', postcode: '3630', info: 'Maasdorpen, vrijstaand en akkerbouw' },
  { naam: 'Opgrimbie / Uikhoven', postcode: '3630', info: 'naoorlogse verkavelingen, jaren 50-80 woningen' },
];

const BUURGEMEENTEN = [
  'Lanaken (3620)',
  'Dilsen-Stokkem (3650)',
  'As (3665)',
  'Genk (3600)',
  'Bilzen (3740)',
  'Riemst (3770)',
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

const EISDEN_BULLETS = [
  'Originele houten kapconstructie van bijna een eeuw oud — lokaal aangetast door insecten of vocht. Restauratie boven vervanging waar mogelijk, met behoud van originele elementen.',
  'Pannen die niet meer in productie zijn — vervanging vraagt zoeken naar tweedehands of erfgoed-replicaten. Een lokale dakwerker kent de bronnen en aannemers die hier al jaren mee werken.',
  'Vergunningsplicht — voor structurele dakwerken in beschermd dorpsgezicht is een toelating Onroerend Erfgoed nodig. Reken op extra weken in de planning.',
  'Originele zinken bakgoten of koperen detailwerk — vervangen met identieke materialen om het beschermde karakter te behouden, geen synthetische alternatieven.',
];
const MAASDORPEN_BULLETS = [
  'Vochtproblemen die op het dak lijken maar van onderaf komen — opstijgend vocht, zandgrond, hoge grondwaterstand. Een lokale dakwerker kent het verschil en stuurt je niet naar onnodig dakwerk.',
  'Versterkte dakconstructie tegen overstromings-windbelasting — bij grote weersomslagen langs de Maas worden daken zwaarder belast dan in het binnenland.',
  'Originele zinken goten met afvoer naar de Maas — bij vele woningen meer dan 50 jaar oud, vervanging is een normale onderhoudscyclus.',
  'Verzekeringscombinatie — bij Maasdorp-woningen is overstromingsrisico vaak apart verzekerd. Bij stormschade of waterintrede kan dit het beste-route bepalen voor herstel.',
];
const NAOORLOG_BULLETS = [
  'Onvoldoende of geen dakisolatie — Mijn VerbouwPremie kan hier vaak ingezet worden (R-waarde 4,5 minimum).',
  'Verouderde zinken bakgoten met verborgen lekkage — gevelschade vaak al opgetreden.',
  'Pannen die los of poreus geworden zijn na 50-70 jaar — gerichte herstelling vaak voldoende, soms is volledige hernieuwing met meteen isolatie de beste optie.',
  'Soms asbest-eternit op tuinhuizen, garages of bijbouwen — verwijdering door erkende asbestverwijderaar, asbestpremie via OVAM.',
];
const VILLA_BULLETS = [
  "Onderhoud van natuurleien op moderne villa's — vraagt een gespecialiseerde dakwerker.",
  'Complex zinkwerk rond dakkapellen en kepers — foutgevoelige zones.',
  'Hogere kostprijs door grote oppervlakte — dus meer reden voor 2-3 vergelijkbare offertes.',
  'Klanten uit Maastricht of Geleen-omgeving — we werken regelmatig over de grens, factuur en btw correct opgesteld volgens woonplaats.',
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
      'Vul het formulier in met je naam, gemeente, type werk en korte beschrijving. Vermeld of het over een Eisden-Tuinwijk-woning of Maasdorp gaat — dat helpt ons de juiste dakwerker te kiezen. Of bel rechtstreeks +32 456 19 13 60.',
  },
  {
    nummer: 2,
    titel: 'Contact binnen 24 uur',
    tekst:
      'Een lokale dakwerker uit Maasmechelen of een aangrenzende gemeente neemt rechtstreeks contact op. Voor erfgoedwoningen sturen we een dakwerker met monumentenervaring.',
  },
  {
    nummer: 3,
    titel: 'Gratis inmeting ter plaatse',
    tekst:
      'De dakwerker komt langs (gratis en vrijblijvend), beoordeelt de situatie, geeft eerlijk advies en bespreekt de opties. Voor Maasdorp-woningen kijken we ook of vochtproblemen écht dak-gerelateerd zijn of niet.',
  },
  {
    nummer: 4,
    titel: 'Schriftelijke offerte',
    tekst:
      'Binnen 1-3 werkdagen een gedetailleerde offerte: materiaal, oppervlakte, premies (Mijn VerbouwPremie, asbestpremie), planning. Geen verborgen meerwerken.',
  },
  {
    nummer: 5,
    titel: 'Uitvoering + garantie',
    tekst:
      "Na akkoord: startdatum afgesproken. 10-jarige wettelijke aansprakelijkheid op uitvoering, fabrieksgarantie op materialen. Voor erfgoedwerk: uitvoeringsfoto's voor het erfgoeddossier.",
  },
];

const ERKENNING_KAARTEN = [
  {
    titel: 'Erkende vakmannen',
    tekst:
      'Onze dakwerkers in Maasmechelen zijn erkend (Bouwunie, Confederatie Bouw of gelijkwaardig), btw-plichtig en hebben een geldige beroepsverzekering. Geen losse uitvoerders, geen zwartwerk.',
  },
  {
    titel: '10-jarige aansprakelijkheid',
    tekst:
      'Bij elke uitvoering krijg je de wettelijke 10-jarige aansprakelijkheid van de aannemer (Wet Breyne) — verplicht voor structurele dakwerken.',
  },
  {
    titel: 'Eerlijke offerte',
    tekst:
      'De inmeting is gratis en vrijblijvend. De offerte is schriftelijk, gedetailleerd en bindend.',
  },
];

const FAQ_DATA = [
  {
    vraag: 'Werken jullie in heel Maasmechelen of alleen in het centrum?',
    antwoord:
      'We werken in heel Maasmechelen en alle deelgemeenten — Eisden, Mechelen-aan-de-Maas, Vucht, Boorsem, Kotem, Leut, Meeswijk, Opgrimbie en Uikhoven. Ook in de buurgemeenten Lanaken, Dilsen-Stokkem, As, Genk, Bilzen en Riemst.',
  },
  {
    vraag: 'Mijn woning staat in de Eisden-Tuinwijk — hebben jullie ervaring met die typologie?',
    antwoord:
      'Ja. De Eisden-Tuinwijk is beschermd erfgoed (Engelse tuinwijk-stijl, gebouwd 1923-1935 door de mijnmaatschappij Limburg-Maas). Onze dakwerkers werken regelmatig op deze woningen en weten welke pannen, welk zinkwerk en welke aanpak past. Voor structurele dakwerken in beschermd dorpsgezicht is een toelating Onroerend Erfgoed nodig — we helpen met de vergunningsaanvraag.',
  },
  {
    vraag: 'Mijn woning staat in een Maasdorp en heeft vochtproblemen — is het zeker een dakprobleem?',
    antwoord:
      'Niet zeker. In de Maasdorpen (Mechelen-aan-de-Maas, Vucht, Boorsem, Kotem) is opstijgend vocht door zandgrond en hoge grondwaterstand een vaak voorkomend probleem dat NIET met dakwerken op te lossen is. Een lokale dakwerker uit de regio kent het verschil en zal je tijdens de gratis inmeting eerlijk zeggen of het echt om een dak gaat of dat je beter een vocht-specialist of architect contacteert. Geen onnodig dakwerk.',
  },
  {
    vraag: 'Mijn dak / tuinhuis lijkt asbestlei te zijn — kunnen jullie dat verwijderen?',
    antwoord:
      'Asbestverwijdering moet door een erkende asbestverwijderaar gebeuren — geen gewone dakwerker. We coördineren het volledige traject: verwijdering door een erkende firma, nieuw dak, eventueel isolatie, en de aanvraag van de asbestpremie en Mijn VerbouwPremie. Tijdens de gratis inmeting bekijken we eerst of het werkelijk asbest is.',
  },
  {
    vraag: 'Hoe snel kan een dakwerker uit Maasmechelen langskomen voor een inmeting?',
    antwoord:
      'Bij niet-acute aanvragen meestal binnen 3-7 werkdagen. Bij acute lekkage of stormschade vaak binnen het uur tot 24 uur. Bel altijd eerst — telefonisch krijg je meteen een inschatting.',
  },
  {
    vraag: 'Krijg ik een lokale dakwerker, of een onderaannemer van buiten Limburg?',
    antwoord:
      'Een lokale dakwerker uit Maasmechelen of een aangrenzende Limburgse gemeente. We werken expliciet niet met onderaannemers van buiten de provincie.',
  },
  {
    vraag: 'Ik woon in Nederlands-Limburg (Geleen, Sittard, Maastricht-omgeving) — kunnen jullie ook daar werken?',
    antwoord:
      'Voor woningen vlakbij de grens: ja. Btw en factuur worden volgens je woonadres correct opgesteld. Vermeld in je aanvraag dat het over een Nederlands adres gaat.',
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
  '@id': 'https://dakwerklimburg.be/maasmechelen#business',
  name: 'Dakwerk Limburg — Dakwerker in Maasmechelen',
  image: 'https://i.postimg.cc/rstDYfLf/dakrenovatie-hero.jpg',
  description:
    'Erkende lokale dakwerkers in Maasmechelen en alle deelgemeenten (Eisden, Mechelen-aan-de-Maas, Vucht, Boorsem, Kotem, Opgrimbie). Specifieke ervaring met de Eisden-Tuinwijk (beschermd erfgoed) en de Maasdorpen langs de Maas. Gratis offerte binnen 24 uur.',
  url: 'https://dakwerklimburg.be/maasmechelen',
  telephone: '+32456191360',
  email: 'info@dakwerklimburg.be',
  priceRange: '€€',
  areaServed: [
    { '@type': 'City', name: 'Maasmechelen' },
    { '@type': 'City', name: 'Eisden' },
    { '@type': 'City', name: 'Mechelen-aan-de-Maas' },
    { '@type': 'City', name: 'Vucht' },
    { '@type': 'City', name: 'Boorsem' },
    { '@type': 'City', name: 'Lanaken' },
    { '@type': 'City', name: 'Dilsen-Stokkem' },
    { '@type': 'City', name: 'Genk' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Maasmechelen',
    addressRegion: 'Limburg',
    postalCode: '3630',
    addressCountry: 'BE',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dakwerken in Maasmechelen',
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
      name: 'Werken jullie in heel Maasmechelen of alleen in het centrum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We werken in heel Maasmechelen en alle deelgemeenten — Eisden, Mechelen-aan-de-Maas, Vucht, Boorsem, Kotem, Leut, Meeswijk, Opgrimbie en Uikhoven. Ook in de buurgemeenten Lanaken, Dilsen-Stokkem, As, Genk, Bilzen en Riemst.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn woning staat in de Eisden-Tuinwijk — hebben jullie ervaring met die typologie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. De Eisden-Tuinwijk is beschermd erfgoed (Engelse tuinwijk-stijl, gebouwd 1923-1935 door de mijnmaatschappij Limburg-Maas). Onze dakwerkers werken regelmatig op deze woningen en weten welke pannen, welk zinkwerk en welke aanpak past. Voor structurele dakwerken in beschermd dorpsgezicht is een toelating Onroerend Erfgoed nodig — we helpen met de vergunningsaanvraag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn woning staat in een Maasdorp en heeft vochtproblemen — is het zeker een dakprobleem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet zeker. In de Maasdorpen (Mechelen-aan-de-Maas, Vucht, Boorsem, Kotem) is opstijgend vocht door zandgrond en hoge grondwaterstand een vaak voorkomend probleem dat NIET met dakwerken op te lossen is. Een lokale dakwerker uit de regio kent het verschil en zal je tijdens de gratis inmeting eerlijk zeggen of het echt om een dak gaat of dat je beter een vocht-specialist of architect contacteert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn dak of tuinhuis lijkt asbestlei te zijn — kunnen jullie dat verwijderen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Asbestverwijdering moet door een erkende asbestverwijderaar gebeuren — geen gewone dakwerker. We coördineren het volledige traject: verwijdering door een erkende firma, nieuw dak, eventueel isolatie, en de aanvraag van de asbestpremie en Mijn VerbouwPremie. Tijdens de gratis inmeting bekijken we eerst of het werkelijk asbest is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel kan een dakwerker uit Maasmechelen langskomen voor een inmeting?',
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
        text: 'Een lokale dakwerker uit Maasmechelen of een aangrenzende Limburgse gemeente. We werken expliciet niet met onderaannemers van buiten de provincie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ik woon in Nederlands-Limburg — kunnen jullie ook daar werken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor woningen vlakbij de grens (Geleen, Sittard, Maastricht-omgeving): ja. Btw en factuur worden volgens je woonadres correct opgesteld. Vermeld in je aanvraag dat het over een Nederlands adres gaat.',
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

export default function MaasmechelenPage() {
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
                Dakwerker in Maasmechelen — erkend, lokaal, betrouwbaar
              </h1>
              <p className="text-main text-lg leading-relaxed mb-6">
                Op zoek naar een betrouwbare dakwerker in Maasmechelen? Dakwerk Limburg
                verbindt je met erkende lokale dakwerkers die wonen en werken in
                Maasmechelen-centrum, Eisden, Mechelen-aan-de-Maas, Vucht, Boorsem, Kotem,
                Leut en alle deelgemeenten van de Maasvallei. Of het nu gaat om een
                erfgoedwoning in de Eisden-Tuinwijk, een Maasdorpwoning met vochtproblemen
                door de rivier, of een naoorlogse verkaveling in Opgrimbie — je krijgt iemand
                met kennis van het Maaslandse bouwprofiel. Eén aanvraag, gratis inmeting en
                een eerlijke offerte binnen 24 uur. Geen call center, geen tussenpersoon.
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
                  alt="Erkende dakwerker bezig op een dak in Maasmechelen"
                  width={800}
                  height={533}
                  loading="eager"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            <div id="offerte-formulier">
              <LeadForm source="maasmechelen-hero" />
            </div>
          </div>
        </div>
      </section>

      <section id="waarom-lokaal" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Waarom een lokale dakwerker uit Maasmechelen kiezen?
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
            Maasmechelen heeft een woningprofiel met twee uitgesproken kenmerken: de tuinwijk
            van Eisden (gebouwd door de mijnmaatschappij Limburg-Maas vanaf 1923, beschermd
            erfgoed) en de Maasdorpen langs de rivier — Mechelen-aan-de-Maas, Vucht, Boorsem,
            Kotem — waar overstromingsrisico, vochtproblemen en zandgrond een rol spelen bij
            elke daken-renovatie. Een lokale dakwerker uit Maasmechelen kent dat profiel. Een
            ploeg uit Antwerpen ziet niet dat een lekke gevel in Vucht vaker
            rivier-gerelateerd is dan dak-gerelateerd.
          </p>
        </div>
      </section>

      <section id="werkgebied" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10">
            Werkgebied — heel Maasmechelen en de Maasvallei
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Maasmechelen centrum en deelgemeenten
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
              Voor de kleinere kernen rond Maasmechelen — Mulheim, kleinere zones in Eisden,
              en het buitengebied richting Lanaken of Dilsen-Stokkem — werken we ook
              standaard. Geef bij je aanvraag gewoon je gemeente en straat door, dan koppelen
              we je aan een dakwerker die in jouw buurt woont of er regelmatig werkt.
            </p>
          </div>
        </div>
      </section>

      <section id="diensten" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Onze dakwerkdiensten in Maasmechelen
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
            een korte beschrijving van je dakprobleem of -plan. Een dakwerker uit
            Maasmechelen komt gratis langs voor een inmeting en geeft tijdens dat bezoek
            meteen advies. Voor woningen in de Eisden-Tuinwijk of beschermd dorpsgezicht:
            geef dat aan in je aanvraag, dan sturen we een dakwerker met monumentenervaring.
          </p>
        </div>
      </section>

      <section id="bouwstijlen" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Typische dakproblemen per bouwstijl in Maasmechelen
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              De mijn-cité Eisden-Tuinwijk — beschermd erfgoed
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De Eisden-Tuinwijk (Cité Eisden, opgericht door de mijnmaatschappij
              Limburg-Maas) is gebouwd tussen 1923 en 1935 als woonplaats voor mijnarbeiders
              en bedienden. De wijk is beschermd erfgoed: Engelse tuinwijk-stijl, kleine
              kavels, klassieke pannendaken, decoratieve gevelelementen, vaste
              materiaalkeuze. Typische dakaandachtspunten:
            </p>
            <Bullets items={EISDEN_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              De Maasdorpen — Mechelen-aan-de-Maas, Vucht, Boorsem, Kotem
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De Maasdorpen — Mechelen-aan-de-Maas, Vucht, Boorsem, Kotem, Leut, Meeswijk —
              liggen letterlijk aan de Maas en hebben een uniek bouwprofiel. Klassieke
              Maaslandse architectuur (vaak baksteen met kleinere ramen), zandgrond met
              hogere waterdoorlatendheid, en historisch overstromingsrisico (recent nog
              2021). Wat dat betekent voor je dak en gevel:
            </p>
            <Bullets items={MAASDORPEN_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Naoorlogse verkavelingen — Maasmechelen-centrum, Opgrimbie
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De naoorlogse verkavelingen rond Maasmechelen-centrum, Opgrimbie en Uikhoven
              zijn typisch jaren 50-80 woningen — rijwoningen of half-open bebouwing met
              klassieke pannendaken, lage isolatiestandaard en originele zinken bakgoten.
              Veel mijnarbeiders en bedienden van de mijn Limburg-Maas hebben hier gewoond.
              Typische problemen:
            </p>
            <Bullets items={NAOORLOG_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Villa-wijken en grensligging met Nederlands-Limburg
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De villa-wijken (zones rond het centrum, langs de Rijksweg, en in
              Opgrimbie/Uikhoven) en de grensligging met Nederlands-Limburg geven
              Maasmechelen een ander dakprofiel. Maasmechelen ligt op 5 km van de
              Nederlandse grens — sommige eigenaars zoeken bewust een Belgische dakwerker.
              Typische uitdagingen:
            </p>
            <Bullets items={VILLA_BULLETS} />
          </div>

          <p className="text-main leading-relaxed">
            Maasmechelen vraagt een dakwerker die zowel met een 100 jaar oude tuinwijk-woning
            kan werken als met een Maasdorp waar vocht van onderaf komt, en daarnaast een
            naoorlogse rijwoning in Opgrimbie professioneel kan renoveren. Die kennis van
            regio + bouwstijl komt enkel van iemand die hier woont en werkt.
          </p>
        </div>
      </section>

      <section id="prijzen" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Wat kost dakwerk in Maasmechelen?
          </h2>
          <p className="text-main leading-relaxed mb-8">
            Richtprijzen voor de meest gevraagde dakwerken in Maasmechelen in 2026. Exacte
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
            Bovenstaande zijn richtprijzen voor woningen. Voor erfgoedwerk in de
            Eisden-Tuinwijk, Maasdorp-renovaties met vocht-aanpak of grensoverschrijdende
            dossiers, geldt een aangepaste prijslogica. Vermeld type pand, oppervlakte en
            eventuele specifieke aandachtspunten in je aanvraag. Meer detail op onze{' '}
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
            Eisden-Tuinwijk en andere erfgoedwoningen: vraag naar referenties van eerdere
            monumentwerken. Voor asbestverwijdering: controleer ook de erkenning via OVAM.
          </p>
        </div>
      </section>

      <section id="faq" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
            Veelgestelde vragen — dakwerker in Maasmechelen
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
                Plan vandaag nog je gratis dakscreening in Maasmechelen
              </h2>
              <p className="text-main text-lg leading-relaxed mb-6">
                Vul het formulier in met je gemeente in Maasmechelen of een Maasdorp, type
                werk en korte beschrijving. Of bel rechtstreeks naar{' '}
                <a href="tel:+32456191360" className="text-accent font-bold hover:underline">
                  +32 456 19 13 60
                </a>
                . Een lokale dakwerker uit jouw buurt neemt binnen 24 uur contact op voor een
                gratis en vrijblijvende inmeting. Geen tussenpersonen, geen call center.
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
              <LeadForm source="maasmechelen-cta" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
