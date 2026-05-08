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
  'Dakwerker in Genk — Erkende Lokale Dakwerken in heel Genk en Deelgemeenten';
const DESCRIPTION =
  'Op zoek naar een dakwerker in Genk? Dakwerk Limburg verbindt je met erkende lokale dakwerkers in Genk-centrum, Waterschei, Winterslag, Zwartberg, Sledderlo en omgeving. Gratis offerte binnen 24 uur.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://dakwerklimburg.be/genk',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: 'https://dakwerklimburg.be/genk',
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
      'Een dakwerker uit Genk of een aangrenzende gemeente is vaak binnen de week ter plaatse voor een inmeting — bij acute schade zelfs binnen 24 uur.',
  },
  {
    titel: 'Kennis van de Genkse woningvoorraad',
    tekst:
      'Mijn-cités in Waterschei, jaren 60-verkavelingen in Sledderlo, villa\u2019s in Bret — onze dakwerkers kennen elke typologie en haar specifieke aanpak.',
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
  { naam: 'Genk-centrum', postcode: '3600', info: 'winkelhart, mix van rijwoningen en appartementen' },
  { naam: 'Waterschei', postcode: '3600', info: 'oude mijn-cité, tuinwijk-stijl, woningen 1910-1930' },
  { naam: 'Winterslag', postcode: '3600', info: 'oude mijn-cité, klassieke pannendaken op kleine kavels' },
  { naam: 'Zwartberg', postcode: '3600', info: 'ex-mijngemeente, mix oude cité-woningen en jaren 60-70 bouw' },
  { naam: 'Sledderlo', postcode: '3600', info: 'naoorlogse sociale wijk, jaren 50-70, veel rijwoningen' },
  { naam: 'Bret / Kattevennen', postcode: '3600', info: 'villa-wijken, vrijstaande woningen, grotere percelen' },
  { naam: 'Genk-Zuid', postcode: '3600', info: 'modernere nieuwbouw, vaak met platte daken of mengvormen' },
  { naam: 'Bokrijk / Termien', postcode: '3600', info: 'landelijker, vrijstaand, oudere boerderij-typologie' },
];

const BUURGEMEENTEN = [
  'Zutendaal (3690)',
  'As (3665)',
  'Houthalen-Helchteren (3530)',
  'Diepenbeek (3590)',
  'Bilzen (3740)',
  'Hasselt (3500)',
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

const MIJNCITES_BULLETS = [
  'Originele houten kapconstructie die na 100 jaar lokaal verzwakt is — extra kapconstructie-versterking nodig bij grotere renovaties',
  "Oorspronkelijke pannen die niet meer geproduceerd worden — vraagt zoeken naar tweedehands of identieke replica's, wat een lokale dakwerker doorgaans wel kan",
  'Verouderd zinkwerk in goten en aansluitingen — bij vele cité-woningen meer dan 50 jaar oud',
  'Beperkte werkruimte door smalle straten en aaneengesloten bouw — een ploeg van buiten de regio onderschat dit vaak',
];
const ASBEST_BULLETS = [
  'Asbestverwijdering MOET door een erkende asbestverwijderaar gebeuren — dit is geen werk dat een gewone dakwerker mag uitvoeren',
  'De asbestpremie van Mijn VerbouwPremie kan oplopen tot 50% van de verwijderingskosten (afhankelijk van inkomen)',
  'Een lokale dakwerker uit Genk kent erkende asbestverwijderaars in de regio en kan het volledige traject coördineren: verwijdering + nieuw dak + isolatie + premies',
  'Als je twijfelt of je dak asbest bevat: vraag tijdens de gratis inmeting een asbestcheck — dit kan vaak visueel + via een laboanalyse',
];
const NAOORLOG_BULLETS = [
  'Onvoldoende of geen dakisolatie — Mijn VerbouwPremie kan hier vaak ingezet worden (R-waarde 4,5 minimum)',
  'Verouderde zinken bakgoten met verborgen lekkage — gevelschade is dan vaak al opgetreden',
  'Pannen die los zitten of poreus geworden zijn na 50-60 jaar — verschuivingen door storm',
  'Oude dakkapellen met versleten zinkwerk en lekkende afdichtingen rond ramen',
];
const VILLA_BULLETS = [
  'Onderhoud van natuurleien — meestal niet zelf-vervangbaar, vraagt een gespecialiseerde dakwerker',
  'Complex zinkwerk rond dakkapellen en kepers — foutgevoelige zones',
  'Hogere kostprijs door grote oppervlakte — dus meer reden voor 2-3 vergelijkbare offertes',
  'Esthetiek mag NIET verloren gaan — moderne pannen op een klassieke villa is geen oplossing',
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
      'Een lokale dakwerker uit Genk of een aangrenzende gemeente neemt rechtstreeks contact op om een afspraak in te plannen. Geen call center, geen tussenpersoon.',
  },
  {
    nummer: 3,
    titel: 'Gratis inmeting ter plaatse',
    tekst:
      'De dakwerker komt langs (gratis en vrijblijvend), beoordeelt de situatie, geeft eerlijk advies — soms is wat je dacht nodig is niet nodig — en bespreekt de opties. Inclusief asbestcheck als dat van toepassing is.',
  },
  {
    nummer: 4,
    titel: 'Schriftelijke offerte',
    tekst:
      'Binnen 1-3 werkdagen ontvang je een gedetailleerde offerte: materiaal, oppervlakte, eventuele premies (Mijn VerbouwPremie, asbestpremie), planning. Geen verborgen meerwerken achteraf.',
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
      'Onze dakwerkers in Genk zijn erkend (Bouwunie, Confederatie Bouw of gelijkwaardig), btw-plichtig en hebben een geldige beroepsverzekering. Geen losse uitvoerders, geen zwartwerk.',
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
    vraag: 'Werken jullie in heel Genk of alleen in het centrum?',
    antwoord:
      'We werken in heel Genk en alle deelgemeenten — Waterschei, Winterslag, Zwartberg, Sledderlo, Bret, Kattevennen, Genk-Zuid, Bokrijk, Termien, Boxbergheide, Hoevenzavel en Langerlo. Ook in de buurgemeenten Zutendaal, As, Houthalen-Helchteren, Diepenbeek, Bilzen en Hasselt.',
  },
  {
    vraag: 'Mijn woning staat in een mijn-cité (Waterschei of Winterslag) — hebben jullie ervaring met dat type woning?',
    antwoord:
      'Ja. De cité-woningen uit 1910-1930 hebben een specifiek profiel: kleine kavels, originele houten kapconstructie, vaak decoratieve elementen, soms erfgoedgevoelig. Onze dakwerkers in Genk werken regelmatig op deze woningen en weten welke pannen, welk zinkwerk en welke aanpak past. Voor beschermde of monumentaal-gevoelige woningen werken we met een aangepaste werkwijze en bekijken we vooraf de stedenbouwkundige vergunningsplicht.',
  },
  {
    vraag: 'Mijn dak (of tuinhuis) lijkt asbestlei te zijn — kunnen jullie dat verwijderen?',
    antwoord:
      'Asbestverwijdering moet door een erkende asbestverwijderaar gebeuren — geen gewone dakwerker. We verwijzen je gratis door naar een erkende asbestverwijderaar in de regio en coördineren het volledige traject: verwijdering, nieuw dak, isolatie, en de aanvraag van de asbestpremie en Mijn VerbouwPremie. Tijdens de gratis inmeting bekijken we eerst of je dak echt asbest bevat (visueel + indien nodig labotest).',
  },
  {
    vraag: 'Hoe snel kan een dakwerker uit Genk langskomen voor een inmeting?',
    antwoord:
      'Bij niet-acute aanvragen meestal binnen 3-7 werkdagen. Bij acute lekkage of stormschade vaak binnen het uur tot 24 uur, afhankelijk van de planning op dat moment. Bel altijd eerst — telefonisch krijg je meteen een inschatting.',
  },
  {
    vraag: 'Krijg ik een lokale dakwerker, of een onderaannemer van buiten Limburg?',
    antwoord:
      'Een lokale dakwerker uit Genk of een aangrenzende Limburgse gemeente. We werken expliciet niet met onderaannemers van buiten de provincie — dat is heel het punt van Dakwerk Limburg: lokale verbinding, lokale verantwoordelijkheid, lokale opvolging.',
  },
  {
    vraag: 'Wat kost een dakwerker in Genk vs een groot bedrijf van buiten de provincie?',
    antwoord:
      'Lokale dakwerkers in Genk zijn meestal 10-25% goedkoper dan grote bedrijven uit Antwerpen of Brussel. Reden: geen reiskosten ingecalculeerd, lagere overhead, geen tussenpersonen. Belangrijker nog: bij problemen of nazorg ben je sneller geholpen door iemand uit de regio.',
  },
  {
    vraag: 'Wij willen dakisolatie laten plaatsen op een jaren-60-woning in Sledderlo — kom ik in aanmerking voor Mijn VerbouwPremie?',
    antwoord:
      "Heel waarschijnlijk wel. Voor dakisolatie is je woning ouder dan 15 jaar (Sledderlo-bouw is volop jaren 50-70) en moet de R-waarde minstens 4,5 zijn. De premie kan oplopen tot enkele duizenden euro's afhankelijk van je gezinsinkomen. Een lokale dakwerker helpt je gratis met de aanvraag — zie ook /diensten/dakisolatie voor uitgebreide info.",
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
  '@id': 'https://dakwerklimburg.be/genk#business',
  name: 'Dakwerk Limburg — Dakwerker in Genk',
  image: '/images/dakrenovatie-hero.png',
  description:
    'Erkende lokale dakwerkers in Genk en alle deelgemeenten (Waterschei, Winterslag, Zwartberg, Sledderlo, Bret, Kattevennen, Genk-Zuid). Dakrenovatie, plat dak, dakisolatie, goten en stormschade. Specifieke ervaring met mijn-cités en asbestlei-vervanging. Gratis offerte binnen 24 uur.',
  url: 'https://dakwerklimburg.be/genk',
  telephone: '+32456191360',
  email: 'info@dakwerklimburg.be',
  priceRange: '€€',
  areaServed: [
    { '@type': 'City', name: 'Genk' },
    { '@type': 'City', name: 'Waterschei' },
    { '@type': 'City', name: 'Winterslag' },
    { '@type': 'City', name: 'Zwartberg' },
    { '@type': 'City', name: 'Sledderlo' },
    { '@type': 'City', name: 'Zutendaal' },
    { '@type': 'City', name: 'As' },
    { '@type': 'City', name: 'Houthalen-Helchteren' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Genk',
    addressRegion: 'Limburg',
    postalCode: '3600',
    addressCountry: 'BE',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dakwerken in Genk',
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

export default function GenkPage() {
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
                Dakwerker in Genk — erkend, lokaal, betrouwbaar
              </h1>
              <p className="text-main text-lg leading-relaxed mb-6">
                Op zoek naar een betrouwbare dakwerker in Genk? Dakwerk Limburg verbindt je met
                erkende lokale dakwerkers die wonen en werken in Genk-centrum, Waterschei,
                Winterslag, Zwartberg, Sledderlo en alle deelgemeenten. Of het nu gaat om
                dakrenovatie van een mijn-cité-woning in Waterschei, een plat dak op een
                nieuwbouw in Genk-Zuid, of een dakisolatie op een jaren-60-verkaveling in
                Kolderbos — je krijgt iemand met kennis van de Genkse woningvoorraad. Eén
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
                  src="/images/dakrenovatie-hero.png"
                  alt="Erkende dakwerker bezig op een dak in Genk"
                  width={800}
                  height={533}
                  loading="eager"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            <div id="offerte-formulier">
              <LeadForm source="genk-hero" />
            </div>
          </div>
        </div>
      </section>

      <section id="waarom-lokaal" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Waarom een lokale dakwerker uit Genk kiezen?
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
            Genk heeft een woningprofiel dat je nergens anders in Vlaanderen tegenkomt:
            tuinwijken van mijnmaatschappijen uit 1910-1930, jaren 50-70 verkavelingen voor
            mijnarbeiders, en moderne villa-wijken in Genk-Zuid en Bret. Een dakwerker die niet
            uit de regio komt, kent dat verschil niet. Een lokale dakwerker uit Genk weet meteen
            welke materialen, welke aanpak en welke premies bij welk type woning horen — en kan
            vaak ook helpen bij asbestlei-vervanging die in Genk relatief vaak voorkomt door
            het mijnverleden.
          </p>
        </div>
      </section>

      <section id="werkgebied" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10">
            Werkgebied — heel Groot-Genk en omgeving
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Genk-centrum en deelgemeenten
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
              Voor de kleinere kernen rond Genk — denk aan Boxbergheide, Hoevenzavel, Langerlo
              of Termien — werken we ook standaard. Geef bij je aanvraag gewoon je gemeente en
              straat door, dan koppelen we je aan een dakwerker die in jouw buurt woont of er
              regelmatig werkt.
            </p>
          </div>
        </div>
      </section>

      <section id="diensten" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Onze dakwerkdiensten in Genk
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
            korte beschrijving van je dakprobleem of -plan. Een dakwerker uit Genk komt gratis
            langs voor een inmeting en geeft tijdens dat bezoek meteen advies — vaak is wat je
            dacht (bv. &lsquo;volledige renovatie&rsquo;) eigenlijk niet nodig en volstaat een
            gerichte herstelling. Eerlijk advies eerst, offerte daarna.
          </p>
        </div>
      </section>

      <section id="bouwstijlen" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Typische dakproblemen per bouwstijl in Genk
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              De mijn-cités — Waterschei, Winterslag, Zwartberg
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De mijn-cités van Waterschei, Winterslag en Zwartberg zijn een uniek
              bouwhistorisch gegeven. Tussen 1910 en 1930 bouwden de steenkoolmijnen (André
              Dumont, Cockerill) tuinwijken voor hun arbeiders en bedienden — herkenbaar aan
              kleine kavels, klassieke pannendaken op houten kapconstructie, vaak met
              decoratieve gevelelementen. Veel van deze woningen zijn nu beschermd of
              erfgoedgevoelig. Typische dakproblemen:
            </p>
            <Bullets items={MIJNCITES_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Asbestlei en golfplaten — een Genkse erfenis
            </h3>
            <p className="text-main leading-relaxed mb-4">
              Door het mijnverleden van Genk komen asbestdaken — typisch eternit-golfplaten en
              asbestleien — relatief vaak voor: op tuinhuizen, garages, oude bijbouwen en soms
              zelfs op hoofdgebouwen van jaren 50-70 woningen. De OVAM-doelstelling is alle
              asbestdaken in Vlaanderen weg te krijgen tegen 2034. Wat je moet weten:
            </p>
            <Bullets items={ASBEST_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Jaren 50–70 verkavelingen — Sledderlo, Kolderbos
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De naoorlogse verkavelingen — Sledderlo, Kolderbos, Boxbergheide — zijn typisch
              jaren 50-70 woningen voor mijnarbeiders en hun gezinnen. Vaak rijwoningen of
              half-open bebouwing met klassieke pannendaken, lage isolatiestandaard en
              originele zinken bakgoten. Typische problemen:
            </p>
            <Bullets items={NAOORLOG_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Villa-wijken — Bret, Kattevennen, Genk-Zuid
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De villa-wijken (Bret, Kattevennen, Genk-Zuid, delen van Bokrijk) hebben grotere
              dakoppervlaktes, complexere dakvormen (mansarde, walmdaken, dakkapellen) en
              hoogwaardige materialen (natuurleien, koperen goten, zinkwerk in detail).
              Typische uitdagingen:
            </p>
            <Bullets items={VILLA_BULLETS} />
          </div>

          <p className="text-main leading-relaxed">
            Een dakwerker die Genk kent, weet welk type woning welke aanpak vraagt. Een
            mijn-cité in Waterschei behandel je niet zoals een jaren-70 verkaveling in
            Sledderlo, en al zeker niet zoals een villa in Bret. Een ploeg uit Antwerpen die
            hier voor de eerste keer komt, ziet enkel &lsquo;een dak&rsquo;. Een lokale
            dakwerker ziet de bouwstijl, het bouwjaar, de typische zwaktepunten — en past zijn
            aanpak en offerte daarop aan.
          </p>
        </div>
      </section>

      <section id="prijzen" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Wat kost dakwerk in Genk?
          </h2>
          <p className="text-main leading-relaxed mb-8">
            Richtprijzen voor de meest gevraagde dakwerken in Genk in 2026. Exacte offertes
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
            Bovenstaande zijn richtprijzen. Voor uitgebreide prijsindicaties per dienst
            (inclusief premies, btw-tarief en wat er wel/niet bij hoort), zie onze{' '}
            <Link href="/diensten" className="text-accent font-semibold underline">
              diensten-pagina&apos;s
            </Link>
            . Een dakwerker uit Genk geeft je tijdens de gratis inmeting een gedetailleerde,
            schriftelijke offerte op maat — met asbestcheck als dat van toepassing is.
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
            onafhankelijk van hoe goedkoop hij is. Bij asbestverwijdering: controleer ook de
            erkenning van de asbestverwijderaar via OVAM.
          </p>
        </div>
      </section>

      <section id="faq" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
            Veelgestelde vragen — dakwerker in Genk
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
                Plan vandaag nog je gratis dakscreening in Genk
              </h2>
              <p className="text-main text-lg leading-relaxed mb-6">
                Vul het formulier in met je gemeente in Genk of een deelgemeente, type werk en
                korte beschrijving. Of bel rechtstreeks naar{' '}
                <a href="tel:+32456191360" className="text-accent font-bold hover:underline">
                  +32 456 19 13 60
                </a>
                . Een lokale dakwerker uit jouw buurt neemt binnen 24 uur contact op voor een
                gratis en vrijblijvende inmeting. Geen tussenpersonen, geen call center — gewoon
                vakmannen uit Genk en omgeving die jouw situatie komen bekijken.
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
              <LeadForm source="genk-cta" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
