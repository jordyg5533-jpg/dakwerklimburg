import type { Metadata } from 'next';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';
import LeadForm from '@/components/forms/LeadForm';

export const metadata: Metadata = {
  title: 'Leien dak: levensduur, kosten en onderhoud (2025)',
  description: 'Alles over een leien dak: levensduur van kunstleien vs. natuurleien, actuele prijzen per m², wanneer vervangen en hoe onderhouden.',
  alternates: { canonical: 'https://dakwerklimburg.be/kennis/leien-dak-levensduur-kosten' },
  openGraph: {
    title: 'Leien dak: levensduur, kosten en onderhoud 2025 | Dakwerk Limburg',
    description: 'Levensduur, kosten en onderhoud van kunstleien en natuurleien in Limburg.',
    type: 'article', url: 'https://dakwerklimburg.be/kennis/leien-dak-levensduur-kosten', images: DEFAULT_OG_IMAGES,
  },
  twitter: { card: 'summary_large_image', title: 'Leien dak: levensduur, kosten en onderhoud', description: 'Kunstleien vs. natuurleien — prijzen en levensduur.', images: DEFAULT_TWITTER_IMAGES },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Leien dak: levensduur, kosten en onderhoud (2025)',
  datePublished: '2025-05-07', dateModified: '2025-05-07',
  author: { '@type': 'Organization', name: 'Dakwerk Limburg' },
  publisher: { '@type': 'Organization', name: 'Dakwerk Limburg', url: 'https://dakwerklimburg.be' },
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hoe lang gaat een leien dak mee?', acceptedAnswer: { '@type': 'Answer', text: 'Kunstleien (fibrocementen leien) gaan gemiddeld 50 tot 80 jaar mee. Natuurleien van topkwaliteit kunnen meer dan 100 jaar standhouden. De levensduur hangt sterk af van de kwaliteit van de leien, de onderliggende dakconstructie en de kwaliteit van de plaatsing.' } },
    { '@type': 'Question', name: 'Wat kost een leien dak per m²?', acceptedAnswer: { '@type': 'Answer', text: 'Een leien dak met kunstleien kost gemiddeld €120 tot €180 per m² inclusief plaatsing en onderdak. Natuurleien kosten €170 tot €250 per m². De hogere aankoopprijs wordt gecompenseerd door de langere levensduur en het tijdloze uitzicht.' } },
    { '@type': 'Question', name: 'Wat is het verschil tussen kunstleien en natuurleien?', acceptedAnswer: { '@type': 'Answer', text: 'Kunstleien zijn gemaakt van fibrocemennt (vezels + cement) en zijn uniformer van kleur en formaat. Natuurleien zijn uit gesteente gewonnen (voornamelijk uit Spanje, Portugal of Wales) en hebben een authentieke, variabele uitstraling. Kunstleien zijn goedkoper maar hebben een kortere levensduur.' } },
    { '@type': 'Question', name: 'Wanneer moet ik mijn leien dak laten controleren?', acceptedAnswer: { '@type': 'Answer', text: 'Een leien dak controleert u best om de 10 jaar, of na zware storm. Tekens van slijtage zijn: afgebrokkelde randen, lichtdoorlatende plekken zichtbaar vanuit de zolder, verschoven of gebroken leien, en oxidatievlekken op de gevel door aflopend dakwater.' } },
    { '@type': 'Question', name: 'Mag ik wandelen op een leien dak?', acceptedAnswer: { '@type': 'Answer', text: 'Dat wordt sterk afgeraden. Leien breken makkelijk onder menselijk gewicht. Voor inspectie- of onderhoudswerken gebruikt een dakwerker dakloopplanken die het gewicht spreiden. Vermijd zelf op het dak te gaan zonder de juiste uitrusting.' } },
  ],
};

const FAQ_ITEMS = [
  { q: 'Hoe lang gaat een leien dak mee?', a: 'Kunstleien (fibrocementen leien) gaan gemiddeld 50 tot 80 jaar mee. Natuurleien van topkwaliteit kunnen meer dan 100 jaar standhouden. De levensduur hangt sterk af van de kwaliteit van de leien, de onderliggende dakconstructie en de kwaliteit van de plaatsing.' },
  { q: 'Wat kost een leien dak per m²?', a: 'Een leien dak met kunstleien kost gemiddeld €120 tot €180 per m² inclusief plaatsing en onderdak. Natuurleien kosten €170 tot €250 per m². De hogere aankoopprijs wordt gecompenseerd door de langere levensduur en het tijdloze uitzicht.' },
  { q: 'Wat is het verschil tussen kunstleien en natuurleien?', a: 'Kunstleien zijn gemaakt van fibrocemennt (vezels + cement) en zijn uniformer van kleur en formaat. Natuurleien zijn uit gesteente gewonnen (voornamelijk uit Spanje, Portugal of Wales) en hebben een authentieke, variabele uitstraling. Kunstleien zijn goedkoper maar hebben een kortere levensduur.' },
  { q: 'Wanneer moet ik mijn leien dak laten controleren?', a: 'Een leien dak controleert u best om de 10 jaar, of na zware storm. Tekens van slijtage zijn: afgebrokkelde randen, lichtdoorlatende plekken zichtbaar vanuit de zolder, verschoven of gebroken leien, en oxidatievlekken op de gevel door aflopend dakwater.' },
  { q: 'Mag ik wandelen op een leien dak?', a: 'Dat wordt sterk afgeraden. Leien breken makkelijk onder menselijk gewicht. Voor inspectie- of onderhoudswerken gebruikt een dakwerker dakloopplanken die het gewicht spreiden. Vermijd zelf op het dak te gaan zonder de juiste uitrusting.' },
];

export default function LeiendakPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="bg-white">
        <section className="bg-primary text-white py-10 lg:py-14">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-center gap-2 text-sm text-blue-300 mb-4">
              <Link href="/kennis" className="hover:text-white transition-colors">Kenniscentrum</Link>
              <span>/</span><span className="text-white">Leien dak</span>
            </div>
            <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">Materialen & Technieken</span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Leien dak in Limburg<br /><span className="text-accent">Levensduur, kosten en onderhoud (2025)</span>
            </h1>
            <p className="text-blue-200 mt-4 text-lg">6 min leestijd · Bijgewerkt mei 2025</p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 py-10 lg:py-14">
          <p className="text-main text-lg leading-relaxed mb-8">
            Een leien dak is een van de meest tijdloze en duurzame dakbedekkingen. In Limburg vindt u leien daken vooral op oudere herenhuizen, rijwoningen en woningen in historische stadskernen. Maar ook bij nieuwbouw kiezen steeds meer mensen voor leien vanwege het chique uitzicht. In dit artikel leest u alles over de levensduur, kosten en wanneer uw leien dak aan vervanging toe is.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Kunstleien vs. natuurleien: de belangrijkste verschillen</h2>
          <div className="overflow-x-auto mb-8 rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Eigenschap</th>
                  <th className="text-center px-4 py-3 font-semibold">Kunstleien</th>
                  <th className="text-center px-4 py-3 font-semibold">Natuurleien</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {[
                  { prop: 'Materiaal', kunst: 'Fibrocemennt', natuur: 'Gesteente (leisteen)' },
                  { prop: 'Levensduur', kunst: '50 – 80 jaar', natuur: '80 – 100+ jaar' },
                  { prop: 'Prijs per m²', kunst: '€120 – €180', natuur: '€170 – €250' },
                  { prop: 'Uitzicht', kunst: 'Uniform, strak', natuur: 'Variabel, authentiek' },
                  { prop: 'Gewicht', kunst: 'Licht (20-25 kg/m²)', natuur: 'Zwaarder (35-45 kg/m²)' },
                  { prop: 'Onderhoud', kunst: 'Weinig', natuur: 'Weinig' },
                  { prop: 'Milieu-impact', kunst: 'Matig', natuur: 'Laag (natuursteen)' },
                ].map((row) => (
                  <tr key={row.prop} className="odd:bg-white even:bg-background">
                    <td className="px-4 py-3 font-medium text-primary">{row.prop}</td>
                    <td className="px-4 py-3 text-center text-main">{row.kunst}</td>
                    <td className="px-4 py-3 text-center text-main">{row.natuur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Wanneer uw leien dak vervangen?</h2>
          <p className="text-main leading-relaxed mb-4">Een leien dak gaat lang mee, maar niet eeuwig. Dit zijn de signalen dat vervanging nodig is:</p>
          <div className="space-y-3 mb-8">
            {[
              { signaal: 'Oxidatievlekken op gevel en dakrand', uitleg: 'Roestsporen van gegalvaniseerde spijkers die slijten — een teken dat de spijkers loslaten en leien kunnen verschuiven.' },
              { signaal: 'Afgebrokkelde of schilferende leien randen', uitleg: 'Verwering van de lei zelf, niet enkel van de bevestiging. Dit wijst op het einde van de levensduur van het materiaal.' },
              { signaal: 'Daglicht zichtbaar vanuit de zolder', uitleg: 'Lichtinval door gaten of scheuren betekent dat water evengoed naar binnen kan.' },
              { signaal: 'Meer dan 15% van de leien is beschadigd', uitleg: 'Op dat punt is partieel vervangen duurder dan een volledig nieuw dakdek.' },
              { signaal: 'Dak ouder dan 50 jaar (kunstleien) of 80 jaar (natuurleien)', uitleg: 'Ook als er geen zichtbare schade is, loopt u het risico op plotse massale problemen.' },
            ].map((item) => (
              <div key={item.signaal} className="flex gap-4 p-4 bg-background rounded-xl border border-gray-100">
                <span className="text-accent font-bold text-lg flex-shrink-0 mt-0.5">!</span>
                <div><p className="font-semibold text-primary text-sm">{item.signaal}</p><p className="text-main text-sm leading-relaxed mt-1">{item.uitleg}</p></div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Kosten leien dak vernieuwen in Limburg</h2>
          <div className="overflow-x-auto mb-6 rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Type werk</th>
                  <th className="text-left px-4 py-3 font-semibold">Prijs per m²</th>
                  <th className="text-left px-4 py-3 font-semibold">Voorbeeld 80 m²</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { werk: 'Kunstleien vernieuwen (volledig)', prijs: '€120 – €180', voorbeeld: '€9.600 – €14.400' },
                  { werk: 'Natuurleien vernieuwen (volledig)', prijs: '€170 – €250', voorbeeld: '€13.600 – €20.000' },
                  { werk: 'Partieel herstellen (tot 15 m²)', prijs: '€150 – €220', voorbeeld: 'vast bedrag' },
                  { werk: 'Dakisolatie toevoegen (sarking)', prijs: '€30 – €60', voorbeeld: '€2.400 – €4.800' },
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

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Veelgestelde vragen over leien daken</h2>
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
            <Link href="/kennis/wanneer-dak-vervangen" className="text-accent hover:underline">Wanneer dak vervangen?</Link>
            <Link href="/kennis/kosten-dakrenovatie-limburg" className="text-accent hover:underline">Kosten dakrenovatie</Link>
          </div>
        </article>

        <section className="bg-primary py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-3">Leien dak laten vernieuwen in Limburg?</h2>
                <p className="text-blue-200 leading-relaxed">Erkende dakwerkers in Limburg gespecialiseerd in zowel kunst- als natuurleien. Gratis offerte binnen 24u.</p>
              </div>
              <LeadForm source="kennis-leien-dak" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
