import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/forms/LeadForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ScrollToFormButton from '../dakrenovatie/ScrollToFormButton';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Plat Dak Vernieuwen in Limburg — EPDM, Bitumen & PVC',
  description:
    'Plat dak vervangen in Limburg? Erkende dakwerker plaatst EPDM, bitumen of PVC. Eerlijke prijs, premies via Mijn VerbouwPremie. Offerte binnen 24u.',
  alternates: {
    canonical: 'https://dakwerklimburg.be/diensten/plat-dak',
  },
  openGraph: {
    title: 'Plat Dak Vernieuwen in Limburg — EPDM, Bitumen & PVC',
    description:
      'Plat dak vervangen in Limburg? Erkende dakwerker plaatst EPDM, bitumen of PVC. Eerlijke prijs, premies via Mijn VerbouwPremie. Offerte binnen 24u.',
    type: 'website',
    url: 'https://dakwerklimburg.be/diensten/plat-dak',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plat Dak Vernieuwen in Limburg — EPDM, Bitumen & PVC',
    description:
      'Plat dak vervangen in Limburg? Erkende dakwerker plaatst EPDM, bitumen of PVC. Eerlijke prijs, premies via Mijn VerbouwPremie. Offerte binnen 24u.',
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const BULLETS_SIGNALEN = [
  'Lekkage of vochtplekken op het plafond onder het plat dak',
  'Zichtbare blaren of bobbels in de dakbedekking',
  'Scheuren, kale plekken of poreuze delen in de roofing',
  'Plassen of stilstaand water dat blijft staan na regen',
  'Mosgroei, algen of begroeiing op het dak',
  'Het dak is ouder dan 20 jaar (bitumen) of 30 jaar (EPDM/PVC) zonder eerdere renovatie',
];

const EPDM_BULLETS = [
  'Iets duurder in materiaal dan bitumen',
  'Vereist gespecialiseerde plaatsing (aansluitingen, hoeken, opstanden)',
  'Lange fabrieksgarantie, vaak tot 20 jaar',
  'Geschikt voor dakhellingen tot 5°',
];

const BITUMEN_BULLETS = [
  'Goedkoper in aanschaf dan EPDM of PVC',
  'Onderhoud nodig (om de 5-10 jaar inspectie van naden)',
  'Naden kunnen op termijn lekken',
  'Goed bewerkbaar materiaal — geschikt voor complexe dakvormen',
];

const PVC_BULLETS = [
  'Bestand tegen UV en chemische belasting',
  'Lichter dan EPDM (interessant op zwakkere dakvloeren)',
  'Vergelijkbaar in prijs met EPDM',
  'Geschikt voor groendaken, combineerbaar met sedum-begroeiing',
];

const PRIJZEN_EPDM = [
  'EPDM dakbedekking nieuw, zonder isolatie: €100 – €150 per m²',
  'EPDM mét isolatie en dampscherm: €150 – €220 per m²',
  'Aanbouw of garage van 30 m²: reken op €4.500 – €7.500',
];

const PRIJZEN_BITUMEN = [
  'Bitumen 2-laagse opbouw, zonder isolatie: €70 – €110 per m²',
  'Bitumen mét isolatie: €110 – €170 per m²',
  'Aanbouw of garage van 30 m²: reken op €3.300 – €5.500',
];

const PRIJZEN_PVC = [
  'PVC dakbedekking nieuw, zonder isolatie: €110 – €170 per m²',
  'PVC mét isolatie en dampscherm: €160 – €240 per m²',
  'Aanbouw of garage van 30 m²: reken op €4.800 – €8.500',
];

const PRIJZEN_BIJKOMEND = [
  'Verwijdering oude dakbedekking: €15 – €30 per m²',
  'Asbest-roofing verwijderen door erkend bedrijf: €25 – €45 per m²',
  'Nieuwe dakgoot of zinken bekleding: €60 – €120 per lopende meter',
  'Daklicht of lichtkoepel: €800 – €2.000 per stuk',
];

const PROCES_STAPPEN = [
  {
    nummer: 1,
    titel: 'Aanvraag',
    tekst:
      'Je vult het formulier in of belt rechtstreeks. Binnen 24 uur krijg je telefonisch of via WhatsApp contact.',
  },
  {
    nummer: 2,
    titel: 'Inmeting ter plaatse',
    tekst:
      'Een lokale dakwerker komt langs voor een visuele inspectie en opmeting, gratis en vrijblijvend. Hij controleert ook de staat van de bestaande dakvloer en eventuele lekkages.',
  },
  {
    nummer: 3,
    titel: 'Offerte',
    tekst:
      'Binnen enkele werkdagen krijg je een gedetailleerde offerte: welk materiaal, welke isolatiedikte, welke prijs, welke planning. Vragen kunnen altijd voor je tekent.',
  },
  {
    nummer: 4,
    titel: 'Uitvoering',
    tekst:
      'Wanneer de offerte goedgekeurd is, plan je samen een startdatum. Een klein plat dak (garage, aanbouw) is meestal in 1 à 3 dagen klaar. Een groot plat dak (50+ m²) duurt 4 tot 7 dagen.',
  },
  {
    nummer: 5,
    titel: 'Oplevering',
    tekst:
      'Na afronding overloopt de dakwerker het werk samen met jou. Je krijgt foto-documentatie van de uitvoering, een factuur met alle details voor je premie-aanvragen, en de garantiedocumenten van fabrikant en aannemer.',
  },
];

const LOKAAL_KAARTEN = [
  {
    titel: 'Snelle reactie bij lekkage',
    tekst:
      'Een dakwerker uit jouw regio is binnen het uur ter plaatse bij acute lekkage. Bij een plat dak telt elk uur — water dat blijft staan, dringt sneller in plafonds en wanden door dan bij een hellend dak.',
  },
  {
    titel: 'Materiaal aangepast aan ons klimaat',
    tekst:
      'Limburg heeft veel regen en grote temperatuurverschillen tussen zomer en winter. Een lokale vakman kiest materialen die hier al decennia bewijzen wat ze waard zijn — geen experimentele systemen die er goed uitzien op papier.',
  },
  {
    titel: 'Erkenning en garantie',
    tekst:
      'De dakwerkers in ons netwerk zijn erkend (Bouwunie, Confederatie Bouw of gelijkwaardig) en geven 10-jarige aansprakelijkheid op het uitgevoerde werk, zoals wettelijk vereist. Geen losse uitvoerders of zwartwerk.',
  },
  {
    titel: 'Persoonlijke opvolging',
    tekst:
      'Bij een klacht of latere vraag heb je geen call center, maar de aannemer zelf aan de lijn. Wie in jouw streek werkt, wil zijn reputatie houden — dat dwingt kwaliteit af.',
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

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Plat dak vernieuwen',
  name: 'Plat dak vernieuwen in Limburg',
  description:
    'Vervangen van platte daken in Limburg met EPDM, bitumen of PVC, uitgevoerd door erkende lokale dakwerkers. Inclusief isolatie en premie-begeleiding.',
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
  url: 'https://dakwerklimburg.be/diensten/plat-dak',
};

const FAQ_DATA = [
  {
    vraag: 'Hoe lang gaat een plat dak mee?',
    antwoord:
      'Hangt sterk van het materiaal af. Bitumen (roofing): 15 tot 25 jaar. EPDM (rubber): 30 tot 50 jaar. PVC: 25 tot 35 jaar. De levensduur staat of valt met correcte plaatsing — vooral aan de aansluitingen, hoeken en opstanden. Bij twijfelachtig vakwerk haalt zelfs het beste materiaal de helft van zijn theoretische levensduur.',
  },
  {
    vraag: 'Wat is beter, EPDM of bitumen?',
    antwoord:
      'Voor een typische woning met een aanbouw of garage in Limburg is EPDM bijna altijd de beste keuze: amper naden, geen onderhoud nodig, langer mee. Bitumen is goedkoper in aanschaf maar vraagt om de 5-10 jaar inspectie en is op termijn duurder als de naden gaan opensplitsen. Bitumen kies je voornamelijk als budget echt de doorslag geeft.',
  },
  {
    vraag: 'Mijn plat dak lekt — kan dat hersteld worden of moet alles vervangen?',
    antwoord:
      'Vaak volstaat een lokale herstelling als de schade beperkt is en het dak verder in goede staat is. Een lokale dakwerker komt langs voor een gratis inspectie en geeft je een eerlijke inschatting. Pas vervangen wanneer: meer dan 3 lekken op verschillende plekken, dak ouder dan zijn levensduur, isolatie aangetast, of bij elke nieuwe regenbui weer ergens anders nat.',
  },
  {
    vraag: 'Krijg ik premie bij vervanging van mijn plat dak?',
    antwoord:
      'Voor enkel de dakbedekking is er geen specifieke premie. Wél via Mijn VerbouwPremie als je tegelijk isolatie aanbrengt of verbetert — wat we sterk aanraden. Je krijgt dan tot enkele duizenden euro\u2019s tussenkomst, afhankelijk van inkomen. Aanvragen vóór de werken starten.',
  },
  {
    vraag: 'Heb ik een vergunning nodig?',
    antwoord:
      'Voor de vervanging van een bestaand plat dak zonder volume- of vormwijziging volstaat in de meeste Limburgse gemeenten een melding. Plaats je een nieuw plat dak (uitbreiding, nieuwe aanbouw) of wijzig je het volume, dan heb je een omgevingsvergunning nodig. Je dakwerker kent meestal de gemeentelijke procedures of helpt je bij de aanvraag.',
  },
  {
    vraag: 'Wat met asbestroofing op een ouder plat dak?',
    antwoord:
      'Sommige platte daken van vóór 2001 hebben nog asbesthoudende roofing of isolatie. Verwijderen mag enkel door een erkend asbestverwijderaar. Reken op €25 – €45 per m² extra, afhankelijk van type en hoeveelheid. Via OVAM en sommige gemeenten zijn er premies om de meerkost te dekken. Zelf afbreken is verboden en gevaarlijk.',
  },
  {
    vraag: 'Kan een plat dak begaanbaar of als terras dienen?',
    antwoord:
      'Ja, mits de dakvloer berekend is op de extra belasting (mensen, terrasmeubilair, eventueel een groendak of jacuzzi). Bij een nieuwe constructie wordt dit ingerekend. Bij een bestaand plat dak vraagt de aannemer een controle van de draagstructuur. Materialen zoals EPDM en PVC zijn beide geschikt voor begaanbare daken — bitumen meestal niet zonder beschermingslaag.',
  },
  {
    vraag: 'Werken jullie ook bij regen of vorst?',
    antwoord:
      'Bij stevige regen of vorst wordt er niet gewerkt op het dak — water of ijs onder de nieuwe dakbedekking is een gegarandeerd lekkagepunt. Bij dreiging plant de dakwerker in fases: dak deels openleggen, dezelfde dag waterdicht afsluiten. Bij grootschalige renovatie wordt vaak met tijdelijke afdekking gewerkt.',
  },
];

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

export default function PlatDakPage() {
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
      <section className="bg-bg-alt py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
                Plat Dak Vernieuwen in Limburg — EPDM, bitumen en PVC door erkende dakwerkers
              </h1>
              <p className="text-main text-lg leading-relaxed mb-8">
                Een plat dak vraagt minder onderhoud dan een hellend dak, maar als het stuk gaat,
                gaat het stuk. Lekkage, blaren, scheuren of stilstaand water — een plat dak kondigt
                zijn einde meestal niet zachtjes aan. Dakwerk Limburg verbindt je met erkende lokale
                dakwerkers gespecialiseerd in plat dak vernieuwen, isoleren of herstellen. EPDM,
                bitumen of PVC — eerlijke prijzen, duidelijke premie-info, en een vakman uit jouw
                regio die binnen 24 uur reageert.
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://i.postimg.cc/NLqKhRgm/plat-dak-kaart.jpg"
                  alt="Vakman plaatst EPDM-bedekking op een plat dak in Limburg"
                  width={800}
                  height={600}
                  loading="eager"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            <div id="offerte-formulier">
              <LeadForm source="plat-dak-hero" />
            </div>
          </div>
        </div>
      </section>

      <section id="signalen" className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Wanneer is je plat dak toe aan vervanging? 6 signalen
          </h2>
          <ul className="space-y-3 mb-6">
            {BULLETS_SIGNALEN.map((b, i) => (
              <li key={i} className="flex gap-3 text-main leading-relaxed">
                <span className="text-accent font-bold">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="text-main leading-relaxed">
            Eén signaal volstaat om langs te laten komen. Een lokale dakwerker controleert gratis
            of het volstaat met een herstelling, of het écht aan vervanging toe is. Wachten tot er
            water in je woning loopt, kost altijd meer dan tijdig ingrijpen — en bij plat dak
            verergert schade snel omdat water nergens heen kan.
          </p>
        </div>
      </section>

      <section id="materialen" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Welk materiaal kies je voor je plat dak?
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">EPDM (rubber)</h3>
            <p className="text-main leading-relaxed mb-4">
              EPDM is het meest gebruikte materiaal voor platte daken in nieuwbouw en renovatie in
              Vlaanderen. Het is een synthetisch rubber dat in één groot stuk over het dak wordt
              gelegd — daardoor amper naden en weinig zwakke punten. Levensduur: 30 tot 50 jaar bij
              correcte plaatsing. Aandachtspunten:
            </p>
            <ul className="space-y-2">
              {EPDM_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-3 text-main leading-relaxed">
                  <span className="text-accent font-bold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">Bitumen (roofing)</h3>
            <p className="text-main leading-relaxed mb-4">
              Bitumen is de klassieker — gelaagde dakbanen die met heet asfalt of fakkellassen
              worden gelegd. Levensduur: 15 tot 25 jaar. Aandachtspunten:
            </p>
            <ul className="space-y-2">
              {BITUMEN_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-3 text-main leading-relaxed">
                  <span className="text-accent font-bold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">PVC (membraan)</h3>
            <p className="text-main leading-relaxed mb-4">
              PVC-membranen zijn het modernste alternatief. Lichte, soepele banen die warm op elkaar
              worden gelast. Levensduur: 25 tot 35 jaar. Aandachtspunten:
            </p>
            <ul className="space-y-2">
              {PVC_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-3 text-main leading-relaxed">
                  <span className="text-accent font-bold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-main leading-relaxed">
            Voor een typische woning in Limburg met een aanbouw of garage van 20 tot 50 m² is EPDM
            meestal de beste keuze: lange levensduur, weinig onderhoud, betrouwbaar bij ons
            klimaat. Bitumen blijft een correcte keuze als budget de doorslag geeft of voor
            kleinere oppervlakken. PVC kies je vooral bij groendaken of complexere dakvormen.
          </p>
        </div>
      </section>

      <section id="prijzen" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Wat kost een plat dak in Limburg in 2026?
          </h2>
          <p className="text-main leading-relaxed mb-10">
            Prijzen verschillen sterk per materiaal, oppervlakte en complexiteit (aansluitingen,
            opstanden, staat van de bestaande dakvloer). Onderstaande ranges zijn indicatief en
            gebaseerd op recente offertes in Limburg in 2026, btw exclusief.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              { titel: 'EPDM', items: PRIJZEN_EPDM },
              { titel: 'Bitumen (roofing)', items: PRIJZEN_BITUMEN },
              { titel: 'PVC', items: PRIJZEN_PVC },
              { titel: 'Bijkomend', items: PRIJZEN_BIJKOMEND },
            ].map((blok) => (
              <div
                key={blok.titel}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-primary mb-4">{blok.titel}</h3>
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
            Sommige offertes lijken goedkoper omdat verwijdering van de oude laag of het dampscherm
            niet inbegrepen is. Vraag altijd een offerte met expliciete vermelding van
            isolatiedikte, type dampscherm en afwerking van opstanden — daar zit het verschil
            tussen 15 jaar zorgenvrij en lekkage binnen 5 jaar.
          </p>

          <div className="text-center">
            <ScrollToFormButton>Vraag je offerte aan</ScrollToFormButton>
          </div>
        </div>
      </section>

      <section id="premies" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Premies en subsidies voor plat dak in Vlaanderen (2026)
          </h2>

          <div className="space-y-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                1. Mijn VerbouwPremie (dakisolatie plat dak)
              </h3>
              <p className="text-main leading-relaxed">
                Vlaamse premie voor isolatie van een plat dak. Geldt ook bij vervanging van enkel
                de dakbedekking als je tegelijk isolatie aanbrengt of verbetert. Bedrag varieert
                volgens inkomen, kan oplopen tot enkele duizenden euro&apos;s. Aanvragen via
                mijnverbouwpremie.be — altijd vóór de start van de werken, niet erna.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                2. Verlaagd btw-tarief voor renovatie
              </h3>
              <p className="text-main leading-relaxed">
                Voor renovatie van een oudere woning geldt onder bepaalde voorwaarden een verlaagd
                btw-tarief in plaats van het standaardtarief van 21%. Voorwaarden en leeftijdsgrens
                van de woning vind je via de FOD Financiën. De aannemer past dit toe op de factuur.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                3. EPB-conformiteit en woningwaarde
              </h3>
              <p className="text-main leading-relaxed">
                Bij vervanging van het dak waarbij isolatie wordt aangebracht, moet de woning
                voldoen aan de Vlaamse EPB-normen (u-waarde maximum 0,24 W/m²K voor plat dak). Een
                correcte renovatie maakt je woning automatisch conform én verhoogt de marktwaarde
                — een isolatie-arm dak kost tegenwoordig minstens €5.000 op de verkoopprijs.
              </p>
            </div>
          </div>

          <p className="text-main leading-relaxed">
            Tip: combineer de vervanging van je dakbedekking met het bijwerken van isolatie. Je
            betaalt 1× voor stelling, uitvoeringswerk en afwerking — en je krijgt premie + lagere
            energiekosten als bonus. Twee renovaties uit elkaar halen kost je vaak 30-50% méér.
          </p>
        </div>
      </section>

      <section id="proces" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Hoe verloopt een plat dak vernieuwen bij ons — in 5 stappen
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
            Sta je gemeente er niet bij? Geen probleem — we zijn actief in heel Limburg, ook
            kleinere gemeenten zoals Lummen, Halen, Voeren, Bocholt, Kinrooi en Maaseik. Vraag
            gewoon je offerte aan en geef je gemeente door.
          </p>
        </div>
      </section>

      <section id="faq" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
            Veelgestelde vragen over een plat dak
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
          <h2 className="text-2xl font-bold text-primary mb-2 text-center">Meer lezen over platte daken</h2>
          <p className="text-sub text-sm text-center mb-6">Handige gidsen over materialen, kosten en onderhoud</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: 'EPDM of PVC — wat kiezen?', href: '/kennis/epdm-of-pvc-plat-dak' },
              { label: 'Plat dak herstellen of vervangen?', href: '/kennis/plat-dak-herstellen-of-vervangen' },
              { label: 'Wat kost een dakrenovatie?', href: '/kennis/kosten-dakrenovatie-limburg' },
              { label: 'Hoe herken ik een daklek?', href: '/kennis/hoe-herken-je-een-daklek' },
              { label: 'Welke premies zijn er?', href: '/kennis/dakrenovatie-premie-limburg' },
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
                Vraag een vrijblijvende offerte aan voor je plat dak
              </h2>
              <p className="text-main text-lg leading-relaxed">
                Vul het formulier in of bel rechtstreeks naar{' '}
                <a href="tel:+32456191360" className="text-accent font-bold hover:underline">
                  +32 456 19 13 60
                </a>
                . Binnen 24 uur krijg je contact van een lokale erkende dakwerker. Geen
                tussenpersonen, geen call center — gewoon een vakman uit jouw regio die jouw plat
                dak komt bekijken. De inmeting en offerte zijn gratis en vrijblijvend.
              </p>
              <p className="text-sub text-sm mt-4">
                Of mail ons op{' '}
                <a href="mailto:info@dakwerklimburg.be" className="underline hover:text-accent">
                  info@dakwerklimburg.be
                </a>
                .
              </p>
            </div>
            <div>
              <LeadForm source="plat-dak-cta" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
