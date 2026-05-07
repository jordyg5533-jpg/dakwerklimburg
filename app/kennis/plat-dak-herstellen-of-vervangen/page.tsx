import type { Metadata } from 'next';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DEFAULT_OG_IMAGES, DEFAULT_TWITTER_IMAGES } from '@/lib/seo';
import LeadForm from '@/components/forms/LeadForm';

export const metadata: Metadata = {
  title: 'Plat dak herstellen of vervangen? Wanneer wat kiezen (2025)',
  description: 'Plat dak herstellen of toch volledig vervangen? Ontdek wanneer een partiële herstelling volstaat en wanneer vervanging goedkoper uitkomt op lange termijn.',
  alternates: { canonical: 'https://dakwerklimburg.be/kennis/plat-dak-herstellen-of-vervangen' },
  openGraph: {
    title: 'Plat dak herstellen of vervangen? Wanneer wat kiezen | Dakwerk Limburg',
    description: 'Wanneer volstaat een herstelling en wanneer is volledige vervanging beter? Kosten, levensduur en beslissingsgids.',
    type: 'article', url: 'https://dakwerklimburg.be/kennis/plat-dak-herstellen-of-vervangen', images: DEFAULT_OG_IMAGES,
  },
  twitter: { card: 'summary_large_image', title: 'Plat dak herstellen of vervangen?', description: 'Wanneer herstellen en wanneer vervangen? Kosten en beslissingsgids.', images: DEFAULT_TWITTER_IMAGES },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Plat dak herstellen of vervangen? Wanneer wat kiezen',
  datePublished: '2025-05-07', dateModified: '2025-05-07',
  author: { '@type': 'Organization', name: 'Dakwerk Limburg' },
  publisher: { '@type': 'Organization', name: 'Dakwerk Limburg', url: 'https://dakwerklimburg.be' },
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Wat kost een plat dak herstellen?', acceptedAnswer: { '@type': 'Answer', text: 'Een kleine herstelling (dichtzetten van een naad, plaatselijk membraan plakken) kost €150 tot €500. Een grotere partiële herstelling (10-20 m²) kost €800 tot €2.500. Vraag altijd een plaatsbezoek aan — een goed uitgevoerde kleine herstelling is zinvol als het dak nog voldoende jaren mee kan.' } },
    { '@type': 'Question', name: 'Hoe weet ik of mijn plat dak lek is?', acceptedAnswer: { '@type': 'Answer', text: 'Typische signalen zijn vochtplekken op het plafond van de ruimte onder het platte dak, opbollen of blaarvorming in de dakbedekking, of zichtbare scheuren en naden. Na zware regen verschijnen lekken het snelst. Een dakwerker kan ook een watertest uitvoeren.' } },
    { '@type': 'Question', name: 'Wat is de levensduur van een plat dak?', acceptedAnswer: { '@type': 'Answer', text: 'Een EPDM plat dak gaat 30 tot 50 jaar mee. PVC-dakbedekking 20 tot 35 jaar. Bitumen (traditioneel) 15 tot 25 jaar. Na die periode is vervanging goedkoper dan steeds herstellingen blijven uitvoeren.' } },
    { '@type': 'Question', name: 'Kan ik een nieuw membraan over het oude plakken?', acceptedAnswer: { '@type': 'Answer', text: 'Dat hangt af van de staat van het bestaande dak en de dikte van de opbouw. In sommige gevallen is overcoating of een bijkomende laag mogelijk. Maar als het bestaande dak te veel tekortkomingen heeft, raadt een vakman verwijdering aan — een nieuwe laag over een slecht substraat is geen duurzame oplossing.' } },
    { '@type': 'Question', name: 'Hoe lang na vervanging heb ik garantie op een plat dak?', acceptedAnswer: { '@type': 'Answer', text: 'De meeste dakwerkers geven 10 jaar garantie op plaatsing. EPDM en PVC-materialen hebben vaak een productgarantie van 20 jaar. Vraag bij de offerte altijd naar de garantievoorwaarden — dit is een belangrijk selectiecriterium.' } },
  ],
};

const FAQ_ITEMS = [
  { q: 'Wat kost een plat dak herstellen?', a: 'Een kleine herstelling (dichtzetten van een naad, plaatselijk membraan plakken) kost €150 tot €500. Een grotere partiële herstelling (10-20 m²) kost €800 tot €2.500. Vraag altijd een plaatsbezoek aan — een goed uitgevoerde kleine herstelling is zinvol als het dak nog voldoende jaren mee kan.' },
  { q: 'Hoe weet ik of mijn plat dak lek is?', a: 'Typische signalen zijn vochtplekken op het plafond van de ruimte onder het platte dak, opbollen of blaarvorming in de dakbedekking, of zichtbare scheuren en naden. Na zware regen verschijnen lekken het snelst. Een dakwerker kan ook een watertest uitvoeren.' },
  { q: 'Wat is de levensduur van een plat dak?', a: 'Een EPDM plat dak gaat 30 tot 50 jaar mee. PVC-dakbedekking 20 tot 35 jaar. Bitumen (traditioneel) 15 tot 25 jaar. Na die periode is vervanging goedkoper dan steeds herstellingen blijven uitvoeren.' },
  { q: 'Kan ik een nieuw membraan over het oude plakken?', a: 'Dat hangt af van de staat van het bestaande dak en de dikte van de opbouw. In sommige gevallen is overcoating of een bijkomende laag mogelijk. Maar als het bestaande dak te veel tekortkomingen heeft, raadt een vakman verwijdering aan — een nieuwe laag over een slecht substraat is geen duurzame oplossing.' },
  { q: 'Hoe lang na vervanging heb ik garantie op een plat dak?', a: 'De meeste dakwerkers geven 10 jaar garantie op plaatsing. EPDM en PVC-materialen hebben vaak een productgarantie van 20 jaar. Vraag bij de offerte altijd naar de garantievoorwaarden — dit is een belangrijk selectiecriterium.' },
];

export default function PlatDakHerstellenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="bg-white">
        <section className="bg-primary text-white py-10 lg:py-14">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-center gap-2 text-sm text-blue-300 mb-4">
              <Link href="/kennis" className="hover:text-white transition-colors">Kenniscentrum</Link>
              <span>/</span><span className="text-white">Plat dak herstellen of vervangen</span>
            </div>
            <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">Materialen & Technieken</span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Plat dak herstellen of vervangen?<br /><span className="text-accent">Wanneer wat kiezen (2025)</span>
            </h1>
            <p className="text-blue-200 mt-4 text-lg">5 min leestijd · Bijgewerkt mei 2025</p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 py-10 lg:py-14">
          <p className="text-main text-lg leading-relaxed mb-8">
            Een plat dak dat lekt of verouderd is, stelt u voor een keuze: herstellen of volledig vervangen? Het antwoord hangt af van de leeftijd, de staat van het membraan en hoe lang u nog in uw woning wil blijven. Dit artikel helpt u de juiste beslissing nemen — en voorkomt dat u geld weggooit aan herstellingen die u toch niet van vervanging verlossen.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Wanneer volstaat herstellen?</h2>
          <p className="text-main leading-relaxed mb-4">Een partiële herstelling is zinvol als aan al deze voorwaarden is voldaan:</p>
          <ul className="space-y-2 mb-8">
            {[
              'Het dak is jonger dan 15-20 jaar (EPDM) of jonger dan 10-12 jaar (bitumen)',
              'Maximaal 15-20% van het dakoppervlak is aangetast of beschadigd',
              'De dakstructuur (hout, beton) is droog en intact',
              'Het gaat om een lokale beschadiging: een gescheurde naad, een losliggende rand, een dakraamaansluiting die lek is',
              'U heeft al eerder geen herstellingen laten uitvoeren',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-main text-sm">
                <span className="h-5 w-5 rounded-full bg-green-500 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Wanneer is vervanging de betere keuze?</h2>
          <ul className="space-y-2 mb-8">
            {[
              'Het dak is ouder dan 20-25 jaar (EPDM) of ouder dan 15 jaar (bitumen)',
              'Er zijn meerdere lekpunten verspreid over het dakvlak',
              'Het membraan vertoont blaarvorming, krimp of uitgebreide scheurvorming',
              'U heeft de afgelopen 5 jaar al meerdere herstellingen laten uitvoeren',
              'De dakisolatie is nat of beschadigd door vochtinfiltratie',
              'U plant een verbouwing of de woning staat te koop',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-main text-sm">
                <span className="h-5 w-5 rounded-full bg-accent text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Kostenvergelijking: herstellen vs. vervangen</h2>
          <div className="overflow-x-auto mb-8 rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Scenario</th>
                  <th className="text-left px-4 py-3 font-semibold">Kostprijs</th>
                  <th className="text-left px-4 py-3 font-semibold">Levensduur extra</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { scenario: 'Kleine herstelling (naad, rand)', kost: '€150 – €500', leven: '5 – 10 jaar*' },
                  { scenario: 'Partiële herstelling (10-20 m²)', kost: '€800 – €2.500', leven: '5 – 10 jaar*' },
                  { scenario: 'Overcoating bestaand dak', kost: '€20 – €35/m²', leven: '10 – 15 jaar' },
                  { scenario: 'Volledig vervangen (EPDM)', kost: '€50 – €80/m²', leven: '30 – 50 jaar' },
                  { scenario: 'Volledig vervangen (PVC)', kost: '€60 – €90/m²', leven: '20 – 35 jaar' },
                ].map((row) => (
                  <tr key={row.scenario} className="odd:bg-white even:bg-background">
                    <td className="px-4 py-3 text-main">{row.scenario}</td>
                    <td className="px-4 py-3 font-semibold text-primary">{row.kost}</td>
                    <td className="px-4 py-3 text-sub">{row.leven}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sub text-xs mb-8">* Alleen als de onderliggende oorzaak volledig opgelost is.</p>

          <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-5 mb-10">
            <p className="text-main text-sm leading-relaxed">
              <strong>Rekenvoorbeeld:</strong> Een bitumen dak van 40 m² dat 18 jaar oud is en al twee herstellingen gehad heeft. Opnieuw herstellen kost €600 maar lost het probleem niet structureel op. Volledig vervangen met EPDM kost €2.400 (40 m² × €60/m²) en gaat 30-50 jaar mee. De terugverdientijd is minder dan 3 jaar in vergelijking met jaarlijkse herstellingen.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Veelgestelde vragen over plat dak herstellen of vervangen</h2>
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
            <Link href="/diensten/plat-dak" className="text-accent hover:underline">Plat dak Limburg</Link>
            <Link href="/kennis/epdm-of-pvc-plat-dak" className="text-accent hover:underline">EPDM of PVC?</Link>
            <Link href="/kennis/kosten-dakrenovatie-limburg" className="text-accent hover:underline">Kosten dakrenovatie</Link>
          </div>
        </article>

        <section className="bg-primary py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-3">Twijfelt u: herstellen of vervangen?</h2>
                <p className="text-blue-200 leading-relaxed">Een erkende dakwerker bekijkt uw plat dak en adviseert u eerlijk. Geen onnodige vervanging als herstellen volstaat. Gratis plaatsbezoek in Limburg.</p>
              </div>
              <LeadForm source="kennis-plat-dak-herstellen" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
