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
import ScrollToFormButton from '../dakrenovatie/ScrollToFormButton';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';

const TITLE =
  'Dakgoten en Zinkwerk in Limburg — Vervanging, Herstelling en Nieuwe Installatie';
const DESCRIPTION =
  'Nieuwe dakgoten of zinkwerk in Limburg? Erkende dakwerker, eerlijke prijs en lange garantie. Zink, aluminium of PVC — gratis advies en offerte binnen 24 uur.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://dakwerklimburg.be/diensten/goten-zinkwerk',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: 'https://dakwerklimburg.be/diensten/goten-zinkwerk',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const SIGNALEN = [
  'Roest, gaten of corrosie zichtbaar',
  'Lekkage: water langs de gevel of in spouw',
  'Goot zakt door of staat scheef',
  'Verstoppingen die telkens terugkeren',
  'Goot is ouder dan 30-40 jaar',
];

const HANGGOOT_BULLETS = [
  'Goedkoper dan een ingewerkte bakgoot',
  'Eenvoudig te vervangen of te herstellen — meestal in 1 dag klaar',
  'Beschikbaar in alle materialen (zink, aluminium, PVC, koper)',
];
const BAKGOOT_BULLETS = [
  'Esthetisch superieur — geen zichtbare goot of regenpijp aan de gevel',
  'Duurder en complexer in onderhoud (lekkage zit vaak verborgen)',
  'Vervanging is een grotere ingreep — vaak deel van een dakrenovatie',
];
const HALFROND_BULLETS = [
  'Goedkoopste optie qua profiel',
  'Werkt prima voor woningen met normale regenval-belasting',
  'Esthetisch wat traditioneler — past bij oudere bouwstijlen',
];
const VIERKANT_BULLETS = [
  'Modern en strak uitzicht',
  'Iets duurder dan halfrond bij gelijke materiaalkeuze',
  'Vooral in zink en aluminium',
];

const ZINK_BULLETS = [
  'Levensduur: 30-50 jaar bij correcte plaatsing',
  'Prijs/m: €60 – €100 inclusief plaatsing',
  'Past op bijna elke architectuur, ook gemengd met andere materialen',
  'Onderhoud: minimaal — bladeren ruimen, geen behandeling nodig',
  'Nadeel: gevoelig voor contact met koper, lood of bepaalde dakbedekkingen — moet correct geïsoleerd worden',
];
const ALU_BULLETS = [
  'Levensduur: 30-40 jaar, geen corrosie',
  'Prijs/m: €70 – €110 inclusief plaatsing (lichtjes duurder dan zink)',
  'Beschikbaar in alle kleuren — ideaal voor moderne architectuur',
  'Lichter dan zink — minder druk op gevelhaken',
  'Wordt vaak naadloos geleverd (één lange stuk per gevel) — minder lekkage-risico',
];
const PVC_BULLETS = [
  'Levensduur: 15-25 jaar (verkleurt en wordt bros door UV-straling)',
  'Prijs/m: €25 – €50 inclusief plaatsing — de helft van zink',
  'Eenvoudige montage, ook geschikt voor doe-het-zelvers',
  'Niet geschikt voor lange gevels (uitzetting bij temperatuur-wissels)',
  'Esthetisch zwakker — vergeelt na enkele jaren',
];
const KOPER_BULLETS = [
  'Levensduur: 50-100 jaar — de langste van alle materialen',
  'Prijs/m: €150 – €250 inclusief plaatsing — 2 à 3× zo duur als zink',
  'Esthetisch ongeëvenaard, vooral in combinatie met natuursteen of hout',
  'Vraagt zeer ervaren vakman — fouten in soldering zijn duur om te herstellen',
  'Stelen-gevoelig: koper heeft hoge schrootwaarde, zorg voor goede vastzetting in zichtbare zones',
];

const MATERIALEN = [
  {
    titel: 'Zink — de Belgische standaard',
    intro:
      'Zink is al meer dan een eeuw de Belgische standaard voor dakgoten en zinkwerk. Reden: zink vormt na enkele jaren een natuurlijke beschermlaag (patina) die corrosie tegenhoudt — daardoor gaat een correct geplaatste zinken goot vlot 30 tot 50 jaar mee. Aandachtspunten:',
    bullets: ZINK_BULLETS,
  },
  {
    titel: 'Aluminium — duurzaam alternatief',
    intro:
      'Aluminium is in de laatste 15 jaar sterk in opmars als alternatief voor zink. Lichter, roest niet, en wordt geleverd in elke RAL-kleur (ook antraciet, zwart of bronskleurig). Aandachtspunten:',
    bullets: ALU_BULLETS,
  },
  {
    titel: 'PVC — budgetkeuze',
    intro:
      'De budgetkeuze. PVC-goten zijn goedkoop, lichtgewicht en eenvoudig te plaatsen — maar ze gaan korter mee en zijn esthetisch beduidend minder. Vooral interessant voor bijgebouwen, garages, tuinhuisjes of als tijdelijke oplossing. Aandachtspunten:',
    bullets: PVC_BULLETS,
  },
  {
    titel: 'Koper — premium en uniek',
    intro:
      'Premium materiaal — koper geeft een unieke uitstraling die met de tijd nog mooier wordt (eerst glanzend, dan donkerbruin, uiteindelijk groene patina). Vooral op herenhuizen, kerken, monumenten en hoogwaardige nieuwbouw. Aandachtspunten:',
    bullets: KOPER_BULLETS,
  },
];

const PRIJZEN_HERSTEL = [
  'Klein lek dichten (zink of aluminium): €120 – €280',
  'Goothaak vervangen / fixeren: €80 – €200',
  'Regenpijp herstellen of vervangen (1 stuk): €80 – €250',
  'Verstopping ruimen + uitspoelen: €120 – €250 (per gevel)',
];
const PRIJZEN_VERVANGING = [
  'Zink halfrond hanggoot: €60 – €90 / meter',
  'Aluminium gootsysteem (naadloos): €70 – €100 / meter',
  'PVC goot: €25 – €45 / meter',
  'Koper goot: €150 – €250 / meter',
];
const PRIJZEN_NIEUW = [
  'Volledige nieuwe goot rond een eengezinswoning (±25 m): €1.800 – €3.500',
  'Bakgoot vernieuwen (deel van dakrenovatie): €4.000 – €10.000',
  'Volledig nieuw zinkwerk rond schoorsteen: €350 – €900',
  'Dakranden en boeiboorden in zink: €60 – €110 / meter',
];

const ZINKWERK_KAARTEN = [
  {
    titel: 'Slabben en kepers',
    intro:
      'Slabben en kepers zijn de zinken stroken die de aansluiting tussen het dakvlak en aangrenzende elementen waterdicht maken — bijvoorbeeld waar een dak tegen een muur loopt, of waar twee dakvlakken samenkomen. Foutief geplaatst zinkwerk is een topoorzaak van lekkage. Aandachtspunten:',
    bullets: [
      'Vaak vergeten bij dakrenovatie — controleer expliciet bij offerte',
      'Vervanging of herstelling: €200 – €600 per aansluiting',
      'Levensduur: zelfde als de goot zelf (30-50 jaar) bij correcte plaatsing',
    ],
  },
  {
    titel: 'Schoorsteen-aansluitingen',
    intro:
      "Rond een schoorsteen zit altijd zinkwerk dat het dakvlak rondom dichtmaakt. Dit zijn beruchte lekkage-zones — water dat 'onverklaarbaar' op zolder druppelt komt vaak hier vandaan. Aandachtspunten:",
    bullets: [
      'Vervanging van zinkwerk rond schoorsteen: €350 – €900',
      'Vaak gecombineerd met cement-voegen-renovatie van de schoorsteen zelf',
      'Bij volledige dakrenovatie altijd vernieuwen — niet besparen op deze post',
    ],
  },
  {
    titel: 'Dakranden en gevelafwerking',
    intro:
      'De afwerking aan de zijkanten van het dak (boeiboorden, dakranden, gevelafwerking). Voorkomt waterintrede onder de pannen aan de zijkanten en geeft het dak een afgewerkt uitzicht. Aandachtspunten:',
    bullets: [
      'Zinken dakranden: €60 – €110 / meter',
      'Aluminium dakranden: €50 – €90 / meter',
      'Vaak gecombineerd met goot-vervanging — efficiënter en goedkoper in één werk',
    ],
  },
  {
    titel: 'Bekledingen (boeiboorden, dakkapellen)',
    intro:
      'Boeiboorden, dakkapellen en kleine gevelelementen kunnen volledig in zink afgewerkt worden — strakke uitstraling én onderhoudsvrij. Vooral op moderne nieuwbouw of renovaties met esthetische ambitie. Aandachtspunten:',
    bullets: [
      'Volledig in zink beklede dakkapel: €1.200 – €3.500',
      'Boeiboord in zink: €70 – €130 / meter',
      'Onderhoudsvrij gedurende 30-50 jaar',
    ],
  },
];

const BLADEREN_BULLETS = [
  'Minimaal 1× per jaar bladeren ruimen, in herfst (november)',
  'Bij veel bomen rond de woning: 2× per jaar (lente + herfst)',
  'Bladrooster of beschermingsnet over de goot kan helpen — vraag advies tijdens inmeting',
];
const CONTROLE_BULLETS = [
  'Bij normale woning: elke 2-3 jaar professioneel nazicht (€80 – €180)',
  'Bij oudere woning of veel bomen: jaarlijks',
  'Tip: combineer goot-nazicht met algemeen dak-nazicht — efficiënter en goedkoper',
];
const NIETZELF_BULLETS = [
  'Niet zelf op het dak klimmen — val-risico',
  'Niet zelf zinkwerk dichten met silicone — werkt nooit definitief en maakt latere herstelling moeilijker',
  'Niet zelf goothaken vervangen — moet correct in dakgebinte vastgezet worden',
];

const PROCES_STAPPEN = [
  {
    nummer: 1,
    titel: 'Inmeting + advies',
    tekst:
      'Een lokale dakwerker komt langs voor een gratis en vrijblijvende inmeting. Hij meet de gootlengtes, controleert de bestaande situatie, en bespreekt materiaal-keuzes (zink, aluminium, PVC) op basis van je bouwstijl en budget.',
  },
  {
    nummer: 2,
    titel: 'Schriftelijke offerte',
    tekst:
      'Binnen 1-3 werkdagen ontvang je een gedetailleerde offerte: gootlengte, materiaal, herstellingen aan zinkwerk indien nodig, afvoer oude goten, planning. Geen verborgen meerwerken.',
  },
  {
    nummer: 3,
    titel: 'Planning + bestelling materialen',
    tekst:
      'Standaard materialen (zink, aluminium, PVC) zijn binnen de week beschikbaar. Koper en speciale RAL-kleuren: 2-4 weken levertijd. Concrete startdatum wordt afgesproken.',
  },
  {
    nummer: 4,
    titel: 'Plaatsing',
    tekst:
      'Voor een gemiddelde woning: 1-3 dagen werk. Voor bakgoten en grote nieuwe installaties: 3-7 dagen. We werken proper en ruimen alle oude materialen af.',
  },
  {
    nummer: 5,
    titel: 'Oplevering + garantie',
    tekst:
      'Na afronding krijg je een factuur en garantiebewijs. 10 jaar wettelijke aansprakelijkheid op uitvoering, fabrieksgarantie op materialen. Bij regen kun je meteen testen — alles loopt zoals het hoort.',
  },
];

const LOKAAL_KAARTEN = [
  {
    titel: 'Persoonlijk contact',
    tekst:
      'Je krijgt rechtstreeks contact met de dakwerker die het werk komt uitvoeren — geen call center, geen tussenpersoon. Vragen tijdens de werken? Hij is bereikbaar.',
  },
  {
    titel: 'Eerlijk materiaal-advies',
    tekst:
      'We pushen geen duur materiaal als goedkoop volstaat, en we besparen niet op zinkwerk dat cruciaal is. Je krijgt een eerlijke aanbeveling op basis van je woning en budget.',
  },
  {
    titel: 'Snelle responstijd',
    tekst:
      'Bij lekkende goten of acute problemen krijg je vaak binnen de week een dakwerker langs — niet over 6 weken zoals bij grote bedrijven met overvolle planning.',
  },
  {
    titel: 'Erkenning en garantie',
    tekst:
      'Onze dakwerkers zijn erkend (Bouwunie, Confederatie Bouw of gelijkwaardig), btw-plichtig en geven 10-jarige aansprakelijkheid. Geen losse uitvoerders.',
  },
];

const WERKGEBIED_LINKS = [
  { href: '/hasselt', label: 'Hasselt', omschrijving: 'centrum-gemeenten Hasselt, Diepenbeek, Zonhoven, Alken' },
  { href: '/genk', label: 'Genk', omschrijving: 'Genk, As, Opglabbeek, Zutendaal' },
  { href: '/sint-truiden', label: 'Sint-Truiden', omschrijving: 'Sint-Truiden, Borgloon, Heers, Gingelom' },
  { href: '/tongeren', label: 'Tongeren', omschrijving: 'Tongeren, Riemst, Bilzen-zuid' },
  { href: '/maasmechelen', label: 'Maasmechelen', omschrijving: 'Maasmechelen, Lanaken, Dilsen-Stokkem' },
  { href: '/lommel', label: 'Lommel', omschrijving: 'Lommel, Hechtel-Eksel, Pelt' },
  { href: '/beringen', label: 'Beringen', omschrijving: 'Beringen, Heusden-Zolder, Tessenderlo' },
  { href: '/bilzen', label: 'Bilzen', omschrijving: 'Bilzen, Hoeselt, Kortessem' },
];

const FAQ_DATA = [
  {
    vraag: 'Wat is het verschil tussen zink en aluminium voor dakgoten?',
    antwoord:
      'Zink is de Belgische standaard al meer dan 100 jaar — vormt een natuurlijke patina die corrosie tegenhoudt en gaat 30-50 jaar mee. Aluminium is moderner, lichter, roest niet, en is verkrijgbaar in alle RAL-kleuren (ook antraciet en zwart). Prijs ligt dicht bij elkaar (€60-100 vs €70-110 per meter). Voor moderne architectuur in een specifieke kleur: aluminium. Voor klassieke woningen of als je de natuurlijke patina-look wilt: zink.',
  },
  {
    vraag: 'Hoe lang gaat een dakgoot mee?',
    antwoord:
      'Hangt af van het materiaal en het onderhoud. Zink: 30-50 jaar bij goed onderhoud. Aluminium: 30-40 jaar, geen corrosie-zorgen. PVC: 15-25 jaar (verkleurt en wordt bros door UV). Koper: 50-100 jaar — de langste levensduur. Onderhoud (1× per jaar bladeren ruimen) verlengt de levensduur aanzienlijk.',
  },
  {
    vraag: 'Kan ik een dakgoot zelf vervangen?',
    antwoord:
      'Theoretisch met PVC ja, in praktijk afgeraden. Goothaken moeten correct in het dakgebinte vastgezet worden, zinkwerk vraagt vaktechniek (solderen, naden, verbindingen), en val-risico vanaf een ladder is reëel. Voor wat het kost om een dakwerker langs te laten komen, is het risico op een verkeerde montage (en dus latere lekkage) niet waard.',
  },
  {
    vraag: 'Hoe vaak moet ik mijn dakgoot laten reinigen?',
    antwoord:
      'Minimaal 1× per jaar in november, na de bladval. Bij veel bomen rond de woning: 2× per jaar (lente + herfst). Een professionele goot-reiniging kost €80-180 per gevel en kan gecombineerd worden met een algemeen dak-nazicht voor een betere prijs.',
  },
  {
    vraag: 'Wat kost een nieuwe dakgoot voor een gemiddelde woning?',
    antwoord:
      'Voor een eengezinswoning met ±25 lopende meter goot: €1.800 – €3.500 voor een complete vervanging in zink of aluminium, inclusief regenpijpen en kleine zinkwerken. Bakgoten zijn duurder (€4.000-10.000) omdat ze in de dakconstructie zitten ingewerkt en vaak deel zijn van een bredere dakrenovatie.',
  },
  {
    vraag: 'Is er een premie voor het vervangen van dakgoten?',
    antwoord:
      'Voor enkel goten en zinkwerk: geen specifieke premie. Wel 6% btw bij renovatie van een woning ouder dan 10 jaar (vraag een renovatie-attest aan je dakwerker). Als de gootvervanging deel uitmaakt van een dakrenovatie met isolatie, kan Mijn VerbouwPremie geactiveerd worden voor het isolatie-deel.',
  },
  {
    vraag: 'Mijn dakgoot lekt — herstellen of meteen vervangen?',
    antwoord:
      'Hangt af van de oorzaak en de leeftijd van de goot. Lokaal lek bij een goot van 5-15 jaar oud: herstellen (€120-280). Lekkage bij een goot ouder dan 25-30 jaar of meerdere lekken tegelijk: vervangen wordt meestal voordeliger. Een lokale dakwerker geeft tijdens de inmeting eerlijk advies — wat herstelbaar is, wordt hersteld; wat economisch geen zin meer heeft, wordt vervangen.',
  },
  {
    vraag: 'Wat is het verschil tussen een hanggoot en een bakgoot?',
    antwoord:
      'Een hanggoot hangt aan de buitenkant van het dak via gevelhaken — de meest voorkomende vorm in Limburg. Een bakgoot zit ingewerkt in de dakconstructie zelf en is vanaf de straat onzichtbaar — esthetisch mooier, vaak op klassieke architectuur. Bakgoten zijn duurder, complexer in onderhoud (lekkage zit verborgen) en vervanging is een grotere ingreep. Hanggoten zijn eenvoudiger te vervangen en goedkoper.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Dakgoten en zinkwerk',
  name: 'Dakgoten en zinkwerk in Limburg',
  description:
    'Nieuwe dakgoten, regenpijpen en zinkwerk in Limburg — vervanging, herstelling en nieuwe installatie. Zink, aluminium, PVC of koper. Erkende lokale dakwerkers met 10-jarige aansprakelijkheid en gratis materiaal-advies.',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Limburg, België',
  },
  provider: {
    '@type': 'Organization',
    name: 'Dakwerk Limburg',
    url: 'https://dakwerklimburg.be',
    telephone: '+32456191360',
    email: 'info@dakwerklimburg.be',
  },
  url: 'https://dakwerklimburg.be/diensten/goten-zinkwerk',
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

export default function GotenZinkwerkPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
                Dakgoten en zinkwerk in Limburg — vervanging, herstelling en nieuwe installatie
              </h1>
              <p className="text-main text-lg leading-relaxed mb-6">
                Goten en zinkwerk zijn de onzichtbare helden van je dak. Werken ze goed, dan denk
                je er nooit aan. Werken ze slecht, dan krijg je vochtschade aan je gevel, je
                spouwmuur of zelfs je fundering — schade die soms tienduizenden euro&apos;s kost
                om te herstellen. Dakwerk Limburg verbindt je met erkende lokale dakwerkers voor
                nieuwe dakgoten, zinkwerk rond schoorsteen en dakkapel, regenpijpen en alle
                bijhorende afwerking. Eén aanvraag, gratis inmeting en eerlijk advies over welk
                materiaal het beste past bij jouw woning en budget.
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
                  src="https://i.postimg.cc/1XN8YvZM/goten-kaart.jpg"
                  alt="Nieuwe dakgoot in zink, geplaatst door erkende Limburgse dakwerker"
                  width={800}
                  height={533}
                  loading="eager"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            <div id="offerte-formulier">
              <LeadForm source="goten-zinkwerk-hero" />
            </div>
          </div>
        </div>
      </section>

      <section id="signalen" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Wanneer zijn je dakgoten aan vervanging toe? — 5 signalen
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {SIGNALEN.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent font-bold text-xl flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <p className="text-primary font-semibold leading-snug">{s}</p>
              </div>
            ))}
          </div>
          <p className="text-main leading-relaxed max-w-4xl mx-auto">
            Eén signaal alleen is meestal geen reden tot paniek — een verstopping kan je laten
            ruimen, een kleine lek kan vaak hersteld worden. Maar zodra je 2 of meer van deze
            signalen herkent, ben je beter af met vervanging dan met telkens lapwerk. Een lokale
            dakwerker komt gratis langs voor een eerlijke beoordeling: herstellen wat herstelbaar
            is, vervangen wat economisch geen zin meer heeft.
          </p>
        </div>
      </section>

      <section id="types" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Soorten dakgoten — welke past bij jouw woning?
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">Hanggoot (klassiek)</h3>
            <p className="text-main leading-relaxed mb-4">
              De klassieke goot die je aan de buitenkant van het dak ziet hangen, vastgemaakt aan
              haken aan de gevel of aan de dakrand. Veruit de meest voorkomende vorm in Limburg,
              vooral op rijwoningen, oudere woningen en eengezinswoningen. Aandachtspunten:
            </p>
            <Bullets items={HANGGOOT_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">Bakgoot (ingewerkt)</h3>
            <p className="text-main leading-relaxed mb-4">
              Een goot die in de dakconstructie zelf zit ingewerkt — je ziet ze niet vanaf de
              straatkant. Vooral op klassieke architectuur, herenhuizen en bepaalde nieuwbouw met
              esthetische dakbeëindiging. Aandachtspunten:
            </p>
            <Bullets items={BAKGOOT_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">Halfronde goot</h3>
            <p className="text-main leading-relaxed mb-4">
              Een hanggoot met halfrond profiel — de meest klassieke en goedkoopste vorm. Standaard
              in zink en PVC, ook beschikbaar in aluminium. Aandachtspunten:
            </p>
            <Bullets items={HALFROND_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">Vierkante / kraalgoot</h3>
            <p className="text-main leading-relaxed mb-4">
              Een hanggoot met vierkant of kraalprofiel — moderner uitzicht, vaak op nieuwbouw of
              renovaties met strakke architectuur. Aandachtspunten:
            </p>
            <Bullets items={VIERKANT_BULLETS} />
          </div>

          <p className="text-main leading-relaxed">
            Twijfel je welk type bij jouw woning past? Een lokale dakwerker kijkt tijdens de
            inmeting wat past bij de architectuur, de bestaande dakconstructie en je budget. Vaak
            is de keuze al deels bepaald door wat er nu op het dak zit — een complete switch van
            hanggoot naar bakgoot is bouwkundig zelden zinvol.
          </p>
        </div>
      </section>

      <section id="materialen" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10">
            Welk materiaal kiezen? Zink, aluminium, PVC of koper
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {MATERIALEN.map((m) => (
              <div
                key={m.titel}
                className="bg-white border-2 border-accent/30 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{m.titel}</h3>
                <p className="text-main leading-relaxed mb-4">{m.intro}</p>
                <Bullets items={m.bullets} />
              </div>
            ))}
          </div>
          <p className="text-main leading-relaxed">
            Voor 80% van de Limburgse woningen is zink of aluminium de juiste keuze — beste
            verhouding tussen prijs, levensduur en esthetiek. PVC kies je enkel voor bijgebouwen of
            als tijdelijke oplossing. Koper reserveer je voor architectuur waar je het mooie
            aanzicht wilt accentueren. Een lokale dakwerker geeft je tijdens de inmeting een
            eerlijke aanbeveling op basis van je bouwstijl en budget — niet op basis van wat hij
            toevallig in voorraad heeft.
          </p>
        </div>
      </section>

      <section id="prijzen" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Wat kost een nieuwe dakgoot in Limburg?
          </h2>
          <p className="text-main leading-relaxed mb-10">
            De prijs van dakgoten en zinkwerk hangt af van het gekozen materiaal, de lengte van de
            goot, de hoogte van de woning (stelling nodig of niet) en de complexiteit van het
            zinkwerk. Onderstaande ranges zijn indicatief, btw exclusief, en gebaseerd op recente
            offertes in Limburg in 2026.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { titel: 'Herstelling bestaande goten', items: PRIJZEN_HERSTEL },
              { titel: 'Vervanging bestaande goot (per lopende meter)', items: PRIJZEN_VERVANGING },
              { titel: 'Nieuwe installatie + zinkwerk (per project)', items: PRIJZEN_NIEUW },
            ].map((blok) => (
              <div
                key={blok.titel}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary mb-4">{blok.titel}</h3>
                <ul className="space-y-3">
                  {blok.items.map((item, i) => (
                    <li key={i} className="text-main text-sm leading-relaxed flex gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-main leading-relaxed mb-8">
            Vraag altijd minstens 2 offertes en let op WAT er in de prijs zit: zit de afvoer naar
            het rioleringsstelsel erbij? Worden de oude goten weggevoerd? Is er stelling-huur
            inbegrepen bij hoge gevels? Een lokale dakwerker geeft je een transparante offerte
            zonder verborgen meerwerken achteraf.
          </p>

          <div className="text-center">
            <ScrollToFormButton>Vraag een offerte aan</ScrollToFormButton>
          </div>
        </div>
      </section>

      <section id="zinkwerk" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10">
            Zinkwerk: meer dan alleen goten
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {ZINKWERK_KAARTEN.map((k) => (
              <div
                key={k.titel}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{k.titel}</h3>
                <p className="text-main leading-relaxed mb-4">{k.intro}</p>
                <Bullets items={k.bullets} />
              </div>
            ))}
          </div>
          <p className="text-main leading-relaxed">
            Goed zinkwerk is wat het verschil maakt tussen een dak dat 30 jaar probleemloos meegaat
            en een dak waar je elke 5 jaar lekkage-problemen mee hebt. Bespaar er nooit op — de
            meerprijs voor correct uitgevoerd zinkwerk verdien je meervoudig terug in besparing op
            herstellingen. Vraag tijdens de offerte expliciet welke zinkwerken erbij zitten.
          </p>
        </div>
      </section>

      <section id="onderhoud" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Onderhoud van dakgoten — wat moet je weten
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">Bladeren en vuil verwijderen</h3>
            <p className="text-main leading-relaxed mb-4">
              De grootste vijand van een dakgoot zijn vallende bladeren — vooral als er bomen vlak
              boven het dak hangen. Verstoppingen leiden tot overlopen, vorstschade in de winter
              (bevroren water dat de goot opentrekt) en vochtschade aan de gevel.
            </p>
            <Bullets items={BLADEREN_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">Hoe vaak laten controleren</h3>
            <p className="text-main leading-relaxed mb-4">
              Een professioneel goot-nazicht door een dakwerker is veel meer dan &lsquo;bladeren
              ruimen&rsquo; — er wordt gecontroleerd op haken, zinkwerk, lekkage-tekens,
              doorzakking en waterafvoer.
            </p>
            <Bullets items={CONTROLE_BULLETS} />
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">Wat NOOIT zelf doen</h3>
            <p className="text-main leading-relaxed mb-4">
              Een ladder tegen een goot zetten en zelf bladeren ruimen is een topoorzaak van
              val-ongelukken in en rond woningen. Voor wat het kost om een dakwerker langs te laten
              komen, is het risico het simpelweg niet waard.
            </p>
            <Bullets items={NIETZELF_BULLETS} />
          </div>

          <p className="text-main leading-relaxed">
            Een goed onderhouden goot gaat vlot 40-50 jaar mee. Een verwaarloosde goot is na 15-20
            jaar al rijp voor vervanging — en intussen heb je gevelschade die soms vele duizenden
            euro&apos;s kost. Een jaarlijks of tweejaarlijks nazicht is goedkope verzekering.
          </p>
        </div>
      </section>

      <section id="proces" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Hoe wij goten en zinkwerk uitvoeren — in 5 stappen
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

      <section id="lokaal" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Waarom kiezen voor een lokale Limburgse dakwerker
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {LOKAAL_KAARTEN.map((k) => (
              <div
                key={k.titel}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{k.titel}</h3>
                <p className="text-main leading-relaxed">{k.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="werkgebied" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Werkgebied — heel Limburg
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {WERKGEBIED_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-accent transition-colors"
              >
                <div className="font-bold text-primary mb-1">Dakwerker {l.label}</div>
                <div className="text-sub text-sm">{l.omschrijving}</div>
              </Link>
            ))}
          </div>
          <p className="text-main leading-relaxed">
            Sta je gemeente er niet bij? Geen probleem — we komen overal in Limburg, ook kleinere
            gemeenten zoals Lummen, Halen, Voeren, Bocholt, Kinrooi en Maaseik. Bel of vul het
            formulier in en geef je gemeente door.
          </p>
        </div>
      </section>

      <section id="faq" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
            Veelgestelde vragen over dakgoten en zinkwerk
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

      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-2 text-center">Meer lezen over dakonderhoud</h2>
          <p className="text-sub text-sm text-center mb-6">Handige gidsen over herkennen, herstellen en kosten</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: 'Hoe herken ik een daklek?', href: '/kennis/hoe-herken-je-een-daklek' },
              { label: 'Wanneer dak vervangen?', href: '/kennis/wanneer-dak-vervangen' },
              { label: 'Wat kost een dakrenovatie?', href: '/kennis/kosten-dakrenovatie-limburg' },
            ].map((art) => (
              <Link
                key={art.href}
                href={art.href}
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-accent hover:text-accent text-main text-sm font-medium transition-colors"
              >
                <span className="text-accent flex-shrink-0">→</span>
                {art.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Klaar voor nieuwe goten of zinkwerk? Vraag direct een offerte aan
              </h2>
              <p className="text-main text-lg leading-relaxed mb-6">
                Vul het formulier in of bel direct{' '}
                <a href="tel:+32456191360" className="text-accent font-bold hover:underline">
                  +32 456 19 13 60
                </a>
                . Je krijgt binnen 24 uur contact van een lokale erkende dakwerker uit jouw regio.
                Gratis inmeting, eerlijk advies over materiaal-keuze, schriftelijke offerte zonder
                verrassingen achteraf. Geen tussenpersonen, geen call center — gewoon een vakman
                die jouw situatie komt bekijken.
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
              <LeadForm source="goten-zinkwerk-cta" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
