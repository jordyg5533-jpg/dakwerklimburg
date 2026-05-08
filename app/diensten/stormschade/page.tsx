import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, TriangleAlert as AlertTriangle } from 'lucide-react';
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
  'Stormschade Dak in Limburg — Snelle Herstelling, 24/7 Bereikbaar';
const DESCRIPTION =
  'Stormschade aan je dak in Limburg? Erkende dakwerker binnen het uur ter plaatse voor noodherstelling. Hulp bij verzekering en bestek. Bel nu.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://dakwerklimburg.be/diensten/stormschade',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: 'https://dakwerklimburg.be/diensten/stormschade',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const SNELLE_ACTIE = [
  {
    nummer: 1,
    titel: 'Bel onmiddellijk een dakwerker',
    tekst: 'Binnen het uur ter plaatse bij acute stormschade — 24/7 bereikbaar.',
  },
  {
    nummer: 2,
    titel: "Maak foto's van de schade",
    tekst:
      "Foto's vanuit veilige afstand (niet zelf op het dak klimmen) — onmisbaar voor je verzekeraar.",
  },
  {
    nummer: 3,
    titel: 'Beperk de schade tijdelijk',
    tekst:
      'Emmers onder de lekkage, zeil over beschadigde delen, waardevolle spullen in veiligheid brengen.',
  },
  {
    nummer: 4,
    titel: 'Meld bij je verzekering binnen 24-48u',
    tekst:
      'De meeste polissen verplichten aangifte binnen 2 werkdagen. Je dakwerker bezorgt je meteen alle documenten.',
  },
];

const PANNEN_BULLETS = [
  'Klein aantal losse pannen: in 1-2 uur hersteld',
  'Grote oppervlakken pannen weg: tijdelijk afdekken met zeil, daarna geplande herstelling',
  'Antieke of bijzondere pannen: levertijd kan oplopen tot weken — dan eerst tijdelijk afdekken',
];

const ZINKWERK_BULLETS = [
  'Beschadigde dakgoot kan tijdelijk geklemd of gefixeerd worden in afwachting van vervanging',
  'Gebroken regenpijp herstel: 1-2 uur',
  'Volledig nieuwe goot of zinkbekleding: 1-2 dagen, planning op voorhand',
];

const LEKKAGE_BULLETS = [
  'Plaats emmers onder de lekkage en haal waardevolle spullen weg',
  "Maak foto's van vochtplekken op plafond, muren en zolder",
  'Een lokale dakwerker spoort de bron op (vaak niet recht boven de zichtbare lek) en herstelt',
];

const TAKKEN_BULLETS = [
  'Tak NIET zelf verwijderen — dak kan instabiel zijn, val-risico',
  "Maak foto's vanuit veilige afstand voor je verzekeraar",
  'Een dakwerker met de juiste uitrusting verwijdert de tak en stelt de schade vast',
];

const BLIKSEM_BULLETS = [
  'Bij blikseminslag: brand uitsluiten via brandweer eerst, daarna dakwerker en eventueel elektricien',
  'Verzekering vraagt vaak attest van schade-expert — dakwerker kan dit voorbereiden',
  'Zonnepanelen na blikseminslag altijd door installateur laten controleren',
];

const PRIJZEN_KLEIN = [
  'Enkele losgewaaide pannen vervangen: €150 – €350',
  'Kleine lokale lekkage afdichten: €200 – €450',
  'Dakgoot vastzetten of klemmen: €150 – €300',
  'Kleine zinken slab vervangen: €200 – €400',
];

const PRIJZEN_MIDDEL = [
  'Volledige rij pannen vervangen + waterkering controleren: €500 – €1.200',
  'Beschadigde dakgoot vervangen (5-10 m): €600 – €1.500',
  'Tak verwijderen + schade aan dakstructuur herstellen: €400 – €1.500',
  'Tijdelijke afdekking met zeilen voor noodgeval: €200 – €500',
];

const PRIJZEN_GROOT = [
  'Volledig dakdeel vernieuwen na ernstige schade: €3.000 – €15.000',
  'Plat dak deels of volledig vervangen na waterschade: €2.500 – €10.000',
  'Dakstructuur (gebinte) repareren of vervangen: €5.000 – €20.000',
  'Coordinatie met verzekering en schade-expert: vaak inbegrepen',
];

const VERZEKERING_BLOKKEN = [
  {
    titel: 'Wanneer dekt je verzekering stormschade?',
    tekst:
      "De meeste Belgische woningverzekeringen dekken stormschade automatisch onder de waarborg 'Storm, Hagel, Sneeuw- en IJsdruk' (verplicht onderdeel van een brand-polis). Voorwaarde: windsnelheden van minstens 80 km/u (windkracht 9+) of erkende stormwaarschuwing van het KMI. Hagelschade is altijd gedekt, ongeacht de korrelgrootte. Schade door slecht onderhoud van het dak is NIET gedekt — vandaar het belang van regelmatig nazicht.",
  },
  {
    titel: 'Welke documenten heb je nodig?',
    tekst:
      "Voor een vlotte schadeafhandeling verzamel je: foto's van de schade (vóór en na herstelling), datum + tijdstip van de storm, weersbericht of KMI-bevestiging, bestek of factuur van de dakwerker, eventueel video van de schade. Een lokale dakwerker maakt deze foto's standaard tijdens de inspectie en bezorgt ze je met het bestek — perfect voor je verzekering.",
  },
  {
    titel: 'Een schade-expertise — wat is dat?',
    tekst:
      'Bij grotere schadebedragen (vaak vanaf €2.500) stuurt je verzekering een onafhankelijke expert ter plaatse om de schade vast te stellen. Hij vergelijkt jouw bestek met zijn eigen inschatting. Je dakwerker is daarbij aanwezig om technische details toe te lichten — dat verkort de procedure aanzienlijk en voorkomt onenigheid over de oorzaak.',
  },
  {
    titel: 'Hoeveel betaalt de verzekering?',
    tekst:
      'De verzekering vergoedt de herstelkost minus de eigen vrijstelling (meestal €250 – €500, afhankelijk van je polis). Bij een totaal verlies van het dak (zeldzaam) wordt de nieuwwaarde of dagwaarde uitbetaald, afhankelijk van de polisvoorwaarden. Belangrijk: de verzekeraar betaalt vaak rechtstreeks aan de dakwerker als je dat zo afspreekt — je hoeft het bedrag dan niet voor te schieten.',
  },
];

const PROCES_STAPPEN = [
  {
    nummer: 1,
    titel: 'Direct bellen',
    tekst:
      'Bel +32 456 19 13 60 of vul het formulier in. Bij acute stormschade krijg je binnen het uur ter plaatse contact en wordt er meteen een dakwerker uitgestuurd.',
  },
  {
    nummer: 2,
    titel: 'Noodherstelling',
    tekst:
      "De dakwerker beperkt eerst de gevolgschade: gat afdekken met zeil, water afvoeren, dak waterdicht maken. Foto's worden meteen genomen voor je verzekering.",
  },
  {
    nummer: 3,
    titel: 'Bestek + verzekeringshulp',
    tekst:
      'Binnen 24-48 uur krijg je een gedetailleerd bestek voor de definitieve herstelling. We helpen gratis bij de communicatie met je verzekeraar — schade-aangifte, expertise, eventueel rechtstreekse uitbetaling.',
  },
  {
    nummer: 4,
    titel: 'Definitieve herstelling',
    tekst:
      'Zodra de verzekering akkoord is, plannen we de definitieve herstelling in. Kleine herstellingen meestal binnen de week, grote werken op afspraak.',
  },
  {
    nummer: 5,
    titel: 'Oplevering + foto-documentatie',
    tekst:
      'Na afronding krijg je een factuur en foto-documentatie van vóór en na de herstelling. Met deze documenten sluit de verzekering het dossier af. Je hebt 10-jaar garantie op het uitgevoerde werk.',
  },
];

const LOKAAL_KAARTEN = [
  {
    titel: 'Snelle reactietijd',
    tekst:
      'Een dakwerker uit jouw regio is bij acute stormschade vaak binnen het uur ter plaatse. Een groot bedrijf van buiten Limburg plant je in voor over enkele dagen — en in die tijd verergert de gevolgschade exponentieel.',
  },
  {
    titel: 'Foto-documentatie inbegrepen',
    tekst:
      "Onze dakwerkers nemen tijdens de inspectie standaard professionele foto's: vóór de herstelling, tijdens, en erna. Deze foto's zijn cruciaal voor een vlotte verzekeringsafhandeling — geen tijdrovend gedoe achteraf.",
  },
  {
    titel: 'Ervaring met verzekeraars',
    tekst:
      "Lokale dakwerkers behandelen stormschade-dossiers met alle Belgische verzekeraars (AG, P&V, KBC, Belfius, Ethias, AXA, Baloise, ...). Zij weten wat elke verzekeraar verwacht qua bestek, foto's en expertise — wat de uitbetaling versnelt.",
  },
  {
    titel: 'Erkenning en garantie',
    tekst:
      'Onze dakwerkers zijn erkend (Bouwunie, Confederatie Bouw of gelijkwaardig) en geven 10-jarige aansprakelijkheid op de uitgevoerde herstelling — vereiste voor verzekeringsuitbetaling.',
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
    vraag: 'Hoe snel kan een dakwerker bij me zijn bij stormschade?',
    antwoord:
      'Bij acute stormschade (lekkage, gat in het dak, dreigende gevolgschade) zijn onze dakwerkers vaak binnen het uur ter plaatse, 24/7. Bij niet-acute schade (kleine herstelling die wel kan wachten) wordt een afspraak gemaakt voor de eerstvolgende werkdag. Bel altijd eerst — telefonisch krijg je meteen een inschatting.',
  },
  {
    vraag: 'Dekt mijn verzekering stormschade aan mijn dak?',
    antwoord:
      "In 80-90% van de gevallen wel. De waarborg 'Storm, Hagel, Sneeuw- en IJsdruk' is verplicht onderdeel van een Belgische brandpolis en dekt schade door wind vanaf 80 km/u of bij hagel. Schade door slecht dakonderhoud is NIET gedekt — vandaar het belang van regelmatig nazicht. Twijfel je? Bel je verzekeringskantoor of mail je polisvoorwaarden door — wij kijken het mee na.",
  },
  {
    vraag: "Moet ik foto's nemen voor de verzekering?",
    antwoord:
      "Ja, en zo veel mogelijk. Maak foto's van: de externe schade (vanuit een veilige hoek, géén dak op klimmen), eventuele waterschade binnen, plaats en context, en als kan: video van de storm zelf. Onze dakwerkers nemen ook professionele foto's tijdens de inspectie — die voegen we toe aan jouw schade-aangifte.",
  },
  {
    vraag: 'Wat doe ik tot de dakwerker er is?',
    antwoord:
      'Beperk gevolgschade: zet emmers onder lekken, haal waardevolle spullen weg, sluit de stroom af in de getroffen kamer als er water bij elektriciteit komt. Klim NIET zelf op het dak — gevaarlijk en je verzekering kan extra schade door eigen handelen weigeren. Bij dreigend instortingsgevaar: bel de brandweer.',
  },
  {
    vraag: 'Hoeveel kost stormschade-herstelling als ik geen verzekering heb?',
    antwoord:
      'Variabel: kleine herstellingen €150 – €500, middelgrote €500 – €1.500, grote dakwerken na zware storm €3.000 – €20.000. Zonder verzekering is dit volledig voor jouw rekening. Vraag altijd 2-3 offertes en check of je polis (of die van je huurbaas, bij huur) toch dekking biedt — soms ben je beter verzekerd dan je denkt.',
  },
  {
    vraag: 'Wat als de tak van mijn buurman op mijn dak valt?',
    antwoord:
      "Bij overmacht (storm) is je eigen verzekering primair verantwoordelijk — niet de buur. De boom werd niet 'gestuurd', hij viel door wind. Wel: als de boom van de buur duidelijk verwaarloosd was (rot, dood) en hij niet ingegrepen heeft ondanks waarschuwingen, kan zijn aansprakelijkheidsverzekering wel aangesproken worden. Documenteer alles met foto's en bewaar correspondentie.",
  },
  {
    vraag: 'Hoe lang duurt definitieve herstelling na noodherstelling?',
    antwoord:
      'Hangt af van de schade-omvang en levertijd materialen. Standaard pannen: vaak binnen 1-2 weken na akkoord verzekering. Antieke of niet-courante materialen: kunnen 4-8 weken duren — daarom is de tijdelijke noodherstelling cruciaal. Bij grote werken (volledig dakdeel vernieuwen): planning binnen 2-4 weken na verzekeringsakkoord.',
  },
  {
    vraag: 'Krijg ik garantie op de stormschade-herstelling?',
    antwoord:
      'Ja. Op uitgevoerd herstelwerk geldt de wettelijke 10-jarige aansprakelijkheid — net als bij elke andere dakwerk. Daarnaast krijg je fabrieksgarantie op gebruikte materialen (pannen, EPDM, zinkwerk). Bij verzekeringsdossiers wordt deze garantie automatisch in het bestek opgenomen.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Stormschade dakherstelling',
  name: 'Stormschade dakherstelling in Limburg',
  description:
    'Snelle herstelling van stormschade aan daken in Limburg — 24/7 bereikbaar, binnen het uur ter plaatse bij acute schade. Erkende lokale dakwerkers met 10-jarige aansprakelijkheid en gratis hulp bij verzekeringsafhandeling.',
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
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  url: 'https://dakwerklimburg.be/diensten/stormschade',
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

export default function StormschadePage() {
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
          <div className="mb-8">
            <div className="flex items-center gap-3 bg-red-50 border-2 border-red-500 text-red-900 rounded-lg px-5 py-4">
              <AlertTriangle className="w-6 h-6 shrink-0 text-red-600" />
              <p className="font-semibold text-base lg:text-lg">
                Acute lekkage of stormschade?{' '}
                <a href="tel:+32456191360" className="underline font-bold">
                  Bel direct +32 456 19 13 60
                </a>{' '}
                — binnen het uur ter plaatse.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
                Stormschade aan je dak in Limburg — snelle herstelling door erkende dakwerker
              </h1>
              <p className="text-main text-lg leading-relaxed mb-6">
                Een storm kan in 10 minuten schade aanrichten waar je nog jaren last van hebt.
                Afgewaaide pannen, beschadigde dakgoten, lekkage, vallende takken — bij dakschade
                telt elke minuut. Dakwerk Limburg verbindt je met erkende lokale dakwerkers die
                binnen het uur ter plaatse zijn voor noodherstelling. Wij helpen je ook met
                foto-documentatie, het schadebestek en de communicatie met je verzekering. Bel
                direct of vul het formulier in — geen wachtrij, geen call center.
              </p>
              <a
                href="tel:+32456191360"
                className="inline-flex items-center gap-3 bg-accent hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-md transition-all mb-8"
              >
                <Phone className="w-6 h-6" />
                Direct bellen — +32 456 19 13 60
              </a>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/stormschade-kaart.png"
                  alt="Dakwerker herstelt stormschade aan een hellend dak in Limburg"
                  width={800}
                  height={533}
                  loading="eager"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            <div id="offerte-formulier">
              <LeadForm source="stormschade-hero" />
            </div>
          </div>
        </div>
      </section>

      <section id="snelle-actie" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Wat te doen bij acute stormschade — in 4 stappen
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {SNELLE_ACTIE.map((s) => (
              <div
                key={s.nummer}
                className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-red-500 text-white font-bold text-xl flex items-center justify-center mb-4">
                  {s.nummer}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{s.titel}</h3>
                <p className="text-main text-sm leading-relaxed">{s.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-main leading-relaxed max-w-4xl mx-auto">
            Hoe sneller een dakwerker ter plaatse is, hoe minder gevolgschade. Water dat door een
            gebroken dak komt, dringt binnen enkele uren in plafonds, vloeren en wanden — en die
            schade is vaak duurder dan de dakherstelling zelf. Wacht niet tot maandagochtend als de
            storm zaterdagavond plaatsvond. Onze dakwerkers zijn 24/7 bereikbaar voor noodgevallen.
          </p>
        </div>
      </section>

      <section id="types" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Veelvoorkomende types stormschade aan een dak
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Afgewaaide of gebroken pannen
            </h3>
            <p className="text-main leading-relaxed mb-4">
              De meest voorkomende stormschade. Pannen kunnen losgewaaid raken (vooral aan de
              randen, hoeken of nok van het dak), gebroken zijn door vallende takken of hagel, of
              verschoven zijn waardoor regenwater erdoor kan dringen. Aandachtspunten:
            </p>
            <ul className="space-y-2">
              {PANNEN_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-3 text-main leading-relaxed">
                  <span className="text-accent font-bold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Beschadigde dakgoten en zinkwerk
            </h3>
            <p className="text-main leading-relaxed mb-4">
              Sterke wind kan dakgoten losrukken, regenpijpen breken of zinken bekleding (slabben,
              kepers) verschuiven. Gevolg: water loopt niet meer correct af en kan langs muren of
              in spouw doorlopen. Aandachtspunten:
            </p>
            <ul className="space-y-2">
              {ZINKWERK_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-3 text-main leading-relaxed">
                  <span className="text-accent font-bold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">Lekkage en waterschade</h3>
            <p className="text-main leading-relaxed mb-4">
              Lekkage na een storm is vaak een symptoom van onderliggende dakschade — pannen
              verschoven, waterkering kapot, naden los. Snel handelen voorkomt dat water in
              plafonds, isolatie en wanden trekt. Aandachtspunten:
            </p>
            <ul className="space-y-2">
              {LEKKAGE_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-3 text-main leading-relaxed">
                  <span className="text-accent font-bold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">Vallende takken of objecten</h3>
            <p className="text-main leading-relaxed mb-4">
              Een afgevallen tak op je dak kan pannen breken, een dakgoot platdrukken, of in
              extreme gevallen door het dak heen gaan. Risico: gevolgschade aan de dakstructuur en
              isolatie. Aandachtspunten:
            </p>
            <ul className="space-y-2">
              {TAKKEN_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-3 text-main leading-relaxed">
                  <span className="text-accent font-bold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">Blikseminslag</h3>
            <p className="text-main leading-relaxed mb-4">
              Direct of indirecte blikseminslag in een dak komt zelden voor maar geeft acute
              schade — schroeiplekken, gebarsten pannen, schade aan de elektrische installatie of
              aan zonnepanelen. Aandachtspunten:
            </p>
            <ul className="space-y-2">
              {BLIKSEM_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-3 text-main leading-relaxed">
                  <span className="text-accent font-bold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-main leading-relaxed">
            Welk type stormschade je ook hebt: één telefoontje volstaat. Een lokale dakwerker komt
            langs, beoordeelt de schade, beperkt onmiddellijk de gevolgschade en bezorgt je een
            eerlijk bestek voor de definitieve herstelling. De inspectie zelf is gratis en
            vrijblijvend.
          </p>
        </div>
      </section>

      <section id="prijzen" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Wat kost dakherstelling na stormschade in Limburg?
          </h2>
          <p className="text-main leading-relaxed mb-10">
            De prijs van stormschadeherstelling hangt af van de omvang van de schade en de
            bereikbaarheid van het beschadigde deel. Belangrijk: de meeste woningverzekeringen
            dekken stormschade vanaf windkracht 7 (Beaufort) of bij hagel — de schade ligt in dat
            geval grotendeels of volledig bij de verzekeraar, niet bij jou. Onderstaande ranges
            zijn indicatief, btw exclusief, en gebaseerd op recente offertes in Limburg in 2026.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { titel: 'Kleine herstelling (1-2 uur werk)', items: PRIJZEN_KLEIN },
              { titel: 'Middelgrote herstelling (halve tot hele dag)', items: PRIJZEN_MIDDEL },
              { titel: 'Grote herstelling (1+ dagen)', items: PRIJZEN_GROOT },
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
            In 80% van de stormschade-gevallen dekt je woningverzekering de kosten — bovenop een
            eventuele eigen vrijstelling (vaak €250-€500). Wij ondersteunen je gratis bij de
            schadeaangifte: foto&apos;s, bestek, communicatie met de expert. Vraag dit expliciet
            aan je dakwerker — een ervaren vakman doet dit standaard mee zonder extra kosten.
          </p>

          <div className="text-center">
            <ScrollToFormButton>Vraag herstelling aan</ScrollToFormButton>
          </div>
        </div>
      </section>

      <section id="verzekering" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Stormschade en je verzekering — wat moet je weten
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {VERZEKERING_BLOKKEN.map((blok, i) => (
              <div
                key={i}
                className="bg-white border-2 border-accent/30 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{blok.titel}</h3>
                <p className="text-main leading-relaxed">{blok.tekst}</p>
              </div>
            ))}
          </div>

          <p className="text-main leading-relaxed">
            Tip: lees vooraleer een storm voorspeld is even je polisvoorwaarden door — vooral de
            eigen vrijstelling en eventuele uitsluitingen. Veel mensen ontdekken pas na de schade
            dat hun verzekering minder dekt dan gedacht. En hou je dak goed onderhouden: een
            dakwerker die kan aantonen dat het dak in goede staat was vóór de storm, maakt het
            verschil bij de schadeafhandeling.
          </p>
        </div>
      </section>

      <section id="proces" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Hoe wij je helpen na stormschade — in 5 stappen
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
            Waarom kiezen voor een lokale Limburgse dakwerker bij stormschade
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
            Werkgebied — heel Limburg, 24/7 bereikbaar
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
            Sta je gemeente er niet bij? Geen probleem — bij stormschade rijden we naar elke
            uithoek van Limburg, ook kleinere gemeenten zoals Lummen, Halen, Voeren, Bocholt,
            Kinrooi en Maaseik. Bel direct of vul het formulier in en geef je gemeente door.
          </p>
        </div>
      </section>

      <section id="faq" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
            Veelgestelde vragen over stormschade aan het dak
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
          <h2 className="text-2xl font-bold text-primary mb-2 text-center">Meer lezen over dakschade</h2>
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
                Acute stormschade? Bel of vraag direct herstelling aan
              </h2>
              <p className="text-main text-lg leading-relaxed mb-6">
                Bel rechtstreeks naar{' '}
                <a href="tel:+32456191360" className="text-accent font-bold hover:underline">
                  +32 456 19 13 60
                </a>{' '}
                voor acute stormschade — binnen het uur ter plaatse, 24/7. Voor niet-acute
                herstellingen (kleine schade die kan wachten) vul je het formulier in en krijg je
                binnen 24 uur contact. Geen tussenpersonen, geen call center, gewoon een vakman uit
                jouw regio die jouw schade snel komt bekijken. We helpen je ook gratis bij de
                communicatie met je verzekeraar.
              </p>
              <a
                href="tel:+32456191360"
                className="inline-flex items-center gap-3 bg-accent hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-md transition-all"
              >
                <Phone className="w-6 h-6" />
                Direct bellen — +32 456 19 13 60
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
              <LeadForm source="stormschade-cta" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
