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
  title: 'Kosten dakrenovatie Limburg 2025 — Prijsgids per m²',
  description:
    'Wat kost een dakrenovatie in Limburg? Actuele prijzen per m² voor hellend dak, plat dak en dakisolatie — inclusief premies en bespaartips.',
  alternates: {
    canonical: 'https://dakwerklimburg.be/kennis/kosten-dakrenovatie-limburg',
  },
  openGraph: {
    title: 'Kosten dakrenovatie Limburg 2025 — Prijsgids per m² | Dakwerk Limburg',
    description:
      'Actuele prijzen per m² voor hellend dak, plat dak en dakisolatie in Limburg. Inclusief premies en bespaartips.',
    type: 'article',
    url: 'https://dakwerklimburg.be/kennis/kosten-dakrenovatie-limburg',
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kosten dakrenovatie Limburg 2025 — Prijsgids',
    description: 'Actuele prijzen per m² voor hellend dak, plat dak en dakisolatie in Limburg.',
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wat kost een dakrenovatie in Limburg? Prijsgids 2025',
  description:
    'Actuele prijzen per m² voor hellend dak, plat dak en dakisolatie in Limburg — inclusief premies en bespaartips.',
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
      name: 'Wat kost een dakrenovatie per m² in Limburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een hellend dak met dakpannen rekent u gemiddeld €80 tot €130 per m². Bij leien loopt dat op tot €120-€220/m². Een plat dak met EPDM of PVC kost doorgaans €60 tot €120 per m², dakisolatie apart €25 tot €60/m².',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kost een volledige dakrenovatie van een rijtjeswoning in Limburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een gemiddelde rijtjeswoning in Limburg heeft een dakoppervlak van 80 tot 120 m². Een volledige renovatie inclusief isolatie kost dan algauw €12.000 tot €22.000. Bij een grotere woning of bij gebruik van leien kan dat oplopen tot €35.000 of meer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk BTW-tarief geldt er voor dakrenovatie in Limburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor woningen die ouder zijn dan 10 jaar geldt het verlaagd BTW-tarief van 6% op de arbeidskosten. De materialen blijven onderworpen aan 21% BTW. Dit verschil kan u honderden euro\'s besparen — vraag uw dakwerker altijd om een gesplitste factuur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is goedkoper: nu renoveren of nog een jaar wachten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een verzwakt dak wachten kost u meer: een kleine lekkage kan leiden tot waterschade aan muren, isolatie en elektriciteit. De herstelling van gevolgschade is vaak duurder dan de renovatie zelf. Bovendien stijgen materiaalprijzen gemiddeld 3 tot 5% per jaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik de kosten van een dakrenovatie spreiden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Via de Fluvius energielening kunt u tot €15.000 lenen aan 0% rente voor dakisolatie. Sommige dakwerkers bieden ook gespreide betaling aan. Vraag dit altijd na bij uw offerte.',
      },
    },
  ],
};

const FAQ_ITEMS = [
  {
    q: 'Wat kost een dakrenovatie per m² in Limburg?',
    a: 'Voor een hellend dak met dakpannen rekent u gemiddeld €80 tot €130 per m². Bij leien loopt dat op tot €120-€220/m². Een plat dak met EPDM of PVC kost doorgaans €60 tot €120 per m², dakisolatie apart €25 tot €60/m².',
  },
  {
    q: 'Hoeveel kost een volledige dakrenovatie van een rijtjeswoning in Limburg?',
    a: 'Een gemiddelde rijtjeswoning in Limburg heeft een dakoppervlak van 80 tot 120 m². Een volledige renovatie inclusief isolatie kost dan algauw €12.000 tot €22.000. Bij een grotere woning of bij gebruik van leien kan dat oplopen tot €35.000 of meer.',
  },
  {
    q: 'Welk BTW-tarief geldt er voor dakrenovatie in Limburg?',
    a: 'Voor woningen die ouder zijn dan 10 jaar geldt het verlaagd BTW-tarief van 6% op de arbeidskosten. De materialen blijven onderworpen aan 21% BTW. Dit verschil kan u honderden euro\'s besparen — vraag uw dakwerker altijd om een gesplitste factuur.',
  },
  {
    q: 'Wat is goedkoper: nu renoveren of nog een jaar wachten?',
    a: 'Een verzwakt dak wachten kost u meer: een kleine lekkage kan leiden tot waterschade aan muren, isolatie en elektriciteit. De herstelling van gevolgschade is vaak duurder dan de renovatie zelf. Bovendien stijgen materiaalprijzen gemiddeld 3 tot 5% per jaar.',
  },
  {
    q: 'Kan ik de kosten van een dakrenovatie spreiden?',
    a: 'Ja. Via de Fluvius energielening kunt u tot €15.000 lenen aan 0% rente voor dakisolatie. Sommige dakwerkers bieden ook gespreide betaling aan. Vraag dit altijd na bij uw offerte.',
  },
];

export default function KostenDakrenovatiePage() {
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
              <span className="text-white">Kosten dakrenovatie</span>
            </div>
            <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
              Prijzen & Budget
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Wat kost een dakrenovatie in Limburg?<br />
              <span className="text-accent">Prijsgids 2025</span>
            </h1>
            <p className="text-blue-200 mt-4 text-lg">
              7 min leestijd · Bijgewerkt mei 2025
            </p>
          </div>
        </section>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-6 py-10 lg:py-14">

          <p className="text-main text-lg leading-relaxed mb-8">
            Een dakrenovatie is een van de grootste investeringen die u als huiseigenaar kunt doen. De prijs hangt af van tientallen factoren — en dat maakt het moeilijk om online een eerlijk richtcijfer te vinden. In dit artikel geven we u de actuele prijzen voor Limburg, uitgesplitst per type dak en per materiaal, zodat u weet wat u kunt verwachten vóór u een dakwerker belt.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Gemiddelde kosten dakrenovatie Limburg 2025
          </h2>
          <p className="text-main leading-relaxed mb-6">
            De onderstaande prijzen zijn indicatief en inclusief materialen en plaatsing, exclusief BTW (zie verder voor het toepasselijke tarief). Ze zijn gebaseerd op actuele offertes van dakwerkers actief in Limburg.
          </p>

          <h3 className="text-xl font-bold text-primary mb-3">Hellend dak</h3>
          <div className="overflow-x-auto mb-8 rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Type dakbedekking</th>
                  <th className="text-left px-4 py-3 font-semibold">Prijs per m²</th>
                  <th className="text-left px-4 py-3 font-semibold">Levensduur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-4 py-3 text-main">Dakpannen (beton of klei)</td>
                  <td className="px-4 py-3 font-semibold text-primary">€80 – €130</td>
                  <td className="px-4 py-3 text-sub">40 – 60 jaar</td>
                </tr>
                <tr className="bg-background">
                  <td className="px-4 py-3 text-main">Leien (kunstleien)</td>
                  <td className="px-4 py-3 font-semibold text-primary">€120 – €180</td>
                  <td className="px-4 py-3 text-sub">50 – 80 jaar</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-main">Leien (natuurleien)</td>
                  <td className="px-4 py-3 font-semibold text-primary">€170 – €220</td>
                  <td className="px-4 py-3 text-sub">80 – 100+ jaar</td>
                </tr>
                <tr className="bg-background">
                  <td className="px-4 py-3 text-main">Dakisolatie (extra)</td>
                  <td className="px-4 py-3 font-semibold text-primary">€25 – €60</td>
                  <td className="px-4 py-3 text-sub">permanent</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-primary mb-3">Plat dak</h3>
          <div className="overflow-x-auto mb-8 rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Type dakbedekking</th>
                  <th className="text-left px-4 py-3 font-semibold">Prijs per m²</th>
                  <th className="text-left px-4 py-3 font-semibold">Levensduur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-4 py-3 text-main">EPDM (rubber)</td>
                  <td className="px-4 py-3 font-semibold text-primary">€50 – €80</td>
                  <td className="px-4 py-3 text-sub">30 – 50 jaar</td>
                </tr>
                <tr className="bg-background">
                  <td className="px-4 py-3 text-main">PVC</td>
                  <td className="px-4 py-3 font-semibold text-primary">€60 – €90</td>
                  <td className="px-4 py-3 text-sub">20 – 35 jaar</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-main">Bitumen (2-laags)</td>
                  <td className="px-4 py-3 font-semibold text-primary">€40 – €70</td>
                  <td className="px-4 py-3 text-sub">15 – 25 jaar</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-5 mb-10">
            <p className="text-main text-sm leading-relaxed">
              <strong>Praktijkvoorbeeld:</strong> Een Limburgse rijtjeswoning met een hellend dak van 90 m² aan dakpannen + isolatie kost gemiddeld <strong>€13.500 tot €17.000</strong> all-in. Met de Mijn VerbouwPremie (zie{' '}
              <Link href="/kennis/dakrenovatie-premie-limburg" className="text-accent underline">
                premies-artikel
              </Link>
              ) kunt u tot €3.000 à €4.500 terugkrijgen.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Wat bepaalt de prijs van uw dakrenovatie?
          </h2>
          <p className="text-main leading-relaxed mb-4">
            Twee woningen met hetzelfde dakoppervlak kunnen een sterk verschillende prijs hebben. Dit zijn de vijf belangrijkste factoren:
          </p>
          <ul className="space-y-4 mb-8">
            {[
              {
                title: '1. Oppervlak en dakvorm',
                text: 'Een groter dak kost meer, maar de prijs per m² daalt vaak bij grotere oppervlakken. Complexe vormen (hoekkepers, dakkapellen, lucarnes) verhogen de arbeidsuren aanzienlijk.',
              },
              {
                title: '2. Staat van de dakstructuur',
                text: 'Als de dakspanten, gordingen of onderdakfolie ook vervangen moeten worden, stijgt de kostprijs met €15 tot €40 per m² extra. Een vochtscreening vooraf kan verrassingen vermijden.',
              },
              {
                title: '3. Toegankelijkheid van het dak',
                text: 'Een steil dak of een dak langs een smalle straat vereist extra steigerwerk en veiligheidsuitrusting. Reken €5 tot €20 per m² meerprijs voor moeilijk bereikbare daken.',
              },
              {
                title: '4. Gekozen materiaal',
                text: 'Dakpannen in beton zijn goedkoper dan klei, kunstleien zijn goedkoper dan natuurleien. Het kwaliteitsverschil in levensduur is reëel — overleg met uw dakwerker welk materiaal het beste past bij uw woning.',
              },
              {
                title: '5. BTW-tarief',
                text: 'Voor woningen ouder dan 10 jaar geldt 6% BTW op arbeidskosten (21% op materialen). Voor nieuwbouwwoningen of woningen jonger dan 10 jaar geldt 21% op alles. Vraag altijd een gesplitste factuur.',
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="h-6 w-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.title.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-primary text-sm">{item.title}</p>
                  <p className="text-main text-sm leading-relaxed mt-1">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Gedeeltelijke of volledige renovatie?
          </h2>
          <p className="text-main leading-relaxed mb-4">
            Niet elk dakprobleem vereist een volledige renovatie. Hier is het praktische onderscheid:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="border border-gray-100 rounded-xl p-5 bg-background">
              <h3 className="font-bold text-primary mb-2">Gedeeltelijke renovatie</h3>
              <p className="text-sub text-sm mb-3">€1.500 – €8.000</p>
              <ul className="space-y-1 text-sm text-main">
                <li>• Losse of gebroken pannen vervangen</li>
                <li>• Dakgoten en zinkwerk vernieuwen</li>
                <li>• Specifieke zone herstellen na stormschade</li>
                <li>• Dakisolatie aanbrengen langs binnenzijde</li>
              </ul>
            </div>
            <div className="border border-accent/40 rounded-xl p-5 bg-accent/5">
              <h3 className="font-bold text-primary mb-2">Volledige renovatie</h3>
              <p className="text-sub text-sm mb-3">€10.000 – €50.000+</p>
              <ul className="space-y-1 text-sm text-main">
                <li>• Dak ouder dan 35-40 jaar</li>
                <li>• Beschadigde dakstructuur</li>
                <li>• Isolatie + dakbedekking in één beweging</li>
                <li>• Verbouwing of uitbreiding van de woning</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            5 tips om te besparen op uw dakrenovatie
          </h2>
          <ol className="space-y-3 mb-8">
            {[
              'Vraag minstens 3 offertes aan. De prijsverschillen tussen dakwerkers in Limburg kunnen 20 tot 30% bedragen voor hetzelfde werk.',
              'Combineer dakisolatie met de renovatie. Samen uitvoeren is goedkoper dan in twee aparte fases — en u heeft maar één keer steigerwerk.',
              'Vraag uw premies aan vóór de werken starten. De Mijn VerbouwPremie moet aangevraagd worden na de werken, maar uw dakwerker moet erkend zijn op het moment van uitvoering.',
              'Werk in het laagseizoen. Dakwerkers zijn in het najaar en de winter soms beschikbaarder en soms bereid tot onderhandelen over de prijs.',
              'Controleer het 6%-BTW-tarief. Zorg dat uw factuur gesplitst is in arbeid (6%) en materialen (21%) als uw woning ouder is dan 10 jaar.',
            ].map((tip, i) => (
              <li key={i} className="flex gap-3 text-main text-sm leading-relaxed">
                <span className="h-6 w-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {tip}
              </li>
            ))}
          </ol>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            Veelgestelde vragen over dakrenovatiekosten
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
            <Link href="/diensten/dakrenovatie" className="text-accent hover:underline">
              Dakrenovatie Limburg
            </Link>
            <Link href="/diensten/dakisolatie" className="text-accent hover:underline">
              Dakisolatie
            </Link>
            <Link href="/kennis/dakrenovatie-premie-limburg" className="text-accent hover:underline">
              Premies dakrenovatie
            </Link>
          </div>
        </article>

        {/* CTA */}
        <section className="bg-primary py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-3">
                  Wat kost uw dakproject specifiek?
                </h2>
                <p className="text-blue-200 leading-relaxed">
                  Elke woning is anders. Vraag een gratis offerte aan en ontvang een eerlijke prijs van een erkende dakwerker in uw regio — binnen 24 uur.
                </p>
              </div>
              <LeadForm source="kennis-kosten-dakrenovatie" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
