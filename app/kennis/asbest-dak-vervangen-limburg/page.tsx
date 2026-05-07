import type { Metadata } from 'next';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';
import LeadForm from '@/components/forms/LeadForm';

export const metadata: Metadata = {
  title: 'Asbest dak vervangen Limburg — Kosten, regels en premies 2025',
  description: 'Asbestdak vervangen in Limburg? Alles over de wettelijke verplichtingen, erkende verwijderaars, kosten en premies. Inclusief de asbestdeadline 2032.',
  alternates: { canonical: 'https://dakwerklimburg.be/kennis/asbest-dak-vervangen-limburg' },
  openGraph: {
    title: 'Asbest dak vervangen Limburg — Kosten, regels & premies 2025 | Dakwerk Limburg',
    description: 'Wettelijke verplichtingen, erkende verwijderaars, kosten en premies voor asbestverwijdering in Limburg.',
    type: 'article', url: 'https://dakwerklimburg.be/kennis/asbest-dak-vervangen-limburg', images: DEFAULT_OG_IMAGES,
  },
  twitter: { card: 'summary_large_image', title: 'Asbest dak vervangen Limburg 2025', description: 'Kosten, regels en premies voor asbestverwijdering in Limburg.', images: DEFAULT_TWITTER_IMAGES },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Asbest dak vervangen in Limburg: regels, kosten en premies (2025)',
  datePublished: '2025-05-07', dateModified: '2025-05-07',
  author: { '@type': 'Organization', name: 'Dakwerk Limburg' },
  publisher: { '@type': 'Organization', name: 'Dakwerk Limburg', url: 'https://dakwerklimburg.be' },
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Moet ik mijn asbestdak verplicht verwijderen?', acceptedAnswer: { '@type': 'Answer', text: 'Hechtgebonden asbest (zoals golfplaten op een dak) mag u op dit moment nog laten zitten als het in goede staat is. Maar vanaf 2032 moeten alle niet-hechtgebonden asbestmaterialen verwijderd zijn. Bij verkoop van uw woning is een asbestattest verplicht.' } },
    { '@type': 'Question', name: 'Is een asbestdak gevaarlijk?', acceptedAnswer: { '@type': 'Answer', text: 'Hechtgebonden asbest dat intact is en niet beschadigd, stelt geen onmiddellijk gevaar. Het risico ontstaat bij breuk, boren, zagen of slijten — dan komen asbestvezels vrij die ingeademd kunnen worden. Een verouderd, bros asbestdak is wél gevaarlijk.' } },
    { '@type': 'Question', name: 'Wat kost een asbestdak verwijderen in Limburg?', acceptedAnswer: { '@type': 'Answer', text: 'De verwijdering van een asbestdak kost tussen €15 en €35 per m², afhankelijk van de staat en toegankelijkheid. Een gemiddeld garagedak of bijgebouw van 50 m² kost dus €750 tot €1.750 voor de verwijdering alleen. Daarna komt de nieuwe dakbedekking bovenop.' } },
    { '@type': 'Question', name: 'Moet ik een erkend bedrijf inschakelen voor asbestverwijdering?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, voor professionele verwijdering is een erkend asbestverwijderingsbedrijf verplicht. Kleine hoeveelheden hechtgebonden asbest (< 50 m²) mag u als particulier zelf verwijderen met de juiste beschermingsmiddelen, maar het correct afvoeren en storten is ook dan wettelijk gereglementeerd.' } },
    { '@type': 'Question', name: 'Is er premie voor asbestverwijdering in Limburg?', acceptedAnswer: { '@type': 'Answer', text: 'Ovam biedt via bepaalde kanalen subsidies voor asbestverwijdering. Daarnaast kunt u via de Mijn VerbouwPremie premie krijgen op de nieuwe dakisolatie die na de verwijdering geplaatst wordt. Sommige gemeenten hebben ook een lokale asbestpremie — check premiezoeker.be.' } },
  ],
};

const FAQ_ITEMS = [
  { q: 'Moet ik mijn asbestdak verplicht verwijderen?', a: 'Hechtgebonden asbest (zoals golfplaten op een dak) mag u op dit moment nog laten zitten als het in goede staat is. Maar vanaf 2032 moeten alle niet-hechtgebonden asbestmaterialen verwijderd zijn. Bij verkoop van uw woning is een asbestattest verplicht.' },
  { q: 'Is een asbestdak gevaarlijk?', a: 'Hechtgebonden asbest dat intact is en niet beschadigd, stelt geen onmiddellijk gevaar. Het risico ontstaat bij breuk, boren, zagen of slijten — dan komen asbestvezels vrij die ingeademd kunnen worden. Een verouderd, bros asbestdak is wél gevaarlijk.' },
  { q: 'Wat kost een asbestdak verwijderen in Limburg?', a: 'De verwijdering van een asbestdak kost tussen €15 en €35 per m², afhankelijk van de staat en toegankelijkheid. Een gemiddeld garagedak of bijgebouw van 50 m² kost dus €750 tot €1.750 voor de verwijdering alleen. Daarna komt de nieuwe dakbedekking bovenop.' },
  { q: 'Moet ik een erkend bedrijf inschakelen voor asbestverwijdering?', a: 'Ja, voor professionele verwijdering is een erkend asbestverwijderingsbedrijf verplicht. Kleine hoeveelheden hechtgebonden asbest (< 50 m²) mag u als particulier zelf verwijderen met de juiste beschermingsmiddelen, maar het correct afvoeren en storten is ook dan wettelijk gereglementeerd.' },
  { q: 'Is er premie voor asbestverwijdering in Limburg?', a: 'Ovam biedt via bepaalde kanalen subsidies voor asbestverwijdering. Daarnaast kunt u via de Mijn VerbouwPremie premie krijgen op de nieuwe dakisolatie die na de verwijdering geplaatst wordt. Sommige gemeenten hebben ook een lokale asbestpremie — check premiezoeker.be.' },
];

export default function AsbestDakPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="bg-white">
        <section className="bg-primary text-white py-10 lg:py-14">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-center gap-2 text-sm text-blue-300 mb-4">
              <Link href="/kennis" className="hover:text-white transition-colors">Kenniscentrum</Link>
              <span>/</span><span className="text-white">Asbest dak vervangen</span>
            </div>
            <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">Asbest & Veiligheid</span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Asbest dak vervangen in Limburg<br /><span className="text-accent">Regels, kosten en premies 2025</span>
            </h1>
            <p className="text-blue-200 mt-4 text-lg">7 min leestijd · Bijgewerkt mei 2025</p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 py-10 lg:py-14">
          <p className="text-main text-lg leading-relaxed mb-8">
            Limburg heeft een groot aantal woningen en bijgebouwen met een asbestdak — een erfenis van de naoorlogse bouwgolf in de mijnstreek. Golfplaten van asbestcement waren goedkoop en duurzaam, maar brengen gezondheidsrisico's met zich mee. Wie een asbestdak heeft, moet steeds meer rekening houden met wettelijke verplichtingen en naderende deadlines.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Wat is een asbestdak?</h2>
          <p className="text-main leading-relaxed mb-4">
            De meest voorkomende asbestdaken in Limburg zijn <strong>golfplaten van asbestcement</strong> (ook "eternit" of "asbestleien" genoemd). Deze werden massaal gebruikt van de jaren '50 tot de jaren '80 voor garages, stallen, opslagruimten en sommige woonhuizen. U herkent ze aan de geribbelde, grijsgroene platen.
          </p>
          <p className="text-main leading-relaxed mb-6">
            Naast golfplaten bestaat ook asbest in dakleien, vloerbekledingen en isolatiemateriaal. Dit artikel focust op het asbestdak — de meest voorkomende situatie in Limburg.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 mb-8">
            <p className="font-bold text-amber-800 mb-1">Wettelijke deadline: 2032</p>
            <p className="text-amber-900 text-sm leading-relaxed">
              Vlaanderen wil tegen 2040 asbestvrij zijn. Niet-hechtgebonden asbest moet verwijderd zijn voor 2032. Bij verkoop van uw woning is een <strong>asbestattest</strong> verplicht sinds november 2022. Dit attest inventariseert alle asbestmaterialen in de woning.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Is uw asbestdak gevaarlijk?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <h3 className="font-bold text-green-800 mb-2 text-sm">Minder gevaarlijk</h3>
              <ul className="space-y-1 text-sm text-main">
                <li>✓ Intact en onbeschadigd</li>
                <li>✓ Geen barsten of afbladderen</li>
                <li>✓ Niet bewerkt (boren, zagen)</li>
                <li>✓ Bedekt met coating of verf</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <h3 className="font-bold text-red-800 mb-2 text-sm">Gevaarlijk — direct handelen</h3>
              <ul className="space-y-1 text-sm text-main">
                <li>✗ Gebarsten of afgebrokkeld</li>
                <li>✗ Mos of algen die vezels losmaken</li>
                <li>✗ Beschadigd na stormschade</li>
                <li>✗ Ouder dan 40 jaar</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Kosten asbestdak vervangen in Limburg</h2>
          <div className="overflow-x-auto mb-6 rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Werk</th>
                  <th className="text-left px-4 py-3 font-semibold">Prijs per m²</th>
                  <th className="text-left px-4 py-3 font-semibold">Voorbeeld 50 m²</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { werk: 'Asbestverwijdering (erkend bedrijf)', prijs: '€15 – €35', voorbeeld: '€750 – €1.750' },
                  { werk: 'Asbeststort (container + verwerking)', prijs: '€5 – €10', voorbeeld: '€250 – €500' },
                  { werk: 'Nieuwe dakbedekking (EPDM/pannen)', prijs: '€50 – €130', voorbeeld: '€2.500 – €6.500' },
                  { werk: 'Dakisolatie (optioneel, aanbevolen)', prijs: '€25 – €60', voorbeeld: '€1.250 – €3.000' },
                ].map((row) => (
                  <tr key={row.werk} className="odd:bg-white even:bg-background">
                    <td className="px-4 py-3 text-main">{row.werk}</td>
                    <td className="px-4 py-3 font-semibold text-primary">{row.prijs}</td>
                    <td className="px-4 py-3 text-sub">{row.voorbeeld}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sub text-sm mb-8">Totale kostprijs voor een garage van 50 m² incl. isolatie: circa <strong>€4.750 – €11.750</strong>. Verwijdering + nieuwe dakbedekking zonder isolatie: <strong>€3.500 – €8.750</strong>.</p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Premies voor asbestverwijdering</h2>
          <ul className="space-y-3 mb-8">
            {[
              { titel: 'OVAM asbestattest', tekst: 'Het asbestattest is verplicht bij verkoop. De kosten (€200-€400) zijn aftrekbaar als u de woning verkoopt.' },
              { titel: 'Mijn VerbouwPremie', tekst: 'Op de nieuwe dakisolatie die na verwijdering wordt geplaatst krijgt u 20-30% premie terug. De verwijdering zelf is niet premieerbaar.' },
              { titel: 'Lokale gemeentepremies', tekst: 'Sommige Limburgse gemeenten bieden een subsidie voor asbestinventarisatie of -verwijdering. Check via premiezoeker.be of de website van uw gemeente.' },
              { titel: '6% BTW op arbeid', tekst: 'Voor woningen ouder dan 10 jaar geldt 6% BTW op de arbeidskosten van verwijdering en nieuwe dakwerken.' },
            ].map((item) => (
              <li key={item.titel} className="flex gap-3 p-4 bg-background rounded-xl border border-gray-100">
                <span className="text-accent font-bold text-lg flex-shrink-0">€</span>
                <div><p className="font-semibold text-primary text-sm">{item.titel}</p><p className="text-main text-sm leading-relaxed mt-1">{item.tekst}</p></div>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Veelgestelde vragen over asbestdaken</h2>
          <Accordion type="single" collapsible className="mb-10">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-primary font-semibold">{item.q}</AccordionTrigger>
                <AccordionContent className="text-main leading-relaxed">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex flex-wrap gap-3 text-sm text-sub pt-6 border-t border-gray-100">
            <span>Gerelateerd:</span>
            <Link href="/diensten/dakrenovatie" className="text-accent hover:underline">Dakrenovatie Limburg</Link>
            <Link href="/kennis/kosten-dakrenovatie-limburg" className="text-accent hover:underline">Kosten dakrenovatie</Link>
            <Link href="/kennis/dakrenovatie-premie-limburg" className="text-accent hover:underline">Premies dakrenovatie</Link>
          </div>
        </article>

        <section className="bg-primary py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-3">Asbestdak laten verwijderen in Limburg?</h2>
                <p className="text-blue-200 leading-relaxed">Wij verbinden u met erkende dakwerkers in Limburg die ook asbestverwijdering begeleiden. Gratis offerte binnen 24u.</p>
              </div>
              <LeadForm source="kennis-asbest" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
