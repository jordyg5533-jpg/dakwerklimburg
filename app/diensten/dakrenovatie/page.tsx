import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/forms/LeadForm';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ScrollToFormButton from './ScrollToFormButton';

export const metadata: Metadata = {
  title: 'Dakrenovatie Limburg — Erkende Dakwerker',
  description:
    'Dakrenovatie nodig in Limburg? Erkende lokale dakwerker, eerlijke prijs, premies via Mijn VerbouwPremie. Vraag binnen 24u een vrijblijvende offerte aan.',
  alternates: {
    canonical: 'https://dakwerklimburg.be/diensten/dakrenovatie',
  },
  openGraph: {
    title: 'Dakrenovatie Limburg — Erkende Dakwerker | Dakwerk Limburg',
    description:
      'Dakrenovatie nodig in Limburg? Erkende lokale dakwerker, eerlijke prijs, premies via Mijn VerbouwPremie. Vraag binnen 24u een vrijblijvende offerte aan.',
    type: 'website',
    url: 'https://dakwerklimburg.be/diensten/dakrenovatie',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dakrenovatie Limburg — Erkende Dakwerker',
    description:
      'Dakrenovatie nodig in Limburg? Erkende lokale dakwerker, eerlijke prijs, premies via Mijn VerbouwPremie. Vraag binnen 24u een vrijblijvende offerte aan.',
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const BULLETS_SIGNALEN = [
  'Lekkages of vochtplekken op zolder of plafonds',
  'Beschadigde, gebroken of verschoven pannen',
  'Mosgroei en algen op de dakbedekking',
  'Slechte of verouderde dakisolatie (warmteverlies in de winter, oververhitte zolder in de zomer)',
  'Energierekening die jaar na jaar stijgt zonder duidelijke reden',
  'Een dak ouder dan 30 jaar zonder eerdere renovatie',
];

const VOLLEDIGE_BULLETS = [
  'Het dakgebinte zelf is beschadigd of verzwakt',
  'Het dak ouder is dan 40 jaar',
  'Je sowieso wil isoleren én vernieuwen in één beweging (efficiënter dan in twee fases)',
  'Je woning verbouwt of uitbreidt en het dak toch open moet',
];

const GEDEELTELIJKE_BULLETS = [
  'Enkel pannen vervangen (rest van het dak is in goede staat)',
  'Enkel isolatie aanbrengen langs binnen of buiten',
  'Dakgoten en zinkwerk vernieuwen zonder de dakbedekking aan te raken',
  'Een specifiek gedeelte herstellen na stormschade',
];

const PRIJZEN_HELLEND = [
  'Enkel pannen vervangen, zonder isolatie: €120 – €180 per m²',
  'Volledige renovatie met dampscherm, isolatie en nieuwe dakbedekking: €180 – €280 per m²',
  'Gemiddelde woning, 100 m² hellend dak, volledige renovatie: reken op €18.000 – €28.000',
];

const PRIJZEN_PLAT = [
  'Enkel nieuwe dakbedekking (EPDM of bitumen): €100 – €170 per m²',
  'Plat dak vernieuwen mét isolatie: €150 – €220 per m²',
  'Aanbouw of garage van 30 m²: reken op €4.500 – €7.500',
];

const PRIJZEN_BIJKOMEND = [
  'Dakgoten en regenpijpen vervangen: €60 – €120 per lopende meter',
  'Velux of dakraam plaatsen of vervangen: €1.200 – €2.500 per stuk',
  'Asbestverwijdering door erkend bedrijf: €25 – €45 per m²',
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
      'Een lokale dakwerker komt langs voor een visuele inspectie en opmeting, gratis en vrijblijvend. Hij bekijkt het dak van binnen én buiten en noteert wat er moet gebeuren.',
  },
  {
    nummer: 3,
    titel: 'Offerte',
    tekst:
      'Binnen enkele werkdagen krijg je een gedetailleerde offerte: wat er gedaan wordt, welke materialen, welke prijs, welke planning. Vragen kunnen altijd voor je tekent.',
  },
  {
    nummer: 4,
    titel: 'Uitvoering',
    tekst:
      'Wanneer de offerte goedgekeurd is, plan je samen een startdatum. Een gemiddelde renovatie van een hellend dak duurt 1 à 2 weken, afhankelijk van weer en complexiteit. Plat dak meestal sneller.',
  },
  {
    nummer: 5,
    titel: 'Oplevering',
    tekst:
      'Na afronding overloopt de dakwerker het werk samen met jou. Je krijgt een factuur met alle details voor je premie-aanvragen en garantie-administratie.',
  },
];

const LOKAAL_KAARTEN = [
  {
    titel: 'Reactietijd',
    tekst:
      'Een dakwerker uit jouw regio is binnen het uur ter plaatse bij stormschade of een acute lek. Een groot bedrijf uit Antwerpen of Brussel plant je in voor over twee weken.',
  },
  {
    titel: 'Materialen aangepast aan onze regio',
    tekst:
      'Limburg heeft eigen weersomstandigheden — veel wind in het westen, veel regen, en in sommige delen specifieke bouwtradities. Een lokale vakman kent de gangbare daktypes en kiest materialen die hier al decennia bewijzen wat ze waard zijn.',
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
  serviceType: 'Dakrenovatie',
  name: 'Dakrenovatie in Limburg',
  description:
    'Volledige en gedeeltelijke dakrenovatie van hellende en platte daken in Limburg, uitgevoerd door erkende lokale dakwerkers.',
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
  url: 'https://dakwerklimburg.be/diensten/dakrenovatie',
};

const FAQ_DATA = [
  {
    vraag: 'Hoe lang duurt een dakrenovatie?',
    antwoord:
      'Een gedeeltelijke pannenrenovatie kan in 2 à 3 dagen klaar zijn. Een volledige renovatie van een hellend dak met isolatie van een gemiddelde woning duurt meestal 1 à 2 weken. Plat dak gaat vaak sneller, soms in enkele dagen. Het weer blijft een factor — bij stevige regen of vorst wordt er niet op het dak gewerkt.',
  },
  {
    vraag: 'Heb ik een vergunning nodig voor een dakrenovatie?',
    antwoord:
      'Voor renovatie waarbij je de dakvorm of het volume niet wijzigt, volstaat in de meeste gemeenten een melding. Wijzig je de structuur, plaats je dakvensters of verhoog je het dak — dan heb je een omgevingsvergunning nodig. Je dakwerker of architect helpt je hierbij.',
  },
  {
    vraag: 'Krijg ik premie als ik enkel mijn dak isoleer?',
    antwoord:
      'Ja. Mijn VerbouwPremie is van toepassing op zoldervloer-isolatie, hellend dak-isolatie én isolatie van een plat dak. Een volledige renovatie is geen voorwaarde. Belangrijk: vraag de premie aan vóór de start van de werken.',
  },
  {
    vraag: 'Wat met asbest in mijn oude dak?',
    antwoord:
      'Asbestleien daken (vooral van vóór 2001) moeten verwijderd worden door een erkend asbestverwijderaar. Reken op €25 – €45 per m² extra, afhankelijk van type en hoeveelheid. Via OVAM en gemeenten zijn er premies om de meerkost te dekken. Zelf afbreken is verboden en gevaarlijk.',
  },
  {
    vraag: 'Werken jullie ook in slecht weer?',
    antwoord:
      'Op het dak zelf wordt niet gewerkt bij stevige regen, sneeuw, vorst of windkracht 6+. Voorbereidingswerk, materiaal aanleveren of werk binnen (isolatie van zolder uit) gaat wel door. Bij grote renovaties wordt het dak in fases geopend en steeds dezelfde dag waterdicht afgewerkt.',
  },
  {
    vraag: 'Hoeveel jaar gaat een nieuw dak mee?',
    antwoord:
      'Een goed uitgevoerde renovatie met kwaliteitsmaterialen gaat 30 tot 50 jaar mee. Pannen kunnen 60+ jaar meegaan, zinkwerk 30 à 40 jaar, EPDM op een plat dak 40+ jaar. Onderhoud (mos verwijderen, dakgoten reinigen, controle om de 5 jaar) verlengt de levensduur aanzienlijk.',
  },
  {
    vraag: 'Moet ik thuis zijn tijdens de werken?',
    antwoord:
      'Niet noodzakelijk. Voor de inmeting en oplevering wel. Tijdens de uitvoering volstaat het dat de dakwerker toegang heeft tot de zolder en eventueel water/elektriciteit. Veel klanten gaan gewoon werken tijdens de renovatie.',
  },
  {
    vraag: 'Geven jullie garantie op het werk?',
    antwoord:
      'Ja. Naast de wettelijke 10-jarige aansprakelijkheid die elke erkende aannemer biedt, geven onze dakwerkers ook fabrieksgarantie op de gebruikte materialen (pannen, isolatie, EPDM). Concrete duur en voorwaarden staan in je offerte.',
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

export default function DakrenovatiePage() {
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
                Dakrenovatie in Limburg — vernieuw je dak met een erkende lokale dakwerker
              </h1>
              <p className="text-main text-lg leading-relaxed mb-8">
                Een dak gaat gemiddeld 30 tot 50 jaar mee. Daarna komen lekkages, energieverlies en
                zichtbare slijtage. Een dakrenovatie hoeft geen onaangename verrassing te zijn — als
                je weet wat je mag verwachten qua planning, prijs en premies. Dakwerk Limburg
                verbindt je met erkende lokale dakwerkers die actief zijn in heel de provincie.
                Vraag een vrijblijvende offerte aan en krijg binnen 24 uur reactie van een vakman
                uit jouw regio.
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://i.postimg.cc/rstDYfLf/dakrenovatie-hero.jpg"
                  alt="Volledige renovatie van een hellend dak in Limburg in uitvoering"
                  width={1536}
                  height={1024}
                  loading="eager"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div id="offerte-formulier">
              <LeadForm source="dakrenovatie-hero" />
            </div>
          </div>
        </div>
      </section>

      <section id="signalen" className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Wanneer is je dak toe aan renovatie? 6 signalen
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
            Eén of twee van deze signalen betekent niet meteen dat je je hele dak moet vervangen.
            Vaak volstaat een gedeeltelijke renovatie. Maar wachten tot er water binnenkomt, kost
            altijd meer dan tijdig ingrijpen. Een dakwerker kan in een gratis inspectie meestal
            binnen een halfuur vaststellen of het urgent is of niet.
          </p>
        </div>
      </section>

      <section id="types" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Volledige of gedeeltelijke dakrenovatie — wat past bij jouw situatie?
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">Volledige dakrenovatie</h3>
            <p className="text-main leading-relaxed mb-4">
              Bij een volledige dakrenovatie wordt het dak gestript tot op het gebinte. Je krijgt
              een nieuw onderdak, isolatie volgens de huidige Vlaamse normen, een nieuwe
              dakbedekking (pannen, leien, EPDM of bitumen) en vaak ook nieuwe dakgoten en
              zinkwerk. Aangewezen wanneer:
            </p>
            <ul className="space-y-2">
              {VOLLEDIGE_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-3 text-main leading-relaxed">
                  <span className="text-accent font-bold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">Gedeeltelijke dakrenovatie</h3>
            <p className="text-main leading-relaxed mb-4">
              Een gedeeltelijke dakrenovatie pakt enkel de probleemzone aan. Veelvoorkomende
              scenario&apos;s:
            </p>
            <ul className="space-y-2 mb-4">
              {GEDEELTELIJKE_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-3 text-main leading-relaxed">
                  <span className="text-accent font-bold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-main leading-relaxed">
              Goedkoper en sneller, maar werkt niet altijd. Als je gebinte aangetast is of als je
              woning naar een hoger E-peil moet, krijg je met lapwerk geen blijvende oplossing.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">Renoveren of volledig vervangen?</h3>
            <p className="text-main leading-relaxed">
              Vuistregel: als meer dan 40% van je dak vernieuwing nodig heeft, ben je vaak goedkoper
              uit met een volledige renovatie. De vaste kosten (stelling, afval, opbouwtijd) zijn
              er sowieso, dus die spreid je beter over een volledige aanpak. Een eerlijke dakwerker
              zegt je dit ook bij de inmeting.
            </p>
          </div>
        </div>
      </section>

      <section id="prijzen" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Wat kost een dakrenovatie in Limburg in 2026?
          </h2>
          <p className="text-main leading-relaxed mb-10">
            Eerlijk: prijzen variëren sterk naargelang dakvorm, oppervlakte, materiaal en
            bereikbaarheid. Een correcte prijs kan je dakwerker pas geven na inmeting. Onderstaande
            ranges zijn indicatief en gebaseerd op recente offertes in Limburg in 2026, btw
            exclusief.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { titel: 'Hellend dak', items: PRIJZEN_HELLEND },
              { titel: 'Plat dak', items: PRIJZEN_PLAT },
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
            Reken niet op de laagste prijs alleen. Een offerte die 30% onder de markt zit, betekent
            meestal dunnere isolatie, goedkopere pannen of een aannemer die op materiaal
            beknibbelt. Vergelijk altijd 2 à 3 offertes en let op wat er expliciet vermeld staat.
          </p>

          <div className="text-center">
            <ScrollToFormButton>Vraag je offerte aan</ScrollToFormButton>
          </div>
        </div>
      </section>

      <section id="premies" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Premies en subsidies voor dakrenovatie in Vlaanderen (2026)
          </h2>

          <div className="space-y-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                1. Mijn VerbouwPremie (dakisolatie)
              </h3>
              <p className="text-main leading-relaxed">
                Vlaamse premie voor dak- en zoldervloerisolatie. Het bedrag hangt af van je
                inkomenscategorie en kan oplopen tot enkele duizenden euro&apos;s voor een volledig
                isolatiepakket. Aanvragen via mijnverbouwpremie.be — altijd vóór de start van de
                werken, niet erna.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                2. Verlaagd btw-tarief voor renovatie
              </h3>
              <p className="text-main leading-relaxed">
                Voor renovatiewerken aan oudere woningen geldt onder bepaalde voorwaarden een
                verlaagd btw-tarief in plaats van het standaardtarief van 21%. Voorwaarden en
                leeftijdsgrens van de woning vind je via de FOD Financiën. De aannemer past dit toe
                op de factuur.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                3. Asbest-verwijderingspremie
              </h3>
              <p className="text-main leading-relaxed">
                Wie nog een asbestleien dak heeft, kan via OVAM en sommige Limburgse gemeenten een
                tussenkomst krijgen voor de gecertificeerde verwijdering. Informeer bij je gemeente
                naar lopende acties.
              </p>
            </div>
          </div>

          <p className="text-main leading-relaxed">
            Tip: combineer dakrenovatie met isolatie en je verdient de meerprijs vaak terug binnen
            5 à 8 jaar via lagere energiefacturen, exclusief premies. Ga je toch renoveren? Doe het
            in één keer goed.
          </p>
        </div>
      </section>

      <section id="proces" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Hoe verloopt een dakrenovatie bij ons — in 5 stappen
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
            Veelgestelde vragen over dakrenovatie
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
          <h2 className="text-2xl font-bold text-primary mb-2 text-center">Meer lezen over dakrenovatie</h2>
          <p className="text-sub text-sm text-center mb-6">Handige gidsen over kosten, materialen en premies in Limburg</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: 'Wat kost een dakrenovatie?', href: '/kennis/kosten-dakrenovatie-limburg' },
              { label: 'Welke premies zijn er?', href: '/kennis/dakrenovatie-premie-limburg' },
              { label: 'Wanneer dak vervangen?', href: '/kennis/wanneer-dak-vervangen' },
              { label: 'Leien dak: levensduur & kosten', href: '/kennis/leien-dak-levensduur-kosten' },
              { label: 'Asbest dak vervangen Limburg', href: '/kennis/asbest-dak-vervangen-limburg' },
              { label: 'Hoe herken ik een daklek?', href: '/kennis/hoe-herken-je-een-daklek' },
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
                Vraag een vrijblijvende offerte aan voor je dakrenovatie
              </h2>
              <p className="text-main text-lg leading-relaxed">
                Vul het formulier in of bel rechtstreeks naar{' '}
                <a href="tel:+32456191360" className="text-accent font-bold hover:underline">
                  +32 456 19 13 60
                </a>
                . Binnen 24 uur krijg je contact van een lokale erkende dakwerker. Geen
                tussenpersonen, geen call center — gewoon een vakman uit jouw regio die jouw
                situatie komt bekijken. De inmeting en offerte zijn gratis en vrijblijvend.
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
              <LeadForm source="dakrenovatie-cta" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
