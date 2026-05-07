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

const PAGE_TITLE =
  'Dakisolatie in Limburg — Mijn VerbouwPremie & Erkende Dakwerker';
const PAGE_DESCRIPTION =
  "Dakisolatie in Limburg met tot duizenden euro's premie via Mijn VerbouwPremie. Erkende dakwerker, eerlijke prijs, gratis offerte binnen 24 uur.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: 'https://dakwerklimburg.be/diensten/dakisolatie',
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: 'website',
    url: 'https://dakwerklimburg.be/diensten/dakisolatie',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const BULLETS_SIGNALEN = [
  'Energierekening die jaar na jaar stijgt zonder duidelijke reden',
  'Koude voeten en koude wanden in vertrekken onder het dak in de winter',
  'Oververhitte zolder of slaapkamer in de zomer (boven 30 °C)',
  'Tocht of koude lucht aan de aansluitingen waar dak en muur samenkomen',
  'IJsdammen of smeltend ijs aan de dakgoot in de winter (warmte ontsnapt door slechte isolatie)',
  'Geen, oude of zichtbaar beschadigde isolatie (gele of zwarte verkleurde wol, gaten, dichtgedrukte plekken)',
];

const MINERALE_WOL_BULLETS = [
  'Goedkoopste optie per m²',
  'Brandveilig (klasse A1 — niet brandbaar)',
  'Dempt geluid (regen en buitenlawaai)',
  'Vraagt iets meer dikte dan PIR voor dezelfde isolatiewaarde',
  'Geschikt voor: hellend dak van binnen, zoldervloer, scheidingsmuren',
];

const PIR_PUR_BULLETS = [
  'Beste isolatiewaarde per cm dikte (lambda 0,022-0,025)',
  'Duurder per m² dan minerale wol',
  'Vereist nauwkeurige plaatsing en dampscherm',
  'Lange levensduur (50+ jaar) zonder kwaliteitsverlies',
  'Geschikt voor: plat dak van boven (sarking), hellend dak waar weinig hoogte beschikbaar is',
];

const CELLULOSE_BULLETS = [
  'Duurzaam materiaal (gerecycleerd)',
  'Vult elke hoek en spleet — geen koudebruggen',
  'Vereist gespecialiseerde inblaas-apparatuur en erkende installateur',
  'Iets duurder dan glaswol, goedkoper dan PIR',
  'Geschikt voor: zoldervloer, holle ruimtes tussen muren, ontoegankelijke hoeken',
];

const PRIJZEN_HELLEND_BINNEN = [
  'Met minerale wol (glaswol/rotswol) + dampscherm + afwerking: €40 – €70 per m²',
  'Met PIR/PUR + dampscherm + afwerking: €60 – €90 per m²',
  'Voor 100 m² hellend dak: reken op €4.000 – €9.000 vóór premie',
];

const PRIJZEN_ZOLDERVLOER = [
  'Met inblaas-cellulose: €15 – €30 per m²',
  'Met rolwol-deken: €20 – €35 per m²',
  'Voor 80 m² zoldervloer: reken op €1.200 – €2.800 vóór premie',
];

const PRIJZEN_PLAT_DAK = [
  'Met PIR/PUR + dampscherm + nieuwe dakbedekking: €80 – €130 per m²',
  'Met EPS/XPS isolatie: €60 – €100 per m²',
  'Voor 30 m² plat dak: reken op €1.800 – €4.000 vóór premie',
];

const PRIJZEN_SARKING = [
  'Premium aanpak: dak open + isolatie boven de kepers + nieuwe dakbedekking: €120 – €180 per m²',
  'Voor 100 m² hellend dak: reken op €12.000 – €18.000 vóór premie',
  'Voordeel: geen verlies van zolderruimte, geen koudebruggen, eeuwige levensduur',
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
    titel: 'Inmeting + premie-berekening',
    tekst:
      'Een lokale dakwerker komt langs, meet op en berekent welke premie je kunt aanvragen op basis van je woning en inkomenscategorie. Gratis en vrijblijvend.',
  },
  {
    nummer: 3,
    titel: 'Offerte + premie-aanvraag',
    tekst:
      'Je krijgt een gedetailleerde offerte met materiaal, R-waarde, planning en netto-kostprijs ná premie. Bij goedkeuring wordt de premie-aanvraag door de dakwerker ingediend vóór de werken starten.',
  },
  {
    nummer: 4,
    titel: 'Uitvoering',
    tekst:
      'Hellend dak van binnen: 1 à 3 dagen. Zoldervloer met inblaas: meestal 1 dag. Plat dak met isolatie + nieuwe dakbedekking: 2 à 5 dagen, afhankelijk van oppervlakte.',
  },
  {
    nummer: 5,
    titel: 'Oplevering + premie-uitkering',
    tekst:
      'Na afronding krijg je foto-documentatie, factuur en het EPB-attest. Met deze documenten dient de dakwerker de definitieve premie-aanvraag in. Het premiebedrag wordt gemiddeld 2 à 4 maanden later op je rekening gestort.',
  },
];

const LOKAAL_KAARTEN = [
  {
    titel: 'Premie-expertise',
    tekst:
      'Onze dakwerkers kennen de actuele Mijn VerbouwPremie-bedragen en voorwaarden. Geen verrassingen achteraf — je weet vóór de werken hoeveel je netto betaalt.',
  },
  {
    titel: 'Materiaal aangepast aan ons klimaat',
    tekst:
      'Limburg heeft koude winters en steeds warmere zomers. Een lokale vakman kiest isolatiematerialen die hier al decennia bewijzen wat ze waard zijn — geen experimentele systemen die op papier mooi zijn maar in de praktijk falen.',
  },
  {
    titel: 'Erkenning en garantie',
    tekst:
      'De dakwerkers in ons netwerk zijn erkend (Bouwunie, Confederatie Bouw of gelijkwaardig) en geven 10-jarige aansprakelijkheid op het uitgevoerde werk, zoals wettelijk vereist. Ook vereist voor Mijn VerbouwPremie.',
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

const FAQ_DATA = [
  {
    vraag: 'Hoeveel isolatie moet ik aanbrengen?',
    antwoord:
      'De Vlaamse EPB-norm vraagt voor een dakrenovatie een u-waarde van maximaal 0,24 W/m²K (overeenkomend met R-waarde minimaal 4,5 m²K/W). In de praktijk betekent dit ongeveer 18-22 cm minerale wol of 12-16 cm PIR/PUR. Voor Mijn VerbouwPremie geldt dezelfde minimale R-waarde — minder isoleren betekent: geen premie.',
  },
  {
    vraag: 'Van binnen of van buiten isoleren — wat is beter?',
    antwoord:
      'Van binnen (tussen de kepers) is goedkoper en sneller — je verliest wel een beetje zolderhoogte. Van buiten (sarking-isolatie boven de kepers) is duurder maar geeft betere resultaten: geen koudebruggen, geen verlies van binnenruimte, je bestaande dakstructuur blijft volledig zichtbaar van binnen. Sarking is dé keuze bij een volledige dakrenovatie waar de pannen er toch af gaan.',
  },
  {
    vraag: 'Krijg ik premie als ik enkel mijn zoldervloer isoleer?',
    antwoord:
      'Ja. Mijn VerbouwPremie geldt zowel voor isolatie van het hellend dak (tussen kepers of sarking), van een plat dak, als van de zoldervloer. Voor onbenutte zolders is zoldervloer-isolatie vaak de slimste keuze: goedkoper, sneller, en het beperkt warmteverlies van de bewoonde verdiepingen. Voorwaarde blijft: minimale R-waarde van 4,5 en uitvoering door erkend aannemer.',
  },
  {
    vraag: 'Welk isolatiemateriaal is het beste?',
    antwoord:
      'Geen universele winnaar. Voor de meeste woningen in Limburg met een standaard hellend dak: minerale wol (glas- of rotswol) — beste prijs-kwaliteit, brandveilig, voldoende isolatiewaarde. PIR/PUR kies je als je weinig hoogte hebt of een plat dak van bovenaf isoleert. Cellulose-inblaas is uniek voor moeilijk bereikbare zolders. Je dakwerker kiest het beste materiaal voor jouw specifieke situatie tijdens de inmeting.',
  },
  {
    vraag: 'Hoe lang duurt dakisolatie aanbrengen?',
    antwoord:
      'Hellend dak van binnen met minerale wol: 1 à 3 dagen voor een gemiddelde woning. Zoldervloer met inblaas-cellulose: meestal 1 dag. Plat dak vernieuwen mét isolatie: 2 à 5 dagen. Sarking (van bovenaf, dak open): 1 à 2 weken. De meeste klanten kunnen tijdens de werken in de woning blijven.',
  },
  {
    vraag: 'Moet ik een dampscherm plaatsen?',
    antwoord:
      'Ja, in bijna alle gevallen. Een dampscherm voorkomt dat vocht uit de woning in de isolatie kan dringen — wat anders na enkele jaren leidt tot vermogensverlies, schimmel en zelfs houtrot in het gebinte. Een correcte dakwerker plaatst altijd een dampscherm, behalve bij specifieke open systemen die uitdrukkelijk zonder werken. Bespaar hier nooit op.',
  },
  {
    vraag: 'Kan ik mijn zolder bewoonbaar maken na isolatie?',
    antwoord:
      'Ja, dat is vaak een hoofdreden om te isoleren. Een geïsoleerde zolder met afwerking (bv. gyproc, OSB) wordt een volwaardige extra woonkamer of slaapkamer — kwestie van 8 tot 15 °C verschil met een ongeïsoleerde zolder. Vraag bij de inmeting expliciet naar deze optie, want het bepaalt de keuze van isolatiedikte en afwerking.',
  },
  {
    vraag: 'Verdien ik mijn dakisolatie terug? Op welke termijn?',
    antwoord:
      'Ja, en sneller dan je denkt. Een gemiddelde Limburgse woning met slecht of geen dakisolatie verliest €600 à €1.200 per jaar via het dak. Na isolatie daalt dat naar €100 à €300. Combinatie van energiebesparing + Mijn VerbouwPremie + verhoogde woningwaarde: terugverdientijd 5 à 8 jaar bij minerale wol, 6 à 10 jaar bij PIR. Daarna is alle besparing pure winst — gedurende 30+ jaar.',
  },
];

const PREMIE_1_PARS = [
  'Vlaanderens grootste isolatie-premie. Het bedrag hangt af van je inkomenscategorie en het type isolatie. Indicatieve bedragen voor 2026:',
];

const PREMIE_1_BEDRAGEN = [
  'Lage inkomenscategorie: tot €31 per m² geïsoleerd dak',
  'Middelste inkomenscategorie: €15 tot €23 per m²',
  'Hogere inkomenscategorie: €8 tot €12 per m²',
];

const PREMIE_1_SLOT =
  'Voorwaarden: woning ouder dan 15 jaar, isolatie aangebracht door erkende aannemer, R-waarde van minimaal 4,5 m²K/W (overeenkomend met u-waarde 0,22 of beter). Aanvragen via mijnverbouwpremie.be — altijd VÓÓR de start van de werken, anders verlies je het recht.';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Dakisolatie',
  name: 'Dakisolatie in Limburg',
  description:
    'Dakisolatie in Limburg met premie-begeleiding via Mijn VerbouwPremie. Hellend dak, plat dak en zoldervloer, uitgevoerd door erkende lokale dakwerkers volgens de Vlaamse EPB-normen.',
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
  url: 'https://dakwerklimburg.be/diensten/dakisolatie',
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

export default function DakisolatiePage() {
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
                Dakisolatie in Limburg — bespaar tot 30% op je energiefactuur met premie-begeleiding
              </h1>
              <p className="text-main text-lg leading-relaxed mb-8">
                Een slecht geïsoleerd dak is verantwoordelijk voor tot 30% van het warmteverlies van
                een woning. Dakisolatie verdien je terug via lagere energiefacturen — én via Mijn
                VerbouwPremie van Vlaanderen, die afhankelijk van je inkomen kan oplopen tot enkele
                duizenden euro&apos;s. Dakwerk Limburg verbindt je met erkende lokale dakwerkers die
                isoleren volgens de huidige Vlaamse EPB-normen, met premie-begeleiding inbegrepen.
                Vraag een vrijblijvende offerte aan en krijg binnen 24 uur reactie van een vakman uit
                jouw regio.
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://i.postimg.cc/WzJdf5P7/dakisolatie-kaart.jpg"
                  alt="Dakisolatie wordt aangebracht onder de pannen op een hellend dak in Limburg"
                  width={800}
                  height={600}
                  loading="eager"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            <div id="offerte-formulier">
              <LeadForm source="dakisolatie-hero" />
            </div>
          </div>
        </div>
      </section>

      <section id="signalen" className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            6 signalen dat je dak slecht geïsoleerd is
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
            welke isolatiemethode bij jouw woning past en hoeveel premie je kunt aanvragen. De
            Vlaamse norm vraagt vandaag een u-waarde van maximaal 0,24 W/m²K voor een dak — wie nu
            nog isoleert volgens oude normen, laat geld én comfort liggen.
          </p>
        </div>
      </section>

      <section id="materialen" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Welk isolatiemateriaal kies je?
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">Minerale wol (glas- of rotswol)</h3>
            <p className="text-main leading-relaxed mb-4">
              Glas- of rotswol is veruit het meest gebruikte isolatiemateriaal voor daken in
              Vlaanderen. Het komt in dekens of platen die tussen de kepers (dakbalken) of op de
              zoldervloer worden geplaatst. Eigenschappen:
            </p>
            <ul className="space-y-2">
              {MINERALE_WOL_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-3 text-main leading-relaxed">
                  <span className="text-accent font-bold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">PIR/PUR (harde schuimplaten)</h3>
            <p className="text-main leading-relaxed mb-4">
              PIR (polyisocyanuraat) en PUR (polyurethaan) zijn harde schuimplaten met de hoogste
              isolatiewaarde per centimeter dikte. Ideaal als ruimte schaars is. Eigenschappen:
            </p>
            <ul className="space-y-2">
              {PIR_PUR_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-3 text-main leading-relaxed">
                  <span className="text-accent font-bold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-3">Cellulose (inblaas-isolatie)</h3>
            <p className="text-main leading-relaxed mb-4">
              Cellulose is gerecycleerd papier dat tot vlokken wordt verwerkt en met een blaasmachine
              in lege ruimtes wordt aangebracht. Vooral interessant voor zoldervloer-isolatie en
              moeilijk bereikbare hoeken. Eigenschappen:
            </p>
            <ul className="space-y-2">
              {CELLULOSE_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-3 text-main leading-relaxed">
                  <span className="text-accent font-bold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-main leading-relaxed">
            Voor de meeste woningen in Limburg is minerale wol de beste prijs-kwaliteit-keuze, zeker
            bij een hellend dak met voldoende ruimte tussen de kepers. PIR/PUR kies je als je
            beperkte hoogte hebt of een plat dak isoleert van boven. Cellulose is dé oplossing voor
            onbenutte zolders waar je enkel de zoldervloer wil isoleren.
          </p>
        </div>
      </section>

      <section id="prijzen" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Wat kost dakisolatie in Limburg in 2026?
          </h2>
          <p className="text-main leading-relaxed mb-10">
            Prijzen verschillen sterk naargelang het isolatiemateriaal, de gewenste isolatiewaarde
            (R- of u-waarde), de bereikbaarheid en of je tegelijk afwerkt (gyproc, OSB-platen).
            Onderstaande ranges zijn indicatief en gebaseerd op recente offertes in Limburg in 2026,
            btw exclusief. Premies komen NA berekening van deze prijzen — kunnen je nettokost
            halveren.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              { titel: 'Hellend dak van binnen (tussen kepers)', items: PRIJZEN_HELLEND_BINNEN },
              { titel: 'Zoldervloer isoleren', items: PRIJZEN_ZOLDERVLOER },
              { titel: 'Plat dak isoleren (boven dakvloer)', items: PRIJZEN_PLAT_DAK },
              { titel: 'Sarking-isolatie (van buiten, boven kepers)', items: PRIJZEN_SARKING },
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
            Premie-impact: voor een gemiddelde inkomenscategorie krijg je via Mijn VerbouwPremie
            ongeveer €15 tot €31 per m² terug — wat snel optelt. Op een investering van €6.000 voor
            een hellend dak kan je €1.500 tot €3.000 premie ontvangen. Je dakwerker rekent dit voor
            in zijn offerte.
          </p>

          <div className="text-center">
            <ScrollToFormButton>Vraag je offerte aan</ScrollToFormButton>
          </div>
        </div>
      </section>

      <section id="premies" className="py-16 lg:py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Mijn VerbouwPremie en andere premies voor dakisolatie (2026)
          </h2>

          <div className="bg-white border-2 border-accent rounded-2xl p-8 shadow-md mb-8">
            <h3 className="text-2xl font-bold text-primary mb-3">
              1. Mijn VerbouwPremie (Vlaanderen) — de hoofdpremie
            </h3>
            {PREMIE_1_PARS.map((p, i) => (
              <p key={i} className="text-main leading-relaxed mb-4">
                {p}
              </p>
            ))}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {PREMIE_1_BEDRAGEN.map((b, i) => (
                <div
                  key={i}
                  className="bg-bg-alt rounded-xl p-5 border border-gray-200 text-center"
                >
                  <div className="text-sm font-semibold text-primary leading-snug">{b}</div>
                </div>
              ))}
            </div>
            <p className="text-main leading-relaxed">{PREMIE_1_SLOT}</p>
          </div>

          <div className="space-y-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                2. Verlaagd btw-tarief voor renovatie
              </h3>
              <p className="text-main leading-relaxed">
                Voor renovatiewerken aan oudere woningen (10+ jaar) geldt onder bepaalde voorwaarden
                een verlaagd btw-tarief in plaats van het standaardtarief van 21%. Voorwaarden via
                FOD Financiën — de aannemer past dit toe op de factuur. Op een isolatie-project van
                €6.000 scheelt dit al snel €900.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                3. EPB-conformiteit + woningwaarde
              </h3>
              <p className="text-main leading-relaxed">
                Bij dakisolatie volgens de huidige Vlaamse EPB-normen (u-waarde max 0,24 W/m²K) wordt
                je woning automatisch EPB-conform op het isolatie-aspect. Een geïsoleerd dak
                verhoogt de marktwaarde van een woning met ongeveer €5.000 tot €15.000 — bovenop de
                jaarlijkse besparing op je energiefactuur.
              </p>
            </div>
          </div>

          <p className="text-main leading-relaxed">
            Tip: laat de premie-aanvraag door je dakwerker verzorgen. De meeste erkende installateurs
            doen dit standaard mee, zonder extra kosten. Zij kennen de exacte voorwaarden en weten
            welke documenten nodig zijn. Je krijgt het premiebedrag rechtstreeks gestort, gemiddeld
            2 à 4 maanden na de werken.
          </p>
        </div>
      </section>

      <section id="proces" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center">
            Hoe verloopt dakisolatie aanbrengen — in 5 stappen
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
            Veelgestelde vragen over dakisolatie
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
          <h2 className="text-2xl font-bold text-primary mb-2 text-center">Meer lezen over dakisolatie</h2>
          <p className="text-sub text-sm text-center mb-6">Handige gidsen over EPC, premies en kosten in Limburg</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: 'EPC verbeteren met dakisolatie', href: '/kennis/epc-verbeteren-dakisolatie' },
              { label: 'Welke premies zijn er?', href: '/kennis/dakrenovatie-premie-limburg' },
              { label: 'Wat kost een dakrenovatie?', href: '/kennis/kosten-dakrenovatie-limburg' },
              { label: 'Wanneer dak vervangen?', href: '/kennis/wanneer-dak-vervangen' },
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
                Vraag een vrijblijvende offerte aan voor je dakisolatie
              </h2>
              <p className="text-main text-lg leading-relaxed">
                Vul het formulier in of bel rechtstreeks naar{' '}
                <a href="tel:+32456191360" className="text-accent font-bold hover:underline">
                  +32 456 19 13 60
                </a>
                . Binnen 24 uur krijg je contact van een lokale erkende dakwerker. Hij komt langs,
                meet op, berekent je premie via Mijn VerbouwPremie en stuurt je een offerte met
                netto-prijs (na premie). Geen tussenpersonen, geen verplichtingen — gewoon eerlijke
                informatie.
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
              <LeadForm source="dakisolatie-cta" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
