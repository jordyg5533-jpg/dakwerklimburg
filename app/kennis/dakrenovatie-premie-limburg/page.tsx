import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';
import LeadForm from '@/components/forms/LeadForm';

export const metadata: Metadata = {
  title: 'Dakrenovatie premie Limburg 2025 — Mijn VerbouwPremie & subsidies',
  description:
    'Welke premies zijn er voor dakrenovatie in Limburg? Mijn VerbouwPremie, gemeentepremies en energieleningen. Tot 30% terugbetaling op dakisolatie.',
  alternates: {
    canonical: 'https://dakwerklimburg.be/kennis/dakrenovatie-premie-limburg',
  },
  openGraph: {
    title: 'Dakrenovatie premie Limburg 2025 — Alle subsidies op een rij | Dakwerk Limburg',
    description:
      'Mijn VerbouwPremie, gemeentepremies en energieleningen voor dakrenovatie in Limburg. Tot 30% terugbetaling op dakisolatie.',
    type: 'article',
    url: 'https://dakwerklimburg.be/kennis/dakrenovatie-premie-limburg',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dakrenovatie premie Limburg 2025',
    description: 'Alle premies en subsidies voor dakrenovatie in Limburg op een rij.',
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dakrenovatie premie Limburg 2025 — Alle subsidies op een rij',
  description:
    'Welke premies zijn er voor dakrenovatie in Limburg? Mijn VerbouwPremie, gemeentepremies en energieleningen.',
  datePublished: '2025-05-07',
  dateModified: '2025-05-07',
  author: { '@type': 'Organization', name: 'Dakwerk Limburg' },
  publisher: {
    '@type': 'Organization',
    name: 'Dakwerk Limburg',
    url: 'https://dakwerklimburg.be',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel premie krijg ik voor dakisolatie in Limburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Via de Mijn VerbouwPremie krijgt u 20% tot 30% terug op de kosten van dakisolatie (afhankelijk van uw inkomen). Voor een investering van €5.000 is dat €1.000 tot €1.500. Sommige Limburgse gemeenten tellen daar nog een lokale premie bovenop.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik de premie aanvragen vóór of na de werken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De Mijn VerbouwPremie vraagt u aan na de werken, via mijnverbouwpremie.be. Maar uw dakwerker moet erkend zijn op het moment van uitvoering. Controleer dit altijd vooraf — een niet-erkende aannemer geeft geen recht op premie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik premies combineren voor mijn dakrenovatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, premies zijn cumuleerbaar. U kunt de Mijn VerbouwPremie combineren met een lokale gemeentepremie en een REG-premie van uw energieleverancier. De Fluvius energielening is ook te combineren. Vraag altijd alle premies tegelijk aan — dat bespaart het meeste.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke minimum isolatiewaarde is vereist voor de Mijn VerbouwPremie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor dakisolatie geldt een minimum R-waarde van 4,5 m²K/W voor hellende daken en 3,5 m²K/W voor platte daken. Uw dakwerker is verplicht de gebruikte materialen en R-waarde op de factuur te vermelden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Geldt de Mijn VerbouwPremie ook voor een plat dak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, maar alleen voor het isolatiedeel. De dakbedekking zelf (EPDM, PVC, bitumen) geeft geen recht op premie. Enkel de isolatiematerialen die voldoen aan de minimum R-waarde komen in aanmerking.',
      },
    },
  ],
};

const FAQ_ITEMS = [
  {
    q: 'Hoeveel premie krijg ik voor dakisolatie in Limburg?',
    a: 'Via de Mijn VerbouwPremie krijgt u 20% tot 30% terug op de kosten van dakisolatie (afhankelijk van uw inkomen). Voor een investering van €5.000 is dat €1.000 tot €1.500. Sommige Limburgse gemeenten tellen daar nog een lokale premie bovenop.',
  },
  {
    q: 'Moet ik de premie aanvragen vóór of na de werken?',
    a: 'De Mijn VerbouwPremie vraagt u aan na de werken, via mijnverbouwpremie.be. Maar uw dakwerker moet erkend zijn op het moment van uitvoering. Controleer dit altijd vooraf — een niet-erkende aannemer geeft geen recht op premie.',
  },
  {
    q: 'Kan ik premies combineren voor mijn dakrenovatie?',
    a: 'Ja, premies zijn cumuleerbaar. U kunt de Mijn VerbouwPremie combineren met een lokale gemeentepremie en een REG-premie van uw energieleverancier. De Fluvius energielening is ook te combineren. Vraag altijd alle premies tegelijk aan — dat bespaart het meeste.',
  },
  {
    q: 'Welke minimum isolatiewaarde is vereist voor de Mijn VerbouwPremie?',
    a: 'Voor dakisolatie geldt een minimum R-waarde van 4,5 m²K/W voor hellende daken en 3,5 m²K/W voor platte daken. Uw dakwerker is verplicht de gebruikte materialen en R-waarde op de factuur te vermelden.',
  },
  {
    q: 'Geldt de Mijn VerbouwPremie ook voor een plat dak?',
    a: 'Ja, maar alleen voor het isolatiedeel. De dakbedekking zelf (EPDM, PVC, bitumen) geeft geen recht op premie. Enkel de isolatiematerialen die voldoen aan de minimum R-waarde komen in aanmerking.',
  },
];

export default function PremieLimburgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-white">
        {/* Header */}
        <section className="bg-primary text-white py-10 lg:py-14">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-center gap-2 text-sm text-blue-300 mb-4">
              <Link href="/kennis" className="hover:text-white transition-colors">
                Kenniscentrum
              </Link>
              <span>/</span>
              <span className="text-white">Premies dakrenovatie</span>
            </div>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
              Premies & Subsidies
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Dakrenovatie premie Limburg 2025<br />
              <span className="text-accent">Alle subsidies op een rij</span>
            </h1>
            <p className="text-blue-200 mt-4 text-lg">
              8 min leestijd · Bijgewerkt mei 2025
            </p>
          </div>
        </section>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-6 py-10 lg:py-14">

          <p className="text-main text-lg leading-relaxed mb-8">
            Wie zijn dak renoveert in Limburg hoeft dat niet volledig uit eigen zak te betalen. Via de Vlaamse overheid, uw gemeente en uw energieleverancier zijn er meerdere premies en tegemoetkomingen beschikbaar — maar u moet weten waar u ze vindt en hoe u ze combineert. Dit artikel geeft u het volledige overzicht.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            De Mijn VerbouwPremie — de belangrijkste premie
          </h2>
          <p className="text-main leading-relaxed mb-4">
            De <strong>Mijn VerbouwPremie</strong> is de Vlaamse renovatiepremie die de vorige Renovatiepremie en de Verbouwpremie vervangt. Het is de meest toegankelijke en waardevolste premie voor dakwerken in Limburg.
          </p>

          <div className="bg-background rounded-xl p-6 border border-gray-100 mb-6">
            <h3 className="font-bold text-primary mb-4">In een notendop</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-sub mb-1">Wie?</p>
                <p className="text-main font-medium">Eigenaar-bewoner van een woning ouder dan 5 jaar</p>
              </div>
              <div>
                <p className="text-sub mb-1">Hoeveel?</p>
                <p className="text-main font-medium">20% (standaard) of 30% (laag inkomen)</p>
              </div>
              <div>
                <p className="text-sub mb-1">Maximum bedrag?</p>
                <p className="text-main font-medium">€15.000 per woning over 5 jaar</p>
              </div>
              <div>
                <p className="text-sub mb-1">Wanneer aanvragen?</p>
                <p className="text-main font-medium">Na de werken, binnen 1 jaar via mijnverbouwpremie.be</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-primary mb-3">
            Wat komt in aanmerking voor dakwerken?
          </h3>
          <p className="text-main leading-relaxed mb-3">
            Niet alle dakwerken geven recht op premie — alleen werken die de energie-efficiëntie verbeteren:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Dakisolatie langs buiten (sarking) of langs binnen — mits minimum R-waarde van 4,5 voor hellend dak',
              'Plat dak isolatie — mits minimum R-waarde van 3,5',
              'De onderdakfolie en het isolatiemateriaal zijn subsidieerbaar, de dakbedekking zelf niet',
              'Erkende aannemer verplicht — vraag altijd het erkenningsnummer op vóór u tekent',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-main text-sm">
                <span className="h-5 w-5 rounded-full bg-accent text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-5 mb-10">
            <p className="text-main text-sm leading-relaxed">
              <strong>Rekenvoorbeeld:</strong> Dakisolatie voor een woning in Hasselt kost €6.000 (materiaal + arbeid). Met de standaardpremie (20%) krijgt u <strong>€1.200</strong> terug. Met het lage inkomen tarief (30%) is dat <strong>€1.800</strong>. Combineer dit met de lokale gemeentepremie en REG-premie voor maximaal voordeel.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Lokale gemeentepremies in Limburg
          </h2>
          <p className="text-main leading-relaxed mb-4">
            Verschillende Limburgse gemeenten bieden naast de Vlaamse premie een aanvullende lokale tegemoetkoming. De bedragen en voorwaarden variëren sterk per gemeente.
          </p>
          <div className="overflow-x-auto mb-8 rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Gemeente</th>
                  <th className="text-left px-4 py-3 font-semibold">Type premie</th>
                  <th className="text-left px-4 py-3 font-semibold">Meer info</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { city: 'Hasselt', info: 'Woonpremie via energiehuis', url: 'hasselt.be' },
                  { city: 'Genk', info: 'Duurzaam wonen premie', url: 'genk.be' },
                  { city: 'Sint-Truiden', info: 'Gemeentelijke renovatiepremie', url: 'sint-truiden.be' },
                  { city: 'Tongeren', info: 'Woonkwaliteitspremie', url: 'tongeren.be' },
                  { city: 'Beringen', info: 'Duurzaam wonen subsidie', url: 'beringen.be' },
                  { city: 'Lommel', info: 'Energiepremie lokaal', url: 'lommel.be' },
                ].map((row) => (
                  <tr key={row.city} className="odd:bg-white even:bg-background">
                    <td className="px-4 py-3 font-medium text-primary">{row.city}</td>
                    <td className="px-4 py-3 text-main">{row.info}</td>
                    <td className="px-4 py-3 text-sub">www.{row.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sub text-sm mb-8">
            Controleer altijd de actuele voorwaarden via <strong>premiezoeker.be</strong> — premies kunnen wijzigen per legislatuur.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Fluvius energielening — 0% rente
          </h2>
          <p className="text-main leading-relaxed mb-4">
            Voor bewoners met een laag of bescheiden inkomen biedt het Energiehuis een goedkope lening aan om energiebesparende werken te financieren — inclusief dakisolatie.
          </p>
          <ul className="space-y-2 mb-8">
            {[
              'Rentevoet: 0% of 1% afhankelijk van uw inkomen',
              'Maximumbedrag: €15.000 voor dakisolatie',
              'Looptijd: tot 10 jaar',
              'Via uw lokaal energiehuis (per regio in Limburg)',
              'Combineerbaar met de Mijn VerbouwPremie',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-main text-sm">
                <span className="text-accent font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            REG-premie van uw energieleverancier
          </h2>
          <p className="text-main leading-relaxed mb-6">
            Energieleveranciers zoals Luminus, Eneco, Fluvius en TotalEnergies zijn verplicht om REG-premies (Rationeel Energiegebruik) uit te keren voor isolatiewerken. Bij dakisolatie bedraagt deze premie doorgaans <strong>€3 tot €10 per m²</strong> isolatie. Uw erkende dakwerker kan deze premie automatisch aanvragen als hij bij het systeem is aangesloten — vraag dit na bij de offerte.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Hoe maximaliseert u uw premies? Stappenplan
          </h2>
          <ol className="space-y-4 mb-8">
            {[
              {
                stap: 'Stap 1: Controleer of uw dakwerker erkend is',
                text: 'Een erkenning is verplicht voor de Mijn VerbouwPremie. Vraag het erkenningsnummer op en verifieer via economie.fgov.be.',
              },
              {
                stap: 'Stap 2: Laat de factuur correct opstellen',
                text: 'De factuur moet de R-waarde van de isolatie, het gebruikte materiaal en de oppervlakte vermelden. Zonder deze gegevens kan de premie geweigerd worden.',
              },
              {
                stap: 'Stap 3: Vraag de REG-premie aan bij uw leverancier',
                text: 'Doe dit tegelijk met de opdracht aan uw dakwerker. Sommige dakwerkers regelen dit automatisch — vraag het na.',
              },
              {
                stap: 'Stap 4: Dien de Mijn VerbouwPremie in na de werken',
                text: 'Log in op mijnverbouwpremie.be met uw eID, laad de facturen op en dien de aanvraag in. U heeft 1 jaar de tijd na de factuurdatum.',
              },
              {
                stap: 'Stap 5: Controleer de gemeentepremie',
                text: 'Ga naar de website van uw gemeente of zoek via premiezoeker.be. Sommige premies moeten aangevraagd worden vóór de werken starten.',
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="h-7 w-7 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-primary text-sm">{item.stap}</p>
                  <p className="text-main text-sm leading-relaxed mt-1">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Veelgestelde vragen over premies dakrenovatie Limburg
          </h2>
          <Accordion type="single" collapsible className="mb-10">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-primary font-semibold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-main leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex flex-wrap gap-3 text-sm text-sub pt-6 border-t border-gray-100">
            <span>Gerelateerd:</span>
            <Link href="/diensten/dakisolatie" className="text-accent hover:underline">
              Dakisolatie Limburg
            </Link>
            <Link href="/diensten/dakrenovatie" className="text-accent hover:underline">
              Dakrenovatie
            </Link>
            <Link href="/kennis/kosten-dakrenovatie-limburg" className="text-accent hover:underline">
              Kosten dakrenovatie
            </Link>
          </div>
        </article>

        {/* CTA */}
        <section className="bg-primary py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-3">
                  Maximale premies voor uw dakproject
                </h2>
                <p className="text-blue-200 leading-relaxed">
                  Een erkende dakwerker in Limburg helpt u automatisch met de premieaanvraag. Vraag een gratis offerte aan en ontvang binnen 24 uur een antwoord.
                </p>
              </div>
              <LeadForm source="kennis-premie-dakrenovatie" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
